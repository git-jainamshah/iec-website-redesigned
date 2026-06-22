import React from 'react';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import About from '../components/About';
import Metrics from '../components/Metrics';
import Services from '../components/Services';
import Certifications from '../components/Certifications';
import Blogs from '../components/Blogs';
import CTA from '../components/CTA';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <>
            <Hero />       {/* dark — cinematic full-screen */}
            <Clients />    {/* light — social proof + logo marquee */}
            <About />      {/* dark — editorial brand story + stats grid */}
            <Metrics />    {/* dark — cinematic capability numbers */}
            <Services />   {/* light — numbered editorial service list */}
            <Certifications /> {/* light — trust signals strip */}
            <Blogs />      {/* light — thought leadership */}
            <CTA />        {/* dark — conversion banner */}
            <Newsletter /> {/* dark — final touchpoint */}
        </>
    );
};

export default Home;
