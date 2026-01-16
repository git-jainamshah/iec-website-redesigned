import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import iecLogo from '../assets/iec-logo.png';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Infrastructure', path: '/infrastructure' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                {/* Logo Section */}
                <Link to="/" className="brand" onClick={() => setMobileOpen(false)}>
                    <img src={iecLogo} alt="IEC Logo" className="logo-img" />
                    <div className="brand-text">
                        <span className="name">Indian Engineering Company</span>
                        <span className="tagline">SINCE 1974</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <Link to="/contact" className="btn btn-primary header-cta">Request Quote</Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle Menu"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${mobileOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="mobile-link"
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="btn btn-primary mobile-btn" onClick={() => setMobileOpen(false)}>
                        Request Quote
                    </Link>
                </div>
            </div>

            <style>{`
                /* Header Base */
                .header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    background: white;
                    z-index: 1000;
                    border-bottom: 1px solid #f0f0f0;
                    transition: all 0.3s ease;
                    height: 80px;
                    display: flex;
                    align-items: center;
                }

                .header.scrolled {
                    height: 70px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
                }

                .header-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                }

                /* Brand */
                .brand {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .logo-img {
                    height: 50px;
                    width: auto;
                    object-fit: contain;
                }

                .brand-text {
                    display: flex;
                    flex-direction: column;
                }

                .brand-text .name {
                    font-size: 18px;
                    font-weight: 700;
                    color: var(--color-text-primary);
                    text-transform: uppercase;
                    line-height: 1.1;
                }

                .brand-text .tagline {
                    font-size: 11px;
                    font-weight: 600;
                    color: var(--color-accent);
                    letter-spacing: 1px;
                }

                /* Desktop Nav */
                .desktop-nav {
                    display: flex;
                    align-items: center;
                    gap: 40px;
                }

                .nav-link {
                    font-size: 15px;
                    font-weight: 500;
                    color: var(--color-text-secondary);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    position: relative;
                }

                .nav-link:hover, .nav-link.active {
                    color: var(--color-accent);
                }

                .header-cta {
                    padding: 10px 24px;
                    font-size: 14px;
                }

                /* Mobile Toggle */
                .mobile-toggle {
                    display: none;
                    flex-direction: column;
                    gap: 5px;
                    background: none;
                    border: none;
                    cursor: pointer;
                }

                .bar {
                    width: 25px;
                    height: 2px;
                    background: #333;
                    transition: 0.3s;
                }

                /* Mobile Menu */
                .mobile-menu {
                    position: fixed;
                    top: 80px;
                    left: 0;
                    width: 100%;
                    background: white;
                    padding: 20px;
                    display: none;
                    flex-direction: column;
                    gap: 20px;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                }

                .mobile-menu.active {
                    display: flex;
                }

                .mobile-link {
                    font-size: 16px;
                    font-weight: 600;
                    color: #333;
                }

                @media (max-width: 900px) {
                    .desktop-nav { display: none; }
                    .mobile-toggle { display: flex; }
                    .brand-text .name { font-size: 14px; }
                }
            `}</style>
        </header>
    );
};

export default Header;
