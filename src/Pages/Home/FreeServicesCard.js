import React from 'react';

const FreeServicesCard = ({img,cardTaitle}) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="pl-5">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-black">
        <h2 className="card-title">{cardTaitle}</h2>
      </div>
    </div>
    );
};

export default FreeServicesCard;