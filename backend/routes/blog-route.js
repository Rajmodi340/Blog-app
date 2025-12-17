import express from "express"
import { createblog } from "../controllers/blogcontroller.js"
import { isAdmin, isauth } from "../middleware/authuser.js"
const blogrouter = express.Router()
blogrouter.post("/createblog",isauth,isAdmin("admin"),createblog)
export default blogrouter