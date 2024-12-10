import React from "react";

const Button = ({ text, onClick, classname }) => {
  return (
    <button className={`btn blue-btn ${classname}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
