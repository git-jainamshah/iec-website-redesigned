import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import heroBg         from '../assets/iec-rotor-crane.jpg';
import imgCoilFloor   from '../assets/iec-coil-floor.jpg';
import imgRotorCrane  from '../assets/iec-rotor-crane.jpg';
import imgVpiTank     from '../assets/iec-vpi-tank.jpg';
import imgLaserCnc    from '../assets/iec-laser-cnc.jpg';
import imgCoilWorkers from '../assets/iec-coil-workers.jpg';
import imgStatorFrame from '../assets/iec-stator-frame.jpg';

/* ─── data ───────────────────────────────────────── */
const TICKER = ' ISO 9001 CERTIFIED  ·  EASA ACCREDITED  ·  EST. 1998  ·  300,000 SQ FT FACILITY  ·  300T CRANE CAPACITY  ·  VPI IMPREGNATION  ·  20 MW TEST BED  ·  VADODARA, GUJARAT  ·  HV COIL MANUFACTURE  ·  DYNAMIC BALANCING  ';

const SPECS = [
    { val: '20,000', unit: 'HP', label: 'Max motor capacity' },
    { val: '13.8',   unit: 'kV', label: 'High voltage capability' },
    { val: '20',     unit: 'MW', label: 'No-load test bed' },
    { val: '5',      unit: 'MW', label: 'Full-load testing' },
];

const CHIPS = [
    'VPI Impregnation', 'Rotor Rebarring', 'Stator Core Restacking',
    'Surge & Dielectric Testing', 'Thermal Imaging', 'Synchronous Field Coil Rewind',
];

const CARDS = [
    {
        num: '02', label: 'Precision Rebuild',
        title: 'Mechanical Repair',
        desc: 'Precision rebuild of shafts, bearing housings, commutators, and structural components for complete mechanical restoration.',
        chips: ['Shaft Fabrication & Metalizing', 'Re-Babbitting Bearings', 'Commutator Rebuild', 'Bearing Housing Repair'],
        img: imgRotorCrane,
    },
    {
        num: '03', label: 'Specialist Overhaul',
        title: 'Industrial Pump Repair',
        desc: 'Repair of industrial pumps including high-voltage cryogenic submersibles (Ebara 6.6 kV) · specialist work unavailable at most Indian facilities.',
        chips: ['Cryogenic Submersible Pumps', 'HV Pump Rewinding 6.6 kV', 'Impeller & Seal Service', 'Full Testing'],
        img: imgVpiTank,
    },
    {
        num: '04', label: 'In-house Manufacturing',
        title: 'Spares Fabrication',
        desc: 'In-house fabrication of critical rotating-machine spares · all machining done on-site, eliminating lead times and cutting plant downtime.',
        chips: ['Rotor Shafts', 'Bearing Housings & Covers', 'Heat Exchangers', 'Cooling Fans & Grills'],
        img: imgLaserCnc,
    },
    {
        num: '05', label: 'Site & Works',
        title: 'Preventive Maintenance',
        desc: "Scheduled maintenance and overhauling at IEC's Vadodara works or in-situ at the client site · sized to your plant's outage window.",
        chips: ['Planned Outage Overhauls', 'Condition Monitoring', 'On-Site Service', 'Emergency Response'],
        img: imgCoilWorkers,
    },
];

const STATS = [
    { v: '300K', u: 'sq ft', l: 'Total land area' },
    { v: '75K',  u: 'sq ft', l: 'Active shop floor' },
    { v: '300',  u: 'T',     l: 'Max crane capacity' },
    { v: '40+',  u: 'yrs',   l: 'In operation' },
];

/* ─── SVG arrow ──────────────────────────────────── */
const Arrow = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

/* ─── Component ──────────────────────────────────── */
const ServicesPage = () => {

    /* Scroll-reveal for cards */
    useEffect(() => {
        const els = document.querySelectorAll('.sv-reveal');
        if (!els.length) return;
        const io = new IntersectionObserver(
            entries => entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('sv-in'); io.unobserve(e.target); }
            }),
            { threshold: 0.12 }
        );
        els.forEach(el => io.observe(el));
        return () => io.disconnect();
    }, []);

    return (
        <div className="sv-page">

            <PageHero
                label="What We Do"
                title="Our Services"
                subtitle="Heavy industrial repair, rewinding and refurbishment for high-voltage rotating machines."
                breadcrumbs={[{ label: 'Services' }]}
                bgImage={heroBg}
            />

            {/* ── 01 Cinematic feature split ───────────────── */}
            <section className="sv-feature">

                {/* Photo panel */}
                <div className="sv-feature-img">
                    <img src={imgCoilFloor} alt="IEC coil winding floor" />
                    <div className="sv-feature-img-overlay" />
                </div>

                {/* Diagonal blade · absolutely positioned over the split boundary */}
                <div className="sv-blade" aria-hidden="true" />

                {/* Content panel */}
                <div className="sv-feature-content">
                    <div className="sv-feature-inner">

                        <div className="sv-tag">
                            <span className="sv-num">01</span>
                            <span className="sv-label-txt">Rewinding &amp; Repair</span>
                        </div>

                        <h2 className="sv-feature-title">
                            Motor, Generator<br />&amp; Alternator Repair
                            <span className="sv-feature-sub"> · up to 20,000 HP</span>
                        </h2>

                        <p className="sv-feature-desc">
                            Complete rewinding and repair of AC induction, synchronous, and wound-rotor motors up to 20,000 HP and 13.8 kV. Full-load testing up to 5 MW; no-load testing up to 20 MW. Hydro, turbo, gas and wind generators serviced.
                        </p>

                        <div className="sv-specs">
                            {SPECS.map((s, i) => (
                                <div className="sv-spec" key={i}>
                                    <span className="sv-spec-val">{s.val}<em>{s.unit}</em></span>
                                    <span className="sv-spec-label">{s.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="sv-chips">
                            {CHIPS.map((c, i) => <span key={i} className="sv-chip">{c}</span>)}
                        </div>

                        <Link to="/contact" className="sv-cta-btn">
                            <span>Request a quote</span>
                            <Arrow />
                        </Link>

                    </div>
                </div>
            </section>

            {/* ── Ticker ───────────────────────────────────── */}
            <div className="sv-ticker" aria-hidden="true">
                <div className="sv-ticker-track">
                    <span>{TICKER}</span>
                    <span>{TICKER}</span>
                </div>
            </div>

            {/* ── Stats band ───────────────────────────────── */}
            <section className="sv-stats">
                <div className="container sv-stats-inner">
                    <p className="sv-stats-eyebrow">Facility at a glance</p>
                    <div className="sv-stats-grid">
                        {STATS.map((s, i) => (
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

            {/* ── 02–05 Cards ──────────────────────────────── */}
            <section className="sv-grid-section">
                <div className="sv-grid">
                    {CARDS.map((c, i) => (
                        <article
                            key={c.num}
                            className="sv-card sv-reveal"
                            style={{ transitionDelay: `${i * 0.08}s` }}
                        >
                            <div className="sv-card-img">
                                <img src={c.img} alt={c.title} />
                                <div className="sv-card-img-overlay" />
                                <div className="sv-card-tag">
                                    <span className="sv-num sv-num--img">{c.num}</span>
                                    <span className="sv-label-txt sv-label-txt--img">{c.label}</span>
                                </div>
                            </div>
                            <div className="sv-card-body">
                                <h3 className="sv-card-title">{c.title}</h3>
                                <p className="sv-card-desc">{c.desc}</p>
                                <div className="sv-chips sv-chips--light">
                                    {c.chips.map((ch, j) => (
                                        <span key={j} className="sv-chip sv-chip--light">{ch}</span>
                                    ))}
                                </div>
                                <Link to="/contact" className="sv-card-link">
                                    Get a quote <Arrow />
                                </Link>
                            </div>
                            <div className="sv-card-sweep" />
                        </article>
                    ))}
                </div>
            </section>

            {/* ── Outro: editorial split ───────────────────── */}
            <section className="sv-outro">

                {/* Content */}
                <div className="sv-outro-left">
                    <p className="sv-outro-eyebrow">Every capability. One location.</p>
                    <h2 className="sv-outro-title">
                        From incoming<br />inspection to<br />final load test.
                    </h2>
                    <p className="sv-outro-sub">
                        ISO 9001 certified · EASA member since 2014<br />
                        No outsourcing. No delays.
                    </p>
                    <Link to="/contact" className="sv-cta-btn sv-cta-btn--outro">
                        <span>Send us your repair brief</span>
                        <Arrow />
                    </Link>
                </div>

                {/* Machinery cutout photo */}
                <div className="sv-outro-right">
                    <img src={imgStatorFrame} alt="IEC stator frame" />
                    <div className="sv-outro-right-grad" />
                </div>

            </section>

            <style>{`

                .sv-page { min-height: 100vh; }

                /* ═══════════════════════════════════════════════
                   01 FEATURE SPLIT
                ═══════════════════════════════════════════════ */
                .sv-feature {
                    display: grid;
                    grid-template-columns: 55% 45%;
                    min-height: 620px;
                    background: var(--color-primary);
                    position: relative;
                    overflow: hidden;
                }

                /* Photo panel */
                .sv-feature-img {
                    position: relative;
                    overflow: hidden;
                }

                .sv-feature-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    filter: brightness(0.65) saturate(0.75);
                    display: block;
                    transition: transform 10s ease-out;
                }

                .sv-feature:hover .sv-feature-img img {
                    transform: scale(1.04);
                }

                .sv-feature-img-overlay {
                    position: absolute;
                    inset: 0;
                    background:
                        linear-gradient(to right,
                            rgba(17,17,20,0) 30%,
                            rgba(17,17,20,0.7) 80%,
                            rgba(17,17,20,1) 100%),
                        linear-gradient(to top,
                            rgba(17,17,20,0.5) 0%,
                            transparent 50%);
                }

                /* ── Diagonal blade ── */
                /* Dark parallelogram sitting on the split boundary */
                .sv-blade {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: calc(55% - 48px);
                    width: 100px;
                    background: var(--color-primary);
                    transform: skewX(-5deg);
                    transform-origin: center;
                    z-index: 5;
                    pointer-events: none;
                }

                /* Content panel */
                .sv-feature-content {
                    position: relative;
                    z-index: 4;
                    display: flex;
                    align-items: center;
                }

                .sv-feature-inner {
                    padding: var(--space-5xl) var(--space-3xl) var(--space-5xl) var(--space-5xl);
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-xl);
                    width: 100%;
                }

                /* Tag row */
                .sv-tag {
                    display: flex;
                    align-items: center;
                    gap: var(--space-md);
                }

                .sv-num {
                    font-family: var(--font-mono);
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--color-accent);
                    letter-spacing: 0.1em;
                }

                .sv-label-txt {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.16em;
                    color: rgba(255,255,255,0.3);
                }

                /* Title */
                .sv-feature-title {
                    font-family: var(--font-display);
                    font-size: clamp(1.625rem, 2.5vw, 2.5rem);
                    font-weight: 300;
                    color: var(--color-white);
                    letter-spacing: -0.03em;
                    line-height: 1.15;
                }

                .sv-feature-sub {
                    color: rgba(255,255,255,0.35);
                    font-weight: 300;
                    font-style: normal;
                    font-size: 0.85em;
                }

                .sv-feature-desc {
                    font-size: 0.9375rem;
                    line-height: 1.85;
                    color: rgba(255,255,255,0.45);
                    max-width: 420px;
                }

                /* 4-box spec grid */
                .sv-specs {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    border: 1px solid rgba(255,255,255,0.07);
                }

                .sv-spec {
                    padding: var(--space-lg) var(--space-xl);
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    border-right: 1px solid rgba(255,255,255,0.07);
                    border-bottom: 1px solid rgba(255,255,255,0.07);
                    background: rgba(255,255,255,0.018);
                }

                .sv-spec:nth-child(even) { border-right: none; }
                .sv-spec:nth-last-child(-n+2) { border-bottom: none; }

                .sv-spec-val {
                    font-family: var(--font-mono);
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: var(--color-white);
                    letter-spacing: -0.03em;
                    line-height: 1;
                }

                .sv-spec-val em {
                    font-style: normal;
                    font-size: 0.75rem;
                    color: var(--color-accent);
                    margin-left: 2px;
                }

                .sv-spec-label {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: rgba(255,255,255,0.25);
                }

                /* Chips (dark panel) */
                .sv-chips {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                }

                .sv-chip {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 500;
                    letter-spacing: 0.06em;
                    color: rgba(255,255,255,0.38);
                    padding: 5px 10px;
                    border: 1px solid rgba(255,255,255,0.08);
                    transition: color 0.2s, border-color 0.2s;
                    white-space: nowrap;
                }

                .sv-chip:hover {
                    color: rgba(255,255,255,0.7);
                    border-color: rgba(255,255,255,0.22);
                }

                /* CTA button · premium slide-fill */
                .sv-cta-btn {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 13px 28px;
                    font-family: var(--font-mono);
                    font-size: 0.75rem;
                    font-weight: 500;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: var(--color-white);
                    border: 1px solid rgba(255,255,255,0.22);
                    overflow: hidden;
                    isolation: isolate;
                    text-decoration: none;
                    transition: border-color 0.35s, gap 0.25s;
                    width: fit-content;
                    margin-top: var(--space-sm);
                }

                .sv-cta-btn::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: var(--color-accent);
                    transform: translateX(-101%);
                    transition: transform 0.42s cubic-bezier(0.16,1,0.3,1);
                    z-index: -1;
                }

                .sv-cta-btn:hover {
                    border-color: var(--color-accent);
                    gap: 14px;
                }

                .sv-cta-btn:hover::before {
                    transform: translateX(0);
                }

                /* ═══════════════════════════════════════════════
                   TICKER STRIP
                ═══════════════════════════════════════════════ */
                .sv-ticker {
                    background: var(--color-accent);
                    overflow: hidden;
                    padding: 9px 0;
                    position: relative;
                }

                .sv-ticker-track {
                    display: flex;
                    width: max-content;
                    animation: sv-tick 50s linear infinite;
                }

                .sv-ticker-track span {
                    font-family: var(--font-mono);
                    font-size: 0.75rem;
                    font-weight: 500;
                    letter-spacing: 0.14em;
                    color: rgba(255,255,255,0.9);
                    white-space: nowrap;
                }

                @keyframes sv-tick {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                .sv-ticker:hover .sv-ticker-track {
                    animation-play-state: paused;
                }

                /* ═══════════════════════════════════════════════
                   STATS BAND
                ═══════════════════════════════════════════════ */
                .sv-stats {
                    background: var(--color-secondary);
                    border-top: 1px solid rgba(255,255,255,0.05);
                    border-bottom: 1px solid rgba(255,255,255,0.05);
                    padding: var(--space-3xl) 0;
                }

                .sv-stats-inner {
                    display: flex;
                    align-items: center;
                    gap: var(--space-3xl);
                }

                .sv-stats-eyebrow {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.18em;
                    color: rgba(255,255,255,0.2);
                    white-space: nowrap;
                    writing-mode: vertical-rl;
                    transform: rotate(180deg);
                    flex-shrink: 0;
                }

                .sv-stats-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    border-left: 1px solid rgba(255,255,255,0.06);
                    flex: 1;
                }

                .sv-stat {
                    padding: var(--space-lg) var(--space-2xl);
                    border-right: 1px solid rgba(255,255,255,0.06);
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }

                .sv-stat:last-child { border-right: none; }

                .sv-stat-num {
                    display: flex;
                    align-items: baseline;
                    gap: 4px;
                }

                .sv-stat-val {
                    font-family: var(--font-mono);
                    font-size: clamp(1.75rem, 2.5vw, 2.375rem);
                    font-weight: 600;
                    color: var(--color-white);
                    letter-spacing: -0.03em;
                    line-height: 1;
                }

                .sv-stat-unit {
                    font-family: var(--font-mono);
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: var(--color-accent);
                }

                .sv-stat-label {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: rgba(255,255,255,0.22);
                }

                /* ═══════════════════════════════════════════════
                   02–05 CARD GRID
                ═══════════════════════════════════════════════ */
                .sv-grid-section {
                    background: var(--color-white);
                }

                .sv-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 2px;
                    background: var(--color-border);
                }

                /* Reveal animation */
                .sv-reveal {
                    opacity: 0;
                    transform: translateY(20px);
                    transition:
                        opacity 0.65s cubic-bezier(0.16,1,0.3,1),
                        transform 0.65s cubic-bezier(0.16,1,0.3,1);
                }

                .sv-reveal.sv-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                .sv-card {
                    background: var(--color-white);
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                }

                .sv-card:hover {
                    box-shadow: inset 0 0 0 1px rgba(200,16,46,0.18);
                    z-index: 1;
                }

                /* Card photo */
                .sv-card-img {
                    position: relative;
                    height: 260px;
                    overflow: hidden;
                    flex-shrink: 0;
                }

                .sv-card-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: brightness(0.60) saturate(0.75);
                    transition: transform 0.7s cubic-bezier(0.16,1,0.3,1), filter 0.4s;
                    display: block;
                }

                .sv-card:hover .sv-card-img img {
                    transform: scale(1.06);
                    filter: brightness(0.72) saturate(0.9);
                }

                .sv-card-img-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom,
                        rgba(17,17,20,0.05) 0%,
                        rgba(17,17,20,0.6) 100%);
                }

                .sv-card-tag {
                    position: absolute;
                    bottom: var(--space-lg);
                    left: var(--space-lg);
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .sv-num--img {
                    /* inherits sv-num */
                }

                .sv-label-txt--img {
                    color: rgba(255,255,255,0.5);
                }

                /* Card body */
                .sv-card-body {
                    padding: var(--space-2xl);
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-lg);
                    flex: 1;
                }

                .sv-card-title {
                    font-family: var(--font-display);
                    font-size: clamp(1.125rem, 1.75vw, 1.5rem);
                    font-weight: 500;
                    color: var(--color-text);
                    letter-spacing: -0.025em;
                    line-height: 1.2;
                }

                .sv-card-desc {
                    font-size: 0.9375rem;
                    line-height: 1.85;
                    color: var(--color-text-light);
                    flex: 1;
                }

                /* Chips (light panel) */
                .sv-chips--light { gap: 5px; }

                .sv-chip--light {
                    color: var(--color-text-light);
                    border-color: var(--color-border);
                    background: var(--color-cream);
                }

                .sv-chip--light:hover {
                    color: var(--color-accent);
                    border-color: rgba(200,16,46,0.25);
                    background: rgba(200,16,46,0.035);
                }

                .sv-card-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    font-family: var(--font-mono);
                    font-size: 0.75rem;
                    font-weight: 500;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: var(--color-accent);
                    text-decoration: none;
                    border-bottom: 1px solid rgba(200,16,46,0.25);
                    padding-bottom: 2px;
                    width: fit-content;
                    transition: gap 0.22s, border-color 0.22s;
                    margin-top: auto;
                }

                .sv-card-link:hover {
                    gap: 9px;
                    border-color: var(--color-accent);
                }

                /* Red sweep line at card bottom */
                .sv-card-sweep {
                    position: absolute;
                    bottom: 0; left: 0; right: 0;
                    height: 2px;
                    background: var(--color-accent);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.42s cubic-bezier(0.16,1,0.3,1);
                }

                .sv-card:hover .sv-card-sweep { transform: scaleX(1); }

                /* ═══════════════════════════════════════════════
                   OUTRO · editorial split panel
                ═══════════════════════════════════════════════ */
                .sv-outro {
                    display: grid;
                    grid-template-columns: 55% 45%;
                    min-height: 420px;
                    background: var(--color-primary);
                    position: relative;
                    overflow: hidden;
                }

                /* Left: content */
                .sv-outro-left {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: var(--space-5xl) var(--space-4xl) var(--space-5xl) calc(var(--max-width) / 2 - 680px + var(--space-xl));
                    padding-left: max(var(--space-2xl), calc((100vw - var(--max-width)) / 2 + var(--space-xl)));
                    gap: var(--space-xl);
                    position: relative;
                    z-index: 2;
                }

                .sv-outro-eyebrow {
                    font-family: var(--font-mono);
                    font-size: 0.75rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.18em;
                    color: var(--color-accent);
                }

                .sv-outro-title {
                    font-family: var(--font-display);
                    font-size: clamp(2rem, 3.5vw, 3.25rem);
                    font-weight: 300;
                    color: var(--color-white);
                    letter-spacing: -0.03em;
                    line-height: 1.12;
                }

                .sv-outro-sub {
                    font-family: var(--font-mono);
                    font-size: 0.75rem;
                    font-weight: 500;
                    line-height: 2;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.28);
                }

                /* Outro CTA */
                .sv-cta-btn--outro {
                    margin-top: var(--space-md);
                }

                /* Right: diagonal-cut machinery photo */
                .sv-outro-right {
                    position: relative;
                    clip-path: polygon(12% 0, 100% 0, 100% 100%, 0 100%);
                    overflow: hidden;
                }

                .sv-outro-right img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center 30%;
                    filter: grayscale(30%) brightness(0.42) saturate(0.7);
                    display: block;
                    transition: transform 10s ease-out;
                }

                .sv-outro:hover .sv-outro-right img {
                    transform: scale(1.04);
                }

                .sv-outro-right-grad {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to right,
                        var(--color-primary) 0%,
                        rgba(17,17,20,0.2) 40%,
                        transparent 100%);
                }

                /* ═══════════════════════════════════════════════
                   RESPONSIVE
                ═══════════════════════════════════════════════ */
                @media (max-width: 1100px) {
                    .sv-feature,
                    .sv-outro {
                        grid-template-columns: 1fr;
                        min-height: auto;
                    }

                    .sv-feature-img,
                    .sv-outro-right {
                        height: 380px;
                        clip-path: none;
                    }

                    .sv-blade { display: none; }

                    .sv-feature-img-overlay {
                        background: linear-gradient(to bottom,
                            transparent 30%, rgba(17,17,20,1) 100%);
                    }

                    .sv-feature-inner {
                        padding: var(--space-3xl) var(--space-2xl);
                    }

                    .sv-outro-left {
                        padding: var(--space-3xl) var(--space-2xl);
                    }

                    .sv-outro-right-grad {
                        background: linear-gradient(to bottom,
                            var(--color-primary) 0%,
                            transparent 40%);
                    }
                }

                @media (max-width: 900px) {
                    .sv-stats-inner { flex-direction: column; align-items: flex-start; gap: var(--space-xl); }
                    .sv-stats-eyebrow { writing-mode: horizontal-tb; transform: none; }
                    .sv-stats-grid { grid-template-columns: repeat(2, 1fr); }
                }

                @media (max-width: 768px) {
                    .sv-grid { grid-template-columns: 1fr; }
                    .sv-specs { grid-template-columns: 1fr 1fr; }
                }

                @media (max-width: 480px) {
                    .sv-feature-inner { padding: var(--space-xl) var(--space-lg); }
                    .sv-card-body { padding: var(--space-xl) var(--space-lg); }
                    .sv-outro-left { padding: var(--space-2xl) var(--space-lg); }
                    .sv-specs { grid-template-columns: 1fr; }
                }

            `}</style>
        </div>
    );
};

export default ServicesPage;
