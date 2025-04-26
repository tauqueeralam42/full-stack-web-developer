const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');

app.use(express.static(publicPath));

app.get("/", (req,res) => {
    res.sendFile(`${__dirname}/public/home.html`);
});

app.get("/about", (req,res) => {
    res.sendFile(`${__dirname}/public/about.html`)
})


app.listen(5000, () => {
    console.log("Server is running on port no. 5000")
})