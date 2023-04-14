const mongoose = require('mongoose');

const Rightschema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    avtar:{
        type:String,
        required:false,
    }

})

const RightModel  = mongoose.model('Rightdata',Rightschema);

module.exports = RightModel;