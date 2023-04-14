const mongoose = require('mongoose');

const Clubschema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    avtar:{
        type:String,
        required:false,
    }

})

const ClubModel  = mongoose.model('Clubdata',Clubschema);

module.exports = ClubModel;