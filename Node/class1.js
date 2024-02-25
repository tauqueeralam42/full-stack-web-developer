const http = require('http');
const fs = require('fs');
const {log}=require('console');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter the name</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"></input>');
        res.write('<button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        req.on('data', (chunk) => {
            console.log(chunk);
        });
      
            res.statusCode = 302;
            res.setHeader('Location', '/kk');
            return res.end();
        
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Tauqueer</title></head>');
    res.write('<body><h1>WELCOME TO MY NODE.JS CLASS</h1></body>');
    res.write('</html>');
    res.end();

  
});

server.listen(7080);