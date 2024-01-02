import React, { useRef, useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Admin.css";

const Adminlogin = () => {
  let [admindata, setAdmindata] = useState("");
  let adminHistory = useHistory();
  return (
    <div className="admin-back-color">
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={async (values) => {
          axios
            .post("https://thankful-yoke-colt.cyclic.app/adminlog", values)
            .then((res) => {
              console.log(res.data.data);
              setAdmindata(res.data.data);
              localStorage.setItem("adminToken", res.data.token);
              console.log("token==", res.data.token);
              adminHistory.push("/admin/categories");
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        <Form className="admin-form-data">
          <h1>log in</h1>
        <p className="border-bottom"></p>
          <label htmlFor="username" className="username">
            User Name
          </label>
          <Field
            id="username"
            name="username"
            className="user-field"
            placeholder="please enter a username"
          />
          <label htmlFor="password" className="password">
            Password
          </label>
          <Field
            id="password"
            className="password-field"
            name="password"
            placeholder="please enter a password"
            type="password"
          />
          <br></br>
          <br></br>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Adminlogin;
