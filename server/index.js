const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const server = http.createServer(app);
const { Server } = require("socket.io");

app.use(cors());

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});
io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('join_room', (data) => {
        socket.join(data.room);
        console.log(data.username + ' joined the room : ' + data.room);
        socket.broadcast.to(data.room).emit('new user joined', { user: data.username, message: 'has joined this room.' });
    });
    socket.on('leave_room', (data) => {
        console.log(data.username + ' left the room : ' + data.room);
        socket.broadcast.to(data.room).emit('left room', { user: data.username, message: 'has left this room.' });
        socket.leave(data.room);
    });
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(3001, () => {
    console.log('Runing on :3001');
})

