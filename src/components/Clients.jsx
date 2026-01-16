import React from 'react';

// Client logos - using placeholder names for now
const clients = [
    { name: 'Reliance Industries', short: 'RIL' },
    { name: 'Tata Steel', short: 'TATA' },
    { name: 'ONGC', short: 'ONGC' },
    { name: 'NTPC', short: 'NTPC' },
    { name: 'Indian Oil', short: 'IOCL' },
    { name: 'BHEL', short: 'BHEL' },
    { name: 'Adani Group', short: 'ADANI' },
    { name: 'Ultratech Cement', short: 'ULTRATECH' },
];

const Clients = () => {
    return (
        <section className="clients">
            <div className="clients-inner">
                <div className="clients-label">
                    <span>Trusted by India's leading industries</span>
                </div>
                
                <div className="clients-marquee">
                    <div className="clients-track">
                        {/* First set */}
                        {clients.map((client, idx) => (
                            <div key={idx} className="client-logo">
                                <span className="client-name">{client.short}</span>
                            </div>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {clients.map((client, idx) => (
                            <div key={`dup-${idx}`} className="client-logo">
                                <span className="client-name">{client.short}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .clients {
                    background: var(--color-primary);
                    padding: var(--space-xl) 0;
                    overflow: hidden;
                }

                .clients-inner {
                    display: flex;
                    align-items: center;
                    gap: var(--space-2xl);
                }

                .clients-label {
                    flex-shrink: 0;
                    padding-left: var(--space-2xl);
                }

                .clients-label span {
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: rgba(255, 255, 255, 0.4);
                    white-space: nowrap;
                }

                .clients-marquee {
                    flex: 1;
                    overflow: hidden;
                    mask-image: linear-gradient(
                        to right,
                        transparent,
                        black 10%,
                        black 90%,
                        transparent
                    );
                }

                .clients-track {
                    display: flex;
                    gap: var(--space-3xl);
                    animation: marquee 30s linear infinite;
                }

                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .client-logo {
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 48px;
                    padding: 0 var(--space-lg);
                }

                .client-name {
                    font-size: 1.125rem;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    color: rgba(255, 255, 255, 0.25);
                    transition: color 0.3s;
                    white-space: nowrap;
                }

                .client-logo:hover .client-name {
                    color: rgba(255, 255, 255, 0.5);
                }

                @media (max-width: 768px) {
                    .clients-inner {
                        flex-direction: column;
                        gap: var(--space-lg);
                    }

                    .clients-label {
                        padding-left: 0;
                        text-align: center;
                    }

                    .clients-track {
                        gap: var(--space-2xl);
                    }

                    .client-name {
                        font-size: 0.9375rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Clients;

