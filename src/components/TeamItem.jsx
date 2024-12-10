import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const TeamItem = ({ member }) => {
  return (
    <div className="team-item">
      <div
        className="team-img"
        style={{ backgroundImage: `url(${member.img})` }}
      ></div>
      <span className="member-name">{member.name}</span>
      <span className="member-position">{member.position}</span>
      <div className="social-medias">
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
        <a href="https://www.youtube.com" target="_blank">
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default TeamItem;
