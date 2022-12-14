import React from "react";
import Fade from "react-reveal/Fade";
import aboutTeam from "../../assets/about_main.png";

const AboutTeam = () => {
  return (
    <div style={{ background: "#607d8b", color: "white" }}>
      <div className="hero min-h-screen px-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Fade right big>
            <img
              src={aboutTeam}
              className="w-[600px] md-w-[500px] lg-w-sm"
              alt=""
            />
          </Fade>
          <Fade right big>
            <div>
              <h1 className="text-2xl mb-4">Dr. Janelle Chambers</h1>
              <h1 className="text-5xl">
                {" "}
                Our{" "}
                <span style={{ color: "tomato" }} className="font-bold">
                  Team
                </span>
              </h1>
              <p className="py-6">
                Dr Janelle Chambers is is dedicated to providing her patients
                with the best possible care. We at MediCare are focused on
                helping you. After receiving successful care for various aches
                and pains over the years, Dr Chambers found her calling to help
                others get well.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
