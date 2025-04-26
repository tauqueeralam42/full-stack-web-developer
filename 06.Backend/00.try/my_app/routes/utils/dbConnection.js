import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Mongo DB is connected Succesfully");
    })
    .catch((err) => {
      console.log("Error : ", err.message);
    });
};

export default db;
