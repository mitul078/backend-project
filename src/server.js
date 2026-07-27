import app from "./app.js";
import connectDB from "./infra/db.js";
import logger from "./infra/logs/logger.js";
import env from "./shared/config/index.js";

async function bootstrap() {
    await connectDB()

    app.listen(env.port, () => {
        logger.info("SERVER CONNECTED")
    })

}

bootstrap().catch(e => {
    logger.warn("SERVER FAILED TO START")
    process.exit(1)

})