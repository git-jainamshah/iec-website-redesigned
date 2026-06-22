import React from 'react';
import { Link } from 'react-router-dom';
import projectBannerBg from '../assets/project-banner-bg.jpg';

const CTA = () => {
    return (
        <section className="cta-section">
            {/* Background image */}
            <div className="cta-bg">
                <img src={projectBannerBg} alt="" aria-hidden="true" />
                <div className="cta-overlay" />
                <div className="cta-grid-texture" aria-hidden="true" />
            </div>

            <div className="container cta-container">
                <div className="cta-inner" data-aos="fade-up">
                    {/* Left: text */}
                    <div className="cta-text">
                        <span className="cta-eyebrow">Get in Touch</span>
                        <h2 className="cta-title display-title">
                            Ready to discuss<br />
                            your <em>next project?</em>
                        </h2>
                        <p className="cta-desc">
                            Expert consultation and a detailed repair scope from our engineers.
                            No obligation. Typical response within 24 hours.
                        </p>
                    </div>

                    {/* Right: actions */}
                    <div className="cta-actions">
                        <Link to="/contact" className="cta-btn-primary">
                            Connect Now
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>

                        <div className="cta-contact-strip">
                            <a href="tel:+919824214839" className="cta-contact-item">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <span>+91 98242 14839</span>
                            </a>
                            <span className="cta-contact-sep" aria-hidden="true">·</span>
                            <a href="mailto:anil@iecindia.co.in" className="cta-contact-item">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <span>anil@iecindia.co.in</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .cta-section {
                    position: relative;
                    padding: var(--space-5xl) 0;
                    overflow: hidden;
                }

                .cta-bg {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                }

                .cta-bg img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(60%) brightness(0.7);
                }

                .cta-overlay {
                    position: absolute;
                    inset: 0;
                    background:
                        linear-gradient(105deg,
                            rgba(5, 7, 10, 0.92) 0%,
                            rgba(5, 7, 10, 0.78) 45%,
                            rgba(5, 7, 10, 0.55) 100%);
                }

                .cta-grid-texture {
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
                    background-size: 60px 60px;
                    pointer-events: none;
                }

                .cta-container {
                    position: relative;
                    z-index: 1;
                }

                .cta-inner {
                    display: grid;
                    grid-template-columns: 1fr auto;
                    gap: var(--space-4xl);
                    align-items: center;
                }

                /* Text */
                .cta-eyebrow {
                    display: inline-block;
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    color: var(--color-accent);
                    margin-bottom: var(--space-lg);
                }

                .cta-title {
                    font-size: clamp(2rem, 4.5vw, 3.5rem);
                    font-weight: 400;
                    color: var(--color-white);
                    letter-spacing: -0.02em;
                    line-height: 1.05;
                    margin-bottom: var(--space-lg);
                }

                .cta-title em {
                    color: var(--color-accent);
                }

                .cta-desc {
                    font-size: 0.9375rem;
                    color: rgba(255, 255, 255, 0.6);
                    line-height: 1.7;
                    max-width: 480px;
                }

                /* Actions */
                .cta-actions {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: var(--space-xl);
                    flex-shrink: 0;
                }

                .cta-btn-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: var(--color-white);
                    background: var(--color-accent);
                    padding: 18px 36px;
                    border-radius: 2px;
                    white-space: nowrap;
                    transition: all 0.3s var(--ease-out);
                }

                .cta-btn-primary:hover {
                    background: var(--color-accent-hover);
                    gap: 14px;
                    box-shadow: 0 16px 40px rgba(200, 16, 46, 0.4);
                    transform: translateY(-2px);
                }

                .cta-btn-primary svg {
                    flex-shrink: 0;
                    transition: transform 0.3s;
                }

                .cta-btn-primary:hover svg {
                    transform: translateX(4px);
                }

                .cta-contact-strip {
                    display: flex;
                    align-items: center;
                    gap: var(--space-md);
                    flex-wrap: wrap;
                }

                .cta-contact-item {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-family: var(--font-mono);
                    font-size: 0.8125rem;
                    color: rgba(255, 255, 255, 0.7);
                    letter-spacing: 0.02em;
                    transition: color 0.2s;
                }

                .cta-contact-item:hover {
                    color: var(--color-white);
                }

                .cta-contact-item svg {
                    color: var(--color-accent);
                    flex-shrink: 0;
                }

                .cta-contact-sep {
                    color: rgba(255, 255, 255, 0.3);
                    font-size: 1.25rem;
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .cta-inner {
                        grid-template-columns: 1fr;
                        gap: var(--space-2xl);
                    }

                    .cta-actions {
                        align-items: flex-start;
                    }
                }

                @media (max-width: 600px) {
                    .cta-section {
                        padding: var(--space-4xl) 0;
                    }

                    .cta-btn-primary {
                        width: 100%;
                        justify-content: center;
                    }

                    .cta-contact-strip {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .cta-contact-sep {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default CTA;
