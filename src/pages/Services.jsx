import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const services = [
    {
        id: 'motors',
        title: 'Motor, Generator, Alternator & DC Motor Repair',
        desc: 'Rewinding and repair of AC induction, synchronous, and wound-rotor/slip-ring motors up to 20,000 HP and 13.8 kV, plus hydro, turbo, gas and wind generators and DC motors. Full-load testing up to 5 MW, no-load testing up to 20 MW.',
        features: [
            'VPI (Vacuum Pressure Impregnation)',
            'Rotor Rebarring / Re-caging',
            'Synchronous Field Coil Rewinding',
            'Pole Piece Rebuilding',
            'Stator Core Restacking',
            'Thermal Imaging & Surge Testing',
            'Dielectric & Hi-Pot Testing'
        ]
    },
    {
        id: 'mechanical',
        title: 'Mechanical Repair',
        desc: 'Precision mechanical rebuild work on the rotating and structural components that keep a machine in tolerance — from shafts to bearing housings to commutators.',
        features: [
            'Shaft Fabrication & Replacement',
            'Shaft Metalizing',
            'Bearing Housing Repair & Manufacturing',
            'Stator & Rotor Core Repair',
            'Commutator Repair & Replacement',
            'Sleeve Bearing Re-Babbitting',
            'Spares Fabrication'
        ]
    },
    {
        id: 'pumps',
        title: 'Pumps',
        desc: 'Repair and overhaul of industrial pumps, including high-voltage cryogenic submersible pumps such as Ebara-make 6.6 kV units.',
        features: [
            'Cryogenic Submersible Pumps',
            'HV Pump Rewinding',
            'Impeller & Seal Service',
            'Full Testing & Commissioning'
        ]
    },
    {
        id: 'spares',
        title: 'Spares Fabrication',
        desc: 'In-house fabrication of critical rotating-machine spares for fast turnaround on failures and planned overhauls.',
        features: [
            'Rotor Shafts',
            'End Shield Covers',
            'Bearing Housings & Covers',
            'Heat Exchangers',
            'Cooling Fans, Fan Covers & Grills',
            'Commutators'
        ]
    },
    {
        id: 'maintenance',
        title: 'Preventive Maintenance / Overhauling',
        desc: 'Scheduled maintenance and overhauling at IEC’s Vadodara works or in-situ at the client site, sized to the plant’s outage window.',
        features: [
            'On-Site & In-Works Service',
            'Condition Monitoring',
            'Planned Outage Overhauls',
            'Emergency Breakdown Response'
        ]
    }
];

const ServicesPage = () => {
    return (
        <div className="services-page">
            <PageHero
                label="What We Do"
                title="Our Services"
                subtitle="Heavy industrial repair and rewinding for high-voltage motors, generators, alternators, DC motors and rotating-machine spares."
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
