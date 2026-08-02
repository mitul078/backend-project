import { Redis } from "ioredis";
import env from "../shared/config/index.js";
import logger from "./logs/logger.js";

const redisClient = new Redis(env.redis.url)

redisClient.on("connect", () => {
    logger.info("REDIS CONNECTED")
})

redisClient.on("error", (err) => {
    logger.error("REDIS ERROR: ", { err })
})


export default redisClient

