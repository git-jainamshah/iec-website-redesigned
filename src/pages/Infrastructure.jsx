import React from 'react';
import PageHero from '../components/PageHero';
import heroBg from '../assets/iec-taping-room-wide.jpg';
import imgCoilWorkers from '../assets/iec-coil-workers.jpg';
import imgVpiTank from '../assets/iec-vpi-tank.jpg';
import imgLaserCnc from '../assets/iec-laser-cnc.jpg';
import imgStatorFrame from '../assets/iec-stator-frame.jpg';
import imgGeneratorWorkshop from '../assets/iec-generator-workshop.jpg';
import imgRotorCrane from '../assets/iec-rotor-crane.jpg';

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
        img: imgCoilWorkers,
        title: 'HV Coil Manufacturing',
        desc: 'In-house manufacturing of high-voltage coils for stator and field rewinding, supporting motors and generators up to 13.8 kV.',
    },
    {
        num: '02',
        img: imgVpiTank,
        title: 'VPI & Heating Ovens',
        desc: '3 industrial ovens with 3,000 cu ft capacity for VPI curing and insulation heat treatment, with dedicated impregnation tank.',
    },
    {
        num: '03',
        img: imgLaserCnc,
        title: 'Mechanical Workshop',
        desc: 'Fully equipped workshop with CNC, laser cutting, and precision machining for shaft fabrication, commutator work, and spares.',
    },
    {
        num: '04',
        img: imgStatorFrame,
        title: 'Dynamic Balancing',
        desc: 'Balancing machines rated up to 25-ton and 45-ton rotor capacity for precision rotor and shaft balancing to G-grade standards.',
    },
    {
        num: '05',
        img: imgGeneratorWorkshop,
        title: 'Testing & Control Room',
        desc: 'Centralised testing bed for no-load testing up to 20 MW, full-load testing up to 5 MW, and DC motor testing with data logging.',
    },
    {
        num: '06',
        img: imgRotorCrane,
        title: 'Crane System',
        desc: 'Heavy-duty overhead cranes from 10 to 300 ton capacity for handling large rotors, stators and generator frames safely.',
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
                bgImage={heroBg}
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
                                {f.img && (
                                    <div className="ip-fac-img">
                                        <img src={f.img} alt={f.title} />
                                    </div>
                                )}
                                <div className="ip-fac-body">
                                    <span className="ip-fac-num">{f.num}</span>
                                    <h3 className="ip-fac-title">{f.title}</h3>
                                    <p className="ip-fac-desc">{f.desc}</p>
                                </div>
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
                    font-family: var(--font-display);
                    font-size: clamp(3.5rem, 6vw, 5.5rem);
                    font-weight: 400;
                    color: var(--color-white);
                    letter-spacing: 0.02em;
                    text-transform: uppercase;
                    line-height: 1;
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
                    border-right: 1px solid var(--color-border);
                    border-bottom: 1px solid var(--color-border);
                    transition: box-shadow 0.2s;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }

                .ip-fac-card:hover { box-shadow: 0 4px 24px rgba(0,0,0,0.08); }

                .ip-fac-img {
                    width: 100%;
                    height: 200px;
                    overflow: hidden;
                    flex-shrink: 0;
                }

                .ip-fac-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: saturate(0.85) brightness(0.9);
                    transition: transform 0.5s var(--ease-out), filter 0.3s;
                    display: block;
                }

                .ip-fac-card:hover .ip-fac-img img {
                    transform: scale(1.05);
                    filter: saturate(1) brightness(0.95);
                }

                .ip-fac-body {
                    padding: var(--space-xl) var(--space-xl);
                    position: relative;
                    flex: 1;
                }

                .ip-fac-body::before {
                    content: '';
                    position: absolute;
                    top: 0; left: var(--space-xl); right: var(--space-xl);
                    height: 2px;
                    background: var(--color-accent);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.3s var(--ease-out);
                }

                .ip-fac-card:hover .ip-fac-body::before { transform: scaleX(1); }

                .ip-fac-num {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 600;
                    color: var(--color-accent);
                    letter-spacing: 0.1em;
                    display: block;
                    margin-bottom: var(--space-md);
                }

                .ip-fac-title {
                    font-family: var(--font-serif);
                    font-size: 1.0625rem;
                    font-weight: 700;
                    color: var(--color-text);
                    letter-spacing: -0.02em;
                    line-height: 1.2;
                    margin-bottom: var(--space-sm);
                }

                .ip-fac-desc {
                    font-size: 0.875rem;
                    line-height: 1.7;
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
