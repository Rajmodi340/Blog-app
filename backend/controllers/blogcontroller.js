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
}