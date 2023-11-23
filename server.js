const http = require("http");
const express = require("express");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("chat message", (receivedMessage) => {
    console.log("Received message:", receivedMessage);

    io.emit("chat message", receivedMessage);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
