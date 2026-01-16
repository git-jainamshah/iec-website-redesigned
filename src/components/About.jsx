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

                    {/* Right - Floating Image Frame */}
                    <div className="about-visual">
                        <div className="floating-frame">
                            <div className="frame-inner">
                                {images.map((img, idx) => (
                                    <div 
                                        key={idx}
                                        className={`frame-slide ${idx === currentImage ? 'active' : ''}`}
                                    >
                                        <img src={img.src} alt={img.caption} />
                                    </div>
                                ))}
                            </div>
                            <div className="frame-caption">
                                <span className="caption-text">{images[currentImage].caption}</span>
                                <div className="frame-dots">
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
                        <div className="frame-accent" />
                    </div>
                </div>
            </div>

            {/* Certifications - Quality Stamps */}
            <div className="certifications">
                <div className="container">
                    <div className="cert-header">
                        <span className="label">Certifications & Memberships</span>
                    </div>
                    <div className="cert-stamps">
                        <div className="stamp">
                            <div className="stamp-inner">
                                <svg className="stamp-ring" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"/>
                                </svg>
                                <div className="stamp-content">
                                    <span className="stamp-title">ISO</span>
                                    <span className="stamp-subtitle">9001:2008</span>
                                    <span className="stamp-desc">Quality Management</span>
                                </div>
                            </div>
                        </div>
                        <div className="stamp easa">
                            <div className="stamp-inner">
                                <svg className="stamp-ring" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"/>
                                </svg>
                                <div className="stamp-content">
                                    <span className="stamp-title">EASA</span>
                                    <span className="stamp-subtitle">Member</span>
                                    <span className="stamp-desc">Since 2014</span>
                                </div>
                            </div>
                        </div>
                        <div className="stamp">
                            <div className="stamp-inner">
                                <svg className="stamp-ring" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"/>
                                </svg>
                                <div className="stamp-content">
                                    <span className="stamp-title">NSIC</span>
                                    <span className="stamp-subtitle">Registered</span>
                                    <span className="stamp-desc">Govt. Certified</span>
                                </div>
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

                /* Floating Frame */
                .about-visual {
                    position: relative;
                    padding: var(--space-xl);
                }

                .floating-frame {
                    position: relative;
                    background: var(--color-white);
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 
                        0 25px 50px -12px rgba(0, 0, 0, 0.15),
                        0 0 0 1px rgba(0, 0, 0, 0.05);
                    z-index: 1;
                }

                .frame-inner {
                    position: relative;
                    aspect-ratio: 4/3;
                    overflow: hidden;
                }

                .frame-slide {
                    position: absolute;
                    inset: 0;
                    opacity: 0;
                    transition: opacity 0.8s ease;
                }

                .frame-slide.active {
                    opacity: 1;
                }

                .frame-slide img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(30%);
                }

                .frame-caption {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: var(--space-md) var(--space-lg);
                    background: var(--color-white);
                    border-top: 1px solid var(--color-border);
                }

                .caption-text {
                    font-size: 0.8125rem;
                    font-weight: 500;
                    color: var(--color-text);
                }

                .frame-dots {
                    display: flex;
                    gap: 6px;
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
                    transform: scale(1.2);
                }

                .dot:hover {
                    background: var(--color-accent);
                }

                .frame-accent {
                    position: absolute;
                    top: var(--space-lg);
                    right: var(--space-lg);
                    bottom: calc(-1 * var(--space-lg));
                    left: calc(var(--space-xl) + var(--space-lg));
                    background: var(--color-accent);
                    border-radius: 8px;
                    opacity: 0.1;
                    z-index: 0;
                }

                /* Certifications - Stamps */
                .certifications {
                    background: var(--color-cream);
                    padding: var(--space-4xl) 0;
                    margin-top: var(--space-5xl);
                }

                .cert-header {
                    text-align: center;
                    margin-bottom: var(--space-2xl);
                }

                .cert-stamps {
                    display: flex;
                    justify-content: center;
                    gap: var(--space-3xl);
                }

                .stamp {
                    width: 140px;
                    height: 140px;
                    color: var(--color-primary);
                }

                .stamp.easa {
                    color: var(--color-accent);
                }

                .stamp-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.3s var(--ease-out);
                }

                .stamp:hover .stamp-inner {
                    transform: rotate(-8deg) scale(1.05);
                }

                .stamp-ring {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                }

                .stamp-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                .stamp-title {
                    font-family: var(--font-serif);
                    font-size: 1.5rem;
                    font-weight: 600;
                    line-height: 1;
                }

                .stamp-subtitle {
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-top: 2px;
                }

                .stamp-desc {
                    font-size: 0.625rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--color-muted);
                    margin-top: var(--space-xs);
                }

                @media (max-width: 1024px) {
                    .about-grid {
                        grid-template-columns: 1fr;
                        gap: var(--space-3xl);
                    }

                    .about-visual {
                        max-width: 500px;
                        margin: 0 auto;
                    }
                }

                @media (max-width: 768px) {
                    .about-stats {
                        gap: var(--space-lg);
                    }

                    .stat-value {
                        font-size: 1.5rem;
                    }

                    .cert-stamps {
                        flex-wrap: wrap;
                        gap: var(--space-xl);
                    }

                    .stamp {
                        width: 110px;
                        height: 110px;
                    }

                    .stamp-title {
                        font-size: 1.25rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
