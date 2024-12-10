import React from "react";
import { PiQuotesFill } from "react-icons/pi";

const CustomerItem = ({ customer }) => {
  return (
    <div className="customer">
      <div
        className="customer-img"
        style={{ backgroundImage: `url(${customer.img})` }}
      ></div>
      <div className="customer-txt">
        <div className="customer-details">
          <div className="customer-infos">
            <span className="customer-name">{customer.name}</span>
            <span className="customer-position">{customer.position}</span>
          </div>
          <PiQuotesFill
            style={{
              transform: "rotate(180deg)",
              fontSize: "24px",
              color: "00204a",
            }}
          />
        </div>
        <p>{customer.desc}</p>
      </div>
    </div>
  );
};

export default CustomerItem;
