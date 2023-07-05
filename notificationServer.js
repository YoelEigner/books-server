const { app } = require('./main');

const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    // Send a notification to the client every x minutes/hours
    setInterval(() => {
        socket.emit('notification', { message: 'New message received.' });
    }, 5000);

    // Handle client messages if needed
    socket.on('message', (message) => {
        // handle client messages
    });

    // Handle connection close if needed
    socket.on('disconnect', () => {
        // handle connection close
    });
});



module.exports = {
    server
};