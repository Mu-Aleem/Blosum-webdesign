import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import Solidaritycuate from "../../assets/images/Solidaritycuate.svg";
import Image from "react-bootstrap/Image";

const OurMission = () => {
  return (
    <>
      <section id="our-mission">
        <Container fluid className="container_main">
          <Row>
            <Col xs={12} md={6} className="my-auto">
              <div class="mission">
                <h1>Our Mission</h1>
                <p>
                  At Blosum, we're committed to improving the quality of life
                  for foster care alumni through personalized care plans,
                  quality of life tracking, and a supportive community network.{" "}
                </p>
                <p>
                  Our mission is to provide the tools and resources necessary
                  for every youth to build a promising future.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} className="">
              <Image src={Solidaritycuate} fluid />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OurMission;
