import jwt from "jsonwebtoken"
import env from "../config/index.js"
import { UnauthorizedError } from "../errors"

export default function authenticate(req, res, next) {
    const auth_header = req.headers.authorization
    if (!auth_header?.startsWith("Bearer")) {
        return next(new UnauthorizedError("SIGN IN TO ACCESS RESOURCES"))
    }

    const token = auth_header.split(" ")[1]
    try {

        const decode = jwt.verify(token, env.auth.accessToken)
        req.user = decode
        next()

    } catch (error) {
        next(new UnauthorizedError("INVALID TOKEN,PLEASE SIGN IN AGAIN"))

    }
}