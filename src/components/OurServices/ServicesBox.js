import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const ServicesBox = ({ icon = "", heading = "", desc = "" }) => {
  return (
    <>
      <div className="ServicesBox_main">
        <div className="ServicesBox_icon">
          <Image src={icon} fluid />
        </div>
        <div className="ServicesBox_right">
          <h6>{heading}</h6>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default ServicesBox;
