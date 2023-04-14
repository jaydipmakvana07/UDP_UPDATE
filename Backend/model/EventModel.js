const mongoose = require('mongoose');

const Eventschema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    avtar:{
        type:String,
        required:false,
    }

})

const EventModel  = mongoose.model('Eventdata',Eventschema);

module.exports = EventModel;