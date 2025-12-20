import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
function Login() {
    
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  
   
        
    
    const handlelogin=async(e)=>{
        e.preventDefault();
        
    try{
const {data}=await axios.post("http://localhost:3003/api/user/login",{email,phone,password,role},{
    withCredentials:true,
    headers:{

       "Content-Type": "application/json",
    }
});
console.log("response from login",data);
toast.success(data.message||"Login Successfully");

      
      setEmail("");
      setPhone("");
      setPassword("");
      setRole("");
     
    }
    catch(error){
        console.log("error while logging in user",error);
        toast.error(error.response.data.message||"Something went wrong");
    }
    }
  return (
    <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className='w-full max-w-md bg-white shadow-md rounded-lg p-8'>
        <form onSubmit={handlelogin}>
 <div className="font-semibold text-xl items-center text-center">
             Cilli<span className="text-blue-500">Blog</span>
        </div>
          <h1 className="text-xl font-semibold mb-6">Login</h1>
          <select className="w-full p-2 mb-4 border rounded-md"  onChange={(e) => setRole(e.target.value)} value={role}>
             <option value="">Select Role</option>
              <option value="user">user</option>
              <option value="admin">admin</option>
          </select>
           
             <div className="mb-4"> <input type="email" placeholder="Email" value={email} className="w-full p-2  border rounded-md" onChange={(e) => setEmail(e.target.value)}/></div>
               <div className="mb-4"> <input type="number" placeholder="Phone No." value={phone} className="w-full p-2  border rounded-md" onChange={(e) => setPhone(e.target.value)}/></div>
                  <div className="mb-4"><input type="password" placeholder="Password" value={password} className="w-full p-2  border rounded-md" onChange={(e) => setPassword(e.target.value)}/></div>
        
        
          <p className="text-center mb-4">
            New User{" "}
              <Link to={"/register"} className="text-blue-600">
                Register Now
              </Link>
            </p>
            <button type="submit" className='w-full p-2 bg-blue-500 hover:bg-blue-800 duration-300 rounded-md text-white'>Login</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login
