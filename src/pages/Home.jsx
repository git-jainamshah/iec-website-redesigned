import React from 'react';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Services from '../components/Services';
import About from '../components/About';

const Home = () => {
    return (
        <>
            <Hero />
            <Clients />
            <Services />
            <About />
        </>
    );
};

export default Home;
