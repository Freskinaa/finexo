import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import services from "../assets/data/services";
import ServiceItem from "./ServiceItem";
import SectionTitle from "./Shared/SectionTitle";
import "../style/services.css";
import Button from "./Shared/Button";

const Services = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    if (location.pathname !== "/services") {
      // Navigate to /services if not already there
      navigate("/services");
    } else {
      // Toggle showing all services when already on /services
      setShowAll((prevShowAll) => !prevShowAll);
    }
  };

  // Determine the number of services to show
  const visibleServices =
    location.pathname === "/services" && showAll
      ? services
      : services.slice(0, 3);

  return (
    <div className="services-container">
      <div className="main-container">
        <SectionTitle
          title="Our Services"
          subtitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration"
          darkBg={false}
        />
        <div className="service-items">
          {visibleServices.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
        <div className="services-btn">
          <Button
            text={
              location.pathname === "/services" && showAll
                ? "View Less"
                : "View All"
            }
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
