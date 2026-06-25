import React, { useRef, useEffect, useState, useCallback } from 'react';
import vid1 from '../assets/iec-video-01.mp4';
import vid2 from '../assets/iec-video-02.mp4';
import vid3 from '../assets/iec-video-03.mp4';
import vid4 from '../assets/iec-video-04.mp4';

const clips = [
    { src: vid1, label: 'Precision Rewinding',    sub: 'Stator coil assembly' },
    { src: vid2, label: 'Workshop Operations',    sub: 'Ranoli Works' },
    { src: vid3, label: 'HV Coil Manufacturing',  sub: 'High-voltage winding floor' },
    { src: vid4, label: 'Heavy Mechanical Bay',   sub: '75,000 sq ft active floor' },
];

const AUTO_ADVANCE = 8000;

const VideoPanel = ({ src, label, sub, index, isActive, onClick }) => {
    const vidRef = useRef(null);

    useEffect(() => {
        const el = vidRef.current;
        if (!el) return;
        if (isActive) {
            el.currentTime = 0;
            el.play().catch(() => {});
        } else {
            el.pause();
        }
    }, [isActive]);

    return (
        <div
            className={`vr-panel ${isActive ? 'vr-panel--active' : ''}`}
            onClick={onClick}
            role="button"
            aria-label={label}
            aria-expanded={isActive}
            tabIndex={0}
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onClick()}
        >
            <video
                ref={vidRef}
                src={src}
                muted
                loop
                playsInline
                preload="metadata"
                className="vr-panel-video"
            />
            <div className="vr-panel-overlay" />

            {/* Top row */}
            <div className="vr-panel-top">
                <span className="vr-panel-num">{String(index + 1).padStart(2, '0')}</span>
                <span className="vr-panel-icon">{isActive ? '×' : '+'}</span>
            </div>

            {/* Collapsed: rotated label */}
            <div className="vr-panel-rot">
                <span>{label}</span>
            </div>

            {/* Expanded: caption + progress */}
            <div className="vr-panel-info">
                <span className="vr-panel-sub">{sub}</span>
                <span className="vr-panel-label">{label}</span>
            </div>

            {/* Progress bar — only on active */}
            {isActive && (
                <div className="vr-progress">
                    <div className="vr-progress-fill" key={`${index}-${isActive}`} />
                </div>
            )}
        </div>
    );
};

const VideoReel = () => {
    const [active, setActive] = useState(0);
    const timerRef = useRef(null);

    const resetTimer = useCallback((nextIdx) => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setActive(prev => (prev + 1) % clips.length);
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
        <section className="vr-section">
            {/* Header */}
            <div className="container vr-header">
                <div className="vr-header-left">
                    <p className="vr-eyebrow">Workshop in Motion</p>
                    <h2 className="vr-title">Where precision<br />meets scale.</h2>
                </div>
                <p className="vr-header-right">
                    Inside IEC's Ranoli works — high-voltage machines being
                    disassembled, rewound, tested, and returned to service.
                </p>
            </div>

            {/* Accordion panels — full bleed */}
            <div className="vr-panels">
                {clips.map((clip, i) => (
                    <VideoPanel
                        key={i}
                        src={clip.src}
                        label={clip.label}
                        sub={clip.sub}
                        index={i}
                        isActive={i === active}
                        onClick={() => handleClick(i)}
                    />
                ))}
            </div>

            <style>{`
                .vr-section {
                    background: var(--color-primary);
                    padding: var(--space-5xl) 0 0;
                    border-top: 1px solid rgba(255,255,255,0.06);
                }

                /* Header */
                .vr-header {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-3xl);
                    align-items: end;
                    margin-bottom: var(--space-3xl);
                }

                .vr-eyebrow {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.16em;
                    color: var(--color-accent);
                    margin-bottom: var(--space-md);
                }

                .vr-title {
                    font-family: var(--font-serif);
                    font-size: clamp(2rem, 3.5vw, 3rem);
                    font-weight: 700;
                    color: var(--color-white);
                    line-height: 1.08;
                    letter-spacing: -0.025em;
                }

                .vr-header-right {
                    font-size: 0.9375rem;
                    color: rgba(255,255,255,0.42);
                    line-height: 1.75;
                    max-width: 420px;
                    align-self: end;
                    padding-bottom: 4px;
                }

                /* Accordion strip */
                .vr-panels {
                    display: flex;
                    height: 580px;
                    gap: 3px;
                    overflow: hidden;
                }

                .vr-panel {
                    flex: 0 0 80px;
                    position: relative;
                    overflow: hidden;
                    cursor: pointer;
                    transition: flex 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                    outline: none;
                }

                .vr-panel--active {
                    flex: 1;
                    cursor: default;
                }

                .vr-panel-video {
                    /* Videos are landscape (1920×1080) but filmed portrait (reels).
                       Rotate -90deg (left) to restore correct orientation.
                       After rotation: original width fills vertical, original height fills horizontal.
                       Set height = 100vw so it covers full viewport width after rotation.
                       Set width = 56.25vw (9/16 ratio) so it covers the 580px panel height. */
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    height: 100vw;
                    width: 56.25vw;
                    min-width: 650px;
                    object-fit: cover;
                    transform: translate(-50%, -50%) rotate(-90deg);
                    filter: grayscale(60%) brightness(0.45);
                    transition: filter 0.55s ease;
                }

                .vr-panel--active .vr-panel-video {
                    filter: grayscale(5%) brightness(0.7);
                }

                .vr-panel:hover:not(.vr-panel--active) .vr-panel-video {
                    filter: grayscale(35%) brightness(0.55);
                }

                .vr-panel-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to top,
                        rgba(9,9,12,0.95) 0%,
                        rgba(9,9,12,0.05) 45%,
                        rgba(9,9,12,0.2) 100%
                    );
                }

                /* Top row */
                .vr-panel-top {
                    position: absolute;
                    top: var(--space-lg);
                    left: var(--space-md);
                    right: var(--space-md);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    z-index: 2;
                }

                .vr-panel-num {
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    letter-spacing: 0.1em;
                    color: rgba(255,255,255,0.3);
                }

                .vr-panel-icon {
                    font-size: 1.375rem;
                    font-weight: 300;
                    color: rgba(255,255,255,0.55);
                    line-height: 1;
                    transition: color 0.2s, transform 0.3s;
                    user-select: none;
                }

                .vr-panel:hover:not(.vr-panel--active) .vr-panel-icon {
                    color: var(--color-white);
                }

                .vr-panel--active .vr-panel-icon {
                    color: var(--color-accent);
                    transform: rotate(45deg);
                }

                /* Rotated label — collapsed only — centered vertically so long text never clips */
                .vr-panel-rot {
                    position: absolute;
                    bottom: 50%;
                    left: 50%;
                    transform: translateX(-50%) translateY(50%) rotate(-90deg);
                    white-space: nowrap;
                    z-index: 2;
                    opacity: 1;
                    transition: opacity 0.25s ease;
                    pointer-events: none;
                }

                .vr-panel-rot span {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    color: rgba(255,255,255,0.45);
                }

                .vr-panel--active .vr-panel-rot {
                    opacity: 0;
                }

                /* Expanded info */
                .vr-panel-info {
                    position: absolute;
                    bottom: var(--space-3xl);
                    left: var(--space-xl);
                    right: var(--space-xl);
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                    z-index: 2;
                    opacity: 0;
                    transform: translateY(14px);
                    transition: opacity 0.4s 0.15s ease, transform 0.4s 0.15s ease;
                    pointer-events: none;
                }

                .vr-panel--active .vr-panel-info {
                    opacity: 1;
                    transform: translateY(0);
                }

                .vr-panel-sub {
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.16em;
                    color: var(--color-accent);
                }

                .vr-panel-label {
                    font-family: var(--font-serif);
                    font-size: clamp(1.125rem, 2vw, 1.625rem);
                    font-weight: 700;
                    color: var(--color-white);
                    letter-spacing: -0.02em;
                    line-height: 1.15;
                }

                /* Progress bar */
                .vr-progress {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: rgba(255,255,255,0.1);
                    z-index: 3;
                }

                .vr-progress-fill {
                    height: 100%;
                    background: var(--color-accent);
                    animation: vr-fill ${AUTO_ADVANCE}ms linear forwards;
                    transform-origin: left;
                }

                @keyframes vr-fill {
                    from { transform: scaleX(0); }
                    to   { transform: scaleX(1); }
                }

                /* Mobile: vertical accordion */
                @media (max-width: 768px) {
                    .vr-header {
                        grid-template-columns: 1fr;
                        gap: var(--space-xl);
                    }

                    .vr-header-right { max-width: 100%; }

                    .vr-panels {
                        flex-direction: column;
                        height: auto;
                        gap: 2px;
                    }

                    .vr-panel {
                        flex: 0 0 68px;
                        height: 68px;
                        min-height: 68px;
                        transition: flex 0.55s cubic-bezier(0.16,1,0.3,1),
                                    height 0.55s cubic-bezier(0.16,1,0.3,1),
                                    min-height 0.55s cubic-bezier(0.16,1,0.3,1);
                    }

                    .vr-panel--active {
                        flex: 0 0 300px;
                        height: 300px;
                        min-height: 300px;
                    }

                    .vr-panel-rot {
                        bottom: 50%;
                        left: var(--space-xl);
                        transform: translateY(50%);
                    }

                    .vr-panel-rot span { font-size: 0.6875rem; }

                    .vr-panel-top { top: var(--space-md); }
                }
            `}</style>
        </section>
    );
};

export default VideoReel;
