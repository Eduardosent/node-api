const model = require('../models/user');
const mongoose = require('mongoose')

const options = {
    page:1,
    limit:10
}

exports.getData = (req,res) =>{

    /*    const docs = {
        imgprofile:'img.jpg',
        name:'jose',
        email:'correo@gmail.com'
    }*/
    model.paginate({},options).then((docs)=>{
        res.send({item:docs})
    }).catch((e)=>{
        console.log(e)
    })
}
exports.inserData = (req,res) =>{
    const data = req.body
    model.create(data).then((docs)=>{
        res.send(docs)
    }).catch((e)=>console.log(e))
}
exports.updateOne = (req,res)=>{
    const id = req.params.id;
    const findId=new  mongoose.Types.ObjectId(id)
    const body = req.body;
    model.updateOne({_id:findId},body
    ).then((docs)=>{
        res.send({item:docs})
    }).catch((e)=>res.send(e))
}
exports.delete = (req,res)=>{
    const id = req.params.id;
    const findId=new  mongoose.Types.ObjectId(id)
    model.deleteOne({_id:findId}
    ).then((docs)=>{
        res.send({item:docs})
    }).catch((e)=>res.send(e))
}
