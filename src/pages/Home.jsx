import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Facilities from '../components/Facilities';
import Infrastructure from '../components/Infrastructure';
import Partners from '../components/Partners';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Facilities />
            <Infrastructure />
            <Partners />
        </>
    );
};

export default Home;
