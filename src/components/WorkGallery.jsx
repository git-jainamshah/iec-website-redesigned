import React, { useState, useRef, useEffect, useCallback } from 'react';
import imgRotorCrane from '../assets/iec-rotor-crane.jpg';
import imgStatorLift from '../assets/iec-stator-lift.jpg';
import imgCoilFloor from '../assets/iec-coil-floor.jpg';
import imgVpiTank from '../assets/iec-vpi-tank.jpg';
import imgGeneratorWorkshop from '../assets/iec-generator-workshop.jpg';
import imgLaserCnc from '../assets/iec-laser-cnc.jpg';

const panels = [
    { img: imgRotorCrane,        label: 'Workshop Floor',       caption: 'Heavy Mechanical Bay',     desc: '75,000 sq ft active repair bays' },
    { img: imgStatorLift,        label: 'Crane Operations',     caption: 'Raika Works',              desc: '300-ton overhead crane capacity' },
    { img: imgCoilFloor,         label: 'HV Coil Making',       caption: 'Precision Winding Floor',  desc: 'Up to 13.8 kV stator coils in-house' },
    { img: imgVpiTank,           label: 'VPI Impregnation',     caption: 'Vacuum Pressure System',   desc: 'Full stator insulation processing' },
    { img: imgGeneratorWorkshop, label: 'HV Testing Lab',       caption: 'Centralised Test Lab',     desc: '20 MW no-load test capacity' },
    { img: imgLaserCnc,          label: 'Spares Fabrication',   caption: 'CNC & Laser Cutting',      desc: 'In-house stator lamination & machining' },
];

const AUTO_ADVANCE = 5000;

const WorkGallery = () => {
    const [active, setActive] = useState(0);
    const timerRef = useRef(null);

    const resetTimer = useCallback((nextIdx) => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setActive(prev => (prev + 1) % panels.length);
        }, AUTO_ADVANCE);
        if (nextIdx !== undefined) setActive(nextIdx);
    }, []);

    useEffect(() => {
        resetTimer();
        return () => clearInterval(timerRef.current);
    }, [resetTimer]);

    const handleClick = (i) => {
        if (i === active) return;
        resetTimer(i);
    };

    return (
        <section className="wg-section">
            {/* Section header */}
            <div className="container wg-header">
                <div className="wg-header-left">
                    <p className="wg-eyebrow">Our Workshop</p>
                    <h2 className="wg-title">Built for the work<br />that others can't do.</h2>
                </div>
                <p className="wg-header-right">
                    India's most capable facility for heavy industrial motor and generator
                    repair. Every service, every test, every component fabricated in-house.
                </p>
            </div>

            {/* Accordion panels — full bleed */}
            <div className="wg-panels">
                {panels.map((panel, i) => (
                    <div
                        key={i}
                        className={`wg-panel ${i === active ? 'wg-panel--active' : ''}`}
                        onClick={() => handleClick(i)}
                        role="button"
                        aria-label={panel.label}
                        aria-expanded={i === active}
                        tabIndex={0}
                        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleClick(i)}
                    >
                        <img src={panel.img} alt={panel.label} className="wg-panel-img" loading="lazy" />
                        <div className="wg-panel-overlay" />

                        {/* Top row: index + open/close icon */}
                        <div className="wg-panel-top">
                            <span className="wg-panel-num">{String(i + 1).padStart(2, '0')}</span>
                            <span className="wg-panel-icon">{i === active ? '×' : '+'}</span>
                        </div>

                        {/* Collapsed state: rotated label */}
                        <div className="wg-panel-rot">
                            <span>{panel.label}</span>
                        </div>

                        {/* Expanded state: caption block */}
                        <div className="wg-panel-info">
                            <span className="wg-panel-caption">{panel.caption}</span>
                            <span className="wg-panel-label">{panel.label}</span>
                            <span className="wg-panel-desc">{panel.desc}</span>
                        </div>

                        {/* Progress bar — active panel only */}
                        {i === active && (
                            <div className="wg-progress">
                                <div className="wg-progress-fill" key={`${i}-${active}`} />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <style>{`
                .wg-section {
                    background: var(--color-primary);
                    padding: var(--space-5xl) 0 0;
                    border-top: 1px solid rgba(255,255,255,0.06);
                }

                /* Header */
                .wg-header {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-3xl);
                    align-items: end;
                    margin-bottom: var(--space-3xl);
                }

                .wg-eyebrow {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.16em;
                    color: var(--color-accent);
                    margin-bottom: var(--space-md);
                }

                .wg-title {
                    font-family: var(--font-serif);
                    font-size: clamp(2rem, 3.5vw, 3rem);
                    font-weight: 700;
                    color: var(--color-white);
                    line-height: 1.08;
                    letter-spacing: -0.025em;
                }

                .wg-header-right {
                    font-size: 0.9375rem;
                    color: rgba(255,255,255,0.42);
                    line-height: 1.75;
                    max-width: 420px;
                    align-self: end;
                    padding-bottom: 4px;
                }

                /* Accordion strip */
                .wg-panels {
                    display: flex;
                    height: 560px;
                    gap: 3px;
                    overflow: hidden;
                }

                .wg-panel {
                    flex: 0 0 72px;
                    position: relative;
                    overflow: hidden;
                    cursor: pointer;
                    transition: flex 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                    outline: none;
                }

                .wg-panel--active {
                    flex: 1;
                    cursor: default;
                }

                .wg-panel-img {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(55%) brightness(0.5);
                    transition: filter 0.55s ease, transform 0.55s ease;
                }

                .wg-panel--active .wg-panel-img {
                    filter: grayscale(10%) brightness(0.72);
                }

                .wg-panel:hover:not(.wg-panel--active) .wg-panel-img {
                    filter: grayscale(30%) brightness(0.6);
                    transform: scale(1.04);
                }

                .wg-panel-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to top,
                        rgba(9,9,12,0.88) 0%,
                        rgba(9,9,12,0.05) 45%,
                        rgba(9,9,12,0.15) 100%
                    );
                }

                /* Top row */
                .wg-panel-top {
                    position: absolute;
                    top: var(--space-lg);
                    left: var(--space-md);
                    right: var(--space-md);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    z-index: 2;
                }

                .wg-panel-num {
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    letter-spacing: 0.1em;
                    color: rgba(255,255,255,0.35);
                }

                .wg-panel-icon {
                    font-size: 1.375rem;
                    font-weight: 300;
                    color: rgba(255,255,255,0.55);
                    line-height: 1;
                    transition: color 0.2s, transform 0.3s;
                    user-select: none;
                }

                .wg-panel:hover:not(.wg-panel--active) .wg-panel-icon {
                    color: var(--color-white);
                }

                .wg-panel--active .wg-panel-icon {
                    color: var(--color-accent);
                    transform: rotate(45deg);
                }

                /* Rotated label — only visible when collapsed */
                .wg-panel-rot {
                    position: absolute;
                    bottom: var(--space-xl);
                    left: 50%;
                    transform: translateX(-50%) rotate(-90deg);
                    white-space: nowrap;
                    z-index: 2;
                    opacity: 1;
                    transition: opacity 0.25s ease;
                    pointer-events: none;
                }

                .wg-panel-rot span {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    color: rgba(255,255,255,0.5);
                }

                .wg-panel--active .wg-panel-rot {
                    opacity: 0;
                }

                /* Expanded info block — lifted off the bottom edge */
                .wg-panel-info {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 100px var(--space-xl) var(--space-3xl);
                    background: linear-gradient(to top, rgba(9,9,12,0.88) 0%, transparent 100%);
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                    z-index: 2;
                    opacity: 0;
                    transform: translateY(14px);
                    transition: opacity 0.4s 0.15s ease, transform 0.4s 0.15s ease;
                    pointer-events: none;
                }

                .wg-panel--active .wg-panel-info {
                    opacity: 1;
                    transform: translateY(0);
                }

                .wg-panel-caption {
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.16em;
                    color: var(--color-accent);
                }

                .wg-panel-label {
                    font-family: var(--font-serif);
                    font-size: clamp(1.125rem, 2vw, 1.5rem);
                    font-weight: 700;
                    color: var(--color-white);
                    letter-spacing: -0.02em;
                    line-height: 1.15;
                }

                .wg-panel-desc {
                    font-size: 0.875rem;
                    color: rgba(255,255,255,0.5);
                    margin-top: 2px;
                }

                /* Progress bar */
                .wg-progress {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: rgba(255,255,255,0.1);
                    z-index: 3;
                }

                .wg-progress-fill {
                    height: 100%;
                    background: var(--color-accent);
                    animation: wg-fill ${AUTO_ADVANCE}ms linear forwards;
                    transform-origin: left;
                }

                @keyframes wg-fill {
                    from { transform: scaleX(0); }
                    to   { transform: scaleX(1); }
                }

                /* Mobile: vertical accordion */
                @media (max-width: 768px) {
                    .wg-header {
                        grid-template-columns: 1fr;
                        gap: var(--space-xl);
                    }

                    .wg-header-right { max-width: 100%; }

                    .wg-panels {
                        flex-direction: column;
                        height: auto;
                        gap: 2px;
                    }

                    .wg-panel {
                        flex: 0 0 64px;
                        height: 64px;
                        min-height: 64px;
                        transition: flex 0.55s cubic-bezier(0.16,1,0.3,1),
                                    height 0.55s cubic-bezier(0.16,1,0.3,1),
                                    min-height 0.55s cubic-bezier(0.16,1,0.3,1);
                    }

                    .wg-panel--active {
                        flex: 0 0 280px;
                        height: 280px;
                        min-height: 280px;
                    }

                    /* Horizontal label when in vertical accordion */
                    .wg-panel-rot {
                        bottom: 50%;
                        left: var(--space-xl);
                        transform: translateY(50%);
                    }

                    .wg-panel-rot span {
                        font-size: 0.6875rem;
                    }

                    .wg-panel-top {
                        top: var(--space-md);
                    }

                    .wg-panel-info {
                        padding-bottom: var(--space-2xl);
                    }
                }
            `}</style>
        </section>
    );
};

export default WorkGallery;
