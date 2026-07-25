export function otp_template(otp) {
    return `
    <div style="font-family: sans-serif; max-width: 480px; margin: auto;">
      <h2>Verify your email</h2>
      <p>Your OTP code is:</p>
      <h1 style="letter-spacing: 4px;">${otp}</h1>
      <p>This code will expire in 5 minutes. If you didn't request this, you can ignore this email.</p>
    </div>
  `;
}