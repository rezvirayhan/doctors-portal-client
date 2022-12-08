import React from 'react';
import FreeServicesCard from './FreeServicesCard';
import blood from '../../assets/Blood_Panel.png'
import text from '../../assets/Cholesterol_Test.png'
import covit from '../../assets/COVID_Department.png'
import vaccination from '../../assets/Covid_free_Vaccination.png'

const FreeService = () => {
    return (
        <div>
            <div>
              <h3 className='text-center font-bold text-3xl mt-2 py-3'>Free Services Of Premium Members.</h3>
            </div>
         <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4' >
            <FreeServicesCard img={blood} cardTaitle='Laboratory Research'></FreeServicesCard>
            <FreeServicesCard img={text} cardTaitle='COVID Department'></FreeServicesCard>
            <FreeServicesCard img={covit} cardTaitle='PCR Testing'></FreeServicesCard>
            <FreeServicesCard img={vaccination} cardTaitle='Free Vaccination'></FreeServicesCard>
        </div>
        </div>
       
    );
};

export default FreeService;

