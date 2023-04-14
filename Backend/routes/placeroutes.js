const express = require('express');
const router = express.Router();
const controller = require('../controller/placeController');
const ImageUpload = require('../middleware/mullter');

router.get('/', controller.home);
router.post('/placeAdd', ImageUpload, controller.placeAdd);
router.get('/placeshow', controller.placeshow);
router.delete('/placeshow/:id', controller.placedelete);

module.exports = router;
