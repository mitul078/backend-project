import { Worker } from "bullmq";
import { resize_image } from "../../../infra/image/resize.js";
import productRepository from "../product.repository.js";
import logger from "../../../infra/logs/logger.js";
import connection from "../../../infra/queues/connection.js";

const image_worker = new Worker("image-processing", async (job) => {
    const { productId, filePath } = job.data

    const resized_image = await resize_image(filePath)
    await productRepository.upload_images(productId, [resized_image])

    logger.info("IMAGE PROCESSED FOR PRODUCT: ", productId)

}, { connection })

image_worker.on("failed", (job, err) => {
    logger.error("IMAGE JOB FAILED", { error: err })
})

export default image_worker