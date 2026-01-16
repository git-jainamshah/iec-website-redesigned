import React from 'react';

const metrics = [
    {
        value: '250',
        unit: 'MW',
        label: 'Repair Capacity',
        desc: 'High voltage machinery'
    },
    {
        value: '400',
        unit: '+',
        label: 'Annual Projects',
        desc: 'Delivered on time'
    },
    {
        value: '75',
        unit: 'K',
        label: 'Sq.Ft Facility',
        desc: 'State-of-the-art'
    },
    {
        value: '26',
        unit: '+',
        label: 'Years Experience',
        desc: 'Since 1998'
    }
];

const Metrics = () => {
    return (
        <section className="metrics">
            <div className="container">
                <div className="metrics-grid">
                    {metrics.map((metric, idx) => (
                        <div key={idx} className="metric-item">
                            <div className="metric-number">
                                <span className="metric-value">{metric.value}</span>
                                <span className="metric-unit">{metric.unit}</span>
                            </div>
                            <div className="metric-info">
                                <span className="metric-label">{metric.label}</span>
                                <span className="metric-desc">{metric.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .metrics {
                    background: var(--color-cream);
                    padding: var(--space-2xl) 0;
                    border-bottom: 1px solid var(--color-border);
                }

                .metrics-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: var(--space-xl);
                }

                .metric-item {
                    display: flex;
                    align-items: flex-start;
                    gap: var(--space-md);
                    padding: var(--space-lg);
                    background: var(--color-white);
                    border-left: 3px solid var(--color-accent);
                    transition: all 0.3s var(--ease-out);
                }

                .metric-item:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-lg);
                }

                .metric-number {
                    display: flex;
                    align-items: baseline;
                    flex-shrink: 0;
                }

                .metric-value {
                    font-family: var(--font-serif);
                    font-size: 2.5rem;
                    font-weight: 400;
                    color: var(--color-text);
                    line-height: 1;
                }

                .metric-unit {
                    font-family: var(--font-serif);
                    font-size: 1.25rem;
                    font-weight: 400;
                    color: var(--color-accent);
                    margin-left: 2px;
                }

                .metric-info {
                    display: flex;
                    flex-direction: column;
                    padding-top: 4px;
                }

                .metric-label {
                    font-size: 0.8125rem;
                    font-weight: 600;
                    color: var(--color-text);
                    margin-bottom: 2px;
                }

                .metric-desc {
                    font-size: 0.6875rem;
                    color: var(--color-muted);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                @media (max-width: 1024px) {
                    .metrics-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 600px) {
                    .metrics {
                        padding: var(--space-2xl) 0;
                    }

                    .metrics-grid {
                        grid-template-columns: 1fr;
                        gap: var(--space-md);
                    }

                    .metric-item {
                        padding: var(--space-md);
                    }

                    .metric-value {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Metrics;

