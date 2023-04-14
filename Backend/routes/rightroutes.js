const express = require('express');
const router = express.Router();
const controller = require('../controller/rightController');
const ImageUpload = require('../middleware/mullter');

router.get('/', controller.home);
router.post('/rightAdd', ImageUpload, controller.rightAdd);
router.get('/rightshow', controller.rightshow);
router.delete('/rightshow/:id', controller.rightdelete);

module.exports = router;
