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
                        
                        {/* Call CTA */}
                        <a href="tel:+919824214839" className="hero-call-cta">
                            Call Us Now
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* EASA Badge with circular text */}
            <div className="easa-badge">
                <svg className="easa-text-circle" viewBox="0 0 100 100">
                    <defs>
                        <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
                    </defs>
                    <text>
                        <textPath href="#circle" startOffset="0%">
                            • ACCREDITED MEMBER • ACCREDITED MEMBER 
                        </textPath>
                    </text>
                </svg>
                <img src={easaLogo} alt="EASA" className="easa-logo" />
            </div>

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
                    filter: grayscale(100%) contrast(1.1) brightness(0.9);
                }

                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        135deg,
                        rgba(0, 0, 0, 0.75) 0%,
                        rgba(0, 0, 0, 0.6) 40%,
                        rgba(0, 0, 0, 0.45) 100%
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
                    padding-bottom: var(--space-3xl);
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
                    display: flex;
                    align-items: center;
                    gap: var(--space-xl);
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

                /* Call CTA on banner */
                .hero-call-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: var(--space-sm);
                    font-size: 0.8125rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: var(--color-white);
                    padding: 10px 20px;
                    background: transparent;
                    border: 1px solid rgba(255, 255, 255, 0.4);
                    border-radius: 4px;
                    transition: all 0.3s var(--ease-out);
                }

                .hero-call-cta:hover {
                    background: var(--color-white);
                    color: var(--color-text);
                    border-color: var(--color-white);
                }

                .hero-call-cta svg {
                    transition: transform 0.3s var(--ease-out);
                }

                .hero-call-cta:hover svg {
                    transform: rotate(15deg);
                }

                /* EASA Badge with circular text */
                .easa-badge {
                    position: absolute;
                    bottom: 100px;
                    right: var(--space-2xl);
                    width: 110px;
                    height: 110px;
                    z-index: 2;
                    transform: rotate(-12deg);
                }

                .easa-text-circle {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    animation: rotate-text 20s linear infinite;
                }

                .easa-text-circle text {
                    font-size: 8px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    fill: rgba(255, 255, 255, 0.7);
                }

                @keyframes rotate-text {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .easa-logo {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 55px;
                    height: 55px;
                    object-fit: contain;
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
                        padding-bottom: var(--space-2xl);
                    }

                    .hero-actions {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: var(--space-md);
                    }

                    .easa-badge {
                        bottom: 90px;
                        right: var(--space-lg);
                        width: 90px;
                        height: 90px;
                    }

                    .easa-logo {
                        width: 45px;
                        height: 45px;
                    }

                    .easa-text-circle text {
                        font-size: 7px;
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
                        padding-bottom: var(--space-xl);
                    }

                    .easa-badge {
                        bottom: 80px;
                        right: var(--space-md);
                        width: 75px;
                        height: 75px;
                    }

                    .easa-logo {
                        width: 38px;
                        height: 38px;
                    }

                    .easa-text-circle text {
                        font-size: 6px;
                    }

                    .hero-phone {
                        font-size: 0.8125rem;
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
