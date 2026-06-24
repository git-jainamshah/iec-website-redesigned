import React from 'react';
import { Link } from 'react-router-dom';
import defaultHeroBg from '../assets/iec-hero-default.jpg';

/**
 * PageHero — shared sub-page banner
 *
 * Props:
 *   label        string  – small mono eyebrow above title
 *   title        string  – main heading
 *   subtitle     string  – optional body text below title
 *   breadcrumbs  array   – [{ label, to? }]
 *   bgImage      img     – background (default: dark machinery)
 *   compact      bool    – use reduced-height variant (~290px) — default false
 *   sideImg      img     – optional right-side diagonal cutout photo
 */
const PageHero = ({ label, title, subtitle, breadcrumbs = [], bgImage, compact = false, sideImg = null }) => {
    const bg = bgImage || defaultHeroBg;
    return (
        <>
            <section className={`page-hero${compact ? ' page-hero--compact' : ''}${sideImg ? ' page-hero--split' : ''}`}>
                <div className="page-hero-bg">
                    <img src={bg} alt="" className="page-hero-bg-img" />
                    <div className="page-hero-bg-overlay" />
                </div>

                {sideImg && (
                    <div className="page-hero-side">
                        <img src={sideImg} alt="" className="page-hero-side-img" />
                        <div className="page-hero-side-fade" />
                    </div>
                )}

                <div className={`container page-hero-content${sideImg ? ' page-hero-content--narrow' : ''}`}>
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
                    min-height: 320px;
                    padding: calc(var(--header-height) + var(--space-3xl)) 0 var(--space-3xl);
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                }

                /* ── Compact variant ── */
                .page-hero--compact {
                    min-height: 260px;
                    padding: calc(var(--header-height) + var(--space-2xl)) 0 var(--space-2xl);
                }

                .page-hero--compact .page-hero-title {
                    font-size: clamp(2rem, 5vw, 3.75rem);
                    margin-bottom: var(--space-sm);
                }

                .page-hero--compact .page-hero-subtitle {
                    font-size: 0.9375rem;
                    max-width: 480px;
                }

                /* ── Split variant (side image) ── */
                .page-hero-side {
                    position: absolute;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    width: 40%;
                    overflow: hidden;
                    clip-path: polygon(14% 0, 100% 0, 100% 100%, 0 100%);
                    z-index: 2;
                }

                .page-hero-side-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    filter: grayscale(55%) brightness(0.65) contrast(1.1);
                }

                .page-hero-side-fade {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to right, rgba(17,17,20,0.5) 0%, rgba(17,17,20,0) 50%);
                }

                .page-hero-content--narrow {
                    max-width: 56%;
                }

                /* ── Background ── */
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
                    filter: grayscale(100%) brightness(0.38) contrast(1.15) saturate(0);
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
                        linear-gradient(105deg, rgba(17,17,20,0.88) 0%, rgba(17,17,20,0.4) 55%, rgba(17,17,20,0.18) 100%),
                        linear-gradient(to top, rgba(17,17,20,0.75) 0%, transparent 50%),
                        linear-gradient(to bottom, rgba(17,17,20,0.4) 0%, transparent 30%);
                }

                .page-hero-content {
                    position: relative;
                    z-index: 3;
                }

                /* Breadcrumbs */
                .breadcrumbs {
                    display: flex;
                    align-items: center;
                    gap: 0;
                    margin-bottom: var(--space-lg);
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
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 500;
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
                    font-size: clamp(2.5rem, 6vw, 5.5rem);
                    font-weight: 300;
                    line-height: 1.08;
                    letter-spacing: -0.03em;
                    margin-bottom: var(--space-lg);
                    max-width: 820px;
                    opacity: 0;
                }

                /* Subtitle */
                .page-hero-subtitle {
                    font-size: 1.0625rem;
                    line-height: 1.7;
                    color: rgba(255, 255, 255, 0.62);
                    max-width: 520px;
                    opacity: 0;
                }

                /* Accent line */
                .page-hero-accent {
                    width: 40px;
                    height: 2px;
                    background: var(--color-accent);
                    margin-top: var(--space-xl);
                    opacity: 0;
                }

                /* Mobile */
                @media (max-width: 768px) {
                    .page-hero {
                        min-height: 260px;
                        padding: calc(var(--header-height) + var(--space-2xl)) 0 var(--space-2xl);
                    }

                    .page-hero--compact {
                        min-height: 220px;
                        padding: calc(var(--header-height) + var(--space-xl)) 0 var(--space-xl);
                    }

                    .page-hero-title {
                        font-size: clamp(2rem, 8vw, 2.75rem);
                    }

                    .page-hero-subtitle {
                        font-size: 0.9375rem;
                    }

                    .page-hero-side {
                        display: none;
                    }

                    .page-hero-content--narrow {
                        max-width: 100%;
                    }
                }
            `}</style>
        </>
    );
};

export default PageHero;
