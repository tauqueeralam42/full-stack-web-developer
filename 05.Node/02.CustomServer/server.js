const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Determine the file path based on the request URL
    const filePath = path.join(__dirname, req.url === "/" ? 'index.html' : req.url);
    console.log(filePath);
    // Get the file extension
    const extName = String(path.extname(filePath)).toLowerCase();

    // Define MIME types for different file extensions
    const mimeType = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".png": "image/png",
        ".jpg": "image/jpg",
        ".jpeg": "image/jpeg",
        ".svg": "image/svg+xml",
    };

    // Set the content type based on the file extension
    const contentType = mimeType[extName] || "application/octet-stream";

    // Read the requested file from the file system
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === "ENOENT") {
                // If the file is not found, serve the 404.html file
                fs.readFile(path.join(__dirname, "404.html"), (err, content) => {
                    res.writeHead(404, { "Content-Type": "text/html" });
                    res.end(content, 'utf-8');
                });
            } else {
                // If there is a server error, send a 500 response
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // If the file is found, serve it with the appropriate content type
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content, 'utf-8');
        }
    });
});

// Start the server and listen on the specified port
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});