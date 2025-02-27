const  mongoose= require('mongoose')

const customerModel = mongoose.Schema(

    {
        "customerId":{
            type:String,
            required:true,
            unique:true,
            index:true
        },
        "customerName":{
            type:String,
            required:true,
        },
        "gender":{
            type:String,
            required:true,
        },
        "loyaltyDate":{
            type:Date,
        },
        "level":{
            type:String,
        },
        "totalPoints":{
            type:String,
        },
        "customerDob":{
            type:Date,
            required:true,
        },
        "contactNo":{
            type:String,
            required:true,
            unique: true
        },
        "buildNo":{
            type:String,
        },
        "lane":{
            type:String,
        },
        "city":{
            type:String,
        },
        "state":{
            type:String,
        },
        "postalCode":{
            type:String,
        },
        "email":{
            type:String,
            unique: true
        },
        "recentPurchase":{
            type:Date,
        },
        "proPic":{
            type:String,
            maxlength: 16000000
        }
    },
    {versionKey:false}
)

let customer=mongoose.model("Customer", customerModel)

module.exports = customer;