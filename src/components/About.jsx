import React from 'react';
import { Link } from 'react-router-dom';

const features = [
    {
        number: '01',
        title: 'State-of-the-Art Facility',
        desc: '300,000 sq.ft total area with 75,000 sq.ft dedicated shop floor'
    },
    {
        number: '02',
        title: 'Captive Power',
        desc: '5 MW power generation for uninterrupted operations'
    },
    {
        number: '03',
        title: 'Heavy Lifting',
        desc: 'Cranes from 10 to 300 tons for largest machinery'
    },
    {
        number: '04',
        title: 'Quality Certified',
        desc: 'ISO 9001:2008 certified with EASA membership since 2014'
    }
];

const About = () => {
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
                            <p>
                                We specialize in rewinding and repairing high voltage motors and 
                                generators up to 250 MW capacity, delivering solutions that keep 
                                industries running at peak performance.
                            </p>
                        </div>

                        <div className="about-cta">
                            <Link to="/about" className="btn btn-dark">
                                Discover Our Story
                            </Link>
                        </div>
                    </div>

                    {/* Right - Features */}
                    <div className="about-features">
                        {features.map((feature, idx) => (
                            <div 
                                key={idx} 
                                className="feature-card"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <span className="feature-number">{feature.number}</span>
                                <div className="feature-content">
                                    <h4>{feature.title}</h4>
                                    <p>{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Certifications Bar */}
            <div className="certifications">
                <div className="container">
                    <div className="cert-inner">
                        <span className="cert-title">Certifications & Memberships</span>
                        <div className="cert-list">
                            <div className="cert-item">
                                <span className="cert-name">ISO 9001:2008</span>
                                <span className="cert-label">Quality Management</span>
                            </div>
                            <div className="cert-item">
                                <span className="cert-name">EASA Member</span>
                                <span className="cert-label">Since 2014</span>
                            </div>
                            <div className="cert-item">
                                <span className="cert-name">NSIC Registered</span>
                                <span className="cert-label">Government Certified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .about {
                    background: var(--color-white);
                }

                .about-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    gap: var(--space-4xl);
                    align-items: start;
                }

                .about-content .label {
                    display: block;
                    margin-bottom: var(--space-md);
                }

                .about-content h2 {
                    margin-bottom: var(--space-xl);
                }

                .about-text {
                    margin-bottom: var(--space-2xl);
                }

                .about-text p {
                    font-size: 1rem;
                    line-height: 1.8;
                    margin-bottom: var(--space-lg);
                }

                .about-text p:last-child {
                    margin-bottom: 0;
                }

                .about-features {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-md);
                }

                .feature-card {
                    display: flex;
                    gap: var(--space-lg);
                    padding: var(--space-lg);
                    background: var(--color-light);
                    border-left: 3px solid transparent;
                    transition: all 0.3s var(--ease-out);
                }

                .feature-card:hover {
                    border-left-color: var(--color-accent);
                    transform: translateX(8px);
                }

                .feature-number {
                    font-family: var(--font-serif);
                    font-size: 1.25rem;
                    font-weight: 500;
                    color: var(--color-accent);
                    flex-shrink: 0;
                    width: 32px;
                }

                .feature-content h4 {
                    font-size: 0.9375rem;
                    font-weight: 600;
                    margin-bottom: var(--space-xs);
                }

                .feature-content p {
                    font-size: 0.875rem;
                    line-height: 1.5;
                }

                /* Certifications */
                .certifications {
                    background: var(--color-primary);
                    padding: var(--space-2xl) 0;
                    margin-top: var(--space-5xl);
                }

                .cert-inner {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .cert-title {
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: rgba(255, 255, 255, 0.5);
                }

                .cert-list {
                    display: flex;
                    gap: var(--space-3xl);
                }

                .cert-item {
                    text-align: center;
                }

                .cert-name {
                    display: block;
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--color-white);
                    margin-bottom: 2px;
                }

                .cert-label {
                    font-size: 0.6875rem;
                    color: rgba(255, 255, 255, 0.5);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                @media (max-width: 1024px) {
                    .about-grid {
                        grid-template-columns: 1fr;
                        gap: var(--space-3xl);
                    }
                }

                @media (max-width: 768px) {
                    .cert-inner {
                        flex-direction: column;
                        gap: var(--space-xl);
                    }

                    .cert-list {
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: var(--space-xl);
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
