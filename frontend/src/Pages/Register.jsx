import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Register() {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [education, setEducation] = useState("");
  const [photo, setPhoto] = useState("");
  const [photoPreview, setPhotoPreview] = useState("");
    const changephotohandler = (e) => {
        const file = e.target.files[0];
        const reader=new FileReader()
            reader.readAsDataURL(file)
reader.onload=()=>{
    setPhotoPreview(reader.result)
    setPhoto(file)
}
        
    }
    const handleRegister=async(e)=>{
        e.preventDefault();
        const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("education", education);
    formData.append("photo", photo);
    try{
const {data}=await axios.post("http://localhost:3003/api/user/register",formData);
console.log("response from register",data);
alert("Registered Successfully");
 
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setRole("");
      setEducation("");
      setPhoto("");
      setPhotoPreview("");
    }
    catch(error){
        console.log("error while registering user",error);
    }
    }
  return (
    <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className='w-full max-w-md bg-white shadow-md rounded-lg p-8'>
        <form onSubmit={handleRegister}>
 <div className="font-semibold text-xl items-center text-center">
             Cilli<span className="text-blue-500">Blog</span>
        </div>
          <h1 className="text-xl font-semibold mb-6">Register</h1>
          <select className="w-full p-2 mb-4 border rounded-md"  onChange={(e) => setRole(e.target.value)} value={role}>
             <option value="">Select Role</option>
              <option value="user">user</option>
              <option value="admin">admin</option>
          </select>
          <div className="mb-4">
            <input type="text" placeholder="Name" value={name} className="w-full p-2  border rounded-md"  onChange={(e) => setName(e.target.value)}/> </div>
             <div className="mb-4"> <input type="email" placeholder="Email" value={email} className="w-full p-2  border rounded-md" onChange={(e) => setEmail(e.target.value)}/></div>
               <div className="mb-4"> <input type="number" placeholder="Phone No." value={phone} className="w-full p-2  border rounded-md" onChange={(e) => setPhone(e.target.value)}/></div>
                  <div className="mb-4"><input type="password" placeholder="Password" value={password} className="w-full p-2  border rounded-md" onChange={(e) => setPassword(e.target.value)}/></div>
         <select  className="w-full p-2 mb-4 border rounded-md" onChange={(e) => setEducation(e.target.value)} value={education}>
             <option value="">Select Your Education</option>
              <option value="BCA ">BCA</option>
              <option value="MCA ">MCA</option>
              <option value="MBA ">MBA</option>
              <option value="BBA ">BBA</option>
         </select>
         <div className="flex items-center mb-4">
            <div className="photo w-20 h-20 mr-4">
 <img src={photoPreview ? `${photoPreview}` : "photo"} alt="photo"></img>
            </div>
            <input type="file" className='w-full p-2 border rounded-md' onChange={changephotohandler}></input>
         </div>
         {/* <p className='text-center mb-4'>Already register?<Link className="text-blue-500">Login now</Link></p> */}
          <p className="text-center mb-4">
              Already registered?{" "}
              <Link to={"/login"} className="text-blue-600">
                Login Now
              </Link>
            </p>
            <button type="submit" className='w-full p-2 bg-blue-500 hover:bg-blue-800 duration-300 rounded-md text-white'>Register</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Register
