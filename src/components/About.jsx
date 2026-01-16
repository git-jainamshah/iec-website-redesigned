import React from 'react';

const stats = [
    { number: '300,000', unit: 'sq.ft', label: 'Total Land Area' },
    { number: '75,000', unit: 'sq.ft', label: 'Shop Floor with Cranes' },
    { number: '5', unit: 'MW', label: 'Captive Power Generation' },
    { number: '20', unit: 'MW', label: 'No Load Trial Capacity' },
];

const About = () => {
    return (
        <section id="about" className="about-section section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content" data-aos="fade-right">
                        <h2 className="about-title">
                            About <span className="accent">IEC</span>
                        </h2>
                        
                        <p className="about-lead">
                            Indian Engineering Company is one of the largest repair shops in the field of 
                            rewinding and repairing high voltage motors and generators.
                        </p>
                        
                        <p className="about-text">
                            Located at the outskirts of Vadodara, Gujarat, we have well-trained and 
                            dedicated engineers with a highly skilled workforce committed to delivering 
                            quality service to industries across India and overseas.
                        </p>
                        
                        <p className="about-text">
                            We carry out an average of 400 HT motor rewinding, refurbishing, and 
                            overhauling jobs per year. All repair work and testing is strictly 
                            performed as per IS Standards.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight">
                                <span className="highlight-icon">✓</span>
                                <span>EASA Member (USA) Since 2014</span>
                            </div>
                            <div className="highlight">
                                <span className="highlight-icon">✓</span>
                                <span>Serving 95% of Gujarat Industries</span>
                            </div>
                            <div className="highlight">
                                <span className="highlight-icon">✓</span>
                                <span>Materials from Reputed Manufacturers</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-media" data-aos="fade-left">
                        {/* Photo Placeholder - Workshop Overview */}
                        <div className="media-placeholder about-image-placeholder">
                            <div className="placeholder-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                    <circle cx="8.5" cy="8.5" r="1.5"/>
                                    <polyline points="21 15 16 10 5 21"/>
                                </svg>
                            </div>
                            <span className="placeholder-label">Workshop Overview Photo</span>
                            <span className="placeholder-size">Recommended: 600×400px</span>
                        </div>
                    </div>
                </div>

                <div className="about-stats" data-aos="fade-up">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-value">
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-unit">{stat.unit}</span>
                            </div>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="capabilities-section" data-aos="fade-up">
                    <h3 className="capabilities-title">Imagine a Repair Shop</h3>
                    <div className="capabilities-grid">
                        <div className="capability">
                            <span className="capability-value">10-300T</span>
                            <span className="capability-label">Crane Capacities</span>
                        </div>
                        <div className="capability">
                            <span className="capability-value">2 MW</span>
                            <span className="capability-label">Full Load Trial</span>
                        </div>
                        <div className="capability">
                            <span className="capability-value">250 MW</span>
                            <span className="capability-label">Max Motor/Generator Repair</span>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .about-section {
                    background-color: var(--color-white);
                }

                .about-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    align-items: center;
                    margin-bottom: 4rem;
                }

                .about-title {
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 200;
                    margin-bottom: 1.5rem;
                    color: var(--color-text-primary);
                    text-transform: uppercase;
                    letter-spacing: -0.02em;
                }

                .about-title .accent {
                    color: var(--color-red);
                }

                .about-lead {
                    font-size: 1.25rem;
                    font-weight: 300;
                    color: var(--color-text-primary);
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                }

                .about-text {
                    font-size: 1rem;
                    color: var(--color-text-secondary);
                    line-height: 1.8;
                    margin-bottom: 1rem;
                    font-weight: 400;
                }

                .about-highlights {
                    margin-top: 2rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .highlight {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-size: 0.9375rem;
                    font-weight: 500;
                    color: var(--color-text-primary);
                }

                .highlight-icon {
                    color: var(--color-red);
                    font-weight: 500;
                    font-size: 1.125rem;
                }

                .about-media {
                    position: relative;
                }

                .about-image-placeholder {
                    aspect-ratio: 4/3;
                    background: linear-gradient(135deg, var(--color-cream) 0%, var(--color-beige) 100%);
                    border: 2px dashed var(--color-gray-300);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    transition: var(--transition-base);
                }

                .about-image-placeholder:hover {
                    border-color: var(--color-red);
                    background: linear-gradient(135deg, var(--color-beige) 0%, var(--color-cream) 100%);
                }

                .placeholder-icon {
                    color: var(--color-gray-400);
                }

                .placeholder-label {
                    font-size: 0.875rem;
                    font-weight: 700;
                    color: var(--color-gray-600);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .placeholder-size {
                    font-size: 0.75rem;
                    color: var(--color-gray-400);
                }

                .about-stats {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1.5rem;
                    margin-bottom: 4rem;
                }

                .stat-card {
                    background-color: var(--color-cream);
                    padding: 2rem;
                    text-align: center;
                    transition: var(--transition-base);
                }

                .stat-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-lg);
                }

                .stat-value {
                    display: flex;
                    align-items: baseline;
                    justify-content: center;
                    gap: 0.25rem;
                    margin-bottom: 0.5rem;
                }

                .stat-number {
                    font-size: 2.5rem;
                    font-weight: 200;
                    color: var(--color-text-primary);
                    font-family: var(--font-display);
                }

                .stat-unit {
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: var(--color-red);
                }

                .stat-label {
                    font-size: 0.75rem;
                    color: var(--color-text-secondary);
                    margin: 0;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-weight: 400;
                }

                .capabilities-section {
                    padding: 3rem;
                    background-color: var(--color-black);
                    color: var(--color-white);
                }

                .capabilities-title {
                    font-size: 1.25rem;
                    font-weight: 300;
                    text-align: center;
                    margin-bottom: 2rem;
                    color: var(--color-white);
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                }

                .capabilities-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                    text-align: center;
                }

                .capability {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .capability-value {
                    font-size: 3rem;
                    font-weight: 200;
                    color: var(--color-red);
                    font-family: var(--font-display);
                }

                .capability-label {
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.6);
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    font-weight: 400;
                }

                @media (max-width: 900px) {
                    .about-grid {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }

                    .about-stats {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .capabilities-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                }

                @media (max-width: 600px) {
                    .about-stats {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
