import React from 'react';
import { Link } from 'react-router-dom';

const MakeAppointButton = () => {
    return (
        <div>
           <Link to="/appointment">
           <button style={{background:'linear-gradient(45deg, #009688db, #ff5c3f)'}} className="btn text-bold text-white p-2 mt-10">Make An Apppointment</button>
           </Link>
        </div>
    );
};

export default MakeAppointButton;