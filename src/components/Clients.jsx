import React from 'react';
import abbLogo from '../assets/clientel-logos/abb-logo.png';
import ansaldoLogo from '../assets/clientel-logos/ansaldo-logo.png';
import bhelLogo from '../assets/clientel-logos/bhel-logo.png';
import cgPowerLogo from '../assets/clientel-logos/cg-power-group-logo.png';
import kirloskarLogo from '../assets/clientel-logos/kirloskar-group-logo.png';
import marelliLogo from '../assets/clientel-logos/marelli-logo.png';
import marthonLogo from '../assets/clientel-logos/marthon-energy-logo.png';
import tecoLogo from '../assets/clientel-logos/teco-logo.png';

// Client logos
const clients = [
    { name: 'ABB', logo: abbLogo },
    { name: 'Ansaldo', logo: ansaldoLogo },
    { name: 'BHEL', logo: bhelLogo },
    { name: 'CG Power Group', logo: cgPowerLogo },
    { name: 'Kirloskar Group', logo: kirloskarLogo },
    { name: 'Marelli', logo: marelliLogo },
    { name: 'Marthon Energy', logo: marthonLogo },
    { name: 'TECO', logo: tecoLogo },
];

const Clients = () => {
    return (
        <section className="clients">
            <div className="clients-inner">
                <div className="clients-label">
                    <span>Trusted Globally</span>
                </div>
                
                <div className="clients-marquee">
                    <div className="clients-track">
                        {/* First set */}
                        {clients.map((client, idx) => (
                            <div key={idx} className="client-logo">
                                <img src={client.logo} alt={client.name} />
                            </div>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {clients.map((client, idx) => (
                            <div key={`dup-${idx}`} className="client-logo">
                                <img src={client.logo} alt={client.name} />
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
                    width: 140px;
                    height: 48px;
                    padding: 0 var(--space-lg);
                    opacity: 0.6;
                    transition: opacity 0.3s;
                }

                .client-logo:hover {
                    opacity: 1;
                }

                .client-logo img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    object-position: center;
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

                    .client-logo {
                        width: 120px;
                        height: 40px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Clients;

