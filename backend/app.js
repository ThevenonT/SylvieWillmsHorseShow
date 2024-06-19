const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const getImages = require('./routes/getImages');
const évènements = require('./routes/evenements');
require('dotenv').config();

app.use(express.json());

// build redirection sur l'index.html
app.use(express.static(path.join(__dirname, '../frontend')));

/* connection a la base de donner mongoDB */
mongoose.connect('mongodb+srv://SylvieWillms:SylvieWillmsHorseShowEvent@databasesylviewillms.ld1sqku.mongodb.net/Events?retryWrites=true&w=majority&appName=DataBaseSylvieWillms')
    .then(() => console.log('MongoDB: Connexion réussie ! ✅'))
    .catch(() => console.log('MongoDB: Connexion échouée ! ❌'))



// declaration du header
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});


// donne l'accès au dossier image backend
app.use('/image', express.static(path.join(__dirname, '../backend/image')));
// donne l'accès au dossier du site frontend
app.use('/images', express.static(path.join(__dirname, '../frontend/images')));


// declarations des routes
// récupère le dossier demander retourne toutes les images du dossier 
app.use('/images/', getImages);
app.use('/evenements/', évènements);







module.exports = app;