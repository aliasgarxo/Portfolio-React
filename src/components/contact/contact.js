import React, { useState } from "react";
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
    
    <div className="contact-page">
      <Particle className="particle-background" />
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-header">Contact Me</div>
          <form className="contact-body" onSubmit={handleSubmit}>
            <input
              className="contact-body__input"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              className="contact-body__input"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              className="contact-body__input"
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
            <textarea
              className="contact-body__textarea"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <button
              className="contact-body__submit"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
          {responseMessage && (
            <div className={`contact-response contact-response--${responseMessage.type}`}>
              {responseMessage.text}
            </div>
            )}
        </div>
      </div>
    </div>
  
  );
}

export default Contact;
