//index.js
const http = require("http");
const express = require("express");
const cors = require("cors");
//const SocketService = require("./SocketService");

const PORT = process.env.PORT || 8080;

const server = express().listen(PORT, () => console.log(`Listening on ${PORT}`));
server.use(cors());

const { Server } = require("ws");
const wss = new Server({server});

wss.on("connection", (ws) => {
  console.log("Client Connected");
  was.on("close", () => console.log("Client Disconnected"))
})

/* 
  Create Server from http module.
  If you use other packages like express, use something like,

  const app = require("express")();
  const server = require("http").Server(app);

*/
// const server = http.createServer();
// const options = {cors:true, origins:["*:*"]};
// const io = require("socket.io")(server, options);

// const port = 8080;

// server.listen(port, function() {
//   console.log("Server listening on : ", port);
//   const socketService = new SocketService();
//  // We are going to pass server to socket.io in SocketService.js
//   socketService.attachServer(server);
// });
