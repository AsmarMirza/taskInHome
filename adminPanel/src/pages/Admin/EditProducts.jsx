import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

function EditProducts() {
  const [product, setProduct] = useState(null);
 let {id}=useParams()
  useEffect(() => {
  async function getProduct(){
    const res=await fetch("https://6634c99c9bb0df2359a2bd4a.mockapi.io/api/esmer/esmer/"+id)
    const data=await res.json()
    setProduct(data)
  }
  getProduct()
  }, [])
  
  async function editProduct(values) {
    const res = await fetch(
      "https://6634c99c9bb0df2359a2bd4a.mockapi.io/api/esmer/esmer",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "Put",
        body: JSON.stringify(values),
      }
    );
    const data = await res.json();
    return data;
  }
  return (
    <div>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
        nostrum?
      </h1>
      <Helmet>
        <title>Edit products</title>
        <link rel="notImportant" href="https://www.chipotle.com" />
        <meta name="whatever" value="notImportant" />
        <link rel="canonical" href="https://www.tacobell.com" />
        <meta property="og:title" content="A very important title" />
      </Helmet>
{product&&      <Formik
        initialValues={{ image:product.image, title: "", price: "", description: "" }}
        validationSchema={Yup.object({
          image: Yup.string()
            .max(100, "Must be 15 characters or less")
            .required("Required"),
          title: Yup.string()
            .max(100, "Must be 20 characters or less")
            .required("Required"),
          price: Yup.number().required("Required"),
          description: Yup.string()
            .max(200, "Must be 15 characters or less")
            .required("Required"),
        })}
        onSubmit={(values) => {
          editProduct(values);
        }}
      >
        <Form>
          <label htmlFor="image">Image</label>
          <br />
          <Field name="image" type="text" />
          <ErrorMessage name="image" />
          <br />

          <label htmlFor="title">Title</label>
          <br />
          <Field name="title" type="text" />
          <ErrorMessage name="title" />
          <br />

          <label htmlFor="price">Price</label>
          <br />
          <Field name="price" type="number" />
          <ErrorMessage name="price" />
          <br />
          <label htmlFor="description">Description</label>
          <br />
          <Field name="description" type="text" />
          <ErrorMessage name="description" />
          <br />

          <button type="submit">Submit</button>
        </Form>
      </Formik>}

    </div>
  );
}

export default EditProducts;
