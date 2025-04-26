import express from "express";
import dotenv from "dotenv";
import db from "./utils/dbConnection.js";

dotenv.config();

const app = express();
const port = process.env.PORT ||  4000;

app.use(express.json());

db();

//import userRoutes
import userRoutes from "./routes/user.routes.js";


app.get("/hello", (req,res) => {
    res.send("Hello");
});

app.use("/api/v1/user", userRoutes);

app.listen(port,() => {
    console.log(`Server is running on port no. ${port}`);
})