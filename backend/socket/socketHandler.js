const socketIo = require('socket.io');
const socketRoutes = require('../routes/socket'); // Fichier pour les routes des sockets

module.exports = {
    init: function (server) {
        const io = socketIo(server);

        // Configuration des routes Socket.IO
        socketRoutes(io);
    }
};