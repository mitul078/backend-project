import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    isVerified: { type: Boolean, default: false },
    password: { type: String, select: false },
})

const otpSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    otp: { type: String },
    createdAt: { type: Date, default: Date.now, expires: 300 }
})

const refreshTokenSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Auth", required: true },
    refreshToken: { type: String, required: true },
    family: { type: String, required: true },
    isRevoked: { type: Boolean, default: false },
    expiresAt: { type: Date, required: true }
}, { timestamps: true })

//index
refreshTokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 })

//exports
export const Auth = mongoose.model("Auth", authSchema)
export const Otp = mongoose.model("Otp", otpSchema)
export const RefreshToken = mongoose.model("RefreshToken", refreshTokenSchema)