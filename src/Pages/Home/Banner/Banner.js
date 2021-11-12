import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item className="banner">
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="banner-title">
                        <h1>Get by largest <span className='text-danger'>Brands</span> </h1>
                        <p>Shop BD is a Car Shop. Perfectly suited for Auto Mechanic, Car Repair Shops, Car Wash, Garages, Automobile Mechanicals, Mechanic Workshops, Auto Painting, Auto Centres.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="banner">
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="banner-title">
                        <h1>Say Helloi To <span className='text-danger'> Shop BD</span> !</h1>
                        <p>Shop BD is a Car Shop. Perfectly suited for Auto Mechanic, Car Repair Shops, Car Wash, Garages, Automobile Mechanicals, Mechanic Workshops, Auto Painting, Auto Centres.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="banner">
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="banner-title">
                        <h1>Get All Your Need<span className='text-danger'> Easily</span> </h1>
                        <p>Shop BD is a Car Shop. Perfectly suited for Auto Mechanic, Car Repair Shops, Car Wash, Garages, Automobile Mechanicals, Mechanic Workshops, Auto Painting, Auto Centres.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;