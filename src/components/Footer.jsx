import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/footer.css";
import { IoIosPin } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Button from "./Shared/Button";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleClick = () => {
    if (!validateEmail(email.trim())) {
      setMessage("Please enter a valid email.");
      setIsSuccess(false);
      clearMessageAfterTimeout();
      return;
    }

    const subscriptionMessage = `You have successfully subscribed: ${email}`;
    setMessage(subscriptionMessage);
    setIsSuccess(true);
    clearMessageAfterTimeout();

    setEmail("");
  };

  const clearMessageAfterTimeout = () => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="main-container">
          <div className="upper-footer">
            <div className="footer-item">
              <div className="footer-title">
                <h6>Address</h6>
              </div>
              <div className="footer-address">
                <div className="address-li">
                  <a href="https://www.google.com/maps" target="_blank">
                    <IoIosPin style={{ fontSize: "16px" }} />
                    <span>Location</span>
                  </a>
                </div>
                <div className="address-li">
                  <a href="tel:+011234567890">
                    <FaPhone style={{ fontSize: "14px" }} />
                    <span>Call +01 1234567890</span>
                  </a>
                </div>
                <div className="address-li">
                  <a href="mailto:demo@gmail.com">
                    <IoMdMail style={{ fontSize: "16px" }} />
                    <span>demo@gmail.com</span>
                  </a>
                </div>
                <div className="footer-medias">
                  <a href="https://www.facebook.com" target="_blank">
                    <FaFacebookF />
                  </a>
                  <a href="https://www.twitter.com" target="_blank">
                    <FaTwitter />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://www.instagram.com" target="_blank">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-item">
              <div className="footer-title">
                <h6>Info</h6>
              </div>
              <p>
                Necessary, making this the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words, combined with a
                handful
              </p>
            </div>
            <div className="footer-item">
              <div className="footer-title">
                <h6>Links</h6>
              </div>
              <ul className="footer-links">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/why-us">Why Us</NavLink>
                </li>
                <li>
                  <NavLink to="/team">Team</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <div className="footer-title">
                <h6>Subscribe</h6>
              </div>
              <div className="footer-input">
                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  text="Subscribe"
                  onClick={handleClick}
                  classname="full-btn"
                />
                {message && (
                  <p style={{ color: isSuccess ? "green" : "red" }}>
                    {message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrapper main-container">
        <p>© 2024 All Rights Reserved By Free Html Templates</p>
      </div>
    </div>
  );
};

export default Footer;
