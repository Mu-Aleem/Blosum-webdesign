import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
// import Solidaritycuate from "../../assets/images/Solidaritycuate.svg";
import ServicesBox from "./ServicesBox";
import Chart from "../../assets/images/Chart.svg";
import HandHeart from "../../assets/images/HandHeart.svg";
import Notes from "../../assets/images/Notes.svg";
import folder from "../../assets/images/folder.svg";
import VolumeLoud from "../../assets/images/VolumeLoud.svg";
import squareAcademic from "../../assets/images/squareacademiccap.svg";

const OurServices = () => {
  return (
    <>
      <section className="ourServices" id="ourServices">
        <Container fluid className="container_main">
          <Row>
            <Col xs={12} md={7} className="mx-auto">
              <div class="services_text">
                <h6>Our Services</h6>
                <p>
                  Each service is designed with the unique needs of foster care
                  alumni in mind, ensuring access to healthcare, educational
                  resources, financial literacy, and essential life skills.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8} className="mx-auto">
              <div className="ServicesBox_wrapper">
                <ServicesBox
                  icon={Chart}
                  heading="Progress Tracking"
                  desc="Track Cases & Goals"
                />
                <ServicesBox
                  icon={squareAcademic}
                  heading="Educational Resources"
                  desc="Access Educational Content"
                />
              </div>
              <div className="ServicesBox_wrapper">
                <ServicesBox
                  icon={HandHeart}
                  heading="Care Planning"
                  desc="Craft Care Plans"
                />
                <ServicesBox
                  icon={Notes}
                  heading="Collaboration & Communication"
                  desc="Share & Discuss Updates"
                />
              </div>
              <div className="ServicesBox_wrapper">
                <ServicesBox
                  icon={folder}
                  heading="Records Management"
                  desc="Store & Access All Your Records"
                />
                <ServicesBox
                  icon={VolumeLoud}
                  heading="Reporting"
                  desc="Share Updates with Caregivers"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OurServices;
