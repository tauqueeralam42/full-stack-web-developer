// step1: create a folder;
// step2: move into that folder 
// strp3: npm init -y 
// step4: open folder using vscode
// step5: npm i express 
// step6: create server.js 

const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server is running on locahost : 3000')
});


app.get('/', (request,response) => {
    response.send("Hello, Server is Running");
});