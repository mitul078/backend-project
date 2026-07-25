import authService from "./auth.service.js";
import ApiResponse from "../../shared/utils/api_response.js";

export const signup = async (req, res, next) => {
    try {
        const { email, password } = req.body
        console.log(req.body)
        const user = await authService.signup({ email, password })
        return res.status(201).json(new ApiResponse(user, "SIGNUP DONE"))

    } catch (error) {
        next(error)
    }
}

export const verify_otp = async (req, res , next) => {
    try {

        const { email, otp } = req.body
        const result = await authService.verify_otp({ email, otp })

        return res.status(200).json(new ApiResponse(result, "VERIFICATION DONE"))

    } catch (error) {
        next(error)

    }
}