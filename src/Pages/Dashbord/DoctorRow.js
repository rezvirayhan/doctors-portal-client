import React from 'react';

const DoctorRow = ({doctor, index}) => {
    const {name, email,Speciality, img} = doctor;
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
          <button style={{background:'crimson', color:'white'}} class="btn btn-xs">Doctor Delete</button>
        </th>
      </tr>
    );
};

export default DoctorRow;