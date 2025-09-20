import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container className="mt-5 contact-container">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Row>
        
        <Col md={6}>
          <Form onSubmit={handleSubmit} className="contact-form">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here"
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">Send Message</Button>
          </Form>
        </Col>

        
        <Col md={6} className="contact-info">
          <h5>Get in touch</h5>
          <p><FaPhone /> Phone: +91 9876543210</p>
          <p><FaEnvelope /> Email: info@library.com</p>
          <p><FaMapMarkerAlt /> Address: 123 Library Street, Sangamner, India</p>

          <h5 className="mt-4">Follow Us</h5>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>

          
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
