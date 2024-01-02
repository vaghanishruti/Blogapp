import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./User.css";

function User() {
  let [data, setData] = useState("");
  let history = useHistory();

  return (
    <div className="user-back-color">
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={async (values, action) => {
          axios
            .post("https://thankful-yoke-colt.cyclic.app/signup", values)
            .then((res) => {
              console.log("res===", res);
              console.log("res.data.data===", res.data.data);
              setData(res.data.data);
              console.log("token====", res.data.token);
              localStorage.setItem("userToken", res.data.token);
              history.push("/user/login");
            })
            .catch((error) => {
              console.log(error);
            });
          action.resetForm();
          console.log(values);
        }}
      >
        <div className="crad-center">
          <Form className="user-form-data">
            <h1>sign up</h1>
            <p className="border-bottom"></p>
            <label htmlFor="username" className="username">
              User Name
            </label>
            <br></br>
            <Field
              id="username"
              name="username"
              placeholder="please enter a username"
              className="user-field"
            />

            <label htmlFor="password" className="password">
              Password
            </label>
            <br></br>
            <Field
              className="password-field"
              id="password"
              name="password"
              placeholder="please enter a password"
              type="password"
            />
            <br></br>
            <br></br>

            <button type="submit" className="submit-btn-user">
              Submit
            </button>
          </Form>
        </div>
      </Formik>
    </div>
  );
}

export default User;
