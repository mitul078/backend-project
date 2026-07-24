import express from "express"
import morgan from "morgan"
import errorHandler from "./shared/middlewares/errorHandler.js"

const app = express()

app.use(morgan("dev"))

app.use(errorHandler())

export default app