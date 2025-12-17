import express from "express"
import { createblog, getsingleBlogs } from "../controllers/blogcontroller.js"
import { isAdmin, isauth } from "../middleware/authuser.js"
import { deleteblog } from "../controllers/blogcontroller.js"
import { getAllblog } from "../controllers/blogcontroller.js"
import { getMyBlogs } from "../controllers/blogcontroller.js"
import { updateBlog } from "../controllers/blogcontroller.js"
const blogrouter = express.Router()
blogrouter.post("/createblog",isauth,isAdmin("admin"),createblog)
blogrouter.delete("/deleteblog/:id",isauth,isAdmin("admin"),deleteblog)
blogrouter.get("/getblog",isauth,getAllblog)
blogrouter.get("/singleblog/:id",isauth,getsingleBlogs)
blogrouter.get("/myblogs",isauth,isAdmin("admin"),getMyBlogs)
blogrouter.put("/updateblog/:id",isauth,isAdmin("admin"),updateBlog)
export default blogrouter