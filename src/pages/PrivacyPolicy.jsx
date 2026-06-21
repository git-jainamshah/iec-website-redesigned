import React from 'react';
import PageHero from '../components/PageHero';

const PrivacyPolicy = () => {
    return (
        <div className="legal-page">
            <PageHero
                label="Legal"
                title="Privacy Policy"
                subtitle="How we collect, use, and protect your information."
                breadcrumbs={[{ label: 'Privacy Policy' }]}
            />

            <section className="section">
                <div className="container">
                    <div className="legal-content">
                        <p className="legal-updated">Last updated: February 2026</p>

                        <div className="legal-section">
                            <h2>1. Information We Collect</h2>
                            <p>
                                When you visit our website or contact us, we may collect the following information:
                            </p>
                            <ul>
                                <li><strong>Personal Information:</strong> Name, email address, phone number, and company name when you submit our contact form or request a quote.</li>
                                <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, and time spent on our website, collected through standard web analytics.</li>
                                <li><strong>Communication Data:</strong> Records of correspondence when you contact us via email, phone, or our contact form.</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>2. How We Use Your Information</h2>
                            <p>We use your information to:</p>
                            <ul>
                                <li>Respond to your inquiries and provide repair quotations</li>
                                <li>Process and manage service requests</li>
                                <li>Improve our website and services</li>
                                <li>Send relevant updates about our services (only with your consent)</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>3. Data Protection</h2>
                            <p>
                                We implement appropriate technical and organizational measures to protect
                                your personal data against unauthorized access, alteration, disclosure, or
                                destruction. Access to personal information is restricted to employees who
                                need it to perform their duties.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>4. Third-Party Sharing</h2>
                            <p>
                                We do not sell, trade, or otherwise transfer your personal information
                                to external parties. We may share information with trusted service providers
                                who assist in operating our website, provided they agree to keep this
                                information confidential.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>5. Cookies</h2>
                            <p>
                                Our website may use cookies to enhance your browsing experience. You can
                                choose to disable cookies through your browser settings, though this may
                                affect certain website functionality.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>6. Your Rights</h2>
                            <p>You have the right to:</p>
                            <ul>
                                <li>Request access to your personal data</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Withdraw consent for data processing</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>7. Contact Us</h2>
                            <p>
                                For any privacy-related questions or requests, please contact us at{' '}
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

export default PrivacyPolicy;
