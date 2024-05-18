const mongoose = require("mongoose");

require("dotenv").config();

const connectdb = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("Database is connect succesfully");
    })
    .catch((err) => {
        console.log("Error in DB connection");
        console.error(err.message);
        process.exit(1);
    });
}

module.exports = connectdb;