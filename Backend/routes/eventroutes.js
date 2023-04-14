const express = require('express');
const router = express.Router();
const controller = require('../controller/EventController');
const ImageUpload = require('../middleware/mullter');

router.get('/', controller.home);
router.post('/eventAdd', ImageUpload, controller.eventAdd);
router.get('/eventshow', controller.eventshow);
router.delete('/eventshow/:id', controller.eventdelete);

module.exports = router;
