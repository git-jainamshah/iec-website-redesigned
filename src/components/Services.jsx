import React from 'react';
import { Link } from 'react-router-dom';

const services = [
    {
        id: 'motors',
        number: '01',
        title: 'Motors & Generators',
        capacity: 'Up to 250MW',
        desc: 'Complete repair and rewinding for HV motors, generators, alternators, and DC machines.',
        examples: ['Stator Rewinding', 'Rotor Repair', 'Core Restacking', 'VPI Treatment'],
    },
    {
        id: 'pumps',
        number: '02',
        title: 'Industrial Pumps',
        capacity: 'All Capacities',
        desc: 'Comprehensive maintenance, repair, and refurbishment for all pump types.',
        examples: ['Centrifugal', 'Submersible', 'Vertical Turbine', 'Boiler Feed'],
    },
    {
        id: 'spares',
        number: '03',
        title: 'Spare Parts',
        capacity: 'OEM Quality',
        desc: 'Genuine components with complete technical support and quick delivery.',
        examples: ['Bearings', 'Seals', 'Impellers', 'Windings'],
    }
];

const Services = () => {
    return (
        <section className="services section">
            <div className="container">
                {/* Header */}
                <div className="services-header">
                    <div className="services-header-left">
                        <span className="label">Our Expertise</span>
                        <h2 className="services-title">
                            What we <em>repair.</em>
                        </h2>
                    </div>
                    <div className="services-header-right">
                        <p>Specialized repair services for India's most critical industrial equipment.</p>
                        <Link to="/contact" className="services-main-cta">
                            Get a Quote
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Services List */}
                <div className="services-list">
                    {services.map((service, idx) => (
                        <div key={service.id} className="service-row">
                            <div className="service-number">{service.number}</div>
                            
                            <div className="service-main">
                                <div className="service-title-group">
                                    <h3 className="service-title">{service.title}</h3>
                                    <span className="service-capacity">{service.capacity}</span>
                                </div>
                                <p className="service-desc">{service.desc}</p>
                            </div>

                            <div className="service-examples">
                                {service.examples.map((example, i) => (
                                    <span key={i} className="example-tag">{example}</span>
                                ))}
                            </div>

                            <Link to="/contact" className="service-cta">
                                Request Service
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="services-footer">
                    <p>Not sure what you need?</p>
                    <Link to="/contact" className="footer-cta">
                        Talk to an Engineer
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                    </Link>
                </div>
            </div>

            <style>{`
                .services {
                    background: var(--color-white);
                    padding: var(--space-5xl) 0;
                }

                /* Header */
                .services-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    gap: var(--space-3xl);
                    margin-bottom: var(--space-4xl);
                    padding-bottom: var(--space-2xl);
                    border-bottom: 1px solid var(--color-border);
                }

                .services-header-left {
                    flex: 1;
                }

                .services-header-left .label {
                    display: block;
                    margin-bottom: var(--space-sm);
                }

                .services-title {
                    font-family: var(--font-serif);
                    font-size: clamp(2rem, 4vw, 2.75rem);
                    font-weight: 400;
                    line-height: 1.1;
                    color: var(--color-text);
                }

                .services-title em {
                    font-style: italic;
                    color: var(--color-accent);
                }

                .services-header-right {
                    max-width: 320px;
                    text-align: right;
                }

                .services-header-right p {
                    font-size: 0.9375rem;
                    line-height: 1.6;
                    color: var(--color-text-light);
                    margin-bottom: var(--space-lg);
                }

                .services-main-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: var(--space-sm);
                    padding: 12px 24px;
                    font-size: 0.8125rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--color-white);
                    background: var(--color-accent);
                    border-radius: 4px;
                    transition: all 0.3s var(--ease-out);
                }

                .services-main-cta:hover {
                    background: var(--color-accent-hover);
                    gap: var(--space-md);
                }

                /* Services List */
                .services-list {
                    display: flex;
                    flex-direction: column;
                }

                .service-row {
                    display: grid;
                    grid-template-columns: 60px 1.2fr 1fr auto;
                    gap: var(--space-xl);
                    align-items: center;
                    padding: var(--space-xl) 0;
                    border-bottom: 1px solid var(--color-border);
                    transition: all 0.3s var(--ease-out);
                }

                .service-row:hover {
                    background: var(--color-light);
                    padding-left: var(--space-lg);
                    padding-right: var(--space-lg);
                    margin-left: calc(-1 * var(--space-lg));
                    margin-right: calc(-1 * var(--space-lg));
                }

                .service-number {
                    font-family: var(--font-serif);
                    font-size: 1.5rem;
                    font-weight: 400;
                    color: var(--color-border);
                }

                .service-row:hover .service-number {
                    color: var(--color-accent);
                }

                .service-main {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-xs);
                }

                .service-title-group {
                    display: flex;
                    align-items: baseline;
                    gap: var(--space-md);
                }

                .service-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: var(--color-text);
                }

                .service-capacity {
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: var(--color-accent);
                    padding: 3px 8px;
                    background: rgba(200, 16, 46, 0.08);
                    border-radius: 3px;
                }

                .service-desc {
                    font-size: 0.875rem;
                    line-height: 1.5;
                    color: var(--color-text-light);
                    max-width: 400px;
                }

                .service-examples {
                    display: flex;
                    flex-wrap: wrap;
                    gap: var(--space-xs);
                }

                .example-tag {
                    font-size: 0.6875rem;
                    font-weight: 500;
                    color: var(--color-muted);
                    padding: 4px 10px;
                    background: var(--color-light);
                    border-radius: 100px;
                    transition: all 0.2s;
                }

                .service-row:hover .example-tag {
                    background: var(--color-white);
                }

                .service-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: var(--space-xs);
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--color-text);
                    padding: 10px 16px;
                    border: 1px solid var(--color-border);
                    border-radius: 4px;
                    white-space: nowrap;
                    transition: all 0.3s var(--ease-out);
                }

                .service-cta:hover {
                    color: var(--color-white);
                    background: var(--color-text);
                    border-color: var(--color-text);
                }

                .service-cta svg {
                    transition: transform 0.3s;
                }

                .service-cta:hover svg {
                    transform: translateX(3px);
                }

                /* Footer CTA */
                .services-footer {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: var(--space-lg);
                    margin-top: var(--space-3xl);
                    padding-top: var(--space-2xl);
                }

                .services-footer p {
                    font-size: 0.875rem;
                    color: var(--color-muted);
                }

                .footer-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: var(--space-sm);
                    font-size: 0.8125rem;
                    font-weight: 600;
                    color: var(--color-accent);
                    transition: all 0.2s;
                }

                .footer-cta:hover {
                    gap: var(--space-md);
                }

                /* Responsive */
                @media (max-width: 1024px) {
                    .services-header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: var(--space-xl);
                    }

                    .services-header-right {
                        text-align: left;
                        max-width: none;
                    }

                    .service-row {
                        grid-template-columns: 1fr;
                        gap: var(--space-md);
                        padding: var(--space-xl) 0;
                    }

                    .service-row:hover {
                        padding-left: var(--space-md);
                        padding-right: var(--space-md);
                        margin-left: calc(-1 * var(--space-md));
                        margin-right: calc(-1 * var(--space-md));
                    }

                    .service-number {
                        font-size: 1.125rem;
                    }

                    .service-cta {
                        justify-self: start;
                    }
                }

                @media (max-width: 600px) {
                    .services {
                        padding: var(--space-3xl) 0;
                    }

                    .services-footer {
                        flex-direction: column;
                        gap: var(--space-md);
                    }
                }
            `}</style>
        </section>
    );
};

export default Services;
