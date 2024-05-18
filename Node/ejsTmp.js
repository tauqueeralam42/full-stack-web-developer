const express = require('express');

const app = express();


app.set('view engine', 'ejs');

app.get("/", (req,res) => {
    const user = {
        name : 'Tauqueer',
        email : 'tauqueeralam42@gmail.com',
        city : 'Dehri'
    }
    res.render('home', {user});
});

app.listen(5000, () => console.log("Server is running on Port no. 5000"));