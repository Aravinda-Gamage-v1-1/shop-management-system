const  mongoose= require('mongoose')

const supplierModel = mongoose.Schema(

    {
        "supplierCode":{
            type:String,
            required:true,
            unique:true,
            index:true
        },
        "supplierName":{
            type:String,
            required:true,
        },
        "category":{
            type:String,
            required:true,
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
        "supCountry":{
            type:String,
        },
        "mobileNo":{
            type:String,
            required:true,
            unique: true
        },
        "landNo":{
            type:String,
            required:true,
            unique: true
        },
        "email":{
            type:String,
            unique: true
        }
    },
    {versionKey:false}
)

let supplier=mongoose.model("Supplier", supplierModel)

module.exports = supplier;