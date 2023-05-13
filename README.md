 # P.U.T - Peer User Telegraph

 ##### ...<i>by zshmeta</i>

 ## A Simple Realtime Chat Module using Sockets.io

### What is This?

A real time asynchronous chat app that can be mounted as a module in any nodejs app

### Why is this?

Wanted to implement real chat features so i decided to write a stand alone module for it

### How is this?

The magic is handle by socket.io and the rest is just a simple nodejs app. Note that we are creating a client side and a separate server side app. The client side app is a simple html page that connects to the server side app via socket.io. The server side app is a nodejs app that handles the socket.io connections and emits messages to the client side app.

 #### A Few Words

I can see the difficulty for some to grasp how it works but i believe by writing such an app you will learn a lot about how socket.io works and how to use it. I hope you find this useful and if you have any questions or suggestions please feel free to contact me.

### Socket.io + cors

To initiate socket.io we need to pass the server object to the socket.io function. We also need to pass the cors object to the socket.io function to allow cross origin requests.

```javascript

const io = require('socket.io')(server, {
    cors: {
        origin: <the origin of the client app>,
        methods: ["GET", "POST"]    
    }
});

```
we initiate it then by listening  and emitting events

```javascript

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

```

Socket will then generate a unique id for each connection. We can use this id to send messages to a specific client.
all of our code will be inside the connection event listener.


### How to Use

Thank you! 

Zshmeta

 Le Z c\'est Le S.... 

 

 <smaller>Copyright 1143-2054</smaller>
