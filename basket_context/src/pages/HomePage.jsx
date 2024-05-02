import React, { useContext } from 'react'
import { useState ,useEffect} from 'react'
import "./home.css"
import { MainContext } from '../context/MainProvider'
function HomePage() {

const [products, setProducts] = useState([])

const {addBasket}=useContext(MainContext)
useEffect(() => {
    async function getAllProducts(){
        const res=await fetch ("https://fakestoreapi.com/products")
        const data=await res.json()
      setProducts(data)
     }
getAllProducts()
  
}, [])

  return (
    <div>
      <h1>Home Page</h1>
      <div className='container'>
{products.map((x)=>(<div className='box'>
    <h3>{x.title}</h3>
    <p>{x.price}$</p>
    <img className='img' src={x.image} alt="" />
    <button onClick={()=>addBasket(x)}>add basket</button>
</div>))}
      </div>
    </div>
  )
}

export default HomePage
