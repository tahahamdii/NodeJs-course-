const express = require('express');
const SocketIO = require('socket.io');
const path = require('path');
const { Server: HttpServer } = require('http');
const twig = require('twig');

const messages = [];

const app = express();
const httpServer = HttpServer(app);
const io = SocketIO(httpServer);





app.get('/', (req, res) => {

  const username = 'Anonymous';
  res.render('chat', { messages, username });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    const message = { message: msg, timestamp: Date.now() };
    messages.push(message);
    io.emit('chat message', message);
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

httpServer.listen(3000, () => {
  console.log('Server listening on port 3000');
});
