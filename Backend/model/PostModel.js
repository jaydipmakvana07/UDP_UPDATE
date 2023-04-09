const mongoose = require('mongoose');

const Postschema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    avtar:{
        type:String,
        required:true,
    }

})

const PostModel  = mongoose.model('postdata',Postschema);

module.exports = PostModel;