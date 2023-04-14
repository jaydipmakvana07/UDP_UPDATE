const postModel = require('../model/PostModel');
const path = require('path');
const fs = require('fs');
const imgpath = path.join('uploads')

const PostAdd = async (req, res) => {
    try {
        let avtar = ''
        if(req.file==null){
            avtar = ''
        }
        else{
            avtar =imgpath + '/' + req.file.filename
        }
        const { name } = req.body
        const data = await postModel.create({ name, avtar })
        if (data) {
            res.status(200).send({ success: true, message: 'posted successfully', data: data })
        }
    } catch (error) {
        res.status(400).send({ success: false, message: error.message });
    }
}

const home = (req, res) => {
    res.send('home')
}

const postshow = async (req, res) => {

    try {
        const data = await postModel.find({});

        if (data) {
            return res.status(200).send({ success: true, message: 'succes finded', data: data });
        }

    } catch (error) {
        return res.status(404).send({ success: false, message: error.message });
    }


}

const postdelete = async(req,res)=>{
    try {
        const postId = req.params.id; // Get the club ID from the request params
    
        // Use a function from your MongoDB driver to delete the club from the database
        // For example, using Mongoose:
        const data = await postModel.findByIdAndDelete(postId);
        if (data) {
          // Delete the club avatar file from the server
          fs.unlinkSync(data.avtar);
          res.status(200).send({ success: true, message: 'Post deleted successfully', data: data });
        }
        else {
          res.status(404).send({ success: false, message: 'Post not found' });
        }
      } catch (error) {
        res.status(500).send({ success: false, message: error.message });
      }
     
     
}


module.exports = { PostAdd, home, postshow ,postdelete}