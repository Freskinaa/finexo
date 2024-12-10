import React from "react";
import SectionTitle from "./Shared/SectionTitle";
import "../style/whyUs.css";
import whyUsItems from "../assets/data/whyUsItems";
import WhyUsItem from "./WhyUsItem";
import Button from "./Shared/Button";
import { useNavigate, useLocation } from "react-router-dom";

const WhyUs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const inWhysUs = location.pathname === "/why-us" ? true : false;

  const handleClick = () => {
    navigate("/why-us");
  };
  return (
    <div className="why-us">
      <div className="main-container">
        <SectionTitle title="Why Choose Us" subtitle="" darkBg={false} />
        <div className="why-content">
          {whyUsItems.map((item) => (
            <WhyUsItem key={item.id} item={item} />
          ))}
        </div>
        {inWhysUs ? (
          <></>
        ) : (
          <div className="why-btn">
            <Button text="Read more" onClick={handleClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default WhyUs;
