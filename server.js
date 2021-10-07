
const http = require('http');
const app = require('./app');

// Normalisation des ports

const normalizePort = val => {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
const port = normalizePort(process.env.PORT || 3000);

app.set('port', port);
const server = http.createServer(app);
/*
const socketio = require('socket.io');
const formatMessage = require("./models/Message")
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require("./models/User")
const io = socketio(server);

// set static folder
app.use(express.static(path.join(__dirname, "public")))

io.on('connection', socket => {

    socket.on('../routes/user', () => {

        const user = userJoin(socket._id, user. room);

        socket.join(user.room);

        // to everone expect the user
        socket.emit('message', formatMessage(botName, 'Welcome to ChatCord!!'))

        // Broadcast when a user connects (user does not get this message)
        socket.broadcast.to(user.room).emit('message', formatMessage(botName, `${username} has joined the chat`));

        // send users and room info
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        })
    })

    const botName = 'ChatCaird'



    // Runs when client disconnects
    socket.on('disconnect', () => {
        const user = userLeave(socket.id)

        // will be sent to everyone
        if (user) {
            io.to(user.room).emit("message", formatMessage(botName, `${user.} has left the chat`));
            // send users and room info
            io.to(user.room).emit('roomUsers', {
                room: user.room,
                users: getRoomUsers(user.room)
            })
        }

    })

    socket.on('chatMessage', msg => {
        const user = getCurrentUser(socket.id);
        io.to(user.room).emit('message', formatMessage(user.username, msg))
    })

})*/


server.listen(port);
server.on("listening", () => {
    console.log(`listening on port ${port}...`);
})
