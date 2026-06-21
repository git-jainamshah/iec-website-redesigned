import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [termsAgreed, setTermsAgreed] = useState(false);
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !termsAgreed) return;

        setStatus('loading');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
            setTermsAgreed(false);
        }, 1000);
    };

    return (
        <section className="newsletter">
            <div className="container">
                <div className="newsletter-inner">
                    <div className="newsletter-content">
                        <span className="newsletter-label">Stay Updated</span>
                        <h3 className="newsletter-title">
                            Subscribe to our newsletter
                        </h3>
                        <p className="newsletter-desc">
                            Get industry insights, maintenance tips, and company updates delivered to your inbox.
                        </p>
                    </div>

                    <form className="newsletter-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                required
                                disabled={status === 'loading' || status === 'success'}
                            />
                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success' || !termsAgreed}
                                className={status === 'success' ? 'success' : ''}
                            >
                                {status === 'loading' ? (
                                    <span className="loading">Subscribing...</span>
                                ) : status === 'success' ? (
                                    <>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        Subscribed
                                    </>
                                ) : (
                                    <>
                                        Subscribe
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </div>
                        <label className="nl-terms">
                            <input type="checkbox" checked={termsAgreed} onChange={(e) => setTermsAgreed(e.target.checked)} />
                            <span className="nl-checkmark" />
                            <span>I agree to the <Link to="/terms">Terms</Link> & <Link to="/privacy">Privacy Policy</Link></span>
                        </label>
                        <p className="form-note">
                            No spam, unsubscribe anytime. We respect your privacy.
                        </p>
                    </form>
                </div>
            </div>

            <style>{`
                .newsletter {
                    background: var(--color-primary);
                    padding: var(--space-3xl) 0;
                }

                .newsletter-inner {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-4xl);
                    align-items: center;
                }

                .newsletter-label {
                    display: inline-block;
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: var(--color-accent);
                    margin-bottom: var(--space-sm);
                }

                .newsletter-title {
                    font-family: var(--font-serif);
                    font-size: clamp(1.5rem, 3vw, 2rem);
                    font-weight: 400;
                    color: var(--color-white);
                    margin-bottom: var(--space-md);
                }

                .newsletter-desc {
                    font-size: 0.9375rem;
                    line-height: 1.6;
                    color: rgba(255, 255, 255, 0.6);
                }

                .newsletter-form {
                    width: 100%;
                }

                .form-group {
                    display: flex;
                    gap: var(--space-sm);
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 8px;
                    padding: 6px;
                }

                .form-group input {
                    flex: 1;
                    padding: 14px 16px;
                    font-size: 0.9375rem;
                    color: var(--color-white);
                    background: transparent;
                    border: none;
                    outline: none;
                }

                .form-group input::placeholder {
                    color: rgba(255, 255, 255, 0.5);
                }

                .form-group input:disabled {
                    opacity: 0.7;
                }

                .form-group button {
                    display: inline-flex;
                    align-items: center;
                    gap: var(--space-xs);
                    padding: 14px 24px;
                    font-size: 0.8125rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--color-white);
                    background: var(--color-accent);
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.3s var(--ease-out);
                    white-space: nowrap;
                }

                .form-group button:hover:not(:disabled) {
                    background: var(--color-accent-hover);
                    gap: var(--space-sm);
                }

                .form-group button:disabled {
                    cursor: not-allowed;
                }

                .form-group button.success {
                    background: #22c55e;
                }

                .form-group button svg {
                    transition: transform 0.3s;
                }

                .form-group button:hover:not(:disabled) svg {
                    transform: translateX(3px);
                }

                .loading {
                    opacity: 0.8;
                }

                .nl-terms {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.8125rem;
                    color: rgba(255,255,255,0.7);
                    cursor: pointer;
                    margin-top: var(--space-md);
                }
                .nl-terms input { display: none; }
                .nl-checkmark {
                    width: 16px;
                    height: 16px;
                    border: 1.5px solid rgba(255,255,255,0.4);
                    border-radius: 3px;
                    flex-shrink: 0;
                    position: relative;
                    transition: all 0.2s;
                }
                .nl-terms input:checked + .nl-checkmark {
                    background: var(--color-accent);
                    border-color: var(--color-accent);
                }
                .nl-terms input:checked + .nl-checkmark::after {
                    content: '';
                    position: absolute;
                    left: 4px;
                    top: 1px;
                    width: 5px;
                    height: 9px;
                    border: solid white;
                    border-width: 0 2px 2px 0;
                    transform: rotate(45deg);
                }
                .nl-terms a {
                    color: var(--color-accent);
                }
                .nl-terms a:hover {
                    text-decoration: underline;
                }

                .form-note {
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.4);
                    margin-top: var(--space-md);
                    text-align: right;
                }

                @media (max-width: 900px) {
                    .newsletter-inner {
                        grid-template-columns: 1fr;
                        gap: var(--space-xl);
                        text-align: center;
                    }

                    .form-note {
                        text-align: center;
                    }
                }

                @media (max-width: 600px) {
                    .form-group {
                        flex-direction: column;
                        padding: var(--space-sm);
                    }

                    .form-group button {
                        width: 100%;
                        justify-content: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default Newsletter;

