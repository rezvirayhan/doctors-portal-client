import React from "react";
import AboutNews from "../About/AboutNews";
import Banner from "./Banner";
import FreeService from "./FreeService";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Banner></Banner>
      <FreeService></FreeService>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <AboutNews></AboutNews>
    </div>
  );
};

export default Home;
