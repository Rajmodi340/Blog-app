import express from "express"
import { register } from "../controllers/usercontroller.js";
import { login } from "../controllers/usercontroller.js";
import { logout } from "../controllers/usercontroller.js";
import { isauth } from "../middleware/authuser.js";
import { getMyProfile } from "../controllers/usercontroller.js";
import { getAdmins } from "../controllers/usercontroller.js";
 const router = express.Router();
 router.post("/register", register)
 router.post("/login", login)
 router.post("/logout", logout,isauth)
 router.get("/myprofile",isauth,getMyProfile)
 router.get("/admin",getAdmins)
 export default router;