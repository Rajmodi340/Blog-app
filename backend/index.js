import express from "express"
import dotenv from "dotenv"
import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose"
import router from "./routes/route.js"
import blogrouter from "./routes/blog-route.js";
import fileUpload from "express-fileupload"
import cookieParser from "cookie-parser";

dotenv.config();
const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/"
}));
try{
    mongoose.connect(process.env.MONGO_URL)
    console.log("Connected to MongoDB");
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
}

app.use("/api/user",router);
app.use("/api/blog",blogrouter);
// cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});


app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`);
});