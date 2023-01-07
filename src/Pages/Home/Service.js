import React from "react";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={service.img} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{service.name}</h2>
        <p>{service.description}</p>
        <Slide right>
          <div className="card-actions">
            <Link to={`Booking/${service._id}`}>
              {" "}
              <button class="btn">Booking +</button>{" "}
            </Link>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Service;
