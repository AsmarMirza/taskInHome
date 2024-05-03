import React, { useContext } from "react";
import { useState, useEffect } from "react";
import "./home.css";
import { MainContext } from "../context/MainProvider";
import { Helmet } from "react-helmet-async";
import { WishList } from "../context/wishListProvider";
function HomePage() {
  const [products, setProducts] = useState([]);

  const { addBasket } = useContext(MainContext);
  const { addWishlist, isExist } = useContext(WishList);
  useEffect(() => {
    async function getAllProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    }
    getAllProducts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <link rel="notImportant" href="https://www.chipotle.com" />
        <meta name="whatever" value="notImportant" />
        <link rel="canonical" href="https://www.tacobell.com" />
        <meta property="og:title" content="A very important title" />
      </Helmet>

      <div>
        <h1>Home Page</h1>
        <div className="container">
          {products.map((x) => (
            <div className="box" key={x.id}>
              <div onClick={() => addWishlist(x)}>
                {isExist(x) ? (
                  <i className="fa-solid fa-heart"></i>
                ) : (
                  <i className="fa-regular fa-heart"></i>
                )}
              </div>
              <h3>{x.title}</h3>
              <p>{x.price}$</p>
              <img className="img" src={x.image} alt="" />
              <button onClick={() => addBasket(x)}>add basket</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
