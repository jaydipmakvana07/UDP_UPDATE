const mongoose = require('mongoose');

const Internschema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    avtar:{
        type:String,
        required:false,
    }

})

const InternModel  = mongoose.model('Interndata',Internschema);

module.exports = InternModel;