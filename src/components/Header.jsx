import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
        { code: 'ja', name: '日本語' },
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

const popularSearches = ['Motor Rewinding', 'Cryogenic Pumps', 'Infrastructure', 'Careers', 'Generator Repair'];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentLang, setCurrentLang] = useState(() => translateService.getCurrentLanguage());
    const location = useLocation();
    const navigate = useNavigate();
    const langRef = useRef(null);
    const searchInputRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close all panels on route change
    useEffect(() => {
        translateService.onRouteChange();

        const timeoutId = window.setTimeout(() => {
            setMenuOpen(false);
            setLangOpen(false);
            setSearchOpen(false);
        }, 0);

        return () => window.clearTimeout(timeoutId);
    }, [location.pathname, location.search, location.hash]);

    // Lock body scroll + hide chatbot while a full-screen panel is open
    useEffect(() => {
        const locked = menuOpen || searchOpen;
        document.body.style.overflow = locked ? 'hidden' : '';
        document.body.classList.toggle('nav-locked', locked);
        return () => {
            document.body.style.overflow = '';
            document.body.classList.remove('nav-locked');
        };
    }, [menuOpen, searchOpen]);

    // Focus the search field when the panel opens
    useEffect(() => {
        if (searchOpen) {
            const id = window.setTimeout(() => searchInputRef.current?.focus(), 250);
            return () => window.clearTimeout(id);
        }
    }, [searchOpen]);

    // Escape closes any open panel
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') {
                setSearchOpen(false);
                setMenuOpen(false);
                setLangOpen(false);
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    // Click-outside closes the language dropdown
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (langRef.current && !langRef.current.contains(e.target)) {
                setLangOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const runSearch = (term) => {
        const q = term.trim();
        if (!q) return;
        navigate(`/search?q=${encodeURIComponent(q)}`);
        setSearchQuery('');
        setSearchOpen(false);
        setMenuOpen(false);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        runSearch(searchQuery);
    };

    const setLanguage = (code) => {
        setCurrentLang(code);
        translateService.setLanguage(code);
        setLangOpen(false);
    };

    return (
        <>
            <header className={`header ${scrolled ? 'scrolled' : ''} ${(menuOpen || searchOpen) ? 'panel-open' : ''}`}>
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

                    <button
                        className={`search-btn ${searchOpen ? 'active' : ''}`}
                        onClick={() => { setSearchOpen(!searchOpen); setMenuOpen(false); }}
                        aria-label="Toggle search"
                        aria-expanded={searchOpen}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <path d="M21 21l-4.35-4.35" />
                        </svg>
                    </button>

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
                                        onClick={() => setLanguage(lang.code)}
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
                                        onClick={() => setLanguage(lang.code)}
                                    >
                                        {lang.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button
                        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                        onClick={() => { setMenuOpen(!menuOpen); setSearchOpen(false); }}
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

            {/* ========== FULL-WIDTH SEARCH PANEL ========== */}
            <div className={`search-panel ${searchOpen ? 'open' : ''}`} aria-hidden={!searchOpen}>
                <div className="search-panel-bar">
                    <div className="container">
                        <form className="search-panel-form" onSubmit={handleSearchSubmit}>
                            <svg className="search-panel-icon" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="11" cy="11" r="8" />
                                <path d="M21 21l-4.35-4.35" />
                            </svg>
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search services, infrastructure, careers…"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button type="button" className="search-panel-close" onClick={() => setSearchOpen(false)}>
                                <span>Close</span>
                                <kbd>Esc</kbd>
                            </button>
                        </form>

                        <div className="search-panel-suggest">
                            <span className="search-panel-suggest-label">Popular</span>
                            <div className="search-panel-chips">
                                {popularSearches.map(term => (
                                    <button key={term} className="search-chip" onClick={() => runSearch(term)}>
                                        {term}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <button className="search-panel-backdrop" aria-label="Close search" onClick={() => setSearchOpen(false)} />
            </div>

            {/* ========== FULL-SCREEN OVERLAY MENU ========== */}
            <div className={`menu-overlay ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
                <div className="menu-overlay-grid container">
                    <nav className="menu-overlay-nav">
                        {navItems.map((item, i) => (
                            <Link
                                key={item.label}
                                to={item.path}
                                className="menu-overlay-link"
                                style={{ transitionDelay: menuOpen ? `${i * 0.04 + 0.08}s` : '0s' }}
                            >
                                <span className="menu-overlay-index">{item.index}</span>
                                <span className="menu-overlay-label">{item.label}</span>
                                <svg className="menu-overlay-arrow" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        ))}
                    </nav>

                    <div className="menu-overlay-aside">
                        <span className="menu-overlay-aside-label">Search</span>
                        <form className="menu-overlay-search" onSubmit={handleSearchSubmit}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" />
                                <path d="M21 21l-4.35-4.35" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search the site…"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button type="submit" aria-label="Submit search">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </form>

                        <span className="menu-overlay-aside-label">Language</span>
                        <div className="menu-overlay-langs notranslate" translate="no">
                            {[...languages.indian, ...languages.international].map(lang => (
                                <button
                                    key={lang.code}
                                    className={`menu-overlay-lang-option ${currentLang === lang.code ? 'active' : ''}`}
                                    onClick={() => setLanguage(lang.code)}
                                >
                                    {lang.name}
                                </button>
                            ))}
                        </div>

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
                    z-index: 1100;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 88px;
                    padding: 0 40px;
                    background: transparent;
                    border-bottom: 1px solid transparent;
                    transition: height 0.4s var(--ease-out), background 0.4s var(--ease-out), border-color 0.4s var(--ease-out);
                }

                .header.scrolled {
                    height: 72px;
                    background: rgba(10, 13, 18, 0.92);
                    backdrop-filter: blur(12px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                }

                .header.panel-open {
                    background: transparent;
                    border-bottom-color: transparent;
                    backdrop-filter: none;
                }

                .brand {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    flex-shrink: 0;
                    position: relative;
                    z-index: 2;
                }

                /* Hide brand wordmark while a full-screen panel is open so it can
                   never visually collide with the overlay's nav links underneath. */
                .header.panel-open .brand-text {
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.15s, visibility 0.15s;
                }

                .brand-logo {
                    height: 72px;
                    width: auto;
                    object-fit: contain;
                    transition: height 0.3s ease;
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
                    gap: 18px;
                    position: relative;
                    z-index: 2;
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

                /* Search + lang icon buttons */
                .search-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    color: rgba(255, 255, 255, 0.85);
                    border: 1px solid rgba(255, 255, 255, 0.25);
                    border-radius: 2px;
                    transition: all 0.15s;
                }

                .search-btn:hover,
                .search-btn.active {
                    border-color: var(--color-accent);
                    color: var(--color-accent);
                }

                .lang-wrapper {
                    position: relative;
                }

                .lang-btn {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    padding: 8px 10px;
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

                /* ========== SEARCH PANEL ========== */
                .search-panel {
                    position: fixed;
                    inset: 0;
                    z-index: 1090;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.3s var(--ease-out), visibility 0.3s;
                }

                .search-panel.open {
                    opacity: 1;
                    visibility: visible;
                }

                .search-panel-backdrop {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(5, 7, 10, 0.55);
                    backdrop-filter: blur(2px);
                    cursor: default;
                }

                .search-panel-bar {
                    position: relative;
                    z-index: 1;
                    background: rgba(10, 13, 18, 0.97);
                    backdrop-filter: blur(16px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    padding-top: calc(var(--header-height) + var(--space-xl));
                    padding-bottom: var(--space-xl);
                    transform: translateY(-24px);
                    transition: transform 0.35s var(--ease-out);
                }

                .search-panel.open .search-panel-bar {
                    transform: translateY(0);
                }

                .search-panel-form {
                    display: flex;
                    align-items: center;
                    gap: var(--space-md);
                    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
                    padding-bottom: var(--space-md);
                }

                .search-panel-icon {
                    color: rgba(255, 255, 255, 0.5);
                    flex-shrink: 0;
                }

                .search-panel-form input {
                    flex: 1;
                    min-width: 0;
                    background: transparent;
                    border: none;
                    outline: none;
                    color: var(--color-white);
                    font-family: var(--font-serif);
                    font-size: clamp(1.25rem, 3vw, 2.25rem);
                    font-weight: 400;
                }

                .search-panel-form input::placeholder {
                    color: rgba(255, 255, 255, 0.35);
                }

                .search-panel-close {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    flex-shrink: 0;
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    transition: color 0.2s;
                }

                .search-panel-close:hover {
                    color: var(--color-white);
                }

                .search-panel-close kbd {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    padding: 3px 7px;
                    border: 1px solid rgba(255, 255, 255, 0.25);
                    border-radius: 3px;
                }

                .search-panel-suggest {
                    display: flex;
                    align-items: center;
                    gap: var(--space-md);
                    margin-top: var(--space-lg);
                    flex-wrap: wrap;
                }

                .search-panel-suggest-label {
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: rgba(255, 255, 255, 0.4);
                }

                .search-panel-chips {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }

                .search-chip {
                    font-size: 0.8125rem;
                    color: rgba(255, 255, 255, 0.8);
                    border: 1px solid rgba(255, 255, 255, 0.18);
                    border-radius: 100px;
                    padding: 7px 16px;
                    transition: all 0.15s;
                }

                .search-chip:hover {
                    border-color: var(--color-accent);
                    color: var(--color-white);
                    background: rgba(200, 16, 46, 0.15);
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
                    overflow-y: auto;
                    -webkit-overflow-scrolling: touch;
                }

                .menu-overlay.open {
                    opacity: 1;
                    visibility: visible;
                }

                .menu-overlay-grid {
                    display: grid;
                    grid-template-columns: 1.4fr 1fr;
                    gap: var(--space-4xl);
                    min-height: 100vh;
                    align-content: center;
                    padding-top: calc(var(--header-height) + var(--space-2xl));
                    padding-bottom: var(--space-2xl);
                    box-sizing: border-box;
                }

                .menu-overlay-nav {
                    display: flex;
                    flex-direction: column;
                }

                .menu-overlay-link {
                    display: flex;
                    align-items: center;
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
                    flex-shrink: 0;
                }

                .menu-overlay-label {
                    font-family: var(--font-serif);
                    font-size: clamp(1.75rem, 4vw, 3.25rem);
                    font-weight: 400;
                    color: var(--color-white);
                    letter-spacing: -0.01em;
                    transition: color 0.2s;
                    margin-right: auto;
                }

                .menu-overlay-arrow {
                    color: var(--color-accent);
                    opacity: 0;
                    transform: translateX(-8px);
                    transition: all 0.25s var(--ease-out);
                }

                .menu-overlay-link:hover .menu-overlay-label {
                    color: var(--color-accent);
                }

                .menu-overlay-link:hover .menu-overlay-arrow {
                    opacity: 1;
                    transform: translateX(0);
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

                .menu-overlay-search {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 2px;
                    padding: 4px 4px 4px 14px;
                    color: rgba(255, 255, 255, 0.5);
                    margin-top: var(--space-xs);
                }

                .menu-overlay-search:focus-within {
                    border-color: rgba(255, 255, 255, 0.45);
                }

                .menu-overlay-search input {
                    flex: 1;
                    min-width: 0;
                    background: transparent;
                    border: none;
                    outline: none;
                    color: var(--color-white);
                    font-size: 0.9375rem;
                    padding: 10px 0;
                }

                .menu-overlay-search input::placeholder {
                    color: rgba(255, 255, 255, 0.4);
                }

                .menu-overlay-search button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    flex-shrink: 0;
                    color: rgba(255, 255, 255, 0.7);
                    transition: color 0.2s;
                }

                .menu-overlay-search button:hover {
                    color: var(--color-accent);
                }

                .menu-overlay-langs {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                    margin-top: var(--space-xs);
                }

                .menu-overlay-lang-option {
                    font-size: 0.75rem;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 2px;
                    padding: 5px 10px;
                    transition: all 0.15s;
                }

                .menu-overlay-lang-option:hover {
                    border-color: rgba(255, 255, 255, 0.5);
                    color: var(--color-white);
                }

                .menu-overlay-lang-option.active {
                    background: var(--color-accent);
                    border-color: var(--color-accent);
                    color: var(--color-white);
                }

                .menu-overlay-phone {
                    font-family: var(--font-mono);
                    font-size: 1.125rem;
                    color: var(--color-white);
                    margin-top: var(--space-xs);
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
                    margin-top: var(--space-xs);
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
                    transition: background 0.2s, gap 0.2s;
                }

                .menu-overlay-cta:hover {
                    background: var(--color-accent-hover);
                    gap: var(--space-md);
                }

                /* ========== TABLET / MOBILE ========== */
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
                    .search-btn,
                    .lang-wrapper {
                        display: none;
                    }

                    .menu-overlay-grid {
                        grid-template-columns: 1fr;
                        gap: var(--space-xl);
                        align-content: start;
                        padding-top: calc(76px + var(--space-2xl));
                    }

                    .menu-overlay-link {
                        padding: var(--space-sm) 0;
                    }

                    .menu-overlay-arrow {
                        display: none;
                    }

                    .menu-overlay-aside {
                        padding-left: 0;
                        border-left: none;
                        padding-top: var(--space-lg);
                        border-top: 1px solid rgba(255, 255, 255, 0.08);
                    }

                    .menu-overlay-label {
                        font-size: clamp(1.625rem, 8vw, 2.25rem);
                    }

                    .search-panel-suggest {
                        margin-top: var(--space-md);
                    }
                }

                @media (max-width: 480px) {
                    .header {
                        height: 64px;
                        padding: 0 16px;
                    }

                    .brand-logo {
                        height: 46px;
                    }

                    .header.scrolled .brand-logo {
                        height: 40px;
                    }

                    .brand-cert {
                        display: none;
                    }

                    .menu-toggle-label {
                        display: none;
                    }

                    .search-panel-close span {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
};

export default Header;
