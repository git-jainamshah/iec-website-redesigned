import React from 'react';
import PageHero from '../components/PageHero';

const stats = [
    { value: '300K', unit: 'sq ft', label: 'Total land area', sub: 'Ranoli & Raika works' },
    { value: '75K', unit: 'sq ft', label: 'Shop floor area', sub: 'Dedicated electrical & mechanical' },
    { value: '300', unit: 'T', label: 'Max crane capacity', sub: 'Overhead crane systems' },
    { value: '20', unit: 'MW', label: 'No-load testing', sub: 'Generator & motor test beds' },
    { value: '5', unit: 'MW', label: 'Captive power', sub: 'Uninterrupted operations' },
    { value: '27', unit: '+', label: 'Vehicle fleet', sub: 'Transport & field service' },
];

const facilities = [
    {
        num: '01',
        title: 'HV Coil Manufacturing',
        desc: 'In-house manufacturing of high-voltage coils for stator and field rewinding, supporting motors and generators up to 13.8 kV.',
    },
    {
        num: '02',
        title: 'Heating Ovens',
        desc: '3 industrial ovens with a maximum volume of 3,000 cubic ft for VPI curing and insulation heat treatment at precise temperatures.',
    },
    {
        num: '03',
        title: 'Mechanical Workshop',
        desc: 'Fully equipped workshop for shaft fabrication, bearing housing repair, commutator work, and bespoke spares fabrication.',
    },
    {
        num: '04',
        title: 'Dynamic Balancing',
        desc: 'Balancing machines rated up to 25-ton and 45-ton rotor capacity for precision rotor and shaft balancing to G-grade standards.',
    },
    {
        num: '05',
        title: 'Testing & Control Room',
        desc: 'Centralised testing bed for no-load testing up to 20 MW, full-load testing up to 5 MW, and DC motor testing with data logging.',
    },
    {
        num: '06',
        title: 'Crane System',
        desc: 'Heavy-duty overhead cranes from 10 to 300 ton capacity for handling large rotors, stators and generator frames with full safety compliance.',
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

            {/* ── Stats — dark, flows from PageHero ──────────── */}
            <section className="ip-stats-section">
                <div className="container">
                    <div className="ip-stats-grid">
                        {stats.map((s, i) => (
                            <div className="ip-stat" key={i}>
                                <div className="ip-stat-num">
                                    <span className="ip-stat-val">{s.value}</span>
                                    <span className="ip-stat-unit">{s.unit}</span>
                                </div>
                                <span className="ip-stat-label">{s.label}</span>
                                <span className="ip-stat-sub">{s.sub}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Facilities — light ───────────────────────────── */}
            <section className="ip-facilities-section">
                <div className="container">
                    <div className="ip-facilities-header">
                        <p className="ip-fac-eyebrow">Capabilities</p>
                        <h2 className="ip-fac-heading">Our Facilities</h2>
                        <p className="ip-fac-sub">
                            Every major function is handled in-house — no outsourcing, no delays,
                            no compromises on quality or traceability.
                        </p>
                    </div>
                    <div className="ip-fac-grid">
                        {facilities.map((f) => (
                            <div className="ip-fac-card" key={f.num}>
                                <span className="ip-fac-num">{f.num}</span>
                                <h3 className="ip-fac-title">{f.title}</h3>
                                <p className="ip-fac-desc">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`

                .infra-page { min-height: 100vh; }

                /* ── Stats section (dark) ─────────────────────── */
                .ip-stats-section {
                    background: var(--color-primary);
                    padding: var(--space-5xl) 0;
                    border-top: 1px solid rgba(255,255,255,0.06);
                }

                .ip-stats-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    border-left: 1px solid rgba(255,255,255,0.07);
                }

                .ip-stat {
                    padding: var(--space-3xl) var(--space-2xl);
                    border-right: 1px solid rgba(255,255,255,0.07);
                    border-bottom: 1px solid rgba(255,255,255,0.07);
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                    transition: background 0.2s;
                }

                .ip-stat:hover {
                    background: rgba(255,255,255,0.02);
                }

                .ip-stat-num {
                    display: flex;
                    align-items: baseline;
                    gap: 5px;
                    line-height: 1;
                    margin-bottom: var(--space-sm);
                }

                .ip-stat-val {
                    font-family: var(--font-mono);
                    font-size: clamp(2.75rem, 5vw, 4.5rem);
                    font-weight: 700;
                    color: var(--color-white);
                    letter-spacing: -0.04em;
                }

                .ip-stat-unit {
                    font-family: var(--font-mono);
                    font-size: clamp(1.1rem, 2vw, 1.75rem);
                    font-weight: 600;
                    color: var(--color-accent);
                    letter-spacing: -0.01em;
                }

                .ip-stat-label {
                    font-size: 0.8125rem;
                    font-weight: 600;
                    color: rgba(255,255,255,0.75);
                    text-transform: capitalize;
                    letter-spacing: -0.01em;
                }

                .ip-stat-sub {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: rgba(255,255,255,0.25);
                }

                /* ── Facilities section (light) ───────────────── */
                .ip-facilities-section {
                    background: var(--color-white);
                    padding: var(--space-5xl) 0;
                }

                .ip-facilities-header {
                    margin-bottom: var(--space-4xl);
                    max-width: 680px;
                }

                .ip-fac-eyebrow {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    color: var(--color-accent);
                    margin-bottom: var(--space-md);
                }

                .ip-fac-heading {
                    font-family: var(--font-serif);
                    font-size: clamp(2rem, 3.5vw, 2.75rem);
                    font-weight: 700;
                    color: var(--color-text);
                    letter-spacing: -0.025em;
                    line-height: 1.1;
                    margin-bottom: var(--space-md);
                }

                .ip-fac-sub {
                    font-size: 1.0625rem;
                    line-height: 1.7;
                    color: var(--color-text-light);
                }

                .ip-fac-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    border-top: 1px solid var(--color-border);
                    border-left: 1px solid var(--color-border);
                }

                .ip-fac-card {
                    padding: var(--space-3xl) var(--space-2xl);
                    border-right: 1px solid var(--color-border);
                    border-bottom: 1px solid var(--color-border);
                    transition: background 0.2s;
                    position: relative;
                }

                .ip-fac-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: var(--color-accent);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.3s var(--ease-out);
                }

                .ip-fac-card:hover { background: rgba(200,16,46,0.02); }
                .ip-fac-card:hover::before { transform: scaleX(1); }

                .ip-fac-num {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 600;
                    color: var(--color-accent);
                    letter-spacing: 0.1em;
                    display: block;
                    margin-bottom: var(--space-lg);
                }

                .ip-fac-title {
                    font-family: var(--font-serif);
                    font-size: 1.1875rem;
                    font-weight: 700;
                    color: var(--color-text);
                    letter-spacing: -0.02em;
                    line-height: 1.2;
                    margin-bottom: var(--space-md);
                }

                .ip-fac-desc {
                    font-size: 0.9375rem;
                    line-height: 1.72;
                    color: var(--color-text-light);
                }

                /* ── Responsive ──────────────────────────────── */
                @media (max-width: 1024px) {
                    .ip-stats-grid { grid-template-columns: repeat(2, 1fr); }
                    .ip-fac-grid { grid-template-columns: repeat(2, 1fr); }
                }

                @media (max-width: 640px) {
                    .ip-stats-grid { grid-template-columns: 1fr; }
                    .ip-fac-grid { grid-template-columns: 1fr; }
                    .ip-stat { padding: var(--space-2xl) var(--space-lg); }
                }

            `}</style>
        </div>
    );
};

export default InfrastructurePage;
