import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/iec-hero-bg.jpeg';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-bg">
                {/* Static Industrial Image */}
                <img src={heroBg} alt="Industrial Motor Repair Facility" className="hero-img" />
                <div className="hero-overlay"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text-block">
                    <h1 className="hero-title">
                        POWERING <br />
                        <span className="text-white">INDUSTRIES.</span>
                    </h1>
                    <p className="hero-subtitle">
                        India’s leader in High Voltage Motor & Generator Maintenance since 1974.
                        <br />ISO 9001:2015 Certified.
                    </p>
                    <div className="hero-actions">
                        <Link to="/services" className="btn btn-primary">Explore Capabilities</Link>
                        <Link to="/contact" className="btn btn-outline">Contact Us</Link>
                    </div>
                </div>
            </div>

            {/* Corporate Stats Strip */}
            <div className="stats-strip">
                <div className="container stats-grid">
                    <div className="stat-item">
                        <span className="stat-value">50+</span>
                        <span className="stat-label">Years of Excellence</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">250MW</span>
                        <span className="stat-label">Repair Capacity</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">ISO 9001</span>
                        <span className="stat-label">Certified Quality</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">24/7</span>
                        <span className="stat-label">Emergency Support</span>
                    </div>
                </div>
            </div>

            <style>{`
                .hero-section {
                    position: relative;
                    height: 90vh;
                    min-height: 600px;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    margin-top: 80px; /* Header Offset */
                }

                .hero-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                }

                .hero-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    /* Corporate Gradient: Dark Left -> Light Right */
                    background: linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 100%);
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    width: 100%;
                }

                .hero-text-block {
                    max-width: 700px;
                    color: white;
                }

                .hero-title {
                    font-size: 64px;
                    font-weight: 700;
                    line-height: 1.1;
                    margin-bottom: 24px;
                    color: var(--color-accent); /* Red "POWERING" */
                }

                .text-white {
                    color: white;
                }

                .hero-subtitle {
                    font-size: 18px;
                    line-height: 1.6;
                    color: #e0e0e0;
                    margin-bottom: 40px;
                    font-weight: 300;
                    border-left: 3px solid var(--color-accent);
                    padding-left: 20px;
                }

                .hero-actions {
                    display: flex;
                    gap: 20px;
                }

                .btn-outline {
                    border: 1px solid white;
                    color: white;
                    padding: 12px 32px;
                    text-transform: uppercase;
                    font-weight: 600;
                    font-size: 14px;
                }
                
                .btn-outline:hover {
                    background: white;
                    color: #111;
                }

                /* Stats Strip */
                .stats-strip {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    background: var(--color-bg-body); /* White strip sitting on image bottom or below? */
                    background: rgba(255, 255, 255, 0.95); /* Clean white strip */
                    z-index: 5;
                    padding: 30px 0;
                    border-top: 4px solid var(--color-accent);
                }

                .stats-grid {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }

                .stat-item {
                    text-align: center;
                }

                .stat-value {
                    display: block;
                    font-size: 32px;
                    font-weight: 700;
                    color: var(--color-text-primary);
                    margin-bottom: 5px;
                }

                .stat-label {
                    font-size: 13px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: var(--color-text-secondary);
                    font-weight: 600;
                }

                @media (max-width: 768px) {
                    .hero-title { font-size: 42px; }
                    .stats-grid { flex-wrap: wrap; gap: 20px; }
                    .stat-item { width: 45%; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
