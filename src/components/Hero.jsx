import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/iec-hero-bg.jpeg';
import easaLogo from '../assets/easa-logo.png';

const Hero = () => {
    return (
        <section className="hero">
            {/* Background */}
            <div className="hero-bg">
                <img src={heroBg} alt="" aria-hidden="true" />
                <div className="hero-overlay" />
            </div>

            {/* Content */}
            <div className="container hero-content">
                <div className="hero-text">
                    <span className="hero-label animate-fade-up">Since 1998 · ISO 9001 Certified</span>
                    
                    <h1 className="hero-title display-title animate-fade-up delay-1">
                        Your trusted partner for<br />
                        <em>industrial excellence.</em>
                    </h1>
                    
                    <p className="hero-desc animate-fade-up delay-2">
                        India's premier engineering company specializing in high voltage motor 
                        and generator repair. Powering industries with precision and reliability.
                    </p>
                    
                    <div className="hero-actions animate-fade-up delay-3">
                        <Link to="/contact" className="hero-cta">
                            Connect Now
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* EASA Logo - Stamped look, bottom right */}
            <img src={easaLogo} alt="EASA Accredited Member" className="easa-logo" />

            {/* Stats Strip */}
            <div className="hero-stats">
                <div className="container stats-container">
                    <div className="stat animate-fade-up delay-2">
                        <span className="stat-value">250<span className="stat-unit">MW</span></span>
                        <span className="stat-label">Repair Capacity</span>
                    </div>
                    <div className="stat animate-fade-up delay-3">
                        <span className="stat-value">400<span className="stat-unit">+</span></span>
                        <span className="stat-label">Annual Projects</span>
                    </div>
                    <div className="stat animate-fade-up delay-4">
                        <span className="stat-value">75<span className="stat-unit">K</span></span>
                        <span className="stat-label">Sq.Ft Shop Floor</span>
                    </div>
                    <div className="stat animate-fade-up delay-5">
                        <span className="stat-value">24<span className="stat-unit">/7</span></span>
                        <span className="stat-label">Emergency Support</span>
                    </div>
                </div>
            </div>

            <style>{`
                .hero {
                    position: relative;
                    min-height: 70vh;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                }

                .hero-bg {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
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
                        135deg,
                        rgba(10, 22, 40, 0.92) 0%,
                        rgba(10, 22, 40, 0.8) 40%,
                        rgba(10, 22, 40, 0.65) 100%
                    );
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-top: calc(var(--header-height) + var(--space-lg));
                    padding-bottom: var(--space-xl);
                }

                .hero-text {
                    max-width: 580px;
                }

                .hero-label {
                    display: inline-block;
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: rgba(255, 255, 255, 0.6);
                    margin-bottom: var(--space-md);
                    opacity: 0;
                }

                .hero-title {
                    font-size: clamp(2rem, 4.5vw, 3rem);
                    font-weight: 400;
                    color: var(--color-white);
                    line-height: 1.15;
                    margin-bottom: var(--space-md);
                    opacity: 0;
                }

                .hero-title em {
                    font-style: italic;
                    color: var(--color-accent);
                }

                .hero-desc {
                    font-size: 0.9375rem;
                    line-height: 1.7;
                    color: rgba(255, 255, 255, 0.6);
                    margin-bottom: var(--space-lg);
                    max-width: 480px;
                    opacity: 0;
                }

                .hero-actions {
                    opacity: 0;
                }

                .hero-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: var(--space-sm);
                    font-size: 0.8125rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: var(--color-white);
                    padding-bottom: 4px;
                    border-bottom: 2px solid var(--color-accent);
                    transition: all 0.3s var(--ease-out);
                }

                .hero-cta:hover {
                    gap: var(--space-md);
                    color: var(--color-accent);
                }

                .hero-cta svg {
                    transition: transform 0.3s var(--ease-out);
                }

                .hero-cta:hover svg {
                    transform: translateX(4px);
                }

                /* EASA Logo - Simple image, stamped look */
                .easa-logo {
                    position: absolute;
                    bottom: var(--space-xl);
                    right: var(--space-2xl);
                    width: 90px;
                    height: auto;
                    transform: rotate(-12deg);
                    opacity: 0.9;
                }

                /* Stats Strip */
                .hero-stats {
                    position: relative;
                    z-index: 3;
                    background: var(--color-white);
                    border-top: 3px solid var(--color-accent);
                }

                .stats-container {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                }

                .stat {
                    padding: var(--space-md) var(--space-sm);
                    text-align: center;
                    border-right: 1px solid var(--color-border);
                    opacity: 0;
                }

                .stat:last-child {
                    border-right: none;
                }

                .stat-value {
                    display: block;
                    font-family: var(--font-serif);
                    font-size: 1.75rem;
                    font-weight: 400;
                    color: var(--color-text);
                    line-height: 1;
                }

                .stat-unit {
                    font-size: 1.125rem;
                    color: var(--color-accent);
                }

                .stat-label {
                    display: block;
                    font-size: 0.5625rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-muted);
                    margin-top: var(--space-xs);
                }

                @media (max-width: 900px) {
                    .hero {
                        min-height: 65vh;
                    }

                    .hero-content {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: var(--space-lg);
                    }

                    /* EASA logo on tablet */
                    .easa-logo {
                        bottom: var(--space-lg);
                        right: var(--space-lg);
                        width: 75px;
                    }

                    .stats-container {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .stat {
                        border-bottom: 1px solid var(--color-border);
                    }

                    .stat:nth-child(2) {
                        border-right: none;
                    }

                    .stat:nth-last-child(-n+2) {
                        border-bottom: none;
                    }
                }

                @media (max-width: 600px) {
                    .hero {
                        min-height: 60vh;
                    }

                    .hero-content {
                        padding-top: calc(var(--header-height) + var(--space-md));
                    }

                    /* EASA logo on mobile */
                    .easa-logo {
                        bottom: var(--space-md);
                        right: var(--space-md);
                        width: 60px;
                    }

                    .stat-value {
                        font-size: 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
