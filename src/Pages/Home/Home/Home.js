import React from 'react';
import Counter from '../../Counter/Counter';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Counter></Counter>
            <Footer></Footer>
        </div>
    );
};

export default Home;