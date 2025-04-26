import express from "express";
const router = express.Router();

import { registerUser,verifyUser, loginUser, logoutUser, getUser, forgotPassword, resetPassword } from "../controller/user.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";


router.post("/register", registerUser);
router.get("/verify/:token", verifyUser);
router.post("/login", loginUser);
router.get("/logout",isLoggedIn, logoutUser);
router.get("/me", isLoggedIn, getUser); 
router.post("/forgot-password", isLoggedIn, forgotPassword);
router.put("/reset-password/:token", isLoggedIn, resetPassword);


export default router;
