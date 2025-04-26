const mongoose = require("mongoose");

connectToMongoDb = async () => {
    mongoose.connect("mongodb://127.0.0.1:27017/short-url")
    .then(() => {
        console.log("MongoDb is connected Successfuly");
    })
    .catch((err) => {
        console.log("Error in connection of MongoDB", err);
    })
}

module.exports = connectToMongoDb;