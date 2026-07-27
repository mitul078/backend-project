import "dotenv/config"

function required(key) {
    const value = process.env[key];
    if (!value) {
        throw new Error(`MISSING ENV VARIABLE: ${key}`);
    }
    return value;
}

const env = {
    port: process.env.PORT || 4000,
    env: process.env.ENV || "development",

    db: {
        mongoUri: required("MONGO_URI")
    },

    auth: {
        refreshToken: required("REFRESH_TOKEN"),
        accessToken: required("ACCESS_TOKEN"),
        refreshTokenExpiry: required("REFRESH_EXPIRY"),
        accessTokenExpiry: required("ACCESS_EXPIRY")
    },

    // redis: {
    //     redisUrl: required("REDIS_URL")
    // },

    mail: {
        host: required("MAIL_HOST"),
        password: required("MAIL_PASSWORD"),
        user: required("MAIL_USER"),
        port: required("MAIL_PORT"),
        from: required("MAIL_FROM")

    }

}

export default env