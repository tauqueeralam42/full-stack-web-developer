import User from "../model/User.model.js";
import sendVerificationEmail from "../util/sendEmail.js";
import crypto from "crypto";

import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const exixtsUser = await User.findOne({ email });
        if (exixtsUser) {
            return res.status(400).json({ error: "User already exists" });
        }
        const user = await User.create({
            name,
            email,
            password,
        });

        if (!user) {
            return res.status(400).json({ error: "User not created" });
        }
        console.log(user);

        const token = crypto.randomBytes(32).toString("hex");
        console.log(token);

        user.verificationToken = token;
        await user.save();
        console.log("verification token saved in db");

        const message = `Please verify your email by clicking on the link below`;
        const info = await sendVerificationEmail(email, token, message);

        console.log("Message sent: %s", info.messageId);

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            err: error.message,
            error: "Error in user registration",
        });
    }
};

const verifyUser = async (req, res) => {
    const { token } = req.params;

    console.log("Token from params: ", token);

    if (!token) {
        return res.status(400).json({ error: "Token is required" });
    }

    try {
        const user = await User.findOne({ verificationToken: token });

        console.log(user);

        if (!user) {
            return res.status(400).json({ error: "Invalid token" });
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        await user.save();

        console.log("User verified successfully");

        res.status(200).json({
            success: true,
            message: "User verified successfully",
            user: {
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            err: error.message,
            error: "Error in user verification",
        });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    console.log("Email: ", email);
    console.log("Password: ", password);

    if (!email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid Email or Password" });
        }

        if (!user.isVerified) {
            return res.status(400).json({ error: "User not verified" });
        }

        const jwtToken = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRY }
        );

        res.cookie("token", jwtToken, {
            httpOnly: true,
            secure: true,
            expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day
        });


        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            token: jwtToken,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            err: error.message,
            error: "Error in user login",
        });
    }
};

const logoutUser = async (req, res) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
    });

    res.status(200).json({
        success: true,
        message: "User logged out successfully",
    });
};

const getUser = async (req, res) => {
    console.log("User: ", req.user);
    const userId = req.user.id;

    try {
        const user = await User.findById(userId).select("-password -verificationToken -resetPasswordToken -resetPasswordExpiry");

        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            user,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            err: error.message,
            error: "Error in fetching user",
        });
    }
};

const forgotPassword = async (req, res) => {
    const {email} = req.body;

    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }

    try {
        
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        const token = crypto.randomBytes(32).toString("hex");
        user.resetPasswordToken = token;
        user.resetPasswordExpiry = Date.now() + 15 * 60 * 1000; // 15 minutes
        await user.save();
        console.log("Reset password token saved in db");

        const message = `Please reset your password by clicking on the link below`;
        const info = await sendVerificationEmail(email, token, message);

        console.log("Message sent: %s", info.messageId);

        res.status(200).json({
            success: true,
            message: "Reset password email sent successfully",
            token: token,
            user: {
                name: user.name,
                email: user.email,
            },
        });


    } catch (error) {
        console.error(error);
        return res.status(500).json({
            err: error.message,
            error: "Error in user verification",
        });
        
    }
}

const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    if (!token || !password) {
        return res.status(400).json({ error: "Token and password are required" });
    }

    try {
        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpiry: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(400).json({ error: "Invalid or expired token" });
        }

        user.password = password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpiry = undefined;
        await user.save();

        res.status(200).json({
            success: true,
            message: "Password reset successfully",
            user: {
                name: user.name,
                email: user.email,
                password
            },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            err: error.message,
            error: "Error in resetting password",
        });
    }
}


export {
    registerUser,
    verifyUser,
    loginUser,
    logoutUser,
    getUser,
    forgotPassword,
    resetPassword
};
