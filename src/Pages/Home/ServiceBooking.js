import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const ServiceBooking = () => {
  const { serviceId } = useParams();
  const [singleService, singleSetService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/singleService/${serviceId}`)
      .then((res) => res.json())
      .then((data) => singleSetService(data));
  }, []);

  return (
   <div>
    <img src={singleService.img} alt="" />
   </div>
  );
};

export default ServiceBooking;
