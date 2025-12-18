import React, { createContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import axios from 'axios';
export const AuthContext=createContext();
 export function Authprovider({children}) {
    const [blogs,setBlogs]=useState()
    useEffect(() => {
const fetchBlogs=async()=>{
    try{
const response=await axios.get("http://localhost:3003/api/blog/getblog", { withCredentials: true });
console.log("response from fetch blogs",response);
setBlogs(response.data);
    }
    catch(error){
        console.log("error while fetching blogs",error);
    }
}

fetchBlogs()
    }, []);
  return (
    <AuthContext.Provider value={{blogs}}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth=()=>

useContext(AuthContext);

