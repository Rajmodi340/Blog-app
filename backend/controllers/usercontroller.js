import {User} from "../models/model.js";
import { v2 as cloudinary } from "cloudinary";
import createTokenAndSaveCookies from "../jwt/Auth.js";
import bcrypt from "bcryptjs";
export const register=async(req,res)=>{
    if(!req.files||Object.keys(req.files).length===0){
        return res.status(400).json({message:"No file uploaded"});
    }
    const {photo}=req.files;
    const allowedformats=["image/jpeg","image/png"]
    if(!allowedformats.includes(photo.mimetype)){
        return res.status(422).json({message:"Invalid file format"});
    }
    const {name,email,phone,education,role,password}=req.body;
    if(!name || !email || !phone || !education || !role || !password||!photo){
        return res.status(400).json({message:"All fields are required"});
    }
    const newuser=await User.findOne({email})
    if(newuser){
        return res.status(409).json({message:"User already exists"});
    }
    const uploadedPhoto = await cloudinary.uploader.upload(photo.tempFilePath);
    if(!uploadedPhoto){
        return res.status(500).json({message:"Photo upload failed"});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
        name,
        email,
        phone,
        education,
        role,
        password: hashedPassword,
        photo: {
            public_id: uploadedPhoto.public_id,
            url: uploadedPhoto.secure_url
        }
    });
   await user.save()
   if(user){
    createTokenAndSaveCookies(user._id,res)
   
        .then(() => res.status(201).json({message:"User registered successfully"}))
        .catch(error => res.status(500).json({message:"Error registering user", error}));
   }
}