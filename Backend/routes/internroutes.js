const express = require('express');
const router = express.Router();
const controller = require('../controller/InternController');
const ImageUpload = require('../middleware/mullter');

router.get('/', controller.home);
router.post('/internAdd', ImageUpload, controller.internAdd);
router.get('/internshow', controller.internshow);
router.delete('/internshow/:id', controller.interndelete);

module.exports = router;
