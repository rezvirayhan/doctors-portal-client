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
      style={{
        background: "linear-gradient(181deg, #000000, #25659373)",
        color: "white",
      }}
    >
      <div
        style={{ background: "rgb(227 227 227)," }}
        className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4"
      >
        <div className="text-center">
          <img src={singleService.img} alt="" />
          <h2 style={{ color: "white" }} className="text-3xl font-bold mt-2">
            {singleService.name}
          </h2>
          <p style={{ color: "white" }} className="text-xl mt-2 p-2">
            {singleService.description}
          </p>
        </div>
        <div>
          <h2
            style={{ color: "white" }}
            className="font-bold text-center text-3xl mt-3 mb-3"
          >
            Booking From: {singleService.name}
          </h2>
          <form
            onSubmit={handlebooking}
            className="grid grid-cols-1 justify-items-center gap-3"
          >
            <input
              style={{
                background: "white",
                color: "black",
                border: "3px solid rebeccapurple",
              }}
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              style={{
                background: "white",
                color: "black",
                border: "3px solid rebeccapurple",
              }}
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              style={{
                background: "white",
                color: "black",
                border: "3px solid rebeccapurple",
              }}
              type="date"
              name="date"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              style={{
                background: "white",
                color: "black",
                border: "3px solid rebeccapurple",
              }}
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              style={{
                background: "white",
                color: "black",
                border: "3px solid rebeccapurple",
              }}
              type="email"
              name="email"
              disabled
              value={singleService.doctorName}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              style={{
                background: "white",
                color: "black",
                border: "3px solid rebeccapurple",
              }}
              type="email"
              name="email"
              disabled
              value={singleService.drprice}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              style={{
                background: "white",
                color: "black",
                border: "2px solid black",
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "cursive",
              }}
              type="submit"
              className="btn w-full max-w-xs"
            />
          </form>
        </div>
      </div>
      <div>
        <p>{singleService.finaldescription}</p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-2">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-1">
            <img
              src={singleService.servicesroomimg}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-1">
            <img src={singleService.roomimg} alt="Shoes" class="rounded-xl" />
          </figure>
        </div>
        <div class="card w-96 shadow-xl">
          <figure class="px-1">
            <img
              src={singleService.fullteamimg}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
        </div>
      </div>
      <div
        style={{
          background: "linear-gradient(181deg, #000000, #25659373)",
          color: "white",
        }}
        class="hero min-h-screen"
      >
        <div class="hero-content flex-col lg:flex-row">
          <img
            src={singleService.doctorimages}
            className="w-[600px] md-w-[400px] lg-w-sm"
            alt={singleService.doctorimages}
          />
          <div>
            <h1 class="text-5xl font-bold">Dr. {singleService.doctorName}</h1>
            <h1 class="text-4xl font-bold mt-5">
              Price: {singleService.drprice} $ Per Admite
            </h1>
            <p class="py-6">{singleService.doctorsdescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBooking;
