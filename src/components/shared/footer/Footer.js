import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../../assets/images/logo.svg";
import FB from "../../../assets/images/fb.svg";
import instagram from "../../../assets/images/instagram.svg";
import twitter from "../../../assets/images/twitter.svg";
import "./footer.css";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

const Footer = () => {
  return (
    <>
      <footer>
        <Container fluid className="container_main">
          <Row>
            <Col xs={12} md={4} className="order-2 order-md-1">
              <div id="email">
                <p>info@blosum.co</p>
              </div>
            </Col>
            <Col
              className="text-center order-1 order-md-2 footer_logo"
              xs={12}
              md={4}
            >
              <Link to="/">
                <Image src={logo} fluid />
              </Link>
            </Col>
            <Col xs={12} md={4} className="order-3 order-md-3">
              <div className="footer_social">
                <Link to="#">
                  <Image src={FB} fluid />
                </Link>
                <Link to="#">
                  <Image src={twitter} fluid />
                </Link>
                <Link to="#">
                  <Image src={instagram} fluid />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="privacypolicy">
          <Row>
            <Col>
              <p>Privacy Policy | Terms of Service</p>
            </Col>
          </Row>
          <Row>
            <Col className="copyright_main">
              <p>© Copyright 2024 Blosom.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
