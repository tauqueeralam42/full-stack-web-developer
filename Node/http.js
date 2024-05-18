const http = require('http');

http.createServer((req,res) => {
    res.write("<h1>Hello Server is created</h1>");
    res.end();
}).listen(4500);