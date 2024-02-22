import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import iPhone from "../../../assets/images/iPhone.svg";
import "./style.css";
import Image from "react-bootstrap/Image";

const Banner = () => {
  return (
    <>
      <section className="banner_section">
        <Container fluid className="container_main">
          <Row>
            <Col xs={12} md={8} className="mx-auto">
              <div className="banner_text_mian">
                <h1>Empowering Foster Care Alumni Towards a Brighter Future</h1>
                <p>
                  Embark on a transformative journey with Blosum – where
                  pioneering case
                  <br />
                  management and technology converge to offer guidance, support,
                  and education.
                </p>

                <div className="banner_buttons">
                  <button>Get Started</button>
                  <button>Learn More</button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8} className="mx-auto">
              <div className="ibanner_image_main">
                <Image src={iPhone} fluid />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Banner;
