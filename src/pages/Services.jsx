import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className="page">
            <div className="page-hero">
                <div className="container">
                    <h1>Our Services</h1>
                    <p>Comprehensive repair solutions for industrial rotating machinery</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    {services.map((service, index) => (
                        <div key={service.id} id={service.id} className="service-block">
                            <div className="service-number">0{index + 1}</div>
                            <div className="service-content">
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
                .page-hero {
                    background: var(--color-gray-900);
                    padding: calc(var(--header-height) + var(--space-16)) 0 var(--space-16);
                }

                .page-hero h1 {
                    color: var(--color-white);
                    margin-bottom: var(--space-2);
                }

                .page-hero p {
                    color: var(--color-gray-400);
                    font-size: 1.125rem;
                }

                .service-block {
                    display: grid;
                    grid-template-columns: 80px 1fr;
                    gap: var(--space-8);
                    padding: var(--space-12) 0;
                    border-bottom: 1px solid var(--color-gray-200);
                }

                .service-block:last-child {
                    border-bottom: none;
                }

                .service-number {
                    font-size: 3rem;
                    font-weight: 700;
                    color: var(--color-gray-200);
                    line-height: 1;
                }

                .service-content h2 {
                    margin-bottom: var(--space-4);
                }

                .service-desc {
                    font-size: 1.0625rem;
                    line-height: 1.7;
                    margin-bottom: var(--space-6);
                }

                .service-features {
                    display: flex;
                    flex-wrap: wrap;
                    gap: var(--space-2);
                    margin-bottom: var(--space-6);
                }

                .feature-tag {
                    background: var(--color-gray-100);
                    padding: var(--space-2) var(--space-3);
                    font-size: 0.8125rem;
                    color: var(--color-gray-700);
                }

                @media (max-width: 768px) {
                    .service-block {
                        grid-template-columns: 1fr;
                        gap: var(--space-4);
                    }

                    .service-number {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default ServicesPage;
