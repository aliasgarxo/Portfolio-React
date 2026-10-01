import React, { useState } from "react";
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
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-header">Contact Me</div>
          <form className="contact-body" onSubmit={handleSubmit}>
            <label htmlFor="contact-name" className="visually-hidden">Name</label>
            <input
              id="contact-name"
              className="contact-body__input"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              maxLength={100}
            />
            <label htmlFor="contact-email" className="visually-hidden">Email</label>
            <input
              id="contact-email"
              className="contact-body__input"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              maxLength={254}
            />
            <label htmlFor="contact-subject" className="visually-hidden">Subject</label>
            <input
              id="contact-subject"
              className="contact-body__input"
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              maxLength={200}
            />
            <label htmlFor="contact-message" className="visually-hidden">Message</label>
            <textarea
              id="contact-message"
              className="contact-body__textarea"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              maxLength={2000}
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
