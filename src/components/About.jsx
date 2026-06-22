import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className="about-section">
            {/* Background grid texture */}
            <div className="about-grid-texture" aria-hidden="true" />

            <div className="container">
                <div className="about-grid">
                    {/* Left — Story */}
                    <div className="about-content" data-aos="fade-right">
                        <span className="about-eyebrow">About IEC</span>

                        <h2 className="about-title display-title">
                            A legacy built<br />
                            on <em>precision.</em>
                        </h2>

                        <div className="about-story">
                            <p>
                                Since 1998, Indian Engineering Company has established itself as
                                one of India's largest and most trusted facilities for industrial
                                motor and generator repair — backed by over four decades of
                                cumulative engineering expertise from our founders.
                            </p>
                            <p>
                                From a single motor rewind to a full-scale generator overhaul,
                                every job comes through one workshop complex in Vadodara — 300,000
                                square feet of vertically integrated capability with no outsourcing
                                and no excuses.
                            </p>
                        </div>

                        <div className="about-pillars">
                            {[
                                { label: 'Geographic Reach', value: '~95% of Gujarat\'s HV repair market + Pan-India' },
                                { label: 'Certification', value: 'ISO 9001 · EASA Member since 2014' },
                                { label: 'Captive Power', value: '5 MW generation — zero dependency on grid during testing' },
                            ].map((p, i) => (
                                <div key={i} className="about-pillar" data-aos="fade-up" data-aos-delay={i * 80}>
                                    <span className="pillar-label">{p.label}</span>
                                    <span className="pillar-value">{p.value}</span>
                                </div>
                            ))}
                        </div>

                        <Link to="/about" className="about-cta">
                            Discover Our Story
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right — Stats */}
                    <div className="about-stats-panel" data-aos="fade-left">
                        <div className="stats-decoration" aria-hidden="true">
                            <span>IEC</span>
                        </div>

                        <div className="stats-grid">
                            {[
                                { value: '1998', unit: '', label: 'Established', sub: 'Vadodara, Gujarat' },
                                { value: '300', unit: 'K', label: 'Sq.Ft Facility', sub: 'Total works area' },
                                { value: '75', unit: 'K', label: 'Sq.Ft Shop Floor', sub: 'Active repair bays' },
                                { value: '20', unit: 'MW', label: 'No-Load Testing', sub: 'Centralized test bed' },
                                { value: '300', unit: 'T', label: 'Crane Capacity', sub: 'Heaviest lift' },
                                { value: '27', unit: '', label: 'Fleet Vehicles', sub: 'Transport + field crew' },
                            ].map((stat, i) => (
                                <div key={i} className="stat-card" data-aos="fade-up" data-aos-delay={i * 60}>
                                    <div className="stat-number">
                                        <span className="stat-val">{stat.value}</span>
                                        {stat.unit && <span className="stat-unit">{stat.unit}</span>}
                                    </div>
                                    <span className="stat-label">{stat.label}</span>
                                    <span className="stat-sub">{stat.sub}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .about-section {
                    position: relative;
                    background: var(--color-primary);
                    padding: var(--space-5xl) 0;
                    overflow: hidden;
                }

                /* Engineering grid texture */
                .about-grid-texture {
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
                    background-size: 48px 48px;
                    mask-image: radial-gradient(ellipse at 70% 50%, rgba(0,0,0,0.6) 0%, transparent 65%);
                    -webkit-mask-image: radial-gradient(ellipse at 70% 50%, rgba(0,0,0,0.6) 0%, transparent 65%);
                    pointer-events: none;
                }

                /* ── Layout ── */
                .about-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.1fr;
                    gap: var(--space-4xl);
                    align-items: center;
                    position: relative;
                    z-index: 1;
                }

                /* ── Left: Story ── */
                .about-eyebrow {
                    display: inline-block;
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    color: var(--color-accent);
                    margin-bottom: var(--space-lg);
                }

                .about-title {
                    font-size: clamp(2.25rem, 4.5vw, 3.5rem);
                    font-weight: 400;
                    color: var(--color-white);
                    letter-spacing: -0.02em;
                    line-height: 1.05;
                    margin-bottom: var(--space-xl);
                }

                .about-title em {
                    color: var(--color-accent);
                }

                .about-story p {
                    font-size: 1rem;
                    line-height: 1.8;
                    color: rgba(255, 255, 255, 0.65);
                    margin-bottom: var(--space-md);
                }

                .about-story p:last-child {
                    margin-bottom: 0;
                }

                /* Pillars */
                .about-pillars {
                    margin: var(--space-2xl) 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                }

                .about-pillar {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    padding: var(--space-md) 0;
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                }

                .about-pillar:last-child {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                }

                .pillar-label {
                    font-size: 0.625rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: rgba(255, 255, 255, 0.4);
                }

                .pillar-value {
                    font-size: 0.9375rem;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 0.85);
                    line-height: 1.5;
                }

                /* CTA */
                .about-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.8125rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-white);
                    padding: 14px 28px;
                    border: 1px solid rgba(255, 255, 255, 0.25);
                    border-radius: 2px;
                    transition: all 0.3s var(--ease-out);
                    margin-top: var(--space-xl);
                }

                .about-cta:hover {
                    background: var(--color-accent);
                    border-color: var(--color-accent);
                    gap: 14px;
                }

                .about-cta svg {
                    transition: transform 0.3s var(--ease-out);
                }

                .about-cta:hover svg {
                    transform: translateX(4px);
                }

                /* ── Right: Stats Panel ── */
                .about-stats-panel {
                    position: relative;
                }

                /* Giant decorative "IEC" text in background */
                .stats-decoration {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-family: var(--font-serif);
                    font-size: clamp(8rem, 18vw, 16rem);
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.03);
                    letter-spacing: -0.04em;
                    pointer-events: none;
                    user-select: none;
                    white-space: nowrap;
                    line-height: 1;
                }

                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1px;
                    background: rgba(255, 255, 255, 0.08);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    position: relative;
                    z-index: 1;
                }

                .stat-card {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    padding: var(--space-xl) var(--space-lg);
                    background: rgba(10, 13, 18, 0.8);
                    transition: background 0.3s var(--ease-out);
                }

                .stat-card:hover {
                    background: rgba(22, 27, 34, 0.95);
                }

                .stat-number {
                    display: flex;
                    align-items: baseline;
                    gap: 2px;
                    margin-bottom: 4px;
                }

                .stat-val {
                    font-family: var(--font-mono);
                    font-size: clamp(1.625rem, 3vw, 2.25rem);
                    font-weight: 600;
                    color: var(--color-white);
                    line-height: 1;
                    letter-spacing: -0.02em;
                }

                .stat-unit {
                    font-family: var(--font-mono);
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--color-accent);
                    margin-left: 1px;
                }

                .stat-label {
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.75);
                    text-transform: uppercase;
                    letter-spacing: 0.06em;
                }

                .stat-sub {
                    font-size: 0.6875rem;
                    color: rgba(255, 255, 255, 0.35);
                    font-family: var(--font-mono);
                    letter-spacing: 0.02em;
                }

                /* ── Tablet ── */
                @media (max-width: 1100px) {
                    .about-grid {
                        grid-template-columns: 1fr;
                        gap: var(--space-3xl);
                    }

                    .stats-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .about-section {
                        padding: var(--space-4xl) 0;
                    }

                    .stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .stats-decoration {
                        font-size: 5rem;
                    }
                }

                @media (max-width: 480px) {
                    .stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .stat-card {
                        padding: var(--space-md);
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
