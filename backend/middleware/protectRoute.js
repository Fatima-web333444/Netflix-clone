import jwt from "jsonwebtoken"
import { ENV_VARS } from "../config/envVars.js";
import { User } from './../models/user.model.js';


export const protectRoute=async(req,res,next)=>{
    try {
        const token=req.cookies["jwt-netflix"];

        if(!token)
        {
            return res.status(401).json({success:false,message:"Unauthorized -No token provided"});
        }

        const decode=jwt.verify(token,ENV_VARS.JWT_SECRET);
        if(!decode)
        {
            return res.status(401).json({success:false,message:"Unauthorized -Invalid Token"});

        }
        const user=await User.findById(decode.userId).select("-password");
        if(!user)
        {
            return res.status.json({success:false,message:"user not found"});
        }
        req.user=user;
        next();
    } catch (error) {
        console.log("Eror in protectRotue middelware",error.message);
        res.status(500).json({success:false,message:"internal server error"});
    }
}