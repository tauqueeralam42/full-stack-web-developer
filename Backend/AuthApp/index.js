const express = require("express");
const app = express();


require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const cookieParser = require("cookie-parser");
app.use(cookieParser());


const connectdb = require("./config/database");
connectdb();

const user = require("./routes/user");
app.use("/api/v1", user);

app.listen(PORT , () => {
    console.log(`Server is running on Port no. ${PORT}`);
})