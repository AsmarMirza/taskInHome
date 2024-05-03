import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { MainContext } from "../../context/MainProvider";

function AdminPanel() {
  // const {products,useEffect}=useContext(MainContext)
  return (
    <div>
      <Helmet>
        <title>Admin Panel</title>
        <link rel="notImportant" href="https://www.chipotle.com" />
        <meta name="whatever" value="notImportant" />
        <link rel="canonical" href="https://www.tacobell.com" />
        <meta property="og:title" content="A very important title" />
      </Helmet>

      <h1>Admin panel</h1>
      {/* <table>
        <tr>
          <th>No</th>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table> */}
    </div>
  );
}

export default AdminPanel;
