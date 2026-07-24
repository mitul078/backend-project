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

    db: {
        mongoUri: required("MONGO_URI")
    },

    auth: {
        jwtSecret: required("JWT_SECRET"),
        refreshToken: required("REFRESH_TOKEN"),
        accessToken: required("ACCESS_TOKEN")
    },

    redis: {
        redisUrl: required("REDIS_URL")
    }

}

export default env