const express = require('express');
const routes = express.Router();
const controller = require('../controller/PostController')
const Imageupload = require('../middleware/mullter')


routes.get('/',controller.home)
routes.post('/postAdd',Imageupload,controller.PostAdd)
routes.get('/postshow',controller.postshow)
routes.delete('/postshow',controller.postdelete)



module.exports = routes;