import React from 'react';

const facilities = [
    {
        title: 'HV Coils Making',
        desc: 'State-of-the-art coil manufacturing facility for high voltage applications'
    },
    {
        title: 'Heating Oven',
        desc: 'Industrial ovens for curing and heat treatment processes'
    },
    {
        title: 'Mechanical Workshop',
        desc: 'Fully equipped workshop for precision mechanical repairs'
    },
    {
        title: 'Dynamic Balancing',
        desc: 'Advanced balancing machines for rotors and shafts'
    },
    {
        title: 'Testing Lab',
        desc: 'Complete testing facilities for quality assurance'
    },
    {
        title: 'Crane System',
        desc: 'Heavy-duty cranes from 10 to 300 ton capacity'
    }
];

const InfrastructurePage = () => {
    return (
        <div className="page">
            <div className="page-hero">
                <div className="container">
                    <h1>Infrastructure</h1>
                    <p>State-of-the-art facilities for world-class repairs</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="infra-stats">
                        <div className="infra-stat">
                            <span className="value">300,000</span>
                            <span className="label">Sq.Ft Total Land</span>
                        </div>
                        <div className="infra-stat">
                            <span className="value">75,000</span>
                            <span className="label">Sq.Ft Shop Floor</span>
                        </div>
                        <div className="infra-stat">
                            <span className="value">300</span>
                            <span className="label">Ton Crane Capacity</span>
                        </div>
                        <div className="infra-stat">
                            <span className="value">5 MW</span>
                            <span className="label">Captive Power</span>
                        </div>
                    </div>

                    <h2 className="facilities-title">Our Facilities</h2>
                    <div className="facilities-grid">
                        {facilities.map((facility, index) => (
                            <div key={index} className="facility-card">
                                <h3>{facility.title}</h3>
                                <p>{facility.desc}</p>
                            </div>
                        ))}
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

                .infra-stats {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: var(--space-6);
                    margin-bottom: var(--space-16);
                }

                .infra-stat {
                    text-align: center;
                    padding: var(--space-8);
                    background: var(--color-gray-50);
                    border-top: 3px solid var(--color-accent);
                }

                .infra-stat .value {
                    display: block;
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: var(--color-gray-900);
                    margin-bottom: var(--space-2);
                }

                .infra-stat .label {
                    font-size: 0.8125rem;
                    color: var(--color-gray-500);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .facilities-title {
                    margin-bottom: var(--space-8);
                }

                .facilities-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: var(--space-6);
                }

                .facility-card {
                    padding: var(--space-6);
                    background: var(--color-white);
                    border: 1px solid var(--color-gray-200);
                    transition: var(--transition);
                }

                .facility-card:hover {
                    border-color: var(--color-accent);
                }

                .facility-card h3 {
                    font-size: 1rem;
                    margin-bottom: var(--space-2);
                }

                .facility-card p {
                    font-size: 0.9375rem;
                }

                @media (max-width: 900px) {
                    .infra-stats {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .facilities-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 600px) {
                    .infra-stats {
                        grid-template-columns: 1fr;
                    }

                    .facilities-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default InfrastructurePage;
