import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

import Home from './pages/Home';
import AboutPage from './pages/About';
import LeadershipPage from './pages/Leadership';
import ServicesPage from './pages/Services';
import InfrastructurePage from './pages/Infrastructure';
import BlogsPage from './pages/Blogs';
import ContactPage from './pages/Contact';
import SearchResults from './pages/SearchResults';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

import translateService from './utils/translateService';
import './styles/index.css';

function App() {
    useEffect(() => {
        translateService.init();
    }, []);

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
                    <Route path="/blogs" element={<BlogsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/search" element={<SearchResults />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<TermsOfService />} />
                </Routes>
            </main>
            <Footer />
            <Chatbot />
        </BrowserRouter>
    );
}

export default App;
