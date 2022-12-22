import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({doctor, index,refetch}) => {
    const {name, email,Speciality, img,} = doctor;

    const handledelete = email =>{
        fetch(`http://localhost:5000/doctor/${email}`, {
            method:'DELETE',
            headers: {
                authorization: `Beraer ${localStorage.getItem("accessToken")}`,
              }
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                toast.success(`Dr. ${name}. Deleted Success.....`)
                refetch()
            }
        })
    }
    return (
        <tr>
        <th>{index + 1}</th>
        <td><div class="avatar online">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={img} alt={name} />
  </div>
</div></td>
        <td>{name}</td>
        <td>{Speciality}</td>
        <td>{email}</td>
        <th>
          <button onClick={()=>handledelete(email)} style={{background:'crimson', color:'white'}} class="btn btn-xs">Doctor Delete</button>
        </th>
      </tr>
    );
};

export default DoctorRow;