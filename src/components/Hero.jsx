import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/iec-hero-bg.jpeg';

const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let animationId;
        let particles = [];
        
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        window.addEventListener('resize', resize);
        resize();

        // Particle class for mesh animation
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = Math.random() * 2 + 1;
            }
            
            update() {
                this.x += this.vx;
                this.y += this.vy;
                
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(200, 16, 46, 0.6)';
                ctx.fill();
            }
        }

        // Initialize particles
        for (let i = 0; i < 50; i++) {
            particles.push(new Particle());
        }

        const connectParticles = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(200, 16, 46, ${0.15 * (1 - dist / 150)})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            
            connectParticles();
            animationId = requestAnimationFrame(animate);
        };

        // Check for reduced motion preference
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            animate();
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
            
            {/* Mesh Animation Canvas */}
            <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />

            {/* Content */}
            <div className="container hero-content">
                <div className="hero-text">
                    <span className="hero-label animate-fade-up">Since 1998 • ISO 9001 Certified</span>
                    
                    <h1 className="hero-title display-title animate-fade-up delay-1">
                        Your trusted partner for<br />
                        <em>industrial excellence.</em>
                    </h1>
                    
                    <p className="hero-desc animate-fade-up delay-2">
                        India's premier engineering company specializing in high voltage motor 
                        and generator repair. Powering industries with precision, reliability, 
                        and over 25 years of expertise.
                    </p>
                    
                    <div className="hero-actions animate-fade-up delay-3">
                        <Link to="/contact" className="btn btn-primary">
                            Request a Quote
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </Link>
                        <Link to="/services" className="btn btn-secondary">
                            Our Capabilities
                        </Link>
                    </div>
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
                    min-height: 100vh;
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
                        rgba(10, 22, 40, 0.95) 0%,
                        rgba(10, 22, 40, 0.85) 40%,
                        rgba(10, 22, 40, 0.7) 100%
                    );
                }

                .hero-canvas {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                    opacity: 0.8;
                    pointer-events: none;
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    flex: 1;
                    display: flex;
                    align-items: center;
                    padding-top: calc(var(--header-height) + var(--space-4xl));
                    padding-bottom: var(--space-4xl);
                }

                .hero-text {
                    max-width: 700px;
                }

                .hero-label {
                    display: inline-block;
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    color: var(--color-accent);
                    margin-bottom: var(--space-xl);
                    opacity: 0;
                }

                .hero-title {
                    font-size: clamp(2.75rem, 6vw, 4.5rem);
                    font-weight: 400;
                    color: var(--color-white);
                    line-height: 1.1;
                    margin-bottom: var(--space-xl);
                    opacity: 0;
                }

                .hero-title em {
                    font-style: italic;
                    color: var(--color-accent);
                }

                .hero-desc {
                    font-size: 1.0625rem;
                    line-height: 1.8;
                    color: rgba(255, 255, 255, 0.7);
                    margin-bottom: var(--space-2xl);
                    max-width: 560px;
                    opacity: 0;
                }

                .hero-actions {
                    display: flex;
                    gap: var(--space-md);
                    opacity: 0;
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
                    padding: var(--space-xl) var(--space-lg);
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
                    font-size: 2.5rem;
                    font-weight: 400;
                    color: var(--color-text);
                    line-height: 1;
                }

                .stat-unit {
                    font-size: 1.5rem;
                    color: var(--color-accent);
                }

                .stat-label {
                    display: block;
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-muted);
                    margin-top: var(--space-sm);
                }

                @media (max-width: 900px) {
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
                    .hero-content {
                        padding-top: calc(var(--header-height) + var(--space-2xl));
                    }

                    .hero-actions {
                        flex-direction: column;
                    }

                    .hero-actions .btn {
                        width: 100%;
                        justify-content: center;
                    }

                    .stat-value {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
