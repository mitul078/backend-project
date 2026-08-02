import { Queue } from "bullmq";
import connection from "./connection.js";

export const image_queue = new Queue("image-processing", { connection })