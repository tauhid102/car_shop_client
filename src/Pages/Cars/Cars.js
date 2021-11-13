import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Cars.css';
const Cars = () => {
    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-cliffs-39338.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <>
            <Header></Header>
            <div>
                <div className='purchasePhoto'>
                    {/* <img src={car} alt="" srcset="" /> */}
                    <h2 className=''>Select Your Favourite Car Here</h2>
                </div>
                <div className='container'>
                    <h3 className='text-center mt-4'>Find Your Comfortable Cars</h3>
                    <h5 className='text-danger m-auto text-center border-2 mb-3 border-bottom border-danger w-25'>Get by largest Brands</h5>
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        {
                            services.map(service => <Car
                                key={service._id}
                                service={service}
                            ></Car>)
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Cars;