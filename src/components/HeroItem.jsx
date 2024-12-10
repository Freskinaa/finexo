import React from "react";
import Button from "./Shared/Button";
import { useNavigate } from "react-router-dom";

const HeroItem = ({ title, desc, img }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };
  return (
    <div className="hero-item">
      <div className="hero-txt">
        <h3>{title}</h3>
        <p>{desc}</p>
        <Button text="Read more" onClick={handleClick} />
      </div>
      <div className="hero-img">
        <img src={img} alt={title} />
      </div>
    </div>
  );
};

export default HeroItem;
