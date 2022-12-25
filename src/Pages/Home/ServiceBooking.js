import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
const ServiceBooking = () => {
  const { serviceId } = useParams();
  const [singleService, singleSetService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/singleService/${serviceId}`)
      .then((res) => res.json())
      .then((data) => singleSetService(data));
  }, [serviceId]);
  const [user, loading, error] = useAuthState(auth);

  const handlebooking = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    console.log(name);
  };

  return (
    <div
      style={{ background: "rgb(227 227 227),", color: "black" }}
      className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4"
    >
      <div className="text-center">
        <img src={singleService.img} alt="" />
        <h2 className="text-3xl font-bold mt-2">{singleService.name}</h2>
        <p className="text-xl mt-2 p-2">{singleService.description}</p>
      </div>
      <div>
        <h2 className="font-bold text-center text-3xl mt-3 mb-3">
          Booking From: {singleService.name}
        </h2>
        <form
          onClick={handlebooking}
          className="grid grid-cols-1 justify-items-center gap-3"
        >
          <input
            type="text"
            name="name"
            disabled
            value={user?.displayName || ""}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="email"
            name="email"
            disabled
            value={user?.email || ""}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="date"
            name="date"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            className="input input-bordered w-full max-w-xs"
          />
          <input type="submit" className="btn w-full max-w-xs" />
        </form>
      </div>
    </div>
  );
};

export default ServiceBooking;
