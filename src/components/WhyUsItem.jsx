import React from "react";

const WhyUsItem = ({ item }) => {
  return (
    <div className="why-item">
      <div className="why-img">
        <img src={item.icon} alt={item.name} />
      </div>
      <span>{item.name}</span>
      <p>{item.desc}</p>
    </div>
  );
};

export default WhyUsItem;
