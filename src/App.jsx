import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Facilities from './pages/Facilities';
import Infrastructure from './pages/Infrastructure';
import Contact from './pages/Contact';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100,
            disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        });
    }, []);

    return (
        <Router>
            <div className="app">
                <a href="#main-content" className="skip-to-main">
                    Skip to main content
                </a>
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/facilities" element={<Facilities />} />
                        <Route path="/infrastructure" element={<Infrastructure />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
