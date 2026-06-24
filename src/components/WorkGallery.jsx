import React, { useState } from 'react';
import imgRotorCrane from '../assets/iec-rotor-crane.jpg';
import imgStatorLift from '../assets/iec-stator-lift.jpg';
import imgCoilFloor from '../assets/iec-coil-floor.jpg';
import imgVpiTank from '../assets/iec-vpi-tank.jpg';
import imgGeneratorWorkshop from '../assets/iec-generator-workshop.jpg';
import imgLaserCnc from '../assets/iec-laser-cnc.jpg';

const galleryItems = [
    {
        img: imgRotorCrane,
        label: 'Workshop Floor',
        caption: 'Heavy Mechanical Bay',
        desc: '75,000 sq ft active repair bays',
    },
    {
        img: imgStatorLift,
        label: 'Crane Operations',
        caption: 'Raika Works',
        desc: '300-ton overhead crane capacity',
    },
    {
        img: imgCoilFloor,
        label: 'HV Coil Manufacturing',
        caption: 'Precision Winding Floor',
        desc: 'Up to 13.8 kV stator coils in-house',
    },
    {
        img: imgVpiTank,
        label: 'VPI Impregnation',
        caption: 'Vacuum Pressure System',
        desc: 'Full stator insulation processing',
    },
    {
        img: imgGeneratorWorkshop,
        label: 'High-Voltage Testing',
        caption: 'Centralised Test Lab',
        desc: '20 MW no-load test capacity',
    },
    {
        img: imgLaserCnc,
        label: 'Spares Fabrication',
        caption: 'CNC & Laser Cutting',
        desc: 'In-house stator lamination & machining',
    },
];

const WorkGallery = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <section className="wg-section">
            <div className="container wg-inner">

                {/* Header row */}
                <div className="wg-header" data-aos="fade-up">
                    <p className="wg-eyebrow">Our Workshop</p>
                    <h2 className="wg-title">Built for the work<br />that others can't do.</h2>
                    <p className="wg-sub">
                        India's most capable facility for heavy industrial motor and generator repair.
                        Every service, every test, every component fabricated in-house.
                    </p>
                </div>

                {/* Gallery grid */}
                <div className="wg-grid" data-aos="fade-up" data-aos-delay="80">

                    {/* Main featured panel */}
                    <div className="wg-main">
                        {galleryItems[activeIdx].img ? (
                            <img
                                src={galleryItems[activeIdx].img}
                                alt={galleryItems[activeIdx].label}
                                className="wg-main-img"
                            />
                        ) : (
                            <div className="wg-main-placeholder">
                                <span className="wg-placeholder-label">{galleryItems[activeIdx].label}</span>
                            </div>
                        )}
                        <div className="wg-main-overlay">
                            <span className="wg-main-caption">{galleryItems[activeIdx].caption}</span>
                            <span className="wg-main-desc">{galleryItems[activeIdx].desc}</span>
                        </div>
                        <div className="wg-counter">
                            <span className="wg-counter-cur">{String(activeIdx + 1).padStart(2, '0')}</span>
                            <span className="wg-counter-sep">/</span>
                            <span className="wg-counter-tot">{String(galleryItems.length).padStart(2, '0')}</span>
                        </div>
                    </div>

                    {/* Thumbnail column */}
                    <div className="wg-thumbs">
                        {galleryItems.map((item, i) => (
                            <button
                                key={i}
                                className={`wg-thumb ${i === activeIdx ? 'active' : ''}`}
                                onClick={() => setActiveIdx(i)}
                                aria-label={item.label}
                            >
                                {item.img ? (
                                    <img src={item.img} alt={item.label} />
                                ) : (
                                    <div className="wg-thumb-placeholder" />
                                )}
                                <div className="wg-thumb-text">
                                    <span className="wg-thumb-label">{item.label}</span>
                                    <span className="wg-thumb-sub">{item.desc}</span>
                                </div>
                                <div className="wg-thumb-bar" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .wg-section {
                    background: var(--color-primary);
                    padding: var(--space-5xl) 0;
                    border-top: 1px solid rgba(255,255,255,0.06);
                }

                .wg-inner {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-3xl);
                }

                /* Header */
                .wg-header {
                    display: grid;
                    grid-template-columns: auto 1fr auto;
                    align-items: start;
                    gap: var(--space-2xl);
                }

                .wg-eyebrow {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.16em;
                    color: var(--color-accent);
                    writing-mode: vertical-rl;
                    transform: rotate(180deg);
                    align-self: center;
                }

                .wg-title {
                    font-family: var(--font-serif);
                    font-size: clamp(2rem, 4vw, 3.25rem);
                    font-weight: 700;
                    color: var(--color-white);
                    line-height: 1.05;
                    letter-spacing: -0.025em;
                }

                .wg-sub {
                    font-size: 0.9375rem;
                    color: rgba(255,255,255,0.45);
                    line-height: 1.7;
                    max-width: 280px;
                    text-align: right;
                    align-self: end;
                }

                /* Gallery grid */
                .wg-grid {
                    display: grid;
                    grid-template-columns: 1fr 320px;
                    gap: var(--space-lg);
                    align-items: stretch;
                }

                /* Main image panel */
                .wg-main {
                    position: relative;
                    aspect-ratio: 16/10;
                    overflow: hidden;
                    background: rgba(255,255,255,0.03);
                }

                .wg-main-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(15%) brightness(0.75);
                    transition: transform 0.6s var(--ease-out), filter 0.4s;
                }

                .wg-main:hover .wg-main-img {
                    transform: scale(1.03);
                    filter: grayscale(0%) brightness(0.85);
                }

                .wg-main-placeholder {
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px dashed rgba(255,255,255,0.1);
                }

                .wg-placeholder-label {
                    font-family: var(--font-mono);
                    font-size: 0.75rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: rgba(255,255,255,0.2);
                }

                .wg-main-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: var(--space-xl) var(--space-xl);
                    background: linear-gradient(to top, rgba(5,7,10,0.85) 0%, rgba(5,7,10,0) 100%);
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .wg-main-caption {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: var(--color-accent);
                }

                .wg-main-desc {
                    font-size: 0.875rem;
                    color: rgba(255,255,255,0.7);
                }

                .wg-counter {
                    position: absolute;
                    top: var(--space-lg);
                    right: var(--space-lg);
                    display: flex;
                    align-items: baseline;
                    gap: 4px;
                    background: rgba(5,7,10,0.6);
                    backdrop-filter: blur(8px);
                    padding: 6px 12px;
                    border: 1px solid rgba(255,255,255,0.1);
                }

                .wg-counter-cur {
                    font-family: var(--font-mono);
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: var(--color-white);
                    line-height: 1;
                }

                .wg-counter-sep {
                    font-family: var(--font-mono);
                    font-size: 0.75rem;
                    color: rgba(255,255,255,0.3);
                }

                .wg-counter-tot {
                    font-family: var(--font-mono);
                    font-size: 0.75rem;
                    color: rgba(255,255,255,0.4);
                }

                /* Thumbnails */
                .wg-thumbs {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }

                .wg-thumb {
                    display: flex;
                    align-items: center;
                    gap: var(--space-md);
                    padding: var(--space-md) var(--space-md);
                    border: 1px solid rgba(255,255,255,0.06);
                    background: rgba(255,255,255,0.02);
                    position: relative;
                    overflow: hidden;
                    cursor: pointer;
                    transition: background 0.2s, border-color 0.2s;
                    text-align: left;
                    flex: 1;
                }

                .wg-thumb:hover {
                    background: rgba(255,255,255,0.04);
                    border-color: rgba(255,255,255,0.12);
                }

                .wg-thumb.active {
                    border-color: var(--color-accent);
                    background: rgba(200,16,46,0.06);
                }

                .wg-thumb img,
                .wg-thumb-placeholder {
                    width: 52px;
                    height: 40px;
                    object-fit: cover;
                    flex-shrink: 0;
                    filter: grayscale(40%) brightness(0.7);
                }

                .wg-thumb-placeholder {
                    background: rgba(255,255,255,0.05);
                    border: 1px dashed rgba(255,255,255,0.1);
                }

                .wg-thumb.active img {
                    filter: grayscale(0%) brightness(0.85);
                }

                .wg-thumb-text {
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                    min-width: 0;
                }

                .wg-thumb-label {
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: rgba(255,255,255,0.7);
                    line-height: 1.2;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .wg-thumb.active .wg-thumb-label {
                    color: var(--color-white);
                }

                .wg-thumb-sub {
                    font-size: 0.625rem;
                    color: rgba(255,255,255,0.3);
                    font-family: var(--font-mono);
                    text-transform: uppercase;
                    letter-spacing: 0.06em;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .wg-thumb-bar {
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: var(--color-accent);
                    opacity: 0;
                    transition: opacity 0.2s;
                }

                .wg-thumb.active .wg-thumb-bar {
                    opacity: 1;
                }

                /* Responsive */
                @media (max-width: 1024px) {
                    .wg-grid {
                        grid-template-columns: 1fr 260px;
                    }
                }

                @media (max-width: 768px) {
                    .wg-header {
                        grid-template-columns: 1fr;
                    }

                    .wg-eyebrow {
                        writing-mode: horizontal-tb;
                        transform: none;
                    }

                    .wg-sub {
                        text-align: left;
                        max-width: 100%;
                    }

                    .wg-grid {
                        grid-template-columns: 1fr;
                    }

                    .wg-thumbs {
                        flex-direction: row;
                        overflow-x: auto;
                        gap: var(--space-sm);
                        padding-bottom: 4px;
                    }

                    .wg-thumb {
                        flex-direction: column;
                        min-width: 120px;
                        flex: none;
                        align-items: flex-start;
                    }

                    .wg-thumb img,
                    .wg-thumb-placeholder {
                        width: 100%;
                        height: 64px;
                    }

                    .wg-thumb-bar {
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: auto;
                        width: auto;
                        height: 2px;
                    }
                }
            `}</style>
        </section>
    );
};

export default WorkGallery;
