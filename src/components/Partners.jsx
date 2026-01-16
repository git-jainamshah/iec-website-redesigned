import React from 'react';

const Partners = () => {
    return (
        <section id="clients" className="partners-section section">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Our <span className="accent">Reach</span></h2>
                    <p className="section-subtitle">
                        Serving industries across India and overseas
                    </p>
                </div>

                {/* Map Placeholder */}
                <div className="map-section" data-aos="fade-up">
                    <div className="map-placeholder">
                        <div className="placeholder-icon">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                        </div>
                        <span className="placeholder-label">India Map with Service Areas</span>
                        <span className="placeholder-size">Interactive map or static image showing reach</span>
                    </div>
                </div>

                <div className="reach-grid" data-aos="fade-up">
                    <div className="reach-card">
                        <span className="reach-percentage">95%</span>
                        <h3>Gujarat</h3>
                        <p>Serving the majority of industries in the state</p>
                    </div>
                    <div className="reach-card">
                        <h3>Maharashtra</h3>
                        <p>Expanding presence across industrial zones</p>
                    </div>
                    <div className="reach-card">
                        <h3>Madhya Pradesh</h3>
                        <p>Supporting industries state-wide</p>
                    </div>
                    <div className="reach-card">
                        <h3>Rajasthan</h3>
                        <p>Reliable service across the region</p>
                    </div>
                    <div className="reach-card">
                        <h3>Karnataka</h3>
                        <p>Extending reach to southern India</p>
                    </div>
                    <div className="reach-card highlight">
                        <h3>Overseas</h3>
                        <p>International service capabilities</p>
                    </div>
                </div>

                <div className="tagline" data-aos="fade-up">
                    <blockquote>
                        "Unity is strength… When there is TEAMWORK and COLLABORATION, wonderful things can be achieved."
                    </blockquote>
                </div>
            </div>

            <style>{`
                .partners-section {
                    background-color: var(--color-white);
                }

                .map-section {
                    margin-bottom: 3rem;
                }

                .map-placeholder {
                    aspect-ratio: 16/7;
                    background: linear-gradient(135deg, var(--color-cream) 0%, var(--color-beige) 100%);
                    border: 2px dashed var(--color-gray-300);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    transition: var(--transition-base);
                }

                .map-placeholder:hover {
                    border-color: var(--color-red);
                }

                .placeholder-icon {
                    color: var(--color-gray-400);
                }

                .placeholder-label {
                    font-size: 0.875rem;
                    font-weight: 700;
                    color: var(--color-gray-600);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }

                .placeholder-size {
                    font-size: 0.75rem;
                    color: var(--color-gray-400);
                }

                .reach-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1rem;
                    margin-bottom: 3rem;
                }

                .reach-card {
                    background-color: var(--color-cream);
                    padding: 2rem;
                    text-align: center;
                    transition: var(--transition-base);
                    position: relative;
                }

                .reach-card:hover {
                    background-color: var(--color-black);
                    color: var(--color-white);
                    transform: translateY(-3px);
                }

                .reach-card.highlight {
                    background-color: var(--color-red);
                    color: var(--color-white);
                }

                .reach-card.highlight:hover {
                    background-color: var(--color-red-dark);
                }

                .reach-percentage {
                    font-size: 2rem;
                    font-weight: 700;
                    color: var(--color-red);
                    font-family: var(--font-display);
                    display: block;
                    margin-bottom: 0.5rem;
                }

                .reach-card:hover .reach-percentage {
                    color: var(--color-red);
                }

                .reach-card h3 {
                    font-size: 1rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                    color: var(--color-text-primary);
                    transition: var(--transition-base);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .reach-card:hover h3 {
                    color: var(--color-white);
                }

                .reach-card.highlight h3 {
                    color: var(--color-white);
                }

                .reach-card p {
                    font-size: 0.875rem;
                    color: var(--color-text-secondary);
                    margin: 0;
                    transition: var(--transition-base);
                }

                .reach-card:hover p {
                    color: rgba(255, 255, 255, 0.7);
                }

                .reach-card.highlight p {
                    color: rgba(255, 255, 255, 0.9);
                }

                .tagline {
                    text-align: center;
                    padding-top: 2rem;
                    border-top: 1px solid var(--color-gray-200);
                }

                .tagline blockquote {
                    font-size: 1.25rem;
                    font-style: italic;
                    color: var(--color-text-secondary);
                    max-width: 700px;
                    margin: 0 auto;
                    font-weight: 500;
                    line-height: 1.6;
                }

                @media (max-width: 600px) {
                    .reach-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
            `}</style>
        </section>
    );
};

export default Partners;
