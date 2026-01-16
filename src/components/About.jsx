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
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const goToPrev = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

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
                            {/* Image Container */}
                            <div className="gallery-images">
                                {images.map((img, idx) => (
                                    <div 
                                        key={idx}
                                        className={`gallery-slide ${idx === currentImage ? 'active' : ''}`}
                                    >
                                        <img src={img.src} alt={img.caption} />
                                    </div>
                                ))}
                            </div>

                            {/* Caption Bar with Navigation */}
                            <div className="gallery-controls">
                                <button className="gallery-nav prev" onClick={goToPrev} aria-label="Previous image">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M15 18l-6-6 6-6"/>
                                    </svg>
                                </button>

                                <div className="gallery-caption">
                                    <span className="caption-text">{images[currentImage].caption}</span>
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

                                <button className="gallery-nav next" onClick={goToNext} aria-label="Next image">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 18l6-6-6-6"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .about {
                    background: var(--color-white);
                    padding-bottom: var(--space-3xl);
                }

                .about-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-3xl);
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
                    gap: var(--space-xl);
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

                /* Gallery Frame */
                .about-visual {
                    position: relative;
                }

                .gallery-frame {
                    background: var(--color-white);
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
                }

                .gallery-images {
                    position: relative;
                    aspect-ratio: 4/3;
                    overflow: hidden;
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
                    object-fit: cover;
                }

                /* Controls Bar - Caption + Navigation */
                .gallery-controls {
                    display: flex;
                    align-items: center;
                    gap: var(--space-sm);
                    padding: var(--space-sm) var(--space-md);
                    background: var(--color-white);
                    border-top: 1px solid var(--color-border);
                }

                /* Navigation Arrows in Caption Bar */
                .gallery-nav {
                    width: 36px;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--color-light);
                    border: 1px solid var(--color-border);
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all 0.2s var(--ease-out);
                    flex-shrink: 0;
                }

                .gallery-nav:hover {
                    background: var(--color-accent);
                    border-color: var(--color-accent);
                    color: var(--color-white);
                }

                .gallery-nav svg {
                    transition: transform 0.2s;
                }

                .gallery-nav.prev:hover svg {
                    transform: translateX(-2px);
                }

                .gallery-nav.next:hover svg {
                    transform: translateX(2px);
                }

                /* Caption */
                .gallery-caption {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 var(--space-md);
                }

                .caption-text {
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

                    .gallery-nav {
                        width: 32px;
                        height: 32px;
                    }

                    .gallery-caption {
                        padding: 0 var(--space-sm);
                    }

                    .caption-text {
                        font-size: 0.8125rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
