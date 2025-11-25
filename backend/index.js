import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config();
const app=express();
app.get("/",(req,res)=>{
    res.send("Hello World");
})
try{
    mongoose.connect(process.env.MONGO_URL)
    console.log("Connected to MongoDB");
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
}

app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`);
});