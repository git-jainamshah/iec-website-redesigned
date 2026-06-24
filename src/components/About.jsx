import React from 'react';
import { Link } from 'react-router-dom';

const keyStats = [
    { value: '300K', unit: 'sq ft', label: 'Total facility' },
    { value: '20',   unit: 'MW',   label: 'No-load test bed' },
    { value: '300',  unit: 'T',    label: 'Crane capacity' },
    { value: '40+',  unit: 'yrs',  label: 'In operation' },
];

const About = () => {
    return (
        <section className="about">
            <div className="container">

                {/* Top row: headline left, blurb + CTA right */}
                <div className="about-top" data-aos="fade-up">

                    <div className="about-headline">
                        <p className="about-eyebrow">About IEC</p>
                        <h2 className="about-heading">
                            A single workshop.<br />
                            Every capability<br />
                            under one roof.
                        </h2>
                    </div>

                    <div className="about-side">
                        <p className="about-blurb">
                            Since 1998, one facility in Vadodara has handled the motor
                            and generator repairs keeping Gujarat's power plants, cement
                            works, and petrochemical plants running.
                        </p>
                        <div className="about-creds">
                            <span className="about-cred">ISO 9001</span>
                            <span className="about-cred about-cred-accent">EASA Member</span>
                            <span className="about-cred">Est. 1998</span>
                        </div>
                        <Link to="/about" className="about-link">
                            Our full story
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                </div>

                {/* Bottom: 4 dramatic stat cells */}
                <div className="about-stats" data-aos="fade-up" data-aos-delay="60">
                    {keyStats.map((s, i) => (
                        <div className="about-stat" key={i}>
                            <div className="stat-number">
                                <span className="stat-val">{s.value}</span>
                                <span className="stat-unit">{s.unit}</span>
                            </div>
                            <span className="stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>

            </div>

            <style>{`

                .about {
                    background: var(--color-white);
                    padding: var(--space-5xl) 0 0;
                    border-top: 1px solid var(--color-border);
                }

                /* ── Top row ── */
                .about-top {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-5xl);
                    align-items: end;
                    padding-bottom: var(--space-4xl);
                    border-bottom: 1px solid var(--color-border);
                }

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
                    font-size: clamp(2.25rem, 4.5vw, 3.75rem);
                    font-weight: 700;
                    color: var(--color-text);
                    line-height: 1.02;
                    letter-spacing: -0.03em;
                }

                /* Side column */
                .about-side {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-xl);
                    padding-bottom: 4px;
                }

                .about-blurb {
                    font-size: 1.0625rem;
                    color: var(--color-text-light);
                    line-height: 1.75;
                    max-width: 460px;
                }

                .about-creds {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }

                .about-cred {
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: rgba(22,28,40,0.45);
                    padding: 5px 10px;
                    border: 1px solid var(--color-border);
                }

                .about-cred-accent {
                    color: var(--color-accent);
                    border-color: rgba(200,16,46,0.25);
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
                    width: fit-content;
                }

                .about-link:hover {
                    color: var(--color-accent);
                    gap: 13px;
                }

                /* ── Stats rail ── */
                .about-stats {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                }

                .about-stat {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-sm);
                    padding: var(--space-2xl) var(--space-xl);
                    border-right: 1px solid var(--color-border);
                    transition: background 0.2s;
                }

                .about-stat:first-child {
                    padding-left: 0;
                }

                .about-stat:last-child {
                    border-right: none;
                }

                .about-stat:hover {
                    background: var(--color-cream);
                }

                .stat-number {
                    display: flex;
                    align-items: baseline;
                    gap: 6px;
                    line-height: 1;
                }

                .stat-val {
                    font-family: var(--font-mono);
                    font-size: clamp(2.5rem, 4vw, 3.75rem);
                    font-weight: 700;
                    color: var(--color-text);
                    letter-spacing: -0.03em;
                }

                .stat-unit {
                    font-family: var(--font-mono);
                    font-size: clamp(1rem, 1.5vw, 1.375rem);
                    font-weight: 500;
                    color: var(--color-accent);
                    letter-spacing: -0.01em;
                }

                .stat-label {
                    font-size: 0.8125rem;
                    font-weight: 500;
                    color: var(--color-muted);
                    text-transform: uppercase;
                    letter-spacing: 0.06em;
                }

                /* ── Responsive ── */
                @media (max-width: 1024px) {
                    .about-top {
                        grid-template-columns: 1fr;
                        gap: var(--space-2xl);
                    }
                }

                @media (max-width: 768px) {
                    .about {
                        padding-top: var(--space-4xl);
                    }
                    .about-stats {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .about-stat:nth-child(2) {
                        border-right: none;
                    }
                    .about-stat:nth-child(3) {
                        border-top: 1px solid var(--color-border);
                        padding-left: 0;
                    }
                    .about-stat:nth-child(4) {
                        border-right: none;
                        border-top: 1px solid var(--color-border);
                    }
                }

                @media (max-width: 480px) {
                    .about-stats {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
