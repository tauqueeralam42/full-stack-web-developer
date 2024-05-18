const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.send("Hello.........");
})

app.post('/api/data', (req,res)=>{
    const {name,data} = req.body;
    console.log(name, data);
    res.send('Data send Successfully');
})

app.listen(3000, () =>{
    console.log("Server is running on port no. 3000");
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/moviesdb')
.then(() => {
    console.log("Connection is establised");
})
.catch((e) => {
    console.log("Error")
})