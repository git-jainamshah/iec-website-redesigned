import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import imgCoilFloor from '../assets/iec-coil-floor.jpg';
import imgStatorLift from '../assets/iec-stator-lift.jpg';
import imgCoilExpanding from '../assets/iec-coil-expanding.jpg';

const keyStats = [
    { value: '1998', label: 'Year established' },
    { value: '20K', unit: 'HP', label: 'Max motor rewinding' },
    { value: '300K', unit: 'sq ft', label: 'Total facility area' },
    { value: '40+', unit: 'yrs', label: 'Industry experience' },
];

const values = [
    {
        num: '01',
        title: 'Quality Assurance',
        desc: 'Every repair meets ISO 9001 and EASA international standards with rigorous in-process testing at every stage — from incoming inspection to final hi-pot and load testing.',
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
            />

            {/* ── Story — dark, flows from PageHero ──────────── */}
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
                                <span className="ap-cred">Est. 1998</span>
                            </div>
                        </div>

                        <div className="ap-story-right">
                            <p>
                                Founded in 1998 by Mr. Anil Bhardwaj and backed by over 40 years of
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

            {/* ── Photo strip — cinematic ─────────────────────── */}
            <section className="ap-photos">
                <div className="ap-photo-grid">
                    <div className="ap-photo ap-photo--wide">
                        <img src={imgCoilFloor} alt="IEC coil manufacturing floor with workers" />
                        <div className="ap-photo-label">
                            <span>HV Coil Manufacturing Floor</span>
                            <em>Ranoli Works, Vadodara</em>
                        </div>
                    </div>
                    <div className="ap-photo-col">
                        <div className="ap-photo">
                            <img src={imgStatorLift} alt="Massive stator being lowered into workshop by crane" />
                            <div className="ap-photo-label">
                                <span>300T Crane in Action</span>
                                <em>Stator lift, Raika Works</em>
                            </div>
                        </div>
                        <div className="ap-photo">
                            <img src={imgCoilExpanding} alt="Workers at coil expanding machines" />
                            <div className="ap-photo-label">
                                <span>Coil Expanding Station</span>
                                <em>Precision winding team</em>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Values — light, clean ───────────────────────── */}
            <section className="ap-values">
                <div className="container">
                    <div className="ap-values-header">
                        <div>
                            <p className="ap-values-eyebrow">Our Foundation</p>
                            <h2 className="ap-values-heading">Mission &amp; Values</h2>
                        </div>
                        <span className="ap-values-count">03 Core Principles</span>
                    </div>
                    <div className="ap-values-grid">
                        {values.map((v) => (
                            <div className="ap-value" key={v.num}>
                                <span className="ap-value-num">{v.num}</span>
                                <h3 className="ap-value-title">{v.title}</h3>
                                <p className="ap-value-desc">{v.desc}</p>
                            </div>
                        ))}
                    </div>
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
                    font-size: clamp(2.5rem, 4vw, 3.5rem);
                    font-weight: 700;
                    color: var(--color-white);
                    letter-spacing: -0.03em;
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

                /* ── Photo strip ─────────────────────────────── */
                .ap-photos {
                    background: var(--color-primary);
                    padding: var(--space-3xl) 0 0;
                }

                .ap-photo-grid {
                    display: grid;
                    grid-template-columns: 1.6fr 1fr;
                    gap: 3px;
                    height: 480px;
                }

                .ap-photo-col {
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                }

                .ap-photo {
                    position: relative;
                    overflow: hidden;
                    flex: 1;
                }

                .ap-photo img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: brightness(0.72) saturate(0.9);
                    transition: transform 0.6s var(--ease-out), filter 0.4s;
                    display: block;
                }

                .ap-photo:hover img {
                    transform: scale(1.04);
                    filter: brightness(0.82) saturate(1.05);
                }

                .ap-photo-label {
                    position: absolute;
                    bottom: 0; left: 0; right: 0;
                    padding: var(--space-md) var(--space-lg);
                    background: linear-gradient(to top, rgba(5,7,10,0.82) 0%, transparent 100%);
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }

                .ap-photo-label span {
                    font-size: 0.8125rem;
                    font-weight: 600;
                    color: var(--color-white);
                    line-height: 1.2;
                }

                .ap-photo-label em {
                    font-style: normal;
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: rgba(255,255,255,0.4);
                }

                @media (max-width: 768px) {
                    .ap-photo-grid {
                        grid-template-columns: 1fr;
                        height: auto;
                    }
                    .ap-photo--wide { height: 260px; }
                    .ap-photo-col { flex-direction: row; height: 180px; }
                }

                @media (max-width: 480px) {
                    .ap-photo-col { flex-direction: column; height: auto; }
                    .ap-photo-col .ap-photo { height: 160px; }
                }

                /* ── Values (light) ───────────────────────────── */
                .ap-values {
                    background: var(--color-white);
                    padding: var(--space-5xl) 0 var(--space-5xl);
                    border-top: 4px solid var(--color-accent);
                }

                .ap-values-header {
                    margin-bottom: var(--space-4xl);
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: var(--space-2xl);
                    border-bottom: 1px solid var(--color-border);
                    padding-bottom: var(--space-2xl);
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

                .ap-values-heading {
                    font-family: var(--font-serif);
                    font-size: clamp(2rem, 3.5vw, 2.75rem);
                    font-weight: 700;
                    color: var(--color-text);
                    letter-spacing: -0.025em;
                    line-height: 1.1;
                }

                .ap-values-count {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: rgba(0,0,0,0.2);
                    white-space: nowrap;
                }

                .ap-values-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 0;
                }

                .ap-value {
                    padding: var(--space-3xl) var(--space-2xl);
                    border-top: 3px solid var(--color-border);
                    border-right: 1px solid var(--color-border);
                    position: relative;
                    transition: border-top-color 0.25s;
                    overflow: hidden;
                }

                .ap-value:first-child { padding-left: 0; }
                .ap-value:last-child { border-right: none; }

                .ap-value::before {
                    content: '';
                    position: absolute;
                    top: -3px; left: 0;
                    width: 100%;
                    height: 3px;
                    background: var(--color-accent);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .ap-value:hover::before { transform: scaleX(1); }

                .ap-value-num {
                    font-family: var(--font-mono);
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: rgba(0,0,0,0.06);
                    letter-spacing: -0.05em;
                    display: block;
                    line-height: 1;
                    margin-bottom: var(--space-lg);
                }

                .ap-value-title {
                    font-family: var(--font-serif);
                    font-size: 1.375rem;
                    font-weight: 700;
                    color: var(--color-text);
                    letter-spacing: -0.02em;
                    line-height: 1.2;
                    margin-bottom: var(--space-md);
                }

                .ap-value-desc {
                    font-size: 0.9375rem;
                    line-height: 1.75;
                    color: var(--color-text-light);
                }

                /* ── Responsive ──────────────────────────────── */
                @media (max-width: 1024px) {
                    .ap-story-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: var(--space-3xl);
                    }
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
                    .ap-values-header { flex-direction: column; align-items: flex-start; }
                    .ap-values-grid {
                        grid-template-columns: 1fr;
                    }
                    .ap-value {
                        border-right: none;
                        border-top: 3px solid var(--color-border);
                    }
                    .ap-value:first-child { padding-left: var(--space-2xl); }
                }

                @media (max-width: 480px) {
                    .ap-value:first-child { padding-left: 0; }
                    .ap-values { padding: var(--space-4xl) 0; }
                }

            `}</style>
        </div>
    );
};

export default AboutPage;
