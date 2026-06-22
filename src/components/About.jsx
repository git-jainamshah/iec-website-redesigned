import React from 'react';
import { Link } from 'react-router-dom';

const stats = [
    { value: '300K', label: 'sq. ft. facility', note: 'Total works area, Vadodara' },
    { value: '75K',  label: 'sq. ft. shop floor', note: 'Active repair bays' },
    { value: '20 MW', label: 'no-load test capacity', note: 'Centralized test bed' },
    { value: '300 T', label: 'crane capacity', note: 'Heaviest single lift' },
    { value: '27',   label: 'fleet vehicles', note: 'Transport and field crew' },
    { value: '5 MW', label: 'captive power', note: 'Zero grid dependency during test' },
];

const About = () => {
    return (
        <section className="about">
            <div className="container about-inner">

                {/* Left: text */}
                <div className="about-left" data-aos="fade-up">
                    <p className="about-eyebrow">About IEC</p>

                    <h2 className="about-heading">
                        A single workshop.<br />
                        Every capability<br />
                        under one roof.
                    </h2>

                    <p className="about-body">
                        Since 1998, Indian Engineering Company has grown into one of India's
                        largest facilities for industrial motor and generator repair. Our workshop
                        in Vadodara handles everything in-house: HV coil making, dynamic
                        balancing, mechanical machining, and high-voltage testing.
                    </p>

                    <p className="about-body">
                        We serve power generation companies, cement plants, petrochemical
                        refineries, and manufacturing facilities across Gujarat and beyond.
                        Every repair is handled by experienced engineers, backed by ISO 9001
                        quality systems and EASA accreditation.
                    </p>

                    <div className="about-facts">
                        <div className="about-fact">
                            <span className="fact-label">Certifications</span>
                            <span className="fact-value">ISO 9001 certified. EASA member since 2014.</span>
                        </div>
                        <div className="about-fact">
                            <span className="fact-label">Geographic reach</span>
                            <span className="fact-value">Serving most of Gujarat's HV repair market and pan-India clients.</span>
                        </div>
                        <div className="about-fact">
                            <span className="fact-label">Founded</span>
                            <span className="fact-value">1998 in Vadodara, Gujarat.</span>
                        </div>
                    </div>

                    <Link to="/about" className="about-link">
                        Our full story
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Right: numbers */}
                <div className="about-right" data-aos="fade-up" data-aos-delay="80">
                    <div className="about-stats">
                        {stats.map((s, i) => (
                            <div className="about-stat" key={i}>
                                <span className="stat-num">{s.value}</span>
                                <div className="stat-text">
                                    <span className="stat-label">{s.label}</span>
                                    <span className="stat-note">{s.note}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="about-established">
                        Established 1998
                    </p>
                </div>

            </div>

            <style>{`

                .about {
                    background: var(--color-white);
                    padding: var(--space-5xl) 0;
                    border-top: 1px solid var(--color-border);
                }

                .about-inner {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-5xl);
                    align-items: start;
                }

                /* Left */
                .about-eyebrow {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.16em;
                    color: var(--color-accent);
                    margin-bottom: var(--space-lg);
                }

                .about-heading {
                    font-family: var(--font-serif);
                    font-size: clamp(2rem, 4vw, 3.25rem);
                    font-weight: 700;
                    color: var(--color-text);
                    line-height: 1.05;
                    letter-spacing: -0.025em;
                    margin-bottom: var(--space-xl);
                }

                .about-body {
                    font-size: 1rem;
                    color: var(--color-text-light);
                    line-height: 1.8;
                    margin-bottom: var(--space-lg);
                }

                .about-facts {
                    margin: var(--space-2xl) 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                }

                .about-fact {
                    display: grid;
                    grid-template-columns: 140px 1fr;
                    gap: var(--space-lg);
                    padding: var(--space-md) 0;
                    border-top: 1px solid var(--color-border);
                    align-items: baseline;
                }

                .about-fact:last-child {
                    border-bottom: 1px solid var(--color-border);
                }

                .fact-label {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: var(--color-muted);
                }

                .fact-value {
                    font-size: 0.9375rem;
                    color: var(--color-text);
                    line-height: 1.5;
                }

                .about-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: var(--color-text);
                    text-decoration: underline;
                    text-underline-offset: 4px;
                    text-decoration-color: var(--color-accent);
                    transition: color 0.2s, gap 0.2s;
                    margin-top: var(--space-xl);
                }

                .about-link:hover {
                    color: var(--color-accent);
                    gap: 12px;
                }

                /* Right: stats */
                .about-right {
                    padding-top: var(--space-xl);
                }

                .about-stats {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                }

                .about-stat {
                    display: flex;
                    align-items: baseline;
                    gap: var(--space-xl);
                    padding: var(--space-lg) 0;
                    border-bottom: 1px solid var(--color-border);
                }

                .about-stat:first-child {
                    border-top: 1px solid var(--color-border);
                }

                .stat-num {
                    font-family: var(--font-mono);
                    font-size: clamp(1.5rem, 2.5vw, 2rem);
                    font-weight: 700;
                    color: var(--color-text);
                    letter-spacing: -0.02em;
                    flex-shrink: 0;
                    min-width: 90px;
                }

                .stat-text {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }

                .stat-label {
                    font-size: 0.9375rem;
                    font-weight: 500;
                    color: var(--color-text);
                    line-height: 1.3;
                }

                .stat-note {
                    font-size: 0.75rem;
                    color: var(--color-muted);
                    line-height: 1.4;
                }

                .about-established {
                    margin-top: var(--space-2xl);
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    color: var(--color-muted);
                }

                /* Responsive */
                @media (max-width: 1024px) {
                    .about-inner {
                        grid-template-columns: 1fr;
                        gap: var(--space-3xl);
                    }
                    .about-right {
                        padding-top: 0;
                    }
                }

                @media (max-width: 768px) {
                    .about {
                        padding: var(--space-4xl) 0;
                    }
                    .about-fact {
                        grid-template-columns: 1fr;
                        gap: 4px;
                    }
                    .about-stat {
                        gap: var(--space-lg);
                    }
                    .stat-num {
                        min-width: 70px;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
