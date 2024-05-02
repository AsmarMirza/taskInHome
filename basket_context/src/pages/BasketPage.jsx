import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { MainContext } from '../context/MainProvider'

function BasketPage() {

    const {basket,removeBasket}=useContext(MainContext)
  return (
    <div>
        <Helmet >
        <title>Basket  Page</title>
        <link rel="notImportant" href="https://www.chipotle.com" />
        <meta name="whatever" value="notImportant" />
        <link rel="canonical" href="https://www.tacobell.com" />
        <meta property="og:title" content="A very important title" />
      </Helmet>
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
