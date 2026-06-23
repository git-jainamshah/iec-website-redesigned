import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/iec-hero-bg.jpeg';
import easaLogo from '../assets/easa-logo.png';

const capabilities = [
    { value: '20,000 HP', label: 'Motor Rewinding' },
    { value: '13.8 kV',   label: 'Max Voltage' },
    { value: '20 MW',     label: 'No-Load Testing' },
    { value: '300 T',     label: 'Crane Capacity' },
    { value: '40+ Yrs',   label: 'Experience' },
];

const Hero = () => {
    return (
        <section className="hero">

            {/* Background photo + dark overlay */}
            <div className="hero-bg">
                <img src={heroBg} alt="" aria-hidden="true" />
                <div className="hero-overlay" />
            </div>

            {/* Colour-flame leaks — ABOVE the dark overlay, below text (z-index 1→3) */}
            <div className="hero-leaks" aria-hidden="true">
                <div className="hero-leak hl-1" />
                <div className="hero-leak hl-2" />
                <div className="hero-leak hl-3" />
                <div className="hero-leak hl-4" />
                <div className="hero-leak hl-5" />
                <div className="hero-leak hl-6" />
                <div className="hero-leak hl-7" />
                <div className="hero-leak hl-8" />
                <div className="hero-leak hl-9" />
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

                /* ── Photo layer ────────────────────────────────────── */
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
                    filter: brightness(0.82);
                    animation: kenburns 28s ease-out forwards;
                }

                @keyframes kenburns {
                    from { transform: scale(1.0); }
                    to   { transform: scale(1.05); }
                }

                /* ── Chromatic flame leaks ──────────────────────────── */
                /* Sits ABOVE the dark overlay (hero-bg z:0) and BELOW the text (z:3)
                   so flames glow visibly against the black background */
                .hero-leaks {
                    position: absolute;
                    inset: 0;
                    z-index: 2;
                    overflow: hidden;
                    pointer-events: none;
                    mix-blend-mode: screen;
                }

                .hero-leak {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(68px);
                    will-change: transform, opacity;
                }

                /* 1 — Deep crimson — far left */
                .hl-1 {
                    width: 360px; height: 540px;
                    background: radial-gradient(ellipse at 50% 70%, rgba(210,18,45,0.90) 0%, transparent 68%);
                    bottom: -120px; left: 0%;
                    animation: leak-a 10s cubic-bezier(.45,.05,.55,.95) infinite;
                }
                /* 2 — Burnt orange */
                .hl-2 {
                    width: 300px; height: 460px;
                    background: radial-gradient(ellipse at 50% 70%, rgba(235,95,22,0.80) 0%, transparent 66%);
                    bottom: -100px; left: 9%;
                    animation: leak-c 12s cubic-bezier(.45,.05,.55,.95) infinite 2s;
                }
                /* 3 — Hot magenta */
                .hl-3 {
                    width: 275px; height: 440px;
                    background: radial-gradient(ellipse at 50% 70%, rgba(195,25,105,0.78) 0%, transparent 65%);
                    bottom: -90px; left: 19%;
                    animation: leak-b 11s cubic-bezier(.45,.05,.55,.95) infinite 0.8s;
                }
                /* 4 — Deep purple */
                .hl-4 {
                    width: 310px; height: 490px;
                    background: radial-gradient(ellipse at 50% 70%, rgba(115,18,178,0.75) 0%, transparent 66%);
                    bottom: -110px; left: 29%;
                    animation: leak-c 13s cubic-bezier(.45,.05,.55,.95) infinite 3.5s;
                }
                /* 5 — Indigo/violet — centre */
                .hl-5 {
                    width: 285px; height: 460px;
                    background: radial-gradient(ellipse at 50% 70%, rgba(68,30,215,0.70) 0%, transparent 65%);
                    bottom: -95px; left: 40%;
                    animation: leak-a 14s cubic-bezier(.45,.05,.55,.95) infinite 1.5s;
                }
                /* 6 — Cobalt blue */
                .hl-6 {
                    width: 265px; height: 430px;
                    background: radial-gradient(ellipse at 50% 70%, rgba(22,85,235,0.68) 0%, transparent 64%);
                    bottom: -80px; left: 51%;
                    animation: leak-b 11.5s cubic-bezier(.45,.05,.55,.95) infinite 4s;
                }
                /* 7 — Teal/cyan */
                .hl-7 {
                    width: 290px; height: 470px;
                    background: radial-gradient(ellipse at 50% 70%, rgba(18,158,162,0.72) 0%, transparent 65%);
                    bottom: -105px; left: 61%;
                    animation: leak-c 12.5s cubic-bezier(.45,.05,.55,.95) infinite 0.4s;
                }
                /* 8 — Amber/gold */
                .hl-8 {
                    width: 245px; height: 400px;
                    background: radial-gradient(ellipse at 50% 70%, rgba(215,152,28,0.76) 0%, transparent 64%);
                    bottom: -85px; left: 72%;
                    animation: leak-a 10.5s cubic-bezier(.45,.05,.55,.95) infinite 2.8s;
                }
                /* 9 — Rose coral — far right */
                .hl-9 {
                    width: 225px; height: 375px;
                    background: radial-gradient(ellipse at 50% 70%, rgba(218,55,68,0.80) 0%, transparent 63%);
                    bottom: -70px; left: 82%;
                    animation: leak-b 9.5s cubic-bezier(.45,.05,.55,.95) infinite 1.2s;
                }

                /* Three rise variants: straight / drift-left / drift-right */
                @keyframes leak-a {
                    0%   { transform: translateY(0)       scaleX(1.00); opacity: 0;    }
                    10%  {                                               opacity: 0.95; }
                    50%  { transform: translateY(-40vh)   scaleX(0.80); opacity: 0.65; }
                    85%  { transform: translateY(-78vh)   scaleX(0.54); opacity: 0.15; }
                    100% { transform: translateY(-95vh)   scaleX(0.38); opacity: 0;    }
                }
                @keyframes leak-b {
                    0%   { transform: translateY(0) translateX(0)    scaleX(1.00); opacity: 0;    }
                    10%  {                                                          opacity: 0.95; }
                    50%  { transform: translateY(-40vh) translateX(-28px) scaleX(0.78); opacity: 0.65; }
                    85%  { transform: translateY(-76vh) translateX(-48px) scaleX(0.52); opacity: 0.15; }
                    100% { transform: translateY(-94vh) translateX(-58px) scaleX(0.36); opacity: 0;    }
                }
                @keyframes leak-c {
                    0%   { transform: translateY(0) translateX(0)    scaleX(1.00); opacity: 0;    }
                    10%  {                                                          opacity: 0.95; }
                    50%  { transform: translateY(-42vh) translateX(28px) scaleX(0.82); opacity: 0.65; }
                    85%  { transform: translateY(-78vh) translateX(46px) scaleX(0.55); opacity: 0.15; }
                    100% { transform: translateY(-96vh) translateX(58px) scaleX(0.40); opacity: 0;    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .hero-leak { animation: none !important; opacity: 0 !important; }
                }

                /* ── Overlay: pitch-black fade ───────────────────────── */
                .hero-overlay {
                    --hero-tint: 0,0,0;
                    position: absolute;
                    inset: 0;
                    z-index: 2;
                    background:
                        /* Top strip — ensures header row always has dark bg */
                        linear-gradient(
                            to bottom,
                            rgba(var(--hero-tint), 0.80) 0%,
                            rgba(var(--hero-tint), 0) 18%
                        ),
                        /* Left to right: pitch black → transparent */
                        linear-gradient(
                            to right,
                            rgba(var(--hero-tint), 0.97) 0%,
                            rgba(var(--hero-tint), 0.85) 28%,
                            rgba(var(--hero-tint), 0.42) 56%,
                            rgba(var(--hero-tint), 0.05) 72%
                        ),
                        /* Bottom — content area readable */
                        linear-gradient(
                            to top,
                            rgba(var(--hero-tint), 0.88) 0%,
                            rgba(var(--hero-tint), 0) 32%
                        );
                }

                /* ── Body: full-height, content at bottom ────────────── */
                .hero-body {
                    position: relative;
                    z-index: 3;
                    min-height: 100vh;
                    min-height: 100svh;
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
                    min-width: 0;
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
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
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
                    background: rgba(0,0,0,0.55);
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

                /* ── Capability strip ────────────────────────────────── */
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

                /* ── Responsive ──────────────────────────────────────── */

                /* Tablet */
                @media (max-width: 900px) {
                    .hero-cred { display: none; }
                    .hero-caps-inner {
                        grid-template-columns: repeat(3, 1fr);
                    }
                    .cap-item:nth-child(4) {
                        border-left: none;
                        padding-left: 0;
                    }
                    /* Fewer flames for perf */
                    .hl-5, .hl-6 { display: none; }
                }

                /* Mobile — NO full-height treatment; let content size the hero */
                @media (max-width: 768px) {
                    /* Overlay: top-to-bottom on mobile (no left-to-right) */
                    .hero-overlay {
                        background:
                            linear-gradient(
                                to bottom,
                                rgba(var(--hero-tint), 0.88) 0%,
                                rgba(var(--hero-tint), 0.44) 30%,
                                rgba(var(--hero-tint), 0.58) 58%,
                                rgba(var(--hero-tint), 0.94) 100%
                            );
                    }
                    /* Show the building sign centred */
                    .hero-bg img {
                        object-position: 62% 42%;
                    }
                    /* Drop the forced full-screen height; content drives the height */
                    .hero-body {
                        min-height: unset;
                        padding-top: calc(var(--header-height) + 32px);
                        padding-bottom: 40px;
                        justify-content: flex-start;
                    }
                    .hero-inner {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: var(--space-lg);
                    }
                    .hero-title {
                        font-size: clamp(2.4rem, 9.5vw, 3.5rem);
                    }
                    .hero-label {
                        white-space: normal;
                        font-size: 0.625rem;
                    }
                    .hero-caps-inner {
                        grid-template-columns: repeat(3, 1fr);
                    }
                    .cap-item:nth-child(4) {
                        border-left: none;
                        padding-left: 0;
                    }
                    .hero-leak { filter: blur(52px); }
                }

                /* Mobile portrait */
                @media (max-width: 480px) {
                    .hero-body {
                        padding-top: calc(var(--header-height) + 20px);
                        padding-bottom: 32px;
                    }
                    .hero-title {
                        font-size: clamp(2.1rem, 10vw, 2.75rem);
                    }
                    .hero-tagline {
                        font-size: 0.5625rem;
                        letter-spacing: 0.15em;
                    }
                    .hero-actions {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: var(--space-md);
                    }
                    .hero-btn-primary {
                        width: 100%;
                        justify-content: center;
                        padding: 15px 24px;
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
                    .cap-val { font-size: 1.2rem; }
                    .cap-lbl { font-size: 0.625rem; }
                    .hl-2, .hl-4, .hl-6, .hl-8 { display: none; }
                }

                @media (max-width: 360px) {
                    .hero-title { font-size: clamp(1.9rem, 10.5vw, 2.4rem); }
                }

            `}</style>
        </section>
    );
};

export default Hero;
