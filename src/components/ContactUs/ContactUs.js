import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    contactName: "",
    contactPhone: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here
    if (
      formData.firstName.trim() === "" ||
      formData.lastName.trim() === "" ||
      formData.businessName.trim() === "" ||
      formData.contactName.trim() === "" ||
      formData.contactPhone.trim() === "" ||
      formData.subject.trim() === "" ||
      formData.message.trim() === ""
    ) {
      alert("Please fill in all fields");
      return;
    }
    // Form is valid, proceed with form submission
    console.log("Form data:", formData);
  };
  return (
    <>
      <section id="contact-us">
        <Container fluid className="container_main">
          <Row>
            <Col xs={12} md={6} className="">
              <div id="contact-us-left">
                <h1>Contact Us</h1>
                <h5 className="d-none d-md-block">
                  Have questions or need assistance?
                </h5>
                <p className="d-none d-md-block">
                  Our team is here to help. Contact us for more information on
                  our <br /> services, to request support, or to learn how you
                  can partner.
                </p>
                <p className="d-md-none">
                  Have questions or need assistance? Our team is here to help.
                  Contact us for more information on our services, to request
                  support, or to learn how you can partner.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} className="">
              <form onSubmit={handleSubmit}>
                <div class="form-us">
                  <div id="layout">
                    <div className="form_group">
                      <input
                        type="text"
                        placeholder="Enter First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        placeholder="Enter Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form_group">
                      <input
                        type="text"
                        placeholder="Business Name"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        placeholder="Enter Contact Name"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form_group">
                      <input
                        type="text"
                        placeholder="Enter Contact Phone"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        placeholder="Enter Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form_group">
                      <textarea
                        id="msg"
                        type="text"
                        placeholder="Enter Message..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form_button">
                    <button type="submit">Send</button>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
