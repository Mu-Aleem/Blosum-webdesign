import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";

const GetInvolved = () => {
  return (
    <>
      <section id="get-involved" className="getinvolved">
        <Container fluid className="container_main">
          <Row>
            <Col xs={12} md={7} className="mx-auto">
              <h1>Get Involved</h1>
              <p>
                Join us in making a difference. Whether you're looking to
                volunteer or partner with us, your support is crucial in
                providing foster care alumni with the resources they need to
                thrive.
              </p>

              <button>Donate</button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default GetInvolved;
