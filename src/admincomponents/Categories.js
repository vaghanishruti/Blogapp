import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  let history = useHistory();

  const [categoriesupdate, setCategoriesupdate] = useState({
    name: "",
    image: "",
  });

  const [id, setId] = useState("");

  let categoriesHendler = () => {
    axios
      .get("http://localhost:5000/alldata", {
        headers: { token: localStorage.getItem("adminToken") },
      })
      .then((res) => {
        console.log(res.data.data);
        setCategories(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    categoriesHendler();
  }, []);

  let updateHendler = (index) => {
    setCategoriesupdate(categories[index]);
    setId(categories[index]._id);
  };

  let deleteHendler = (id) => {
    axios
      .delete(`http://localhost:5000/deletedata?id=${id}`, {
        headers: { token: localStorage.getItem("adminToken") },
      })
      .then((res) => {
        categoriesHendler();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Formik
        initialValues={categoriesupdate}
        enableReinitialize={true}
        onSubmit={async (values, action) => {
          let categoriesData = new FormData();
          categoriesData.append("name", values.name);
          categoriesData.append("image", values.image);

          if (id) {
            axios
              .put(
                `http://localhost:5000/updatedata?id=${id}`,
                categoriesData,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                    token: localStorage.getItem("adminToken"),
                  },
                }
              )
              .then((res) => {
                categoriesHendler();
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            axios
              .post("http://localhost:5000/adddata", categoriesData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                  token: localStorage.getItem("adminToken"),
                },
              })
              .then((res) => {
                categoriesHendler();
              })
              .catch((error) => {
                console.log(error);
              });
            history.push("/admin/deshboard");
          }
          setCategoriesupdate({
            name: "",
            image: "",
          });
          setId("");
          action.resetForm();
        }}
      >
        {(props) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="name" />
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
      <table border={1} width="50%">
        <tr>
          <th>name</th>
          <th>image</th>
        </tr>
        {categories.map((el, index) => {
          return (
            <tr>
              <td>{el.name}</td>
              <td>
                <img
                  src={"http://localhost:5000/images/" + el.image}
                  width={50}
                />
              </td>
              <td>
                <button onClick={() => updateHendler(index)}>Update</button>
              </td>
              <td>
                <button onClick={() => deleteHendler(el._id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>

      <div className="blog-card">
        <div className="d-flex flex-wrap">
          {categories.map((el) => {
            return (
              <div className="w-33">
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src={"http://localhost:5000/images/" + el.image}
                    height="200px"
                    width="200px"
                  />
                  <Card.Body>
                    <Card.Title>{el.name}</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
