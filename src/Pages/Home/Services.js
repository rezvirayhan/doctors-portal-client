import React from 'react';
import ctscan from '../../assets/services/ct_1_scan.jpg'
import hert from '../../assets/services/hert_2_surgery.jpg'
import mri from '../../assets/services/mri_3.jpg'
import ourot from '../../assets/services/our_ot_4.jpg'
import teeth from '../../assets/services/teeth_5_surgery.jpg'
import ot from '../../assets/services/ot_6.jpg'
import Service from './Service';
import { useEffect } from 'react';
import { useState } from 'react';
const Services = () => {
    // const services = [
    //     {
    //         _id: 1,
    //         name:'CT Scan',
    //         description:'A computerized tomography (CT) scan combines a series of X-ray images taken from different angles around blood vessels and soft tissues inside your body.',
    //         img: ctscan
    //     },
    //     {
    //         _id: 2,
    //         name:'Heart Surgery',
    //         description:'However, according to the National Institute for Health and Clinical Excellence (NICE), survival rates 1 year after either form of open-heart surgery.',
    //         img: hert
    //     },
    //     {
    //         _id: 3,
    //         name:'MRI Scan',
    //         description:'Magnetic resonance imaging (MRI) uses a large magnet and radio waves to look at organs and structures inside your bodyHealth care professionals use MRI scans.',
    //         img: mri
    //     },
    //     {
    //         _id: 4,
    //         name:'Our OT',
    //         description:'Occupational therapy (OT) is a global healthcare profession. It involves the use of assessment and intervention to develop, recover, or maintain the meaningful.',
    //         img: ourot
    //     },
    //     {
    //         _id: 5,
    //         name:'Teeth Opration',
    //         description:'Yes, getting a tooth pulled can hurt. However, your dentist will typically give you local anesthesia during the procedure to eliminate the pain. Also, following the procedure.',
    //         img: teeth
    //     },
    //     {
    //         _id: 6,
    //         name:'Body Checkup',
    //         description:'Craniotomy. The most common type of surgery to remove a brain tumor is a craniotomy. This procedure involves making an incision in the scalp and removing a piece of bone.',
    //         img: ot
    //     }
    // ]


    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/allservices")
        .then(res=>res.json())
        .then(data => setServices(data))
    }, []);
    return (
       
        <div className='my-20'>
            <div className='text-center text-xl'>
            <h3 className='font-bold'>Our Services</h3>
            <h2>All our services are not provided here. But here are some popular services.</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols:2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;