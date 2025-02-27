const  mongoose= require('mongoose')

const UserModel = mongoose.Schema(

    {
        "username":{
            type:String,
            required:true,
            unique:true,
            index:true
        },
        "password":{
            type:String,
            required:true,
        },
        "role":{
            type:String,
            required:true,
        },
    },
    {versionKey:false}
)

let user=mongoose.model("User", UserModel)

module.exports = user;