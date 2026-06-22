import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/iec-hero-bg.jpeg';
import easaLogo from '../assets/easa-logo.png';

const capabilities = [
    { value: '20,000 HP', label: 'Motor Rewinding' },
    { value: '13.8 kV', label: 'Max Voltage' },
    { value: '20 MW', label: 'No-Load Test' },
    { value: '300 T', label: 'Crane Capacity' },
    { value: '40+', label: 'Years Running' },
];

const Hero = () => {
    return (
        <section className="hero">

            {/* ── One-shot scan line on load ── */}
            <div className="hero-scan" aria-hidden="true" />

            {/* ── Background imagery ── */}
            <div className="hero-bg">
                <img src={heroBg} alt="" aria-hidden="true" />
                <div className="hero-overlay" />
            </div>

            {/* ── Engineering grid (masked to left content zone) ── */}
            <div className="hero-texture" aria-hidden="true" />

            {/* ── Red left-edge accent pillar ── */}
            <div className="hero-pillar" aria-hidden="true" />

            {/* ── Body grid ── */}
            <div className="container hero-body">

                {/* ── Left: editorial content ── */}
                <div className="hero-left">
                    <div className="hero-ghost" aria-hidden="true">IEC</div>

                    <p className="hero-eyebrow animate-fade-up">
                        <span className="hero-eyebrow-rule" />
                        Est. 1998 · Vadodara, Gujarat · ISO 9001
                    </p>

                    <h1 className="hero-title animate-fade-up delay-1">
                        Heavy<br />
                        Industrial<br />
                        <em>Rewinding.</em>
                    </h1>

                    <p className="hero-desc animate-fade-up delay-2">
                        India's most trusted rewinding house — high-voltage motors,
                        generators &amp; alternators up to 20,000&nbsp;HP and 13.8&nbsp;kV,
                        serving power, cement and petrochemical sectors.
                    </p>

                    <div className="hero-actions animate-fade-up delay-3">
                        <Link to="/contact" className="hero-btn-primary">
                            Request a Quote
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link to="/services" className="hero-btn-ghost">
                            View Services
                        </Link>
                    </div>

                    <div className="hero-trust animate-fade-up delay-4">
                        <span className="hero-trust-pill">ISO 9001</span>
                        <span className="hero-trust-sep" aria-hidden="true" />
                        <span className="hero-trust-pill">EASA Member 2014</span>
                        <span className="hero-trust-sep" aria-hidden="true" />
                        <span className="hero-trust-pill">Est. 1998</span>
                    </div>
                </div>

                {/* ── Right: decorative / technical ── */}
                <div className="hero-right" aria-hidden="true">

                    {/* Targeting reticle */}
                    <div className="hero-reticle">
                        <div className="reticle-ring reticle-ring--outer" />
                        <div className="reticle-ring reticle-ring--mid" />
                        <div className="reticle-ring reticle-ring--inner" />
                        <div className="reticle-cross" />
                        <div className="reticle-dot" />
                        <span className="reticle-label reticle-label--top">VADODARA · GJ</span>
                        <span className="reticle-label reticle-label--bottom">22.30°N · 73.18°E</span>
                    </div>

                    {/* EASA spinning badge */}
                    <div className="hero-easa">
                        <svg className="easa-ring" viewBox="0 0 100 100">
                            <defs>
                                <path id="easa-arc" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                            </defs>
                            <text>
                                <textPath href="#easa-arc" startOffset="0%">
                                    • ACCREDITED MEMBER • ACCREDITED MEMBER
                                </textPath>
                            </text>
                        </svg>
                        <img src={easaLogo} alt="EASA" className="easa-img" />
                    </div>

                </div>
            </div>

            {/* ── Scroll cue ── */}
            <div className="hero-scroll" aria-hidden="true">
                <span className="hero-scroll-label">Scroll</span>
                <span className="hero-scroll-line" />
            </div>

            {/* ── Capability strip ── */}
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

                /* ════════════════════════════════
                   HERO SECTION
                ════════════════════════════════ */
                .hero {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    background: var(--color-primary);
                    overflow: hidden;
                }

                /* ── Scan line ── */
                .hero-scan {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(90deg, transparent 0%, var(--color-accent) 40%, rgba(200,16,46,0.6) 60%, transparent 100%);
                    z-index: 10;
                    animation: heroScan 2.2s cubic-bezier(0.4, 0, 0.6, 1) 0.3s 1 forwards;
                    opacity: 0;
                    pointer-events: none;
                }

                @keyframes heroScan {
                    0%   { top: 0%;   opacity: 0; }
                    5%   { opacity: 1; }
                    90%  { opacity: 0.4; }
                    100% { top: 100%; opacity: 0; }
                }

                /* ── Background ── */
                .hero-bg {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                }

                .hero-bg img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center 25%;
                    filter: grayscale(75%) brightness(0.55);
                    animation: kenburns 30s ease-out forwards;
                }

                @keyframes kenburns {
                    from { transform: scale(1.0) translateX(0); }
                    to   { transform: scale(1.07) translateX(-1%); }
                }

                /* Strong directional gradient: opaque dark on left, opens on right */
                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background:
                        linear-gradient(112deg,
                            rgba(5,7,10,0.98) 0%,
                            rgba(5,7,10,0.95) 28%,
                            rgba(5,7,10,0.78) 48%,
                            rgba(5,7,10,0.30) 68%,
                            rgba(5,7,10,0.06) 100%
                        ),
                        linear-gradient(180deg,
                            rgba(5,7,10,0) 45%,
                            rgba(5,7,10,0.55) 100%
                        );
                }

                /* ── Engineering grid texture (masked to content zone) ── */
                .hero-texture {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                    pointer-events: none;
                    background-image:
                        linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px);
                    background-size: 72px 72px;
                    mask-image: radial-gradient(ellipse 55% 90% at 10% 50%, rgba(0,0,0,0.9), transparent 80%);
                    -webkit-mask-image: radial-gradient(ellipse 55% 90% at 10% 50%, rgba(0,0,0,0.9), transparent 80%);
                }

                /* ── Red left pillar ── */
                .hero-pillar {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 3px;
                    height: 100%;
                    z-index: 4;
                    background: linear-gradient(
                        180deg,
                        transparent 0%,
                        var(--color-accent) 15%,
                        var(--color-accent) 85%,
                        transparent 100%
                    );
                }

                /* ════════════════════════════════
                   BODY GRID
                ════════════════════════════════ */
                .hero-body {
                    position: relative;
                    z-index: 2;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-4xl);
                    align-items: center;
                    min-height: 100vh;
                    padding-top: calc(var(--header-height) + var(--space-3xl));
                    padding-bottom: var(--space-5xl);
                }

                /* ════════════════════════════════
                   LEFT CONTENT
                ════════════════════════════════ */
                .hero-left {
                    position: relative;
                }

                /* Ghost "IEC" behind the title */
                .hero-ghost {
                    position: absolute;
                    top: -0.25em;
                    left: -0.08em;
                    font-family: var(--font-serif);
                    font-size: clamp(7rem, 16vw, 15rem);
                    font-weight: 800;
                    color: transparent;
                    -webkit-text-stroke: 1px rgba(255,255,255,0.045);
                    line-height: 1;
                    pointer-events: none;
                    user-select: none;
                    white-space: nowrap;
                    z-index: 0;
                }

                /* Eyebrow */
                .hero-eyebrow {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    align-items: center;
                    gap: var(--space-md);
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.18em;
                    color: rgba(255,255,255,0.5);
                    margin-bottom: var(--space-xl);
                    opacity: 0;
                }

                .hero-eyebrow-rule {
                    display: inline-block;
                    width: 36px;
                    height: 2px;
                    background: var(--color-accent);
                    flex-shrink: 0;
                    border-radius: 1px;
                }

                /* Title */
                .hero-title {
                    position: relative;
                    z-index: 1;
                    font-family: var(--font-serif);
                    font-size: clamp(2.75rem, 6.5vw, 5.25rem);
                    font-weight: 700;
                    color: var(--color-white);
                    line-height: 0.96;
                    letter-spacing: -0.035em;
                    margin-bottom: var(--space-xl);
                    opacity: 0;
                }

                .hero-title em {
                    font-style: italic;
                    font-weight: 400;
                    color: var(--color-accent);
                    letter-spacing: -0.02em;
                }

                /* Desc */
                .hero-desc {
                    position: relative;
                    z-index: 1;
                    font-size: clamp(0.9375rem, 1.3vw, 1.0625rem);
                    color: rgba(255,255,255,0.58);
                    line-height: 1.78;
                    max-width: 480px;
                    margin-bottom: var(--space-2xl);
                    opacity: 0;
                }

                /* Actions */
                .hero-actions {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    align-items: center;
                    gap: var(--space-lg);
                    flex-wrap: wrap;
                    margin-bottom: var(--space-2xl);
                    opacity: 0;
                }

                /* Primary button — angular notch at top-right */
                .hero-btn-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 17px 34px;
                    background: var(--color-accent);
                    color: var(--color-white);
                    font-size: 0.8125rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%);
                    transition: all 0.3s var(--ease-out);
                }

                .hero-btn-primary:hover {
                    background: var(--color-accent-hover);
                    gap: 14px;
                    box-shadow: 0 20px 60px rgba(200,16,46,0.45);
                    transform: translateY(-2px);
                }

                .hero-btn-primary svg {
                    flex-shrink: 0;
                    transition: transform 0.3s var(--ease-out);
                }

                .hero-btn-primary:hover svg {
                    transform: translateX(4px);
                }

                /* Ghost button */
                .hero-btn-ghost {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 16px 28px;
                    border: 1px solid rgba(255,255,255,0.22);
                    color: rgba(255,255,255,0.82);
                    font-size: 0.8125rem;
                    font-weight: 500;
                    letter-spacing: 0.06em;
                    transition: all 0.3s var(--ease-out);
                }

                .hero-btn-ghost:hover {
                    border-color: rgba(255,255,255,0.5);
                    background: rgba(255,255,255,0.06);
                    color: var(--color-white);
                }

                /* Trust pills */
                .hero-trust {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    align-items: center;
                    gap: var(--space-md);
                    flex-wrap: wrap;
                    opacity: 0;
                }

                .hero-trust-pill {
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    color: rgba(255,255,255,0.4);
                    padding: 5px 10px;
                    border: 1px solid rgba(255,255,255,0.1);
                }

                .hero-trust-sep {
                    display: inline-block;
                    width: 1px;
                    height: 14px;
                    background: rgba(255,255,255,0.15);
                }

                /* ════════════════════════════════
                   RIGHT: RETICLE + EASA
                ════════════════════════════════ */
                .hero-right {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 500px;
                }

                /* Targeting reticle */
                .hero-reticle {
                    position: relative;
                    width: 320px;
                    height: 320px;
                }

                .reticle-ring {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    border-radius: 50%;
                    border: 1px solid rgba(200,16,46,0.22);
                }

                .reticle-ring--outer {
                    width: 320px;
                    height: 320px;
                    border-style: dashed;
                    border-width: 1px;
                    animation: reticle-spin 60s linear infinite;
                }

                .reticle-ring--mid {
                    width: 220px;
                    height: 220px;
                    border-color: rgba(200,16,46,0.32);
                    animation: reticle-spin 35s linear infinite reverse;
                }

                .reticle-ring--inner {
                    width: 120px;
                    height: 120px;
                    border-color: rgba(200,16,46,0.45);
                    border-style: dashed;
                    animation: reticle-spin 20s linear infinite;
                }

                @keyframes reticle-spin {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to   { transform: translate(-50%, -50%) rotate(360deg); }
                }

                /* Cross lines */
                .reticle-cross {
                    position: absolute;
                    inset: -24px;
                    pointer-events: none;
                }

                .reticle-cross::before,
                .reticle-cross::after {
                    content: '';
                    position: absolute;
                    background: rgba(200,16,46,0.18);
                }

                .reticle-cross::before {
                    /* vertical */
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 1px;
                    transform: translateX(-50%);
                }

                .reticle-cross::after {
                    /* horizontal */
                    top: 50%;
                    left: 0;
                    right: 0;
                    height: 1px;
                    transform: translateY(-50%);
                }

                /* Center dot */
                .reticle-dot {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: var(--color-accent);
                    transform: translate(-50%, -50%);
                    box-shadow: 0 0 0 0 rgba(200,16,46,0.6);
                    animation: reticle-pulse 3s ease-out infinite;
                }

                @keyframes reticle-pulse {
                    0%   { box-shadow: 0 0 0 0   rgba(200,16,46,0.7); }
                    70%  { box-shadow: 0 0 0 18px rgba(200,16,46,0);   }
                    100% { box-shadow: 0 0 0 0   rgba(200,16,46,0);   }
                }

                /* Reticle text labels */
                .reticle-label {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    text-transform: uppercase;
                    letter-spacing: 0.18em;
                    color: rgba(255,255,255,0.3);
                    white-space: nowrap;
                }

                .reticle-label--top    { top: -32px; }
                .reticle-label--bottom { bottom: -32px; }

                /* EASA badge — top-right of the right panel */
                .hero-easa {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 126px;
                    height: 126px;
                }

                .easa-ring {
                    position: absolute;
                    inset: 0;
                    animation: easa-rotate 22s linear infinite;
                }

                .easa-ring text {
                    font-size: 7.5px;
                    font-weight: 600;
                    letter-spacing: 0.15em;
                    fill: rgba(255,255,255,0.55);
                }

                @keyframes easa-rotate {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }

                .easa-img {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 62px;
                    height: 62px;
                    object-fit: contain;
                }

                /* ════════════════════════════════
                   SCROLL CUE
                ════════════════════════════════ */
                .hero-scroll {
                    position: absolute;
                    bottom: 90px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 3;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: var(--space-sm);
                }

                .hero-scroll-label {
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    text-transform: uppercase;
                    letter-spacing: 0.22em;
                    color: rgba(255,255,255,0.38);
                }

                .hero-scroll-line {
                    width: 1px;
                    height: 40px;
                    background: rgba(255,255,255,0.14);
                    overflow: hidden;
                    position: relative;
                }

                .hero-scroll-line::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: -100%;
                    width: 100%;
                    height: 100%;
                    background: var(--color-accent);
                    animation: scroll-drop 2.2s ease-in-out infinite;
                }

                @keyframes scroll-drop {
                    0%   { top: -100%; }
                    60%  { top: 100%;  }
                    100% { top: 100%;  }
                }

                /* ════════════════════════════════
                   CAPABILITY STRIP
                ════════════════════════════════ */
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
                    position: relative;
                    overflow: hidden;
                    transition: background 0.3s var(--ease-out);
                    cursor: default;
                }

                .cap-item:first-child {
                    border-left: none;
                    padding-left: 0;
                }

                /* Red accent line that sweeps in on hover */
                .cap-item::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: var(--color-accent);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.4s var(--ease-out);
                }

                .cap-item:hover::before {
                    transform: scaleX(1);
                }

                .cap-item:hover {
                    background: rgba(255,255,255,0.025);
                }

                .cap-val {
                    font-family: var(--font-mono);
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: var(--color-white);
                    letter-spacing: -0.01em;
                    line-height: 1;
                }

                .cap-lbl {
                    font-size: 0.6875rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: rgba(255,255,255,0.42);
                }

                /* ════════════════════════════════
                   RESPONSIVE
                ════════════════════════════════ */
                @media (max-width: 1100px) {
                    .hero-body {
                        grid-template-columns: 1fr;
                    }
                    .hero-right {
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
                        min-height: 90vh;
                        padding-top: calc(var(--header-height) + var(--space-2xl));
                        padding-bottom: var(--space-4xl);
                    }
                    .hero-title {
                        font-size: clamp(2.5rem, 12vw, 3.5rem);
                    }
                    .hero-scroll {
                        display: none;
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
                        border-left: none;
                        border-top: 1px solid rgba(255,255,255,0.07);
                        text-align: center;
                        align-items: center;
                    }
                }

                @media (max-width: 480px) {
                    .hero-btn-primary {
                        flex: 1;
                        justify-content: center;
                    }
                    .hero-trust {
                        gap: var(--space-sm);
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
