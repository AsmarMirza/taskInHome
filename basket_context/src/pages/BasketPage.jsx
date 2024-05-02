import React, { useContext } from 'react'
import { MainContext } from '../context/MainProvider'

function BasketPage() {

    const {basket,removeBasket}=useContext(MainContext)
  return (
    <div>
    <h1>Home Page</h1>
    <div className='container'>
{basket.map((x)=>(<div className='box'>
  <h3>{x.title}</h3>
  <p>{x.price}$</p>
  <img className='img' src={x.image} alt="" />
  <button onClick={()=>removeBasket(x)}>remove basket</button>
  
 
</div>))}
    </div>
  </div>
  )
}

export default BasketPage
