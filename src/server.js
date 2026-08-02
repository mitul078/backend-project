import app from "./app.js";
import connectDB from "./infra/db.js";
import logger from "./infra/logs/logger.js";
import "./infra/redis.js";
import env from "./shared/config/index.js";

async function bootstrap() {
    await connectDB()

    app.listen(env.port, () => {
        logger.info("SERVER CONNECTED")
    })

}

bootstrap().catch(e => {
    logger.error("SERVER FAILED TO START", { error: e })
    process.exit(1)

})