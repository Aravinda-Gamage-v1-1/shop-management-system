const  mongoose= require('mongoose')

const employeeModel = mongoose.Schema(

    {
        "employeeId":{
            type:String,
            required:true,
            unique:true,
            index:true
        },
        "employeeName":{
            type:String,
            required:true,
        },
        "gender":{
            type:String,
            required:true,
        },
        "employeeStatus":{
            type:String,
        },
        "branch":{
            type:String,
        },
        "designation":{
            type:String,
        },
        "role":{
            type:String,
        },
        "employeeDob":{
            type:Date,
            required:true,
        },
        "joinDate":{
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
        "guardianName":{
            type:String,
        },
        "emergencyContact":{
            type:String,
            unique: true
        },
        "proPic":{
            type:String,
            maxlength: 16000000
        }
    },
    {versionKey:false}
)

let employee=mongoose.model("Employee", employeeModel)

module.exports = employee;