import { useState, useEffect } from "react";
import "./index.css";
import { getAllProducts } from "../../service/products";

function Filter() {
  const [products, setProducts] = useState([]);
  const [myInp, setMyInp] = useState("");

  function handleOnchance(e) {
    setMyInp(e.target.value);
  }
  useEffect(() => {
    async function handleProducts() {
      const data = await getAllProducts();
      setProducts(data);
    }
    handleProducts();
  }, []);
  //   function sortAsc(title){
  //     const result=[...products].sort((a,b) => (a[title] > b[title]) ? 1 : ((b[title]> a[title]) ? -1 : 0))
  //     setProducts(result)
  //   }
  //   function sortDsc(title){
  //     const result=[...products].sort((a,b) => (a[title] < b[title]) ? 1 : ((b[title]<a[title]) ? -1 : 0))
  //     setProducts(result)
  //   }
  function sort(title, sortOrder) {
    const result = [...products].sort((a, b) => {
      if (sortOrder === "asc") {
        return a[title] > b[title] ? 1 : b[title] > a[title] ? -1 : 0;
      } else if (sortOrder === "dsc") {
        return a[title] < b[title] ? 1 : b[title] < a[title] ? -1 : 0;
      } else {
        return null;
      }
    });
    setProducts(result);
  }

  return (
    <div className="hero">
      <h1>Our Products</h1>
      <div>
        <button onClick={() => sort("title", "asc")}>Asc</button>
        <button onClick={() => sort("title", "dsc")}>Dsc</button>
      </div>
      <input
        type="text"
        name=""
        id=""
        value={myInp}
        onChange={handleOnchance}
        placeholder="search.."
      />

      <div className="container">
        {products
          .filter((x) => x.title.toLowerCase().includes(myInp.toLowerCase()))
          .map((x) => (
            <div className="box" key={x.id}>
              <h4>{x.title}</h4>
              <h3>{x.price}$</h3>
            </div>
          ))}
      </div>
    </div>
  );
}
export default Filter;
