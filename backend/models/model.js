import mongoose from "mongoose"
import validator from "validator"
 const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Please enter a valid email"],
        unique:true
    },phone:{
        type:Number,
        required:true,
        unique:true,
    },
    photo:{
        type:String,
        
    },
    education:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["admin","user"],
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        select:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

 })
 export default  User=mongoose.model("User",schema);