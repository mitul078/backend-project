import app from "./app.js";
import connectDB from "./infra/db.js";
import env from "./shared/config/index.js";

async function bootstrap() {
    await connectDB()

    app.listen(env.port, () => {
        console.log("SERVER RUNNING ON...")
    })

}

bootstrap().catch(e => {
    console.error("FAILED TO START SERVER")
    process.exit(1)

})