import express from "express"
import morgan from "morgan"
import errorHandler from "./shared/middlewares/error_handler.js"
import { authRoutes } from "./modules/auth/index.js"
import cookieParser from "cookie-parser"

const app = express()
app.use(express.json())
app.use(cookieParser())


app.use(morgan("dev"))

app.use("/api/v1/auth", authRoutes)
app.use(errorHandler)

export default app