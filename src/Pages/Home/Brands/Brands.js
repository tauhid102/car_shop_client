import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo1 from '../../../images/brands/Audi.png';
import logo2 from '../../../images/brands/bmw.png';
import logo3 from '../../../images/brands/ferrari.png';
import logo4 from '../../../images/brands/ford.png';
import logo5 from '../../../images/brands/honda.png';
import logo6 from '../../../images/brands/Hyundai.png';
import logo7 from '../../../images/brands/lamborghini.png';
import logo8 from '../../../images/brands/tesla.png';
import logo9 from '../../../images/brands/toyota.png';
const Brands = () => {
    return (
        <div  className='container mb-5'>
            <h3 className='text-center mt-4'>Brands We <span className='text-danger'>Provide</span></h3>
            <p className='text-danger m-auto text-center border-2 mb-3 border-bottom border-danger w-25'>World Best Brands are Here</p>
            <Carousel variant="dark">
                <Carousel.Item >
                    <img
                        src={logo1}
                        alt="First slide"
                        height='200px'
                        width='33%'
                    />
                    <img
                        src={logo2}
                        alt="First slide"
                        height='200px'
                        width='33%'
                    />
                    <img
                        src={logo3}
                        alt="First slide"
                        height='200px'
                        width='33%'
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={logo4}
                        alt="Second slide"
                        height='200px'
                        width='33%'
                    />
                    <img
                        src={logo5}
                        alt="Second slide"
                        height='200px'
                        width='33%'
                    />
                    <img
                        src={logo6}
                        alt="Second slide"
                        height='200px'
                        width='33%'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={logo7}
                        alt="Third slide"
                        height='200px'
                        width='33%'
                    />
                    <img
                        src={logo8}
                        alt="Third slide"
                        height='200px'
                        width='33%'
                    />
                    <img
                        src={logo9}
                        alt="Third slide"
                        height='200px'
                        width='33%'
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Brands;