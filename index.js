// const express = require("express");
// const app = express();
// const http = require("http");
// app.use(express.json());
// const server = http.createServer(app);
// const socketIo = require("socket.io")(server);
// socketIo.on("connection", (socket) => {
//   console.log("có người đang kết nối: " + socket.id);

//   socket.on("client-up-color", (data) => {
//     console.log("Sever nhận color từ client: " + data);
//     socketIo.sockets.emit("sever-up-color", data);
//   });

//   socket.on("disconnect", () => {
//     console.log("Client disconnected: ");
//   });
// });
// server.listen(3000, () => {
//   console.log("Server đang chay tren cong 3000");
// });

const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socketIo = require("socket.io")(server);
socketIo.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});
server.listen(3000, () => {
  console.log("Server đang chay tren cong 3000");
});
