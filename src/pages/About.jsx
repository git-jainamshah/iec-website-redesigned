import React from 'react';
import PageHero from '../components/PageHero';

const AboutPage = () => {
    return (
        <div className="about-page">
            <PageHero
                label="Our Story"
                title="About Us"
                subtitle="India's trusted partner in industrial motor and generator repair since 1998."
                breadcrumbs={[{ label: 'About' }]}
            />

            {/* Our Story */}
            <section className="section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-narrative">
                            <span className="label text-accent">Who We Are</span>
                            <h2>Built on precision.<br />Driven by trust.</h2>
                            <div className="divider" style={{ marginBottom: 'var(--space-xl)' }} />
                            <p>
                                Established in 1998, Indian Engineering Company has grown to become
                                one of India's largest and most trusted facilities for industrial
                                motor and generator repair.
                            </p>
                            <p>
                                Our commitment to quality and reliability has earned us the trust
                                of leading industries across India. With ISO 9001:2008 certification
                                and EASA membership since 2014, we maintain the highest international
                                standards in every repair.
                            </p>
                            <p>
                                Our sprawling facility spans 300,000 sq.ft with a dedicated 75,000 sq.ft
                                shop floor, equipped with heavy-duty cranes (10–300 tons) and 5 MW
                                captive power generation for uninterrupted operations.
                            </p>
                        </div>
                        <div className="about-stats">
                            <div className="stat-card">
                                <span className="stat-value">1998</span>
                                <span className="stat-label">Year Established</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-value">250MW</span>
                                <span className="stat-label">Max Repair Capacity</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-value">300K</span>
                                <span className="stat-label">Sq.Ft Total Area</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-value">26+</span>
                                <span className="stat-label">Years of Excellence</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="section bg-light">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
                        <span className="label text-accent">Our Foundation</span>
                        <h2 style={{ marginTop: 'var(--space-md)' }}>Mission & Values</h2>
                    </div>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h4>Quality Assurance</h4>
                            <p>Every repair meets ISO 9001 and EASA international standards with rigorous testing at every stage.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <h4>Timely Delivery</h4>
                            <p>We understand downtime costs. Our streamlined processes ensure fast turnaround without compromising quality.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h4>Client Partnership</h4>
                            <p>We build lasting relationships through transparency, expert consultation, and dedicated project support.</p>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .about-page {
                    min-height: 100vh;
                }

                .about-grid {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    gap: var(--space-4xl);
                    align-items: start;
                }

                .about-narrative .label {
                    display: block;
                    margin-bottom: var(--space-md);
                }

                .about-narrative h2 {
                    margin-bottom: var(--space-lg);
                    line-height: 1.25;
                }

                .about-narrative p {
                    margin-bottom: var(--space-lg);
                    font-size: 1rem;
                    line-height: 1.85;
                }

                .about-stats {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-md);
                }

                .stat-card {
                    background: var(--color-cream);
                    padding: var(--space-xl) var(--space-lg);
                    text-align: center;
                    border-left: 3px solid var(--color-accent);
                    transition: all 0.3s var(--ease-out);
                }

                .stat-card:hover {
                    transform: translateY(-2px);
                    box-shadow: var(--shadow-md);
                }

                .stat-value {
                    display: block;
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: var(--color-text);
                    margin-bottom: 4px;
                }

                .stat-label {
                    font-size: 0.6875rem;
                    text-transform: uppercase;
                    letter-spacing: 0.06em;
                    color: var(--color-muted);
                }

                /* Values */
                .values-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: var(--space-2xl);
                }

                .value-card {
                    text-align: center;
                    padding: var(--space-2xl) var(--space-xl);
                }

                .value-icon {
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    background: rgba(200, 16, 46, 0.06);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto var(--space-lg);
                }

                .value-card h4 {
                    margin-bottom: var(--space-sm);
                    font-weight: 600;
                }

                .value-card p {
                    font-size: 0.9375rem;
                    line-height: 1.7;
                }

                @media (max-width: 900px) {
                    .about-grid {
                        grid-template-columns: 1fr;
                        gap: var(--space-2xl);
                    }

                    .about-stats {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .values-grid {
                        grid-template-columns: 1fr;
                        gap: var(--space-lg);
                    }
                }
            `}</style>
        </div>
    );
};

export default AboutPage;
