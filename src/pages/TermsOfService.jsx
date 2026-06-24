import React from 'react';
import PageHero from '../components/PageHero';

const TermsOfService = () => {
    return (
        <div className="legal-page">
            <PageHero
                label="Legal"
                title="Terms of Service"
                subtitle="Terms governing the use of our website and services."
                breadcrumbs={[{ label: 'Terms of Service' }]}
            />

            <section className="section">
                <div className="container">
                    <div className="legal-content">
                        <p className="legal-updated">Last updated: February 2026</p>

                        <div className="legal-section">
                            <h2>1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using the Indian Engineering Company website, you accept
                                and agree to be bound by these Terms of Service. If you do not agree with
                                any part of these terms, please do not use our website.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>2. Services</h2>
                            <p>
                                Indian Engineering Company provides industrial motor, generator, and pump
                                repair services. All service agreements, quotations, and work orders are
                                governed by separate contractual terms agreed upon between IEC and the client.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>3. Intellectual Property</h2>
                            <p>
                                All content on this website, including text, images, logos, and graphics,
                                is the property of Indian Engineering Company and is protected by
                                applicable intellectual property laws. Unauthorized use or reproduction
                                is prohibited.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>4. Quotations & Pricing</h2>
                            <ul>
                                <li>All repair quotations are provided after inspection and are valid for the period stated in the quote.</li>
                                <li>Final pricing may vary based on findings during the repair process, with prior client approval.</li>
                                <li>Payment terms are as specified in individual agreements.</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>5. Warranty</h2>
                            <p>
                                Repair services are backed by our quality guarantee as specified in
                                individual work orders. Warranty terms and duration are communicated
                                at the time of quotation and are subject to the specific nature of
                                the repair performed.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>6. Limitation of Liability</h2>
                            <p>
                                Indian Engineering Company shall not be liable for any indirect,
                                incidental, or consequential damages arising from the use of our
                                website or services beyond the scope explicitly agreed upon in
                                service contracts.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>7. Governing Law</h2>
                            <p>
                                These terms are governed by and construed in accordance with the
                                laws of India. Any disputes arising from these terms shall be
                                subject to the exclusive jurisdiction of the courts in Vadodara, Gujarat.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>8. Changes to Terms</h2>
                            <p>
                                We reserve the right to modify these terms at any time. Changes will
                                be effective immediately upon posting on this page. Continued use of
                                the website constitutes acceptance of modified terms.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>9. Contact</h2>
                            <p>
                                For questions about these terms, contact us at{' '}
                                <a href="mailto:info@iecindia.co.in">info@iecindia.co.in</a> or call{' '}
                                <a href="tel:+919824214839">+91 98242 14839</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .legal-page { min-height: 100vh; }

                .legal-content {
                    max-width: 760px;
                }

                .legal-updated {
                    font-size: 0.8125rem;
                    color: var(--color-muted);
                    margin-bottom: var(--space-3xl);
                    padding-bottom: var(--space-lg);
                    border-bottom: 1px solid var(--color-border);
                }

                .legal-section {
                    margin-bottom: var(--space-3xl);
                }

                .legal-section h2 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: var(--space-md);
                }

                .legal-section p {
                    font-size: 0.9375rem;
                    line-height: 1.85;
                    margin-bottom: var(--space-md);
                }

                .legal-section ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .legal-section ul li {
                    position: relative;
                    padding-left: 20px;
                    font-size: 0.9375rem;
                    line-height: 1.85;
                    margin-bottom: var(--space-sm);
                }

                .legal-section ul li::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 10px;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: var(--color-accent);
                }

                .legal-section a {
                    color: var(--color-accent);
                    font-weight: 500;
                }

                .legal-section a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
};

export default TermsOfService;
