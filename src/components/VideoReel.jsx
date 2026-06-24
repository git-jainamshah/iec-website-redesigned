import React, { useRef, useEffect, useState } from 'react';
import vid1 from '../assets/iec-video-01.mp4';
import vid2 from '../assets/iec-video-02.mp4';
import vid3 from '../assets/iec-video-03.mp4';
import vid4 from '../assets/iec-video-04.mp4';

const clips = [
    { src: vid1, label: 'Precision Rewinding', sub: 'Stator coil assembly' },
    { src: vid2, label: 'Workshop Operations', sub: 'Ranoli Works' },
    { src: vid3, label: 'HV Coil Manufacturing', sub: 'High-voltage winding floor' },
    { src: vid4, label: 'Heavy Mechanical Bay', sub: '75,000 sq ft active floor' },
];

const VideoClip = ({ src, label, sub, isActive, index }) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (isActive) {
            el.currentTime = 0;
            el.play().catch(() => {});
        } else {
            el.pause();
        }
    }, [isActive]);

    return (
        <div className={`vr-clip ${isActive ? 'vr-clip--active' : ''}`}>
            <video
                ref={ref}
                src={src}
                muted
                loop
                playsInline
                preload="metadata"
                className="vr-video"
            />
            <div className="vr-clip-overlay" />
            <div className="vr-clip-info">
                <span className="vr-clip-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="vr-clip-label">{label}</span>
                <span className="vr-clip-sub">{sub}</span>
            </div>
        </div>
    );
};

const VideoReel = () => {
    const [active, setActive] = useState(0);
    const timerRef = useRef(null);

    const goTo = (i) => {
        setActive(i);
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setActive(prev => (prev + 1) % clips.length);
        }, 8000);
    };

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setActive(prev => (prev + 1) % clips.length);
        }, 8000);
        return () => clearInterval(timerRef.current);
    }, []);

    return (
        <section className="vr-section">
            {/* Header */}
            <div className="container vr-header">
                <div className="vr-header-left">
                    <p className="vr-eyebrow">Workshop in Motion</p>
                    <h2 className="vr-title">Where precision<br />meets scale.</h2>
                </div>
                <p className="vr-header-right">
                    Inside IEC's Vadodara works · high-voltage machines being
                    disassembled, rewound, tested, and returned to service.
                </p>
            </div>

            {/* Video stage */}
            <div className="vr-stage">
                {/* Featured active clip */}
                <div className="vr-main-wrap">
                    {clips.map((c, i) => (
                        <div
                            key={i}
                            className={`vr-main-slot ${i === active ? 'vr-main-slot--visible' : ''}`}
                        >
                            <VideoClip
                                src={c.src}
                                label={c.label}
                                sub={c.sub}
                                isActive={i === active}
                                index={i}
                            />
                        </div>
                    ))}
                    {/* Progress bar */}
                    <div className="vr-progress">
                        <div className="vr-progress-bar" key={active} />
                    </div>
                </div>

                {/* Side selector */}
                <div className="vr-selector">
                    {clips.map((c, i) => (
                        <button
                            key={i}
                            className={`vr-sel-btn ${i === active ? 'vr-sel-btn--active' : ''}`}
                            onClick={() => goTo(i)}
                            aria-label={c.label}
                        >
                            <span className="vr-sel-num">{String(i + 1).padStart(2, '0')}</span>
                            <div className="vr-sel-text">
                                <span className="vr-sel-label">{c.label}</span>
                                <span className="vr-sel-sub">{c.sub}</span>
                            </div>
                            <div className="vr-sel-bar" />
                        </button>
                    ))}
                </div>
            </div>

            <style>{`
                .vr-section {
                    background: var(--color-primary);
                    padding: var(--space-5xl) 0;
                    border-top: 1px solid rgba(255,255,255,0.06);
                }

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

                /* Video stage */
                .vr-stage {
                    display: grid;
                    grid-template-columns: 1fr 300px;
                    gap: var(--space-lg);
                    align-items: stretch;
                    padding: 0 var(--space-xl);
                }

                @media (min-width: 1280px) {
                    .vr-stage { padding: 0 calc((100vw - 1200px) / 2); }
                }

                /* Main video area */
                .vr-main-wrap {
                    position: relative;
                    aspect-ratio: 16/9;
                    background: rgba(255,255,255,0.03);
                    overflow: hidden;
                }

                .vr-main-slot {
                    position: absolute;
                    inset: 0;
                    opacity: 0;
                    transition: opacity 0.6s ease;
                }

                .vr-main-slot--visible {
                    opacity: 1;
                    z-index: 1;
                }

                .vr-clip {
                    width: 100%;
                    height: 100%;
                    position: relative;
                }

                .vr-video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: brightness(0.75) saturate(0.85);
                }

                .vr-clip-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to top,
                        rgba(17,17,20,0.75) 0%,
                        rgba(17,17,20,0) 50%
                    );
                }

                .vr-clip-info {
                    position: absolute;
                    bottom: var(--space-xl);
                    left: var(--space-xl);
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .vr-clip-index {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    font-weight: 600;
                    letter-spacing: 0.12em;
                    color: var(--color-accent);
                }

                .vr-clip-label {
                    font-family: var(--font-serif);
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: var(--color-white);
                    letter-spacing: -0.02em;
                }

                .vr-clip-sub {
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: rgba(255,255,255,0.38);
                }

                /* Progress bar at bottom of video */
                .vr-progress {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: rgba(255,255,255,0.1);
                    z-index: 2;
                }

                .vr-progress-bar {
                    height: 100%;
                    background: var(--color-accent);
                    animation: vr-progress 8s linear forwards;
                    transform-origin: left;
                }

                @keyframes vr-progress {
                    from { transform: scaleX(0); }
                    to   { transform: scaleX(1); }
                }

                /* Side selector */
                .vr-selector {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }

                .vr-sel-btn {
                    display: flex;
                    align-items: center;
                    gap: var(--space-md);
                    padding: var(--space-lg) var(--space-md);
                    background: rgba(255,255,255,0.02);
                    border: 1px solid rgba(255,255,255,0.06);
                    cursor: pointer;
                    text-align: left;
                    position: relative;
                    overflow: hidden;
                    transition: background 0.2s, border-color 0.2s;
                    flex: 1;
                }

                .vr-sel-btn:hover {
                    background: rgba(255,255,255,0.04);
                    border-color: rgba(255,255,255,0.12);
                }

                .vr-sel-btn--active {
                    border-color: var(--color-accent);
                    background: rgba(200,16,46,0.06);
                }

                .vr-sel-num {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 600;
                    color: rgba(255,255,255,0.25);
                    flex-shrink: 0;
                }

                .vr-sel-btn--active .vr-sel-num {
                    color: var(--color-accent);
                }

                .vr-sel-text {
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                    min-width: 0;
                }

                .vr-sel-label {
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: rgba(255,255,255,0.5);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .vr-sel-btn--active .vr-sel-label {
                    color: var(--color-white);
                }

                .vr-sel-sub {
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: rgba(255,255,255,0.22);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .vr-sel-bar {
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: var(--color-accent);
                    opacity: 0;
                    transition: opacity 0.2s;
                }

                .vr-sel-btn--active .vr-sel-bar { opacity: 1; }

                /* Responsive */
                @media (max-width: 1024px) {
                    .vr-stage {
                        grid-template-columns: 1fr 240px;
                    }
                }

                @media (max-width: 768px) {
                    .vr-header {
                        grid-template-columns: 1fr;
                        gap: var(--space-xl);
                    }
                    .vr-header-right { max-width: 100%; }

                    .vr-stage {
                        grid-template-columns: 1fr;
                        padding: 0;
                    }

                    .vr-selector {
                        flex-direction: row;
                        overflow-x: auto;
                        gap: var(--space-sm);
                        padding: 0 var(--space-lg) var(--space-sm);
                    }

                    .vr-sel-btn {
                        flex-direction: column;
                        min-width: 120px;
                        flex: none;
                        align-items: flex-start;
                    }

                    .vr-sel-bar {
                        top: 0; bottom: auto;
                        left: 0; right: 0;
                        width: auto; height: 2px;
                    }
                }
            `}</style>
        </section>
    );
};

export default VideoReel;
