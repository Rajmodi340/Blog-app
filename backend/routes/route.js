import express from "express"
import { register } from "../controllers/usercontroller.js";
import { login } from "../controllers/usercontroller.js";
import { logout } from "../controllers/usercontroller.js";
import { isauth } from "../middleware/authuser.js";
 const router = express.Router();
 router.post("/register", register)
 router.post("/login", login)
 router.post("/logout", logout,isauth)
 export default router;