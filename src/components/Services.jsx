import React from 'react';
import { Link } from 'react-router-dom';

const services = [
    {
        title: 'Motors & Generators',
        desc: 'Complete repair and rewinding services for HV motors, generators, and alternators up to 250MW capacity.',
        icon: '⚡'
    },
    {
        title: 'Industrial Pumps',
        desc: 'Comprehensive pump maintenance, repair, and refurbishment for all industrial applications.',
        icon: '🔧'
    },
    {
        title: 'Spare Parts',
        desc: 'Genuine spare parts and components from trusted manufacturers with technical support.',
        icon: '📦'
    }
];

const Services = () => {
    return (
        <section className="services section">
            <div className="container">
                <div className="services-header">
                    <h2>What We Do</h2>
                    <p>Specialized engineering solutions for industrial rotating machinery</p>
                </div>

                <div className="services-grid">
                    {services.map((service, i) => (
                        <div key={i} className="service-card">
                            <span className="service-icon">{service.icon}</span>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="services-cta">
                    <Link to="/services" className="btn btn-outline">
                        View All Services →
                    </Link>
                </div>
            </div>

            <style>{`
                .services {
                    background: var(--color-gray-50);
                }

                .services-header {
                    text-align: center;
                    margin-bottom: var(--space-12);
                }

                .services-header h2 {
                    margin-bottom: var(--space-2);
                }

                .services-header p {
                    font-size: 1.0625rem;
                }

                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: var(--space-6);
                    margin-bottom: var(--space-12);
                }

                .service-card {
                    background: var(--color-white);
                    padding: var(--space-8);
                    border: 1px solid var(--color-gray-200);
                    transition: var(--transition);
                }

                .service-card:hover {
                    border-color: var(--color-accent);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                }

                .service-icon {
                    font-size: 2rem;
                    display: block;
                    margin-bottom: var(--space-4);
                }

                .service-card h3 {
                    font-size: 1.125rem;
                    margin-bottom: var(--space-3);
                }

                .service-card p {
                    font-size: 0.9375rem;
                    line-height: 1.6;
                }

                .services-cta {
                    text-align: center;
                }

                @media (max-width: 768px) {
                    .services-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default Services;
