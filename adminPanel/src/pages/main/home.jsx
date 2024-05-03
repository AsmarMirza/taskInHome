import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import style from "./home.module.css"
import { MainContext } from "../../context/MainProvider";
function Home() {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   async function getAllProducts() {
  //     const res = await fetch(
  //       "https://6634c99c9bb0df2359a2bd4a.mockapi.io/api/esmer/esmer"
  //     );
  //     const data = await res.json();
  //     setProducts(data);
  //   }
  //   getAllProducts();
  // }, []);
const {products,asc,dsc,inp,handleChange}=useContext(MainContext)

  return (
    <>
      <Helmet>
        <title>Home</title>
        <link rel="notImportant" href="https://www.chipotle.com" />
        <meta name="whatever" value="notImportant" />
        <link rel="canonical" href="https://www.tacobell.com" />
        <meta property="og:title" content="A very important title" />
      </Helmet>
      <h1>Home page</h1>
      <input type="text" name="" id="" placeholder="search.." 
      value={inp}
      onChange={(e)=> handleChange(e)}
      />
      <button onClick={()=>asc("price")}>asc</button>
      <button onClick={()=>dsc("price")}>dsc</button>
      <div className={style.container}>
      {products.filter((x)=>x.title.toLowerCase().includes(inp.toLowerCase().trim()))
      .map((x) => (
        <div className={style.box} key={x.id}>
          <img className={style.img} src={x.img} alt="" />
          <h4>{x.title}</h4>
          <h5>{x.price} $</h5>
          <p>{x.description}</p>
        </div>
      ))}
      </div>
    </>
  );
}

export default Home;
