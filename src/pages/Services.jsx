import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const services = [
    {
        id: 'motors',
        title: 'Motors / Generators / Alternators / DC',
        desc: 'Complete repair and rewinding services for high voltage motors, generators, alternators, and DC machines up to 250MW capacity.',
        features: [
            'HV Motor Rewinding',
            'Generator Overhaul',
            'Alternator Repair',
            'DC Machine Servicing',
            'Stator & Rotor Repairs',
            'Bearing Replacement'
        ]
    },
    {
        id: 'pumps',
        title: 'Industrial Pumps',
        desc: 'Comprehensive pump maintenance, repair, and refurbishment services for all industrial applications.',
        features: [
            'Centrifugal Pumps',
            'Submersible Pumps',
            'Vertical Turbine Pumps',
            'Slurry Pumps',
            'Impeller Balancing',
            'Seal Replacement'
        ]
    },
    {
        id: 'spares',
        title: 'Spare Parts',
        desc: 'Genuine spare parts and components from reputed manufacturers with complete technical support.',
        features: [
            'OEM Spare Parts',
            'Bearings & Seals',
            'Windings & Coils',
            'Insulation Materials',
            'Cooling Systems',
            'Control Components'
        ]
    }
];

const ServicesPage = () => {
    return (
        <div className="services-page">
            <PageHero
                label="What We Do"
                title="Our Services"
                subtitle="Comprehensive repair solutions for industrial rotating machinery."
                breadcrumbs={[{ label: 'Services' }]}
            />

            <section className="section">
                <div className="container">
                    {services.map((service, index) => (
                        <div key={service.id} id={service.id} className="service-block">
                            <div className="service-number">0{index + 1}</div>
                            <div className="service-body">
                                <h2>{service.title}</h2>
                                <p className="service-desc">{service.desc}</p>
                                <div className="service-features">
                                    {service.features.map((feature, i) => (
                                        <span key={i} className="feature-tag">{feature}</span>
                                    ))}
                                </div>
                                <Link to="/contact" className="btn btn-outline">
                                    Request Quote →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <style>{`
                .services-page {
                    min-height: 100vh;
                }

                .service-block {
                    display: grid;
                    grid-template-columns: 80px 1fr;
                    gap: var(--space-xl);
                    padding: var(--space-3xl) 0;
                    border-bottom: 1px solid var(--color-border);
                }

                .service-block:last-child {
                    border-bottom: none;
                }

                .service-number {
                    font-size: 3.5rem;
                    font-weight: 700;
                    color: var(--color-border);
                    line-height: 1;
                    font-family: var(--font-serif);
                }

                .service-body h2 {
                    font-size: 1.5rem;
                    margin-bottom: var(--space-md);
                }

                .service-desc {
                    font-size: 1.0625rem;
                    line-height: 1.8;
                    margin-bottom: var(--space-xl);
                    max-width: 640px;
                }

                .service-features {
                    display: flex;
                    flex-wrap: wrap;
                    gap: var(--space-sm);
                    margin-bottom: var(--space-xl);
                }

                .feature-tag {
                    background: var(--color-cream);
                    border: 1px solid var(--color-border);
                    padding: 6px 14px;
                    font-size: 0.8125rem;
                    color: var(--color-text-light);
                    border-radius: 3px;
                    transition: all 0.2s;
                }

                .feature-tag:hover {
                    border-color: var(--color-accent);
                    color: var(--color-accent);
                }

                @media (max-width: 768px) {
                    .service-block {
                        grid-template-columns: 1fr;
                        gap: var(--space-md);
                        padding: var(--space-2xl) 0;
                    }

                    .service-number {
                        font-size: 2.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default ServicesPage;
