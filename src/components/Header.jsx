import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/iec-logo.png';

const languages = {
    indian: [
        { code: 'en', name: 'English' },
        { code: 'hi', name: 'हिंदी' },
        { code: 'gu', name: 'ગુજરાતી' },
        { code: 'mr', name: 'मराठी' },
        { code: 'te', name: 'తెలుగు' },
        { code: 'ta', name: 'தமிழ்' },
        { code: 'ml', name: 'മലയാളം' },
        { code: 'kn', name: 'ಕನ್ನಡ' },
    ],
    international: [
        { code: 'fr', name: 'Français' },
        { code: 'es', name: 'Español' },
        { code: 'de', name: 'Deutsch' },
    ]
};

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState('en');
    const location = useLocation();
    const searchRef = useRef(null);
    const langRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
        setActiveDropdown(null);
        setSearchOpen(false);
        setLangOpen(false);
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setSearchOpen(false);
            }
            if (langRef.current && !langRef.current.contains(e.target)) {
                setLangOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navItems = [
        { label: 'About', path: '/about' },
        { 
            label: 'Services', 
            path: '/services',
            dropdown: [
                { label: 'Motors & Generators', path: '/services#motors' },
                { label: 'Industrial Pumps', path: '/services#pumps' },
                { label: 'Spare Parts', path: '/services#spares' },
            ]
        },
        { label: 'Infrastructure', path: '/infrastructure' },
        { label: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <header className={`header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
                {/* Brand - JP Morgan Style: All in one horizontal line */}
                <Link to="/" className="brand">
                    <img src={logo} alt="IEC" className="brand-logo" />
                    <span className="brand-name">Indian Engineering Company</span>
                    <span className="brand-divider">|</span>
                    <span className="brand-cert">EASA Certified</span>
                </Link>

                {/* Navigation */}
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

                {/* Actions - Right aligned */}
                <div className="header-actions">
                    {/* Search */}
                    <div className="search-wrapper" ref={searchRef}>
                        <button 
                            className="icon-btn" 
                            onClick={() => setSearchOpen(!searchOpen)}
                            aria-label="Search"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="m21 21-4.35-4.35"/>
                            </svg>
                        </button>
                        
                        <div className={`search-dropdown ${searchOpen ? 'active' : ''}`}>
                            <input 
                                type="search" 
                                placeholder="Search..." 
                                autoFocus={searchOpen}
                            />
                        </div>
                    </div>

                    {/* Language Switcher */}
                    <div className="lang-wrapper" ref={langRef}>
                        <button 
                            className="lang-btn" 
                            onClick={() => setLangOpen(!langOpen)}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                            </svg>
                            <span>{currentLang.toUpperCase()}</span>
                        </button>

                        <div className={`lang-dropdown ${langOpen ? 'active' : ''}`}>
                            <div className="lang-section">
                                <span className="lang-section-title">Indian Languages</span>
                                {languages.indian.map(lang => (
                                    <button 
                                        key={lang.code}
                                        className={`lang-option ${currentLang === lang.code ? 'active' : ''}`}
                                        onClick={() => { setCurrentLang(lang.code); setLangOpen(false); }}
                                    >
                                        {lang.name}
                                    </button>
                                ))}
                            </div>
                            <div className="lang-section">
                                <span className="lang-section-title">International</span>
                                {languages.international.map(lang => (
                                    <button 
                                        key={lang.code}
                                        className={`lang-option ${currentLang === lang.code ? 'active' : ''}`}
                                        onClick={() => { setCurrentLang(lang.code); setLangOpen(false); }}
                                    >
                                        {lang.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <Link to="/contact" className="header-cta">
                        Connect
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button 
                    className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
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
                    <Link to="/contact" className="mobile-cta">
                        Connect Now
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </Link>
                </nav>
            </div>

            <style>{`
                /* ========== JP MORGAN STYLE HEADER ========== */
                .header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 72px;
                    padding: 0 40px;
                    background: var(--color-white);
                    border-bottom: 1px solid var(--color-border);
                    transition: all 0.3s ease;
                }

                .header.scrolled {
                    height: 64px;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
                }

                /* ========== BRAND (Single Line) ========== */
                .brand {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    flex-shrink: 0;
                }

                .brand-logo {
                    height: 44px;
                    width: auto;
                    object-fit: contain;
                    transition: height 0.3s ease;
                }

                .header.scrolled .brand-logo {
                    height: 38px;
                }

                .brand-name {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: var(--color-text);
                    letter-spacing: -0.01em;
                    white-space: nowrap;
                }

                .brand-divider {
                    color: var(--color-border);
                    font-weight: 300;
                    font-size: 1.25rem;
                }

                .brand-cert {
                    font-family: var(--font-serif);
                    font-size: 0.875rem;
                    font-style: italic;
                    color: var(--color-accent);
                    white-space: nowrap;
                }

                /* ========== NAVIGATION ========== */
                .nav {
                    display: flex;
                    align-items: center;
                    gap: 32px;
                    margin-left: 48px;
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
                    color: var(--color-text-light);
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                    padding: 8px 0;
                    transition: color 0.2s;
                }

                .nav-link:hover,
                .nav-link.active {
                    color: var(--color-accent);
                }

                .chevron {
                    width: 12px;
                    height: 12px;
                    transition: transform 0.2s;
                }

                .nav-item:hover .chevron {
                    transform: rotate(180deg);
                }

                /* Dropdown */
                .dropdown {
                    position: absolute;
                    top: 100%;
                    left: -16px;
                    padding-top: 8px;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(4px);
                    transition: all 0.2s ease;
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
                    padding: 8px;
                    min-width: 180px;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
                }

                .dropdown-link {
                    display: block;
                    padding: 10px 12px;
                    font-size: 0.8125rem;
                    color: var(--color-text-light);
                    border-radius: 3px;
                    transition: all 0.15s;
                }

                .dropdown-link:hover {
                    background: var(--color-light);
                    color: var(--color-text);
                }

                /* ========== HEADER ACTIONS ========== */
                .header-actions {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-left: auto;
                }

                .icon-btn {
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-text-light);
                    border-radius: 4px;
                    transition: all 0.15s;
                }

                .icon-btn:hover {
                    background: var(--color-light);
                    color: var(--color-text);
                }

                /* Search */
                .search-wrapper {
                    position: relative;
                }

                .search-dropdown {
                    position: absolute;
                    top: calc(100% + 8px);
                    right: 0;
                    background: var(--color-white);
                    border: 1px solid var(--color-border);
                    border-radius: 4px;
                    padding: 8px;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(4px);
                    transition: all 0.2s ease;
                }

                .search-dropdown.active {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }

                .search-dropdown input {
                    width: 220px;
                    padding: 8px 12px;
                    font-size: 0.8125rem;
                    border: 1px solid var(--color-border);
                    border-radius: 3px;
                    outline: none;
                }

                .search-dropdown input:focus {
                    border-color: var(--color-accent);
                }

                /* Language Switcher */
                .lang-wrapper {
                    position: relative;
                }

                .lang-btn {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    padding: 6px 10px;
                    font-size: 0.6875rem;
                    font-weight: 600;
                    color: var(--color-text-light);
                    border: 1px solid var(--color-border);
                    border-radius: 4px;
                    transition: all 0.15s;
                }

                .lang-btn:hover {
                    border-color: var(--color-text-light);
                    color: var(--color-text);
                }

                .lang-dropdown {
                    position: absolute;
                    top: calc(100% + 8px);
                    right: 0;
                    background: var(--color-white);
                    border: 1px solid var(--color-border);
                    border-radius: 4px;
                    padding: 8px;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(4px);
                    transition: all 0.2s ease;
                    min-width: 150px;
                }

                .lang-dropdown.active {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }

                .lang-section {
                    padding: 4px 0;
                }

                .lang-section:first-child {
                    border-bottom: 1px solid var(--color-border);
                    margin-bottom: 4px;
                    padding-bottom: 8px;
                }

                .lang-section-title {
                    display: block;
                    font-size: 0.5625rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-muted);
                    padding: 0 8px;
                    margin-bottom: 4px;
                }

                .lang-option {
                    display: block;
                    width: 100%;
                    text-align: left;
                    padding: 6px 8px;
                    font-size: 0.75rem;
                    color: var(--color-text-light);
                    border-radius: 3px;
                    transition: all 0.15s;
                }

                .lang-option:hover {
                    background: var(--color-light);
                    color: var(--color-text);
                }

                .lang-option.active {
                    color: var(--color-accent);
                    font-weight: 600;
                }

                /* Header CTA */
                .header-cta {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    padding: 8px 16px;
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                    color: var(--color-white);
                    background: var(--color-accent);
                    border-radius: 4px;
                    transition: all 0.2s ease;
                }

                .header-cta:hover {
                    background: var(--color-accent-hover);
                }

                /* Menu Toggle */
                .menu-toggle {
                    display: none;
                    flex-direction: column;
                    gap: 4px;
                    padding: 8px;
                }

                .menu-toggle span {
                    width: 18px;
                    height: 2px;
                    background: var(--color-text);
                    transition: all 0.3s ease;
                }

                .menu-toggle.active span:nth-child(1) {
                    transform: rotate(45deg) translate(4px, 4px);
                }

                .menu-toggle.active span:nth-child(2) {
                    opacity: 0;
                }

                .menu-toggle.active span:nth-child(3) {
                    transform: rotate(-45deg) translate(4px, -4px);
                }

                /* ========== MOBILE MENU ========== */
                .mobile-menu {
                    position: fixed;
                    top: 72px;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: var(--color-white);
                    z-index: 999;
                    padding: 24px;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s ease;
                    overflow-y: auto;
                }

                .mobile-menu.open {
                    opacity: 1;
                    visibility: visible;
                }

                .mobile-nav {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .mobile-link {
                    font-size: 1rem;
                    font-weight: 500;
                    color: var(--color-text);
                    padding: 12px 0;
                    border-bottom: 1px solid var(--color-border);
                }

                .mobile-sub {
                    padding: 8px 0 16px 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .mobile-sub-link {
                    font-size: 0.875rem;
                    color: var(--color-text-light);
                    padding: 8px 0;
                }

                .mobile-cta {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    margin-top: 24px;
                    padding: 14px;
                    font-size: 0.8125rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                    color: var(--color-white);
                    background: var(--color-accent);
                    border-radius: 4px;
                }

                /* ========== RESPONSIVE ========== */
                @media (max-width: 1100px) {
                    .header {
                        padding: 0 24px;
                    }

                    .nav {
                        gap: 24px;
                        margin-left: 32px;
                    }

                    .brand-name {
                        font-size: 1rem;
                    }

                    .brand-cert {
                        font-size: 0.8125rem;
                    }
                }

                @media (max-width: 900px) {
                    .header {
                        padding: 0 20px;
                    }

                    .brand-name,
                    .brand-divider,
                    .brand-cert {
                        display: none;
                    }

                    .nav,
                    .header-actions {
                        display: none;
                    }

                    .menu-toggle {
                        display: flex;
                        margin-left: auto;
                    }
                }

                @media (max-width: 480px) {
                    .header {
                        height: 64px;
                        padding: 0 16px;
                    }

                    .brand-logo {
                        height: 36px;
                    }

                    .mobile-menu {
                        top: 64px;
                    }
                }
            `}</style>
        </>
    );
};

export default Header;
