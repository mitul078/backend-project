import sharp from "sharp";
import path from "path"
import { image_queue } from "../queues/queues.js";

const SIZES = {
    thumbnail: 150,
    medium: 500,
    large: 1200
}

export async function resize_image(input_path) {

    const folder = path.dirname(input_path)
    const result = {}

    for (const [label, width] of Object.entries(SIZES)) {
        const output_path = path.join(folder, `${label}.webp`)

        const file = await sharp(input_path)
            .resize({ width, withoutEnlargement: true })
            .webp({ quality: 80 })
            .toFile(output_path)

        result[label] = output_path
    }


    return result

}