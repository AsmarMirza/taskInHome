import React from 'react'
import "./mainNavbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='mainBox'>
      <Link to={"/"}>Home</Link>
      <Link to={"/adminLayout"}>Admin panel</Link>
      <Link to={"/detail"}>Detail</Link>
    
    </div>
  )
}

export default Navbar
