import React from 'react';
import { Link } from 'react-router-dom';
import projectBannerBg from '../assets/project-banner-bg.jpg';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-content" data-aos="fade-up">
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

            <style>{`
                .cta-section {
                    position: relative;
                    background-image: url(${projectBannerBg});
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    padding: var(--space-3xl) 0;
                    border-bottom: 1px solid var(--color-border);
                    overflow: hidden;
                }

                .cta-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 0;
                }

                .cta-section .container {
                    position: relative;
                    z-index: 1;
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
                    color: rgba(255, 255, 255, 0.8);
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
                    color: var(--color-white);
                    background: var(--color-accent);
                    padding: 14px 24px;
                    border-radius: 4px;
                    transition: all 0.3s var(--ease-out);
                }

                .cta-btn-primary:hover {
                    background: var(--color-accent-hover);
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
                    color: rgba(255, 255, 255, 0.6);
                }

                .cta-phone {
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--color-white);
                    padding: 14px 24px;
                    border: 2px solid rgba(255, 255, 255, 0.4);
                    border-radius: 4px;
                    transition: all 0.3s;
                }

                .cta-phone:hover {
                    border-color: var(--color-accent);
                    color: var(--color-accent);
                    background: rgba(255, 255, 255, 0.1);
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
                }
            `}</style>
        </section>
    );
};

export default CTA;

