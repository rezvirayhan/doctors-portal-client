import React from "react";
import appontmentimg from "../../assets/make_home_appoint.jpg";
import appontmentbg from "../../assets/home_appoinmtnt_bg.jpg";
import MakeAppointButton from "../Shared/MakeAppointButton";
import { Fade } from "react-reveal";
const MakeAppointment = () => {
  return (
    <section
      style={{
        background: "#2b3032",
      }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img src={appontmentimg} alt="" />
      </div>
      <div className="flex-1 ml-20">
        <h3 className="text-white text-2xl">Appointment </h3>
        <h2 className="text-white lg:text-3xl sm:xl lg:mt-15 sm:mt-10">
          Make Appointment Serious Patient
        </h2>
        <p className="text-white lg:mt-10 sm:mt-10 ">
          Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide with additional
          clickthroughs from DevOps.
        </p>
        <div>
          <Fade right>
            <MakeAppointButton></MakeAppointButton>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
