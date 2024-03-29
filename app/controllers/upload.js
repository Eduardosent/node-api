const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null,'uploads')
    },filename: (req, file, cb)=>{
        cb(null,Date.now()+"-"+file.originalname)
    }
})

const upload = multer({ storage:storage})

exports.upload = upload.single('myFile')

exports.uploadFile=(req,res)=>{
    res.send(
        {data:"upload file"}
    )
}