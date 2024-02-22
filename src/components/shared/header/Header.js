import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../../assets/images/logo.svg";
import Hamburger from "../../../assets/images/Hamburger.svg";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import "./style.css";

const Header = () => {
  return (
    <>
      <section className="Header_main">
        <Container fluid className="container_main ">
          <Navbar expand="lg" className="navbar_main">
            <Link to="/">
              <Image src={logo} fluid />
            </Link>
            {/* <Navbar.Brand href="#home">Your Brand</Navbar.Brand> */}
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="Toggle_btn"
            >
              <Image src={Hamburger} fluid />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto Nav_main">
                <Nav.Link href="#">About Us</Nav.Link>
                <Nav.Link href="#ourServices">Our Services</Nav.Link>
                <Nav.Link href="#Client-Journey">Client Journey</Nav.Link>
                <Nav.Link href="#get-involved">Get Involved</Nav.Link>
                <Nav.Link href="#contact-us">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </section>
    </>
  );
};

export default Header;
