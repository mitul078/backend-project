import Product from "./product.model.js"

async function save_product({ name, price, quantity, status, userId, category, images = [] }) {
    return await Product.create({
        userId,
        name,
        quantity,
        status,
        category,
        images,
        price
    })
}

async function list_product(userId, cursor, limit = 10) {

    let filter = { userId }
    if (cursor) {
        filter._id = { $gt: cursor }
    }

    const products = await Product.find(filter).sort({ _id: 1 }).limit(limit)
    const next_cursor = products.length > 0 ? products[products.length - 1]._id : null

    return { products, next_cursor }

}

async function product_by_id(productId, userId) {
    return Product.findOne({ _id: productId, userId })
}

async function upload_images(productId, images) {
    return Product.findOneAndUpdate({ _id: productId }, { images, status: "DRAFT" }, { new: true })
}

async function remove_product(productId) {
    return Product.deleteOne({ _id: productId })
}

async function set_status(productId, status) {
    return Product.findByIdAndUpdate(productId, { status }, { new: true })
}

async function update_product({ productId, userId, name, price, quantity, category, images = [] }) {
    let updated_data = {}
    if (name !== undefined) updated_data.name = name
    if (price !== undefined) updated_data.price = price
    if (quantity !== undefined && quantity > 0) updated_data.quantity = quantity
    if (category !== undefined) updated_data.category = category
    if (images !== undefined && images.length > 0) updated_data.images = images

    return Product.findOneAndUpdate({ _id: productId, userId }, updated_data, { new: true })
}


export default {
    save_product,
    list_product,
    product_by_id,
    upload_images,
    remove_product,
    update_product,
    set_status
}