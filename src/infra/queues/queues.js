import { Queue } from "bullmq";
import connection from "./connection.js";

export const image_queue = new Queue("image-processing", { connection })
export const email_queue = new Queue("email-processing", { connection })