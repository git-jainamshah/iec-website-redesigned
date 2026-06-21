import React from 'react';
import PageHero from '../components/PageHero';

const stats = [
    { value: '300,000', label: 'Sq.Ft Total Land' },
    { value: '75,000', label: 'Sq.Ft Shop Floor' },
    { value: '300 Ton', label: 'Crane Capacity' },
    { value: '20 MW', label: 'No-Load Testing Capacity' },
    { value: '5 MW', label: 'Captive Power Generation' },
    { value: '27', label: 'Vehicle Fleet' },
];

const facilities = [
    {
        title: 'HV Coil Manufacturing',
        desc: 'In-house manufacturing of high-voltage coils for stator and field rewinding, supporting motors and generators up to 13.8 kV.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
    },
    {
        title: 'Heating Ovens',
        desc: '3 industrial ovens, with a maximum volume of 3,000 cubic ft., for VPI curing and insulation heat treatment.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2v10m0 0l3-3m-3 3l-3-3M5 21h14a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: 'Mechanical Workshop',
        desc: 'Fully equipped workshop for shaft fabrication, bearing housing repair, commutator work and spares fabrication.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
            </svg>
        ),
    },
    {
        title: 'Dynamic Balancing',
        desc: 'Balancing machines rated up to 25-ton and 45-ton rotor capacity for precision rotor and shaft balancing.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" />
            </svg>
        ),
    },
    {
        title: 'Testing & Control Room',
        desc: 'Centralized testing bed for no-load testing up to 20 MW, full-load testing up to 5 MW, and DC motor testing.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 3v7.5L6 18h12l-3-7.5V3M9 3h6M12 7h.01" />
            </svg>
        ),
    },
    {
        title: 'Crane System',
        desc: 'Heavy-duty overhead cranes from 10 to 300 ton capacity for handling large rotors, stators and generator frames.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 3h-8l-2 4h12l-2-4z" />
            </svg>
        ),
    },
];

const InfrastructurePage = () => {
    return (
        <div className="infra-page">
            <PageHero
                label="Facilities"
                title="Infrastructure"
                subtitle="300,000 sq.ft of works across Ranoli and Raika, built for high-voltage repair at scale."
                breadcrumbs={[{ label: 'Infrastructure' }]}
            />

            {/* Key Stats */}
            <section className="section">
                <div className="container">
                    <div className="infra-stats">
                        {stats.map((stat, i) => (
                            <div key={i} className="infra-stat-card" data-aos="fade-up" data-aos-delay={i * 80}>
                                <span className="infra-stat-value">{stat.value}</span>
                                <span className="infra-stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facilities */}
            <section className="section bg-light">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
                        <span className="label text-accent">Capabilities</span>
                        <h2 style={{ marginTop: 'var(--space-md)' }}>Our Facilities</h2>
                    </div>
                    <div className="facilities-grid">
                        {facilities.map((facility, i) => (
                            <div key={i} className="facility-card" data-aos="fade-up" data-aos-delay={i * 80}>
                                <div className="facility-icon">{facility.icon}</div>
                                <h3>{facility.title}</h3>
                                <p>{facility.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                .infra-page {
                    min-height: 100vh;
                }

                /* Stats */
                .infra-stats {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: var(--space-lg);
                }

                .infra-stat-card {
                    text-align: center;
                    padding: var(--space-2xl) var(--space-xl);
                    background: var(--color-white);
                    border-top: 3px solid var(--color-accent);
                    box-shadow: var(--shadow-sm);
                    transition: all 0.3s var(--ease-out);
                }

                .infra-stat-card:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-md);
                }

                .infra-stat-value {
                    display: block;
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: var(--color-text);
                    margin-bottom: 4px;
                    font-family: var(--font-serif);
                }

                .infra-stat-label {
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: var(--color-muted);
                }

                /* Facilities */
                .facilities-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: var(--space-xl);
                }

                .facility-card {
                    padding: var(--space-2xl);
                    background: var(--color-white);
                    border: 1px solid var(--color-border);
                    border-radius: 4px;
                    transition: all 0.3s var(--ease-out);
                }

                .facility-card:hover {
                    border-color: var(--color-accent);
                    box-shadow: var(--shadow-md);
                    transform: translateY(-2px);
                }

                .facility-icon {
                    width: 44px;
                    height: 44px;
                    border-radius: 8px;
                    background: rgba(200, 16, 46, 0.06);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-accent);
                    margin-bottom: var(--space-lg);
                }

                .facility-card h3 {
                    font-size: 1.0625rem;
                    font-weight: 600;
                    margin-bottom: var(--space-sm);
                }

                .facility-card p {
                    font-size: 0.9375rem;
                    line-height: 1.65;
                }

                @media (max-width: 900px) {
                    .infra-stats {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .facilities-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 600px) {
                    .infra-stats {
                        grid-template-columns: 1fr;
                    }

                    .facilities-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default InfrastructurePage;
