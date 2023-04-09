const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://127.0.0.1:27017/UDP-MASTER-POST-API');
db?console.log('db is connected'):console.log('db connetion in error');

module.exports = db;