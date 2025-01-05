// import React from 'react'

import { useState } from "react"
import { Link } from "react-router-dom"
import { userAuthStore } from "../store/authUser";


const LoginPage = () => {
    //usestate
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const {login}=userAuthStore();
//handle submit login function here 
  const handlelogin =(e)=>{
    e.preventDefault();
    login({email,password});//this login function is comming from authstrore
  }
    return (
        <div className="h-screen w-full hero-bg ">
        <header className="max-w-6xl mx-auto flex items-center justify-between p-4">
            <Link to="/">
                <img src="/netflix-logo.png" alt="Logo" className="w-52"/>
            </Link>
        </header>
    
        <div className=" flex justify-center items-center mt-10">
            <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
                <h1 className="text-center text-white text-2xl font-bold mb-4">Login</h1>
                <form className="space-y-4" onSubmit={handlelogin}>
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
                        <label htmlFor="password" className="text-sm font-medium text-gray-300 block">Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                            placeholder="*********"
                            id="password" value={password} onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <button className="w-full bg-red-600 rounded-md hover:bg-red-700 text-white font-semibold py-2">Login</button>
                    <div className="text-center text-gray-400">
                       Don't  have an account? <Link to={"/signup"} className="text-red-500 hover:underline">Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    
        </div>
      )
  
}

export default LoginPage
