const internModel = require('../model/InternModel');
const path = require('path');
const fs = require('fs');
const imgpath = path.join('uploads')

const internAdd = async (req, res) => {
    try {
        let avtar = ''
        if(req.file==null){
            avtar = ''
        }
        else{
            avtar =imgpath + '/' + req.file.filename
        }
        const { name } = req.body
        const data = await internModel.create({ name, avtar })
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

const internshow = async (req, res) => {

    try {
        const data = await internModel.find({});

        if (data) {
            return res.status(200).send({ success: true, message: 'succes finded', data: data });
        }

    } catch (error) {
        return res.status(404).send({ success: false, message: error.message });
    }


}

const interndelete = async(req,res)=>{
     
}


module.exports = { internAdd, home, internshow ,interndelete}