import React from 'react';
import aboutBanner from "../../assets/about_banner.png";

const AboutBanner = () => {
    return (
        <div style={{background:'#0b1120', color:'white'}}>
        <div className="hero min-h-screen px-12">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
              <h1 className="text-4xl"><b>Aliquam Congue!</b> Eget Ante Ultric <b>Viverra Nissit    </b></h1>
                
              <p className="py-6">
              Doctors, also known as physicians, are licensed health professionals who maintain and restore human health through the practice of medicine. They examine patients, review their medical history, diagnose illnesses or injuries, administer treatment, and counsel patients on their health and well-being
               
              </p>
                </div>
            <img src={aboutBanner} className="w-[500px] md-w-[400px] lg-w-sm" alt="" />

          </div>
        </div>
      </div>
    );
};

export default AboutBanner;