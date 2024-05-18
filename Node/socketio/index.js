const http = require("http");
const express = require("express");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);


//Socket.io
io.on("connection", (socket) => {
    socket.on("user-message", (message) => {
        io.emit("message", message);
    });
});

app.get("/", (req,res) => {
    return res.sendFile(`${__dirname}/index.html`);
})

server.listen(4000, () => console.log("Server is running on 4000"));