import React from 'react';
import { Link } from 'react-router-dom';

const services = [
    {
        id: 'motors',
        number: '01',
        title: 'Motors & Generators',
        subtitle: 'HV Machines up to 250MW',
        desc: 'Complete repair and rewinding services for high voltage motors, generators, alternators, and DC machines. Our expertise spans from routine maintenance to complex overhauls.',
        features: ['Stator Rewinding', 'Rotor Repair', 'Core Restacking', 'Insulation Systems'],
        image: 'linear-gradient(135deg, #1a2d4a 0%, #0a1628 100%)'
    },
    {
        id: 'pumps',
        number: '02',
        title: 'Industrial Pumps',
        subtitle: 'All Types & Capacities',
        desc: 'Comprehensive pump maintenance, repair, and refurbishment services. We handle centrifugal, submersible, vertical turbine, and specialty pumps for all industrial applications.',
        features: ['Impeller Balancing', 'Seal Replacement', 'Performance Testing', 'Efficiency Optimization'],
        image: 'linear-gradient(135deg, #2d1a4a 0%, #1a0a28 100%)'
    },
    {
        id: 'spares',
        number: '03',
        title: 'Spare Parts',
        subtitle: 'Genuine Components',
        desc: 'Genuine spare parts and components from reputed manufacturers with complete technical support. We maintain inventory of critical spares for minimal downtime.',
        features: ['OEM Parts', 'Quick Delivery', 'Technical Support', 'Quality Certified'],
        image: 'linear-gradient(135deg, #4a2d1a 0%, #281a0a 100%)'
    }
];

const Services = () => {
    return (
        <section className="services section">
            <div className="container">
                {/* Section Header */}
                <div className="services-header">
                    <span className="label">Our Services</span>
                    <h2 className="display-title">
                        Engineering solutions that<br />
                        <em>power industries.</em>
                    </h2>
                    <p className="services-intro">
                        With over 25 years of expertise, we deliver comprehensive repair 
                        and maintenance services for industrial rotating machinery.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="services-grid">
                    {services.map((service, idx) => (
                        <div 
                            key={service.id} 
                            className="service-card"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            <div className="service-visual" style={{ background: service.image }}>
                                <span className="service-number">{service.number}</span>
                            </div>
                            
                            <div className="service-content">
                                <span className="service-subtitle">{service.subtitle}</span>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-desc">{service.desc}</p>
                                
                                <div className="service-features">
                                    {service.features.map((f, i) => (
                                        <span key={i} className="feature-tag">{f}</span>
                                    ))}
                                </div>
                                
                                <Link to={`/services#${service.id}`} className="service-link">
                                    Learn More
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="services-cta">
                    <Link to="/services" className="btn btn-outline">
                        View All Services
                    </Link>
                </div>
            </div>

            <style>{`
                .services {
                    background: var(--color-cream);
                }

                .services-header {
                    max-width: 600px;
                    margin-bottom: var(--space-4xl);
                }

                .services-header .label {
                    display: block;
                    margin-bottom: var(--space-md);
                }

                .services-header h2 {
                    margin-bottom: var(--space-lg);
                }

                .services-intro {
                    font-size: 1.0625rem;
                    line-height: 1.8;
                }

                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: var(--space-xl);
                    margin-bottom: var(--space-3xl);
                }

                .service-card {
                    background: var(--color-white);
                    border: 1px solid var(--color-border);
                    overflow: hidden;
                    transition: all 0.4s var(--ease-out);
                }

                .service-card:hover {
                    border-color: var(--color-accent);
                    box-shadow: var(--shadow-xl);
                    transform: translateY(-8px);
                }

                .service-visual {
                    height: 200px;
                    display: flex;
                    align-items: flex-end;
                    padding: var(--space-lg);
                    position: relative;
                    overflow: hidden;
                }

                .service-number {
                    font-family: var(--font-serif);
                    font-size: 5rem;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 0.1);
                    line-height: 1;
                    position: absolute;
                    right: var(--space-lg);
                    bottom: var(--space-md);
                }

                .service-content {
                    padding: var(--space-xl);
                }

                .service-subtitle {
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-accent);
                    display: block;
                    margin-bottom: var(--space-sm);
                }

                .service-title {
                    font-size: 1.375rem;
                    font-weight: 500;
                    margin-bottom: var(--space-md);
                }

                .service-desc {
                    font-size: 0.9375rem;
                    line-height: 1.7;
                    margin-bottom: var(--space-lg);
                }

                .service-features {
                    display: flex;
                    flex-wrap: wrap;
                    gap: var(--space-sm);
                    margin-bottom: var(--space-lg);
                }

                .feature-tag {
                    font-size: 0.75rem;
                    font-weight: 500;
                    color: var(--color-text-light);
                    background: var(--color-light);
                    padding: 6px 12px;
                    border-radius: 100px;
                }

                .service-link {
                    display: inline-flex;
                    align-items: center;
                    gap: var(--space-sm);
                    font-size: 0.8125rem;
                    font-weight: 600;
                    color: var(--color-text);
                    transition: all 0.2s;
                }

                .service-link:hover {
                    color: var(--color-accent);
                    gap: var(--space-md);
                }

                .services-cta {
                    text-align: center;
                }

                @media (max-width: 1024px) {
                    .services-grid {
                        grid-template-columns: 1fr;
                        max-width: 600px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Services;
