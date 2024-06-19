const mongoose = require('mongoose');

// créer un schéma pour l'email et le mot de passe 
const evenementsSchema = mongoose.Schema({

    nom: { type: String, required: true },
    date_de_debut: { type: String, required: true },
    date_de_fin: { type: String, required: true },
    chemin_de_limage: { type: String, required: true },
    lien: { type: String, required: true },

});

// Ajoute le nom du model et l'exports
module.exports = mongoose.model('Evenements', evenementsSchema);