import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/iec-logo.png';
import translateService from '../utils/translateService';

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
        { code: 'zh-CN', name: '中文' },
    ]
};

const navItems = [
    { label: 'About', path: '/about', index: '01' },
    { label: 'Leadership', path: '/leadership', index: '02' },
    { label: 'Services', path: '/services', index: '03' },
    { label: 'Infrastructure', path: '/infrastructure', index: '04' },
    { label: 'Blogs', path: '/blogs', index: '05' },
    { label: 'Careers', path: '/careers', index: '06' },
    { label: 'Contact', path: '/contact', index: '07' },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(() => translateService.getCurrentLanguage());
    const location = useLocation();
    const langRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        translateService.onRouteChange();

        const timeoutId = window.setTimeout(() => {
            setMenuOpen(false);
            setLangOpen(false);
        }, 0);

        return () => window.clearTimeout(timeoutId);
    }, [location.pathname, location.search, location.hash]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (langRef.current && !langRef.current.contains(e.target)) {
                setLangOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            <header className={`header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
                <Link to="/" className="brand">
                    <img src={logo} alt="IEC" className="brand-logo" />
                    <div className="brand-text notranslate" translate="no">
                        <span className="brand-name">Indian Engineering Company</span>
                        <span className="brand-cert">EASA Certified</span>
                    </div>
                </Link>

                <div className="header-actions">
                    <a href="tel:+919824214839" className="header-phone">
                        +91 98242 14839
                    </a>

                    <div className="lang-wrapper notranslate" ref={langRef} translate="no">
                        <button className="lang-btn" onClick={() => setLangOpen(!langOpen)}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
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
                                        onClick={() => { setCurrentLang(lang.code); translateService.setLanguage(lang.code); setLangOpen(false); }}
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
                                        onClick={() => { setCurrentLang(lang.code); translateService.setLanguage(lang.code); setLangOpen(false); }}
                                    >
                                        {lang.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button
                        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <span className="menu-toggle-label">{menuOpen ? 'Close' : 'Menu'}</span>
                        <span className="menu-toggle-icon">
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                </div>
            </header>

            {/* Full-screen overlay menu */}
            <div className={`menu-overlay ${menuOpen ? 'open' : ''}`}>
                <div className="menu-overlay-grid container">
                    <nav className="menu-overlay-nav">
                        {navItems.map((item, i) => (
                            <Link
                                key={item.label}
                                to={item.path}
                                className="menu-overlay-link"
                                style={{ transitionDelay: menuOpen ? `${i * 0.05 + 0.1}s` : '0s' }}
                            >
                                <span className="menu-overlay-index">{item.index}</span>
                                <span className="menu-overlay-label">{item.label}</span>
                            </Link>
                        ))}
                    </nav>

                    <div className="menu-overlay-aside">
                        <span className="menu-overlay-aside-label">Get in touch</span>
                        <a href="tel:+919824214839" className="menu-overlay-phone">+91 98242 14839</a>
                        <a href="mailto:anil@iecindia.co.in" className="menu-overlay-email">anil@iecindia.co.in</a>
                        <span className="menu-overlay-aside-label">Works</span>
                        <p className="menu-overlay-address">
                            Plot No. 613, GIDC Estate, Ranoli<br />
                            Dist. Vadodara – 391350, Gujarat
                        </p>
                        <Link to="/contact" className="menu-overlay-cta">
                            Connect Now
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            <style>{`
                .header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 88px;
                    padding: 0 40px;
                    background: transparent;
                    border-bottom: 1px solid transparent;
                    transition: all 0.4s var(--ease-out);
                }

                .header.scrolled {
                    height: 72px;
                    background: rgba(10, 13, 18, 0.92);
                    backdrop-filter: blur(12px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                }

                .header.menu-open {
                    background: transparent;
                    border-bottom-color: transparent;
                }

                .brand {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    flex-shrink: 0;
                    position: relative;
                    z-index: 1100;
                }

                .brand-logo {
                    height: 72px;
                    width: auto;
                    object-fit: contain;
                    transition: all 0.3s ease;
                    filter: brightness(0) invert(1);
                }

                .header.scrolled .brand-logo {
                    height: 56px;
                }

                .brand-text {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                    line-height: 1.15;
                }

                .brand-name {
                    font-size: 1.0625rem;
                    font-weight: 700;
                    color: var(--color-white);
                    letter-spacing: -0.01em;
                    white-space: nowrap;
                }

                .brand-cert {
                    font-size: 0.6875rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: rgba(255, 255, 255, 0.65);
                    white-space: nowrap;
                }

                .header-actions {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    position: relative;
                    z-index: 1100;
                }

                .header-phone {
                    font-family: var(--font-mono);
                    font-size: 0.8125rem;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.85);
                    letter-spacing: 0.02em;
                    transition: color 0.2s;
                }

                .header-phone:hover {
                    color: var(--color-accent);
                }

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
                    color: rgba(255, 255, 255, 0.8);
                    border: 1px solid rgba(255, 255, 255, 0.25);
                    border-radius: 2px;
                    transition: all 0.15s;
                }

                .lang-btn:hover {
                    border-color: rgba(255, 255, 255, 0.6);
                    color: var(--color-white);
                }

                .lang-dropdown {
                    position: absolute;
                    top: calc(100% + 8px);
                    right: 0;
                    background: var(--color-white);
                    border: 1px solid var(--color-border);
                    border-radius: 2px;
                    padding: 8px;
                    box-shadow: var(--shadow-lg);
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
                    border-radius: 2px;
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

                /* Menu toggle */
                .menu-toggle {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 8px 4px;
                }

                .menu-toggle-label {
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-white);
                }

                .menu-toggle-icon {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 6px;
                    width: 28px;
                    height: 18px;
                }

                .menu-toggle-icon span {
                    width: 100%;
                    height: 2px;
                    background: var(--color-white);
                    transition: all 0.3s var(--ease-out);
                }

                .menu-toggle.active .menu-toggle-icon span:nth-child(1) {
                    transform: translateY(4px) rotate(45deg);
                }

                .menu-toggle.active .menu-toggle-icon span:nth-child(2) {
                    transform: translateY(-4px) rotate(-45deg);
                }

                /* ========== FULL-SCREEN OVERLAY MENU ========== */
                .menu-overlay {
                    position: fixed;
                    inset: 0;
                    z-index: 1050;
                    background: var(--color-primary);
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.5s var(--ease-out), visibility 0.5s;
                    display: flex;
                    align-items: center;
                }

                .menu-overlay.open {
                    opacity: 1;
                    visibility: visible;
                }

                .menu-overlay-grid {
                    display: grid;
                    grid-template-columns: 1.4fr 1fr;
                    gap: var(--space-4xl);
                    width: 100%;
                }

                .menu-overlay-nav {
                    display: flex;
                    flex-direction: column;
                }

                .menu-overlay-link {
                    display: flex;
                    align-items: baseline;
                    gap: var(--space-lg);
                    padding: var(--space-md) 0;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                    opacity: 0;
                    transform: translateY(16px);
                    transition: opacity 0.5s var(--ease-out), transform 0.5s var(--ease-out), color 0.2s;
                }

                .menu-overlay.open .menu-overlay-link {
                    opacity: 1;
                    transform: translateY(0);
                }

                .menu-overlay-index {
                    font-family: var(--font-mono);
                    font-size: 0.8125rem;
                    color: var(--color-accent);
                }

                .menu-overlay-label {
                    font-family: var(--font-serif);
                    font-size: clamp(1.75rem, 4vw, 3.25rem);
                    font-weight: 400;
                    color: var(--color-white);
                    letter-spacing: -0.01em;
                    transition: color 0.2s;
                }

                .menu-overlay-link:hover .menu-overlay-label {
                    color: var(--color-accent);
                }

                .menu-overlay-aside {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                    padding-left: var(--space-2xl);
                    border-left: 1px solid rgba(255, 255, 255, 0.08);
                }

                .menu-overlay-aside-label {
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: rgba(255, 255, 255, 0.4);
                    margin-top: var(--space-lg);
                }

                .menu-overlay-aside-label:first-child {
                    margin-top: 0;
                }

                .menu-overlay-phone {
                    font-family: var(--font-mono);
                    font-size: 1.125rem;
                    color: var(--color-white);
                }

                .menu-overlay-phone:hover,
                .menu-overlay-email:hover {
                    color: var(--color-accent);
                }

                .menu-overlay-email {
                    font-size: 0.875rem;
                    color: rgba(255, 255, 255, 0.7);
                }

                .menu-overlay-address {
                    font-size: 0.875rem;
                    color: rgba(255, 255, 255, 0.6);
                    line-height: 1.6;
                }

                .menu-overlay-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: var(--space-sm);
                    margin-top: var(--space-xl);
                    padding: 0.875rem 1.75rem;
                    font-size: 0.8125rem;
                    font-weight: 500;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                    color: var(--color-white);
                    background: var(--color-accent);
                    border-radius: 2px;
                    width: fit-content;
                    transition: background 0.2s;
                }

                .menu-overlay-cta:hover {
                    background: var(--color-accent-hover);
                }

                @media (max-width: 900px) {
                    .header {
                        padding: 0 20px;
                        height: 76px;
                    }

                    .header.scrolled {
                        height: 64px;
                    }

                    .brand-logo {
                        height: 56px;
                    }

                    .header.scrolled .brand-logo {
                        height: 46px;
                    }

                    .brand-name {
                        font-size: 0.875rem;
                    }

                    .brand-cert {
                        font-size: 0.625rem;
                    }

                    .header-phone,
                    .lang-wrapper {
                        display: none;
                    }

                    .menu-overlay-grid {
                        grid-template-columns: 1fr;
                        gap: var(--space-2xl);
                    }

                    .menu-overlay-aside {
                        padding-left: 0;
                        border-left: none;
                        padding-top: var(--space-lg);
                        border-top: 1px solid rgba(255, 255, 255, 0.08);
                    }

                    .menu-overlay-label {
                        font-size: clamp(1.5rem, 7vw, 2.25rem);
                    }
                }

                @media (max-width: 480px) {
                    .header {
                        height: 64px;
                        padding: 0 16px;
                    }

                    .brand-logo {
                        height: 48px;
                    }

                    .header.scrolled .brand-logo {
                        height: 40px;
                    }

                    .menu-toggle-label {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
};

export default Header;
