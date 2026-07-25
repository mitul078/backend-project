import { Auth, Otp } from "./auth.model.js";

async function find_by_email(email) {
    return Auth.findOne({ email }).select("+password")
}

async function create_user({ email, password }) {
    return Auth.create({ email, password })
}

async function set_email_verified(email) {
    return Auth.findOneAndUpdate({ email }, { isVerified: true }, { new: true })
}

async function save_otp({email, otp}) {
    return Otp.findOneAndUpdate({ email }, { otp }, { upsert: true, new: true })
}

async function find_otp(email) {
    return Otp.findOne({ email })
}

async function delete_otp(email) {
    return Otp.deleteOne({ email })
}

export default {
    find_by_email,
    create_user,
    set_email_verified,
    save_otp,
    find_otp,
    delete_otp
}