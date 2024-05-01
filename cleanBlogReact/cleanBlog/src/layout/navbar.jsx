import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"
import Home from '../pages/home'
function Navbar() {
  return (
    <div>
      <div className='header'>
    <nav className="navbar">
      <div className="start">
        <h2 className="start__text">Start Bootstrap</h2>
      </div>
      <ul className="navbar__list">
        <li><Link to={"/"} className='home__a'>Home</Link></li>
        <li><Link to={"/about"} className='home__a'>About</Link></li>
        <li><Link to={"/samplePost"} className='home__a'>Sample Post</Link></li>
        <li><Link to={"contact"} className='home__a'>Contact</Link></li>
      </ul>
      <div className="nav_butn">Menu
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
    </div>
    </div>
  )
}

export default Navbar
