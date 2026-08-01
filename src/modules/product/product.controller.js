import ApiResponse from "../../shared/utils/api_response.js";
import productService from "./product.service.js";

async function create_product(req, res, next) {
    try {

        const { name, price, quantity, category } = req.body
        const { id: userId } = req.user

        const product = await productService.create_product({ userId, name, price, quantity, category })

        return res.status(201).json(new ApiResponse(product, "PRODUCT CREATED..."))

    } catch (error) {
        next(error)

    }
}

async function upload_image(req, res, next) {
    try {

        const { productId } = req.params
        const { id: userId } = req.user

        const result = await productService.put_images(productId, userId, req.file.path)


        return res.status(200).json({ result })


    } catch (error) {
        next(error)

    }
}

export default {
    create_product,
    upload_image

}