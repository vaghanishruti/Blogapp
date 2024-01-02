import React, { useState } from 'react'
import { Formik, Field, Form } from "formik";
import axios from "axios";
import './User.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';


const Userlogin = () => {
  let [data, setData] = useState("");
  let history=useHistory()
  return (
    <div className="user-back-color">
          <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={async (values) => {
          axios
            .post("https://thankful-yoke-colt.cyclic.app/login", values)
            .then((res) => {
              console.log("res.data.data===", res.data.data);
              setData(res.data.data);
              localStorage.setItem("userToken", res.data.token);
              history.push("/user/blog")
            })
            .catch((error) => {
              console.log(error);
            });
          console.log(values);
        }}
      >
        <Form className="user-form-data">
        <h1>log in</h1>
        <p className="border-bottom"></p>
          <label htmlFor="username" className="username">User Name</label>
          <Field
            id="username"
            name="username"
            placeholder="please enter a username"
            className="user-field"
          />
        

          <label htmlFor="password"className="password">Password</label>
          <Field
            id="password"
            name="password"
            placeholder="please enter a password"
            type="password"
            className="password-field"
          />
          <br></br>
          <br></br>

          <button type="submit" className="submit-btn-user">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Userlogin