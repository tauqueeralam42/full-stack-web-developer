const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/myDataBase")
.then(()=>{
    console.log("Connection Successful")
})
.catch((err)=>{
    console.log("recieved error");
})

app.listen(3000,()=>{
    console.log("Server started on port 3000");
});