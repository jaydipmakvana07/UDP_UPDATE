const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const cors = require('cors');
const db = require('./config/mongoose');
const createUser = require('./createuser')

// Call the function to create a new user
// createUser();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads',express.static(path.join('uploads')))
app.use(cors({
    origin: '*'
}))
app.use('/', require('./routes/postroutes'));
app.use('/', require('./routes/rightroutes'));
app.use('/', require('./routes/eventroutes'));
app.use('/', require('./routes/internroutes'));
app.use('/', require('./routes/clubroutes'));
app.use('/', require('./routes/placeroutes'));
app.use('/api/auth', require('./routes/auth'));
app.listen(8080)