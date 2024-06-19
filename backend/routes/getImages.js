const express = require('express');
const router = express.Router();
const getImages = require('../controllers/getImages');


router.get('/liberte', getImages.liberte)
router.get('/pas_de_deux', getImages.pas_de_deux)
router.get('/jimmy', getImages.jimmy)
router.get('/les_hercules', getImages.les_hercules)
router.get('/affiche_spectacle', getImages.affiche_spectacle)



module.exports = router;