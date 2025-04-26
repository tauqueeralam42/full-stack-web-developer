const http = require('http');
const url = require('url');

// Function to calculate Fibonacci numbers
function fibonacciSeries(n) {
    const fibSeries = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }
    return fibSeries.slice(0, n + 1);
}

// Create a server
const server = http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;

    // Serve HTML file for the home route
    if (path === '/' || path === '/index.html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(require('fs').readFileSync('./index.html'));
    }
    // Handle Fibonacci calculation request
    else if (path === '/fibonacci') {
        const query = url.parse(req.url, true).query;
        const number = parseInt(query.number);

        // Calculate Fibonacci numbers
        const fibonacciNumbers = fibonacciSeries(number);

        // Send response with Fibonacci numbers
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(fibonacciNumbers));
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
