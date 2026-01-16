import React from 'react';

const ContactPage = () => {
    return (
        <div className="page">
            <div className="page-hero">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch for all your repair needs</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h2>Get In Touch</h2>
                            <p className="contact-intro">
                                Have a repair project or need a quote? Our team is ready 
                                to assist you with expert solutions.
                            </p>

                            <div className="contact-details">
                                <div className="contact-item">
                                    <h4>Address</h4>
                                    <p>
                                        613 GIDC Estate, Ranoli<br />
                                        Dist. Vadodara - 391350<br />
                                        Gujarat, India
                                    </p>
                                </div>

                                <div className="contact-item">
                                    <h4>Phone</h4>
                                    <p>
                                        <a href="tel:+919824214839">+91 98242 14839</a><br />
                                        <a href="tel:+912667262326">+91 2667 262326</a>
                                    </p>
                                </div>

                                <div className="contact-item">
                                    <h4>Email</h4>
                                    <p>
                                        <a href="mailto:anil@iecindia.co.in">anil@iecindia.co.in</a><br />
                                        <a href="mailto:info@iecindia.co.in">info@iecindia.co.in</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="tel" id="phone" name="phone" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" rows="5" required></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="map-section">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5!2d73.25!3d22.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzAwLjAiTiA3M8KwMTUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="IEC Location"
                        ></iframe>
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

                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-12);
                    margin-bottom: var(--space-12);
                }

                .contact-info h2 {
                    margin-bottom: var(--space-4);
                }

                .contact-intro {
                    font-size: 1.0625rem;
                    margin-bottom: var(--space-8);
                }

                .contact-details {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-6);
                }

                .contact-item h4 {
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-gray-500);
                    margin-bottom: var(--space-2);
                }

                .contact-item p {
                    line-height: 1.7;
                }

                .contact-item a {
                    color: var(--color-gray-700);
                    transition: color var(--transition);
                }

                .contact-item a:hover {
                    color: var(--color-accent);
                }

                .contact-form {
                    background: var(--color-gray-50);
                    padding: var(--space-8);
                }

                .form-group {
                    margin-bottom: var(--space-4);
                }

                .form-group label {
                    display: block;
                    font-size: 0.875rem;
                    font-weight: 500;
                    margin-bottom: var(--space-2);
                    color: var(--color-gray-700);
                }

                .form-group input,
                .form-group textarea {
                    width: 100%;
                    padding: var(--space-3);
                    font-size: 1rem;
                    font-family: inherit;
                    border: 1px solid var(--color-gray-300);
                    background: var(--color-white);
                    transition: border-color var(--transition);
                }

                .form-group input:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: var(--color-gray-600);
                }

                .contact-form .btn {
                    width: 100%;
                    justify-content: center;
                    margin-top: var(--space-4);
                }

                .map-section {
                    filter: grayscale(100%);
                    opacity: 0.9;
                }

                @media (max-width: 768px) {
                    .contact-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default ContactPage;
