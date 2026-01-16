import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/iec-hero-bg.jpeg';
import easaLogo from '../assets/easa-logo.png';

const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let animationId;
        let time = 0;
        
        const resize = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };
        
        window.addEventListener('resize', resize);
        resize();

        // Floating wave mesh animation
        const drawWaveMesh = () => {
            const width = canvas.offsetWidth;
            const height = canvas.offsetHeight;
            
            ctx.clearRect(0, 0, width, height);
            
            // Wave parameters
            const waves = [
                { amplitude: 30, frequency: 0.008, speed: 0.015, color: 'rgba(200, 16, 46, 0.4)', yOffset: 0.3 },
                { amplitude: 25, frequency: 0.012, speed: 0.02, color: 'rgba(200, 16, 46, 0.3)', yOffset: 0.35 },
                { amplitude: 35, frequency: 0.006, speed: 0.01, color: 'rgba(255, 100, 100, 0.25)', yOffset: 0.4 },
                { amplitude: 20, frequency: 0.015, speed: 0.025, color: 'rgba(200, 16, 46, 0.2)', yOffset: 0.45 },
            ];

            // Draw flowing mesh lines
            const numLines = 12;
            const lineSpacing = 15;
            
            for (let l = 0; l < numLines; l++) {
                const baseY = height * 0.5 + l * lineSpacing;
                const phaseOffset = l * 0.3;
                
                ctx.beginPath();
                ctx.moveTo(0, baseY);
                
                for (let x = 0; x <= width; x += 3) {
                    let y = baseY;
                    
                    // Combine multiple sine waves for organic movement
                    y += Math.sin(x * 0.01 + time * 0.8 + phaseOffset) * (20 + l * 2);
                    y += Math.sin(x * 0.02 + time * 1.2 + phaseOffset * 0.5) * (10 + l);
                    y += Math.sin(x * 0.005 + time * 0.5) * 15;
                    
                    ctx.lineTo(x, y);
                }
                
                // Gradient effect based on line position
                const gradient = ctx.createLinearGradient(0, 0, width, 0);
                const alpha = 0.15 - (l * 0.01);
                gradient.addColorStop(0, `rgba(200, 16, 46, ${alpha * 0.5})`);
                gradient.addColorStop(0.3, `rgba(200, 16, 46, ${alpha})`);
                gradient.addColorStop(0.6, `rgba(255, 80, 80, ${alpha})`);
                gradient.addColorStop(1, `rgba(200, 16, 46, ${alpha * 0.3})`);
                
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }

            // Draw connecting vertical lines for mesh effect
            for (let x = 0; x < width; x += 40) {
                const wobble = Math.sin(x * 0.02 + time) * 20;
                
                ctx.beginPath();
                ctx.moveTo(x + wobble, height * 0.5);
                ctx.lineTo(x + wobble + Math.sin(time + x * 0.01) * 10, height * 0.5 + numLines * lineSpacing);
                ctx.strokeStyle = `rgba(200, 16, 46, ${0.05 + Math.sin(x * 0.01 + time) * 0.02})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }

            time += 0.02;
            animationId = requestAnimationFrame(drawWaveMesh);
        };

        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            drawWaveMesh();
        }

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <section className="hero">
            {/* Background */}
            <div className="hero-bg">
                <img src={heroBg} alt="" aria-hidden="true" />
                <div className="hero-overlay" />
            </div>

            {/* Content */}
            <div className="container hero-content">
                <div className="hero-text">
                    <span className="hero-label animate-fade-up">Since 1998 · ISO 9001 Certified</span>
                    
                    <h1 className="hero-title display-title animate-fade-up delay-1">
                        Your trusted partner for<br />
                        <em>industrial excellence.</em>
                    </h1>
                    
                    <p className="hero-desc animate-fade-up delay-2">
                        India's premier engineering company specializing in high voltage motor 
                        and generator repair. Powering industries with precision and reliability.
                    </p>
                    
                    <div className="hero-actions animate-fade-up delay-3">
                        <Link to="/contact" className="hero-cta">
                            Connect Now
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* EASA Badge - Minimal circular */}
                <div className="easa-badge">
                    <img src={easaLogo} alt="EASA Accredited Member" />
                </div>
            </div>

            {/* Floating Wave Mesh Canvas - Bottom area */}
            <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />

            {/* Stats Strip */}
            <div className="hero-stats">
                <div className="container stats-container">
                    <div className="stat animate-fade-up delay-2">
                        <span className="stat-value">250<span className="stat-unit">MW</span></span>
                        <span className="stat-label">Repair Capacity</span>
                    </div>
                    <div className="stat animate-fade-up delay-3">
                        <span className="stat-value">400<span className="stat-unit">+</span></span>
                        <span className="stat-label">Annual Projects</span>
                    </div>
                    <div className="stat animate-fade-up delay-4">
                        <span className="stat-value">75<span className="stat-unit">K</span></span>
                        <span className="stat-label">Sq.Ft Shop Floor</span>
                    </div>
                    <div className="stat animate-fade-up delay-5">
                        <span className="stat-value">24<span className="stat-unit">/7</span></span>
                        <span className="stat-label">Emergency Support</span>
                    </div>
                </div>
            </div>

            <style>{`
                .hero {
                    position: relative;
                    min-height: 70vh;
                    display: flex;
                    flex-direction: column;
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
                }

                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        135deg,
                        rgba(10, 22, 40, 0.92) 0%,
                        rgba(10, 22, 40, 0.8) 40%,
                        rgba(10, 22, 40, 0.65) 100%
                    );
                }

                /* Wave Mesh Canvas - positioned at bottom */
                .hero-canvas {
                    position: absolute;
                    bottom: 80px;
                    left: 0;
                    right: 0;
                    height: 200px;
                    z-index: 1;
                    pointer-events: none;
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-top: calc(var(--header-height) + var(--space-lg));
                    padding-bottom: var(--space-xl);
                }

                .hero-text {
                    max-width: 580px;
                }

                .hero-label {
                    display: inline-block;
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: rgba(255, 255, 255, 0.6);
                    margin-bottom: var(--space-md);
                    opacity: 0;
                }

                .hero-title {
                    font-size: clamp(2rem, 4.5vw, 3rem);
                    font-weight: 400;
                    color: var(--color-white);
                    line-height: 1.15;
                    margin-bottom: var(--space-md);
                    opacity: 0;
                }

                .hero-title em {
                    font-style: italic;
                    color: var(--color-accent);
                }

                .hero-desc {
                    font-size: 0.9375rem;
                    line-height: 1.7;
                    color: rgba(255, 255, 255, 0.6);
                    margin-bottom: var(--space-lg);
                    max-width: 480px;
                    opacity: 0;
                }

                .hero-actions {
                    opacity: 0;
                }

                .hero-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: var(--space-sm);
                    font-size: 0.8125rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: var(--color-white);
                    padding-bottom: 4px;
                    border-bottom: 2px solid var(--color-accent);
                    transition: all 0.3s var(--ease-out);
                }

                .hero-cta:hover {
                    gap: var(--space-md);
                    color: var(--color-accent);
                }

                .hero-cta svg {
                    transition: transform 0.3s var(--ease-out);
                }

                .hero-cta:hover svg {
                    transform: translateX(4px);
                }

                /* EASA Badge - Minimal circular style */
                .easa-badge {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(8px);
                    flex-shrink: 0;
                    margin-right: var(--space-2xl);
                }

                .easa-badge img {
                    width: 54px;
                    height: 54px;
                    object-fit: contain;
                    filter: brightness(0) invert(1);
                    opacity: 0.9;
                }

                /* Stats Strip */
                .hero-stats {
                    position: relative;
                    z-index: 2;
                    background: var(--color-white);
                    border-top: 3px solid var(--color-accent);
                }

                .stats-container {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                }

                .stat {
                    padding: var(--space-md) var(--space-sm);
                    text-align: center;
                    border-right: 1px solid var(--color-border);
                    opacity: 0;
                }

                .stat:last-child {
                    border-right: none;
                }

                .stat-value {
                    display: block;
                    font-family: var(--font-serif);
                    font-size: 1.75rem;
                    font-weight: 400;
                    color: var(--color-text);
                    line-height: 1;
                }

                .stat-unit {
                    font-size: 1.125rem;
                    color: var(--color-accent);
                }

                .stat-label {
                    display: block;
                    font-size: 0.5625rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-muted);
                    margin-top: var(--space-xs);
                }

                @media (max-width: 900px) {
                    .hero {
                        min-height: 65vh;
                    }

                    .hero-content {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: var(--space-lg);
                    }

                    .easa-badge {
                        position: absolute;
                        top: calc(var(--header-height) + var(--space-md));
                        right: var(--space-md);
                        width: 64px;
                        height: 64px;
                        margin-right: 0;
                    }

                    .easa-badge img {
                        width: 36px;
                        height: 36px;
                    }

                    .hero-canvas {
                        height: 150px;
                        bottom: 70px;
                    }

                    .stats-container {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .stat {
                        border-bottom: 1px solid var(--color-border);
                    }

                    .stat:nth-child(2) {
                        border-right: none;
                    }

                    .stat:nth-last-child(-n+2) {
                        border-bottom: none;
                    }
                }

                @media (max-width: 600px) {
                    .hero {
                        min-height: 60vh;
                    }

                    .hero-content {
                        padding-top: calc(var(--header-height) + var(--space-md));
                    }

                    .easa-badge {
                        display: none;
                    }

                    .hero-canvas {
                        height: 120px;
                        bottom: 60px;
                    }

                    .stat-value {
                        font-size: 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
