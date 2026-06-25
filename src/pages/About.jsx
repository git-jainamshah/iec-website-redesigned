import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import heroBg from '../assets/iec-hero-about.jpg';
import imgCoilFloor from '../assets/iec-coil-floor.jpg';
import imgStatorLift from '../assets/iec-stator-lift.jpg';
import imgCoilExpanding from '../assets/iec-coil-expanding.jpg';

const keyStats = [
    { value: '1998', label: 'Year established' },
    { value: '20K', unit: 'HP', label: 'Max motor rewinding' },
    { value: '300K', unit: 'sq ft', label: 'Total facility area' },
    { value: '40+', unit: 'yrs', label: 'Industry experience' },
];

const milestones = [
    { year: '1984', title: 'Industry Roots', desc: 'Late Anil Bhardwaj begins his career in heavy electrical engineering, building expertise in HV rotating machines across Gujarat.' },
    { year: '1998', title: 'IEC Founded', desc: 'Indian Engineering Company formally established in Ranoli, near Vadodara, bringing specialised HV motor and generator repair to the region.' },
    { year: '2005', title: 'Ranoli Works', desc: 'Main workshop at Ranoli Works commissioned · dedicated electrical bays, coil shop, and in-house testing infrastructure.' },
    { year: '2012', title: 'Raika Expansion', desc: 'Second facility at Raika inaugurated, adding heavy mechanical bays, 300-ton crane capacity, and balancing machines up to 45 tons.' },
    { year: '2014', title: 'EASA Membership', desc: 'IEC joins the Electrical Apparatus Service Association (EASA) · adopting international best-practice standards across all repair operations.' },
    { year: '2024', title: 'Market Leader', desc: 'Serving an estimated 95% of Gujarat\'s HV motor and generator repair market, with clients spanning 10+ states and major industrial sectors.' },
];

const values = [
    {
        num: '01',
        title: 'Quality Assurance',
        desc: 'Every repair meets ISO 9001 and EASA international standards with rigorous in-process testing at every stage · from incoming inspection to final hi-pot and load testing.',
    },
    {
        num: '02',
        title: 'Timely Delivery',
        desc: 'We understand that downtime costs more than the repair itself. Our streamlined workshop workflow and captive power ensure fast, reliable turnaround without compromising on quality.',
    },
    {
        num: '03',
        title: 'Client Partnership',
        desc: 'From condition assessment to commissioning, we build lasting relationships through transparency, honest technical consultation, and dedicated project support on every job.',
    },
];

const AboutPage = () => {
    return (
        <div className="about-page">
            <PageHero
                label="Our Story"
                title="About IEC"
                subtitle="India's trusted partner in heavy industrial motor and generator repair since 1998."
                breadcrumbs={[{ label: 'About' }]}
                bgImage={heroBg}
            />

            {/* ── Story · dark, flows from PageHero ──────────── */}
            <section className="ap-story">
                <div className="container">
                    <div className="ap-story-grid">

                        <div className="ap-story-left">
                            <h2 className="ap-story-heading">
                                Built on<br />
                                precision.<br />
                                Driven by<br />
                                trust.
                            </h2>
                            <div className="ap-creds">
                                <span className="ap-cred">ISO 9001:2008</span>
                                <span className="ap-cred ap-cred-accent">EASA Member</span>
                                <span className="ap-cred">Est. 1984</span>
                            </div>
                        </div>

                        <div className="ap-story-right">
                            <p>
                                Founded in 1998 by Late Anil Bhardwaj and backed by over 40 years of
                                industry experience, Indian Engineering Company has grown into one of
                                Gujarat's largest and most trusted facilities for heavy industrial motor
                                and generator repair. We serve an estimated 95% of the state's HV
                                motor/generator repair industry, alongside clients across Maharashtra,
                                Madhya Pradesh, Rajasthan, Karnataka, and beyond.
                            </p>
                            <p>
                                Our commitment to quality and reliability has earned the trust of power
                                plants, dams, cement works, and petrochemical industries across India.
                                ISO 9001:2008 certified and an EASA member since 2014, we maintain the
                                highest international standards on every repair that leaves our works.
                            </p>
                            <p>
                                Our facility spans 300,000 sq.ft across our Ranoli and Raika works,
                                with a dedicated 75,000 sq.ft shop floor, heavy-duty cranes up to
                                300 tons, and 5 MW captive power generation for uninterrupted operations.
                            </p>
                            <Link to="/contact" className="ap-cta">
                                Work with us
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                    </div>

                    {/* Stat rail */}
                    <div className="ap-stats">
                        {keyStats.map((s, i) => (
                            <div className="ap-stat" key={i}>
                                <div className="ap-stat-num">
                                    <span className="ap-stat-val">{s.value}</span>
                                    {s.unit && <span className="ap-stat-unit">{s.unit}</span>}
                                </div>
                                <span className="ap-stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Timeline ───────────────────────────────────── */}
            <section className="ap-timeline">
                <div className="container">
                    <div className="ap-tl-header">
                        <p className="ap-tl-eyebrow">Our Journey</p>
                        <h2 className="ap-tl-heading">40 Years of Engineering Excellence</h2>
                    </div>
                    <div className="ap-tl-track">
                        <div className="ap-tl-line" />
                        {milestones.map((m, i) => (
                            <div className="ap-tl-item" key={m.year} style={{ '--i': i }}>
                                <div className="ap-tl-dot" />
                                <div className="ap-tl-content">
                                    <span className="ap-tl-year">{m.year}</span>
                                    <h3 className="ap-tl-title">{m.title}</h3>
                                    <p className="ap-tl-desc">{m.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Photo Gallery · 3-panel cinematic ──────────── */}
            <section className="ap-gallery">
                <div className="ap-gallery-header">
                    <div className="container">
                        <div className="ap-gallery-meta">
                            <span className="ap-gallery-tag">Inside IEC</span>
                            <span className="ap-gallery-location">Ranoli &amp; Raika Works · Gujarat</span>
                        </div>
                    </div>
                </div>
                <div className="ap-gallery-grid">
                    <div className="ap-gallery-panel ap-gallery-panel--accent">
                        <img src={imgCoilFloor} alt="IEC coil manufacturing floor with workers" />
                        <div className="ap-gallery-caption">
                            <h3 className="ap-gallery-caption-title">HV Coil Manufacturing</h3>
                            <em className="ap-gallery-caption-sub">Ranoli Works · 75,000 sq ft floor</em>
                        </div>
                    </div>
                    <div className="ap-gallery-panel">
                        <img src={imgStatorLift} alt="Massive stator being lowered by 300T crane" />
                        <div className="ap-gallery-caption">
                            <h3 className="ap-gallery-caption-title">300T Crane in Action</h3>
                            <em className="ap-gallery-caption-sub">Raika Works · Heavy mechanical bay</em>
                        </div>
                    </div>
                    <div className="ap-gallery-panel">
                        <img src={imgCoilExpanding} alt="Workers at coil expanding machines" />
                        <div className="ap-gallery-caption">
                            <h3 className="ap-gallery-caption-title">Coil Expanding Station</h3>
                            <em className="ap-gallery-caption-sub">Precision winding team</em>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Values ─────────────────────────────────────── */}
            <section className="ap-values">
                <div className="container ap-values-inner">
                    <div className="ap-values-header">
                        <p className="ap-values-eyebrow">Our Foundation</p>
                        <h2 className="ap-values-heading">Mission &amp; Values</h2>
                    </div>
                </div>
                <div className="ap-values-grid">
                    {values.map((v) => (
                        <div className="ap-value" key={v.num}>
                            <div className="ap-value-ghost">{v.num}</div>
                            <div className="ap-value-body">
                                <span className="ap-value-num">{v.num}</span>
                                <h3 className="ap-value-title">{v.title}</h3>
                                <p className="ap-value-desc">{v.desc}</p>
                            </div>
                            <div className="ap-value-line" />
                        </div>
                    ))}
                </div>
            </section>

            <style>{`

                .about-page { min-height: 100vh; }

                /* ── Story (dark) ─────────────────────────────── */
                .ap-story {
                    background: var(--color-primary);
                    padding: var(--space-5xl) 0 0;
                    border-top: 1px solid rgba(255,255,255,0.06);
                }

                .ap-story-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.4fr;
                    gap: var(--space-5xl);
                    padding-bottom: var(--space-4xl);
                    border-bottom: 1px solid rgba(255,255,255,0.07);
                    align-items: start;
                }

                .ap-story-heading {
                    font-family: var(--font-serif);
                    font-size: clamp(2.25rem, 3.5vw, 3.25rem);
                    font-weight: 700;
                    color: var(--color-white);
                    line-height: 1.08;
                    letter-spacing: -0.03em;
                    position: sticky;
                    top: calc(var(--header-height) + 32px);
                    margin-bottom: var(--space-2xl);
                }

                .ap-creds {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    position: sticky;
                    top: calc(var(--header-height) + 200px);
                }

                .ap-cred {
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: rgba(255,255,255,0.38);
                    padding: 5px 10px;
                    border: 1px solid rgba(255,255,255,0.1);
                }

                .ap-cred-accent {
                    color: var(--color-accent);
                    border-color: rgba(200,16,46,0.3);
                }

                .ap-story-right p {
                    font-size: 1.0625rem;
                    line-height: 1.88;
                    color: rgba(255,255,255,0.58);
                    margin-bottom: var(--space-xl);
                }

                .ap-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    margin-top: var(--space-md);
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: var(--color-white);
                    text-decoration: underline;
                    text-underline-offset: 4px;
                    text-decoration-color: var(--color-accent);
                    transition: gap 0.2s, color 0.2s;
                }

                .ap-cta:hover {
                    color: var(--color-accent);
                    gap: 13px;
                }

                /* Stat rail */
                .ap-stats {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                }

                .ap-stat {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-sm);
                    padding: var(--space-2xl) var(--space-xl);
                    border-right: 1px solid rgba(255,255,255,0.07);
                }

                .ap-stat:first-child { padding-left: 0; }
                .ap-stat:last-child { border-right: none; }

                .ap-stat-num {
                    display: flex;
                    align-items: baseline;
                    gap: 6px;
                    line-height: 1;
                }

                .ap-stat-val {
                    font-family: var(--font-mono);
                    font-size: clamp(2.75rem, 4.5vw, 4rem);
                    font-weight: 600;
                    color: var(--color-white);
                    letter-spacing: -0.03em;
                    line-height: 1;
                }

                .ap-stat-unit {
                    font-family: var(--font-mono);
                    font-size: clamp(1rem, 1.5vw, 1.25rem);
                    font-weight: 500;
                    color: var(--color-accent);
                    letter-spacing: -0.01em;
                }

                .ap-stat-label {
                    font-size: 0.75rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.07em;
                    color: rgba(255,255,255,0.32);
                }

                /* ── Timeline (LIGHT) ───────────────────────── */
                .ap-timeline {
                    background: #f4f5f7;
                    padding: var(--space-5xl) 0;
                    border-top: 3px solid var(--color-accent);
                }

                .ap-tl-header {
                    margin-bottom: var(--space-4xl);
                }

                .ap-tl-eyebrow {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    color: var(--color-accent);
                    margin-bottom: var(--space-md);
                }

                .ap-tl-heading {
                    font-family: var(--font-serif) !important;
                    font-size: clamp(1.75rem, 3vw, 2.5rem) !important;
                    font-weight: 700 !important;
                    color: var(--color-text) !important;
                    letter-spacing: -0.025em;
                    line-height: 1.1;
                }

                .ap-tl-track {
                    position: relative;
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 0;
                    padding-top: var(--space-3xl);
                }

                .ap-tl-line {
                    position: absolute;
                    top: 10px;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: rgba(0,0,0,0.08);
                }

                .ap-tl-line::after {
                    content: '';
                    position: absolute;
                    left: 0; top: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(to right, var(--color-accent) 0%, rgba(200,16,46,0.15) 100%);
                }

                .ap-tl-item {
                    padding: 0 var(--space-lg);
                    position: relative;
                }

                .ap-tl-item:first-child { padding-left: 0; }
                .ap-tl-item:last-child { padding-right: 0; }

                .ap-tl-dot {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: var(--color-accent);
                    border: 3px solid #f4f5f7;
                    box-shadow: 0 0 0 2px var(--color-accent);
                    margin-bottom: var(--space-xl);
                    position: relative;
                    z-index: 1;
                    transition: transform 0.2s, box-shadow 0.2s;
                }

                .ap-tl-item:hover .ap-tl-dot {
                    transform: scale(1.4);
                    box-shadow: 0 0 0 4px rgba(200,16,46,0.2);
                }

                .ap-tl-year {
                    font-family: var(--font-mono);
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--color-accent);
                    letter-spacing: 0.04em;
                    display: block;
                    margin-bottom: var(--space-sm);
                }

                .ap-tl-title {
                    font-family: var(--font-serif);
                    font-size: 1rem !important;
                    font-weight: 700 !important;
                    color: var(--color-text) !important;
                    letter-spacing: -0.01em;
                    line-height: 1.3;
                    margin-bottom: var(--space-sm);
                }

                .ap-tl-desc {
                    font-size: 0.8125rem;
                    line-height: 1.65;
                    color: var(--color-text-light);
                }

                /* ── Photo Gallery (3-panel cinematic) ──────────── */
                .ap-gallery {
                    background: var(--color-primary);
                    padding-bottom: var(--space-5xl);
                }

                .ap-gallery-header {
                    padding: var(--space-3xl) 0 var(--space-xl);
                    border-top: 1px solid rgba(255,255,255,0.07);
                }

                .ap-gallery-meta {
                    display: flex;
                    align-items: center;
                    gap: var(--space-xl);
                }

                .ap-gallery-tag {
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.16em;
                    color: var(--color-white);
                    background: var(--color-accent);
                    padding: 4px 10px;
                }

                .ap-gallery-location {
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    color: rgba(255,255,255,0.28);
                }

                .ap-gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 3px;
                }

                .ap-gallery-panel {
                    position: relative;
                    overflow: hidden;
                    height: 540px;
                    cursor: pointer;
                }

                .ap-gallery-panel img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: brightness(0.68) saturate(0.85);
                    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s;
                    display: block;
                }

                .ap-gallery-panel:hover img {
                    transform: scale(1.07);
                    filter: brightness(0.8) saturate(1.0);
                }

                /* Red left-edge accent on first panel */
                .ap-gallery-panel--accent::before {
                    content: '';
                    position: absolute;
                    top: var(--space-xl);
                    bottom: var(--space-xl);
                    left: 0;
                    width: 3px;
                    background: var(--color-accent);
                    z-index: 2;
                    transition: height 0.3s;
                }

                .ap-gallery-caption {
                    position: absolute;
                    bottom: 0; left: 0; right: 0;
                    padding: var(--space-3xl) var(--space-xl) var(--space-xl);
                    background: linear-gradient(to top, rgba(9,9,12,0.92) 0%, rgba(9,9,12,0.5) 55%, transparent 100%);
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    transform: translateY(6px);
                    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .ap-gallery-panel:hover .ap-gallery-caption {
                    transform: translateY(0);
                }

                .ap-gallery-caption-title {
                    font-family: var(--font-serif) !important;
                    font-size: 1.0625rem !important;
                    font-weight: 700 !important;
                    color: var(--color-white) !important;
                    letter-spacing: -0.015em;
                    line-height: 1.25;
                }

                .ap-gallery-caption-sub {
                    font-style: normal;
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: rgba(255,255,255,0.38);
                }

                @media (max-width: 900px) {
                    .ap-gallery-grid { grid-template-columns: repeat(2, 1fr); }
                    .ap-gallery-panel:last-child { display: none; }
                    .ap-gallery-panel { height: 380px; }
                }

                @media (max-width: 600px) {
                    .ap-gallery-grid { grid-template-columns: 1fr; }
                    .ap-gallery-panel:last-child { display: block; }
                    .ap-gallery-panel { height: 300px; }
                }

                /* ── Values (WHITE · clearly below dark photo strip) ── */
                .ap-values {
                    background: var(--color-white);
                    padding: var(--space-5xl) 0 0;
                    border-top: 3px solid var(--color-accent);
                }

                .ap-values-inner {
                    padding-bottom: var(--space-3xl);
                    border-bottom: 1px solid var(--color-border);
                }

                .ap-values-header {
                    max-width: 640px;
                }

                .ap-values-eyebrow {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    color: var(--color-accent);
                    margin-bottom: var(--space-md);
                }

                /* !important overrides global h2 { font-size: clamp(2rem,4vw,3rem) } */
                .ap-values-heading {
                    font-family: var(--font-serif) !important;
                    font-size: clamp(1.75rem, 2.5vw, 2.5rem) !important;
                    font-weight: 700 !important;
                    color: var(--color-text) !important;
                    letter-spacing: -0.025em;
                    line-height: 1.1;
                }

                /* Cards grid · full bleed */
                .ap-values-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    border-top: 1px solid var(--color-border);
                    margin-top: var(--space-4xl);
                }

                .ap-value {
                    position: relative;
                    padding: var(--space-4xl) var(--space-3xl) var(--space-5xl);
                    border-right: 1px solid var(--color-border);
                    overflow: hidden;
                    transition: background 0.3s;
                }

                .ap-value:last-child { border-right: none; }

                .ap-value:hover {
                    background: #f9fafb;
                }

                /* Oversized ghost number · fills card top */
                .ap-value-ghost {
                    font-family: var(--font-mono);
                    font-size: clamp(6rem, 10vw, 10rem);
                    font-weight: 700;
                    color: rgba(0,0,0,0.04);
                    letter-spacing: -0.06em;
                    line-height: 1;
                    position: absolute;
                    top: var(--space-2xl);
                    right: var(--space-xl);
                    pointer-events: none;
                    user-select: none;
                    transition: color 0.3s;
                }

                .ap-value:hover .ap-value-ghost {
                    color: rgba(200,16,46,0.06);
                }

                /* Red animated bottom line */
                .ap-value-line {
                    position: absolute;
                    bottom: 0; left: 0; right: 0;
                    height: 3px;
                    background: var(--color-accent);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .ap-value:hover .ap-value-line { transform: scaleX(1); }

                .ap-value-body {
                    position: relative;
                    z-index: 1;
                }

                .ap-value-num {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    font-weight: 600;
                    color: var(--color-accent);
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    display: block;
                    margin-bottom: var(--space-2xl);
                }

                .ap-value-title {
                    font-family: var(--font-serif);
                    font-size: clamp(1.375rem, 2vw, 1.75rem);
                    font-weight: 700;
                    color: var(--color-text);
                    letter-spacing: -0.025em;
                    line-height: 1.15;
                    margin-bottom: var(--space-lg);
                }

                .ap-value-desc {
                    font-size: 0.9375rem;
                    line-height: 1.8;
                    color: var(--color-text-light);
                }

                /* ── Responsive ──────────────────────────────── */
                @media (max-width: 1024px) {
                    .ap-story-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: var(--space-3xl);
                    }
                    .ap-tl-track { grid-template-columns: repeat(3, 1fr); gap: var(--space-3xl) 0; }
                    .ap-tl-line { display: none; }
                }

                @media (max-width: 768px) {
                    .ap-story-grid {
                        grid-template-columns: 1fr;
                        gap: var(--space-2xl);
                    }
                    .ap-story-heading {
                        position: static;
                        font-size: clamp(2rem, 7vw, 2.75rem);
                    }
                    .ap-creds { position: static; }
                    .ap-stats {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .ap-stat:nth-child(2) { border-right: none; }
                    .ap-stat:nth-child(3) {
                        border-top: 1px solid rgba(255,255,255,0.07);
                        padding-left: 0;
                    }
                    .ap-stat:nth-child(4) {
                        border-right: none;
                        border-top: 1px solid rgba(255,255,255,0.07);
                    }
                    .ap-tl-track { grid-template-columns: repeat(2, 1fr); }
                    .ap-values-grid { grid-template-columns: 1fr; }
                    .ap-value {
                        border-right: none;
                        border-bottom: 1px solid var(--color-border);
                        padding: var(--space-3xl) var(--space-2xl) var(--space-4xl);
                    }
                    .ap-value:last-child { border-bottom: none; }
                }

                @media (max-width: 480px) {
                    .ap-values { padding-top: var(--space-4xl); }
                    .ap-value { padding: var(--space-2xl) var(--space-lg) var(--space-3xl); }
                    .ap-value-ghost { font-size: 5rem; }
                }

            `}</style>
        </div>
    );
};

export default AboutPage;
