import React, { useRef, useEffect, useState, useCallback } from 'react';
import vid1 from '../assets/iec-video-01.mp4';
import vid2 from '../assets/iec-video-02.mp4';
import vid3 from '../assets/iec-video-03.mp4';
import vid4 from '../assets/iec-video-04.mp4';

const clips = [
    { src: vid1, label: 'Precision\nRewinding',    sub: 'Stator coil assembly',       detail: 'High-voltage coil fabrication and insertion for large stator cores.' },
    { src: vid2, label: 'Workshop\nOperations',    sub: 'Ranoli Works',               detail: '75,000 sq ft facility handling concurrent multi-machine overhauls.' },
    { src: vid3, label: 'HV Coil\nManufacturing',  sub: 'High-voltage winding floor', detail: 'Up to 13.8 kV stator coils manufactured fully in-house.' },
    { src: vid4, label: 'Heavy\nMechanical Bay',   sub: '75,000 sq ft active floor',  detail: 'Rotor balancing, shaft repair, and full mechanical rebuild capacity.' },
];

const AUTO_ADVANCE = 8000;

const VideoReel = () => {
    const [active, setActive]   = useState(0);
    const [dir, setDir]         = useState(1); // 1 = forward (slide up), -1 = backward (slide down)
    const timerRef              = useRef(null);
    const videoRefs             = useRef([]);

    const resetTimer = useCallback((nextIdx) => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setDir(1);
            setActive(prev => (prev + 1) % clips.length);
        }, AUTO_ADVANCE);
        if (nextIdx !== undefined) setActive(nextIdx);
    }, []);

    useEffect(() => {
        resetTimer();
        return () => clearInterval(timerRef.current);
    }, [resetTimer]);

    useEffect(() => {
        videoRefs.current.forEach((el, i) => {
            if (!el) return;
            if (i === active) { el.currentTime = 0; el.play().catch(() => {}); }
            else el.pause();
        });
    }, [active]);

    const goTo = (nextIdx) => {
        if (nextIdx === active) return;
        setDir(nextIdx > active ? 1 : -1);
        resetTimer(nextIdx);
    };

    const prev = () => goTo((active - 1 + clips.length) % clips.length);
    const next = () => goTo((active + 1) % clips.length);

    const slideClass = (i) => {
        if (i === active) return 'is-active';
        // Outgoing direction depends on dir
        if (dir >= 0) return i < active ? 'is-past'   : 'is-future';
        else          return i < active ? 'is-future'  : 'is-past';
    };

    return (
        <section className="vr-section">
            <div className="container">
                {/* Section header */}
                <div className="vr-header">
                    <div>
                        <p className="vr-eyebrow">Workshop in Motion</p>
                        <h2 className="vr-title">Where precision<br />meets scale.</h2>
                    </div>
                    <p className="vr-header-desc">
                        Inside IEC's Ranoli works: high-voltage machines being
                        disassembled, rewound, tested, and returned to service.
                    </p>
                </div>

                {/* Body */}
                <div className="vr-body">

                    {/* ── Left: portrait reel frame ── */}
                    <div className="vr-frame-wrap">
                        <div className="vr-frame">
                            {clips.map((clip, i) => (
                                <div key={i} className={`vr-slide ${slideClass(i)}`}>
                                    <video
                                        ref={el => videoRefs.current[i] = el}
                                        src={clip.src}
                                        muted loop playsInline preload="metadata"
                                        className="vr-video"
                                    />
                                    <div className="vr-slide-overlay" />
                                </div>
                            ))}

                            {/* Progress bar */}
                            <div className="vr-progress">
                                <div className="vr-progress-fill" key={active} />
                            </div>

                            {/* Dot indicators inside frame bottom */}
                            <div className="vr-frame-dots">
                                {clips.map((_, i) => (
                                    <button
                                        key={i}
                                        className={`vr-fdot ${i === active ? 'vr-fdot--on' : ''}`}
                                        onClick={() => goTo(i)}
                                        aria-label={`Clip ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Right: editorial info ── */}
                    <div className="vr-info">
                        {/* Ghost number — artistic background element */}
                        <div className="vr-ghost" aria-hidden="true">
                            {String(active + 1).padStart(2, '0')}
                        </div>

                        {/* Red vertical stroke */}
                        <div className="vr-stroke" aria-hidden="true" />

                        <div className="vr-info-inner">
                            <span className="vr-count">
                                {String(active + 1).padStart(2, '0')}
                                <span className="vr-count-sep"> / </span>
                                {String(clips.length).padStart(2, '0')}
                            </span>

                            <h3 className="vr-clip-title" key={active}>
                                {clips[active].label.split('\n').map((line, j) => (
                                    <span key={j} className="vr-title-line">{line}</span>
                                ))}
                            </h3>

                            <p className="vr-clip-sub" key={`sub-${active}`}>{clips[active].sub}</p>
                            <p className="vr-clip-detail" key={`det-${active}`}>{clips[active].detail}</p>

                            {/* Nav arrows */}
                            <div className="vr-nav">
                                <button className="vr-nav-btn" onClick={prev} aria-label="Previous">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M13 5L8 10L13 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                                <button className="vr-nav-btn" onClick={next} aria-label="Next">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M7 5L12 10L7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                .vr-section {
                    background: var(--color-primary);
                    padding: var(--space-5xl) 0;
                    border-top: 1px solid rgba(255,255,255,0.06);
                    overflow: hidden;
                }

                /* ── Header ── */
                .vr-header {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-3xl);
                    align-items: end;
                    margin-bottom: var(--space-4xl);
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
                .vr-header-desc {
                    font-size: 0.9375rem;
                    color: rgba(255,255,255,0.42);
                    line-height: 1.75;
                    max-width: 420px;
                    align-self: end;
                }

                /* ── Body ── */
                .vr-body {
                    display: flex;
                    gap: clamp(var(--space-3xl), 6vw, 100px);
                    align-items: center;
                }

                /* ── Portrait Frame ── */
                .vr-frame-wrap {
                    flex-shrink: 0;
                }
                .vr-frame {
                    position: relative;
                    width: clamp(240px, 22vw, 320px);
                    /* 9:16 aspect */
                    aspect-ratio: 9 / 16;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow:
                        0 0 0 1px rgba(255,255,255,0.08),
                        0 40px 100px rgba(0,0,0,0.7);
                }

                .vr-slide {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                    will-change: transform;
                    transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .vr-slide.is-active { transform: translateY(0); }
                .vr-slide.is-past   { transform: translateY(-100%); }
                .vr-slide.is-future { transform: translateY(100%); }

                /* Video: stored 1920x1080 landscape, content portrait.
                   Frame is 9:16. Let frameW = clamp(240,22vw,320), frameH = frameW*(16/9).
                   Rotate -90deg: element.width fills visual height (frameH),
                                  element.height fills visual width (frameW).
                   So set width = frameH, height = frameW via CSS calc. */
                .vr-video {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    /* After -90deg: element width → visual height; height → visual width */
                    width: calc(clamp(240px, 22vw, 320px) * 16 / 9);
                    height: clamp(240px, 22vw, 320px);
                    transform: translate(-50%, -50%) rotate(-90deg);
                    object-fit: cover;
                    filter: brightness(0.88) saturate(1.05);
                }

                .vr-slide-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top,
                        rgba(9,9,12,0.55) 0%,
                        transparent 50%
                    );
                    pointer-events: none;
                }

                /* Progress bar */
                .vr-progress {
                    position: absolute;
                    bottom: 0; left: 0; right: 0;
                    height: 3px;
                    background: rgba(255,255,255,0.12);
                    z-index: 10;
                }
                .vr-progress-fill {
                    height: 100%;
                    background: var(--color-accent);
                    transform-origin: left;
                    animation: vr-fill ${AUTO_ADVANCE}ms linear forwards;
                }
                @keyframes vr-fill {
                    from { transform: scaleX(0); }
                    to   { transform: scaleX(1); }
                }

                /* Dot indicators inside frame */
                .vr-frame-dots {
                    position: absolute;
                    bottom: var(--space-lg);
                    right: var(--space-md);
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    z-index: 10;
                }
                .vr-fdot {
                    width: 4px;
                    height: 4px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.3);
                    border: none;
                    cursor: pointer;
                    padding: 0;
                    transition: all 0.3s ease;
                }
                .vr-fdot--on {
                    height: 18px;
                    border-radius: 2px;
                    background: var(--color-accent);
                }

                /* ── Info Panel ── */
                .vr-info {
                    flex: 1;
                    position: relative;
                    display: flex;
                    align-items: center;
                    min-height: clamp(427px, 39vw, 569px); /* matches frame height */
                    overflow: hidden;
                }

                /* Ghost number — behind everything */
                .vr-ghost {
                    position: absolute;
                    right: -0.15em;
                    top: 50%;
                    transform: translateY(-50%);
                    font-family: var(--font-serif);
                    font-size: clamp(160px, 18vw, 280px);
                    font-weight: 800;
                    line-height: 1;
                    color: transparent;
                    -webkit-text-stroke: 1px rgba(255,255,255,0.04);
                    letter-spacing: -0.04em;
                    pointer-events: none;
                    user-select: none;
                    transition: opacity 0.4s;
                }

                /* Vertical red accent stroke */
                .vr-stroke {
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 2px;
                    height: 60%;
                    background: linear-gradient(
                        to bottom,
                        transparent 0%,
                        var(--color-accent) 30%,
                        var(--color-accent) 70%,
                        transparent 100%
                    );
                    opacity: 0.7;
                }

                .vr-info-inner {
                    position: relative;
                    z-index: 2;
                    padding-left: var(--space-2xl);
                }

                .vr-count {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    font-weight: 600;
                    letter-spacing: 0.16em;
                    color: rgba(255,255,255,0.25);
                    display: block;
                    margin-bottom: var(--space-xl);
                }
                .vr-count-sep { opacity: 0.4; }

                .vr-clip-title {
                    font-family: var(--font-serif);
                    font-size: clamp(2.25rem, 4vw, 3.75rem);
                    font-weight: 700;
                    color: var(--color-white);
                    letter-spacing: -0.03em;
                    line-height: 1.0;
                    margin-bottom: var(--space-xl);
                    display: flex;
                    flex-direction: column;
                    animation: vr-text-in 0.5s cubic-bezier(0.16,1,0.3,1) both;
                }
                .vr-title-line {
                    display: block;
                }
                .vr-title-line:last-child {
                    color: rgba(255,255,255,0.55);
                }

                @keyframes vr-text-in {
                    from { opacity: 0; transform: translateY(16px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                .vr-clip-sub {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.16em;
                    color: var(--color-accent);
                    margin-bottom: var(--space-lg);
                    animation: vr-text-in 0.5s 0.05s cubic-bezier(0.16,1,0.3,1) both;
                }

                .vr-clip-detail {
                    font-size: 0.9375rem;
                    color: rgba(255,255,255,0.38);
                    line-height: 1.75;
                    max-width: 340px;
                    margin-bottom: var(--space-3xl);
                    animation: vr-text-in 0.5s 0.1s cubic-bezier(0.16,1,0.3,1) both;
                }

                /* Nav buttons */
                .vr-nav {
                    display: flex;
                    gap: var(--space-sm);
                }
                .vr-nav-btn {
                    width: 46px;
                    height: 46px;
                    border-radius: 50%;
                    border: 1px solid rgba(255,255,255,0.12);
                    background: rgba(255,255,255,0.04);
                    color: rgba(255,255,255,0.55);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                .vr-nav-btn:hover {
                    background: var(--color-accent);
                    border-color: var(--color-accent);
                    color: white;
                    transform: scale(1.05);
                }

                /* ── Mobile ── */
                @media (max-width: 900px) {
                    .vr-header {
                        grid-template-columns: 1fr;
                        gap: var(--space-xl);
                    }
                    .vr-header-desc { max-width: 100%; }

                    .vr-body {
                        flex-direction: column;
                        gap: var(--space-2xl);
                        align-items: flex-start;
                    }

                    .vr-frame {
                        width: 200px;
                    }
                    .vr-video {
                        width: calc(200px * 16 / 9);
                        height: 200px;
                    }

                    .vr-info {
                        min-height: auto;
                        width: 100%;
                    }
                    .vr-info-inner { padding-left: var(--space-lg); }

                    .vr-ghost { font-size: 100px; right: -0.1em; }

                    .vr-clip-title { font-size: 2rem; }

                    .vr-clip-detail { max-width: 100%; }
                }
            `}</style>
        </section>
    );
};

export default VideoReel;
