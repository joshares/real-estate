import React from "react";
import { NavLink } from "react-router-dom";
import headerIcon from '../images/header-svg.svg'
import { useUserContext } from "../context/user_context";
import { useState } from "react";
import { FaBars } from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'




const Navbar = () => {
    const {loginWithRedirect,myUser,logout} = useUserContext();
    const [open, setOpen] = useState(false)
    const { given_name } = myUser
    const handleClick = ()=> {
      setOpen(!open)
    } 
 return (
   <nav className="nav-main">
    {
      open ? (
        <main className="flex hidden nav-phone">
          <div  className="flex nav-links">
          <NavLink onClick={handleClick}  to='/'>Home</NavLink>
          <NavLink onClick={handleClick}  to='/property'>Our Property</NavLink>
          <NavLink onClick={handleClick}  to='/agent'>Agent</NavLink>
          <NavLink onClick={handleClick}  to='/blog'>Blog</NavLink>
        </div>
        <AiOutlineClose onClick={handleClick} className="close"/>
        </main>
      ) : null
    }
    <FaBars onClick={()=> setOpen(true)} className="hidden"/>
    <div className="nav-icons">
     <img src={headerIcon} alt='icon' className="nav-icon"/>
     <h3>HOMA</h3>
    </div>
    <div className=" show nav-pages">
     <NavLink to='/'>Home</NavLink>
     <NavLink to='/property'>Our Property</NavLink>
     <NavLink to='/agent'>Agent</NavLink>
     <NavLink to='/blog'>Blog</NavLink>
    </div>
    
     {
      myUser.given_name === null ? (
        <div className="nav-buttons buttons">
        <button className="btn white-btn" type="button" onClick={loginWithRedirect}>
          Login
       </button>
       <button onClick={loginWithRedirect} className="btn blue-btn" type="button">
        sign up
       </button>
        </div>
      ) : (
        
        <div className="nav-buttons buttons">
        <p>Welcome, {given_name}</p>
        <button onClick={()=> logout({ returnTo: window.location.origin })}
         className="btn blue-btn" type="button">Logout</button>
        </div> 
      )
      }
   </nav>
 )
}

export default Navbar