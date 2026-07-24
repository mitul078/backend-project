import mongoose from "mongoose";
import env from "../shared/config/index.js";

export default async function connectDB() {
    try {

        await mongoose.connect(env.db.mongoUri)
        console.log("CONNECTED TO DB")

    } catch (error) {
        throw error
    }
}