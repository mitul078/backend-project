
import authRepository from "./auth.repository.js"
import { ConflictError, NotFoundError, ValidationError } from "../../shared/errors/index.js"
import bcrypt from "bcrypt"
import generate_otp from "../../shared/utils/otp_generate.js"
import { send_email } from "../../infra/mail/mailer.js"
import { otp_template } from "../../infra/mail/templates/otp.js"

async function signup({ email, password }) {
    const existing_user = await authRepository.find_by_email(email)
    if (existing_user) {
        throw new ConflictError("EMAIL ALREADY EXISTS")
    }

    const hash_password = await bcrypt.hash(password, 10)
    const user = await authRepository.create_user({ email, password: hash_password })

    const otp = generate_otp()
    console.log("OTP IS:", otp)
    const hash_otp = await bcrypt.hash(String(otp), 10)
    await authRepository.save_otp({ email, otp: hash_otp })

    await send_email({
        to: email,
        subject: "Verify your email",
        html: otp_template(otp)
    }).catch((err) => console.error("EMAIL SENT FAILED"))


    return { id: user._id, email: user.email }
}

async function verify_otp({ email, otp }) {
    const otp_record = await authRepository.find_otp(email)
    if (!otp_record) {
        throw new NotFoundError("OTP NOT FOUND")
    }

    const decode_otp = await bcrypt.compare(String(otp), otp_record.otp)
    if (!decode_otp) {
        throw new ValidationError("INVALID OTP")
    }

    await authRepository.set_email_verified(email)
    await authRepository.delete_otp(email)

    return { message: "VERIFICATION DONE" }
}

export default {
    signup, verify_otp
}