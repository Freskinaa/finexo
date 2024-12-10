import React, { useState, useEffect } from "react";
import HeroItem from "./HeroItem";
import heroItems from "../assets/data/heroItems";
import "../style/hero.css";

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = (index) => {
    if (index !== currentIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <div className="hero-slider main-container">
      <div className={`hero-wrapper ${isAnimating ? "slide-back" : ""}`}>
        <HeroItem
          title={heroItems[currentIndex].title}
          desc={heroItems[currentIndex].desc}
          img={heroItems[currentIndex].img}
        />
      </div>

      <div className="dots-container">
        {heroItems.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
