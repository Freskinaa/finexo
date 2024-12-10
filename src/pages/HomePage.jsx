import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import WhyUs from "../components/WhyUs";
import Team from "../components/Team";
import Customers from "../components/Customers";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <AboutUs />
      <WhyUs />
      <Team />
      <Customers />
    </div>
  );
};

export default HomePage;
