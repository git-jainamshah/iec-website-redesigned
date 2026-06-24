import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import heroBg from '../assets/iec-rotor-crane.jpg';
import imgGeneratorWorkshop from '../assets/iec-generator-workshop.jpg';
import imgRotorCrane from '../assets/iec-rotor-crane.jpg';
import imgVpiTank from '../assets/iec-vpi-tank.jpg';
import imgLaserCnc from '../assets/iec-laser-cnc.jpg';
import imgCoilFloor from '../assets/iec-coil-floor.jpg';

const services = [
    {
        id: 'motors',
        num: '01',
        img: imgGeneratorWorkshop,
        label: 'Rewinding & Repair',
        title: 'Motor, Generator, Alternator & DC Motor Repair',
        desc: 'Rewinding and repair of AC induction, synchronous, and wound-rotor/slip-ring motors up to 20,000 HP and 13.8 kV, plus hydro, turbo, gas and wind generators and DC motors. Full-load testing up to 5 MW, no-load testing up to 20 MW.',
        features: [
            'VPI (Vacuum Pressure Impregnation)',
            'Rotor Rebarring / Re-caging',
            'Synchronous Field Coil Rewinding',
            'Pole Piece Rebuilding',
            'Stator Core Restacking',
            'Thermal Imaging & Surge Testing',
            'Dielectric & Hi-Pot Testing',
        ],
    },
    {
        id: 'mechanical',
        num: '02',
        img: imgRotorCrane,
        label: 'Precision Rebuild',
        title: 'Mechanical Repair',
        desc: 'Precision mechanical rebuild work on the rotating and structural components that keep a machine in tolerance — shafts, bearing housings, commutators and more — for complete operational restoration.',
        features: [
            'Shaft Fabrication & Replacement',
            'Shaft Metalizing',
            'Bearing Housing Repair & Manufacturing',
            'Stator & Rotor Core Repair',
            'Commutator Repair & Replacement',
            'Sleeve Bearing Re-Babbitting',
            'Spares Fabrication',
        ],
    },
    {
        id: 'pumps',
        num: '03',
        img: imgVpiTank,
        label: 'Overhaul',
        title: 'Industrial Pump Repair',
        desc: 'Repair and overhaul of industrial pumps, including high-voltage cryogenic submersible pumps such as Ebara-make 6.6 kV units — specialist work unavailable at most facilities in India.',
        features: [
            'Cryogenic Submersible Pumps',
            'HV Pump Rewinding (up to 6.6 kV)',
            'Impeller & Seal Service',
            'Full Testing & Commissioning',
        ],
    },
    {
        id: 'spares',
        num: '04',
        img: imgLaserCnc,
        label: 'In-house Manufacturing',
        title: 'Spares Fabrication',
        desc: 'In-house fabrication of critical rotating-machine spares for fast turnaround on failures and planned overhauls. All machining is done on-site, eliminating lead times and reducing downtime.',
        features: [
            'Rotor Shafts',
            'End Shield Covers',
            'Bearing Housings & Covers',
            'Heat Exchangers',
            'Cooling Fans, Fan Covers & Grills',
            'Commutators',
        ],
    },
    {
        id: 'maintenance',
        num: '05',
        img: imgCoilFloor,
        label: 'Site & Works',
        title: 'Preventive Maintenance & Overhauling',
        desc: "Scheduled maintenance and overhauling at IEC's Vadodara works or in-situ at the client site — sized to the plant's outage window with our own transport fleet and experienced field engineers.",
        features: [
            'On-Site & In-Works Service',
            'Condition Monitoring',
            'Planned Outage Overhauls',
            'Emergency Breakdown Response',
        ],
    },
];

const ServicesPage = () => {
    const [activeId, setActiveId] = useState(null);

    return (
        <div className="services-page">
            <PageHero
                label="What We Do"
                title="Our Services"
                subtitle="Heavy industrial repair and rewinding for high-voltage motors, generators, alternators, DC motors and rotating-machine spares."
                breadcrumbs={[{ label: 'Services' }]}
                bgImage={heroBg}
            />

            <section className="sp-list">
                {services.map((svc) => (
                    <div
                        key={svc.id}
                        id={svc.id}
                        className={`sp-item${activeId === svc.id ? ' sp-item--open' : ''}`}
                        onClick={() => setActiveId(activeId === svc.id ? null : svc.id)}
                    >
                        {/* Ghost number */}
                        <span className="sp-ghost" aria-hidden="true">{svc.num}</span>

                        <div className="container sp-inner">
                            {/* Left: number + label */}
                            <div className="sp-meta">
                                <span className="sp-num">{svc.num}</span>
                                <span className="sp-label">{svc.label}</span>
                            </div>

                            {/* Right: title + content */}
                            <div className="sp-body">
                                <div className="sp-header">
                                    <h2 className="sp-title">{svc.title}</h2>
                                    <button
                                        className="sp-toggle"
                                        aria-label={activeId === svc.id ? 'Collapse' : 'Expand'}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setActiveId(activeId === svc.id ? null : svc.id);
                                        }}
                                    >
                                        <span className="sp-toggle-bar" />
                                        <span className="sp-toggle-bar sp-toggle-bar--v" />
                                    </button>
                                </div>

                                <div className="sp-content">
                                    <div className="sp-expand-inner">
                                    {svc.img && (
                                        <div className="sp-img">
                                            <img src={svc.img} alt={svc.title} />
                                        </div>
                                    )}
                                    <div className="sp-expand-text">
                                    <p className="sp-desc">{svc.desc}</p>
                                    <div className="sp-chips">
                                        {svc.features.map((f, i) => (
                                            <span key={i} className="sp-chip">{f}</span>
                                        ))}
                                    </div>
                                    <Link
                                        to="/contact"
                                        className="sp-cta"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Request a quote
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Bottom CTA band */}
            <section className="sp-band">
                <div className="container sp-band-inner">
                    <div>
                        <p className="sp-band-eyebrow">Ready to start?</p>
                        <h2 className="sp-band-heading">Send us your repair brief.</h2>
                    </div>
                    <Link to="/contact" className="btn btn-primary sp-band-btn">
                        Get in touch →
                    </Link>
                </div>
            </section>

            <style>{`

                .services-page {
                    min-height: 100vh;
                    background: var(--color-primary);
                }

                /* ── Service list ──────────────────────────────── */
                .sp-list {
                    padding: 0;
                }

                .sp-item {
                    position: relative;
                    border-bottom: 1px solid rgba(255,255,255,0.07);
                    cursor: pointer;
                    overflow: hidden;
                    transition: background 0.3s;
                }

                .sp-item:first-child {
                    border-top: 1px solid rgba(255,255,255,0.07);
                }

                .sp-item:hover {
                    background: rgba(255,255,255,0.02);
                }

                .sp-item--open {
                    background: rgba(255,255,255,0.025);
                }

                /* Ghost background number */
                .sp-ghost {
                    position: absolute;
                    right: -0.05em;
                    top: 50%;
                    transform: translateY(-50%);
                    font-family: var(--font-mono);
                    font-size: clamp(7rem, 16vw, 16rem);
                    font-weight: 800;
                    color: rgba(255,255,255,0.025);
                    line-height: 1;
                    pointer-events: none;
                    user-select: none;
                    letter-spacing: -0.05em;
                    transition: color 0.3s;
                }

                .sp-item:hover .sp-ghost,
                .sp-item--open .sp-ghost {
                    color: rgba(200,16,46,0.06);
                }

                /* Inner layout */
                .sp-inner {
                    display: grid;
                    grid-template-columns: 160px 1fr;
                    gap: var(--space-4xl);
                    padding-top: var(--space-3xl);
                    padding-bottom: var(--space-3xl);
                    align-items: start;
                    position: relative;
                    z-index: 1;
                }

                /* Left meta col */
                .sp-meta {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-sm);
                    padding-top: 4px;
                }

                .sp-num {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 700;
                    color: var(--color-accent);
                    letter-spacing: 0.1em;
                }

                .sp-label {
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: rgba(255,255,255,0.25);
                }

                /* Right body */
                .sp-body { width: 100%; }

                .sp-header {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: var(--space-xl);
                }

                .sp-title {
                    font-family: var(--font-serif);
                    font-size: clamp(1.25rem, 2.5vw, 2rem);
                    font-weight: 700;
                    color: var(--color-white);
                    letter-spacing: -0.025em;
                    line-height: 1.15;
                    transition: color 0.2s;
                }

                .sp-item:hover .sp-title { color: var(--color-white); }

                /* +/x toggle */
                .sp-toggle {
                    position: relative;
                    width: 32px;
                    height: 32px;
                    flex-shrink: 0;
                    background: none;
                    border: 1px solid rgba(255,255,255,0.12);
                    cursor: pointer;
                    margin-top: 4px;
                    transition: border-color 0.2s, transform 0.3s;
                }

                .sp-item--open .sp-toggle {
                    border-color: var(--color-accent);
                    transform: rotate(45deg);
                }

                .sp-toggle-bar {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 12px;
                    height: 1.5px;
                    background: rgba(255,255,255,0.6);
                }

                .sp-toggle-bar--v {
                    width: 1.5px;
                    height: 12px;
                    transition: opacity 0.2s;
                }

                .sp-item--open .sp-toggle-bar--v { opacity: 0; }

                /* Expandable content */
                .sp-content {
                    display: grid;
                    grid-template-rows: 0fr;
                    transition: grid-template-rows 0.35s var(--ease-out), padding 0.35s var(--ease-out);
                }

                .sp-item--open .sp-content {
                    grid-template-rows: 1fr;
                    padding-top: var(--space-xl);
                }

                .sp-content > * {
                    overflow: hidden;
                }

                .sp-desc {
                    font-size: 1.0625rem;
                    line-height: 1.82;
                    color: rgba(255,255,255,0.52);
                    margin-bottom: var(--space-xl);
                    max-width: 680px;
                }

                .sp-chips {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-bottom: var(--space-xl);
                }

                .sp-chip {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 500;
                    letter-spacing: 0.04em;
                    color: rgba(255,255,255,0.5);
                    padding: 5px 12px;
                    border: 1px solid rgba(255,255,255,0.1);
                    transition: color 0.2s, border-color 0.2s;
                }

                .sp-chip:hover {
                    color: var(--color-white);
                    border-color: rgba(255,255,255,0.28);
                }

                .sp-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: var(--color-accent);
                    text-decoration: none;
                    border-bottom: 1px solid rgba(200,16,46,0.35);
                    padding-bottom: 2px;
                    transition: gap 0.2s, border-color 0.2s;
                }

                .sp-cta:hover {
                    gap: 13px;
                    border-color: var(--color-accent);
                }

                /* Fix grid-template-rows animation — needs wrapper */
                .sp-content {
                    overflow: hidden;
                }

                /* Image + text side by side when expanded */
                .sp-expand-inner {
                    display: grid;
                    grid-template-columns: 280px 1fr;
                    gap: var(--space-2xl);
                    align-items: start;
                }

                .sp-img {
                    flex-shrink: 0;
                    overflow: hidden;
                    height: 200px;
                }

                .sp-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: brightness(0.78) saturate(0.85);
                    transition: transform 0.5s var(--ease-out), filter 0.3s;
                    display: block;
                }

                .sp-item--open .sp-img img {
                    filter: brightness(0.88) saturate(1);
                }

                .sp-expand-text {
                    min-width: 0;
                }

                @media (max-width: 768px) {
                    .sp-expand-inner {
                        grid-template-columns: 1fr;
                    }
                    .sp-img { height: 180px; }
                }

                /* ── Bottom CTA band ──────────────────────────── */
                .sp-band {
                    background: rgba(200,16,46,0.06);
                    border-top: 1px solid rgba(200,16,46,0.18);
                    padding: var(--space-4xl) 0;
                }

                .sp-band-inner {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: var(--space-3xl);
                }

                .sp-band-eyebrow {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    color: rgba(255,255,255,0.32);
                    margin-bottom: var(--space-sm);
                }

                .sp-band-heading {
                    font-family: var(--font-serif);
                    font-size: clamp(1.75rem, 3vw, 2.5rem);
                    font-weight: 700;
                    color: var(--color-white);
                    letter-spacing: -0.025em;
                    line-height: 1.1;
                }

                .sp-band-btn {
                    flex-shrink: 0;
                    white-space: nowrap;
                }

                /* ── Responsive ──────────────────────────────── */
                @media (max-width: 900px) {
                    .sp-inner {
                        grid-template-columns: 1fr;
                        gap: var(--space-xl);
                    }
                    .sp-meta {
                        flex-direction: row;
                        align-items: center;
                        gap: var(--space-md);
                    }
                    .sp-ghost { display: none; }
                    .sp-band-inner {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: var(--space-2xl);
                    }
                }

                @media (max-width: 600px) {
                    .sp-inner {
                        padding-top: var(--space-2xl);
                        padding-bottom: var(--space-2xl);
                    }
                    .sp-title {
                        font-size: 1.25rem;
                    }
                }

            `}</style>
        </div>
    );
};

export default ServicesPage;
