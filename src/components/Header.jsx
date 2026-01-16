import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/iec-logo.png';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { to: '/about', label: 'About' },
        { to: '/services', label: 'Services' },
        { to: '/infrastructure', label: 'Infrastructure' },
        { to: '/contact', label: 'Contact' },
    ];

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-inner">
                <Link to="/" className="logo">
                    <img src={logo} alt="Indian Engineering Company" />
                </Link>

                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    {links.map(link => (
                        <NavLink 
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <Link to="/contact" className="btn btn-primary nav-cta" onClick={() => setMenuOpen(false)}>
                        Get Quote
                    </Link>
                </nav>

                <button 
                    className={`menu-btn ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    <span />
                    <span />
                </button>
            </div>

            <style>{`
                .header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background: var(--color-white);
                    transition: box-shadow var(--transition);
                }

                .header.scrolled {
                    box-shadow: 0 1px 0 var(--color-gray-200);
                }

                .header-inner {
                    max-width: var(--max-width);
                    margin: 0 auto;
                    padding: 0 var(--space-6);
                    height: var(--header-height);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .logo img {
                    height: 44px;
                    width: auto;
                }

                .nav {
                    display: flex;
                    align-items: center;
                    gap: var(--space-8);
                }

                .nav a:not(.nav-cta) {
                    font-size: 0.9375rem;
                    font-weight: 500;
                    color: var(--color-gray-600);
                    transition: color var(--transition);
                }

                .nav a:not(.nav-cta):hover,
                .nav a:not(.nav-cta).active {
                    color: var(--color-gray-900);
                }

                .nav-cta {
                    margin-left: var(--space-4);
                }

                .menu-btn {
                    display: none;
                    flex-direction: column;
                    gap: 6px;
                    padding: 4px;
                }

                .menu-btn span {
                    width: 24px;
                    height: 2px;
                    background: var(--color-gray-800);
                    transition: var(--transition);
                }

                .menu-btn.open span:first-child {
                    transform: rotate(45deg) translate(3px, 3px);
                }

                .menu-btn.open span:last-child {
                    transform: rotate(-45deg) translate(3px, -3px);
                }

                @media (max-width: 768px) {
                    .menu-btn {
                        display: flex;
                    }

                    .nav {
                        position: fixed;
                        top: var(--header-height);
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: var(--color-white);
                        flex-direction: column;
                        padding: var(--space-8);
                        gap: var(--space-4);
                        opacity: 0;
                        visibility: hidden;
                        transition: var(--transition);
                    }

                    .nav.open {
                        opacity: 1;
                        visibility: visible;
                    }

                    .nav a:not(.nav-cta) {
                        font-size: 1.25rem;
                        padding: var(--space-2) 0;
                    }

                    .nav-cta {
                        margin: var(--space-4) 0 0;
                        width: 100%;
                        justify-content: center;
                    }
                }
            `}</style>
        </header>
    );
};

export default Header;
