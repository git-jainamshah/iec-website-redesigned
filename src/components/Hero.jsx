import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/iec-hero-bg.jpeg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg">
                <img src={heroBg} alt="" aria-hidden="true" />
                <div className="hero-overlay" />
            </div>

            <div className="container hero-content">
                <p className="hero-tagline">Our Repairs Run the Industries</p>
                <h1 className="hero-title">
                    Industrial Motor &<br />
                    Generator Specialists
                </h1>
                <p className="hero-desc">
                    India's leading facility for high voltage motor and generator 
                    repair. ISO 9001 certified. Serving industries since 1998.
                </p>
                <div className="hero-actions">
                    <Link to="/services" className="btn btn-primary">Our Services</Link>
                    <Link to="/contact" className="btn btn-white">Contact Us</Link>
                </div>
            </div>

            <div className="hero-stats">
                <div className="stat">
                    <span className="stat-value">250MW</span>
                    <span className="stat-label">Repair Capacity</span>
                </div>
                <div className="stat">
                    <span className="stat-value">400+</span>
                    <span className="stat-label">Jobs Annually</span>
                </div>
                <div className="stat">
                    <span className="stat-value">25+</span>
                    <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                    <span className="stat-value">ISO</span>
                    <span className="stat-label">9001 Certified</span>
                </div>
            </div>

            <style>{`
                .hero {
                    position: relative;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }

                .hero-bg {
                    position: absolute;
                    inset: 0;
                    z-index: -1;
                }

                .hero-bg img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to right,
                        rgba(0, 0, 0, 0.8) 0%,
                        rgba(0, 0, 0, 0.4) 100%
                    );
                }

                .hero-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding-top: calc(var(--header-height) + var(--space-12));
                    padding-bottom: var(--space-24);
                    max-width: 700px;
                }

                .hero-tagline {
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: var(--color-accent);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: var(--space-4);
                }

                .hero-title {
                    font-size: clamp(2.5rem, 6vw, 4rem);
                    font-weight: 700;
                    color: var(--color-white);
                    line-height: 1.1;
                    margin-bottom: var(--space-6);
                }

                .hero-desc {
                    font-size: 1.125rem;
                    color: rgba(255, 255, 255, 0.8);
                    line-height: 1.7;
                    margin-bottom: var(--space-8);
                }

                .hero-actions {
                    display: flex;
                    gap: var(--space-4);
                    flex-wrap: wrap;
                }

                .hero-stats {
                    background: var(--color-white);
                    border-top: 3px solid var(--color-accent);
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                }

                .stat {
                    padding: var(--space-6) var(--space-4);
                    text-align: center;
                    border-right: 1px solid var(--color-gray-200);
                }

                .stat:last-child {
                    border-right: none;
                }

                .stat-value {
                    display: block;
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: var(--color-gray-900);
                    margin-bottom: var(--space-1);
                }

                .stat-label {
                    font-size: 0.75rem;
                    color: var(--color-gray-500);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                @media (max-width: 768px) {
                    .hero-content {
                        padding-top: calc(var(--header-height) + var(--space-8));
                        padding-bottom: var(--space-16);
                    }

                    .hero-actions {
                        flex-direction: column;
                    }

                    .hero-actions .btn {
                        width: 100%;
                        justify-content: center;
                    }

                    .hero-stats {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .stat {
                        border-bottom: 1px solid var(--color-gray-200);
                    }

                    .stat:nth-child(2) {
                        border-right: none;
                    }

                    .stat:nth-last-child(-n+2) {
                        border-bottom: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
