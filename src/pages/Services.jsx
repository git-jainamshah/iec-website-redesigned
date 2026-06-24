import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import heroBg from '../assets/iec-rotor-crane.jpg';

const featured = {
    num: '01',
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
    specs: [
        { val: '20,000', unit: 'HP', label: 'Max motor capacity' },
        { val: '13.8', unit: 'kV', label: 'Max voltage' },
        { val: '20', unit: 'MW', label: 'No-load test' },
    ],
};

const services = [
    {
        num: '02',
        label: 'Precision Rebuild',
        title: 'Mechanical Repair',
        desc: 'Precision mechanical rebuild of rotating and structural components — shafts, bearing housings, commutators and more — for complete operational restoration.',
        features: [
            'Shaft Fabrication & Replacement',
            'Shaft Metalizing',
            'Bearing Housing Repair',
            'Stator & Rotor Core Repair',
            'Commutator Repair & Replacement',
            'Sleeve Bearing Re-Babbitting',
        ],
    },
    {
        num: '03',
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
        num: '04',
        label: 'In-house Manufacturing',
        title: 'Spares Fabrication',
        desc: 'In-house fabrication of critical rotating-machine spares for fast turnaround on failures and planned overhauls — all machining done on-site, eliminating lead times.',
        features: [
            'Rotor Shafts',
            'End Shield Covers',
            'Bearing Housings & Covers',
            'Heat Exchangers',
            'Cooling Fans & Grills',
            'Commutators',
        ],
    },
    {
        num: '05',
        label: 'Site & Works',
        title: 'Preventive Maintenance & Overhauling',
        desc: "Scheduled maintenance and overhauling at IEC's Vadodara works or in-situ at the client site — sized to the plant's outage window with our own transport fleet.",
        features: [
            'On-Site & In-Works Service',
            'Condition Monitoring',
            'Planned Outage Overhauls',
            'Emergency Breakdown Response',
        ],
    },
];

const ServicesPage = () => {
    return (
        <div className="services-page">
            <PageHero
                label="What We Do"
                title="Our Services"
                subtitle="Heavy industrial repair and rewinding for high-voltage motors, generators, alternators, DC motors and rotating-machine spares."
                breadcrumbs={[{ label: 'Services' }]}
                bgImage={heroBg}
            />

            {/* ── Capability intro — dark, flows from hero ──── */}
            <section className="sp-intro">
                <div className="container">
                    <div className="sp-intro-inner">
                        <p className="sp-intro-statement">
                            Five core capabilities. Every one handled in-house,
                            at our Vadodara works.
                        </p>
                        <div className="sp-intro-creds">
                            <span className="sp-cred">ISO 9001:2008</span>
                            <span className="sp-cred sp-cred--accent">EASA Member</span>
                            <span className="sp-cred">Est. 1998</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Featured service (01) ─────────────────────── */}
            <section className="sp-featured">
                <div className="container">
                    <div className="sp-feat-grid">

                        <div className="sp-feat-left">
                            <div className="sp-feat-tag">
                                <span className="sp-feat-num">01</span>
                                <span className="sp-feat-label">{featured.label}</span>
                            </div>
                            <h2 className="sp-feat-title">{featured.title}</h2>
                            <div className="sp-feat-specs">
                                {featured.specs.map((s, i) => (
                                    <div className="sp-spec" key={i}>
                                        <div className="sp-spec-val">
                                            {s.val}<span className="sp-spec-unit">{s.unit}</span>
                                        </div>
                                        <span className="sp-spec-label">{s.label}</span>
                                    </div>
                                ))}
                            </div>
                            <Link to="/contact" className="sp-feat-cta">
                                Request a quote
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        <div className="sp-feat-right">
                            <p className="sp-feat-desc">{featured.desc}</p>
                            <div className="sp-chips">
                                {featured.features.map((f, i) => (
                                    <span key={i} className="sp-chip">{f}</span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Remaining services — 2-col card grid ──────── */}
            <section className="sp-grid-section">
                <div className="container">
                    <div className="sp-grid">
                        {services.map((svc) => (
                            <div className="sp-card" key={svc.num}>
                                <div className="sp-card-top">
                                    <div className="sp-card-tag">
                                        <span className="sp-card-num">{svc.num}</span>
                                        <span className="sp-card-label">{svc.label}</span>
                                    </div>
                                    <h3 className="sp-card-title">{svc.title}</h3>
                                    <p className="sp-card-desc">{svc.desc}</p>
                                </div>
                                <div className="sp-card-bottom">
                                    <div className="sp-chips">
                                        {svc.features.map((f, i) => (
                                            <span key={i} className="sp-chip">{f}</span>
                                        ))}
                                    </div>
                                    <Link to="/contact" className="sp-card-cta">
                                        Enquire
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                                <div className="sp-card-line" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Bottom CTA ────────────────────────────────── */}
            <section className="sp-cta-band">
                <div className="container sp-cta-inner">
                    <div className="sp-cta-text">
                        <p className="sp-cta-eyebrow">Ready to start?</p>
                        <h2 className="sp-cta-heading">Send us your repair brief.</h2>
                        <p className="sp-cta-sub">
                            Share the motor nameplate, fault description, and required turnaround.
                            We respond within one business day.
                        </p>
                    </div>
                    <Link to="/contact" className="btn btn-primary sp-cta-btn">
                        Get in touch
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>

            <style>{`

                .services-page { min-height: 100vh; }

                /* ── Intro strip (dark) ───────────────────────── */
                .sp-intro {
                    background: var(--color-primary);
                    padding: var(--space-4xl) 0;
                    border-top: 1px solid rgba(255,255,255,0.06);
                }

                .sp-intro-inner {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: var(--space-3xl);
                }

                .sp-intro-statement {
                    font-family: var(--font-display);
                    font-size: clamp(1.25rem, 2.5vw, 1.875rem);
                    font-weight: 300;
                    color: var(--color-white);
                    letter-spacing: -0.02em;
                    line-height: 1.35;
                    max-width: 560px;
                }

                .sp-intro-creds {
                    display: flex;
                    gap: 8px;
                    flex-shrink: 0;
                }

                .sp-cred {
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: rgba(255,255,255,0.35);
                    padding: 6px 12px;
                    border: 1px solid rgba(255,255,255,0.1);
                }

                .sp-cred--accent {
                    color: var(--color-accent);
                    border-color: rgba(200,16,46,0.3);
                }

                /* ── Featured service (WHITE) ─────────────────── */
                .sp-featured {
                    background: var(--color-white);
                    padding: var(--space-5xl) 0;
                    border-top: 4px solid var(--color-accent);
                }

                .sp-feat-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.1fr;
                    gap: var(--space-5xl);
                    align-items: start;
                }

                .sp-feat-tag {
                    display: flex;
                    align-items: center;
                    gap: var(--space-md);
                    margin-bottom: var(--space-xl);
                }

                .sp-feat-num {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 700;
                    color: var(--color-accent);
                    letter-spacing: 0.1em;
                }

                .sp-feat-label {
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    color: var(--color-text-light);
                }

                .sp-feat-title {
                    font-family: var(--font-display);
                    font-size: clamp(1.75rem, 3.5vw, 3rem);
                    font-weight: 300;
                    color: var(--color-text);
                    letter-spacing: -0.03em;
                    line-height: 1.1;
                    margin-bottom: var(--space-3xl);
                }

                .sp-feat-specs {
                    display: flex;
                    gap: var(--space-2xl);
                    padding: var(--space-xl) 0;
                    border-top: 1px solid var(--color-border);
                    border-bottom: 1px solid var(--color-border);
                    margin-bottom: var(--space-3xl);
                }

                .sp-spec {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .sp-spec-val {
                    font-family: var(--font-mono);
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: var(--color-text);
                    letter-spacing: -0.03em;
                    line-height: 1;
                }

                .sp-spec-unit {
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: var(--color-accent);
                    margin-left: 2px;
                }

                .sp-spec-label {
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-text-light);
                }

                .sp-feat-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: var(--color-text);
                    color: var(--color-white);
                    font-size: 0.875rem;
                    font-weight: 500;
                    padding: 14px 28px;
                    letter-spacing: 0.01em;
                    transition: background 0.2s, gap 0.2s;
                    text-decoration: none;
                }

                .sp-feat-cta:hover {
                    background: var(--color-accent);
                    gap: 13px;
                }

                .sp-feat-desc {
                    font-size: 1.0625rem;
                    line-height: 1.85;
                    color: var(--color-text-light);
                    margin-bottom: var(--space-2xl);
                }

                /* Feature chips */
                .sp-chips {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }

                .sp-chip {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    font-weight: 500;
                    letter-spacing: 0.04em;
                    color: var(--color-text-light);
                    padding: 6px 14px;
                    border: 1px solid var(--color-border);
                    background: var(--color-cream);
                    transition: color 0.2s, border-color 0.2s, background 0.2s;
                }

                .sp-chip:hover {
                    color: var(--color-accent);
                    border-color: rgba(200,16,46,0.3);
                    background: rgba(200,16,46,0.04);
                }

                /* ── Services card grid (WHITE) ───────────────── */
                .sp-grid-section {
                    background: var(--color-cream);
                    padding: var(--space-5xl) 0;
                    border-top: 1px solid var(--color-border);
                }

                .sp-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 2px;
                }

                .sp-card {
                    background: var(--color-white);
                    padding: var(--space-3xl);
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    gap: var(--space-2xl);
                    transition: box-shadow 0.25s;
                }

                .sp-card:hover {
                    box-shadow: 0 0 0 1px var(--color-accent);
                    z-index: 1;
                }

                /* Red sweep line at bottom on hover */
                .sp-card-line {
                    position: absolute;
                    bottom: 0; left: 0; right: 0;
                    height: 3px;
                    background: var(--color-accent);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .sp-card:hover .sp-card-line {
                    transform: scaleX(1);
                }

                .sp-card-top {
                    flex: 1;
                }

                .sp-card-tag {
                    display: flex;
                    align-items: center;
                    gap: var(--space-md);
                    margin-bottom: var(--space-xl);
                }

                .sp-card-num {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 700;
                    color: var(--color-accent);
                    letter-spacing: 0.1em;
                }

                .sp-card-label {
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    color: var(--color-text-light);
                }

                .sp-card-title {
                    font-family: var(--font-display);
                    font-size: clamp(1.25rem, 2vw, 1.625rem);
                    font-weight: 500;
                    color: var(--color-text);
                    letter-spacing: -0.02em;
                    line-height: 1.2;
                    margin-bottom: var(--space-lg);
                }

                .sp-card-desc {
                    font-size: 0.9375rem;
                    line-height: 1.8;
                    color: var(--color-text-light);
                    margin-bottom: var(--space-xl);
                }

                .sp-card-bottom {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-lg);
                }

                .sp-card-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.8125rem;
                    font-weight: 500;
                    color: var(--color-accent);
                    letter-spacing: 0.01em;
                    text-decoration: underline;
                    text-underline-offset: 4px;
                    text-decoration-color: rgba(200,16,46,0.3);
                    transition: gap 0.2s, text-decoration-color 0.2s;
                    width: fit-content;
                }

                .sp-card-cta:hover {
                    gap: 10px;
                    text-decoration-color: var(--color-accent);
                }

                /* ── CTA band (dark) ──────────────────────────── */
                .sp-cta-band {
                    background: var(--color-primary);
                    padding: var(--space-5xl) 0;
                    border-top: 4px solid var(--color-accent);
                }

                .sp-cta-inner {
                    display: grid;
                    grid-template-columns: 1fr auto;
                    gap: var(--space-5xl);
                    align-items: center;
                }

                .sp-cta-eyebrow {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.16em;
                    color: var(--color-accent);
                    margin-bottom: var(--space-md);
                }

                .sp-cta-heading {
                    font-family: var(--font-display);
                    font-size: clamp(1.75rem, 3.5vw, 3rem);
                    font-weight: 300;
                    color: var(--color-white);
                    letter-spacing: -0.03em;
                    line-height: 1.1;
                    margin-bottom: var(--space-lg);
                }

                .sp-cta-sub {
                    font-size: 0.9375rem;
                    line-height: 1.75;
                    color: rgba(255,255,255,0.45);
                    max-width: 480px;
                }

                .sp-cta-btn {
                    flex-shrink: 0;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    white-space: nowrap;
                    transition: gap 0.2s;
                }

                .sp-cta-btn:hover { gap: 13px; }

                /* ── Responsive ──────────────────────────────── */
                @media (max-width: 1024px) {
                    .sp-feat-grid {
                        grid-template-columns: 1fr;
                        gap: var(--space-3xl);
                    }
                    .sp-feat-specs { gap: var(--space-xl); }
                }

                @media (max-width: 768px) {
                    .sp-intro-inner {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: var(--space-xl);
                    }
                    .sp-grid { grid-template-columns: 1fr; }
                    .sp-cta-inner {
                        grid-template-columns: 1fr;
                        gap: var(--space-3xl);
                    }
                }

                @media (max-width: 600px) {
                    .sp-card { padding: var(--space-2xl); }
                    .sp-feat-specs { flex-direction: column; gap: var(--space-lg); }
                }

            `}</style>
        </div>
    );
};

export default ServicesPage;
