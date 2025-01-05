// import { userAuthStore } from "../../store/authUser"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {LogOut, Menu, Search} from 'lucide-react'
import { userAuthStore } from './../store/authUser';
import { useContentStore } from '../store/content';

const Navbar = () => {
    //usestate
  const [isMobileMenuOpen,setMobileMenuOpen]=useState(false);
  ///call from hook
  const {user,logout}=userAuthStore();//we call the user from hook
  
  const toggleMobileMenu=()=>{
    setMobileMenuOpen(!isMobileMenuOpen);
  }
  const {setContentType}=useContentStore()

    return (
    <header className=" max-w-6xl mx-auto flex flex-wrap items-center justify-between  p-4 h-20 ">
            <div className="flex items-center gap-10 z-50 ">
                <Link to="/">
                    <img src="/netflix-logo.png" alt='' className='w-32 sm:w-40'/>
                </Link>
                {/* desktop navbaritems */}
                
                    <div className='hidden sm:flex gap-2 items-center'>
                        <Link to="/" className='hover:underline' onClick={()=>setContentType("movie")}>
                            Movies
                        </Link>
                        <Link to="/" className='hover:underline'onClick={()=>setContentType("tv")}>
                            TVShows
                        </Link>
                        <Link to="/history" className='hover:underline'>
                            Search History
                        </Link>
                    </div>
            </div>
                <div className='flex gap-2 items-center z-50'>
                    <Link to={"/search"}>
                        <Search className="size-6 cursor-pointer"/>
                    </Link>
                    <img src={user.image} alt="Avatar" className='h-8 rounded cursor-pointer'/>
                    <LogOut className='size-6 cursor-pointer' onClick={logout}/>

                    <div className='sm:hidden'>
                        <Menu className='size-6 cursor-pointer' onClick={toggleMobileMenu}/>
                    </div>
                </div>
            
       
        {/* mobile navbaritems/ */}
        {isMobileMenuOpen &&(
            <div className='w-full sm:hidden mt-4 z-50 bg-black text-white border rounded border-gray-800'>
                <Link to={"/"} className='block hover:underline p-2' onClick={toggleMobileMenu}>
                  Movies  
                </Link>
                <Link to={"/"} className='block hover:underline p-2' onClick={toggleMobileMenu}>
                  Tv shows  
                </Link>
                <Link to={"/"} className='block hover:underline p-2' onClick={toggleMobileMenu}>
                  Search History  
                </Link>
            </div>
        )}
    </header>
  )
}

export default Navbar
