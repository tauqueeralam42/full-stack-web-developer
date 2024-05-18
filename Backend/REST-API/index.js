const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");


//const users = require("./MOCK_DATA.json");
const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended : false}));


//connection
mongoose.connect("mongodb://127.0.0.1:27017/practice")
.then(() => { console.log("MongoDB is connected")})
.catch((err) => { console.log("Error is MongoDB connection", err)});

//Routes
app.get("/users" , async (req,res) => {

    const allDbUsers = await User.find({});
    const html = `
    <ul>
    ${ allDbUsers.map( (user) => 
        `<li>${user.firstName} - ${user.email}</li>`
        
    ).join("")}
    </ul>
    `;

    res.send(html);
});

app.use("/api/users", userRouter);

app.listen(PORT , () => {
    console.log(`Server started at port no. ${PORT}`);
})