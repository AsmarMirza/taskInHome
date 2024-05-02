import React from "react";
import style from "./form.module.css"
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
function FormPage() {
  return (
    <div>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values) => {
          console.log(values);
          async function getAllProduct() {
            const res = await fetch(
              "https://northwind.vercel.app/api/categories ",{
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({values})
            })
            ;
            const data = await res.json();
            return data;
          }
          getAllProduct();
        }}
      >




        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" />

          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <div className={style.box}>
          <h1>salam</h1>
      </div>
    </div>
  );
}

export default FormPage;
