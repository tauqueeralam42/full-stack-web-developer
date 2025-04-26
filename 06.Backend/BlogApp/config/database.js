const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then( () => {
        console.log("Data base is connect succesfully");
    })
    .catch( (err) => {
        console.log("Error");
        console.error(err.message);
        process.exit(1);
    });
};

module.exports = connectWithDb;