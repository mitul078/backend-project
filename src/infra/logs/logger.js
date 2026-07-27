import winston from "winston";
import env from "../../shared/config/index.js";

const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    defaultMeta: { service: "backend-internship-project" },
    transports: [
        new winston.transports.File({ filename: "logs/error.log", level: "error" }),
        new winston.transports.File({ filename: "logs/combined.log" })
    ]
})

if (env.env !== "production") {
    logger.add(
        new winston.transports.Console({
            format: winston.format.simple()
        })
    )
}

export default logger
