import React from 'react';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import About from '../components/About';
import Services from '../components/Services';
import Certifications from '../components/Certifications';
import Blogs from '../components/Blogs';
import CTA from '../components/CTA';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <>
            <Hero />
            <Clients />
            <About />
            <Services />
            <Certifications />
            <Blogs />
            <CTA />
            <Newsletter />
        </>
    );
};

export default Home;
