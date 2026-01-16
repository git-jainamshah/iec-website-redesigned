import React from 'react';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Metrics from '../components/Metrics';
import Services from '../components/Services';
import About from '../components/About';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <>
            <Hero />
            <Clients />
            <Metrics />
            <Services />
            <About />
            <Newsletter />
        </>
    );
};

export default Home;
