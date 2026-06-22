import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/iec-hero-bg.jpeg';
import easaLogo from '../assets/easa-logo.png';

const capabilities = [
    { value: '20,000 HP', label: 'Motor Rewinding' },
    { value: '13.8 kV', label: 'Max Voltage' },
    { value: '20 MW', label: 'No-Load Testing' },
    { value: '300 T', label: 'Crane Capacity' },
    { value: '40+ Yrs', label: 'Experience' },
];

const Hero = () => {
    return (
        <section className="hero">

            {/* Background photo */}
            <div className="hero-bg">
                <img src={heroBg} alt="" aria-hidden="true" />
                <div className="hero-overlay" />
            </div>

            {/* Main body — content anchored to bottom */}
            <div className="container hero-body">
                <div className="hero-inner">

                    {/* Left: headline block */}
                    <div className="hero-content">
                        <p className="hero-label animate-fade-up">
                            Est. 1998 · Vadodara, Gujarat · ISO 9001
                        </p>

                        <h1 className="hero-title animate-fade-up delay-1">
                            Keeping India's<br />
                            biggest machines<br />
                            running.
                        </h1>

                        <p className="hero-tagline animate-fade-up delay-1">
                            Our Repairs Run the Industries
                        </p>

                        <div className="hero-actions animate-fade-up delay-2">
                            <Link to="/contact" className="hero-btn-primary">
                                Contact Us
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link to="/services" className="hero-btn-text">
                                View Services
                            </Link>
                        </div>
                    </div>

                    {/* Right: EASA credential card */}
                    <div className="hero-cred animate-fade-up delay-3">
                        <img src={easaLogo} alt="EASA" className="hero-cred-logo" />
                        <div className="hero-cred-info">
                            <strong>EASA Accredited Member</strong>
                            <span>Member since 2014</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Capability strip */}
            <div className="hero-caps">
                <div className="container hero-caps-inner">
                    {capabilities.map((cap, i) => (
                        <div className="cap-item" key={i}>
                            <span className="cap-val">{cap.value}</span>
                            <span className="cap-lbl">{cap.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`

                .hero {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    background: var(--color-primary);
                }

                /* Photo */
                .hero-bg {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                }

                .hero-bg img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center 30%;
                    filter: brightness(0.88);
                    animation: kenburns 28s ease-out forwards;
                }

                @keyframes kenburns {
                    from { transform: scale(1.0); }
                    to   { transform: scale(1.05); }
                }

                /*
                 * ─── OVERLAY COLOUR ───────────────────────────────────────
                 * To swap tint colour (dark blue, grey, etc.) change ONE line:
                 *   --hero-tint: 5,7,10;        ← near-black (current)
                 *   --hero-tint: 10,20,50;       ← dark navy blue
                 *   --hero-tint: 28,28,35;       ← dark charcoal grey
                 * ──────────────────────────────────────────────────────────
                 */
                .hero-overlay {
                    --hero-tint: 5,7,10;
                    position: absolute;
                    inset: 0;
                    background:
                        /* Left → right: dark to transparent */
                        linear-gradient(
                            to right,
                            rgba(var(--hero-tint), 0.96) 0%,
                            rgba(var(--hero-tint), 0.80) 28%,
                            rgba(var(--hero-tint), 0.35) 55%,
                            rgba(var(--hero-tint), 0) 72%
                        ),
                        /* Bottom strip: keep text area readable */
                        linear-gradient(
                            to top,
                            rgba(var(--hero-tint), 0.70) 0%,
                            rgba(var(--hero-tint), 0) 28%
                        );
                }

                /* Body: full-height, content pushed to bottom */
                .hero-body {
                    position: relative;
                    z-index: 2;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    padding-top: calc(var(--header-height) + var(--space-2xl));
                    padding-bottom: var(--space-4xl);
                }

                .hero-inner {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: var(--space-2xl);
                }

                /* Headline block */
                .hero-content {
                    max-width: 680px;
                }

                .hero-label {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.16em;
                    color: rgba(255,255,255,0.55);
                    margin-bottom: var(--space-lg);
                    opacity: 0;
                }

                .hero-title {
                    font-family: var(--font-serif);
                    font-size: clamp(2.75rem, 6vw, 5.5rem);
                    font-weight: 700;
                    color: var(--color-white);
                    line-height: 1.0;
                    letter-spacing: -0.03em;
                    margin-bottom: var(--space-md);
                    opacity: 0;
                }

                .hero-tagline {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: rgba(255,255,255,0.35);
                    margin-bottom: var(--space-xl);
                    opacity: 0;
                }

                .hero-actions {
                    display: flex;
                    align-items: center;
                    gap: var(--space-xl);
                    opacity: 0;
                }

                .hero-btn-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 14px 28px;
                    background: var(--color-white);
                    color: var(--color-text);
                    font-size: 0.8125rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    transition: all 0.25s var(--ease-out);
                }

                .hero-btn-primary:hover {
                    background: var(--color-accent);
                    color: var(--color-white);
                    gap: 14px;
                }

                .hero-btn-primary svg {
                    transition: transform 0.25s var(--ease-out);
                }

                .hero-btn-primary:hover svg {
                    transform: translateX(3px);
                }

                .hero-btn-text {
                    font-size: 0.875rem;
                    color: rgba(255,255,255,0.7);
                    font-weight: 500;
                    letter-spacing: 0.02em;
                    text-decoration: underline;
                    text-underline-offset: 4px;
                    text-decoration-color: rgba(255,255,255,0.3);
                    transition: color 0.2s, text-decoration-color 0.2s;
                }

                .hero-btn-text:hover {
                    color: var(--color-white);
                    text-decoration-color: rgba(255,255,255,0.7);
                }

                /* EASA credential card */
                .hero-cred {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding: 16px 20px;
                    background: rgba(5,7,10,0.65);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255,255,255,0.14);
                    flex-shrink: 0;
                    opacity: 0;
                }

                .hero-cred-logo {
                    width: 48px;
                    height: 48px;
                    object-fit: contain;
                    flex-shrink: 0;
                }

                .hero-cred-info {
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                }

                .hero-cred-info strong {
                    font-size: 0.8125rem;
                    font-weight: 600;
                    color: var(--color-white);
                    line-height: 1.3;
                }

                .hero-cred-info span {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: rgba(255,255,255,0.5);
                }

                /* Capability strip */
                .hero-caps {
                    position: relative;
                    z-index: 3;
                    background: var(--color-primary);
                    border-top: 1px solid rgba(255,255,255,0.08);
                }

                .hero-caps-inner {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                }

                .cap-item {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    padding: var(--space-xl) var(--space-lg);
                    border-left: 1px solid rgba(255,255,255,0.07);
                    transition: background 0.2s;
                    cursor: default;
                }

                .cap-item:first-child {
                    border-left: none;
                    padding-left: 0;
                }

                .cap-item:hover {
                    background: rgba(255,255,255,0.03);
                }

                .cap-val {
                    font-family: var(--font-mono);
                    font-size: 1.375rem;
                    font-weight: 600;
                    color: var(--color-white);
                    line-height: 1;
                }

                .cap-lbl {
                    font-size: 0.6875rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: rgba(255,255,255,0.42);
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .hero-cred {
                        display: none;
                    }
                    .hero-caps-inner {
                        grid-template-columns: repeat(3, 1fr);
                    }
                    .cap-item:nth-child(4) {
                        border-left: none;
                        padding-left: 0;
                    }
                }

                @media (max-width: 768px) {
                    .hero-body {
                        padding-bottom: var(--space-3xl);
                    }
                    .hero-title {
                        font-size: clamp(2.25rem, 10vw, 3.5rem);
                    }
                    .hero-caps-inner {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .cap-item:nth-child(odd) {
                        border-left: none;
                        padding-left: 0;
                    }
                    .cap-item:last-child {
                        grid-column: span 2;
                        border-top: 1px solid rgba(255,255,255,0.07);
                        border-left: none;
                        text-align: center;
                        align-items: center;
                    }
                }

                @media (max-width: 480px) {
                    .hero-actions {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: var(--space-md);
                    }
                    .hero-btn-primary {
                        width: 100%;
                        justify-content: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
