import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/iec-logo.png';

const Footer = () => {
    return (
        <footer className="footer">

            {/* Ghost "IEC" watermark */}
            <div className="footer-ghost" aria-hidden="true">IEC</div>

            {/* Red gradient rule at top */}
            <div className="footer-top-rule" aria-hidden="true" />

            {/* Main content */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">

                        {/* Brand */}
                        <div className="footer-brand">
                            <Link to="/" className="footer-logo-block">
                                <img src={logo} alt="Indian Engineering Company" className="footer-logo-img" />
                                <div className="footer-logo-meta">
                                    <span className="footer-logo-name">Indian Engineering Company</span>
                                    <span className="footer-logo-cert">EASA Accredited · ISO 9001</span>
                                </div>
                            </Link>
                            <p className="footer-tagline">Our Repairs Run the Industries</p>
                            <p className="footer-desc">
                                India's premier heavy-industrial repair and rewinding company
                                for HV rotating machines — since 1998.
                            </p>
                            <div className="footer-pills">
                                <span className="footer-pill">Est. 1998</span>
                                <span className="footer-pill">Vadodara, Gujarat</span>
                                <span className="footer-pill footer-pill--accent">EASA Member</span>
                            </div>
                        </div>

                        {/* Company links */}
                        <div className="footer-col">
                            <h4 className="footer-col-heading">Company</h4>
                            <nav className="footer-nav">
                                <Link to="/about">About Us</Link>
                                <Link to="/services">Services</Link>
                                <Link to="/infrastructure">Infrastructure</Link>
                                <Link to="/careers">Careers</Link>
                                <Link to="/contact">Contact</Link>
                            </nav>
                        </div>

                        {/* Services */}
                        <div className="footer-col">
                            <h4 className="footer-col-heading">Services</h4>
                            <nav className="footer-nav">
                                <Link to="/services#motors">Motors &amp; Generators</Link>
                                <Link to="/services#pumps">Cryogenic Pumps</Link>
                                <Link to="/services#spares">Spare Parts</Link>
                                <Link to="/services#mechanical">Mechanical Repair</Link>
                                <Link to="/services#maintenance">Preventive Maintenance</Link>
                            </nav>
                        </div>

                        {/* Contact */}
                        <div className="footer-col footer-contact-col">
                            <h4 className="footer-col-heading">Get in Touch</h4>
                            <address className="footer-address">
                                <div className="footer-contact-item">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                                    </svg>
                                    <span>613 GIDC Estate, Ranoli<br />Dist. Vadodara — 391350<br />Gujarat, India</span>
                                </div>
                                <div className="footer-contact-item">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                    <span>
                                        <a href="tel:+919824214839">+91 98242 14839</a><br />
                                        <a href="tel:+912667262326">+91 2667 262326</a>
                                    </span>
                                </div>
                                <div className="footer-contact-item">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                                    </svg>
                                    <a href="mailto:anil@iecindia.co.in">anil@iecindia.co.in</a>
                                </div>
                            </address>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <p>© {new Date().getFullYear()} Indian Engineering Company. All rights reserved.</p>
                    <nav className="footer-bottom-nav">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </nav>
                </div>
            </div>

            <style>{`

                /* ════════════════════════════════
                   FOOTER
                ════════════════════════════════ */
                .footer {
                    position: relative;
                    background: var(--color-dark);
                    overflow: hidden;
                }

                /* Ghost "IEC" watermark — bottom-right */
                .footer-ghost {
                    position: absolute;
                    bottom: -0.12em;
                    right: -0.04em;
                    font-family: var(--font-serif);
                    font-size: clamp(8rem, 22vw, 20rem);
                    font-weight: 800;
                    color: transparent;
                    -webkit-text-stroke: 1px rgba(255,255,255,0.032);
                    line-height: 1;
                    pointer-events: none;
                    user-select: none;
                    z-index: 0;
                }

                /* Red gradient rule at very top */
                .footer-top-rule {
                    position: relative;
                    z-index: 1;
                    height: 2px;
                    background: linear-gradient(
                        90deg,
                        transparent 0%,
                        var(--color-accent) 25%,
                        rgba(200,16,46,0.8) 50%,
                        var(--color-accent) 75%,
                        transparent 100%
                    );
                }

                /* ── Main ── */
                .footer-main {
                    position: relative;
                    z-index: 1;
                    padding: var(--space-4xl) 0 var(--space-3xl);
                }

                .footer-grid {
                    display: grid;
                    grid-template-columns: 1.6fr 1fr 1fr 1.3fr;
                    gap: var(--space-3xl);
                }

                /* ── Brand column ── */
                .footer-brand {
                    display: flex;
                    flex-direction: column;
                }

                /* Logo block — white panel with red top accent */
                .footer-logo-block {
                    display: inline-flex;
                    align-items: center;
                    gap: 14px;
                    padding: var(--space-md) var(--space-lg) var(--space-md) var(--space-md);
                    background: rgba(255,255,255,0.96);
                    border-top: 3px solid var(--color-accent);
                    margin-bottom: var(--space-xl);
                    width: fit-content;
                    transition: background 0.2s, transform 0.2s;
                }

                .footer-logo-block:hover {
                    background: var(--color-white);
                    transform: translateY(-1px);
                }

                .footer-logo-img {
                    height: 52px;
                    width: auto;
                    object-fit: contain;
                    flex-shrink: 0;
                }

                .footer-logo-meta {
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                }

                .footer-logo-name {
                    font-family: var(--font-serif);
                    font-size: 0.9375rem;
                    font-weight: 700;
                    color: var(--color-text);
                    letter-spacing: -0.01em;
                    line-height: 1.2;
                    white-space: nowrap;
                }

                .footer-logo-cert {
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-accent);
                    white-space: nowrap;
                }

                .footer-tagline {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: var(--color-accent);
                    margin-bottom: var(--space-md);
                }

                .footer-desc {
                    font-size: 0.875rem;
                    color: rgba(255,255,255,0.44);
                    line-height: 1.75;
                    margin-bottom: var(--space-xl);
                    max-width: 300px;
                }

                .footer-pills {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }

                .footer-pill {
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: rgba(255,255,255,0.36);
                    padding: 5px 10px;
                    border: 1px solid rgba(255,255,255,0.09);
                    transition: border-color 0.2s, color 0.2s;
                }

                .footer-pill:hover {
                    border-color: rgba(255,255,255,0.2);
                    color: rgba(255,255,255,0.6);
                }

                .footer-pill--accent {
                    color: var(--color-accent);
                    border-color: rgba(200,16,46,0.28);
                }

                /* ── Link columns ── */
                .footer-col-heading {
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.18em;
                    color: rgba(255,255,255,0.88);
                    margin-bottom: var(--space-xl);
                    padding-bottom: var(--space-sm);
                    border-bottom: 1px solid rgba(255,255,255,0.07);
                }

                .footer-nav {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }

                .footer-nav a {
                    font-size: 0.875rem;
                    color: rgba(255,255,255,0.46);
                    padding: 6px 0;
                    display: flex;
                    align-items: center;
                    gap: 0;
                    transition: all 0.25s var(--ease-out);
                    position: relative;
                    overflow: hidden;
                }

                .footer-nav a::before {
                    content: '';
                    display: inline-block;
                    width: 0;
                    height: 1px;
                    background: var(--color-accent);
                    flex-shrink: 0;
                    transition: width 0.3s var(--ease-out), margin-right 0.3s var(--ease-out);
                    margin-right: 0;
                }

                .footer-nav a:hover {
                    color: rgba(255,255,255,0.88);
                }

                .footer-nav a:hover::before {
                    width: 16px;
                    margin-right: 8px;
                }

                /* ── Contact column ── */
                .footer-address {
                    font-style: normal;
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-lg);
                }

                .footer-contact-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                }

                .footer-contact-item svg {
                    color: var(--color-accent);
                    flex-shrink: 0;
                    margin-top: 3px;
                }

                .footer-contact-item span,
                .footer-contact-item a {
                    font-size: 0.875rem;
                    color: rgba(255,255,255,0.46);
                    line-height: 1.75;
                    transition: color 0.2s;
                }

                .footer-contact-item a:hover {
                    color: rgba(255,255,255,0.85);
                }

                /* ── Bottom bar ── */
                .footer-bottom {
                    position: relative;
                    z-index: 1;
                    border-top: 1px solid rgba(255,255,255,0.06);
                    padding: var(--space-lg) 0;
                }

                .footer-bottom-inner {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .footer-bottom-inner p {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    color: rgba(255,255,255,0.22);
                    letter-spacing: 0.04em;
                }

                .footer-bottom-nav {
                    display: flex;
                    gap: var(--space-xl);
                }

                .footer-bottom-nav a {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    color: rgba(255,255,255,0.22);
                    letter-spacing: 0.04em;
                    transition: color 0.2s;
                }

                .footer-bottom-nav a:hover {
                    color: rgba(255,255,255,0.55);
                }

                /* ── Responsive ── */
                @media (max-width: 1100px) {
                    .footer-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .footer-brand {
                        grid-column: span 2;
                    }
                }

                @media (max-width: 640px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                    }
                    .footer-brand {
                        grid-column: span 1;
                    }
                    .footer-bottom-inner {
                        flex-direction: column;
                        gap: var(--space-md);
                        text-align: center;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
