import multer from "multer";
import fs from "fs"


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const upload_path = `uploads/products/${req.user.id}/${req.params.productId}`
        fs.mkdirSync(upload_path, { recursive: true })
        cb(null, upload_path);
    },

    filename: function (req, file, cb) {
        const file_name = Date.now() + "-" + file.originalname;
        cb(null, file_name)
    }

})

const upload = multer({ storage })
export default upload

