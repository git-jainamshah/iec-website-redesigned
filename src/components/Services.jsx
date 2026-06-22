import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
    {
        id: '01',
        title: 'Motors, Generators & Alternators',
        subtitle: 'Electrical Repair & Rewinding',
        capacity: 'Up to 20,000 HP · 13.8 kV',
        desc: 'Complete rewinding and repair for AC induction motors, synchronous motors, wound-rotor/slip-ring machines, hydro/turbo/gas generators, and DC machines. VPI, rotor rebarring, field coil rewinding, stator core restacking. We handle the machinery that powers India.',
        specs: [
            { label: 'Max Power', value: '20,000 HP' },
            { label: 'Max Voltage', value: '13.8 kV' },
            { label: 'Testing', value: '20 MW' },
        ],
        tags: ['Stator Rewinding', 'VPI Treatment', 'Rotor Rebarring', 'HV Coil Making', 'Hi-Pot Testing'],
    },
    {
        id: '02',
        title: 'Mechanical Repair',
        subtitle: 'Precision Machine Work',
        capacity: 'Shafts · Bearings · Commutators',
        desc: 'Precision mechanical rebuild: shaft fabrication and replacement, shaft metalizing, bearing housing repair and manufacturing, commutator service, sleeve bearing re-babbitting, rotor core repair, and all critical rotating machine spares fabricated in-house.',
        specs: [
            { label: 'Crane Capacity', value: '300 T' },
            { label: 'Balancing', value: '45 T Rotor' },
            { label: 'Shop Floor', value: '75,000 sqft' },
        ],
        tags: ['Shaft Fabrication', 'Bearing Housings', 'Commutator Service', 'Sleeve Re-babbitting', 'Spares Fabrication'],
    },
    {
        id: '03',
        title: 'Cryogenic & Industrial Pumps',
        subtitle: 'Pump Overhaul & Repair',
        capacity: '6.6 kV Cryogenic Submersible',
        desc: 'Repair and overhaul for industrial pumps including specialist high-voltage cryogenic submersible pumps. Certified in Ebara-make 6.6 kV cryogenic units used in LNG terminals and petrochemical applications. One of very few facilities in India with this capability.',
        specs: [
            { label: 'Cryogenic Rating', value: '6.6 kV' },
            { label: 'Type', value: 'Submersible' },
            { label: 'Application', value: 'LNG / Petrochem' },
        ],
        tags: ['Cryogenic Pumps', 'LNG Applications', 'Impeller Service', 'Seal Replacement'],
    },
    {
        id: '04',
        title: 'Spares Fabrication',
        subtitle: 'In-House Manufactured Components',
        capacity: 'Zero Outsourcing. Zero Delays.',
        desc: 'Full in-house fabrication of rotor shafts, end shield covers, bearing housings, heat exchangers, cooling fans, commutators, and all related components. Our machining floor operates from the same site as the repair bay, meaning faster turnaround and complete quality control.',
        specs: [
            { label: 'Ovens', value: '3 Units' },
            { label: 'Oven Volume', value: '3,000 cu.ft' },
            { label: 'Captive Power', value: '5 MW' },
        ],
        tags: ['Rotor Shafts', 'End Shields', 'Heat Exchangers', 'Cooling Fans', 'Commutators'],
    },
    {
        id: '05',
        title: 'Preventive Maintenance & Overhauling',
        subtitle: 'Workshop & In-Situ Services',
        capacity: 'Pan-India · Emergency Response',
        desc: 'Scheduled preventive maintenance, complete machine overhauling, and emergency breakdown response. At our Vadodara works or in-situ at your plant anywhere in India. 19 transport vehicles. 8 specialized crew and testing vehicles. We come to you when it counts most.',
        specs: [
            { label: 'Fleet', value: '27 Vehicles' },
            { label: 'Coverage', value: 'Pan-India' },
            { label: 'Response', value: 'Emergency 24/7' },
        ],
        tags: ['Thermal Imaging', 'Dielectric Testing', 'Surge Testing', 'Hi-Pot Testing', 'Emergency Callout'],
    },
];

const Services = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className="services-section">
            {/* Section Header */}
            <div className="services-header" data-aos="fade-up">
                <div className="container">
                    <div className="services-header-inner">
                        <span className="services-eyebrow">Our Expertise</span>
                        <h2 className="services-main-title display-title">
                            What we <em>repair.</em>
                        </h2>
                        <p className="services-subtitle">
                            Five core service lines. One workshop complex.
                            Every capability verified and in-house.
                        </p>
                    </div>
                </div>
            </div>

            {/* Service Lines */}
            <div className="services-list">
                <div className="container">
                    {services.map((service, idx) => (
                        <div
                            key={service.id}
                            className={`service-row ${hoveredId === service.id ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredId(service.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {/* Number */}
                            <div className="service-num">
                                <span>{service.id}</span>
                            </div>

                            {/* Main Content */}
                            <div className="service-body">
                                <h3 className="service-name">{service.title}</h3>
                                <p className="service-desc">{service.desc}</p>
                                <div className="service-tags">
                                    {service.tags.map(tag => (
                                        <span key={tag} className="service-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Specs + CTA */}
                            <div className="service-aside">
                                <div className="service-specs">
                                    {service.specs.map(spec => (
                                        <div key={spec.label} className="spec-item">
                                            <span className="spec-value">{spec.value}</span>
                                            <span className="spec-label">{spec.label}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link to="/services" className="service-cta">
                                    <span>Explore Service</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer CTA */}
            <div className="services-footer" data-aos="fade-up">
                <div className="container">
                    <div className="services-footer-inner">
                        <div className="services-footer-text">
                            <h3>Not sure what you need?</h3>
                            <p>Our engineers are ready to assess your machinery and provide a detailed repair scope.</p>
                        </div>
                        <div className="services-footer-actions">
                            <Link to="/contact" className="btn btn-primary">
                                Connect Now
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <a href="tel:+919824214839" className="services-phone">
                                +91 98242 14839
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .services-section {
                    background: var(--color-white);
                    padding: var(--space-5xl) 0 0;
                }

                /* ── Header ── */
                .services-header {
                    padding-bottom: var(--space-3xl);
                    border-bottom: 1px solid var(--color-border);
                }

                .services-header-inner {
                    display: grid;
                    grid-template-columns: auto 1fr auto;
                    align-items: end;
                    gap: var(--space-xl);
                }

                .services-eyebrow {
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    color: var(--color-muted);
                    writing-mode: vertical-rl;
                    transform: rotate(180deg);
                    align-self: center;
                }

                .services-main-title {
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 400;
                    color: var(--color-text);
                    line-height: 1;
                    letter-spacing: -0.02em;
                }

                .services-main-title em {
                    color: var(--color-accent);
                    font-style: italic;
                }

                .services-subtitle {
                    font-size: 0.9375rem;
                    color: var(--color-muted);
                    line-height: 1.6;
                    max-width: 260px;
                    text-align: right;
                    align-self: end;
                }

                /* ── Service Rows ── */
                .services-list {
                    padding: 0;
                }

                .service-row {
                    display: grid;
                    grid-template-columns: 80px 1fr 280px;
                    gap: var(--space-2xl);
                    padding: var(--space-2xl) 0;
                    border-bottom: 1px solid var(--color-border);
                    transition: background 0.25s var(--ease-out);
                    cursor: default;
                    align-items: start;
                }

                .service-row:hover {
                    background: var(--color-cream);
                }

                /* Number */
                .service-num {
                    display: flex;
                    align-items: flex-start;
                    padding-top: 6px;
                }

                .service-num span {
                    font-family: var(--font-mono);
                    font-size: 0.8125rem;
                    font-weight: 600;
                    color: var(--color-accent);
                    letter-spacing: 0.04em;
                    transition: transform 0.3s var(--ease-out);
                }

                .service-row:hover .service-num span {
                    transform: scale(1.1);
                }

                /* Body */
                .service-name {
                    font-family: var(--font-serif);
                    font-size: clamp(1.375rem, 2.5vw, 1.75rem);
                    font-weight: 500;
                    color: var(--color-text);
                    letter-spacing: -0.01em;
                    margin-bottom: var(--space-md);
                    transition: color 0.2s;
                    line-height: 1.2;
                }

                .service-row:hover .service-name {
                    color: var(--color-accent);
                }

                .service-desc {
                    font-size: 0.9375rem;
                    line-height: 1.75;
                    color: var(--color-text-light);
                    margin-bottom: var(--space-lg);
                    max-width: 600px;
                }

                .service-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                }

                .service-tag {
                    font-size: 0.6875rem;
                    font-weight: 500;
                    color: var(--color-text-light);
                    background: var(--color-light);
                    border: 1px solid var(--color-border);
                    padding: 4px 10px;
                    border-radius: 2px;
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                    transition: all 0.2s;
                }

                .service-row:hover .service-tag {
                    border-color: rgba(200, 16, 46, 0.2);
                    color: var(--color-text);
                }

                /* Aside */
                .service-aside {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-xl);
                    align-items: flex-end;
                    padding-top: 6px;
                }

                .service-specs {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-md);
                    width: 100%;
                }

                .spec-item {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                    padding-bottom: var(--space-md);
                    border-bottom: 1px solid var(--color-border);
                }

                .spec-item:last-child {
                    border-bottom: none;
                    padding-bottom: 0;
                }

                .spec-value {
                    font-family: var(--font-mono);
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: var(--color-text);
                    letter-spacing: -0.01em;
                    line-height: 1;
                }

                .spec-label {
                    font-size: 0.625rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-muted);
                }

                .service-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-text);
                    padding-bottom: 2px;
                    border-bottom: 1px solid var(--color-border);
                    transition: all 0.25s var(--ease-out);
                    white-space: nowrap;
                }

                .service-cta:hover {
                    color: var(--color-accent);
                    border-color: var(--color-accent);
                    gap: 12px;
                }

                .service-cta svg {
                    transition: transform 0.25s var(--ease-out);
                    flex-shrink: 0;
                }

                .service-cta:hover svg {
                    transform: translateX(4px);
                }

                /* ── Footer CTA ── */
                .services-footer {
                    background: var(--color-primary);
                    padding: var(--space-3xl) 0;
                    margin-top: 0;
                }

                .services-footer-inner {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: var(--space-3xl);
                }

                .services-footer-text h3 {
                    font-family: var(--font-serif);
                    font-size: clamp(1.5rem, 3vw, 2.25rem);
                    font-weight: 400;
                    color: var(--color-white);
                    letter-spacing: -0.01em;
                    margin-bottom: var(--space-sm);
                }

                .services-footer-text p {
                    font-size: 0.9375rem;
                    color: rgba(255, 255, 255, 0.6);
                    line-height: 1.6;
                }

                .services-footer-actions {
                    display: flex;
                    align-items: center;
                    gap: var(--space-xl);
                    flex-shrink: 0;
                }

                .services-phone {
                    font-family: var(--font-mono);
                    font-size: 0.9375rem;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.8);
                    letter-spacing: 0.02em;
                    transition: color 0.2s;
                }

                .services-phone:hover {
                    color: var(--color-accent);
                }

                /* ── Tablet ── */
                @media (max-width: 1024px) {
                    .services-header-inner {
                        grid-template-columns: 1fr;
                        gap: var(--space-md);
                    }

                    .services-eyebrow {
                        writing-mode: horizontal-tb;
                        transform: none;
                    }

                    .services-subtitle {
                        text-align: left;
                        max-width: 100%;
                    }

                    .service-row {
                        grid-template-columns: 48px 1fr;
                        grid-template-rows: auto auto;
                    }

                    .service-aside {
                        grid-column: 2;
                        align-items: flex-start;
                        flex-direction: row;
                        flex-wrap: wrap;
                    }

                    .service-specs {
                        flex-direction: row;
                        flex-wrap: wrap;
                        gap: var(--space-lg);
                        width: auto;
                    }

                    .spec-item {
                        border-bottom: none;
                        padding-bottom: 0;
                        padding-right: var(--space-lg);
                        border-right: 1px solid var(--color-border);
                    }

                    .spec-item:last-child {
                        border-right: none;
                    }
                }

                @media (max-width: 768px) {
                    .service-row {
                        grid-template-columns: 1fr;
                        gap: var(--space-md);
                    }

                    .service-num {
                        padding-top: 0;
                    }

                    .service-aside {
                        grid-column: 1;
                        flex-direction: column;
                    }

                    .service-specs {
                        flex-direction: row;
                    }

                    .services-footer-inner {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .services-footer-actions {
                        flex-direction: column;
                        align-items: flex-start;
                        width: 100%;
                    }

                    .services-footer-actions .btn {
                        width: 100%;
                        justify-content: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default Services;
