import mongoose from "mongoose"

 const blogschema = new mongoose.Schema({
   title:{
        type:String,
        required:true
    },
   
    blogImage:{
       public_id:{
        type:String,
        // required:true
       },
       url:{
        type:String,
        required:true
       }
    },
    category:{
        type:String,
        // required:true
    },
    about:{
        type:String,
        minlength:[200,"Blog must be at least 200 characters"],
        required:true
    },
    adminName:{
        type:String,
        // required:true
    },
    adminPhoto:{
         type:String,
        // required:true
         
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        // required:true
    }

 })
 export  const Blog=mongoose.model("Blog",blogschema);