import mongoose from "mongoose";

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Mongo DB is connected")
    })
    .catch((err) => {
        console.log("Error in DB Connection", err);
    })
}

export default dbConnection;