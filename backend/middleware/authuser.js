import { User } from "../models/model.js";
import jwt from "jsonwebtoken";
export const isauth=async(req,res,next)=>{
    try{
const token=req.cookies.jwt;
if(!token){
    return res.status(401).json({message:"Unauthorized"})
}
console.log("Token from cookie:", token);
const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);
const user=await User.findById(decoded.userId);
if(!user){
    return res.status(401).json({message:"Unauthorized"})
}
req.user=user
next()
    }
    catch(error){
        return res.status(401).json({message:"Unauthorized"})
    }
}
// authorization
export const isAdmin=(...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return res.status(403).json({message:"Forbidden"})
        }
        next()
    }
}