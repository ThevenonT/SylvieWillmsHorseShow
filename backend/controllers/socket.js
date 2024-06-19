const Visite = require('../models/visite');

module.exports = {
    connect: function (socket) {


        // Logique pour le traitement de la connexion
        // Par exemple : enregistrer le temps de début de visite dans la base de données
        const nouvelleVisite = new Visite({ utilisateur: socket.id });
        nouvelleVisite.save()
            .then((visite) => {
                console.log("Visite enregistrée :", visite);

            })
            .catch(err => {
                console.error("Erreur lors de l'enregistrement de la visite :", err);
            });
    },

    disconnect: function (socket) {
        console.log('Utilisateur déconnecté');

        // Logique pour le traitement de la déconnexion
        // Par exemple : enregistrer le temps de fin de visite dans la base de données
        Visite.findOneAndUpdate({ utilisateur: socket.id, tempsFin: null }, { tempsFin: new Date() })
            .then((visite) => {

                Visite.find().then((event) => {
                    console.log('nombre de visiteur: ', event.length)
                })
            })
            .catch(err => {
                console.error("Erreur lors de l'enregistrement du temps de fin de visite :", err);
            });
    },



    // Fonction pour récupérer la moyenne du temps de visite de tous les utilisateurs
    getAverageVisitTime: function () {
        return Visite.aggregate([
            {
                $match: { tempsFin: { $ne: null } } // Filtrer les visites avec un temps de fin non nul
            },
            {
                $group: {
                    _id: null, // Grouper tous les documents ensemble
                    total: { $sum: { $subtract: ['$tempsFin', '$tempsDebut'] } }, // Calculer le temps total de visite
                    count: { $sum: 1 } // Compter le nombre total de visites
                }
            }
        ])
            .then(result => {
                if (result.length > 0) {
                    const totalTemps = result[0].total;
                    const nombreVisites = result[0].count;

                    // Calculer la moyenne du temps de visite en millisecondes
                    const moyenneMillisecondes = totalTemps / nombreVisites;

                    // Convertir la moyenne en heures, minutes et secondes
                    const heures = Math.floor(moyenneMillisecondes / (1000 * 60 * 60));
                    const minutes = Math.floor((moyenneMillisecondes % (1000 * 60 * 60)) / (1000 * 60));
                    const secondes = Math.floor((moyenneMillisecondes % (1000 * 60)) / 1000);

                    return `${heures} heures, ${minutes} minutes et ${secondes} secondes`;
                } else {
                    return null; // Aucune visite enregistrée
                }
            })
            .catch(err => {
                console.error("Erreur lors de la récupération de la moyenne du temps de visite :", err);
                return null;
            });
    }
};
