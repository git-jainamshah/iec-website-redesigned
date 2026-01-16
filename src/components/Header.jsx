import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/iec-logo.png';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
        setActiveDropdown(null);
    }, [location]);

    const navItems = [
        { label: 'About Us', path: '/about' },
        { 
            label: 'Services', 
            path: '/services',
            dropdown: [
                { label: 'Motors & Generators', path: '/services#motors' },
                { label: 'Industrial Pumps', path: '/services#pumps' },
                { label: 'Spare Parts', path: '/services#spares' },
            ]
        },
        { 
            label: 'Capabilities', 
            path: '/infrastructure',
            dropdown: [
                { label: 'Infrastructure', path: '/infrastructure' },
                { label: 'Testing Facilities', path: '/infrastructure#testing' },
                { label: 'Quality Assurance', path: '/infrastructure#quality' },
            ]
        },
        { label: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <header className={`header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
                <div className="header-inner">
                    <Link to="/" className="logo">
                        <img src={logo} alt="IEC" />
                        <div className="logo-text">
                            <span className="logo-name">Indian Engineering</span>
                            <span className="logo-tagline">Company</span>
                        </div>
                    </Link>

                    <nav className="nav">
                        {navItems.map((item, idx) => (
                            <div 
                                key={item.label}
                                className="nav-item"
                                onMouseEnter={() => item.dropdown && setActiveDropdown(idx)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <NavLink 
                                    to={item.path}
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                >
                                    {item.label}
                                    {item.dropdown && (
                                        <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    )}
                                </NavLink>
                                
                                {item.dropdown && (
                                    <div className={`dropdown ${activeDropdown === idx ? 'active' : ''}`}>
                                        <div className="dropdown-inner">
                                            {item.dropdown.map(sub => (
                                                <Link key={sub.label} to={sub.path} className="dropdown-link">
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="header-actions">
                        <a href="tel:+919824214839" className="phone">
                            <span className="phone-label">24/7 Support</span>
                            <span className="phone-number">+91 98242 14839</span>
                        </a>
                        <Link to="/contact" className="btn btn-primary">
                            Get Quote
                        </Link>
                    </div>

                    <button 
                        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <nav className="mobile-nav">
                    {navItems.map(item => (
                        <div key={item.label} className="mobile-nav-item">
                            <Link to={item.path} className="mobile-link">{item.label}</Link>
                            {item.dropdown && (
                                <div className="mobile-sub">
                                    {item.dropdown.map(sub => (
                                        <Link key={sub.label} to={sub.path} className="mobile-sub-link">
                                            {sub.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link to="/contact" className="btn btn-primary mobile-cta">Get Quote</Link>
                </nav>
            </div>

            <style>{`
                .header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background: transparent;
                    transition: all 0.4s var(--ease-out);
                }

                .header.scrolled {
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(20px);
                    box-shadow: 0 1px 0 var(--color-border);
                }

                .header-inner {
                    max-width: var(--max-width);
                    margin: 0 auto;
                    padding: 0 var(--space-xl);
                    height: var(--header-height);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                /* Logo */
                .logo {
                    display: flex;
                    align-items: center;
                    gap: var(--space-md);
                }

                .logo img {
                    height: 48px;
                    width: auto;
                    transition: all 0.3s var(--ease-out);
                }

                .header.scrolled .logo img {
                    height: 40px;
                }

                .logo-text {
                    display: flex;
                    flex-direction: column;
                    line-height: 1.1;
                }

                .logo-name {
                    font-size: 0.9375rem;
                    font-weight: 600;
                    color: var(--color-white);
                    transition: color 0.3s;
                }

                .logo-tagline {
                    font-size: 0.9375rem;
                    font-weight: 600;
                    color: var(--color-accent);
                }

                .header.scrolled .logo-name {
                    color: var(--color-text);
                }

                /* Navigation */
                .nav {
                    display: flex;
                    align-items: center;
                    gap: var(--space-2xl);
                }

                .nav-item {
                    position: relative;
                }

                .nav-link {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    font-size: 0.8125rem;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.85);
                    text-transform: uppercase;
                    letter-spacing: 0.06em;
                    padding: 8px 0;
                    transition: color 0.2s;
                }

                .header.scrolled .nav-link {
                    color: var(--color-text-light);
                }

                .nav-link:hover,
                .nav-link.active {
                    color: var(--color-white);
                }

                .header.scrolled .nav-link:hover,
                .header.scrolled .nav-link.active {
                    color: var(--color-text);
                }

                .chevron {
                    width: 14px;
                    height: 14px;
                    transition: transform 0.2s;
                }

                .nav-item:hover .chevron {
                    transform: rotate(180deg);
                }

                /* Dropdown */
                .dropdown {
                    position: absolute;
                    top: 100%;
                    left: -20px;
                    padding-top: 16px;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(10px);
                    transition: all 0.3s var(--ease-out);
                }

                .dropdown.active {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }

                .dropdown-inner {
                    background: var(--color-white);
                    border: 1px solid var(--color-border);
                    border-radius: 4px;
                    padding: var(--space-sm);
                    min-width: 220px;
                    box-shadow: var(--shadow-lg);
                }

                .dropdown-link {
                    display: block;
                    padding: var(--space-sm) var(--space-md);
                    font-size: 0.875rem;
                    color: var(--color-text-light);
                    border-radius: 3px;
                    transition: all 0.2s;
                }

                .dropdown-link:hover {
                    background: var(--color-light);
                    color: var(--color-text);
                }

                /* Header Actions */
                .header-actions {
                    display: flex;
                    align-items: center;
                    gap: var(--space-xl);
                }

                .phone {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    line-height: 1.2;
                }

                .phone-label {
                    font-size: 0.625rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: rgba(255, 255, 255, 0.5);
                    transition: color 0.3s;
                }

                .header.scrolled .phone-label {
                    color: var(--color-muted);
                }

                .phone-number {
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: var(--color-white);
                    transition: color 0.3s;
                }

                .header.scrolled .phone-number {
                    color: var(--color-text);
                }

                .header-actions .btn {
                    padding: 0.75rem 1.5rem;
                }

                /* Menu Toggle */
                .menu-toggle {
                    display: none;
                    flex-direction: column;
                    gap: 5px;
                    padding: 8px;
                    margin-right: -8px;
                }

                .menu-toggle span {
                    width: 22px;
                    height: 2px;
                    background: var(--color-white);
                    transition: all 0.3s var(--ease-out);
                }

                .header.scrolled .menu-toggle span {
                    background: var(--color-text);
                }

                .menu-toggle.active span:nth-child(1) {
                    transform: rotate(45deg) translate(5px, 5px);
                }

                .menu-toggle.active span:nth-child(2) {
                    opacity: 0;
                }

                .menu-toggle.active span:nth-child(3) {
                    transform: rotate(-45deg) translate(5px, -5px);
                }

                /* Mobile Menu */
                .mobile-menu {
                    position: fixed;
                    top: var(--header-height);
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: var(--color-white);
                    z-index: 999;
                    padding: var(--space-xl);
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.4s var(--ease-out);
                }

                .mobile-menu.open {
                    opacity: 1;
                    visibility: visible;
                }

                .mobile-nav {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-md);
                }

                .mobile-link {
                    font-size: 1.25rem;
                    font-weight: 500;
                    color: var(--color-text);
                    padding: var(--space-sm) 0;
                    border-bottom: 1px solid var(--color-border);
                }

                .mobile-sub {
                    padding: var(--space-sm) 0 var(--space-md) var(--space-lg);
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-sm);
                }

                .mobile-sub-link {
                    font-size: 0.9375rem;
                    color: var(--color-text-light);
                }

                .mobile-cta {
                    margin-top: var(--space-xl);
                    width: 100%;
                    justify-content: center;
                }

                @media (max-width: 960px) {
                    .nav,
                    .header-actions .phone,
                    .header-actions .btn {
                        display: none;
                    }

                    .menu-toggle {
                        display: flex;
                    }
                }

                @media (max-width: 600px) {
                    .logo-text {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
};

export default Header;
