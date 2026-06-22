import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/iec-logo.png';

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-main">
                <div className="container">

                    {/* Top row: brand + nav columns */}
                    <div className="footer-grid">

                        {/* Brand */}
                        <div className="footer-brand">
                            <Link to="/" className="footer-logo-wrap">
                                <img src={logo} alt="Indian Engineering Company" className="footer-logo-img" />
                            </Link>
                            <p className="footer-tagline">Our Repairs Run the Industries</p>
                            <p className="footer-desc">
                                India's premier workshop for heavy industrial motor
                                and generator repair. Operating since 1998 from
                                Vadodara, Gujarat.
                            </p>
                            <div className="footer-badges">
                                <span className="footer-badge">ISO 9001</span>
                                <span className="footer-badge footer-badge-accent">EASA Member</span>
                                <span className="footer-badge">Est. 1998</span>
                            </div>
                        </div>

                        {/* Company */}
                        <div className="footer-col">
                            <h4>Company</h4>
                            <nav>
                                <Link to="/about">About Us</Link>
                                <Link to="/services">Services</Link>
                                <Link to="/infrastructure">Infrastructure</Link>
                                <Link to="/careers">Careers</Link>
                                <Link to="/contact">Contact</Link>
                            </nav>
                        </div>

                        {/* Services */}
                        <div className="footer-col">
                            <h4>Services</h4>
                            <nav>
                                <Link to="/services#motors">Motors and Generators</Link>
                                <Link to="/services#pumps">Cryogenic Pumps</Link>
                                <Link to="/services#spares">Spare Parts</Link>
                                <Link to="/services#mechanical">Mechanical Repair</Link>
                                <Link to="/services#maintenance">Preventive Maintenance</Link>
                            </nav>
                        </div>

                        {/* Contact */}
                        <div className="footer-col">
                            <h4>Get in Touch</h4>
                            <address>
                                <p>
                                    613 GIDC Estate, Ranoli<br />
                                    Dist. Vadodara, 391350<br />
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

            {/* Bottom bar */}
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
                    border-top: 3px solid var(--color-accent);
                }

                .footer-main {
                    padding: var(--space-4xl) 0 var(--space-3xl);
                }

                .footer-grid {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
                    gap: var(--space-3xl);
                }

                /* Brand */
                .footer-brand {
                    display: flex;
                    flex-direction: column;
                }

                .footer-logo-wrap {
                    display: inline-block;
                    background: var(--color-white);
                    padding: 10px 16px;
                    width: fit-content;
                    margin-bottom: var(--space-xl);
                    transition: opacity 0.2s;
                }

                .footer-logo-wrap:hover {
                    opacity: 0.9;
                }

                .footer-logo-img {
                    height: 44px;
                    width: auto;
                    object-fit: contain;
                    display: block;
                }

                .footer-tagline {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    color: var(--color-accent);
                    margin-bottom: var(--space-md);
                }

                .footer-desc {
                    font-size: 0.875rem;
                    color: rgba(255,255,255,0.45);
                    line-height: 1.75;
                    margin-bottom: var(--space-xl);
                    max-width: 290px;
                }

                .footer-badges {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }

                .footer-badge {
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: rgba(255,255,255,0.38);
                    padding: 4px 9px;
                    border: 1px solid rgba(255,255,255,0.1);
                }

                .footer-badge-accent {
                    color: rgba(200,16,46,0.8);
                    border-color: rgba(200,16,46,0.25);
                }

                /* Columns */
                .footer-col h4 {
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.18em;
                    color: rgba(255,255,255,0.9);
                    margin-bottom: var(--space-xl);
                    padding-bottom: var(--space-sm);
                    border-bottom: 1px solid rgba(255,255,255,0.08);
                }

                .footer-col nav {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }

                .footer-col nav a {
                    font-size: 0.875rem;
                    color: rgba(255,255,255,0.46);
                    padding: 6px 0;
                    transition: color 0.2s, padding-left 0.2s;
                }

                .footer-col nav a:hover {
                    color: rgba(255,255,255,0.88);
                    padding-left: 6px;
                }

                /* Contact */
                .footer-col address {
                    font-style: normal;
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-md);
                }

                .footer-col address p {
                    font-size: 0.875rem;
                    color: rgba(255,255,255,0.46);
                    line-height: 1.75;
                }

                .footer-col address a {
                    color: rgba(255,255,255,0.46);
                    transition: color 0.2s;
                }

                .footer-col address a:hover {
                    color: rgba(255,255,255,0.88);
                }

                /* Bottom */
                .footer-bottom {
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

                .footer-bottom-inner nav {
                    display: flex;
                    gap: var(--space-xl);
                }

                .footer-bottom-inner nav a {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    color: rgba(255,255,255,0.22);
                    letter-spacing: 0.04em;
                    transition: color 0.2s;
                }

                .footer-bottom-inner nav a:hover {
                    color: rgba(255,255,255,0.55);
                }

                /* Responsive */
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
