import React from "react";
import slider from "../../assets/about_home_bg.jpg";

const AboutHome = () => {
  return (
    <div className="hero min-h-screen">
      <img className="" src={slider} alt="" />
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="hero-content text-center text-content"></div>
    </div>
  );
};

export default AboutHome;
