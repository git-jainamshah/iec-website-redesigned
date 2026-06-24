import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { openings } from '../data/openings.jsx';
import imgBg from '../assets/iec-hv-taping-room.jpg';
import imgCtaBg from '../assets/iec-workshop-overview.jpg';

/* ── SEO meta ── */
const useMeta = (title, description) => {
    useEffect(() => {
        if (!title) return;
        document.title = `${title} | Careers at IEC`;
        const setMeta = (name, content, prop = false) => {
            const sel = prop ? `meta[property="${name}"]` : `meta[name="${name}"]`;
            let el = document.querySelector(sel);
            if (!el) {
                el = document.createElement('meta');
                prop ? el.setAttribute('property', name) : el.setAttribute('name', name);
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        };
        setMeta('description', description);
        setMeta('og:title', `${title} | IEC`, true);
        setMeta('og:description', description, true);
        setMeta('og:type', 'website', true);
        return () => { document.title = 'Indian Engineering Company | IEC'; };
    }, [title, description]);
};

/* ── JSON-LD job posting ── */
const useJobLd = (job) => {
    useEffect(() => {
        if (!job) return;
        const el = document.createElement('script');
        el.type = 'application/ld+json';
        el.id = 'job-jsonld';
        el.textContent = JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'JobPosting',
            title: job.title,
            description: job.overview,
            datePosted: job.posted.toISOString().split('T')[0],
            employmentType: job.type === 'Full-time' ? 'FULL_TIME' : 'PART_TIME',
            hiringOrganization: {
                '@type': 'Organization',
                name: 'Indian Engineering Company',
                sameAs: 'https://iec-website-redesigned.vercel.app',
            },
            jobLocation: {
                '@type': 'Place',
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Vadodara',
                    addressRegion: 'Gujarat',
                    addressCountry: 'IN',
                },
            },
        });
        document.head.appendChild(el);
        return () => { const existing = document.getElementById('job-jsonld'); if (existing) existing.remove(); };
    }, [job]);
};

const timeAgo = (date) => {
    const days = Math.floor((Date.now() - date) / 86400000);
    if (days < 1) return 'Today';
    if (days === 1) return '1 day ago';
    if (days < 30) return `${days} days ago`;
    const months = Math.floor(days / 30);
    return months === 1 ? '1 month ago' : `${months} months ago`;
};

const CheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const JobPosting = () => {
    const { slug } = useParams();
    const job = openings.find(o => o.slug === slug || String(o.id) === String(slug));
    const others = openings.filter(o => o.id !== job?.id).slice(0, 3);

    useMeta(job?.title, job?.overview?.slice(0, 160));
    useJobLd(job);

    useEffect(() => { window.scrollTo(0, 0); }, [slug]);

    if (!job) {
        return (
            <div className="jp-notfound">
                <h1>Position not found</h1>
                <Link to="/careers">View All Openings</Link>
            </div>
        );
    }

    return (
        <div className="jp-page">

            {/* ── Hero ── */}
            <section className="jp-hero">
                <div className="jp-hero-bg">
                    <img src={imgBg} alt="" className="jp-hero-img" />
                    <div className="jp-hero-overlay" />
                </div>
                <div className="container jp-hero-inner">
                    <nav className="jp-breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/careers">Careers</Link>
                        <span>/</span>
                        <span className="jp-breadcrumb-current">{job.dept}</span>
                    </nav>

                    <div className="jp-hero-badges">
                        <span className="jp-badge jp-badge--dept">{job.dept}</span>
                        <span className="jp-badge jp-badge--type">{job.type}</span>
                        <span className="jp-badge jp-badge--time">{timeAgo(job.posted)}</span>
                    </div>

                    <h1 className="jp-hero-title">{job.title}</h1>

                    <div className="jp-hero-meta">
                        <div className="jp-meta-item">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            {job.site}
                        </div>
                        <div className="jp-meta-item">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                            {job.dept}
                        </div>
                        <div className="jp-meta-item">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            {job.type}
                        </div>
                    </div>

                    <Link to="/contact" className="jp-apply-hero-btn">
                        Apply for This Role
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                </div>
            </section>

            {/* ── Body ── */}
            <section className="jp-body">
                <div className="container jp-body-grid">

                    {/* Main content */}
                    <div className="jp-main">

                        {/* Overview */}
                        <div className="jp-section">
                            <span className="jp-eyebrow">01 / Role Overview</span>
                            <p className="jp-overview">{job.overview}</p>
                        </div>

                        {/* Responsibilities */}
                        <div className="jp-section">
                            <span className="jp-eyebrow">02 / What You'll Do</span>
                            <h2 className="jp-section-title">Responsibilities</h2>
                            <ul className="jp-list">
                                {job.responsibilities.map((item, i) => (
                                    <li key={i} className="jp-list-item">
                                        <span className="jp-check"><CheckIcon /></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Requirements */}
                        <div className="jp-section jp-section--alt">
                            <span className="jp-eyebrow jp-eyebrow--light">03 / What We're Looking For</span>
                            <h2 className="jp-section-title jp-section-title--light">Requirements</h2>
                            <ul className="jp-list jp-list--light">
                                {job.requirements.map((item, i) => (
                                    <li key={i} className="jp-list-item jp-list-item--light">
                                        <span className="jp-bullet" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* What we offer */}
                        <div className="jp-section">
                            <span className="jp-eyebrow">04 / What We Offer</span>
                            <h2 className="jp-section-title">Benefits</h2>
                            <div className="jp-offers-grid">
                                {job.whatWeOffer.map((item, i) => (
                                    <div key={i} className="jp-offer-card">
                                        <div className="jp-offer-dot" />
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="jp-sidebar">
                        <div className="jp-sidebar-card">
                            <h3 className="jp-sidebar-title">Apply Now</h3>
                            <p className="jp-sidebar-body">
                                Send us your resume and a brief note about why you're interested in this role.
                                Our team typically responds within 5 business days.
                            </p>
                            <Link to="/contact" className="jp-sidebar-apply-btn">
                                Send Application
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </Link>
                            <div className="jp-sidebar-divider" />
                            <div className="jp-sidebar-detail">
                                <span className="jp-sidebar-label">Department</span>
                                <span className="jp-sidebar-value">{job.dept}</span>
                            </div>
                            <div className="jp-sidebar-detail">
                                <span className="jp-sidebar-label">Type</span>
                                <span className="jp-sidebar-value">{job.type}</span>
                            </div>
                            <div className="jp-sidebar-detail">
                                <span className="jp-sidebar-label">Location</span>
                                <span className="jp-sidebar-value">{job.site}</span>
                            </div>
                            <div className="jp-sidebar-detail">
                                <span className="jp-sidebar-label">Posted</span>
                                <span className="jp-sidebar-value">{timeAgo(job.posted)}</span>
                            </div>
                        </div>

                        <div className="jp-sidebar-share">
                            <span className="jp-sidebar-label">Share this role</span>
                            <div className="jp-share-row">
                                <a
                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                    target="_blank" rel="noopener noreferrer"
                                    className="jp-share-btn" aria-label="Share on LinkedIn"
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                </a>
                                <a
                                    href={`https://wa.me/?text=${encodeURIComponent(job.title + ' at IEC — ' + (typeof window !== 'undefined' ? window.location.href : ''))}`}
                                    target="_blank" rel="noopener noreferrer"
                                    className="jp-share-btn" aria-label="Share on WhatsApp"
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* ── CTA Band ── */}
            <section className="jp-cta">
                <div className="jp-cta-bg">
                    <img src={imgCtaBg} alt="" />
                    <div className="jp-cta-overlay" />
                </div>
                <div className="container jp-cta-inner">
                    <div>
                        <span className="jp-cta-eyebrow">Ready to Apply?</span>
                        <h2 className="jp-cta-title">Join IEC's Expert Team</h2>
                        <p className="jp-cta-body">
                            Send your resume and a brief cover note to our team. We respond to every application personally.
                        </p>
                    </div>
                    <Link to="/contact" className="jp-cta-btn">
                        Get in Touch
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                </div>
            </section>

            {/* ── Other Openings ── */}
            {others.length > 0 && (
                <section className="jp-others">
                    <div className="container">
                        <div className="jp-others-head">
                            <span className="jp-eyebrow-dark">More Openings</span>
                            <h2 className="jp-others-title">Other Roles at IEC</h2>
                        </div>
                        <div className="jp-others-list">
                            {others.map(o => (
                                <Link key={o.id} to={`/careers/${o.slug}`} className="jp-other-row">
                                    <div className="jp-other-info">
                                        <div className="jp-other-badges">
                                            <span className="jp-other-dept">{o.dept}</span>
                                            <span className="jp-other-type">{o.type}</span>
                                        </div>
                                        <h3 className="jp-other-title">{o.title}</h3>
                                        <p className="jp-other-site">
                                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                            {o.site}
                                        </p>
                                    </div>
                                    <span className="jp-other-arrow">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                    </span>
                                </Link>
                            ))}
                        </div>
                        <div className="jp-others-footer">
                            <Link to="/careers" className="jp-all-link">
                                View All Openings
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            <style>{`
                .jp-page { min-height: 100vh; }

                /* ── Hero ── */
                .jp-hero {
                    position: relative;
                    min-height: 460px;
                    display: flex; align-items: flex-end;
                    padding: calc(var(--header-height) + var(--space-3xl)) 0 var(--space-4xl);
                    overflow: hidden;
                }
                .jp-hero-bg { position: absolute; inset: 0; }
                .jp-hero-img {
                    width: 100%; height: 100%;
                    object-fit: cover; object-position: center;
                    filter: grayscale(100%) brightness(0.28) contrast(1.2);
                    transform: scale(1.04);
                }
                .jp-hero-overlay {
                    position: absolute; inset: 0;
                    background:
                        linear-gradient(to top, rgba(9,9,12,0.98) 0%, rgba(9,9,12,0.6) 50%, rgba(9,9,12,0.3) 100%);
                }
                .jp-hero-inner {
                    position: relative; z-index: 2;
                    display: flex; flex-direction: column; gap: var(--space-lg);
                }

                /* Breadcrumb */
                .jp-breadcrumb {
                    display: flex; align-items: center; gap: 8px;
                    font-family: var(--font-mono); font-size: 0.6875rem;
                    text-transform: uppercase; letter-spacing: 0.08em;
                }
                .jp-breadcrumb a { color: rgba(255,255,255,0.4); transition: color 0.2s; text-decoration: none; }
                .jp-breadcrumb a:hover { color: var(--color-white); }
                .jp-breadcrumb span { color: rgba(255,255,255,0.2); }
                .jp-breadcrumb-current { color: rgba(255,255,255,0.65); }

                /* Badges */
                .jp-hero-badges { display: flex; gap: 10px; flex-wrap: wrap; }
                .jp-badge {
                    font-family: var(--font-mono); font-size: 0.5625rem;
                    font-weight: 500; text-transform: uppercase; letter-spacing: 0.12em;
                    padding: 4px 10px;
                }
                .jp-badge--dept { background: rgba(200,16,46,0.12); color: var(--color-accent); border: 1px solid rgba(200,16,46,0.28); }
                .jp-badge--type { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.65); border: 1px solid rgba(255,255,255,0.12); }
                .jp-badge--time { background: transparent; color: rgba(255,255,255,0.35); border: 1px solid rgba(255,255,255,0.08); }

                /* Hero title */
                .jp-hero-title {
                    font-family: var(--font-display); font-weight: 300;
                    font-size: clamp(2rem, 5vw, 4rem);
                    letter-spacing: -0.025em; line-height: 1.1;
                    color: var(--color-white); margin: 0;
                    max-width: 780px;
                }

                /* Hero meta */
                .jp-hero-meta {
                    display: flex; gap: var(--space-xl); flex-wrap: wrap;
                }
                .jp-meta-item {
                    display: flex; align-items: center; gap: 8px;
                    font-family: var(--font-mono); font-size: 0.6875rem;
                    text-transform: uppercase; letter-spacing: 0.08em;
                    color: rgba(255,255,255,0.5);
                }

                /* Hero apply button */
                .jp-apply-hero-btn {
                    display: inline-flex; align-items: center; gap: 10px;
                    padding: 14px 32px; margin-top: var(--space-md);
                    font-family: var(--font-mono); font-size: 0.75rem;
                    font-weight: 500; text-transform: uppercase; letter-spacing: 0.14em;
                    color: var(--color-white); background: var(--color-accent);
                    border: 1px solid var(--color-accent); text-decoration: none;
                    transition: background 0.25s, color 0.25s;
                    align-self: flex-start;
                }
                .jp-apply-hero-btn:hover { background: transparent; color: var(--color-white); }

                /* ── Body ── */
                .jp-body { background: var(--color-white); padding: var(--space-5xl) 0; }
                .jp-body-grid {
                    display: grid; grid-template-columns: 1fr 320px;
                    gap: var(--space-4xl); align-items: start;
                }

                /* Sections */
                .jp-section { margin-bottom: var(--space-4xl); }
                .jp-section--alt {
                    background: var(--color-primary);
                    padding: var(--space-3xl);
                    margin-left: calc(-1 * var(--space-xl));
                    margin-right: calc(-1 * var(--space-xl));
                }
                .jp-eyebrow {
                    display: block; font-family: var(--font-mono); font-size: 0.6875rem;
                    font-weight: 500; text-transform: uppercase; letter-spacing: 0.16em;
                    color: var(--color-accent); margin-bottom: var(--space-md);
                }
                .jp-eyebrow--light { color: rgba(200,16,46,0.85); }
                .jp-section-title {
                    font-family: var(--font-display); font-weight: 300;
                    font-size: clamp(1.375rem, 2.5vw, 2rem);
                    letter-spacing: -0.02em; color: var(--color-primary);
                    margin: 0 0 var(--space-2xl);
                }
                .jp-section-title--light { color: var(--color-white); }
                .jp-overview {
                    font-size: 1.0625rem; line-height: 1.8;
                    color: rgba(17,17,20,0.75); margin: 0;
                    border-left: 3px solid var(--color-accent);
                    padding-left: var(--space-xl);
                }

                /* Lists */
                .jp-list { list-style: none; display: flex; flex-direction: column; gap: 14px; }
                .jp-list-item {
                    display: flex; gap: 14px; align-items: flex-start;
                    font-size: 0.9375rem; line-height: 1.7; color: rgba(17,17,20,0.78);
                }
                .jp-list-item--light { color: rgba(255,255,255,0.72); }
                .jp-check {
                    width: 22px; height: 22px; border-radius: 50%;
                    background: rgba(200,16,46,0.1); color: var(--color-accent);
                    display: flex; align-items: center; justify-content: center;
                    flex-shrink: 0; margin-top: 1px;
                }
                .jp-bullet {
                    width: 6px; height: 6px; border-radius: 50%;
                    background: var(--color-accent); flex-shrink: 0; margin-top: 8px;
                }

                /* Offers grid */
                .jp-offers-grid {
                    display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-lg);
                }
                .jp-offer-card {
                    padding: var(--space-xl);
                    border: 1px solid rgba(17,17,20,0.08);
                    background: rgba(17,17,20,0.02);
                }
                .jp-offer-dot {
                    width: 24px; height: 3px; background: var(--color-accent);
                    margin-bottom: var(--space-md);
                }
                .jp-offer-card p {
                    font-size: 0.9375rem; line-height: 1.65;
                    color: rgba(17,17,20,0.7); margin: 0;
                }

                /* Sidebar */
                .jp-sidebar { position: sticky; top: calc(var(--header-height) + 32px); }
                .jp-sidebar-card {
                    background: var(--color-primary);
                    padding: var(--space-2xl);
                }
                .jp-sidebar-title {
                    font-family: var(--font-display); font-weight: 300;
                    font-size: 1.5rem; letter-spacing: -0.02em;
                    color: var(--color-white); margin: 0 0 var(--space-md);
                }
                .jp-sidebar-body {
                    font-size: 0.875rem; line-height: 1.7;
                    color: rgba(255,255,255,0.55); margin: 0 0 var(--space-xl);
                }
                .jp-sidebar-apply-btn {
                    display: flex; align-items: center; justify-content: center; gap: 8px;
                    width: 100%; padding: 13px 20px;
                    font-family: var(--font-mono); font-size: 0.6875rem;
                    font-weight: 500; text-transform: uppercase; letter-spacing: 0.12em;
                    color: #ffffff; background: var(--color-accent);
                    border: 1px solid var(--color-accent); text-decoration: none;
                    transition: background 0.25s, color 0.25s;
                    margin-bottom: var(--space-xl);
                }
                .jp-sidebar-apply-btn:hover { background: transparent; color: var(--color-white); }
                .jp-sidebar-divider { height: 1px; background: rgba(255,255,255,0.08); margin-bottom: var(--space-xl); }
                .jp-sidebar-detail {
                    display: flex; justify-content: space-between; align-items: flex-start;
                    gap: 12px; margin-bottom: 14px;
                }
                .jp-sidebar-label {
                    font-family: var(--font-mono); font-size: 0.625rem;
                    text-transform: uppercase; letter-spacing: 0.1em;
                    color: rgba(255,255,255,0.35); flex-shrink: 0;
                }
                .jp-sidebar-value { font-size: 0.875rem; color: rgba(255,255,255,0.75); text-align: right; }

                .jp-sidebar-share {
                    margin-top: var(--space-xl); padding: var(--space-xl);
                    border: 1px solid rgba(17,17,20,0.08);
                }
                .jp-share-row { display: flex; gap: 10px; margin-top: 12px; }
                .jp-share-btn {
                    width: 38px; height: 38px; display: flex; align-items: center; justify-content: center;
                    border: 1px solid rgba(17,17,20,0.12); background: transparent;
                    color: rgba(17,17,20,0.5); text-decoration: none;
                    transition: background 0.2s, color 0.2s, border-color 0.2s;
                }
                .jp-share-btn:hover { background: var(--color-accent); border-color: var(--color-accent); color: #fff; }

                /* ── CTA Band ── */
                .jp-cta {
                    position: relative; overflow: hidden;
                    padding: var(--space-5xl) 0; background: var(--color-dark);
                }
                .jp-cta-bg { position: absolute; inset: 0; }
                .jp-cta-bg img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) brightness(0.18) contrast(1.2); }
                .jp-cta-overlay {
                    position: absolute; inset: 0;
                    background: linear-gradient(105deg, rgba(9,9,12,0.96) 0%, rgba(9,9,12,0.6) 100%);
                }
                .jp-cta-inner {
                    position: relative; z-index: 1;
                    display: flex; align-items: center; justify-content: space-between;
                    gap: var(--space-3xl); flex-wrap: wrap;
                }
                .jp-cta-eyebrow {
                    display: block; font-family: var(--font-mono); font-size: 0.6875rem;
                    font-weight: 500; text-transform: uppercase; letter-spacing: 0.16em;
                    color: var(--color-accent); margin-bottom: var(--space-md);
                }
                .jp-cta-title {
                    font-family: var(--font-display); font-weight: 300;
                    font-size: clamp(1.75rem, 3.5vw, 3rem);
                    letter-spacing: -0.025em; color: var(--color-white); margin: 0 0 var(--space-md);
                }
                .jp-cta-body { font-size: 1rem; line-height: 1.7; color: rgba(255,255,255,0.55); max-width: 480px; margin: 0; }
                .jp-cta-btn {
                    display: inline-flex; align-items: center; gap: 10px; flex-shrink: 0;
                    padding: 14px 32px;
                    font-family: var(--font-mono); font-size: 0.75rem;
                    font-weight: 500; text-transform: uppercase; letter-spacing: 0.14em;
                    color: var(--color-white); border: 1px solid rgba(255,255,255,0.25);
                    background: transparent; text-decoration: none;
                    transition: background 0.3s, border-color 0.3s, color 0.3s;
                }
                .jp-cta-btn:hover { background: var(--color-accent); border-color: var(--color-accent); color: #ffffff; }

                /* ── Other openings ── */
                .jp-others { background: var(--color-white); padding: var(--space-5xl) 0; }
                .jp-others-head { margin-bottom: var(--space-3xl); }
                .jp-eyebrow-dark {
                    display: block; font-family: var(--font-mono); font-size: 0.6875rem;
                    font-weight: 500; text-transform: uppercase; letter-spacing: 0.16em;
                    color: var(--color-accent); margin-bottom: var(--space-md);
                }
                .jp-others-title {
                    font-family: var(--font-display); font-weight: 300;
                    font-size: clamp(1.5rem, 3vw, 2.5rem);
                    letter-spacing: -0.02em; color: var(--color-primary); margin: 0;
                }
                .jp-others-list { display: flex; flex-direction: column; }
                .jp-other-row {
                    display: flex; align-items: center; justify-content: space-between;
                    padding: var(--space-xl) 0;
                    border-bottom: 1px solid rgba(17,17,20,0.08);
                    text-decoration: none;
                    transition: padding-left 0.25s;
                }
                .jp-other-row:hover { padding-left: var(--space-md); }
                .jp-other-badges { display: flex; gap: 8px; margin-bottom: var(--space-sm); }
                .jp-other-dept {
                    font-family: var(--font-mono); font-size: 0.5625rem;
                    text-transform: uppercase; letter-spacing: 0.12em;
                    color: var(--color-accent); background: rgba(200,16,46,0.08);
                    border: 1px solid rgba(200,16,46,0.2); padding: 2px 8px;
                }
                .jp-other-type {
                    font-family: var(--font-mono); font-size: 0.5625rem;
                    text-transform: uppercase; letter-spacing: 0.1em;
                    color: rgba(17,17,20,0.4); border: 1px solid rgba(17,17,20,0.1); padding: 2px 8px;
                }
                .jp-other-title {
                    font-family: var(--font-display); font-weight: 400;
                    font-size: 1.125rem; color: var(--color-primary); margin: 0 0 6px;
                }
                .jp-other-site {
                    display: flex; align-items: center; gap: 6px;
                    font-family: var(--font-mono); font-size: 0.625rem;
                    text-transform: uppercase; letter-spacing: 0.08em;
                    color: rgba(17,17,20,0.4); margin: 0;
                }
                .jp-other-arrow { color: rgba(17,17,20,0.25); transition: color 0.2s, transform 0.2s; }
                .jp-other-row:hover .jp-other-arrow { color: var(--color-accent); transform: translateX(4px); }
                .jp-others-footer { margin-top: var(--space-3xl); }
                .jp-all-link {
                    display: inline-flex; align-items: center; gap: 8px;
                    font-family: var(--font-mono); font-size: 0.6875rem;
                    font-weight: 500; text-transform: uppercase; letter-spacing: 0.12em;
                    color: var(--color-primary); text-decoration: none;
                    border-bottom: 1px solid rgba(17,17,20,0.2); padding-bottom: 3px;
                    transition: color 0.2s, border-color 0.2s;
                }
                .jp-all-link:hover { color: var(--color-accent); border-color: var(--color-accent); }

                .jp-notfound {
                    min-height: 60vh; display: flex; flex-direction: column;
                    align-items: center; justify-content: center; gap: var(--space-lg);
                    padding-top: var(--header-height);
                }
                .jp-notfound a { color: var(--color-accent); }

                /* ── Mobile ── */
                @media (max-width: 900px) {
                    .jp-body-grid { grid-template-columns: 1fr; }
                    .jp-sidebar { position: static; }
                    .jp-section--alt { margin-left: 0; margin-right: 0; }
                    .jp-offers-grid { grid-template-columns: 1fr; }
                    .jp-cta-inner { flex-direction: column; align-items: flex-start; }
                }
                @media (max-width: 600px) {
                    .jp-hero { min-height: 380px; }
                    .jp-hero-title { font-size: clamp(1.5rem, 7vw, 2.25rem); }
                    .jp-hero-meta { flex-direction: column; gap: var(--space-sm); }
                }
            `}</style>
        </div>
    );
};

export default JobPosting;
