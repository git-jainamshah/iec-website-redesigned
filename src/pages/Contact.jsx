import React from 'react';

const Contact = () => {
    return (
        <section className="contact-section section" style={{ paddingTop: '120px' }}>
            <div className="container">
                <div className="section-title">
                    <h2>
                        Get In <span className="accent">Touch</span>
                    </h2>
                    <p className="section-subtitle">
                        Contact us for your motor and generator repair needs. We're here to help.
                    </p>
                </div>
                
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-card">
                            <div className="contact-icon">📍</div>
                            <h3>Address</h3>
                            <p>
                                Plot No. 123, GIDC Estate,<br />
                                Ranoli, Vadodara - 391350,<br />
                                Gujarat, India
                            </p>
                        </div>
                        
                        <div className="contact-card">
                            <div className="contact-icon">📞</div>
                            <h3>Phone</h3>
                            <p><a href="tel:+919824214839">+91 9824214839</a></p>
                        </div>
                        
                        <div className="contact-card">
                            <div className="contact-icon">✉️</div>
                            <h3>Email</h3>
                            <p><a href="mailto:anil@iecindia.co.in">anil@iecindia.co.in</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .contact-section {
                    background-color: var(--color-cream);
                }

                .contact-content {
                    max-width: 1000px;
                    margin: 0 auto;
                }

                .contact-info {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }

                .contact-card {
                    background-color: var(--color-off-white);
                    padding: 2.5rem;
                    border: 2px solid var(--color-gray-200);
                    text-align: center;
                    transition: var(--transition-base);
                }

                .contact-card:hover {
                    border-color: var(--color-red);
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-lg);
                }

                .contact-icon {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                }

                .contact-card h3 {
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                    color: var(--color-black);
                }

                .contact-card p {
                    font-size: 1.125rem;
                    color: var(--color-gray-700);
                }

                .contact-card a {
                    color: var(--color-red);
                    font-weight: 600;
                }

                .contact-card a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </section>
    );
};

export default Contact;

