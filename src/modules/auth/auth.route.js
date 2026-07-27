import { Router } from "express"
import { rotate_refresh_token, signin, signout, signup, verify_otp } from "./auth.controller.js"


const router = Router()

router.post("/signup",signup)
router.post("/verify-otp",verify_otp)
router.post("/signin" , signin)
router.post("/refresh" , rotate_refresh_token)
router.post("/signout" , signout)

export default router