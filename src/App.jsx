import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

// Home loads eagerly — it's always the first page
import Home from './pages/Home';

// All other pages lazy-loaded — only downloaded when navigated to
const AboutPage        = lazy(() => import('./pages/About'));
const LeadershipPage   = lazy(() => import('./pages/Leadership'));
const ServicesPage     = lazy(() => import('./pages/Services'));
const InfrastructurePage = lazy(() => import('./pages/Infrastructure'));
const BlogsPage        = lazy(() => import('./pages/Blogs'));
const BlogPost         = lazy(() => import('./pages/BlogPost'));
const ContactPage      = lazy(() => import('./pages/Contact'));
const SearchResults    = lazy(() => import('./pages/SearchResults'));
const Careers          = lazy(() => import('./pages/Careers'));
const JobPosting       = lazy(() => import('./pages/JobPosting'));
const PrivacyPolicy    = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService   = lazy(() => import('./pages/TermsOfService'));

import translateService from './utils/translateService';
import './styles/index.css';

const ScrollRevealRefresh = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        AOS.refresh();
    }, [location.pathname]);
    return null;
};

function App() {
    useEffect(() => {
        translateService.init();
        AOS.init({
            duration: 700,
            easing: 'ease-out-cubic',
            once: true,
            offset: 60,
        });
    }, []);

    return (
        <BrowserRouter>
            <ScrollRevealRefresh />
            <Header />
            <main>
                <Suspense fallback={null}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/leadership" element={<LeadershipPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/infrastructure" element={<InfrastructurePage />} />
                        <Route path="/blogs" element={<BlogsPage />} />
                        <Route path="/blogs/:id" element={<BlogPost />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/search" element={<SearchResults />} />
                        <Route path="/careers" element={<Careers />} />
                        <Route path="/careers/:slug" element={<JobPosting />} />
                        <Route path="/privacy" element={<PrivacyPolicy />} />
                        <Route path="/terms" element={<TermsOfService />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
            <Chatbot />
        </BrowserRouter>
    );
}

export default App;
