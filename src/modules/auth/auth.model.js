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

export const Auth = mongoose.model("Auth", authSchema)
export const Otp = mongoose.model("Otp", otpSchema)