const express = require('express');
const app = express();

app.use((req,res,next) => {
    if(!req.query.age){
        res.send("Please Provide the age");
    }
    else if(req.query.age < 18){
        res.send("You can not access this Page");
    }
    else{
        next();
    }
})


app.get("/", (req, res) => {
    res.send("This is Home Page");
});

app.get("/about", (req,res) => {
    res.send("This is About Page");
});


app.listen(5000, () => {
    console.log("Server is running on Port no. 5000")
})