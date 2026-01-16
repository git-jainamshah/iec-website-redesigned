import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className="about section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <h2>Trusted by India's Leading Industries</h2>
                        <p className="about-lead">
                            Indian Engineering Company is one of India's largest and most 
                            trusted facilities for industrial motor and generator repair.
                        </p>
                        <p>
                            Established in 1998, we specialize in rewinding and repairing 
                            high voltage motors and generators up to 250 MW capacity. Our 
                            state-of-the-art facility spans 300,000 sq.ft with a 75,000 sq.ft 
                            dedicated shop floor.
                        </p>
                        <p>
                            We serve industries across Gujarat, Maharashtra, Madhya Pradesh, 
                            Rajasthan, Karnataka, and international clients with unmatched 
                            quality and reliability.
                        </p>
                        <Link to="/about" className="btn btn-outline">
                            Learn More About Us →
                        </Link>
                    </div>

                    <div className="about-features">
                        <div className="feature">
                            <div className="feature-number">01</div>
                            <div className="feature-content">
                                <h4>ISO 9001:2008 Certified</h4>
                                <p>Quality management system certified</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-number">02</div>
                            <div className="feature-content">
                                <h4>EASA Member Since 2014</h4>
                                <p>International repair standards</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-number">03</div>
                            <div className="feature-content">
                                <h4>5 MW Captive Power</h4>
                                <p>Uninterrupted operations</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-number">04</div>
                            <div className="feature-content">
                                <h4>300 Ton Crane Capacity</h4>
                                <p>Handle the largest machinery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .about-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-16);
                    align-items: start;
                }

                .about-content h2 {
                    margin-bottom: var(--space-6);
                }

                .about-lead {
                    font-size: 1.125rem;
                    color: var(--color-gray-700);
                    margin-bottom: var(--space-4);
                }

                .about-content p {
                    margin-bottom: var(--space-4);
                }

                .about-content .btn {
                    margin-top: var(--space-4);
                }

                .about-features {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-4);
                }

                .feature {
                    display: flex;
                    gap: var(--space-4);
                    padding: var(--space-4);
                    background: var(--color-gray-50);
                    border-left: 3px solid var(--color-gray-200);
                    transition: var(--transition);
                }

                .feature:hover {
                    border-left-color: var(--color-accent);
                }

                .feature-number {
                    font-size: 0.875rem;
                    font-weight: 700;
                    color: var(--color-accent);
                }

                .feature-content h4 {
                    font-size: 0.9375rem;
                    margin-bottom: var(--space-1);
                }

                .feature-content p {
                    font-size: 0.875rem;
                    margin: 0;
                }

                @media (max-width: 900px) {
                    .about-grid {
                        grid-template-columns: 1fr;
                        gap: var(--space-8);
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
