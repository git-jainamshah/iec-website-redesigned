import React from 'react';

const Leadership = () => {
    return (
        <div className="leadership-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <span className="label">Our People</span>
                    <h1 className="display-title">
                        Leadership
                    </h1>
                    <p className="page-subtitle">
                        Meet the team driving India's industrial engineering excellence.
                    </p>
                </div>
            </section>

            {/* Leadership Grid */}
            <section className="section">
                <div className="container">
                    <div className="leadership-grid">
                        {/* Founder */}
                        <div className="leader-card featured">
                            <div className="leader-image">
                                <div className="image-placeholder">
                                    <span>Photo</span>
                                </div>
                            </div>
                            <div className="leader-info">
                                <span className="leader-role">Founder & Managing Director</span>
                                <h3 className="leader-name">Mr. Anil Patel</h3>
                                <p className="leader-bio">
                                    With over 26 years of experience in industrial motor repair, 
                                    Mr. Anil Patel founded Indian Engineering Company in 1998. 
                                    Under his leadership, IEC has grown to become one of India's 
                                    largest and most trusted repair facilities.
                                </p>
                            </div>
                        </div>

                        {/* Other Leaders */}
                        <div className="leader-card">
                            <div className="leader-image">
                                <div className="image-placeholder">
                                    <span>Photo</span>
                                </div>
                            </div>
                            <div className="leader-info">
                                <span className="leader-role">Technical Director</span>
                                <h3 className="leader-name">Coming Soon</h3>
                            </div>
                        </div>

                        <div className="leader-card">
                            <div className="leader-image">
                                <div className="image-placeholder">
                                    <span>Photo</span>
                                </div>
                            </div>
                            <div className="leader-info">
                                <span className="leader-role">Operations Head</span>
                                <h3 className="leader-name">Coming Soon</h3>
                            </div>
                        </div>

                        <div className="leader-card">
                            <div className="leader-image">
                                <div className="image-placeholder">
                                    <span>Photo</span>
                                </div>
                            </div>
                            <div className="leader-info">
                                <span className="leader-role">Quality Assurance</span>
                                <h3 className="leader-name">Coming Soon</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .leadership-page {
                    min-height: 100vh;
                }

                .page-hero {
                    background: var(--color-primary);
                    padding: calc(var(--header-height) + var(--space-4xl)) 0 var(--space-4xl);
                }

                .page-hero .label {
                    color: var(--color-accent);
                    margin-bottom: var(--space-md);
                }

                .page-hero .display-title {
                    color: var(--color-white);
                    margin-bottom: var(--space-md);
                }

                .page-subtitle {
                    font-size: 1.125rem;
                    color: rgba(255, 255, 255, 0.6);
                    max-width: 500px;
                }

                /* Leadership Grid */
                .leadership-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: var(--space-2xl);
                }

                .leader-card {
                    background: var(--color-white);
                    border: 1px solid var(--color-border);
                    border-radius: 8px;
                    overflow: hidden;
                    transition: all 0.3s var(--ease-out);
                }

                .leader-card:hover {
                    box-shadow: var(--shadow-lg);
                    transform: translateY(-4px);
                }

                .leader-card.featured {
                    grid-column: span 3;
                    display: grid;
                    grid-template-columns: 300px 1fr;
                }

                .leader-image {
                    aspect-ratio: 1;
                    background: var(--color-light);
                    overflow: hidden;
                }

                .leader-card.featured .leader-image {
                    aspect-ratio: auto;
                    height: 100%;
                }

                .image-placeholder {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--color-cream);
                    color: var(--color-muted);
                    font-size: 0.875rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }

                .leader-info {
                    padding: var(--space-xl);
                }

                .leader-card.featured .leader-info {
                    padding: var(--space-2xl);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .leader-role {
                    display: block;
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-accent);
                    margin-bottom: var(--space-sm);
                }

                .leader-name {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: var(--color-text);
                    margin-bottom: var(--space-sm);
                }

                .leader-card.featured .leader-name {
                    font-family: var(--font-serif);
                    font-size: 1.75rem;
                    font-weight: 500;
                }

                .leader-bio {
                    font-size: 1rem;
                    line-height: 1.8;
                    color: var(--color-text-light);
                }

                @media (max-width: 1024px) {
                    .leadership-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .leader-card.featured {
                        grid-column: span 2;
                    }
                }

                @media (max-width: 768px) {
                    .leadership-grid {
                        grid-template-columns: 1fr;
                    }

                    .leader-card.featured {
                        grid-column: span 1;
                        grid-template-columns: 1fr;
                    }

                    .leader-card.featured .leader-image {
                        aspect-ratio: 4/3;
                    }
                }
            `}</style>
        </div>
    );
};

export default Leadership;

