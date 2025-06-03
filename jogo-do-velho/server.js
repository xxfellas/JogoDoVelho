// server.js
const express = require("express");
const http = require("http");
const path = require("path");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, "public")));

let waitingPlayer = null;

io.on("connection", (socket) => {
  console.log("Novo jogador conectado:", socket.id);

  if (waitingPlayer) {
    const room = `room-${waitingPlayer.id}-${socket.id}`;
    socket.join(room);
    waitingPlayer.join(room);
    io.to(room).emit("start", { room });
    console.log(`Partida criada: ${room}`);
    waitingPlayer = null;
  } else {
    waitingPlayer = socket;
    socket.emit("waiting");
  }

  socket.on("play", ({ room, index, symbol }) => {
    socket.to(room).emit("play", { index, symbol });
  });

  socket.on("disconnect", () => {
    console.log("Jogador desconectado:", socket.id);
    if (waitingPlayer && waitingPlayer.id === socket.id) {
      waitingPlayer = null;
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
