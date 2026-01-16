import React from 'react';
import abbLogo from '../assets/clientel-logos/abb-logo.png';
import ansaldoLogo from '../assets/clientel-logos/ansaldo-logo.png';
import bhelLogo from '../assets/clientel-logos/bhel-logo.png';
import cgPowerLogo from '../assets/clientel-logos/cg-power-group-logo.png';
import kirloskarLogo from '../assets/clientel-logos/kirloskar-group-logo.png';
import marelliLogo from '../assets/clientel-logos/marelli-logo.png';
import marthonLogo from '../assets/clientel-logos/marthon-energy-logo.png';
import tecoLogo from '../assets/clientel-logos/teco-logo.png';

const clients = [
    { name: 'ABB', logo: abbLogo },
    { name: 'Ansaldo', logo: ansaldoLogo },
    { name: 'BHEL', logo: bhelLogo },
    { name: 'CG Power Group', logo: cgPowerLogo },
    { name: 'Kirloskar Group', logo: kirloskarLogo },
    { name: 'Marelli', logo: marelliLogo, invert: true },
    { name: 'Marthon Energy', logo: marthonLogo, invert: true },
    { name: 'TECO', logo: tecoLogo },
];

const Clients = () => {
    return (
        <section className="clients">
            <div className="container clients-container">
                <div className="clients-header">
                    <span className="clients-label">Trusted Globally by Industry Leaders</span>
                    <div className="clients-divider"></div>
                </div>

                <div className="clients-marquee">
                    <div className="clients-track">
                        {/* Triple set for smoother infinite loop on wide screens */}
                        {[...clients, ...clients, ...clients].map((client, idx) => (
                            <div key={idx} className="client-logo-wrapper">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className={`client-logo-img ${client.invert ? 'invert-on-light' : ''}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .clients {
                    background: var(--color-white);
                    padding: var(--space-2xl) 0;
                    border-bottom: 1px solid var(--color-border);
                }

                .clients-container {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-lg);
                }

                .clients-header {
                    display: flex;
                    align-items: center;
                    gap: var(--space-lg);
                    margin-bottom: var(--space-md);
                }

                .clients-label {
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: var(--color-muted);
                    white-space: nowrap;
                }

                .clients-divider {
                    height: 1px;
                    width: 100%;
                    background: var(--color-border);
                    opacity: 0.5;
                }

                .clients-marquee {
                    position: relative;
                    overflow: hidden;
                    padding: var(--space-md) 0;
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
                    gap: var(--space-4xl);
                    width: max-content;
                    animation: marquee 60s linear infinite;
                }

                .clients-track:hover {
                    animation-play-state: paused;
                }

                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }

                .client-logo-wrapper {
                    width: 140px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    filter: brightness(0);
                    opacity: 0.8;
                }

                .client-logo-wrapper:hover {
                    filter: none;
                    opacity: 1;
                    transform: scale(1.05);
                    cursor: pointer;
                }

                .client-logo-img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }

                /* 
                   If a logo is white-on-transparent (e.g. Marelli was 'invert:true' for dark bg),
                   it is naturally white. On a white background, it's invisible.
                   We need to invert it to make it black. 
                */
                .invert-on-light {
                    filter: invert(1);
                }

                @media (max-width: 768px) {
                    .clients-header {
                        justify-content: center;
                    }
                    
                    .clients-divider {
                        display: none;
                    }

                    .clients-track {
                        gap: var(--space-3xl);
                    }

                    .client-logo-wrapper {
                        width: 110px;
                        height: 48px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Clients;

