

import useLocalStorage from '../../hook/useLocalStorage';
import "./index.css"
function Basket() {
  const [basket, setBasket] = useLocalStorage("myBasket",[])
  const [total, setTotal] = useLocalStorage("myTotal",0)


  
  const products=[
    {name:"Xiaomi Mi 11 Ultra",price:1500},
    {name:"iPhone 13 Pro",price:1900},
    {name:"Samsung Galaxy S21+",price:1300},
    {name:"Huawei P40 Pro", price:2000},
    {name:"Sony Xperia 1 III",price:1889.9}
  ]
  function addToBasket(x){
setBasket([...basket,x])
setTotal(total+x.price)
  }

  return (
    <div className='basketContainer'>
    <h1>Our products:</h1>
    {products.map((x,i)=>(<div className='productBox' key={i}><h3>{x.name} -{x.price}$</h3><button onClick={()=>addToBasket(x)}>add to basket</button></div>))}
    <h1>Basket:</h1>
    {basket.map((product,i)=>( <div className='productBox' key={i}><h3 >{product.name}-{product.price}$</h3> <button>remove</button></div>))}
    <h1>Total:{total}$</h1>
    </div>
  );
}




export default Basket;
