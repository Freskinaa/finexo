import React, { useState, useEffect } from "react";
import "../style/customers.css";
import SectionTitle from "./Shared/SectionTitle";
import customers from "../assets/data/customers";
import CustomerItem from "./CustomerItem";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Customers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const totalCustomers = customers.length;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCustomers);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? totalCustomers - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 300);
  };

  const getVisibleItems = () => {
    if (windowWidth < 768) {
      return [customers[currentIndex]];
    }

    const nextIndex = (currentIndex + 1) % totalCustomers;
    return [customers[currentIndex], customers[nextIndex]];
  };

  return (
    <div className="customers main-container">
      <SectionTitle title="What says our Customers" darkBg={false} />

      <div className="slider">
        <div className={`slides ${isAnimating ? "animate" : ""}`}>
          {getVisibleItems().map((customer, index) => (
            <CustomerItem key={index} customer={customer} />
          ))}
        </div>
        <div className="controllers">
          <div className="controller" onClick={handlePrev}>
            <MdKeyboardArrowLeft style={{ fontSize: "24px" }} />
          </div>
          <div className="controller" onClick={handleNext}>
            <MdKeyboardArrowRight style={{ fontSize: "24px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
