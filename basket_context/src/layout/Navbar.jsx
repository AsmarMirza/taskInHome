import  { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import { MainContext } from '../context/MainProvider'


function Navbar() {
 const {basket}=useContext(MainContext)
  return (
    <div className='navbar'>
      <Link to={"/"}>Home</Link>
      <Link to={"/Basket"}>Basket {basket.length}</Link>
      <Link to={"/form"}>Form</Link>
      
    </div>
  )
}

export default Navbar
