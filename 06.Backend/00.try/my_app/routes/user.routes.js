import express from "express";

const router = express.Router();

//import controllers
import { registerUser } from "../controller/user.controller.js";

router.post("/register", registerUser);

export default router;