import React from 'react';

const Certifications = () => {
    return (
        <section className="certifications section">
            <div className="container">
                <div className="cert-inner">
                    <span className="cert-label">Certifications & Memberships</span>
                    <div className="cert-badges">
                        <div className="cert-badge">
                            <span className="badge-name">ISO 9001:2008</span>
                            <span className="badge-desc">Quality Management</span>
                        </div>
                        <div className="cert-divider"></div>
                        <div className="cert-badge accent">
                            <span className="badge-name">EASA Member</span>
                            <span className="badge-desc">Since 2014</span>
                        </div>
                        <div className="cert-divider"></div>
                        <div className="cert-badge">
                            <span className="badge-name">NSIC Registered</span>
                            <span className="badge-desc">Govt. Certified</span>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .certifications {
                    background: var(--color-cream);
                    padding: var(--space-2xl) 0;
                }

                .cert-inner {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: var(--space-3xl);
                }

                .cert-label {
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-muted);
                    flex-shrink: 0;
                }

                .cert-badges {
                    display: flex;
                    align-items: center;
                    gap: var(--space-2xl);
                }

                .cert-divider {
                    width: 1px;
                    height: 40px;
                    background: var(--color-border);
                }

                .cert-badge {
                    text-align: center;
                }

                .badge-name {
                    display: block;
                    font-size: 1rem;
                    font-weight: 700;
                    color: var(--color-text);
                    margin-bottom: 2px;
                }

                .cert-badge.accent .badge-name {
                    color: var(--color-accent);
                }

                .badge-desc {
                    font-size: 0.6875rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--color-muted);
                }

                @media (max-width: 1024px) {
                    .cert-inner {
                        flex-direction: column;
                        gap: var(--space-lg);
                    }

                    .cert-badges {
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: var(--space-lg);
                    }

                    .cert-divider {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default Certifications;

