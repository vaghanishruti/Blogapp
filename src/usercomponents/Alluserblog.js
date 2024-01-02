import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Alluserblog = () => {
  let [allblog, setAllblog] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/alluserblog")
      .then((res) => {
        // console.log(res.data.data);
        setAllblog(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="blog-card">
        <div className="d-flex flex-wrap">
          {allblog.map((el) => {
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
                    <Card.Title>{el.title}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Link to={"/blog/" + el._id} className="blog-link">
                      <Button className="blog-btn-color">Go somewhere</Button>
                    </Link>
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

export default Alluserblog;
