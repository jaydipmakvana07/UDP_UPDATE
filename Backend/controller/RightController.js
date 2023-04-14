const rightModel = require('../model/RightModel');
const path = require('path');
const fs = require('fs');
const imgpath = path.join('uploads')

const rightAdd = async (req, res) => {
    try {
        let avtar = ''
        if(req.file==null){
            avtar = ''
        }
        else{
            avtar =imgpath + '/' + req.file.filename
        }
        const { name } = req.body
        const data = await rightModel.create({ name, avtar })
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

const rightshow = async (req, res) => {

    try {
        const data = await rightModel.find({});

        if (data) {
            return res.status(200).send({ success: true, message: 'succes finded', data: data });
        }

    } catch (error) {
        return res.status(404).send({ success: false, message: error.message });
    }


}

const rightdelete = async(req,res)=>{
     
}


module.exports = { rightAdd, home, rightshow ,rightdelete}