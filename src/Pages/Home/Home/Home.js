import React from 'react';
import Counter from '../../Counter/Counter';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import ShowReview from '../ShowReview/ShowReview';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Counter></Counter>
            <AboutUs></AboutUs>
            <Brands></Brands>
            <ShowReview></ShowReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;