import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/iec-hero-bg.jpeg';
import easaLogo from '../assets/easa-logo.png';

const capabilities = [
    { value: '20,000 HP', label: 'Motor Rewinding Capacity' },
    { value: '13.8 kV', label: 'Max Voltage Rating' },
    { value: '20 MW', label: 'No-Load Testing' },
    { value: '300 Ton', label: 'Crane Capacity' },
    { value: '5 MW', label: 'Captive Power Generation' },
];

const Hero = () => {
    return (
        <section className="hero">
            {/* ===== Visual band: background + content live together, isolated ===== */}
            <div className="hero-visual">
                <div className="hero-bg">
                    <img src={heroBg} alt="" aria-hidden="true" />
                    <div className="hero-overlay" />
                    <div className="hero-grid-lines" aria-hidden="true" />
                </div>

                <div className="container hero-content">
                    <div className="hero-text">
                        <span className="hero-label animate-fade-up">
                            <span className="hero-label-dot" />
                            Est. 1998 · Vadodara · ISO 9001 Certified
                        </span>

                        <h1 className="hero-title display-title animate-fade-up delay-1">
                            Engineered to keep<br />
                            <em>power plants running.</em>
                        </h1>

                        <p className="hero-desc animate-fade-up delay-2">
                            Rewinding and repair for high-voltage motors, generators,
                            alternators and DC motors up to 20,000&nbsp;HP and 13.8&nbsp;kV —
                            trusted by power, cement and petrochemical industries across India.
                        </p>

                        <div className="hero-actions animate-fade-up delay-3">
                            <Link to="/contact" className="hero-cta-primary">
                                Connect Now
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>

                            <a href="tel:+919824214839" className="hero-cta-call">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <span>+91 98242 14839</span>
                            </a>
                        </div>
                    </div>

                    {/* EASA accreditation seal */}
                    <div className="easa-badge" aria-hidden="true">
                        <svg className="easa-text-circle" viewBox="0 0 100 100">
                            <defs>
                                <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                            </defs>
                            <text>
                                <textPath href="#circle" startOffset="0%">
                                    • ACCREDITED MEMBER • ACCREDITED MEMBER
                                </textPath>
                            </text>
                        </svg>
                        <img src={easaLogo} alt="EASA" className="easa-logo" />
                    </div>
                </div>

                <div className="scroll-cue" aria-hidden="true">
                    <span className="scroll-cue-label">Scroll</span>
                    <span className="scroll-cue-line" />
                </div>
            </div>

            {/* ===== Capability strip: a distinct band, never overlapping ===== */}
            <div className="capability-strip">
                <div className="container capability-strip-inner">
                    {capabilities.map((cap) => (
                        <div className="cap-item" key={cap.value}>
                            <span className="cap-value">{cap.value}</span>
                            <span className="cap-label">{cap.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .hero {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                }

                /* ---------- Visual band ---------- */
                .hero-visual {
                    position: relative;
                    min-height: 100vh;
                    display: flex;
                    overflow: hidden;
                }

                .hero-bg {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                }

                .hero-bg img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(100%) contrast(1.08) brightness(0.85);
                    animation: kenburns 24s ease-out forwards;
                }

                @keyframes kenburns {
                    from { transform: scale(1.02); }
                    to { transform: scale(1.14); }
                }

                /* Directional gradient: anchored dark bottom-left where the copy sits,
                   opening up toward the top-right so the machinery stays visible. */
                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background:
                        linear-gradient(105deg,
                            rgba(5, 7, 10, 0.92) 0%,
                            rgba(5, 7, 10, 0.72) 38%,
                            rgba(5, 7, 10, 0.35) 70%,
                            rgba(5, 7, 10, 0.20) 100%),
                        linear-gradient(0deg,
                            rgba(5, 7, 10, 0.55) 0%,
                            rgba(5, 7, 10, 0) 35%);
                }

                /* Faint engineering grid for texture */
                .hero-grid-lines {
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
                    background-size: 64px 64px;
                    mask-image: radial-gradient(circle at 80% 30%, rgba(0,0,0,0.9), transparent 70%);
                    -webkit-mask-image: radial-gradient(circle at 80% 30%, rgba(0,0,0,0.9), transparent 70%);
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    flex: 1;
                    display: flex;
                    align-items: center;
                    padding-top: calc(88px + var(--space-2xl));
                    padding-bottom: var(--space-4xl);
                }

                .hero-text {
                    max-width: 640px;
                }

                .hero-label {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    color: rgba(255, 255, 255, 0.75);
                    padding: 8px 16px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 100px;
                    background: rgba(255, 255, 255, 0.04);
                    backdrop-filter: blur(6px);
                    -webkit-backdrop-filter: blur(6px);
                    margin-bottom: var(--space-lg);
                    opacity: 0;
                }

                .hero-label-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: var(--color-accent);
                    box-shadow: 0 0 0 0 rgba(200, 16, 46, 0.6);
                    animation: pulse 2.4s ease-out infinite;
                }

                @keyframes pulse {
                    0% { box-shadow: 0 0 0 0 rgba(200, 16, 46, 0.6); }
                    70% { box-shadow: 0 0 0 8px rgba(200, 16, 46, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(200, 16, 46, 0); }
                }

                .hero-title {
                    font-size: clamp(2.25rem, 5.5vw, 4.25rem);
                    font-weight: 400;
                    color: var(--color-white);
                    line-height: 1.08;
                    letter-spacing: -0.02em;
                    margin-bottom: var(--space-lg);
                    opacity: 0;
                }

                .hero-title em {
                    font-style: italic;
                    color: var(--color-accent);
                }

                .hero-desc {
                    font-size: clamp(0.9375rem, 1.4vw, 1.0625rem);
                    line-height: 1.7;
                    color: rgba(255, 255, 255, 0.72);
                    margin-bottom: var(--space-xl);
                    max-width: 520px;
                    opacity: 0;
                }

                .hero-actions {
                    display: flex;
                    align-items: center;
                    gap: var(--space-xl);
                    flex-wrap: wrap;
                    opacity: 0;
                }

                .hero-cta-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: var(--space-sm);
                    font-size: 0.8125rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: var(--color-white);
                    background: var(--color-accent);
                    padding: 16px 32px;
                    border-radius: 4px;
                    transition: all 0.3s var(--ease-out);
                }

                .hero-cta-primary:hover {
                    background: var(--color-accent-hover);
                    transform: translateY(-2px);
                    box-shadow: 0 12px 32px rgba(200, 16, 46, 0.35);
                }

                .hero-cta-primary svg {
                    transition: transform 0.3s var(--ease-out);
                }

                .hero-cta-primary:hover svg {
                    transform: translateX(4px);
                }

                .hero-cta-call {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    font-family: var(--font-mono);
                    font-size: 0.9375rem;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.9);
                    letter-spacing: 0.02em;
                    transition: color 0.2s;
                }

                .hero-cta-call svg {
                    color: var(--color-accent);
                    transition: transform 0.3s var(--ease-out);
                }

                .hero-cta-call:hover {
                    color: var(--color-white);
                }

                .hero-cta-call:hover svg {
                    transform: rotate(12deg);
                }

                /* ---------- EASA seal ---------- */
                .easa-badge {
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translateY(-50%) rotate(-10deg);
                    width: 132px;
                    height: 132px;
                    z-index: 2;
                }

                .easa-text-circle {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    animation: rotate-text 22s linear infinite;
                }

                .easa-text-circle text {
                    font-size: 7.5px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    fill: rgba(255, 255, 255, 0.65);
                }

                @keyframes rotate-text {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .easa-logo {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 66px;
                    height: 66px;
                    object-fit: contain;
                }

                /* ---------- Scroll cue ---------- */
                .scroll-cue {
                    position: absolute;
                    left: 50%;
                    bottom: var(--space-xl);
                    z-index: 2;
                    transform: translateX(-50%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: var(--space-sm);
                }

                .scroll-cue-label {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: rgba(255, 255, 255, 0.55);
                }

                .scroll-cue-line {
                    width: 1px;
                    height: 36px;
                    background: rgba(255, 255, 255, 0.25);
                    overflow: hidden;
                    position: relative;
                }

                .scroll-cue-line::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: -100%;
                    width: 100%;
                    height: 100%;
                    background: var(--color-accent);
                    animation: scrollCue 2s ease-in-out infinite;
                }

                @keyframes scrollCue {
                    0% { top: -100%; }
                    60% { top: 100%; }
                    100% { top: 100%; }
                }

                /* ---------- Capability strip (separate band) ---------- */
                .capability-strip {
                    position: relative;
                    z-index: 3;
                    background: var(--color-primary);
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                }

                .capability-strip-inner {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                }

                .cap-item {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                    padding: var(--space-xl) var(--space-lg);
                    border-left: 1px solid rgba(255, 255, 255, 0.08);
                }

                .cap-item:first-child {
                    border-left: none;
                    padding-left: 0;
                }

                .cap-value {
                    font-family: var(--font-mono);
                    font-size: 1.375rem;
                    font-weight: 600;
                    color: var(--color-white);
                    letter-spacing: 0.01em;
                }

                .cap-label {
                    font-size: 0.6875rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: rgba(255, 255, 255, 0.5);
                }

                /* ---------- Tablet ---------- */
                @media (max-width: 1024px) {
                    .easa-badge {
                        width: 110px;
                        height: 110px;
                        top: auto;
                        bottom: var(--space-2xl);
                        transform: rotate(-10deg);
                    }

                    .easa-logo {
                        width: 56px;
                        height: 56px;
                    }

                    .capability-strip-inner {
                        grid-template-columns: repeat(3, 1fr);
                    }

                    .cap-item:nth-child(4) {
                        border-left: none;
                        padding-left: 0;
                    }
                }

                /* ---------- Mobile ---------- */
                @media (max-width: 768px) {
                    .hero-visual {
                        min-height: 88vh;
                    }

                    .hero-content {
                        align-items: flex-end;
                        padding-top: calc(76px + var(--space-2xl));
                        padding-bottom: var(--space-3xl);
                    }

                    .hero-text {
                        max-width: 100%;
                    }

                    .easa-badge,
                    .scroll-cue {
                        display: none;
                    }

                    .hero-desc {
                        max-width: 100%;
                    }

                    .hero-actions {
                        gap: var(--space-lg);
                    }

                    .cap-item {
                        padding: var(--space-lg) var(--space-md);
                    }

                    .cap-value {
                        font-size: 1.1875rem;
                    }
                }

                @media (max-width: 600px) {
                    .hero-visual {
                        min-height: 86vh;
                    }

                    .hero-content {
                        padding-top: calc(64px + var(--space-2xl));
                    }

                    .hero-cta-primary {
                        flex: 1;
                        justify-content: center;
                        min-width: 160px;
                    }

                    .capability-strip-inner {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .cap-item:nth-child(odd) {
                        border-left: none;
                        padding-left: 0;
                    }

                    .cap-item:last-child {
                        grid-column: span 2;
                        align-items: center;
                        text-align: center;
                        border-left: none;
                        border-top: 1px solid rgba(255, 255, 255, 0.08);
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
