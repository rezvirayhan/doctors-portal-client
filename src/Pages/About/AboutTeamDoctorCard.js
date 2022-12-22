import React from 'react';

const AboutTeamDoctorCard = ({img,title,name,description}) => {
    return (
      <div class="card bg-base-500 shadow-xl">
  <figure><img src={img} alt="Doctor" /></figure>
  <div class="card-body">
    <h4 class="card-title"><small>{title}</small></h4>
    <h2 class="card-title">{name}</h2>
    <p>{description}</p>
  </div>
</div>
    );
};

export default AboutTeamDoctorCard;