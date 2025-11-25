import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import router from "./routes/route.js"
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
app.use(express.json());
app.use("/api/user",router);

app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`);
});