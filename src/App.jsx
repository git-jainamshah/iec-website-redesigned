import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutPage from './pages/About';
import LeadershipPage from './pages/Leadership';
import ServicesPage from './pages/Services';
import InfrastructurePage from './pages/Infrastructure';
import ContactPage from './pages/Contact';

import './styles/index.css';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/leadership" element={<LeadershipPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/infrastructure" element={<InfrastructurePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
