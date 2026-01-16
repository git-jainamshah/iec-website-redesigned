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
                {/* Brand Block - Full impact design */}
                <Link to="/" className="brand-block">
                    <div className="brand-block-inner">
                        <div className="brand-logo">
                            <img src={logo} alt="IEC" />
                        </div>
                        <div className="brand-text">
                            <span className="brand-name">Indian Engineering</span>
                            <span className="brand-company">Company</span>
                        </div>
                    </div>
                    <div className="brand-accent"></div>
                </Link>

                {/* Main Header Content */}
                <div className="header-main">
                    <div className="header-inner">
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

                        {/* Actions */}
                        <div className="header-actions">
                            {/* Search */}
                            <div className="search-wrapper" ref={searchRef}>
                                <button 
                                    className="icon-btn" 
                                    onClick={() => setSearchOpen(!searchOpen)}
                                    aria-label="Search"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                    </div>
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
                    <Link to="/contact" className="mobile-cta">
                        Connect Now
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </Link>
                </nav>
            </div>

            <style>{`
                .header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    display: flex;
                    align-items: stretch;
                    height: var(--header-height);
                    transition: all 0.4s var(--ease-out);
                }

                /* ========== BRAND BLOCK - The Hero Element ========== */
                .brand-block {
                    position: relative;
                    display: flex;
                    align-items: center;
                    background: var(--color-white);
                    padding: 0 var(--space-2xl) 0 var(--space-xl);
                    height: 100%;
                    flex-shrink: 0;
                    box-shadow: 4px 0 20px rgba(0,0,0,0.1);
                    z-index: 10;
                }

                .brand-block::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 4px;
                    background: var(--color-accent);
                }

                .brand-block-inner {
                    display: flex;
                    align-items: center;
                    gap: var(--space-md);
                }

                .brand-logo {
                    width: 52px;
                    height: 52px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    transition: all 0.3s var(--ease-out);
                }

                .header.scrolled .brand-logo {
                    width: 44px;
                    height: 44px;
                }

                .brand-logo img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }

                .brand-text {
                    display: flex;
                    flex-direction: column;
                    line-height: 1.1;
                }

                .brand-name {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: var(--color-text);
                    letter-spacing: -0.01em;
                    white-space: nowrap;
                }

                .brand-company {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: var(--color-accent);
                    letter-spacing: -0.01em;
                }

                .brand-accent {
                    position: absolute;
                    right: -20px;
                    top: 0;
                    bottom: 0;
                    width: 40px;
                    background: var(--color-white);
                    clip-path: polygon(0 0, 50% 0, 100% 50%, 50% 100%, 0 100%);
                    z-index: -1;
                }

                /* ========== MAIN HEADER ========== */
                .header-main {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    background: transparent;
                    transition: background 0.4s var(--ease-out);
                }

                .header.scrolled .header-main {
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(20px);
                }

                .header-inner {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: var(--space-xl);
                    padding: 0 var(--space-xl);
                    max-width: calc(var(--max-width) - 320px);
                }

                /* Navigation */
                .nav {
                    display: flex;
                    align-items: center;
                    gap: var(--space-xl);
                    margin-right: auto;
                    padding-left: var(--space-xl);
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
                    letter-spacing: 0.05em;
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
                    color: var(--color-accent);
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
                    left: -16px;
                    padding-top: 12px;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(8px);
                    transition: all 0.25s var(--ease-out);
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
                    padding: var(--space-xs);
                    min-width: 200px;
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
                    gap: var(--space-md);
                }

                .icon-btn {
                    width: 36px;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: rgba(255, 255, 255, 0.8);
                    border-radius: 50%;
                    transition: all 0.2s;
                }

                .header.scrolled .icon-btn {
                    color: var(--color-text-light);
                }

                .icon-btn:hover {
                    background: rgba(255, 255, 255, 0.1);
                    color: var(--color-white);
                }

                .header.scrolled .icon-btn:hover {
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
                    padding: var(--space-sm);
                    box-shadow: var(--shadow-lg);
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(8px);
                    transition: all 0.25s var(--ease-out);
                }

                .search-dropdown.active {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }

                .search-dropdown input {
                    width: 240px;
                    padding: var(--space-sm) var(--space-md);
                    font-size: 0.875rem;
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
                    gap: 6px;
                    padding: 6px 12px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.8);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 100px;
                    transition: all 0.2s;
                }

                .header.scrolled .lang-btn {
                    color: var(--color-text-light);
                    border-color: var(--color-border);
                }

                .lang-btn:hover {
                    border-color: rgba(255, 255, 255, 0.4);
                }

                .header.scrolled .lang-btn:hover {
                    border-color: var(--color-text-light);
                }

                .lang-dropdown {
                    position: absolute;
                    top: calc(100% + 8px);
                    right: 0;
                    background: var(--color-white);
                    border: 1px solid var(--color-border);
                    border-radius: 4px;
                    padding: var(--space-sm);
                    box-shadow: var(--shadow-lg);
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(8px);
                    transition: all 0.25s var(--ease-out);
                    min-width: 160px;
                }

                .lang-dropdown.active {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }

                .lang-section {
                    padding: var(--space-xs) 0;
                }

                .lang-section:first-child {
                    border-bottom: 1px solid var(--color-border);
                    margin-bottom: var(--space-xs);
                    padding-bottom: var(--space-sm);
                }

                .lang-section-title {
                    display: block;
                    font-size: 0.625rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-muted);
                    padding: 0 var(--space-sm);
                    margin-bottom: var(--space-xs);
                }

                .lang-option {
                    display: block;
                    width: 100%;
                    text-align: left;
                    padding: 6px var(--space-sm);
                    font-size: 0.8125rem;
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
                    padding: 10px 20px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--color-white);
                    background: var(--color-accent);
                    border-radius: 100px;
                    transition: all 0.2s var(--ease-out);
                }

                .header-cta:hover {
                    background: var(--color-accent-hover);
                    transform: translateY(-1px);
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
                    width: 20px;
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
                    overflow-y: auto;
                }

                .mobile-menu.open {
                    opacity: 1;
                    visibility: visible;
                }

                .mobile-nav {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-sm);
                }

                .mobile-link {
                    font-size: 1.125rem;
                    font-weight: 500;
                    color: var(--color-text);
                    padding: var(--space-sm) 0;
                    border-bottom: 1px solid var(--color-border);
                }

                .mobile-sub {
                    padding: var(--space-sm) 0 var(--space-md) var(--space-lg);
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-xs);
                }

                .mobile-sub-link {
                    font-size: 0.9375rem;
                    color: var(--color-text-light);
                    padding: var(--space-xs) 0;
                }

                .mobile-cta {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: var(--space-sm);
                    margin-top: var(--space-xl);
                    padding: var(--space-md);
                    font-size: 0.875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--color-white);
                    background: var(--color-accent);
                    border-radius: 4px;
                }

                /* ========== RESPONSIVE ========== */
                @media (max-width: 1100px) {
                    .brand-text {
                        display: none;
                    }
                    
                    .brand-block {
                        padding: 0 var(--space-xl);
                    }

                    .brand-accent {
                        display: none;
                    }
                }

                @media (max-width: 900px) {
                    .nav,
                    .header-actions {
                        display: none;
                    }

                    .menu-toggle {
                        display: flex;
                    }

                    .header-inner {
                        justify-content: flex-end;
                    }
                }

                @media (max-width: 480px) {
                    .brand-logo {
                        width: 40px;
                        height: 40px;
                    }

                    .brand-block {
                        padding: 0 var(--space-lg);
                    }
                }
            `}</style>
        </>
    );
};

export default Header;
