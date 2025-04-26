import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const sendVerificationEmail = async (email, token, message) => {
  // Send verification email
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_TRAP_HOST,
    port: process.env.MAIL_TRAP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_TRAP_USER, // generated ethereal user
      pass: process.env.MAIL_TRAP_PASS, // generated ethereal password
    },
  });

  // verify connection configuration
  const option = {
    from: process.env.MAIL_TRAP_SENDERMAIL, // sender address
    to: email, // list of receivers
    subject: "Verification Token", // Subject line
    text: `${message}:\n${process.env.BASE_URL}/api/v1/users/verify/${token}`, // plain text body
    html: `<b>${message}:</b>
<a href=${process.env.BASE_URL}/api/v1/users/verify/${token}>click</a>`, // html body
  };

  try {
    const info = await transporter.sendMail(option);
    console.log("Email sent successfully");
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendVerificationEmail;