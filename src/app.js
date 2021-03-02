const express =require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv'); 
dotenv.config();

// Routes
const index = require("./routes/littleZoom.roustes");

//app.use(cors());
app.use(index);

// Server hhtp Express
const http = require('http').Server(app);
// Server Socket.io http
const io = require('socket.io')(http);

// Vistas, archivos publicos
app.use(express.static(path.join(__dirname, 'public'))); 

io.on('connection', (socket) => {
  socket.on('stream', (image) => {
      // Emit a todos video a todos 
      socket.broadcast.emit('stream', image);

  })
});


module.exports = http;



