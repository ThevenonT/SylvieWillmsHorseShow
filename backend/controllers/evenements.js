const Evenements = require('../models/evenements.js');
const fs = require('fs');

exports.get = (req, res, next) => {
    Evenements.find()
        .sort({ date_de_debut: 1 })
        .then((events) => {

            if (events.length > 0 === true) {

                return res.status(200).json({
                    status: 200,
                    Evenements: events
                })
            } else {
                return res.status(303).json({ error: { message: "Aucun Élément a afficher !", events } })
            }
        })
}

exports.add = (req, res, next) => {


    // crée une évènements avec le résultat du body
    const evenements = new Evenements({
        ...req.body,
        chemin_de_limage: `${req.protocol}://${req.get('host')}/image/${req.file.filename}`,

    })

    // enregistre l'évènement dans la base de donner 
    evenements.save()

        .then((response) => {

            console.log(response);
            return res.status(200).json({ status: 200, message: "Événement ajouter avec success !! ", item: evenements })

        })
        .catch((err) => { res.status(304).json({ status: 304, message: "il y a un problème !!", err }) })






}

exports.modify = (req, res, next) => {

}
exports.deleted = (req, res, next) => {
    console.log(req.body.id);
    Evenements.findOne({ _id: req.body.id })
        .then((events) => {
            console.log(events);
            // récupère le nom de l'image associer 
            const filename = events.chemin_de_limage.split('/images/')[1];

            // supprime l'image avec le nom associer dans le dossier image 
            fs.unlink(`images/${filename}`, () => {

                // supprime la sauce avec l'id associer 
                Evenements.deleteOne({ _id: req.body.id })
                    .then(() => res.status(200).json({ message: 'objet supprimé !', status: 200 }))
                    .catch((error) => res.status(500).json({ status: 500, message: "Une condition imprévue a empêché le serveur de répondre à la requête.", err }));

            })
        })
        .catch((err) => res.status(500).json({ status: 500, message: "Une condition imprévue a empêché le serveur de répondre à la requête.", err }))
}