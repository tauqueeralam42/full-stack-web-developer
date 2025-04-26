import User from "../model/User.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer"

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(404).json({
      message: "Invalid Credintials",
    });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    const user = new User({
      name,
      email,
      password,
    });

    const token = crypto.randomBytes(32).toString("hex");
    user.verificationToken = token;
    const saveUser = await user.save();

    // Looking to send emails in production? Check out our Email API/SMTP product!
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "9b79e852c025bd",
        pass: "511efb5d2d114a",
      },
    });

    const info = await transporter.sendMail({
        from: 'sandbox.smtp.mailtrap.io', // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

    return res.status(200).json({
      message: "User is created successfully",
      user: saveUser,
    });
  } catch (err) {
    return res.status(400).json({
      message: "User registration failed",
      error: err.message,
    });
  }
};

export { registerUser };
