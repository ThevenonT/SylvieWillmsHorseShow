const mongoose = require('mongoose');

const visiteSchema = new mongoose.Schema({
    utilisateur: { type: String, required: true }, // Identifiant de l'utilisateur ou toute autre information pertinente
    tempsDebut: { type: Date, default: Date.now }, // Temps de début de visite
    tempsFin: { type: Date, default: null } // Temps de fin de visite (par défaut à null lors de la connexion)
});

const Visite = mongoose.model('Visite', visiteSchema);

module.exports = Visite;