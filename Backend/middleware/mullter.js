const path = require('path');
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads')), function (err, success) {
            if (err) {
                console.log('error in upload');
            }
        }
    },
    filename: function (req, file, cb) {
        
       cb(null,`${file.fieldname}-${Date.now()}-${file.originalname}`),function(err,success){
        if(err){
            console.log('err');
        }
       }
    }
})
const Imageupload = multer({storage: storage}).single('avtar');

module.exports = Imageupload