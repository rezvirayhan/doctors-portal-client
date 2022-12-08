import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div
      style={{ background: "#a0a5abb0" }}
      className="card lg:max-w-lg shadow-xl mt-5"
    >
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span style={{ color: "red" }}>Not Available Appoitment</span>
          )}
        </p>
        <p>{slots.length} Available Appoitment</p>
        <div className="card-actions justify-end">
            <label
              htmlFor="booking-modal"
              onClick={() => setTreatment(service)}
              disabled={slots.length === 0}
              style={{
                background: "#3f51b5",
                fontWeight: "bold",
                color: "white",
              }}
              className="btn"
            >
              Buy Now
            </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
