const mongoose = require('mongoose');

const Placeschema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    avtar:{
        type:String,
        required:false,
    }

})

const PlaceModel  = mongoose.model('Placedata',Placeschema);

module.exports = PlaceModel;