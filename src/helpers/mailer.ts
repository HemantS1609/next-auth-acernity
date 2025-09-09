import sgMail from "@sendgrid/mail";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

interface SendEmailProps {
  email: string;
  emailType: "VERIFY" | "RESET";
  userId: string;
}

export const sendEmail = async ({
  email,
  emailType,
  userId,
}: SendEmailProps): Promise<{ success: boolean }> => {
  try {
    //Create hash token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    //Save token in user model
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000, // 1 hour
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    //Prepare email content
    const link = `${process.env.DOMAIN}/${
      emailType === "VERIFY" ? "verifyemail" : "reset-password"
    }?token=${hashedToken}`;

    const subject =
      emailType === "VERIFY" ? "Verify Your Email" : "Reset Your Password";

    const html = `
      <p>Click <a href="${link}">here</a> to ${
      emailType === "VERIFY" ? "verify your email" : "reset your password"
    }</p>
      <p>Or copy this link: ${link}</p>
    `;

    //end email via SendGrid
    await sgMail.send({
      from: process.env.SENDGRID_FROM!,
      to: email,
      subject,
      html,
    });

    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Unexpected error while sending email");
  }
};
// Mailtrap API integration

// import nodemailer from "nodemailer";
// import User from "@/models/userModel";
// import bcryptjs from "bcryptjs";
// import resend from "resend";

// export const sendEmail = async ({ email, emailType, userId }: any) => {
//   try {
//     //create hash token
//     const hashedToken = await bcryptjs.hash(userId.toString(), 10);

//     if (emailType === "VERIFY") {
//       await User.findByIdAndUpdate(userId, {
//         verifyToken: hashedToken,
//         verifyTokenExpiry: Date.now() + 3600000,
//       });
//     } else if (emailType === "RESET") {
//       await User.findByIdAndUpdate(userId, {
//         forgotPasswordToken: hashedToken,
//         forgotPasswordTokenExpiry: Date.now() + 3600000,
//       });
//     }
//     // Looking to send emails in production? Check out our Email API/SMTP product!
//     var transport = nodemailer.createTransport({
//       host: process.env.EMAIL_HOST,
//       port: Number(process.env.EMAIL_PORT),
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: "hemantsonar1609@gmail.com",
//       to: email,
//       subject:
//         emailType === "VERIFY" ? "Verify your email" : "Reset your password",
//       html: `<p>Click <a href="${process.env.DOMAIN}/${
//         emailType === "VERIFY" ? "verifyemail" : "reset-password"
//       }?token=${hashedToken}">
//     here</a> to ${
//       emailType === "VERIFY" ? "verify your email" : "reset your password"
//     }
//     <br/>Or copy this link: ${process.env.DOMAIN}/${
//         emailType === "VERIFY" ? "verifyemail" : "reset-password"
//       }?token=${hashedToken}
//   </p>`,
//     };

//     const mailResponse = await transport.sendMail(mailOptions);
//     return mailResponse;
//   } catch (error: any) {
//     throw new Error(error.message);
//   }
// };

// Resend API integration

// import nodemailer from "nodemailer";
// import User from "@/models/userModel";
// import bcryptjs from "bcryptjs";
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY!);

// export const sendEmail = async ({ email, emailType, userId }: any) => {
//   try {
//     const hashedToken = await bcryptjs.hash(userId.toString(), 10);

//     if (emailType === "VERIFY") {
//       await User.findByIdAndUpdate(userId, {
//         verifyToken: hashedToken,
//         verifyTokenExpiry: Date.now() + 3600000,
//       });
//     } else if (emailType === "RESET") {
//       await User.findByIdAndUpdate(userId, {
//         forgotPasswordToken: hashedToken,
//         forgotPasswordTokenExpiry: Date.now() + 3600000,
//       });
//     }

//     const link = `${process.env.DOMAIN}/${
//       emailType === "VERIFY" ? "verifyemail" : "reset-password"
//     }?token=${hashedToken}`;

//     const subject =
//       emailType === "VERIFY" ? "Verify your email" : "Reset your password";

//     const html = `
//       <p>Click <a href="${link}">here</a> to ${
//       emailType === "VERIFY" ? "verify your email" : "reset your password"
//     }</p>
//       <p>Or copy this link: ${link}</p>
//     `;
//     console.log("sass", {
//       from: "onboarding@resend.dev",
//       to: email,
//       subject: subject,
//       html: html,
//     });
//     await resend.emails.send({
//       from: "onboarding@resend.dev",
//       to: email,
//       subject: subject,
//       html: html,
//     });

//     return { success: true };
//   } catch (error: any) {
//     throw new Error(error.message);
//   }
// };
