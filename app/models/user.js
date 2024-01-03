const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const UserSheme = new mongoose.Schema(
    {
    name:{
        type:String
    },
    imgprofile:{
        type:String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    },
    email:{
        type: String,
        unique: true,
        required: true
    }},
    {
        versionKey:false,
        timestamps:true
    }
)
UserSheme.plugin(mongoosePaginate);

module.exports = mongoose.model('user',UserSheme);