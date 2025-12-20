import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Footer from './component/Footer'
import {Route, Routes, useLocation } from "react-router-dom"
import Blogs from './Pages/Blogs'
import About from './Pages/About'
import Login from './Pages/Login'
import Contact from './Pages/Contact'
import Creater from './Pages/Creater'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import { useAuth } from './context/Authprovider'
import { Toaster } from "react-hot-toast";
function App() {
  const location = useLocation()
  const hiddennavfot=["/login","/register","/dashboard"].includes(location.pathname)
  const {blogs}=useAuth()
  console.log(blogs);
  return (
    
    <div >
      {!hiddennavfot && <Navbar></Navbar>}
      <Routes>
       <Route  exact path="/" element={<Home></Home>}></Route>
      <Route  exact path="/blogs" element={<Blogs></Blogs>}></Route>
      <Route  exact path="/about" element={<About></About>}></Route>
      <Route  exact path="/login" element={<Login></Login>}></Route>
      <Route  exact path="/contact" element={<Contact></Contact>}></Route>
      <Route  exact path="/creater" element={<Creater></Creater>}></Route>
      <Route  exact path="/register" element={<Register></Register>}></Route>
      <Route  exact path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
      <Toaster></Toaster>
      {!hiddennavfot && <Footer></Footer>}
</div>

  )
}

export default App
