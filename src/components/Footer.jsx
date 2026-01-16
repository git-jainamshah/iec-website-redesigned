import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/iec-logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            {/* CTA Section */}
            <div className="footer-cta">
                <div className="container">
                    <div className="cta-content">
                        <div className="cta-text">
                            <h3 className="display-title">
                                Ready to discuss your<br />
                                <em>next project?</em>
                            </h3>
                            <p>Get expert consultation and a detailed quote for your repair needs.</p>
                        </div>
                        <div className="cta-actions">
                            <Link to="/contact" className="cta-btn-primary">
                                Connect Now
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </Link>
                            <span className="cta-divider">or</span>
                            <a href="tel:+919824214839" className="cta-phone">
                                +91 98242 14839
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand */}
                        <div className="footer-brand">
                            <Link to="/" className="footer-logo">
                                <div className="footer-logo-circle">
                                    <img src={logo} alt="IEC" />
                                </div>
                                <div className="footer-logo-text">
                                    <span>Indian Engineering</span>
                                    <span className="accent">Company</span>
                                </div>
                            </Link>
                            <p className="footer-tagline">Our Repairs Run the Industries</p>
                            <p className="footer-desc">
                                India's premier engineering company for industrial motor 
                                and generator repair services.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-col">
                            <h4>Company</h4>
                            <nav>
                                <Link to="/about">About Us</Link>
                                <Link to="/services">Services</Link>
                                <Link to="/infrastructure">Infrastructure</Link>
                                <Link to="/contact">Contact</Link>
                            </nav>
                        </div>

                        {/* Services */}
                        <div className="footer-col">
                            <h4>Services</h4>
                            <nav>
                                <Link to="/services#motors">Motors & Generators</Link>
                                <Link to="/services#pumps">Industrial Pumps</Link>
                                <Link to="/services#spares">Spare Parts</Link>
                            </nav>
                        </div>

                        {/* Contact */}
                        <div className="footer-col footer-contact">
                            <h4>Get in Touch</h4>
                            <address>
                                <p>
                                    613 GIDC Estate, Ranoli<br />
                                    Dist. Vadodara - 391350<br />
                                    Gujarat, India
                                </p>
                                <p>
                                    <a href="tel:+919824214839">+91 98242 14839</a><br />
                                    <a href="tel:+912667262326">+91 2667 262326</a>
                                </p>
                                <p>
                                    <a href="mailto:anil@iecindia.co.in">anil@iecindia.co.in</a>
                                </p>
                            </address>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-inner">
                        <p>© {new Date().getFullYear()} Indian Engineering Company. All rights reserved.</p>
                        <nav>
                            <Link to="/privacy">Privacy Policy</Link>
                            <Link to="/terms">Terms of Service</Link>
                        </nav>
                    </div>
                </div>
            </div>

            <style>{`
                .footer {
                    background: var(--color-dark);
                }

                /* CTA Section */
                .footer-cta {
                    background: var(--color-primary);
                    padding: var(--space-4xl) 0;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                }

                .cta-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: var(--space-3xl);
                }

                .cta-text h3 {
                    font-size: clamp(1.5rem, 3vw, 2rem);
                    font-weight: 400;
                    color: var(--color-white);
                    margin-bottom: var(--space-sm);
                }

                .cta-text h3 em {
                    color: var(--color-accent);
                }

                .cta-text p {
                    font-size: 0.9375rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                .cta-actions {
                    display: flex;
                    align-items: center;
                    gap: var(--space-lg);
                    flex-shrink: 0;
                }

                .cta-btn-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--color-primary);
                    background: var(--color-white);
                    padding: 14px 24px;
                    border-radius: 4px;
                    transition: all 0.3s var(--ease-out);
                }

                .cta-btn-primary:hover {
                    background: var(--color-accent);
                    color: var(--color-white);
                    gap: 12px;
                }

                .cta-btn-primary svg {
                    flex-shrink: 0;
                    transition: transform 0.3s;
                }

                .cta-btn-primary:hover svg {
                    transform: translateX(4px);
                }

                .cta-divider {
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.3);
                }

                .cta-phone {
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--color-white);
                    padding: 14px 24px;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    border-radius: 4px;
                    transition: all 0.3s;
                }

                .cta-phone:hover {
                    border-color: var(--color-accent);
                    color: var(--color-accent);
                }

                /* Main Footer */
                .footer-main {
                    padding: var(--space-4xl) 0;
                }

                .footer-grid {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
                    gap: var(--space-3xl);
                }

                .footer-logo {
                    display: inline-flex;
                    align-items: center;
                    gap: var(--space-md);
                    margin-bottom: var(--space-lg);
                    background: var(--color-white);
                    padding: var(--space-md) var(--space-lg) var(--space-md) var(--space-md);
                    border-left: 4px solid var(--color-accent);
                }

                .footer-logo-circle {
                    width: 44px;
                    height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .footer-logo-circle img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }

                .footer-logo-text {
                    display: flex;
                    flex-direction: column;
                    font-size: 1rem;
                    font-weight: 700;
                    color: var(--color-text);
                    line-height: 1.15;
                }

                .footer-logo-text .accent {
                    color: var(--color-accent);
                }

                .footer-tagline {
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-accent);
                    margin-bottom: var(--space-md);
                }

                .footer-desc {
                    font-size: 0.9375rem;
                    color: rgba(255, 255, 255, 0.5);
                    line-height: 1.7;
                }

                .footer-col h4 {
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: var(--color-white);
                    margin-bottom: var(--space-lg);
                }

                .footer-col nav {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-sm);
                }

                .footer-col nav a {
                    font-size: 0.9375rem;
                    color: rgba(255, 255, 255, 0.5);
                    padding: var(--space-xs) 0;
                    transition: color 0.2s;
                }

                .footer-col nav a:hover {
                    color: var(--color-white);
                }

                .footer-contact address {
                    font-style: normal;
                }

                .footer-contact p {
                    font-size: 0.9375rem;
                    color: rgba(255, 255, 255, 0.5);
                    line-height: 1.7;
                    margin-bottom: var(--space-md);
                }

                .footer-contact a {
                    color: rgba(255, 255, 255, 0.5);
                }

                .footer-contact a:hover {
                    color: var(--color-white);
                }

                /* Footer Bottom */
                .footer-bottom {
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                    padding: var(--space-lg) 0;
                }

                .footer-bottom-inner {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .footer-bottom p {
                    font-size: 0.8125rem;
                    color: rgba(255, 255, 255, 0.3);
                }

                .footer-bottom nav {
                    display: flex;
                    gap: var(--space-xl);
                }

                .footer-bottom nav a {
                    font-size: 0.8125rem;
                    color: rgba(255, 255, 255, 0.3);
                }

                .footer-bottom nav a:hover {
                    color: rgba(255, 255, 255, 0.6);
                }

                @media (max-width: 1024px) {
                    .footer-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .footer-brand {
                        grid-column: span 2;
                    }
                }

                @media (max-width: 768px) {
                    .cta-content {
                        flex-direction: column;
                        text-align: center;
                    }

                    .cta-actions {
                        flex-direction: column;
                        width: 100%;
                    }

                    .cta-btn-primary,
                    .cta-phone {
                        width: 100%;
                        justify-content: center;
                    }

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

