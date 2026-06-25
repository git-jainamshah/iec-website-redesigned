import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/iec-logo.png';

const Footer = () => {
    return (
        <footer className="footer">

            {/* ── Main grid ── */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">

                        {/* Brand */}
                        <div className="footer-brand">
                            <Link to="/" className="footer-logo-wrap">
                                <div className="footer-logo-mark">
                                    <img src={logo} alt="IEC" className="footer-logo-img" />
                                </div>
                                <div className="footer-wordmark">
                                    <span className="footer-wordmark-name">Indian Engineering Company</span>
                                    <span className="footer-wordmark-sub">Est. 1984 · Ranoli, Gujarat</span>
                                </div>
                            </Link>

                            <p className="footer-desc">
                                India's premier workshop for heavy industrial motor and generator repair. 300,000 sq ft of in-house capability serving cement, power, and process industries since 1998.
                            </p>

                            <div className="footer-badges">
                                <span className="footer-badge">ISO 9001</span>
                                <span className="footer-badge footer-badge-accent">EASA Member</span>
                                <span className="footer-badge">Est. 1984</span>
                            </div>

                            <div className="footer-social">
                                <a href="mailto:info@iecindia.co.in" className="footer-social-btn" aria-label="Email IEC">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                </a>
                                <a href="tel:+919824029088" className="footer-social-btn" aria-label="Call IEC">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.9 12.9a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.81 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                </a>
                                <a href="https://www.linkedin.com/company/indian-engineering-company" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="IEC on LinkedIn">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                </a>
                            </div>
                        </div>

                        {/* Company */}
                        <div className="footer-col">
                            <h4><span>Company</span></h4>
                            <nav>
                                <Link to="/about"><span>About Us</span><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
                                <Link to="/services"><span>Services</span><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
                                <Link to="/infrastructure"><span>Infrastructure</span><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
                                <Link to="/leadership"><span>Leadership</span><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
                                <Link to="/careers"><span>Careers</span><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
                                <Link to="/contact"><span>Contact</span><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
                            </nav>
                        </div>

                        {/* Services */}
                        <div className="footer-col">
                            <h4><span>Services</span></h4>
                            <nav>
                                <Link to="/services"><span>Motors and Generators</span><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
                                <Link to="/services"><span>Cryogenic Pumps</span><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
                                <Link to="/services"><span>Spare Parts</span><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
                                <Link to="/services"><span>Mechanical Repair</span><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
                                <Link to="/services"><span>Preventive Maintenance</span><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
                                <Link to="/blogs"><span>Engineering Notes</span><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
                            </nav>
                        </div>

                        {/* Get in touch */}
                        <div className="footer-col">
                            <h4><span>Get in Touch</span></h4>
                            <address>
                                <div className="footer-contact-item">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                    <p>613 GIDC Estate, Ranoli<br />Dist. Vadodara, 391350<br />Gujarat, India</p>
                                </div>
                                <div className="footer-contact-item">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.9 12.9a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.81 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                    <div>
                                        <a href="tel:+919712914839">+91 97129 14839</a>
                                        <a href="tel:+912667262326">+91 2667 262326</a>
                                    </div>
                                </div>
                                <div className="footer-contact-item footer-contact-item--emerg">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.9 12.9a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.81 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                    <div className="footer-emerg-wrap">
                                        <span className="footer-emerg-label">Emergency &amp; Breakdown</span>
                                        <div className="footer-emerg-row">
                                            <a href="tel:+919824029088" className="footer-emerg-num">+91 98240 29088</a>
                                            <span className="footer-emerg-badge">24×7</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-contact-item">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                    <a href="mailto:info@iecindia.co.in">info@iecindia.co.in</a>
                                </div>
                            </address>
                        </div>

                    </div>
                </div>
            </div>

            {/* ── Bottom bar ── */}
            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <p>© {new Date().getFullYear()} Indian Engineering Company. All rights reserved.</p>
                    <nav>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </nav>
                </div>
            </div>

            <style>{`
                .footer {
                    background: var(--color-primary);
                }

                /* ── Main ── */
                .footer-main { padding: var(--space-5xl) 0 var(--space-4xl); }

                .footer-grid {
                    display: grid;
                    grid-template-columns: 1.6fr 1fr 1fr 1.1fr;
                    gap: var(--space-4xl);
                }

                /* ── Brand ── */
                .footer-brand { display: flex; flex-direction: column; gap: 0; }

                .footer-logo-wrap {
                    display: flex; align-items: center; gap: 14px;
                    text-decoration: none; margin-bottom: var(--space-xl);
                    width: fit-content;
                }
                .footer-logo-mark {
                    width: 52px; height: 52px; flex-shrink: 0;
                    overflow: hidden; border-radius: 4px;
                    border: 1px solid rgba(255,255,255,0.1);
                    background: #fff;
                    display: flex; align-items: center; justify-content: center;
                    transition: border-color 0.25s;
                }
                .footer-logo-wrap:hover .footer-logo-mark { border-color: rgba(200,16,46,0.5); }
                .footer-logo-img { width: 42px; height: 42px; object-fit: contain; display: block; }
                .footer-wordmark { display: flex; flex-direction: column; gap: 3px; }
                .footer-wordmark-name {
                    font-family: var(--font-display); font-weight: 400;
                    font-size: 0.9375rem; letter-spacing: 0.01em;
                    color: var(--color-white); line-height: 1.2;
                    transition: color 0.25s;
                }
                .footer-logo-wrap:hover .footer-wordmark-name { color: rgba(255,255,255,0.75); }
                .footer-wordmark-sub {
                    font-family: var(--font-mono); font-size: 0.5rem;
                    text-transform: uppercase; letter-spacing: 0.14em;
                    color: rgba(255,255,255,0.28);
                }

                .footer-desc {
                    font-size: 0.875rem; color: rgba(255,255,255,0.38);
                    line-height: 1.8; margin-bottom: var(--space-xl); max-width: 300px;
                }

                .footer-badges {
                    display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: var(--space-xl);
                }
                .footer-badge {
                    font-family: var(--font-mono); font-size: 0.5rem; font-weight: 600;
                    text-transform: uppercase; letter-spacing: 0.12em;
                    color: rgba(255,255,255,0.32); padding: 4px 9px;
                    border: 1px solid rgba(255,255,255,0.1);
                }
                .footer-badge-accent {
                    color: rgba(200,16,46,0.75); border-color: rgba(200,16,46,0.2);
                }

                .footer-social { display: flex; gap: 8px; }
                .footer-social-btn {
                    width: 34px; height: 34px; display: flex; align-items: center; justify-content: center;
                    color: rgba(255,255,255,0.35); border: 1px solid rgba(255,255,255,0.08);
                    text-decoration: none; transition: color 0.2s, border-color 0.2s, background 0.2s;
                }
                .footer-social-btn:hover {
                    color: var(--color-white); border-color: var(--color-accent);
                    background: rgba(200,16,46,0.12);
                }

                /* ── Nav columns ── */
                .footer-col h4 {
                    font-family: var(--font-mono); font-size: 0.5rem; font-weight: 700;
                    text-transform: uppercase; letter-spacing: 0.22em;
                    color: rgba(255,255,255,0.55);
                    margin-bottom: var(--space-xl); padding-bottom: var(--space-sm);
                    border-bottom: 1px solid rgba(255,255,255,0.07);
                    display: flex; align-items: center; justify-content: space-between;
                }

                .footer-col nav { display: flex; flex-direction: column; gap: 0; }

                .footer-col nav a {
                    display: flex; align-items: center; justify-content: space-between;
                    font-size: 0.875rem; color: rgba(255,255,255,0.42);
                    padding: 8px 0; text-decoration: none;
                    border-bottom: 1px solid rgba(255,255,255,0.04);
                    position: relative; overflow: hidden;
                    transition: color 0.25s, padding-left 0.25s;
                }
                .footer-col nav a::before {
                    content: ''; position: absolute; left: 0; bottom: 0;
                    width: 0; height: 1px;
                    background: var(--color-accent);
                    transition: width 0.3s ease;
                }
                .footer-col nav a:hover { color: var(--color-white); padding-left: 8px; }
                .footer-col nav a:hover::before { width: 100%; }
                .footer-col nav a svg { opacity: 0; transform: translateX(-4px); transition: opacity 0.2s, transform 0.2s; flex-shrink: 0; }
                .footer-col nav a:hover svg { opacity: 1; transform: translateX(0); }
                .footer-col nav a:last-child { border-bottom: none; }

                /* ── Contact column ── */
                .footer-col address {
                    font-style: normal; display: flex; flex-direction: column; gap: var(--space-lg);
                }
                .footer-contact-item {
                    display: flex; gap: 10px; align-items: flex-start;
                }
                .footer-contact-item svg { color: rgba(255,255,255,0.25); margin-top: 3px; flex-shrink: 0; }
                .footer-contact-item p {
                    font-size: 0.8125rem; color: rgba(255,255,255,0.42); line-height: 1.75; margin: 0;
                }
                .footer-contact-item div { display: flex; flex-direction: column; gap: 2px; }
                .footer-contact-item a {
                    font-size: 0.8125rem; color: rgba(255,255,255,0.42);
                    text-decoration: none; transition: color 0.2s; font-family: var(--font-mono);
                    letter-spacing: 0.02em;
                }
                .footer-contact-item a:hover { color: var(--color-accent); }
                .footer-contact-item--emerg svg { color: var(--color-accent); opacity: 0.7; }
                .footer-emerg-wrap { display: flex; flex-direction: column; gap: 3px; }
                .footer-emerg-label { font-family: var(--font-mono); font-size: 0.5rem; text-transform: uppercase; letter-spacing: 0.12em; color: rgba(255,255,255,0.25); }
                .footer-emerg-row { display: flex; align-items: center; gap: 8px; }
                .footer-emerg-num { font-family: var(--font-mono); font-size: 0.8125rem; font-weight: 600; color: rgba(255,255,255,0.75); letter-spacing: 0.03em; text-decoration: none; transition: color 0.2s; }
                .footer-emerg-num:hover { color: var(--color-accent); }
                .footer-emerg-badge { font-family: var(--font-mono); font-size: 0.4375rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-accent); border: 1px solid rgba(200,16,46,0.4); padding: 2px 5px; line-height: 1; }

                /* ── Bottom bar ── */
                .footer-bottom {
                    border-top: 1px solid rgba(255,255,255,0.06);
                    padding: var(--space-lg) 0;
                }
                .footer-bottom-inner {
                    display: flex; justify-content: space-between; align-items: center;
                }
                .footer-bottom-inner p {
                    font-family: var(--font-mono); font-size: 0.625rem;
                    color: rgba(255,255,255,0.18); letter-spacing: 0.04em;
                }
                .footer-bottom-inner nav { display: flex; gap: var(--space-xl); }
                .footer-bottom-inner nav a {
                    font-family: var(--font-mono); font-size: 0.625rem;
                    color: rgba(255,255,255,0.18); letter-spacing: 0.04em; text-decoration: none;
                    transition: color 0.2s;
                }
                .footer-bottom-inner nav a:hover { color: rgba(255,255,255,0.5); }

                /* ── Responsive ── */
                @media (max-width: 1100px) {
                    .footer-grid { grid-template-columns: repeat(2, 1fr); }
                    .footer-brand { grid-column: span 2; }
                }
                @media (max-width: 640px) {
                    .footer-grid { grid-template-columns: 1fr; }
                    .footer-brand { grid-column: span 1; }
.footer-bottom-inner { flex-direction: column; gap: var(--space-md); text-align: center; }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
