import React from 'react';

const infrastructureData = [
    { value: '300,000', unit: 'sq.ft', label: 'Total Land' },
    { value: '75,000', unit: 'sq.ft', label: 'Shop Floor with Crane' },
    { value: '10-300', unit: 'Tons', label: 'Crane Capacities' },
    { value: '2', unit: 'MW', label: 'Full Load Trial' },
    { value: '20', unit: 'MW', label: 'No Load Trial' },
    { value: '5', unit: 'MW', label: 'Captive Power' },
];

const Infrastructure = () => {
    return (
        <section id="infrastructure" className="infrastructure-section section">
            <div className="container">
                <div className="infrastructure-header">
                    <div className="section-title" data-aos="fade-up">
                        <h2>World-Class <span className="accent">Infrastructure</span></h2>
                        <p className="section-subtitle">
                            Equipped to handle motor and generator repairs up to 250 MW
                        </p>
                    </div>
                </div>

                {/* Infrastructure Visual Grid */}
                <div className="infrastructure-visual" data-aos="fade-up">
                    <div className="infra-image-large">
                        <div className="infra-image-placeholder">
                            <div className="placeholder-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                    <circle cx="8.5" cy="8.5" r="1.5"/>
                                    <polyline points="21 15 16 10 5 21"/>
                                </svg>
                            </div>
                            <span className="placeholder-label">Aerial View / Workshop Panorama</span>
                            <span className="placeholder-size">Recommended: 1200×600px</span>
                        </div>
                    </div>

                    <div className="infra-images-small">
                        <div className="infra-image-placeholder small">
                            <div className="placeholder-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                    <circle cx="8.5" cy="8.5" r="1.5"/>
                                    <polyline points="21 15 16 10 5 21"/>
                                </svg>
                            </div>
                            <span className="placeholder-label">Crane Operations</span>
                        </div>
                        <div className="infra-image-placeholder small">
                            <div className="placeholder-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                    <circle cx="8.5" cy="8.5" r="1.5"/>
                                    <polyline points="21 15 16 10 5 21"/>
                                </svg>
                            </div>
                            <span className="placeholder-label">Testing Lab</span>
                        </div>
                        <div className="infra-image-placeholder small">
                            <div className="placeholder-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                    <circle cx="8.5" cy="8.5" r="1.5"/>
                                    <polyline points="21 15 16 10 5 21"/>
                                </svg>
                            </div>
                            <span className="placeholder-label">Equipment Storage</span>
                        </div>
                    </div>
                </div>

                <div className="infrastructure-grid" data-aos="fade-up">
                    {infrastructureData.map((item, index) => (
                        <div 
                            key={index} 
                            className="infra-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                        >
                            <div className="infra-value">
                                <span className="infra-number">{item.value}</span>
                                <span className="infra-unit">{item.unit}</span>
                            </div>
                            <p className="infra-label">{item.label}</p>
                        </div>
                    ))}
                </div>

                <div className="infrastructure-note" data-aos="fade-up">
                    <p>
                        All repair work and testing carried out strictly as per IS Standards. 
                        Materials procured from reputed manufacturers and tested at certified labs.
                    </p>
                </div>
            </div>

            <style>{`
                .infrastructure-section {
                    background-color: var(--color-cream);
                }

                .infrastructure-visual {
                    margin-bottom: 3rem;
                    display: grid;
                    gap: 1.5rem;
                }

                .infra-image-large {
                    width: 100%;
                }

                .infra-image-placeholder {
                    aspect-ratio: 2/1;
                    background: linear-gradient(135deg, var(--color-gray-200) 0%, var(--color-white) 100%);
                    border: 2px dashed var(--color-gray-300);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    transition: var(--transition-base);
                }

                .infra-image-placeholder:hover {
                    border-color: var(--color-red);
                    background: linear-gradient(135deg, var(--color-white) 0%, var(--color-gray-200) 100%);
                }

                .infra-images-small {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                }

                .infra-image-placeholder.small {
                    aspect-ratio: 4/3;
                }

                .placeholder-icon {
                    color: var(--color-gray-400);
                }

                .placeholder-label {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--color-gray-500);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }

                .placeholder-size {
                    font-size: 0.6875rem;
                    color: var(--color-gray-400);
                }

                .infrastructure-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                    gap: 1.5rem;
                }

                .infra-card {
                    background-color: var(--color-white);
                    padding: 2rem;
                    text-align: center;
                    border-bottom: 3px solid var(--color-red);
                    transition: var(--transition-base);
                }

                .infra-card:hover {
                    box-shadow: var(--shadow-lg);
                    transform: translateY(-3px);
                }

                .infra-value {
                    display: flex;
                    align-items: baseline;
                    justify-content: center;
                    gap: 0.25rem;
                    margin-bottom: 0.5rem;
                }

                .infra-number {
                    font-size: 2.5rem;
                    font-weight: 200;
                    color: var(--color-text-primary);
                    font-family: var(--font-display);
                }

                .infra-unit {
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: var(--color-red);
                }

                .infra-label {
                    font-size: 0.75rem;
                    color: var(--color-text-secondary);
                    margin: 0;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-weight: 400;
                }

                .infrastructure-note {
                    margin-top: 3rem;
                    text-align: center;
                }

                .infrastructure-note p {
                    font-size: 1rem;
                    color: var(--color-text-secondary);
                    max-width: 700px;
                    margin: 0 auto;
                }

                @media (max-width: 768px) {
                    .infra-images-small {
                        grid-template-columns: 1fr;
                    }

                    .infrastructure-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
            `}</style>
        </section>
    );
};

export default Infrastructure;
