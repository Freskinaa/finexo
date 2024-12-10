import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../style/contact.css";
import SectionTitle from "./Shared/SectionTitle";
import Button from "./Shared/Button";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateInputs = () => {
    const validationErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;

    if (!formData.user_name.trim()) {
      validationErrors.user_name = "Name is required.";
    }
    if (!formData.user_email.trim()) {
      validationErrors.user_email = "Email is required.";
    } else if (!emailRegex.test(formData.user_email)) {
      validationErrors.user_email = "Invalid email format.";
    }
    if (!formData.user_phone.trim()) {
      validationErrors.user_phone = "Phone number is required.";
    } else if (
      !formData.user_phone.startsWith("0") ||
      formData.user_phone.length !== 10
    ) {
      validationErrors.user_phone =
        'Phone number must start with "0" and be 10 digits.';
    }
    if (!formData.message.trim()) {
      validationErrors.message = "Message is required.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    emailjs
      .sendForm(
        "service_kunjxcj",
        "template_bsnhf9n",
        form.current,
        "aQbUOPW1s2gJc6p3s"
      )
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!");
          setTimeout(() => {
            setSuccessMessage("");
          }, 1000);

          setFormData({
            user_name: "",
            user_email: "",
            user_phone: "",
            message: "",
          });
        },
        (error) => {
          console.error("Failed to send message:", error.text);
        }
      );
  };

  return (
    <div className="form">
      <SectionTitle title="Contact Us" darkBg={true} />
      <form ref={form} className="main-container">
        <div className="form-inputs">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            value={formData.user_name}
            onChange={handleChange}
            className={errors.user_name ? "error" : ""}
          />
          {errors.user_name && (
            <span className="error-text">{errors.user_name}</span>
          )}

          <input
            type="email"
            name="user_email"
            placeholder="Email"
            value={formData.user_email}
            onChange={handleChange}
            className={errors.user_email ? "error" : ""}
          />
          {errors.user_email && (
            <span className="error-text">{errors.user_email}</span>
          )}

          <input
            type="text"
            name="user_phone"
            placeholder="Phone Number"
            value={formData.user_phone}
            onChange={handleChange}
            className={errors.user_phone ? "error" : ""}
          />
          {errors.user_phone && (
            <span className="error-text">{errors.user_phone}</span>
          )}

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "error" : ""}
          />
          {errors.message && (
            <span className="error-text">{errors.message}</span>
          )}

          <Button text="Send" onClick={sendEmail} />
        </div>
        {successMessage && <p className="success-text">{successMessage}</p>}
      </form>
    </div>
  );
};

export default Contact;
