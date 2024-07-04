import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.DOMAIN;

export const sendTwoFactorTokenEmail = async (
  email: string,
  token: string
) => {
  await resend.emails.send({
    from: "nmbd@resend.dev",
    to: email,
    subject: "2FA Code",
    html: `<p>Your 2FA code: ${token}</p>`
  });
};

export const sendPasswordResetEmail = async (
  email: string,
  token: string,
) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`

  await resend.emails.send({
    from: "nmbd@resend.dev",
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`
  });
};

export const sendVerificationEmail = async (
  email: string, 
  token: string
) => {
  console.log("Preparing to send verification email to:", email); // Log before sending email
  try {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`;
    console.log("Generated confirmation link:", confirmLink); // Log after generating the confirmation link

    // Enhanced logging to include the confirmation link for debugging purposes
    console.log(`Confirmation link for ${email}: ${confirmLink}`);

    console.log("Sending email to:", email); // Log before attempting to send the email
    // Log the email details being sent for debugging purposes
    console.log(`Email details: From: nmbd@resend.dev, To: ${email}, Subject: Confirm your email`);

    await resend.emails.send({
      from: "nmbd@resend.dev",
      to: email,
      subject: "Confirm your email",
      html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`
    });
    console.log("Verification email sent successfully to:", email); // Log after email is sent successfully

    // Additional log to confirm the successful email sending operation
    console.log(`Email successfully sent to ${email} with token ${token}`);
  } catch (error: any) {
    console.error("Failed to send verification email:", error); // Log on catching an error
    
    // Enhanced error logging to provide more context about the failure
    console.error(`Error details: ${error.message}`);
    
    // Consider rethrowing the error or handling it based on your application's needs
  }
};