import React, { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

function MainProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [inp, setInp] = useState("");

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    const res = await fetch(
      "https://6634c99c9bb0df2359a2bd4a.mockapi.io/api/esmer/esmer"
    );
    const data = await res.json();
    return setProducts(data);
  }

  function asc(value) {
    setProducts(
      products.toSorted((a, b) =>
        a[value] > b[value] ? 1 : b[value] > a[value] ? -1 : 0
      )
    );
  }
  function dsc(value) {
    setProducts(
      products.toSorted((a, b) =>
        a[value] < b[value] ? 1 : b[value] < a[value] ? -1 : 0
      )
    );
  }
  function handleChange(e) {
    setInp(e.target.value);
  }

    async function deleteProduct(id) {
     const res=await fetch(
        "https://6634c99c9bb0df2359a2bd4a.mockapi.io/api/esmer/esmer/" + id,
        { method: "delete" }
      );
      const data = await res.json();
      await getAllProducts();
    }
  

  return (
    <div>
      <MainContext.Provider
        value={{
          products,
          useEffect,
          asc,
          dsc,
          inp,
          handleChange,
        deleteProduct,
        }}
      >
        {children}
      </MainContext.Provider>
    </div>
  );
}

export default MainProvider;
