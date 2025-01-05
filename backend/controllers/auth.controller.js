import { generateTokenAndSetCookie } from '../utils/generateToken.js';
import { User } from './../models/user.model.js';
import bcryptjs from "bcryptjs";
export async function signup(req,res)
{
        // Validate input fields
    try {
        const {email,password,username} = req.body;
        if(!email || !password || !username){
            return res.status(400).json({success:false,message:"All feilds are required"});
        }
    // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email))
        {
            return res.status(400).json({sucess:false,message:"Imvalid email"})
        }
        //Validate password length
        if(password.length<6)
        {
            return res.status(400).json({success:false,message:"password must be at least 6 characters"})
        }
        const existingUserByEmail = await User.findOne({email:email});
        //check if email already exisit 
        if(existingUserByEmail)
        {
            return res.status(400).json({success:false,message:"user with this email already exist"})
        }
        const existingUserByUsername = await User.findOne({username:username});
        //check if user already exist
        if(existingUserByUsername)
        {
            return res.status(400).json({success:false,message:"usernames already exist"})
        }
        //hash the password
        const salt = await bcryptjs.genSalt(10); 
        const hashedPassword = await bcryptjs.hash(password,salt) ;
        //set profile picture randomly
        const profile_pics = ["/avatar1.png", "/avatar2.png","/avatar3.png" ];
        const image=profile_pics[Math.floor(Math.random()*profile_pics.length)];
        //create new user
        const newUser = new User({
            email,
            password:hashedPassword,
            username,
            image
            })
        //save user to database and set cookies
        if(newUser){
            generateTokenAndSetCookie(newUser._id,res);
            await newUser.save();
            //remove password from response
            res.status(201).json({
                success:true,
                user:{
                 ...newUser._doc,
                 password:"",//no need to return passwrod back to client
                },
             });
        }
    } catch (error) {
        console.log("Eror in sign up controller",error.message);
        res.status(500).json({success:false,message:"internal server eror"});
    }
    // res.send("signup route");
}

export async function login(req,res){
    try {
        const {email,password}=req.body;
  // Validate input fields
        if(!email || !password)
        {
            return res.status(400).json({success:false,message:"all fields required"});
        }
 // Find user by email
        const user = await User.findOne({email:email})
        if(!user)
        {
            return res.status(404).json({success:false,message:"invalid user"}); 
        }
        // Check if password is correct

        const isPasswordCorrect= await bcryptjs.compare(password,user.password);

        if(!isPasswordCorrect)
        {
            return res.status(400).json({success:false,message:"invalid credentials"});
        }
                // Generate token and set cookie
        generateTokenAndSetCookie(user._id,res);
        // Return user data without password
        res.status(200).json({
            success:true,
            user:{
                ...user._doc,
                password:"",//no need to return password back to client
            }
        })

    } catch (error) {
        res.status(500).json({success:false,message:"login error"});
    }
}

export async function logout(req,res){
try {
    res.clearCookie("jwt-netflix");
    res.status(200).json({success:true,message:"Logged out successfully!!"});
} catch (error) {
    console.log("error in log out controller ",error.message);
    res.status(500).json({success:false,message:"error in logout contoller"});
}

}

export async function authCheck(req,res){
    try {
        res.status(200).json({success:true,user:req.user});
    } catch (error) {
        console.log("error in authCheck controller",error.message);
        res.status(500).jason({success:false,message:"internal server errror"});
    }
}