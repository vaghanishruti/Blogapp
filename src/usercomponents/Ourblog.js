import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";

const Ourblog = () => {
  let [blog, setBlog] = useState([]);

  let [categories, setCategories] = useState([]);

  let [id, setid] = useState("");

  let [blogupdate, setBlogupdate] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
  });

  let blogHendler = () => {
    axios
      .get("http://localhost:5000/blogall", {
        headers: { token: localStorage.getItem("userToken") },
      })
      .then((res) => {
        console.log(res);
        console.log(res.data.data);
        setBlog(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/alldata", {
        headers: { token: localStorage.getItem("adminToken") },
      })
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    blogHendler();
  }, []);

  let blogdeleteHendler = (id) => {
    axios
      .delete(`http://localhost:5000/blogdelete?id=${id}`, {
        headers: { token: localStorage.getItem("userToken") },
      })
      .then((res) => {
        blogHendler();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let blogeditHendler = (index) => {
    setBlogupdate(blog[index]);
    setid(blog[index]._id);
  };

  return (
    <div>
      <Formik
        initialValues={blogupdate}
        enableReinitialize={true}
        onSubmit={async (values, action) => {
          let blogData = new FormData();
          blogData.append("title", values.title);
          blogData.append("description", values.description);
          blogData.append("category", values.category);
          blogData.append("image", values.image);

          if (id) {
            axios
              .put(`http://localhost:5000/blogupdate?id=${id}`, blogData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                  token: localStorage.getItem("userToken"),
                },
              })
              .then((res) => {
                blogHendler();
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            axios
              .post("http://localhost:5000/blogadd", blogData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                  token: localStorage.getItem("userToken"),
                },
              })
              .then((res) => {
                blogHendler();
              })
              .catch((error) => {
                console.log(error);
              });
          }
          setBlogupdate({
            title: "",
            description: "",
            category: "",
            image: "",
          });
          setid("");
          action.resetForm();
        }}
      >
        {(props) => (
          <Form>
            <label htmlFor="title">Title</label>
            <Field id="title" name="title" placeholder="title" />
            <br></br>
            <br></br>

            <label htmlFor="description">Description</label>
            <Field
              id="description"
              name="description"
              placeholder="description"
            />
            <br></br>
            <br></br>

            <label htmlFor="category">Category</label>
            <Field name="category" as="select">
              <option value="">Please select</option>
              {categories.map((el) => {
                return <option value={el._id}>{el.name}</option>;
              })}
            </Field>
            <br></br>
            <br></br>

            <label htmlFor="image">Image</label>
            <input
              type="file"
              onChange={(e) => props.setFieldValue("image", e.target.files[0])}
            />
            <br></br>
            <br></br>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

      <table border="1px" width="50%">
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>category Name</th>
          <th>Image</th>
        </tr>
        {blog.map((el, index) => {
          return (
            <tr>
              <td>{el.title}</td>
              <td>{el.description}</td>
              <td>{el.category.name}</td>
              <td>
                <img
                  src={"http://localhost:5000/images/" + el.image}
                  height={50}
                />
              </td>
              <td>
                <button onClick={() => blogeditHendler(index)}>Edit</button>
              </td>
              <td>
                <button onClick={() => blogdeleteHendler(el._id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Ourblog;
