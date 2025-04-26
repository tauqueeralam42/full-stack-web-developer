const express = require("express");
const app = express();
const path = require('path');

const urlRoute = require("./routes/url");
const connectToMongoDb = require("./connect");
const URL = require("./models/url");


const PORT = 8001;

connectToMongoDb();

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/test", async (req,res) => {
    const allUrls = await URL.find({});
    return res.render("home", {
        urls : allUrls,
    });
})


app.use("/url", urlRoute);

app.get("/url/:shortId", async (req,res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({shortId}, {$push : {visitHistory : { timestamp : Date.now() } }});
    res.redirect(entry.redirectURL);
})


app.listen(PORT, () => {
    console.log(`Server is running on Port no. ${PORT}`)
});