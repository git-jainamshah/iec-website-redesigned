import React from 'react';

const AboutPage = () => {
    return (
        <div className="page">
            <div className="page-hero">
                <div className="container">
                    <h1>About Us</h1>
                    <p>India's trusted partner in industrial motor and generator repair</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="content-grid">
                        <div>
                            <h2>Our Story</h2>
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
                                shop floor, equipped with heavy-duty cranes (10-300 tons) and 5 MW 
                                captive power generation for uninterrupted operations.
                            </p>
                        </div>
                        <div className="stats-sidebar">
                            <div className="stat-box">
                                <span className="stat-number">1998</span>
                                <span className="stat-text">Year Established</span>
                            </div>
                            <div className="stat-box">
                                <span className="stat-number">250MW</span>
                                <span className="stat-text">Max Repair Capacity</span>
                            </div>
                            <div className="stat-box">
                                <span className="stat-number">300,000</span>
                                <span className="stat-text">Sq.Ft Total Area</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .page-hero {
                    background: var(--color-gray-900);
                    padding: calc(var(--header-height) + var(--space-16)) 0 var(--space-16);
                }

                .page-hero h1 {
                    color: var(--color-white);
                    margin-bottom: var(--space-2);
                }

                .page-hero p {
                    color: var(--color-gray-400);
                    font-size: 1.125rem;
                }

                .content-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: var(--space-12);
                }

                .content-grid p {
                    margin-bottom: var(--space-4);
                    line-height: 1.8;
                }

                .content-grid h2 {
                    margin-bottom: var(--space-6);
                }

                .stats-sidebar {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-4);
                }

                .stat-box {
                    background: var(--color-gray-50);
                    padding: var(--space-6);
                    text-align: center;
                    border-left: 3px solid var(--color-accent);
                }

                .stat-number {
                    display: block;
                    font-size: 2rem;
                    font-weight: 700;
                    color: var(--color-gray-900);
                }

                .stat-text {
                    font-size: 0.875rem;
                    color: var(--color-gray-500);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                @media (max-width: 768px) {
                    .content-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default AboutPage;
