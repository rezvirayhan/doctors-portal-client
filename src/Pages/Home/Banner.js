import React from "react";
import { Link } from "react-router-dom";
import barin from "../../assets/barin.jpg";
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 px-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={barin} className="w-[500px] md-w-[400px] lg-w-sm" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/appointment">
              <button className="btn btn-accent text-white">
                {" "}
                Make An Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
