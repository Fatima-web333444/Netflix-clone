// import React from 'react'

import { useState } from "react";
import { Link } from "react-router-dom"
import { userAuthStore } from "../store/authUser";

const SignUpPage = () => {
    const {searchParams}=new URL(document.location);
    const emailValue=searchParams.get("email");

    const [email,setEmail]=useState(emailValue||"");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    
    const {signup}=userAuthStore();
    //when user submit the form we want to handle it so we need function
    const handleSignup = (e)=>{
        e.preventDefault();
        signup({email,username,password});
    }
    //now we need to bind these states to inputs like value={email} and so on
  return (
    <div className="h-screen w-full hero-bg ">
    <header className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to="/">
            <img src="/netflix-logo.png" alt="Logo" className="w-52"/>
        </Link>
    </header>

    <div className=" flex justify-center items-center mt-10">
        <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
            <h1 className="text-center text-white text-2xl font-bold mb-4">Sign Up</h1>
            <form className="space-y-4" onSubmit={handleSignup}>
                <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-300 block">Email</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                        placeholder="you@example.com"
                        id="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="username" className="text-sm font-medium text-gray-300 block">Username</label>
                    <input
                        type="username"
                        className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                        placeholder="Johny"
                        id="username" value={username} onChange={(e)=>setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="text-sm font-medium text-gray-300 block">Password</label>
                    <input
                        type="password"
                        className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                        placeholder="*********"
                        id="password" value={password} onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <button className="w-full bg-red-600 rounded-md hover:bg-red-700 text-white font-semibold py-2">Sign Up</button>
                <div className="text-center text-gray-400">
                    Already have an account? <Link to={"/login"} className="text-red-500 hover:underline">Sign in</Link>
                </div>
            </form>
        </div>
    </div>

    </div>
  )
}

export default SignUpPage

