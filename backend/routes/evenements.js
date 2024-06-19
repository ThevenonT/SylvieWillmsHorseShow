const express = require('express');
const router = express.Router();
const evenements = require('../controllers/evenements.js');
const multer = require('../middleware/multer-config');

router.get('/get', evenements.get);
router.post('/add', multer, evenements.add);
router.post('/modify', evenements.modify);
router.post('/deleted', evenements.deleted);

module.exports = router;