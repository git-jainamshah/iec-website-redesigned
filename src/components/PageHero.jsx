import React from 'react';
import { Link } from 'react-router-dom';

const PageHero = ({ label, title, subtitle, breadcrumbs = [] }) => {
    return (
        <>
            <section className="page-hero">
                <div className="page-hero-bg" />
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
                    padding: calc(var(--header-height) + var(--space-3xl)) 0 var(--space-3xl);
                    overflow: hidden;
                }

                .page-hero-bg {
                    position: absolute;
                    inset: 0;
                    background: 
                        radial-gradient(ellipse at 70% 20%, rgba(200, 16, 46, 0.08) 0%, transparent 50%),
                        radial-gradient(ellipse at 20% 80%, rgba(26, 45, 74, 0.4) 0%, transparent 60%),
                        linear-gradient(135deg, var(--color-primary) 0%, #0d1f3c 50%, var(--color-primary) 100%);
                    opacity: 0.9;
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
                    color: var(--color-white);
                    font-size: clamp(2.25rem, 5vw, 3.5rem);
                    font-weight: 400;
                    line-height: 1.15;
                    margin-bottom: var(--space-md);
                    max-width: 700px;
                    opacity: 0;
                }

                /* Subtitle */
                .page-hero-subtitle {
                    font-size: 1.0625rem;
                    line-height: 1.7;
                    color: rgba(255, 255, 255, 0.55);
                    max-width: 540px;
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
                        padding: calc(var(--header-height) + var(--space-2xl)) 0 var(--space-2xl);
                    }

                    .page-hero-title {
                        font-size: clamp(1.75rem, 6vw, 2.5rem);
                    }

                    .page-hero-subtitle {
                        font-size: 0.9375rem;
                    }
                }
            `}</style>
        </>
    );
};

export default PageHero;
