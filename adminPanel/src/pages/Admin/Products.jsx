import React, { useContext } from "react";
import { MainContext } from "../../context/MainProvider";
import { Link } from "react-router-dom";

function Products() {
    const {products,deleteProduct}=useContext(MainContext)
    
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>option</th>
          </tr>
        </thead>

        <tbody>
            {products.map((y)=>(
            <tr key={y.id}>
            <td>{y.id}</td>
            <td><img className="tableImg" src={y.img} alt="" /></td>
            <td>{y.title}</td>
            <td>{y.description}</td>
            <td>{y.price}</td>
            <td>
                {/* <button>edit</button> */}
                <Link to={"/adminLayout/editProducts/:id"}>Edit</Link>
                <button onClick={()=>deleteProduct(y.id)}>X</button>
            </td>

          </tr>))}
       
        </tbody>
      </table>
    </div>
  );
}

export default Products;
