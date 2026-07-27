import mongoose from "mongoose";
import env from "../shared/config/index.js";
import logger from "./logs/logger.js";

export default async function connectDB() {
    try {

        await mongoose.connect(env.db.mongoUri)
        logger.info("DATABASE CONNECTED")

    } catch (error) {
        logger.error("DATABASE ERROR", { error })
        throw error
    }
}