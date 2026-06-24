import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import heroBg       from '../assets/iec-rotor-crane.jpg';
import imgCoilFloor from '../assets/iec-coil-floor.jpg';
import imgRotorCrane from '../assets/iec-rotor-crane.jpg';
import imgVpiTank   from '../assets/iec-vpi-tank.jpg';
import imgLaserCnc  from '../assets/iec-laser-cnc.jpg';
import imgCoilWorkers from '../assets/iec-coil-workers.jpg';
import imgStatorFrame from '../assets/iec-stator-frame.jpg';

/* ── Data ─────────────────────────────────────────── */
const featured = {
    num: '01',
    label: 'Rewinding & Repair',
    title: 'Motor, Generator & Alternator Repair',
    titleAccent: 'up to 20,000 HP',
    desc: 'Complete rewinding and repair of AC induction, synchronous, and wound-rotor motors up to 20,000 HP and 13.8 kV, plus hydro, turbo, gas and wind generators. Full-load testing up to 5 MW, no-load testing up to 20 MW.',
    specs: [
        { val: '20,000', unit: 'HP', label: 'Max motor capacity' },
        { val: '13.8',   unit: 'kV', label: 'High-voltage capability' },
        { val: '20',     unit: 'MW', label: 'No-load test bed' },
        { val: '5',      unit: 'MW', label: 'Full-load testing' },
    ],
    features: [
        'VPI (Vacuum Pressure Impregnation)',
        'Rotor Rebarring / Re-caging',
        'Synchronous Field Coil Rewinding',
        'Stator Core Restacking',
        'Thermal Imaging & Surge Testing',
        'Dielectric & Hi-Pot Testing',
    ],
    img: imgCoilFloor,
};

const cards = [
    {
        num: '02',
        label: 'Precision Rebuild',
        title: 'Mechanical Repair',
        desc: 'Precision mechanical rebuild of rotating and structural components — shafts, bearing housings, commutators — for full operational restoration.',
        features: ['Shaft Fabrication', 'Shaft Metalizing', 'Bearing Housing Repair', 'Commutator Rebuild', 'Sleeve Bearing Re-Babbitting'],
        img: imgRotorCrane,
    },
    {
        num: '03',
        label: 'Specialist Overhaul',
        title: 'Industrial Pump Repair',
        desc: 'Repair and overhaul of industrial pumps including high-voltage cryogenic submersibles (Ebara 6.6 kV) — specialist work unavailable at most facilities in India.',
        features: ['Cryogenic Submersible Pumps', 'HV Pump Rewinding (6.6 kV)', 'Impeller & Seal Service', 'Full Testing & Commissioning'],
        img: imgVpiTank,
    },
    {
        num: '04',
        label: 'In-house Manufacturing',
        title: 'Spares Fabrication',
        desc: 'In-house fabrication of critical rotating-machine spares — all machining done on-site, eliminating lead times and reducing plant downtime.',
        features: ['Rotor Shafts', 'Bearing Housings & Covers', 'Heat Exchangers', 'Cooling Fans & Grills', 'Commutators'],
        img: imgLaserCnc,
    },
    {
        num: '05',
        label: 'Site & Works',
        title: 'Preventive Maintenance',
        desc: "Scheduled maintenance and overhauling at IEC's Vadodara works or in-situ at the client site — sized to your plant's outage window.",
        features: ['On-Site & In-Works Service', 'Condition Monitoring', 'Planned Outage Overhauls', 'Emergency Breakdown Response'],
        img: imgCoilWorkers,
    },
];

/* ── Component ────────────────────────────────────── */
const ServicesPage = () => (
    <div className="sv-page">

        <PageHero
            label="What We Do"
            title="Our Services"
            subtitle="Heavy industrial repair and rewinding for high-voltage motors, generators, alternators, DC motors and rotating-machine spares."
            breadcrumbs={[{ label: 'Services' }]}
            bgImage={heroBg}
        />

        {/* ── 01 — Full-bleed feature split ─────────────── */}
        <section className="sv-feature">
            {/* Image panel */}
            <div className="sv-feature-img">
                <img src={featured.img} alt="IEC coil manufacturing floor" />
                <div className="sv-feature-img-overlay" />
            </div>

            {/* Content panel */}
            <div className="sv-feature-content">
                <div className="sv-feature-tag">
                    <span className="sv-num">{featured.num}</span>
                    <span className="sv-label">{featured.label}</span>
                </div>

                <h2 className="sv-feature-title">
                    {featured.title}
                    <span className="sv-feature-accent"> — {featured.titleAccent}</span>
                </h2>

                <p className="sv-feature-desc">{featured.desc}</p>

                <div className="sv-feature-specs">
                    {featured.specs.map((s, i) => (
                        <div className="sv-fspec" key={i}>
                            <span className="sv-fspec-val">{s.val}<em>{s.unit}</em></span>
                            <span className="sv-fspec-label">{s.label}</span>
                        </div>
                    ))}
                </div>

                <div className="sv-chips">
                    {featured.features.map((f, i) => (
                        <span key={i} className="sv-chip">{f}</span>
                    ))}
                </div>

                <Link to="/contact" className="sv-feature-cta">
                    Request a quote
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </section>

        {/* ── Stats band ────────────────────────────────── */}
        <section className="sv-stats">
            <div className="container sv-stats-inner">
                <p className="sv-stats-label">Our facility at a glance</p>
                <div className="sv-stats-grid">
                    {[
                        { v: '300K', u: 'sq ft', l: 'Total land area' },
                        { v: '75K',  u: 'sq ft', l: 'Active shop floor' },
                        { v: '300',  u: 'T',     l: 'Max crane capacity' },
                        { v: '40+',  u: 'yrs',   l: 'In operation' },
                    ].map((s, i) => (
                        <div className="sv-stat" key={i}>
                            <div className="sv-stat-num">
                                <span className="sv-stat-val">{s.v}</span>
                                <span className="sv-stat-unit">{s.u}</span>
                            </div>
                            <span className="sv-stat-label">{s.l}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* ── 02-05 — Image card grid ───────────────────── */}
        <section className="sv-grid-section">
            <div className="sv-grid">
                {cards.map((c) => (
                    <div className="sv-card" key={c.num}>
                        {/* Photo */}
                        <div className="sv-card-img">
                            <img src={c.img} alt={c.title} />
                            <div className="sv-card-img-overlay" />
                            <div className="sv-card-img-tag">
                                <span className="sv-num">{c.num}</span>
                                <span className="sv-label">{c.label}</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="sv-card-body">
                            <h3 className="sv-card-title">{c.title}</h3>
                            <p className="sv-card-desc">{c.desc}</p>
                            <div className="sv-chips sv-chips--light">
                                {c.features.map((f, i) => (
                                    <span key={i} className="sv-chip sv-chip--light">{f}</span>
                                ))}
                            </div>
                            <Link to="/contact" className="sv-card-cta">
                                Get a quote
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                        <div className="sv-card-line" />
                    </div>
                ))}
            </div>
        </section>

        {/* ── Bottom feature image band ──────────────────── */}
        <section className="sv-bottom-band">
            <div className="sv-bottom-img">
                <img src={imgStatorFrame} alt="IEC stator frame workshop" />
                <div className="sv-bottom-overlay" />
            </div>
            <div className="container sv-bottom-content">
                <p className="sv-bottom-eyebrow">Every capability. One location.</p>
                <h2 className="sv-bottom-heading">
                    From incoming inspection<br />to final load test — in-house.
                </h2>
                <p className="sv-bottom-sub">
                    No outsourcing. No delays. No compromise on traceability.<br />
                    ISO 9001 certified · EASA member since 2014 · Vadodara, Gujarat.
                </p>
                <Link to="/contact" className="sv-bottom-cta">
                    Send us your repair brief
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </section>

        <style>{`

            .sv-page { min-height: 100vh; }

            /* ─────────────────────────────────────────────
               01 FEATURE — full-bleed split
            ───────────────────────────────────────────── */
            .sv-feature {
                display: grid;
                grid-template-columns: 1fr 1fr;
                min-height: 640px;
                background: var(--color-primary);
            }

            /* Left: photo panel */
            .sv-feature-img {
                position: relative;
                overflow: hidden;
            }

            .sv-feature-img img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
                filter: brightness(0.72) saturate(0.85);
                transition: transform 10s ease-out;
                display: block;
            }

            .sv-feature:hover .sv-feature-img img {
                transform: scale(1.04);
            }

            .sv-feature-img-overlay {
                position: absolute;
                inset: 0;
                background: linear-gradient(to right, transparent 50%, var(--color-primary) 100%);
            }

            /* Right: content panel */
            .sv-feature-content {
                padding: var(--space-5xl);
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: var(--space-xl);
                border-left: 1px solid rgba(255,255,255,0.06);
            }

            .sv-feature-tag {
                display: flex;
                align-items: center;
                gap: var(--space-md);
            }

            .sv-num {
                font-family: var(--font-mono);
                font-size: 0.6875rem;
                font-weight: 700;
                color: var(--color-accent);
                letter-spacing: 0.1em;
            }

            .sv-label {
                font-family: var(--font-mono);
                font-size: 0.5625rem;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 0.14em;
                color: rgba(255,255,255,0.35);
            }

            .sv-feature-title {
                font-family: var(--font-display);
                font-size: clamp(1.75rem, 3vw, 2.75rem);
                font-weight: 300;
                color: var(--color-white);
                letter-spacing: -0.03em;
                line-height: 1.15;
            }

            .sv-feature-accent {
                color: rgba(255,255,255,0.45);
                font-weight: 300;
            }

            .sv-feature-desc {
                font-size: 0.9375rem;
                line-height: 1.82;
                color: rgba(255,255,255,0.5);
                max-width: 460px;
            }

            /* Inline spec callouts */
            .sv-feature-specs {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 1px;
                border: 1px solid rgba(255,255,255,0.08);
                margin: var(--space-sm) 0;
            }

            .sv-fspec {
                padding: var(--space-lg) var(--space-xl);
                border-right: 1px solid rgba(255,255,255,0.08);
                border-bottom: 1px solid rgba(255,255,255,0.08);
                display: flex;
                flex-direction: column;
                gap: 5px;
                background: rgba(255,255,255,0.025);
            }

            .sv-fspec:nth-child(2n) { border-right: none; }
            .sv-fspec:nth-last-child(-n+2) { border-bottom: none; }

            .sv-fspec-val {
                font-family: var(--font-mono);
                font-size: 1.375rem;
                font-weight: 600;
                color: var(--color-white);
                letter-spacing: -0.03em;
                line-height: 1;
            }

            .sv-fspec-val em {
                font-style: normal;
                font-size: 0.875rem;
                color: var(--color-accent);
                margin-left: 2px;
            }

            .sv-fspec-label {
                font-family: var(--font-mono);
                font-size: 0.5625rem;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                color: rgba(255,255,255,0.28);
            }

            /* Chips */
            .sv-chips {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
            }

            .sv-chip {
                font-family: var(--font-mono);
                font-size: 0.5625rem;
                font-weight: 500;
                letter-spacing: 0.05em;
                color: rgba(255,255,255,0.45);
                padding: 5px 11px;
                border: 1px solid rgba(255,255,255,0.1);
                transition: color 0.2s, border-color 0.2s;
            }

            .sv-chip:hover {
                color: var(--color-white);
                border-color: rgba(255,255,255,0.3);
            }

            .sv-feature-cta {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: var(--color-accent);
                color: var(--color-white);
                font-size: 0.875rem;
                font-weight: 500;
                padding: 14px 28px;
                letter-spacing: 0.01em;
                text-decoration: none;
                transition: background 0.2s, gap 0.2s;
                width: fit-content;
                margin-top: var(--space-sm);
            }

            .sv-feature-cta:hover {
                background: var(--color-accent-hover);
                gap: 13px;
            }

            /* ─────────────────────────────────────────────
               Stats band
            ───────────────────────────────────────────── */
            .sv-stats {
                background: var(--color-secondary);
                border-top: 1px solid rgba(255,255,255,0.06);
                border-bottom: 1px solid rgba(255,255,255,0.06);
                padding: var(--space-3xl) 0;
            }

            .sv-stats-inner {
                display: flex;
                align-items: center;
                gap: var(--space-4xl);
            }

            .sv-stats-label {
                font-family: var(--font-mono);
                font-size: 0.5625rem;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 0.14em;
                color: rgba(255,255,255,0.25);
                white-space: nowrap;
                writing-mode: vertical-rl;
                transform: rotate(180deg);
                flex-shrink: 0;
            }

            .sv-stats-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                border-left: 1px solid rgba(255,255,255,0.07);
                flex: 1;
            }

            .sv-stat {
                padding: var(--space-xl) var(--space-2xl);
                border-right: 1px solid rgba(255,255,255,0.07);
                display: flex;
                flex-direction: column;
                gap: 6px;
            }

            .sv-stat-num {
                display: flex;
                align-items: baseline;
                gap: 4px;
            }

            .sv-stat-val {
                font-family: var(--font-mono);
                font-size: clamp(1.75rem, 3vw, 2.5rem);
                font-weight: 600;
                color: var(--color-white);
                letter-spacing: -0.03em;
                line-height: 1;
            }

            .sv-stat-unit {
                font-family: var(--font-mono);
                font-size: 0.9375rem;
                font-weight: 500;
                color: var(--color-accent);
            }

            .sv-stat-label {
                font-family: var(--font-mono);
                font-size: 0.5625rem;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                color: rgba(255,255,255,0.25);
            }

            /* ─────────────────────────────────────────────
               02-05 Image card grid
            ───────────────────────────────────────────── */
            .sv-grid-section {
                background: var(--color-white);
            }

            .sv-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 2px;
                background: var(--color-border);
            }

            .sv-card {
                background: var(--color-white);
                position: relative;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                transition: box-shadow 0.3s;
            }

            .sv-card:hover {
                box-shadow: inset 0 0 0 1px rgba(200,16,46,0.25);
                z-index: 1;
            }

            /* Card photo */
            .sv-card-img {
                position: relative;
                height: 280px;
                overflow: hidden;
                flex-shrink: 0;
            }

            .sv-card-img img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                filter: brightness(0.68) saturate(0.8);
                transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s;
                display: block;
            }

            .sv-card:hover .sv-card-img img {
                transform: scale(1.06);
                filter: brightness(0.78) saturate(0.95);
            }

            .sv-card-img-overlay {
                position: absolute;
                inset: 0;
                background: linear-gradient(to bottom,
                    rgba(22,28,40,0.1) 0%,
                    rgba(22,28,40,0.65) 100%);
            }

            /* Number tag on photo */
            .sv-card-img-tag {
                position: absolute;
                bottom: var(--space-lg);
                left: var(--space-lg);
                display: flex;
                align-items: center;
                gap: var(--space-md);
            }

            /* Card content */
            .sv-card-body {
                padding: var(--space-2xl) var(--space-2xl) var(--space-3xl);
                display: flex;
                flex-direction: column;
                gap: var(--space-lg);
                flex: 1;
            }

            .sv-card-title {
                font-family: var(--font-display);
                font-size: clamp(1.25rem, 2vw, 1.625rem);
                font-weight: 500;
                color: var(--color-text);
                letter-spacing: -0.025em;
                line-height: 1.2;
            }

            .sv-card-desc {
                font-size: 0.9375rem;
                line-height: 1.8;
                color: var(--color-text-light);
                flex: 1;
            }

            .sv-chips--light { gap: 6px; }

            .sv-chip--light {
                color: var(--color-text-light);
                border-color: var(--color-border);
                background: var(--color-cream);
            }

            .sv-chip--light:hover {
                color: var(--color-accent);
                border-color: rgba(200,16,46,0.3);
                background: rgba(200,16,46,0.04);
            }

            .sv-card-cta {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                font-size: 0.8125rem;
                font-weight: 500;
                color: var(--color-accent);
                text-decoration: none;
                border-bottom: 1px solid rgba(200,16,46,0.3);
                padding-bottom: 2px;
                width: fit-content;
                transition: gap 0.2s, border-color 0.2s;
                margin-top: auto;
            }

            .sv-card-cta:hover {
                gap: 10px;
                border-color: var(--color-accent);
            }

            /* Red sweep line */
            .sv-card-line {
                position: absolute;
                bottom: 0; left: 0; right: 0;
                height: 3px;
                background: var(--color-accent);
                transform: scaleX(0);
                transform-origin: left;
                transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            }

            .sv-card:hover .sv-card-line { transform: scaleX(1); }

            /* ─────────────────────────────────────────────
               Bottom feature band
            ───────────────────────────────────────────── */
            .sv-bottom-band {
                position: relative;
                min-height: 520px;
                display: flex;
                align-items: center;
                overflow: hidden;
                background: var(--color-primary);
            }

            .sv-bottom-img {
                position: absolute;
                inset: 0;
            }

            .sv-bottom-img img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                filter: grayscale(60%) brightness(0.32) saturate(0.6);
                transform: scale(1.04);
                display: block;
                transition: transform 10s ease-out;
            }

            .sv-bottom-band:hover .sv-bottom-img img {
                transform: scale(1.0);
            }

            .sv-bottom-overlay {
                position: absolute;
                inset: 0;
                background:
                    linear-gradient(105deg, rgba(22,28,40,0.95) 0%, rgba(22,28,40,0.65) 60%, rgba(22,28,40,0.3) 100%),
                    linear-gradient(to top, rgba(22,28,40,0.8) 0%, transparent 60%);
            }

            .sv-bottom-content {
                position: relative;
                z-index: 1;
                max-width: 680px;
                padding-top: var(--space-5xl);
                padding-bottom: var(--space-5xl);
            }

            .sv-bottom-eyebrow {
                font-family: var(--font-mono);
                font-size: 0.625rem;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 0.18em;
                color: var(--color-accent);
                margin-bottom: var(--space-xl);
            }

            .sv-bottom-heading {
                font-family: var(--font-display);
                font-size: clamp(2rem, 4.5vw, 3.75rem);
                font-weight: 300;
                color: var(--color-white);
                letter-spacing: -0.03em;
                line-height: 1.1;
                margin-bottom: var(--space-xl);
            }

            .sv-bottom-sub {
                font-size: 0.9375rem;
                line-height: 1.8;
                color: rgba(255,255,255,0.45);
                margin-bottom: var(--space-3xl);
            }

            .sv-bottom-cta {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                background: var(--color-white);
                color: var(--color-text);
                font-size: 0.875rem;
                font-weight: 500;
                padding: 15px 30px;
                text-decoration: none;
                transition: background 0.2s, color 0.2s, gap 0.2s;
            }

            .sv-bottom-cta:hover {
                background: var(--color-accent);
                color: var(--color-white);
                gap: 14px;
            }

            /* ─────────────────────────────────────────────
               Responsive
            ───────────────────────────────────────────── */
            @media (max-width: 1100px) {
                .sv-feature {
                    grid-template-columns: 1fr;
                    min-height: auto;
                }
                .sv-feature-img {
                    height: 420px;
                }
                .sv-feature-img-overlay {
                    background: linear-gradient(to bottom, transparent 40%, var(--color-primary) 100%);
                }
                .sv-feature-content {
                    border-left: none;
                    border-top: 1px solid rgba(255,255,255,0.06);
                    padding: var(--space-3xl) var(--space-2xl);
                }
            }

            @media (max-width: 900px) {
                .sv-stats-inner { flex-direction: column; align-items: flex-start; gap: var(--space-xl); }
                .sv-stats-label { writing-mode: horizontal-tb; transform: none; }
                .sv-stats-grid { grid-template-columns: repeat(2, 1fr); }
            }

            @media (max-width: 768px) {
                .sv-grid { grid-template-columns: 1fr; }
                .sv-feature-specs { grid-template-columns: 1fr 1fr; }
            }

            @media (max-width: 480px) {
                .sv-feature-content { padding: var(--space-2xl) var(--space-lg); }
                .sv-card-body { padding: var(--space-xl); }
                .sv-feature-specs { grid-template-columns: 1fr; }
            }

        `}</style>
    </div>
);

export default ServicesPage;
