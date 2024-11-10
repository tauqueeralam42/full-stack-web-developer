const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req,res) => {
    return res.send('<h1>Welcome to my Node js Page..</h1>')
});

app.listen(PORT , () => {
    console.log(`Server is Running on Port no. : ${PORT}`)
})