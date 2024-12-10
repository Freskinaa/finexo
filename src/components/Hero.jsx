import React from "react";
import "../style/hero.css";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <HeroSlider />
      </div>
    </div>
  );
};

export default Hero;
