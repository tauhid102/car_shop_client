import React from 'react';
import picture from '../../../images/aboutUs.jpg';
const AboutUs = () => {
    return (
        <div className='container'>
            <h3 className='text-center'>About Us</h3>
            <p className='m-auto text-danger text-center border-2 mb-3 border-bottom border-danger w-75'>Welcome to Car Shop BD, car trader’s professional “All Inclusive” solutions for car export worldwide! </p>
            <div className="row row-cols-1 row-cols-sm-2">
                <div className="col mt-4">
                    <small>Car Shop BD is a car showroom of Car Shipping BD, Miami, Florida based international car shipping and car export company with 23 years of experience in international car trade. We are in business to assist car exporters and individual buyers from around the globe to buy a car in USA and export to anywhere in the world. We display 50,000 + cars, vehicles, trucks posted for sale.

                      <br/>It is evident and well known fact that South East Florida region for years has been recognized as a car capital of the world where the most clean and rust free cars are with lowest prices in BD. The most car manufacturers in US are located in the East Coast too. Shipping a car from Florida worldwide is also much more affordable than from any other US state like California where labor unions run ports and therefore shipping cost on average 10% higher to any worldwide destination.
                      <br/>From the moment we receive your car shipping quote to the shipping a car to you, we provide exceptional customer service, answer all your questions, consult on any car export subject. Once we locate your new car in our web site or elsewhere, we will take over from there, you just relax and we do the rest for you: we will verify seller, request additional car details, negotiate final sales price, prepare sales and purchase agreement, arrange car inspection, test drive, check bank liens, provide export documents: Bill of Sale, Title, Certificate of Origin, repairs if needed, parts, equipment installations, arrange car pick up from the seller and international shipping to your country and much more.

                    </small>
                </div>
                <div className="col  picutre">
                    <img src={picture} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;