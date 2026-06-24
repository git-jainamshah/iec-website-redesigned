import React from 'react';
import { Link } from 'react-router-dom';
import defaultHeroBg from '../assets/iec-hero-default.jpg';

const PageHero = ({ label, title, subtitle, breadcrumbs = [], bgImage }) => {
    const bg = bgImage || defaultHeroBg;
    return (
        <>
            <section className="page-hero">
                <div className="page-hero-bg">
                    <img src={bg} alt="" className="page-hero-bg-img" />
                    <div className="page-hero-bg-overlay" />
                </div>
                <div className="container page-hero-content">
                    {breadcrumbs.length > 0 && (
                        <nav className="breadcrumbs animate-fade-up">
                            <Link to="/">Home</Link>
                            {breadcrumbs.map((crumb, i) => (
                                <span key={i}>
                                    <span className="breadcrumb-sep">/</span>
                                    {crumb.to ? (
                                        <Link to={crumb.to}>{crumb.label}</Link>
                                    ) : (
                                        <span className="breadcrumb-current">{crumb.label}</span>
                                    )}
                                </span>
                            ))}
                        </nav>
                    )}

                    {label && (
                        <span className="page-hero-label animate-fade-up delay-1">{label}</span>
                    )}

                    <h1 className="page-hero-title display-title animate-fade-up delay-2">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="page-hero-subtitle animate-fade-up delay-3">{subtitle}</p>
                    )}

                    <div className="page-hero-accent animate-fade-up delay-4" />
                </div>
            </section>

            <style>{`
                .page-hero {
                    position: relative;
                    background: var(--color-primary);
                    min-height: 480px;
                    padding: calc(var(--header-height) + var(--space-5xl)) 0 var(--space-4xl);
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                }

                .page-hero-bg {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                }

                .page-hero-bg-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center 35%;
                    filter: grayscale(100%) brightness(0.42) contrast(1.15) saturate(0);
                    transform: scale(1.06);
                    display: block;
                    transition: transform 8s ease-out;
                }

                .page-hero:hover .page-hero-bg-img {
                    transform: scale(1.0);
                }

                .page-hero-bg-overlay {
                    position: absolute;
                    inset: 0;
                    background:
                        linear-gradient(105deg, rgba(22,28,40,0.82) 0%, rgba(22,28,40,0.38) 55%, rgba(22,28,40,0.15) 100%),
                        linear-gradient(to top, rgba(22,28,40,0.75) 0%, transparent 50%),
                        linear-gradient(to bottom, rgba(22,28,40,0.4) 0%, transparent 30%);
                }

                .page-hero-content {
                    position: relative;
                    z-index: 1;
                }

                /* Breadcrumbs */
                .breadcrumbs {
                    display: flex;
                    align-items: center;
                    gap: 0;
                    margin-bottom: var(--space-xl);
                    font-size: 0.75rem;
                    letter-spacing: 0.04em;
                    opacity: 0;
                }

                .breadcrumbs a {
                    color: rgba(255, 255, 255, 0.5);
                    transition: color 0.2s;
                }

                .breadcrumbs a:hover {
                    color: var(--color-white);
                }

                .breadcrumb-sep {
                    margin: 0 8px;
                    color: rgba(255, 255, 255, 0.25);
                }

                .breadcrumb-current {
                    color: rgba(255, 255, 255, 0.8);
                }

                /* Label */
                .page-hero-label {
                    display: inline-block;
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    color: var(--color-accent);
                    margin-bottom: var(--space-md);
                    opacity: 0;
                }

                /* Title */
                .page-hero-title {
                    font-family: var(--font-display);
                    color: var(--color-white);
                    font-size: clamp(3rem, 7vw, 6.5rem);
                    font-weight: 700;
                    line-height: 1.05;
                    letter-spacing: -0.03em;
                    margin-bottom: var(--space-lg);
                    max-width: 820px;
                    opacity: 0;
                }

                /* Subtitle */
                .page-hero-subtitle {
                    font-size: 1.125rem;
                    line-height: 1.7;
                    color: rgba(255, 255, 255, 0.65);
                    max-width: 560px;
                    opacity: 0;
                }

                /* Accent line */
                .page-hero-accent {
                    width: 48px;
                    height: 2px;
                    background: var(--color-accent);
                    margin-top: var(--space-xl);
                    opacity: 0;
                }

                /* Mobile */
                @media (max-width: 768px) {
                    .page-hero {
                        min-height: 360px;
                        padding: calc(var(--header-height) + var(--space-3xl)) 0 var(--space-3xl);
                    }

                    .page-hero-title {
                        font-size: clamp(2rem, 8vw, 3rem);
                    }

                    .page-hero-subtitle {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </>
    );
};

export default PageHero;
