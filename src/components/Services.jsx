import React from 'react';
import { Link } from 'react-router-dom';
import iecLogo from '../assets/iec-logo.png';
// import motorImg from '../assets/motors-and-generators.jpg';
// import pumpImg from '../assets/industrial-pump.jpg';
// import spareImg from '../assets/spare-parts.jpg';

const Services = () => {
    const services = [
        {
            id: 'motors',
            title: 'Motors & Generators',
            capacity: 'Up to 250MW',
            desc: 'Complete repair and rewinding for HV motors, generators, alternators, and DC machines. We handle the giants of the industry with precision engineering.',
            tags: ['Stator Rewinding', 'Rotor Repair', 'VPI'],
            image: iecLogo // motorImg
        },
        {
            id: 'pumps',
            title: 'Industrial Pumps',
            capacity: 'All Capacities',
            desc: 'Comprehensive maintenance, repair, and refurbishment for all pump types including centrifugal, submersible, and vertical turbine units.',
            tags: ['Centrifugal', 'Submersible', 'Vertical Turbine'],
            image: iecLogo // pumpImg
        },
        {
            id: 'spares',
            title: 'Spare Parts',
            capacity: 'OEM Quality',
            desc: 'Genuine components with complete technical support. From bearings to windings, we ensure your equipment runs with original performance.',
            tags: ['Bearings', 'Seals', 'Impellers'],
            image: iecLogo // spareImg
        }
    ];

    return (
        <section className="services section">
            <div className="container">
                {/* Header */}
                <div className="services-header">
                    <span className="label">Our Expertise</span>
                    <h2 className="services-title">
                        What we <em className="accent-text">repair.</em>
                    </h2>
                </div>

                {/* Horizontal Features List */}
                <div className="services-list">
                    {services.map((service, idx) => (
                        <div key={service.id} className={`service-row ${idx % 2 !== 0 ? 'reverse' : ''}`}>
                            {/* Visual Side */}
                            <div className="service-visual">
                                <img src={service.image} alt={service.title} className="service-img" />
                                <div className="service-visual-overlay"></div>
                                <div className="service-capacity">{service.capacity}</div>
                            </div>

                            {/* Content Side */}
                            <div className="service-content">
                                <div className="service-content-inner">
                                    <h3 className="service-name">{service.title}</h3>
                                    <p className="service-desc">{service.desc}</p>

                                    <div className="service-tags">
                                        {service.tags.map(tag => (
                                            <span key={tag} className="tag">{tag}</span>
                                        ))}
                                    </div>

                                    <Link to="/services" className="service-link">
                                        Explore Service
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="services-footer-cta">
                    <div className="cta-block">
                        <h3 className="cta-title">Not sure what you need?</h3>
                        <p className="cta-subtitle">Our engineers are ready to diagnose your industrial challenges.</p>

                        <div className="cta-actions">
                            <Link to="/contact" className="btn btn-primary">
                                Connect Now
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>

                            <a href="tel:+919824214839" className="btn btn-outline">
                                Call Us Now
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .services {
                    background: var(--color-white);
                    padding: var(--space-4xl) 0;
                }

                /* Header */
                .services-header {
                    margin-bottom: var(--space-3xl);
                    text-align: left;
                }

                .label {
                    display: block;
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: var(--color-muted);
                    margin-bottom: var(--space-sm);
                }

                .services-title {
                    font-family: var(--font-serif);
                    font-size: clamp(2.5rem, 5vw, 3.5rem);
                    font-weight: 400;
                    line-height: 1;
                    color: var(--color-text);
                }

                .services-title em {
                    font-family: var(--font-serif);
                    font-style: italic;
                    color: var(--color-accent); /* Ensuring Red Color */
                }

                /* List Layout */
                .services-list {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-3xl);
                }

                .service-row {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr; /* Image larger than text */
                    gap: var(--space-2xl);
                    align-items: center;
                }

                .service-row.reverse {
                    grid-template-columns: 1fr 1.2fr;
                    direction: rtl; /* Trick to swap columns visually */
                }
                
                .service-row.reverse .service-content {
                    direction: ltr; /* Reset text direction */
                }

                /* Visual Side */
                .service-visual {
                    height: 400px;
                    border-radius: 4px;
                    position: relative;
                    overflow: hidden;
                    box-shadow: var(--shadow-md);
                }

                .service-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s var(--ease-out);
                }
                
                .service-row:hover .service-img {
                    transform: scale(1.05); /* Subtle zoom on hover */
                }

                .service-visual-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0,0,0,0.2); /* Slight darkening for text readability */
                    transition: background 0.3s;
                }
                
                .service-row:hover .service-visual-overlay {
                    background: rgba(0,0,0,0.1);
                }

                .service-capacity {
                    position: absolute;
                    top: var(--space-lg);
                    left: var(--space-lg); /* In reverse mode this stays correct relative to visual container */
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: var(--color-white);
                    background: rgba(0,0,0,0.6);
                    backdrop-filter: blur(8px);
                    padding: 8px 14px;
                    border-radius: 4px;
                    border: 1px solid rgba(255,255,255,0.2);
                }

                /* Content Side */
                .service-content {
                    padding: var(--space-lg);
                }

                .service-content-inner {
                    max-width: 480px;
                }

                .service-name {
                    font-family: var(--font-serif);
                    font-size: 2rem;
                    font-weight: 400;
                    color: var(--color-text);
                    margin-bottom: var(--space-md);
                }

                .service-desc {
                    font-size: 1rem;
                    line-height: 1.6;
                    color: var(--color-text-light);
                    margin-bottom: var(--space-lg);
                }

                .service-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-bottom: var(--space-xl);
                }

                .tag {
                    font-size: 0.75rem;
                    font-weight: 500;
                    color: var(--color-text);
                    background: var(--color-light);
                    padding: 6px 12px;
                    border-radius: 100px;
                    border: 1px solid transparent;
                }

                .service-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.8125rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--color-primary);
                    transition: all 0.3s;
                    border-bottom: 2px solid transparent;
                    padding-bottom: 2px;
                }

                .service-link:hover {
                    gap: 12px;
                    border-color: var(--color-accent);
                }

                /* Footer CTA */
                .services-footer-cta {
                    margin-top: var(--space-xl);
                    border-top: 1px solid var(--color-border);
                    padding-top: var(--space-xl);
                    text-align: center;
                }

                .cta-block {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: var(--space-md);
                }

                .cta-title {
                    font-family: var(--font-serif);
                    font-size: 2rem;
                    font-weight: 400;
                    color: var(--color-text);
                }

                .cta-subtitle {
                    font-size: 1rem;
                    color: var(--color-text-light);
                    margin-bottom: var(--space-lg);
                }

                .cta-actions {
                    display: flex;
                    gap: var(--space-xl);
                    align-items: center;
                }



                @media (max-width: 900px) {
                    .services-list {
                        gap: var(--space-2xl);
                    }
                    
                    .service-row, .service-row.reverse {
                        grid-template-columns: 1fr;
                        gap: var(--space-lg);
                        direction: ltr; /* Reset visual trick on mobile */
                    }
                    
                    .service-visual {
                        height: 280px;
                    }

                    .service-name {
                        font-size: 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Services;
