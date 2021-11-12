import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';


const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div className="container">
            <div className='mt-5 mb-3'>
                <h3 className='text-center mt-4'>Our Service</h3>
                <h6 className='text-danger m-auto text-center border-2 mb-3 border-bottom border-danger w-25'>Get Your Favourite Car from here</h6>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {
                services.map(service=><Service
                service={service}
                ></Service>)
            }
        </div>
        </div>
    );
};

export default Services;