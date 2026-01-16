import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/iec-logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <img src={logo} alt="IEC" />
                        </Link>
                        <p>
                            India's leading facility for industrial motor 
                            and generator repair services.
                        </p>
                        <p className="tagline">Our Repairs Run the Industries</p>
                    </div>

                    <div className="footer-links">
                        <h4>Company</h4>
                        <Link to="/about">About Us</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/infrastructure">Infrastructure</Link>
                        <Link to="/contact">Contact</Link>
                    </div>

                    <div className="footer-links">
                        <h4>Services</h4>
                        <Link to="/services">Motors & Generators</Link>
                        <Link to="/services">Pumps</Link>
                        <Link to="/services">Spare Parts</Link>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact</h4>
                        <p>
                            613 GIDC Estate, Ranoli<br />
                            Vadodara - 391350<br />
                            Gujarat, India
                        </p>
                        <p>
                            <a href="tel:+919824214839">+91 98242 14839</a><br />
                            <a href="mailto:anil@iecindia.co.in">anil@iecindia.co.in</a>
                        </p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Indian Engineering Company. All rights reserved.</p>
                </div>
            </div>

            <style>{`
                .footer {
                    background: var(--color-gray-900);
                    color: var(--color-gray-400);
                    padding: var(--space-16) 0 var(--space-8);
                }

                .footer-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr 1fr 1.5fr;
                    gap: var(--space-8);
                    margin-bottom: var(--space-12);
                }

                .footer-logo img {
                    height: 40px;
                    margin-bottom: var(--space-4);
                }

                .footer-brand p {
                    font-size: 0.9375rem;
                    line-height: 1.6;
                    margin-bottom: var(--space-2);
                }

                .footer-brand .tagline {
                    color: var(--color-accent);
                    font-weight: 500;
                    font-size: 0.875rem;
                }

                .footer-links h4,
                .footer-contact h4 {
                    color: var(--color-white);
                    font-size: 0.875rem;
                    font-weight: 600;
                    margin-bottom: var(--space-4);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .footer-links a {
                    display: block;
                    font-size: 0.9375rem;
                    padding: var(--space-2) 0;
                    transition: color var(--transition);
                }

                .footer-links a:hover {
                    color: var(--color-white);
                }

                .footer-contact p {
                    font-size: 0.9375rem;
                    line-height: 1.6;
                    margin-bottom: var(--space-3);
                }

                .footer-contact a {
                    transition: color var(--transition);
                }

                .footer-contact a:hover {
                    color: var(--color-white);
                }

                .footer-bottom {
                    padding-top: var(--space-8);
                    border-top: 1px solid var(--color-gray-800);
                }

                .footer-bottom p {
                    font-size: 0.875rem;
                }

                @media (max-width: 900px) {
                    .footer-grid {
                        grid-template-columns: 1fr 1fr;
                    }

                    .footer-brand {
                        grid-column: span 2;
                    }
                }

                @media (max-width: 600px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                    }

                    .footer-brand {
                        grid-column: span 1;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
