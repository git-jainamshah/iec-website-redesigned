import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/iec-hero-bg.jpeg';

const images = [
    { src: heroBg, caption: 'Main Workshop Floor' },
    { src: heroBg, caption: 'Quality Testing Lab' },
    { src: heroBg, caption: 'Heavy Machinery Area' },
];

const About = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="about section">
            <div className="container">
                <div className="about-grid">
                    {/* Left Content */}
                    <div className="about-content">
                        <span className="label">About Us</span>
                        <h2 className="display-title">
                            A legacy of<br />
                            <em>engineering excellence.</em>
                        </h2>
                        
                        <div className="about-text">
                            <p>
                                Since 1998, Indian Engineering Company has established itself as 
                                one of India's largest and most trusted facilities for industrial 
                                motor and generator repair.
                            </p>
                            <p>
                                Our commitment to quality, precision, and customer satisfaction 
                                has made us the preferred partner for leading industries across 
                                Gujarat, Maharashtra, Madhya Pradesh, Rajasthan, Karnataka, and 
                                international markets.
                            </p>
                        </div>

                        <div className="about-stats">
                            <div className="stat">
                                <span className="stat-value">75K</span>
                                <span className="stat-label">Sq.Ft Workshop</span>
                            </div>
                            <div className="stat">
                                <span className="stat-value">250</span>
                                <span className="stat-label">MW Capacity</span>
                            </div>
                            <div className="stat">
                                <span className="stat-value">26+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                        </div>

                        <div className="about-cta">
                            <Link to="/about" className="btn btn-dark">
                                Discover Our Story
                            </Link>
                        </div>
                    </div>

                    {/* Right - Image Gallery */}
                    <div className="about-visual">
                        <div className="gallery-frame">
                            {images.map((img, idx) => (
                                <div 
                                    key={idx}
                                    className={`gallery-slide ${idx === currentImage ? 'active' : ''}`}
                                >
                                    <img src={img.src} alt={img.caption} />
                                </div>
                            ))}
                            <div className="gallery-caption">
                                <span>{images[currentImage].caption}</span>
                                <div className="gallery-dots">
                                    {images.map((_, idx) => (
                                        <button 
                                            key={idx} 
                                            className={`dot ${idx === currentImage ? 'active' : ''}`}
                                            onClick={() => setCurrentImage(idx)}
                                            aria-label={`Go to slide ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Certifications - Clean Bar */}
            <div className="certifications">
                <div className="container">
                    <div className="cert-inner">
                        <span className="cert-label">Certifications & Memberships</span>
                        <div className="cert-badges">
                            <div className="cert-badge">
                                <span className="badge-name">ISO 9001:2008</span>
                                <span className="badge-desc">Quality Management</span>
                            </div>
                            <div className="cert-divider"></div>
                            <div className="cert-badge accent">
                                <span className="badge-name">EASA Member</span>
                                <span className="badge-desc">Since 2014</span>
                            </div>
                            <div className="cert-divider"></div>
                            <div className="cert-badge">
                                <span className="badge-name">NSIC Registered</span>
                                <span className="badge-desc">Govt. Certified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .about {
                    background: var(--color-white);
                    padding-bottom: 0;
                }

                .about-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-4xl);
                    align-items: center;
                }

                .about-content .label {
                    display: block;
                    margin-bottom: var(--space-md);
                }

                .about-content h2 {
                    margin-bottom: var(--space-xl);
                }

                .about-text {
                    margin-bottom: var(--space-xl);
                }

                .about-text p {
                    font-size: 1rem;
                    line-height: 1.8;
                    margin-bottom: var(--space-md);
                }

                .about-text p:last-child {
                    margin-bottom: 0;
                }

                /* About Stats */
                .about-stats {
                    display: flex;
                    gap: var(--space-2xl);
                    margin-bottom: var(--space-xl);
                    padding: var(--space-lg) 0;
                    border-top: 1px solid var(--color-border);
                    border-bottom: 1px solid var(--color-border);
                }

                .stat {
                    display: flex;
                    flex-direction: column;
                }

                .stat-value {
                    font-family: var(--font-serif);
                    font-size: 2rem;
                    font-weight: 500;
                    color: var(--color-accent);
                    line-height: 1;
                }

                .stat-label {
                    font-size: 0.75rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--color-muted);
                    margin-top: var(--space-xs);
                }

                /* Gallery Frame - Simple elevated design */
                .about-visual {
                    position: relative;
                }

                .gallery-frame {
                    position: relative;
                    background: var(--color-white);
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
                }

                .gallery-slide {
                    position: absolute;
                    inset: 0;
                    opacity: 0;
                    transition: opacity 0.6s ease;
                }

                .gallery-slide:first-child {
                    position: relative;
                }

                .gallery-slide.active {
                    opacity: 1;
                }

                .gallery-slide img {
                    width: 100%;
                    height: 100%;
                    aspect-ratio: 4/3;
                    object-fit: cover;
                }

                .gallery-caption {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: var(--space-md) var(--space-lg);
                    background: var(--color-white);
                    border-top: 1px solid var(--color-border);
                }

                .gallery-caption span {
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: var(--color-text);
                }

                .gallery-dots {
                    display: flex;
                    gap: 8px;
                }

                .dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: var(--color-border);
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s;
                }

                .dot.active {
                    background: var(--color-accent);
                }

                .dot:hover {
                    background: var(--color-text);
                }

                /* Certifications - Clean horizontal bar */
                .certifications {
                    background: var(--color-cream);
                    padding: var(--space-2xl) 0;
                    margin-top: var(--space-5xl);
                }

                .cert-inner {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: var(--space-3xl);
                }

                .cert-label {
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-muted);
                    flex-shrink: 0;
                }

                .cert-badges {
                    display: flex;
                    align-items: center;
                    gap: var(--space-2xl);
                }

                .cert-divider {
                    width: 1px;
                    height: 40px;
                    background: var(--color-border);
                }

                .cert-badge {
                    text-align: center;
                }

                .badge-name {
                    display: block;
                    font-size: 1rem;
                    font-weight: 700;
                    color: var(--color-text);
                    margin-bottom: 2px;
                }

                .cert-badge.accent .badge-name {
                    color: var(--color-accent);
                }

                .badge-desc {
                    font-size: 0.6875rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--color-muted);
                }

                @media (max-width: 1024px) {
                    .about-grid {
                        grid-template-columns: 1fr;
                        gap: var(--space-3xl);
                    }

                    .about-visual {
                        order: -1;
                    }
                }

                @media (max-width: 768px) {
                    .about-stats {
                        gap: var(--space-lg);
                    }

                    .stat-value {
                        font-size: 1.5rem;
                    }

                    .cert-inner {
                        flex-direction: column;
                        gap: var(--space-lg);
                    }

                    .cert-badges {
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: var(--space-lg);
                    }

                    .cert-divider {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
