import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../style/navbar.css";
import createNavLinks from "../assets/data/navlinks";
import MenuItem from "./Shared/MenuItem";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { state } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navLinks, setNavLinks] = useState([]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const updatedNavLinks = createNavLinks(state);
    setNavLinks(updatedNavLinks);
  }, [state?.token]);

  return (
    <div className="navbar">
      <div className="container">
        <div className={`navbar-content ${menuOpen ? "open" : ""}`}>
          <div className="navbar-up">
            <NavLink to="/" className="logo-link">
              <div className="logo-img">
                <img src={logo} alt="Finexo Logo" />
              </div>
              <span>Finexo</span>
            </NavLink>
            <div
              className={`hamburger-menu ${menuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <IoClose style={{ fontSize: "40px" }} />
              ) : (
                <RxHamburgerMenu />
              )}
            </div>
          </div>

          <ul className="navlinks">
            {navLinks.map((link) => (
              <MenuItem
                key={link.name}
                name={link.name}
                path={link.path}
                onClick={closeMenu}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
