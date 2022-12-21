import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const {data:services, isLoading}= useQuery('services', ()=> fetch("http://localhost:5000/service").then(res=>res.json()))


  const imageStorageKey = 'e447e8f223f9a9146b6964b8e00ceb64';



  const onSubmit = async (data) => {
    const image= data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
    fetch(url, {
      method:'POST',
      body: formData
    })
    .then(res=>res.json())
    .then(result =>{
      if(result.success){
        const img= result.data.url;
        const doctor ={
          name:data.name,
          email:data.email,
          Speciality:data.speciality,
          img:img
        }
        fetch('http://localhost:5000/doctor', {
          method:'POST',
          headers:{
            'content-type': 'application/json',
             'authorization': `Beraer ${localStorage.getItem('accessToken')}`
          },
          body:JSON.stringify(doctor)
        })
        .then(res=> res.json())
        .then(inserted=>{
          if(inserted.insertedId){
            toast.success('Doctors Added Succesfully Done... ')
            reset()
          }
          else{
            toast.error('Opps Sorry Failed To Added The Doctors')
          }
        })
      }
      console.log('imgbb', result);
    })
  };




  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <div>
      <h2 className="text-3xl">Add A New Doctors</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name Is Required",
              },
            })}
          />

          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-600">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email?</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email Is Required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide Your Valid Email",
              },
            })}
          />

          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-600">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Speciality?</span>
          </label>
          <select {...register('speciality')} class="select input-bordered w-full max-w-xs">
            {
              services.map(service => <option
              key={service._id}
              value={service.name}
              >{service.name}</option>  )
            }
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Images Is Required",
              },
            })}
          />

          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-600">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <input
          className="btn btn-active w-full max-w-xs"
          type="submit"
          value="Added+"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
