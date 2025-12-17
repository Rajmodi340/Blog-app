import mongoose from "mongoose";
import { Blog } from "../models/blog.js";
import { v2 as cloudinary } from "cloudinary";
export const createblog = async (req, res) => {
    try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: "Blog Image is required" });
    }
    const { blogImage } = req.files;
    const allowedFormats = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedFormats.includes(blogImage.mimetype)) {
      return res.status(400).json({
        message: "Invalid photo format. Only jpg and png are allowed",
      });
    }
    const { title, category, about } = req.body;
    if (!title || !category || !about) {
      return res
        .status(400)
        .json({ message: "title, category & about are required fields" });
    }
    const adminName = req?.user?.name;
    const adminPhoto = req?.user?.photo;
    const createdBy = req?.user?._id;

    const uploaded = await cloudinary.uploader.upload(blogImage.tempFilePath);
    if (!uploaded || uploaded.error) {
      console.error("Cloudinary upload failed:", uploaded?.error);
      return res.status(500).json({ message: "Image upload failed" });
    }

    const blogData = {
      title,
      about,
      category,
      adminName,
      adminPhoto,
      createdBy,
      blogImage: {
        public_id: uploaded.public_id,
        url: uploaded.secure_url,
      },
    };

    const blog = await Blog.create(blogData);

    return res.status(201).json({
      message: "Blog created successfully",
      blog,
    });
  } catch (error) {
    console.error(error);
    const payload = { error: "Internal Server error" };
    if (process.env.NODE_ENV !== "production") {
      payload.details = error.message;
    }
    return res.status(500).json(payload);
  }
};
export const deleteblog=async(req,res)=>{
  const {id}=req.params;
  try{
const blog =await Blog.findById(id);
if(!blog){
    return res.status(404).json({message:"Blog not found"});
}
await blog.deleteOne()
return res.status(200).json({message:"Blog deleted successfully"});
  }
  catch(error){

  }
}
export const getAllblog=async(req,res)=>{
  const allblogs=await Blog.find()
  res.status(200).json({blogs:allblogs})
}
export const getsingleBlogs = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid blog ID" });
    }
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    return res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    const payload = { error: "Internal Server error" };
    if (process.env.NODE_ENV !== "production") payload.details = error.message;
    return res.status(500).json(payload);
  }
}
export const getMyBlogs = async (req, res) => {
  const createdBy = req.user._id;
  const myBlogs = await Blog.find({ createdBy });
  res.status(200).json(myBlogs);
};
export const updateBlog = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid Blog id" });
  }
  const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
  if (!updatedBlog) {
    return res.status(404).json({ message: "Blog not found" });
  }
  res.status(200).json(updatedBlog);
};