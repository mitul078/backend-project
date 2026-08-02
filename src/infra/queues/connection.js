import { Redis } from "ioredis";
import env from "../../shared/config/index.js";

const connection = new Redis(env.redis.url, {
    maxRetriesPerRequest: null
})

export default connection