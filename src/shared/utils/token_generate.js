import jwt from "jsonwebtoken"
import crypto from "crypto"
import env from "../config/index.js"

export function hash_token(token) {
    return crypto.createHash("sha256").update(token).digest("hex")
}

export function generate_family_id() {
    return crypto.randomUUID()
}

export function set_access_token(payload) {
    return jwt.sign(payload, env.auth.accessToken, {
        expiresIn: env.auth.accessTokenExpiry
    })
}

export function set_refresh_token(payload) {
    return jwt.sign(payload, env.auth.refreshToken, {
        expiresIn: env.auth.refreshTokenExpiry
    })
}

export function verify_refresh_token(token) {
    return jwt.verify(token, env.auth.refreshToken)
}