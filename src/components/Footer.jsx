import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaFacebookF, FaYoutube } from 'react-icons/fa';
import iecLogo from '../assets/iec-logo.png';

const Footer = () => {
    return (
        <footer className="footer" role="contentinfo">
            {/* CTA Section */}
            <div className="footer-cta">
                <div className="container">
                    <div className="cta-content" data-aos="fade-up">
                        <h3>Need Expert Motor Repair Services?</h3>
                        <p>Contact us today for a free consultation and quote.</p>
                        <Link to="/contact" className="btn btn-primary">Get Free Quote</Link>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Company Info */}
                        <div className="footer-col company-col" data-aos="fade-up">
                            <Link to="/" className="footer-logo-link">
                                <img src={iecLogo} alt="IEC" className="footer-logo" />
                                <div className="footer-brand">
                                    <span className="footer-company-name">Indian Engineering Company</span>
                                    <span className="footer-tagline">Industrial Motor & Generator Specialists</span>
                                </div>
                            </Link>
                            <p className="footer-description">
                                One of India's largest repair shops specializing in rewinding and repairing high voltage motors and generators.
                            </p>
                            <div className="social-links">
                                <a href="https://linkedin.com/company/iecindia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://facebook.com/iecindia" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
                                    <FaFacebookF />
                                </a>
                                <a href="https://youtube.com/iecindia" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="footer-col" data-aos="fade-up" data-aos-delay="100">
                            <h4>Navigation</h4>
                            <ul className="footer-links">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/facilities">Facilities</Link></li>
                                <li><Link to="/infrastructure">Infrastructure</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer-col" data-aos="fade-up" data-aos-delay="200">
                            <h4>Services</h4>
                            <ul className="footer-links">
                                <li><Link to="/services#motors">Motors / Generators</Link></li>
                                <li><Link to="/services#pumps">Pumps</Link></li>
                                <li><Link to="/services#spares">Spares</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer-col" data-aos="fade-up" data-aos-delay="300">
                            <h4>Contact Us</h4>
                            <div className="contact-info">
                                <p>
                                    GIDC Estate, Ranoli<br />
                                    Vadodara - 391350<br />
                                    Gujarat, India
                                </p>
                                <p>
                                    <strong>Phone:</strong><br />
                                    <a href="tel:+919824214839">+91 9824214839</a>
                                </p>
                                <p>
                                    <strong>Email:</strong><br />
                                    <a href="mailto:anil@iecindia.co.in">anil@iecindia.co.in</a>
                                </p>
                            </div>
                            {/* Small Map */}
                            <div className="footer-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5!2d73.25!3d22.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzAwLjAiTiA3M8KwMTUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100"
                                    style={{ border: 0, filter: 'grayscale(100%)', opacity: 0.7 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="IEC Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright">© {new Date().getFullYear()} Indian Engineering Company. All Rights Reserved.</p>
                    <div className="legal-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>

            <style>{`
                .footer {
                    background: var(--color-gray-900);
                    color: var(--color-white);
                }

                .footer-cta {
                    background: var(--color-black);
                    padding: 4rem 0;
                    text-align: center;
                }

                .cta-content h3 {
                    font-size: 1.75rem;
                    font-weight: 200;
                    color: var(--color-white);
                    margin: 0;
                    font-family: var(--font-display);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .cta-content p {
                    color: rgba(255, 255, 255, 0.6);
                    margin: 1rem 0 1.5rem;
                }

                .footer-main {
                    padding: 4rem 0;
                }

                .footer-grid {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
                    gap: 3rem;
                }

                .footer-logo-link {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }

                .footer-logo {
                    height: 50px;
                    width: auto;
                }

                .footer-brand {
                    display: flex;
                    flex-direction: column;
                }

                .footer-company-name {
                    font-family: var(--font-display);
                    font-size: 1.125rem;
                    font-weight: 300;
                    color: var(--color-white);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    line-height: 1.2;
                }

                .footer-tagline {
                    font-size: 0.5625rem;
                    color: var(--color-red);
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                }

                .footer-description {
                    font-size: 0.9375rem;
                    color: rgba(255, 255, 255, 0.6);
                    line-height: 1.8;
                    margin: 0 0 1.5rem 0;
                    font-weight: 300;
                }

                .social-links {
                    display: flex;
                    gap: 0.75rem;
                }

                .social-icon {
                    width: 36px;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 14px;
                    transition: var(--transition-fast);
                }

                .social-icon:hover {
                    background: var(--color-red);
                    border-color: var(--color-red);
                    color: var(--color-white);
                    transform: translateY(-2px);
                }

                .footer-col h4 {
                    font-size: 0.6875rem;
                    font-weight: 600;
                    color: var(--color-white);
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    margin-bottom: 1.5rem;
                    font-family: var(--font-display);
                }

                .footer-links {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .footer-links li {
                    margin-bottom: 0.75rem;
                }

                .footer-links a {
                    font-size: 0.9375rem;
                    color: rgba(255, 255, 255, 0.6);
                    transition: var(--transition-fast);
                    font-weight: 300;
                }

                .footer-links a:hover {
                    color: var(--color-white);
                }

                .contact-info p {
                    font-size: 0.9375rem;
                    color: rgba(255, 255, 255, 0.6);
                    line-height: 1.6;
                    margin-bottom: 1rem;
                    font-weight: 300;
                }

                .contact-info a {
                    color: rgba(255, 255, 255, 0.6);
                }

                .contact-info a:hover {
                    color: var(--color-white);
                }

                .footer-map {
                    margin-top: 1rem;
                    border-radius: 4px;
                    overflow: hidden;
                }

                .footer-bottom {
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 1.5rem 0;
                }

                .footer-bottom .container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .copyright {
                    font-size: 0.8125rem;
                    color: rgba(255, 255, 255, 0.4);
                    margin: 0;
                }

                .legal-links {
                    display: flex;
                    gap: 2rem;
                }

                .legal-links a {
                    font-size: 0.8125rem;
                    color: rgba(255, 255, 255, 0.4);
                }

                .legal-links a:hover {
                    color: rgba(255, 255, 255, 0.7);
                }

                @media (max-width: 1024px) {
                    .footer-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 2rem;
                    }

                    .company-col {
                        grid-column: span 2;
                    }
                }

                @media (max-width: 600px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                    }

                    .company-col {
                        grid-column: span 1;
                    }

                    .footer-bottom .container {
                        flex-direction: column;
                        gap: 1rem;
                        text-align: center;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
