import React from "react";
import { useParams } from "react-router-dom";
import services from "../assets/data/services";
import "../style/singleService.css";

const SingleServicePage = () => {
  const { id } = useParams();
  const service = services.find((service) => service.id === Number(id));

  if (!service) {
    return <p>Service not found.</p>;
  }

  return (
    <div className="single-service main-container">
      <h2>{service.name}</h2>
      <p>{service.desc}</p>
      <img src={service.icon} alt={service.name} />
    </div>
  );
};

export default SingleServicePage;
