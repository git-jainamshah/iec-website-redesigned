import React from 'react';

const metrics = [
    {
        value: '20,000',
        unit: 'HP',
        label: 'Motor Rewinding Capacity',
        sub: 'Up to 13.8 kV'
    },
    {
        value: '20',
        unit: 'MW',
        label: 'No-Load Testing Bed',
        sub: 'Centralized control room'
    },
    {
        value: '75K',
        unit: '',
        label: 'Sq.Ft Shop Floor',
        sub: '300K sq.ft total works'
    },
    {
        value: '40+',
        unit: '',
        label: 'Years Industry Experience',
        sub: 'Est. 1984 · Ranoli, Gujarat'
    }
];

const Metrics = () => {
    return (
        <section className="metrics-section">
            {/* Thin accent top border */}
            <div className="metrics-accent-line" aria-hidden="true" />

            <div className="container">
                <div className="metrics-grid">
                    {metrics.map((metric, idx) => (
                        <div
                            key={idx}
                            className="metric-item"
                            data-aos="fade-up"
                            data-aos-delay={idx * 80}
                        >
                            <div className="metric-number">
                                <span className="metric-val">{metric.value}</span>
                                {metric.unit && (
                                    <span className="metric-unit">{metric.unit}</span>
                                )}
                            </div>
                            <div className="metric-info">
                                <span className="metric-label">{metric.label}</span>
                                <span className="metric-sub">{metric.sub}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .metrics-section {
                    background: var(--color-dark);
                    padding: var(--space-4xl) 0;
                    position: relative;
                    overflow: hidden;
                }

                .metrics-section::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
                    background-size: 80px 80px;
                    pointer-events: none;
                }

                .metrics-accent-line {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, var(--color-accent) 40%, var(--color-accent) 60%, transparent);
                }

                .metrics-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    position: relative;
                    z-index: 1;
                }

                .metric-item {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-md);
                    padding: var(--space-xl) var(--space-xl);
                    border-left: 1px solid rgba(255, 255, 255, 0.08);
                    transition: background 0.3s var(--ease-out);
                    position: relative;
                }

                .metric-item::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: var(--color-accent);
                    transition: width 0.4s var(--ease-out);
                }

                .metric-item:hover::before {
                    width: 100%;
                }

                .metric-item:first-child {
                    border-left: none;
                }

                .metric-item:hover {
                    background: rgba(255, 255, 255, 0.02);
                }

                .metric-number {
                    display: flex;
                    align-items: baseline;
                    gap: 4px;
                }

                .metric-val {
                    font-family: var(--font-mono);
                    font-size: clamp(2.75rem, 5vw, 4.5rem);
                    font-weight: 600;
                    color: var(--color-white);
                    line-height: 1;
                    letter-spacing: -0.03em;
                }

                .metric-unit {
                    font-family: var(--font-mono);
                    font-size: clamp(1.25rem, 2vw, 1.875rem);
                    font-weight: 500;
                    color: var(--color-accent);
                    line-height: 1;
                    letter-spacing: -0.01em;
                }

                .metric-info {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .metric-label {
                    font-size: 0.8125rem;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.75);
                    text-transform: uppercase;
                    letter-spacing: 0.06em;
                }

                .metric-sub {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    color: rgba(255, 255, 255, 0.35);
                    letter-spacing: 0.04em;
                }

                @media (max-width: 900px) {
                    .metrics-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .metric-item:nth-child(3) {
                        border-left: none;
                    }

                    .metric-item:nth-child(3),
                    .metric-item:nth-child(4) {
                        border-top: 1px solid rgba(255, 255, 255, 0.08);
                    }
                }

                @media (max-width: 480px) {
                    .metrics-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .metric-item {
                        padding: var(--space-lg) var(--space-md);
                    }
                }
            `}</style>
        </section>
    );
};

export default Metrics;
