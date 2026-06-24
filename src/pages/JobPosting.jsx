import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { openings } from '../data/openings.jsx';
import imgBg from '../assets/iec-hv-taping-room.jpg';
import imgCtaBg from '../assets/iec-workshop-overview.jpg';

/* ── SEO meta + JSON-LD ── */
const useMeta = (job) => {
    useEffect(() => {
        if (!job) return;
        const desc = job.aboutRole.slice(0, 160).replace(/\n/g, ' ');
        document.title = `${job.title} | Careers at IEC`;

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

        setMeta('description', desc);
        setMeta('og:title', `${job.title} | IEC`, true);
        setMeta('og:description', desc, true);
        setMeta('og:type', 'website', true);

        const ldEl = document.createElement('script');
        ldEl.type = 'application/ld+json';
        ldEl.id = 'job-jsonld';
        ldEl.textContent = JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'JobPosting',
            title: job.title,
            description: job.aboutRole,
            datePosted: job.posted.toISOString().split('T')[0],
            employmentType: job.type === 'Full-time' ? 'FULL_TIME' : 'PART_TIME',
            hiringOrganization: { '@type': 'Organization', name: 'Indian Engineering Company', sameAs: 'https://iec-website-redesigned.vercel.app' },
            jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Vadodara', addressRegion: 'Gujarat', addressCountry: 'IN' } },
        });
        document.head.appendChild(ldEl);

        return () => {
            document.title = 'Indian Engineering Company | IEC';
            const existing = document.getElementById('job-jsonld');
            if (existing) existing.remove();
        };
    }, [job]);
};

const timeAgo = (date) => {
    const days = Math.floor((Date.now() - date) / 86400000);
    if (days < 1) return 'Posted today';
    if (days === 1) return 'Posted 1 day ago';
    if (days < 30) return `Posted ${days} days ago`;
    const months = Math.floor(days / 30);
    return months === 1 ? 'Posted 1 month ago' : `Posted ${months} months ago`;
};

const JobPosting = () => {
    const { slug } = useParams();
    const job = openings.find(o => o.slug === slug || String(o.id) === String(slug));
    const others = openings.filter(o => o.id !== job?.id).slice(0, 3);

    useMeta(job);
    useEffect(() => { window.scrollTo(0, 0); }, [slug]);

    if (!job) {
        return (
            <div className="jp-notfound">
                <h1>Position not found</h1>
                <Link to="/careers">View All Openings</Link>
            </div>
        );
    }

    const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

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
                        <Link to="/">Home</Link><span>/</span>
                        <Link to="/careers">Careers</Link><span>/</span>
                        <span className="jp-bc-current">{job.dept}</span>
                    </nav>
                    <div className="jp-hero-tags">
                        <span className="jp-tag jp-tag--dept">{job.dept}</span>
                        <span className="jp-tag jp-tag--type">{job.type}</span>
                        <span className="jp-tag jp-tag--age">{timeAgo(job.posted)}</span>
                    </div>
                    <h1 className="jp-hero-title">{job.title}</h1>
                    <div className="jp-hero-meta">
                        <span className="jp-meta-item">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            {job.site}
                        </span>
                        <span className="jp-meta-sep">·</span>
                        <span className="jp-meta-item">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                            {job.type}
                        </span>
                    </div>
                </div>
            </section>

            {/* ── Main body ── */}
            <div className="jp-layout">
                <div className="container jp-layout-inner">

                    {/* Main content column */}
                    <main className="jp-main">

                        {/* About the Role */}
                        <section className="jp-section">
                            <div className="jp-section-label">About the Role</div>
                            <div className="jp-narrative">
                                {job.aboutRole.split('\n\n').map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        </section>

                        <div className="jp-section-divider" />

                        {/* Meaningful Work */}
                        <section className="jp-section">
                            <div className="jp-section-label">Meaningful Work You'll Be Part Of</div>
                            <p className="jp-narrative-p">{job.meaningfulWork.intro}</p>
                            <p className="jp-list-intro">Responsibilities include, but are not limited to:</p>
                            <ul className="jp-list">
                                {job.meaningfulWork.responsibilities.map((item, i) => (
                                    <li key={i} className="jp-list-item">
                                        <span className="jp-list-marker" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <div className="jp-section-divider" />

                        {/* What You'll Bring */}
                        <section className="jp-section jp-section--dark">
                            <div className="jp-section-label jp-section-label--light">Experiences and Skills You'll Bring</div>
                            <p className="jp-narrative-p jp-narrative-p--light">{job.whatYouBring.intro}</p>
                            <ul className="jp-list jp-list--light">
                                {job.whatYouBring.skills.map((item, i) => (
                                    <li key={i} className="jp-list-item jp-list-item--light">
                                        <span className="jp-list-marker jp-list-marker--light" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <div className="jp-section-divider" />

                        {/* What We Offer */}
                        <section className="jp-section">
                            <div className="jp-section-label">Why You'll Love Working at IEC</div>
                            <p className="jp-narrative-p">{job.whatWeOffer.intro}</p>
                            <div className="jp-offer-list">
                                {job.whatWeOffer.benefits.map((item, i) => (
                                    <div key={i} className="jp-offer-item">
                                        <div className="jp-offer-num">0{i + 1}</div>
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <div className="jp-section-divider" />

                        {/* Compensation */}
                        <section className="jp-section jp-section--comp">
                            <div className="jp-comp-icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                            </div>
                            <div>
                                <div className="jp-section-label">Compensation</div>
                                <p className="jp-narrative-p">{job.compensation}</p>
                            </div>
                        </section>

                        <div className="jp-section-divider" />

                        {/* Closing */}
                        <section className="jp-section">
                            <p className="jp-closing">
                                IEC is committed to creating an environment where the best technical people can do their best work. We are an equal opportunity employer and welcome applications from all qualified individuals. If you require any accommodation during the application process, please let us know.
                            </p>
                        </section>
                    </main>

                    {/* Sidebar */}
                    <aside className="jp-sidebar">
                        {/* Apply card */}
                        <div className="jp-apply-card">
                            <div className="jp-apply-card-head">
                                <span className="jp-apply-eyebrow">Ready to apply?</span>
                                <h3 className="jp-apply-title">Send your application to IEC's team</h3>
                                <p className="jp-apply-body">
                                    Send your resume and a short note about your background and interest. We respond to every application personally, typically within five business days.
                                </p>
                            </div>
                            <Link to="/contact" className="jp-apply-btn">
                                Apply for This Role
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </Link>
                            <div className="jp-apply-divider" />
                            <div className="jp-apply-details">
                                {[
                                    { label: 'Department', value: job.dept },
                                    { label: 'Employment Type', value: job.type },
                                    { label: 'Location', value: job.site },
                                    { label: 'Posted', value: timeAgo(job.posted) },
                                ].map(d => (
                                    <div key={d.label} className="jp-apply-detail-row">
                                        <span className="jp-detail-label">{d.label}</span>
                                        <span className="jp-detail-value">{d.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Share */}
                        <div className="jp-share-card">
                            <span className="jp-share-heading">Share this role</span>
                            <div className="jp-share-btns">
                                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`} target="_blank" rel="noopener noreferrer" className="jp-share-btn" aria-label="Share on LinkedIn">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                    LinkedIn
                                </a>
                                <a href={`https://wa.me/?text=${encodeURIComponent(job.title + ' at IEC — ' + pageUrl)}`} target="_blank" rel="noopener noreferrer" className="jp-share-btn" aria-label="Share on WhatsApp">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                                    WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* About IEC mini-card */}
                        <div className="jp-about-card">
                            <span className="jp-about-label">About IEC</span>
                            <p className="jp-about-text">
                                Indian Engineering Company is a Vadodara-based heavy industrial repair and rewinding company with over 26 years of experience. We specialise in HT motors, generators, and large rotating machines for India's cement, power, and process industries.
                            </p>
                            <Link to="/about" className="jp-about-link">
                                Learn about IEC
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>

            {/* ── Other Openings ── */}
            {others.length > 0 && (
                <section className="jp-others">
                    <div className="container">
                        <div className="jp-others-head">
                            <span className="jp-others-eyebrow">More Opportunities</span>
                            <h2 className="jp-others-title">Other Roles at IEC</h2>
                        </div>
                        <div className="jp-others-list">
                            {others.map(o => (
                                <Link key={o.id} to={`/careers/${o.slug}`} className="jp-other-row">
                                    <div className="jp-other-left">
                                        <div className="jp-other-tags">
                                            <span className="jp-other-dept">{o.dept}</span>
                                            <span className="jp-other-type">{o.type}</span>
                                        </div>
                                        <h3 className="jp-other-title">{o.title}</h3>
                                        <span className="jp-other-site">
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                            {o.site}
                                        </span>
                                    </div>
                                    <div className="jp-other-right">
                                        <span className="jp-other-cta">View Role</span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="jp-others-footer">
                            <Link to="/careers" className="jp-all-link">
                                View All Open Positions
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            <style>{`
                .jp-page { min-height: 100vh; background: var(--color-white); }

                /* ── Hero ── */
                .jp-hero {
                    position: relative; min-height: 420px;
                    display: flex; align-items: flex-end;
                    padding: calc(var(--header-height) + var(--space-4xl)) 0 var(--space-5xl);
                    overflow: hidden;
                }
                .jp-hero-bg { position: absolute; inset: 0; }
                .jp-hero-img {
                    width: 100%; height: 100%; object-fit: cover; object-position: center 40%;
                    filter: grayscale(100%) brightness(0.25) contrast(1.2); transform: scale(1.04);
                }
                .jp-hero-overlay {
                    position: absolute; inset: 0;
                    background: linear-gradient(to top, rgba(9,9,12,0.99) 0%, rgba(9,9,12,0.55) 55%, rgba(9,9,12,0.25) 100%);
                }
                .jp-hero-inner { position: relative; z-index: 2; display: flex; flex-direction: column; gap: var(--space-lg); }

                .jp-breadcrumb {
                    display: flex; align-items: center; gap: 8px;
                    font-family: var(--font-mono); font-size: 0.6875rem;
                    text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;
                }
                .jp-breadcrumb a { color: rgba(255,255,255,0.38); text-decoration: none; transition: color 0.2s; }
                .jp-breadcrumb a:hover { color: var(--color-white); }
                .jp-breadcrumb span { color: rgba(255,255,255,0.2); }
                .jp-bc-current { color: rgba(255,255,255,0.62); }

                .jp-hero-tags { display: flex; gap: 10px; flex-wrap: wrap; }
                .jp-tag {
                    font-family: var(--font-mono); font-size: 0.5625rem;
                    font-weight: 500; text-transform: uppercase; letter-spacing: 0.12em; padding: 4px 10px;
                }
                .jp-tag--dept { color: var(--color-accent); background: rgba(200,16,46,0.1); border: 1px solid rgba(200,16,46,0.25); }
                .jp-tag--type { color: rgba(255,255,255,0.62); background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); }
                .jp-tag--age { color: rgba(255,255,255,0.32); background: transparent; border: 1px solid rgba(255,255,255,0.07); }

                .jp-hero-title {
                    font-family: var(--font-display); font-weight: 300;
                    font-size: clamp(2rem, 5vw, 4rem);
                    letter-spacing: -0.028em; line-height: 1.1;
                    color: var(--color-white); margin: 0; max-width: 780px;
                }
                .jp-hero-meta { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
                .jp-meta-item {
                    display: flex; align-items: center; gap: 7px;
                    font-family: var(--font-mono); font-size: 0.6875rem;
                    text-transform: uppercase; letter-spacing: 0.08em;
                    color: rgba(255,255,255,0.45);
                }
                .jp-meta-sep { color: rgba(255,255,255,0.2); }

                /* ── Layout ── */
                .jp-layout { background: var(--color-white); padding: var(--space-5xl) 0; }
                .jp-layout-inner {
                    display: grid; grid-template-columns: 1fr 340px;
                    gap: 80px; align-items: start;
                }

                /* ── Main content ── */
                .jp-main { max-width: 680px; }
                .jp-section { padding: var(--space-3xl) 0; }
                .jp-section--dark {
                    background: var(--color-primary);
                    padding: var(--space-3xl);
                    margin: 0 calc(-1 * var(--space-xl));
                }
                .jp-section--comp {
                    display: flex; gap: var(--space-xl); align-items: flex-start;
                    background: rgba(200,16,46,0.03);
                    padding: var(--space-2xl) var(--space-xl);
                    border-left: 3px solid var(--color-accent);
                }
                .jp-comp-icon { color: var(--color-accent); flex-shrink: 0; margin-top: 2px; }
                .jp-section-divider { height: 1px; background: rgba(17,17,20,0.07); }
                .jp-section-label {
                    font-family: var(--font-mono); font-size: 0.625rem;
                    font-weight: 600; text-transform: uppercase; letter-spacing: 0.2em;
                    color: var(--color-accent); margin-bottom: var(--space-xl);
                }
                .jp-section-label--light { color: rgba(200,16,46,0.75); }

                .jp-narrative p, .jp-narrative-p {
                    font-size: 1.0625rem; line-height: 1.85;
                    color: rgba(17,17,20,0.75); margin-bottom: var(--space-lg);
                }
                .jp-narrative-p--light { color: rgba(255,255,255,0.65); }
                .jp-narrative p:last-child, .jp-narrative-p:last-child { margin-bottom: 0; }

                .jp-list-intro {
                    font-size: 0.9375rem; line-height: 1.65;
                    color: rgba(17,17,20,0.5); font-style: italic;
                    margin-bottom: var(--space-xl);
                }
                .jp-list { list-style: none; display: flex; flex-direction: column; gap: 0; }
                .jp-list-item {
                    display: flex; gap: 16px; align-items: flex-start;
                    font-size: 0.9375rem; line-height: 1.75; color: rgba(17,17,20,0.75);
                    padding: var(--space-md) 0;
                    border-bottom: 1px solid rgba(17,17,20,0.06);
                }
                .jp-list-item--light { color: rgba(255,255,255,0.65); border-bottom-color: rgba(255,255,255,0.06); }
                .jp-list-item:first-child { border-top: 1px solid rgba(17,17,20,0.06); }
                .jp-list-item--light:first-child { border-top-color: rgba(255,255,255,0.06); }
                .jp-list-marker {
                    width: 6px; height: 6px; border-radius: 50%;
                    background: var(--color-accent); flex-shrink: 0; margin-top: 9px;
                }
                .jp-list-marker--light { background: rgba(200,16,46,0.65); }

                /* Offers */
                .jp-offer-list { display: flex; flex-direction: column; gap: 0; margin-top: var(--space-xl); }
                .jp-offer-item {
                    display: flex; gap: var(--space-xl); align-items: flex-start;
                    padding: var(--space-lg) 0; border-bottom: 1px solid rgba(17,17,20,0.06);
                }
                .jp-offer-item:last-child { border-bottom: none; }
                .jp-offer-num {
                    font-family: var(--font-mono); font-size: 0.625rem;
                    font-weight: 700; letter-spacing: 0.1em; color: var(--color-accent);
                    flex-shrink: 0; margin-top: 3px; width: 24px;
                }
                .jp-offer-item p { font-size: 0.9375rem; line-height: 1.7; color: rgba(17,17,20,0.75); margin: 0; }

                .jp-closing {
                    font-size: 0.9375rem; line-height: 1.75; color: rgba(17,17,20,0.5);
                    font-style: italic; margin: 0;
                }

                /* ── Sidebar ── */
                .jp-sidebar { position: sticky; top: calc(var(--header-height) + 40px); display: flex; flex-direction: column; gap: var(--space-xl); }

                /* Apply card */
                .jp-apply-card { background: var(--color-primary); padding: var(--space-2xl); }
                .jp-apply-card-head { margin-bottom: var(--space-xl); }
                .jp-apply-eyebrow {
                    display: block; font-family: var(--font-mono); font-size: 0.5625rem;
                    text-transform: uppercase; letter-spacing: 0.18em;
                    color: var(--color-accent); margin-bottom: var(--space-md);
                }
                .jp-apply-title {
                    font-family: var(--font-display); font-weight: 300;
                    font-size: 1.375rem; letter-spacing: -0.02em; line-height: 1.3;
                    color: var(--color-white); margin: 0 0 var(--space-md);
                }
                .jp-apply-body { font-size: 0.875rem; line-height: 1.7; color: rgba(255,255,255,0.5); margin: 0; }
                .jp-apply-btn {
                    display: flex; align-items: center; justify-content: center; gap: 8px;
                    width: 100%; padding: 14px 20px; margin-top: var(--space-xl);
                    font-family: var(--font-mono); font-size: 0.6875rem;
                    font-weight: 500; text-transform: uppercase; letter-spacing: 0.12em;
                    color: #ffffff; background: var(--color-accent);
                    border: 1px solid var(--color-accent); text-decoration: none;
                    transition: background 0.25s, color 0.25s;
                }
                .jp-apply-btn:hover { background: transparent; color: var(--color-white); }
                .jp-apply-divider { height: 1px; background: rgba(255,255,255,0.08); margin: var(--space-xl) 0; }
                .jp-apply-details { display: flex; flex-direction: column; gap: 12px; }
                .jp-apply-detail-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
                .jp-detail-label {
                    font-family: var(--font-mono); font-size: 0.5625rem;
                    text-transform: uppercase; letter-spacing: 0.1em;
                    color: rgba(255,255,255,0.3); flex-shrink: 0;
                }
                .jp-detail-value { font-size: 0.8125rem; color: rgba(255,255,255,0.65); text-align: right; }

                /* Share card */
                .jp-share-card {
                    padding: var(--space-xl);
                    border: 1px solid rgba(17,17,20,0.08);
                }
                .jp-share-heading {
                    display: block; font-family: var(--font-mono); font-size: 0.5625rem;
                    text-transform: uppercase; letter-spacing: 0.16em;
                    color: rgba(17,17,20,0.38); margin-bottom: 14px;
                }
                .jp-share-btns { display: flex; gap: 10px; }
                .jp-share-btn {
                    display: flex; align-items: center; gap: 8px; flex: 1;
                    padding: 9px 12px; justify-content: center;
                    font-family: var(--font-mono); font-size: 0.5625rem;
                    font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em;
                    color: rgba(17,17,20,0.55); border: 1px solid rgba(17,17,20,0.1);
                    background: transparent; text-decoration: none;
                    transition: background 0.2s, color 0.2s, border-color 0.2s;
                }
                .jp-share-btn:hover { background: var(--color-accent); border-color: var(--color-accent); color: #fff; }

                /* About card */
                .jp-about-card {
                    padding: var(--space-xl);
                    border: 1px solid rgba(17,17,20,0.08); background: rgba(17,17,20,0.02);
                }
                .jp-about-label {
                    display: block; font-family: var(--font-mono); font-size: 0.5625rem;
                    text-transform: uppercase; letter-spacing: 0.16em;
                    color: rgba(17,17,20,0.38); margin-bottom: 12px;
                }
                .jp-about-text { font-size: 0.875rem; line-height: 1.7; color: rgba(17,17,20,0.6); margin: 0 0 14px; }
                .jp-about-link {
                    display: inline-flex; align-items: center; gap: 6px;
                    font-family: var(--font-mono); font-size: 0.5625rem;
                    text-transform: uppercase; letter-spacing: 0.1em;
                    color: var(--color-accent); text-decoration: none;
                    transition: opacity 0.2s;
                }
                .jp-about-link:hover { opacity: 0.75; }

                /* ── Other roles ── */
                .jp-others { background: var(--color-primary); padding: var(--space-5xl) 0; }
                .jp-others-head { margin-bottom: var(--space-3xl); }
                .jp-others-eyebrow {
                    display: block; font-family: var(--font-mono); font-size: 0.6875rem;
                    font-weight: 500; text-transform: uppercase; letter-spacing: 0.16em;
                    color: var(--color-accent); margin-bottom: var(--space-md);
                }
                .jp-others-title {
                    font-family: var(--font-display); font-weight: 300;
                    font-size: clamp(1.5rem, 3vw, 2.5rem);
                    letter-spacing: -0.02em; color: var(--color-white); margin: 0;
                }
                .jp-others-list { display: flex; flex-direction: column; }
                .jp-other-row {
                    display: flex; align-items: center; justify-content: space-between;
                    padding: var(--space-xl) 0; border-bottom: 1px solid rgba(255,255,255,0.06);
                    text-decoration: none; transition: padding-left 0.25s;
                }
                .jp-other-row:hover { padding-left: var(--space-md); }
                .jp-other-tags { display: flex; gap: 8px; margin-bottom: var(--space-sm); }
                .jp-other-dept {
                    font-family: var(--font-mono); font-size: 0.5rem;
                    text-transform: uppercase; letter-spacing: 0.12em;
                    color: var(--color-accent); background: rgba(200,16,46,0.08);
                    border: 1px solid rgba(200,16,46,0.18); padding: 2px 8px;
                }
                .jp-other-type {
                    font-family: var(--font-mono); font-size: 0.5rem;
                    text-transform: uppercase; letter-spacing: 0.1em;
                    color: rgba(255,255,255,0.35); border: 1px solid rgba(255,255,255,0.08); padding: 2px 8px;
                }
                .jp-other-title {
                    font-family: var(--font-display); font-weight: 300;
                    font-size: 1.125rem; color: var(--color-white);
                    margin: 0 0 6px; letter-spacing: -0.01em;
                }
                .jp-other-site {
                    display: flex; align-items: center; gap: 5px;
                    font-family: var(--font-mono); font-size: 0.5625rem;
                    text-transform: uppercase; letter-spacing: 0.08em;
                    color: rgba(255,255,255,0.32);
                }
                .jp-other-right {
                    display: flex; align-items: center; gap: 8px; flex-shrink: 0;
                    font-family: var(--font-mono); font-size: 0.5625rem;
                    text-transform: uppercase; letter-spacing: 0.1em;
                    color: rgba(255,255,255,0.3);
                    transition: color 0.2s; margin-left: var(--space-xl);
                }
                .jp-other-row:hover .jp-other-right { color: var(--color-accent); }
                .jp-other-cta { white-space: nowrap; }
                .jp-others-footer { margin-top: var(--space-3xl); }
                .jp-all-link {
                    display: inline-flex; align-items: center; gap: 8px;
                    font-family: var(--font-mono); font-size: 0.6875rem;
                    font-weight: 500; text-transform: uppercase; letter-spacing: 0.12em;
                    color: rgba(255,255,255,0.55); text-decoration: none;
                    border-bottom: 1px solid rgba(255,255,255,0.18); padding-bottom: 3px;
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
                @media (max-width: 1000px) {
                    .jp-layout-inner { grid-template-columns: 1fr; gap: var(--space-4xl); }
                    .jp-sidebar { position: static; }
                    .jp-section--dark { margin: 0; }
                    .jp-main { max-width: 100%; }
                }
                @media (max-width: 600px) {
                    .jp-hero { min-height: 360px; }
                    .jp-hero-title { font-size: clamp(1.75rem, 7vw, 2.5rem); }
                    .jp-section--comp { flex-direction: column; gap: var(--space-md); }
                }
            `}</style>
        </div>
    );
};

export default JobPosting;
