const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Student details
const studentDetails = {
    name: "Your Name",
    age: 25,
    city: "Your City",
    country: "Your Country"
};

// Counter for odd visitor count
let visitorCount = 0;

// Middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`New ${req.method} request for ${req.url}`);
    next();
});

// Route to serve HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/student.html');
});

// Socket.IO connection event
io.on('connection', (socket) => {
    // Increment visitor count
    visitorCount++;
    // Check if visitor count is odd
    if (visitorCount % 2 !== 0) {
        // Broadcast odd visitor count to all clients
        io.emit('oddVisitorCount', visitorCount);
    }

    // Display student details in server console
    console.log('Student Details:', studentDetails);
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
