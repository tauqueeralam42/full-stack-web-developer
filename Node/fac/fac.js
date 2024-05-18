const http = require('http');
const url = require('url');

// Function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Create a server
const server = http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    
    // Serve HTML file for the home route
    if (path === '/' || path === '/index.html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(require('fs').readFileSync('./index.html'));
    }
    // Handle factorial calculation request
    else if (path === '/calculate') {
        const query = url.parse(req.url, true).query;
        const number = parseInt(query.number);

        // Calculate factorial numbers
        const factorials = [];
        for (let i = 1; i <= number; i++) {
            factorials.push(factorial(i));
        }

        // Send response with factorials
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(factorials));
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
