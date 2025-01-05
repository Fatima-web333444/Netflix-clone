import express from "express";
import {authCheck, logout, signup} from '../controllers/auth.controller.js';//you have put type=module in package.json file so always write .js at end to ensure it is module
import {login} from '../controllers/auth.controller.js';//you have put type=module in package.json file so always write .js at end to ensure it is module
import { protectRoute } from "../middleware/protectRoute.js";
const router=express.Router();

router.post("/signup",signup);
router.post("/login",login);//you update your api but still want to work old version 
//it is best practise to write api/version/root 
router.post("/logout",logout);
router.get("/authCheck",protectRoute,authCheck);

//"api/v1/sigup" and "api/v2/signup" both will have differnt functionality
export default router;
// oomWa7bVKxubY77r