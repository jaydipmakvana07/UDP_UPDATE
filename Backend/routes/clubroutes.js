const express = require('express');
const router = express.Router();
const controller = require('../controller/ClubController');
const ImageUpload = require('../middleware/mullter');

router.get('/', controller.home);
router.post('/clubAdd', ImageUpload, controller.clubAdd);
router.get('/clubshow', controller.clubshow);
router.delete('/clubshow/:id', controller.clubdelete);

module.exports = router;
