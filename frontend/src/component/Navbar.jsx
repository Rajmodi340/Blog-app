import React from 'react'
import { useAuth } from '../context/Authprovider'
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';
function Navbar() {
    const {user,blogs}=useAuth()
    const [show,setShow]=useState(false);
    console.log(blogs);
  return (
   <>
   <nav className=" shadow-lg px-4 py-2">
    <div className="flex items-center justify-between container mx-auto">
        <div className="font-semibold text-xl">
             Cilli<span className="text-blue-500">Blog</span>
        </div>
         <div className=" mx-6">
            <ul className="hidden md:flex space-x-6">
                <Link to="/" className="hover:text-blue-500"><li>Home</li></Link>
                <Link to="/about" className="hover:text-blue-500"><li>About</li></Link>
                <Link to="/contact" className="hover:text-blue-500"><li>Contact</li></Link>
                <Link to="/blogs" className="hover:text-blue-500"><li>Blogs</li></Link>
                <Link to="/creater" className="hover:text-blue-500"><li>Creater</li></Link>
            </ul>
            <div className="md:hidden" onClick={()=>setShow(!show)}>{show ? <IoCloseSharp className="text-2xl"/> : <AiOutlineMenu className="text-2xl"/>}</div>
            </div> 
          <div className="hidden md:flex space-x-2">
            <Link to="/dashboard" className="bg-blue-600 text-white font-semibold hover:bg-blue-800 duration-300 px-4 py-2 rounded">Dashboard</Link>
            <Link to="/login" className="bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded">Login</Link>
          </div>
    </div>
    {/* mobile navbar */}
{show &&(
    <div className="md:hidden">
        <ul className="flex flex-col items-center space-y-4 py-4">
            <Link to="/" onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:text-blue-500"><li>Home</li></Link>
            <Link to="/about" onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:text-blue-500"><li>About</li></Link>
            <Link to="/contact" onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:text-blue-500"><li>Contact</li></Link>
            <Link to="/blogs" onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:text-blue-500"><li>Blogs</li></Link>
            <Link to="/creater" onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:text-blue-500"><li>Creater</li></Link>
        </ul>
    </div>
)}
   </nav>
   </>
  )
}

export default Navbar
