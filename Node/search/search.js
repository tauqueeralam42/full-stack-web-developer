const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const reqUrl = req.url;
    const reqMethod = req.method;

    // Serve the HTML page for input and search
    if (reqUrl === '/' && reqMethod === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('index.html').pipe(res);
    }
    // Handle form submission to save data
    else if (reqUrl === '/saveData' && reqMethod === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const formData = querystring.parse(body);
            const { name, email, phone, city, state } = formData;
            const info = `${name}, ${email}, ${phone}, ${city}, ${state}\n`;
            fs.appendFile('source.txt', info, (err) => {
                if (err) {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end('Internal Server Error');
                } else {
                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    res.end('Data saved successfully!');
                }
            });
        });
    }
    // Handle search request
    else if (reqUrl.startsWith('/search') && reqMethod === 'GET') {
        const query = url.parse(reqUrl, true).query;
        const searchName = query.name;
        fs.readFile('source.txt', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
            } else {
                const lines = data.split('\n');
                let result = [];
                lines.forEach(line => {
                    const userInfo = line.split(', ');
                    if (userInfo[0] === searchName) {
                        result.push({
                            name: userInfo[0],
                            email: userInfo[1],
                            phone: userInfo[2],
                            city: userInfo[3],
                            state: userInfo[4]
                        });
                    }
                });
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(result));
            }
        });
    }
    // Handle other requests
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
