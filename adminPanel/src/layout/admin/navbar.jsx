import "./adminNavbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='adminBox'>
    
     <Link to={"/"}>Main site</Link>
     <Link to={"/adminLayout/addProducts"}>Add products</Link>
     <Link to={"/adminLayout/editProducts/:id"}>Edit</Link>
     <Link to={"/adminLayout/products"}>Products</Link>

    </div>
  )
}

export default Navbar
