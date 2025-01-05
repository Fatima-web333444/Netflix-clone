import {create} from 'zustand';
import axios from 'axios';
import toast from "react-hot-toast";
//we are returning object from this hook
    //the benifit of this file is that we can go any of thse components and pages and call this hook and get any of these values
export const userAuthStore=create((set)=>({
    user:null,
    isSigningUp:false,
    isCheckingAuth:true,
    loggingin:true,
    signup:async(credentials)=>{
        set({isSigningUp:true})
        
        try {
            
            const response =await axios.post("/api/v1/auth/signup",credentials);//user details ka sath backend per request jarahi ha
            set({user:response.data.user,isSigningUp:false});//this is what wew are returning from backend
            toast.success("Signup Successfull"); 
            
        } catch (error) {
             toast.error(error.response.data.message||"signup failed");
             set({isSigningUp:false,user:null});
        }
    },
    login:async(credentials)=>{
        set({loggingin:true});
        try {
            
            const response =await axios.post("/api/v1/auth/login",credentials);
            set({user:response.data.user,loggingin:false});//this is what wew are returning from backend
            toast.success("login Successfull"); 
        } catch (error) {
            set({loggingin:false,user:null});
             toast.error(error.response.data.message||"login failed");
        }
    },
    logout:async()=>{
        set({isloggingout:true});
        try {
            await axios.post("/api/v1/auth/logout")
            set({user:null,isloggingout:false});
            toast.success("Logged out successfully"); 
        } catch (error) {
            set({isloggingout:false});
            toast.error(error.response.data.messsage||"an error occured in logout function");
        }
    },
    authCheck:async()=>{
        set({isCheckingAuth:true});
        try {
            const response=await axios.get("api/v1/auth/authCheck");
            set({ user:response.data.user,isCheckingAuth:false});
        } catch (error) {
            console.log(error);
            set({isCheckingAuth:false,user:null});
            // toast.error(error.response.data.message||"an error occured");
        }
    }
}))