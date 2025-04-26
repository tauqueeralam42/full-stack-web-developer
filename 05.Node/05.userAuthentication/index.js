import express from "express";
import dotenv from "dotenv";
import dbConnection from "./util/dbConnection.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


const port = process.env.PORT || 4000;

dbConnection();

import userRoutes from "./routes/user.route.js";
app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is listening on PORT no. ${port}`);
});
