import connectDB from "./infra/db.js";
import logger from "./infra/logs/logger.js";
import "./modules/product/jobs/image_processing.worker.js";

async function bootstrap() {
    await connectDB()
    logger.info("LOGGER STARTED AND LISTENING FOR JOBS")

}

bootstrap().catch(e => {
    logger.error("WORKER FAILED TO START", { error: e })
    process.exit(1)

})