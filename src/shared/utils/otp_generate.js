function generate_otp() {
    console.log("OTP GENERATED....")
    return Math.floor(100000 + Math.random() * 900000)
}

export default generate_otp