import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import client1 from "../../assets/images/client1.svg";
import client2 from "../../assets/images/client2.svg";
import client3 from "../../assets/images/client3.svg";
import Image from "react-bootstrap/Image";
import "./style.css";

const ClientJourney = () => {
  return (
    <>
      <section id="Client-Journey">
        <Container fluid className="container_main">
          <Row>
            <Col xs={12} md={12}>
              <div class="journey_text">
                <h6>Client Journey</h6>
                <p>
                  Follow the journey of empowerment from the first referral to
                  lifelong success. Our platform guides youths through each
                  critical milestone, from enrollment and initial assessment to
                  achieving independence and beyond.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="client_item">
            <Col xs={12} md={4}>
              <div className="Client_box Client_box_one">
                <Image src={client1} fluid />
                <div className="count_main">
                  <div className="count">01</div>
                </div>
                <p>
                  From the first referral, we engage with you to craft a
                  personalized care plan focused on your goals and well-being.
                </p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="Client_box">
                <Image src={client2} fluid />
                <div className="count_main">
                  <div className="count">02</div>
                </div>
                <p>
                  From the first referral, we engage with you to craft a
                  personalized care plan focused on your goals and well-being.
                </p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="Client_box">
                <Image src={client3} fluid />
                <div className="count_main">
                  <div className="count">03</div>
                </div>
                <p>
                  From the first referral, we engage with you to craft a
                  personalized care plan focused on your goals and well-being.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ClientJourney;
