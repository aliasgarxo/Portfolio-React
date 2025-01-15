import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Particle from "../Particle";
import { sendContactForm } from "./contactService"; // Import the service

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage(null);

    const result = await sendContactForm(formData);

    if (result.success) {
      setResponseMessage({
        type: "success",
        text: "Your message has been sent successfully!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setResponseMessage({
        type: "danger",
        text: result.message || "Failed to send your message. Please try again.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section>
      <Container fluid className="contact-section">
        <Particle className="particle-background" />
        <Container className="contact-content">
          <Row className="contact-header">
            <Col>
              <h1 className="heading">Contact Me</h1>
              <p className="subheading">
                Have questions or want to work together? Fill out the form below!
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={8} className="mx-auto">
              <Form onSubmit={handleSubmit} className="contact-form">
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Your message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="mt-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </Form>
              {responseMessage && (
                <Alert
                  variant={responseMessage.type}
                  className="mt-3"
                >
                  {responseMessage.text}
                </Alert>
              )}
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
