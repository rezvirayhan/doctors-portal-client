import React from "react";
import Slide from "react-reveal/Slide";

const Service = ({ service, setTreatment }) => {
  const { name, slots, img } = service;
  return (
    <div
      style={{ background: "#a0a5abb0" }}
      className="card lg:max-w-lg shadow-xl mt-5"
    >
      <div className="card-body">
        <div class="avatar ">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="" />
          </div>
        </div>
        <h2 className="card-title">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span style={{ color: "red" }}>Not Available Appoitment</span>
          )}
        </p>
        <p>{slots.length} Available Appoitment</p>

        <Slide left>
          <div className="card-actions justify-end">
            <label
              htmlFor="booking-modal"
              onClick={() => setTreatment(service)}
              disabled={slots.length === 0}
              style={{
                background:
                  "linear-gradient(136.85deg, #FF37F2 -15.82%, #405AFF 99.57%)",
                fontWeight: "bold",
                color: "white",
              }}
              className="btn"
            >
              Booking Now
            </label>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Service;
