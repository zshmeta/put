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
    console.log(`a user connected: ${socket.id}`);

    socket.on('join_room', (data) => {
        socket.join(data);
        console.log(`User` + data.username + 'Socket ID:' + `${socket.id}` + ' joined the room : ' + data.room);
        socket.to(data.room).emit('new user joined', { user: data.username, message: 'has joined this room.' });
    });
    socket.on('leave_room', (data) => {
        console.log(data.username + ' left the room : ' + data.room);
        socket.to(data.room).emit('left room', { user: data.username, message: 'has left this room.' });
        socket.leave(data.room);
    });

    socket.on('typing', (data) => {
        socket.broadcast.to(data.room).emit('typing', { user: data.username, message: 'is typing...' });
    });

    socket.on('stop typing', (data) => {
        socket.to(data.room).emit('stop typing', { user: data.username, message: '' });
    });

    socket.on('send_message', (data) => {
        io.in(data.room).emit('chat message', { user: data.username, message: data.message });
    });
    socket.on('receive_message', (data) => {
        socket.to(data.room).emit('receive_message', { user: data.username, message: data.message });

    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(3001, () => {
    console.log('Runing on :3001');
})

