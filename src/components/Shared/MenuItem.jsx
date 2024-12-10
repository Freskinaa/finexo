import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ name, path, onClick }) => {
  return (
    <li className="link">
      <NavLink to={path} onClick={onClick}>
        {name}
      </NavLink>
    </li>
  );
};

export default MenuItem;
