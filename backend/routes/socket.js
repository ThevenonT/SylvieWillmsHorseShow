const socketController = require('../controllers/socket');


module.exports = function (req, res) {
    req.on('connection', socket => {


        // Gestion des événements de connexion et de déconnexion
        socket.on('newCo', () => {
            socketController.connect(socket);
            // Appel de la fonction pour récupérer la moyenne du temps de visite
            socketController.getAverageVisitTime()
                .then(moyenne => {
                    if (moyenne !== null) {
                        console.log("Moyenne du temps de visite de tous les utilisateurs :", moyenne);
                    } else {
                        console.log("Aucune visite enregistrée.");
                    }
                });
        });




        socket.on('disconnect', () => {
            socketController.disconnect(socket);
        });
    });
};

