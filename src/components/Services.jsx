import React from 'react';
import { Link } from 'react-router-dom';

const servicesData = [
    {
        id: 'motors',
        title: 'Motors / Generators / Alternators / DC',
        description: 'Specialized repair and rewinding services for high voltage motors, generators, alternators, and DC machines up to 250 MW capacity.',
        features: ['HV Motor Rewinding', 'Generator Repair', 'Alternator Services', 'DC Machine Repair'],
        imagePlaceholder: 'Motor Repair Photo',
    },
    {
        id: 'pumps',
        title: 'Pumps',
        description: 'Comprehensive maintenance, repair, and refurbishing services for industrial pumps of all sizes and specifications.',
        features: ['Industrial Pumps', 'Submersible Pumps', 'Centrifugal Pumps', 'Maintenance Services'],
        imagePlaceholder: 'Pump Repair Photo',
    },
    {
        id: 'spares',
        title: 'Spares',
        description: 'Genuine spare parts and components for motors, generators, and industrial equipment from reputed manufacturers.',
        features: ['Genuine Parts', 'Quality Assured', 'Quick Delivery', 'Expert Support'],
        imagePlaceholder: 'Spare Parts Photo',
    },
];

const Services = () => {
    return (
        <section id="services" className="services-section section">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Our <span className="accent">Services</span></h2>
                    <p className="section-subtitle">
                        Comprehensive engineering solutions for industrial motor and generator repair
                    </p>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div 
                            key={service.id} 
                            id={service.id}
                            className="service-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Service Image Placeholder */}
                            <div className="service-image-placeholder">
                                <div className="placeholder-icon">
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                        <circle cx="8.5" cy="8.5" r="1.5"/>
                                        <polyline points="21 15 16 10 5 21"/>
                                    </svg>
                                </div>
                                <span className="placeholder-label">{service.imagePlaceholder}</span>
                            </div>

                            <div className="service-content">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                
                                <ul className="service-features">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                                
                                <Link to="/contact" className="service-link">
                                    Enquire Now →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Video Section */}
                <div className="services-video-section" data-aos="fade-up">
                    <div className="video-placeholder">
                        <div className="video-play-btn">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                                <polygon points="5 3 19 12 5 21 5 3"/>
                            </svg>
                        </div>
                        <span className="placeholder-label">Company Overview Video</span>
                        <span className="placeholder-size">Add a video showcasing your workshop and services</span>
                    </div>
                </div>
            </div>

            <style>{`
                .services-section {
                    background-color: var(--color-cream);
                }

                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                    margin-bottom: 4rem;
                }

                .service-card {
                    background-color: var(--color-white);
                    transition: var(--transition-base);
                    overflow: hidden;
                }

                .service-card:hover {
                    box-shadow: var(--shadow-xl);
                    transform: translateY(-5px);
                }

                .service-image-placeholder {
                    aspect-ratio: 16/10;
                    background: linear-gradient(135deg, var(--color-gray-100) 0%, var(--color-cream) 100%);
                    border-bottom: 3px solid var(--color-red);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    transition: var(--transition-base);
                }

                .service-card:hover .service-image-placeholder {
                    background: linear-gradient(135deg, var(--color-cream) 0%, var(--color-gray-100) 100%);
                }

                .placeholder-icon {
                    color: var(--color-gray-400);
                }

                .placeholder-label {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--color-gray-500);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }

                .placeholder-size {
                    font-size: 0.6875rem;
                    color: var(--color-gray-400);
                    text-align: center;
                    max-width: 200px;
                }

                .service-content {
                    padding: 2rem;
                }

                .service-title {
                    font-size: 1.125rem;
                    font-weight: 500;
                    color: var(--color-text-primary);
                    margin-bottom: 1rem;
                    line-height: 1.3;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .service-description {
                    font-size: 0.9375rem;
                    color: var(--color-text-secondary);
                    line-height: 1.7;
                    margin-bottom: 1.5rem;
                    font-weight: 400;
                }

                .service-features {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 1.5rem 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .service-features li {
                    font-size: 0.875rem;
                    color: var(--color-text-secondary);
                    padding-left: 1.25rem;
                    position: relative;
                    font-weight: 400;
                }

                .service-features li::before {
                    content: '—';
                    position: absolute;
                    left: 0;
                    color: var(--color-red);
                }

                .service-link {
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: var(--color-red);
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .service-link:hover {
                    color: var(--color-red-dark);
                }

                .services-video-section {
                    margin-top: 2rem;
                }

                .video-placeholder {
                    aspect-ratio: 16/7;
                    background: linear-gradient(135deg, var(--color-black) 0%, var(--color-gray-800) 100%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    position: relative;
                    cursor: pointer;
                    transition: var(--transition-base);
                }

                .video-placeholder:hover {
                    background: linear-gradient(135deg, var(--color-gray-900) 0%, var(--color-gray-700) 100%);
                }

                .video-placeholder:hover .video-play-btn {
                    transform: scale(1.1);
                }

                .video-play-btn {
                    width: 80px;
                    height: 80px;
                    background-color: var(--color-red);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-white);
                    transition: var(--transition-base);
                }

                .video-play-btn svg {
                    margin-left: 5px;
                }

                .video-placeholder .placeholder-label {
                    color: var(--color-white);
                    font-size: 0.875rem;
                }

                .video-placeholder .placeholder-size {
                    color: rgba(255, 255, 255, 0.6);
                }

                @media (max-width: 900px) {
                    .services-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default Services;
