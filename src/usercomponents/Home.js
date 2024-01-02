import React  from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Home = () => {

  let userlogoutHendler = () =>{
    localStorage.removeItem("userToken")
  } 

  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="navbar-logo">
            Freshers.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbar-fields">
              <Nav.Link className="link-fields" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="link-fields" href="#link">
                Link
              </Nav.Link>
              <Nav.Link className="link-fields" href="/user/blog">
               Our Blog
              </Nav.Link>
              <Nav.Link className="link-fields" href="#contact">
                Contact
              </Nav.Link>
              <Nav.Link className="link-fields" href="#aboutus">
                About Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="user-btn">
            <Link to="user" className="login-signup">
              <Button className="signup">Sign Up</Button>
            </Link>
            <Link to="user/login" className="login-signup">
              <Button className="login">Log In</Button>
            </Link>
            <Link to="/" className="login-signup">
              <Button className="logout" onClick={userlogoutHendler}>Log Out</Button>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Home;
