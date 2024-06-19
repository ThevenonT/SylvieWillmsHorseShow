const fs = require('fs');
const path = require('path');

exports.liberte = (req, res, next) => {

    const cheminDossierImages = path.join(__dirname, '../../frontend', 'images', 'numeros', 'Liberte');

    fs.readdir(cheminDossierImages, (err, files) => {
        if (err) {
            console.error('Erreur lors de la lecture du dossier d\'images:', err);

        } else {
            res.json(files);
        }
    });

};

exports.pas_de_deux = (req, res, next) => {

    const cheminDossierImages = path.join(__dirname, '../../frontend', 'images', 'numeros', 'pas_de_deux');

    fs.readdir(cheminDossierImages, (err, files) => {
        if (err) {
            console.error('Erreur lors de la lecture du dossier d\'images:', err);

        } else {
            res.json(files);
        }
    });

};

exports.jimmy = (req, res, next) => {

    const cheminDossierImages = path.join(__dirname, '../../frontend', 'images', 'numeros', 'jimmy');

    fs.readdir(cheminDossierImages, (err, files) => {
        if (err) {
            console.error('Erreur lors de la lecture du dossier d\'images:', err);

        } else {
            res.json(files);
        }
    });

};

exports.les_hercules = (req, res, next) => {

    const cheminDossierImages = path.join(__dirname, '../../frontend', 'images', 'numeros', 'les_hercules');

    fs.readdir(cheminDossierImages, (err, files) => {
        if (err) {
            console.error('Erreur lors de la lecture du dossier d\'images:', err);

        } else {
            res.json(files);
        }
    });

};

exports.affiche_spectacle = (req, res, next) => {

    const cheminDossierImages = path.join(__dirname, '../../frontend', 'images', 'page_3', 'affiche_spectacle');

    fs.readdir(cheminDossierImages, (err, files) => {
        if (err) {
            console.error('Erreur lors de la lecture du dossier d\'images:', err);

        } else {
            res.json(files);
        }
    });

};