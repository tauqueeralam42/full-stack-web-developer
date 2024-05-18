const http = require('http');
const url = require('url');

// Function to compute the sum of digits of a number
function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

// Create a server
const server = http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;

    // Serve HTML file for the home route
    if (path === '/' || path === '/index.html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(require('fs').readFileSync('./index.html'));
    }
    // Handle sum calculation request
    else if (path === '/sum') {
        const query = url.parse(req.url, true).query;
        const number1 = parseInt(query.number1);
        const number2 = parseInt(query.number2);
        const sum = sumOfDigits(number1) + sumOfDigits(number2);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(sum.toString());
    }
    // Handle other routes
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
