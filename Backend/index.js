const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const db = require('./config/mongoose');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads',express.static(path.join('uploads')))
app.use(cors({
    origin: '*'
}))
app.use('/', require('./routes/postroutes'));
app.listen(8080)