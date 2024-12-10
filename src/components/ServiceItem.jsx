import React from "react";
import { NavLink } from "react-router-dom";

const ServiceItem = ({ service }) => {
  return (
    <div className="service-item">
      <img src={service.icon} alt={service.name} />
      <h5>{service.name}</h5>
      <p>{service.desc}</p>
      <NavLink to={`/services/${service.id}`}>Read more</NavLink>
    </div>
  );
};

export default ServiceItem;
