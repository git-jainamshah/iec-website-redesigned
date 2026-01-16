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

        // Vibrant rainbow colors
        const colors = [
            { r: 255, g: 220, b: 0 },    // Yellow
            { r: 255, g: 150, b: 50 },   // Orange
            { r: 255, g: 80, b: 120 },   // Pink/Coral
            { r: 200, g: 50, b: 150 },   // Magenta
            { r: 100, g: 100, b: 255 },  // Blue
            { r: 50, g: 200, b: 150 },   // Teal
            { r: 100, g: 255, b: 100 },  // Green
        ];

        // Flowing wave mesh - at very bottom, full width
        const drawWaveMesh = () => {
            const width = canvas.offsetWidth;
            const height = canvas.offsetHeight;
            
            ctx.clearRect(0, 0, width, height);
            
            // Dense mesh lines
            const numLines = 30;
            const lineSpacing = 4;
            const meshHeight = numLines * lineSpacing;
            const startY = (height - meshHeight) / 2; // Center vertically in canvas
            
            for (let l = 0; l < numLines; l++) {
                const baseY = startY + l * lineSpacing;
                const phaseOffset = l * 0.4;
                
                ctx.beginPath();
                
                // Full width - left to right
                for (let x = 0; x <= width; x += 2) {
                    let y = baseY;
                    
                    // Multiple sine waves for flowing cloth effect
                    y += Math.sin(x * 0.005 + time * 1.3 + phaseOffset) * (18 + l * 0.8);
                    y += Math.sin(x * 0.012 + time * 2 + phaseOffset * 0.5) * (10 + l * 0.5);
                    y += Math.sin(x * 0.003 + time * 0.7) * 12;
                    
                    if (x === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                
                // Rainbow gradient - full width
                const gradient = ctx.createLinearGradient(0, 0, width, 0);
                const colorIndex = (l / numLines) * (colors.length - 1);
                const c1 = colors[Math.floor(colorIndex) % colors.length];
                const c2 = colors[Math.ceil(colorIndex) % colors.length];
                const t = colorIndex % 1;
                
                const r = Math.round(c1.r + (c2.r - c1.r) * t);
                const g = Math.round(c1.g + (c2.g - c1.g) * t);
                const b = Math.round(c1.b + (c2.b - c1.b) * t);
                
                const alpha = 0.7 - (l * 0.015);
                gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.5})`);
                gradient.addColorStop(0.25, `rgba(${r}, ${g}, ${b}, ${alpha})`);
                gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${alpha})`);
                gradient.addColorStop(0.75, `rgba(${r}, ${g}, ${b}, ${alpha})`);
                gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${alpha * 0.5})`);
                
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }

            // Vertical cross-lines for mesh texture
            for (let x = 0; x < width; x += 15) {
                const wobbleX = Math.sin(time + x * 0.01) * 8;
                
                ctx.beginPath();
                
                for (let l = 0; l < numLines; l++) {
                    const baseY = startY + l * lineSpacing;
                    let y = baseY;
                    
                    y += Math.sin(x * 0.005 + time * 1.3 + l * 0.4) * (18 + l * 0.8);
                    y += Math.sin(x * 0.012 + time * 2 + l * 0.2) * (10 + l * 0.5);
                    y += Math.sin(x * 0.003 + time * 0.7) * 12;
                    
                    if (l === 0) {
                        ctx.moveTo(x + wobbleX, y);
                    } else {
                        ctx.lineTo(x + wobbleX, y);
                    }
                }
                
                const colorIdx = Math.floor((x / width) * colors.length) % colors.length;
                const c = colors[colorIdx];
                ctx.strokeStyle = `rgba(${c.r}, ${c.g}, ${c.b}, 0.2)`;
                ctx.lineWidth = 0.6;
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

            {/* Wave Mesh Canvas - flows at bottom */}
            <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />

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

                {/* EASA Badge */}
                <div className="easa-badge">
                    <img src={easaLogo} alt="EASA Accredited Member" />
                </div>
            </div>

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

                /* Wave canvas - at very bottom of hero, full width */
                .hero-canvas {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                    height: 160px;
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
                    padding-bottom: var(--space-lg);
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

                /* EASA Badge */
                .easa-badge {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    background: white;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
                    flex-shrink: 0;
                    margin-right: var(--space-2xl);
                }

                .easa-badge img {
                    width: 50px;
                    height: 50px;
                    object-fit: contain;
                }

                /* Stats Strip */
                .hero-stats {
                    position: relative;
                    z-index: 3;
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
                        width: 56px;
                        height: 56px;
                        margin-right: 0;
                    }

                    .easa-badge img {
                        width: 34px;
                        height: 34px;
                    }

                    .hero-canvas {
                        height: 140px;
                        bottom: 0;
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
                        bottom: 0;
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
