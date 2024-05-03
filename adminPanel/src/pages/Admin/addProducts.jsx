import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./form.css";
function AddProducts() {
  async function addProducts(values) {
    const res = await fetch(
      "https://6634c99c9bb0df2359a2bd4a.mockapi.io/api/esmer/esmer",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(values),
      }
    );
    const data = await res.json();
    return data;
  }
  return (
    <div>
      <Formik
        initialValues={{ image: "", title: "", price: "", description: "" }}
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
          addProducts(values);
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
      </Formik>
    </div>
  );
}

export default AddProducts;
