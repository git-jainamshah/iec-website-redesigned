import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { articles } from '../data/articles.jsx';
import imgHeroBg from '../assets/iec-stator-windings.jpg';

/* ── SEO meta updater ── */
const useMeta = (title, description, url, imageUrl) => {
    useEffect(() => {
        document.title = `${title} | IEC Engineering Notes`;
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
        setMeta('og:title', title, true);
        setMeta('og:description', description, true);
        setMeta('og:url', url, true);
        setMeta('og:type', 'article', true);
        if (imageUrl) setMeta('og:image', imageUrl, true);
        setMeta('twitter:card', 'summary_large_image');
        setMeta('twitter:title', title);
        setMeta('twitter:description', description);
        return () => { document.title = 'Indian Engineering Company | IEC'; };
    }, [title, description, url, imageUrl]);
};

/* ── JSON-LD injector ── */
const useJsonLd = (article) => {
    useEffect(() => {
        if (!article) return;
        const el = document.createElement('script');
        el.type = 'application/ld+json';
        el.id = 'blog-jsonld';
        el.textContent = JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: article.title,
            description: article.excerpt,
            datePublished: article.dateISO,
            author: { '@type': 'Organization', name: 'Indian Engineering Company' },
            publisher: { '@type': 'Organization', name: 'IEC', logo: { '@type': 'ImageObject', url: 'https://iec-website-redesigned.vercel.app/favicon.png' } },
            mainEntityOfPage: { '@type': 'WebPage', '@id': `https://iec-website-redesigned.vercel.app/blogs/${article.slug}` },
        });
        document.head.appendChild(el);
        return () => { const existing = document.getElementById('blog-jsonld'); if (existing) existing.remove(); };
    }, [article]);
};

/* ── Share button ── */
const ShareButton = ({ icon, label, href, onClick }) => (
    href
        ? <a href={href} target="_blank" rel="noopener noreferrer" className="bp-share-btn" aria-label={label}>{icon}<span>{label}</span></a>
        : <button className="bp-share-btn" onClick={onClick} aria-label={label}>{icon}<span>{label}</span></button>
);

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [copied, setCopied] = useState(false);

    const article = articles.find(a => String(a.id) === String(id) || a.slug === id);
    const related = articles.filter(a => a.id !== article?.id).slice(0, 2);

    const pageUrl = typeof window !== 'undefined' ? window.location.href : `https://iec-website-redesigned.vercel.app/blogs/${id}`;

    useMeta(
        article?.title || 'Article Not Found',
        article?.excerpt || '',
        pageUrl,
        article?.heroImg || ''
    );
    useJsonLd(article);

    useEffect(() => { window.scrollTo(0, 0); }, [id]);

    if (!article) {
        return (
            <div className="bp-notfound">
                <h1>Article not found</h1>
                <Link to="/blogs">Back to Engineering Notes</Link>
            </div>
        );
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(pageUrl).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(pageUrl)}`;
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(article.title + ' ' + pageUrl)}`;

    const renderSection = (section, idx) => {
        switch (section.type) {
            case 'lead':
                return <p key={idx} className="bp-lead">{section.text}</p>;
            case 'h2':
                return <h2 key={idx} className="bp-h2">{section.text}</h2>;
            case 'h3':
                return <h3 key={idx} className="bp-h3">{section.text}</h3>;
            case 'p':
                return <p key={idx} className="bp-p">{section.text}</p>;
            case 'pullquote':
                return (
                    <blockquote key={idx} className="bp-pullquote">
                        <span className="bp-pullquote-bar" />
                        <p>{section.text}</p>
                    </blockquote>
                );
            case 'ul':
                return (
                    <div key={idx} className="bp-list-wrap">
                        {section.heading && <p className="bp-list-heading">{section.heading}</p>}
                        <ul className="bp-ul">
                            {section.items.map((item, i) => (
                                <li key={i} className="bp-li">
                                    <span className="bp-li-dot" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bp-page">

            {/* ── Hero ── */}
            <section className="bp-hero">
                <div className="bp-hero-bg">
                    <img src={article.heroImg || imgHeroBg} alt="" className="bp-hero-img" />
                    <div className="bp-hero-overlay" />
                </div>
                <div className="container bp-hero-inner">
                    <nav className="bp-breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/blogs">Engineering Notes</Link>
                        <span>/</span>
                        <span className="bp-breadcrumb-current">{article.category}</span>
                    </nav>
                    <div className="bp-hero-meta">
                        <span className="bp-hero-cat">{article.category}</span>
                        <span className="bp-hero-sep" />
                        <span className="bp-hero-date">{article.date}</span>
                        <span className="bp-hero-sep" />
                        <span className="bp-hero-read">{article.readTime} read</span>
                    </div>
                    <h1 className="bp-hero-title">{article.title}</h1>
                    <p className="bp-hero-excerpt">{article.excerpt}</p>
                    <div className="bp-hero-author">
                        <div className="bp-author-avatar">IEC</div>
                        <div>
                            <span className="bp-author-name">Indian Engineering Company</span>
                            <span className="bp-author-role">Engineering Team</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Article Body ── */}
            <section className="bp-body-section">
                <div className="bp-body-grid">

                    {/* Share sidebar */}
                    <aside className="bp-share-sidebar">
                        <span className="bp-share-label">Share</span>
                        <div className="bp-share-stack">
                            <ShareButton
                                label="X / Twitter"
                                href={twitterUrl}
                                icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>}
                            />
                            <ShareButton
                                label="LinkedIn"
                                href={linkedinUrl}
                                icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>}
                            />
                            <ShareButton
                                label="WhatsApp"
                                href={whatsappUrl}
                                icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>}
                            />
                            <ShareButton
                                label={copied ? 'Copied!' : 'Copy Link'}
                                onClick={handleCopy}
                                icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>}
                            />
                        </div>
                    </aside>

                    {/* Article content */}
                    <article className="bp-article">
                        {article.sections.map((section, idx) => renderSection(section, idx))}

                        {/* Article footer */}
                        <div className="bp-article-footer">
                            <div className="bp-article-footer-rule" />
                            <div className="bp-article-footer-inner">
                                <div>
                                    <p className="bp-footer-org">Indian Engineering Company</p>
                                    <p className="bp-footer-tag">Heavy Industrial Repair · Vadodara, Gujarat</p>
                                </div>
                                <Link to="/contact" className="bp-cta-btn">
                                    Talk to Our Engineers
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            {/* ── Mobile Share Row ── */}
            <section className="bp-share-mobile">
                <div className="container">
                    <span className="bp-share-label-mob">Share this article</span>
                    <div className="bp-share-row">
                        <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="bp-share-pill">X / Twitter</a>
                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="bp-share-pill">LinkedIn</a>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bp-share-pill">WhatsApp</a>
                        <button className="bp-share-pill" onClick={handleCopy}>{copied ? 'Copied!' : 'Copy Link'}</button>
                    </div>
                </div>
            </section>

            {/* ── Related Articles ── */}
            {related.length > 0 && (
                <section className="bp-related">
                    <div className="container">
                        <div className="bp-related-head">
                            <span className="bp-eyebrow">Continue Reading</span>
                            <h2 className="bp-related-title">More from Engineering Notes</h2>
                        </div>
                        <div className="bp-related-grid">
                            {related.map(rel => (
                                <Link key={rel.id} to={`/blogs/${rel.id}`} className="bp-related-card">
                                    <div className="bp-related-photo">
                                        <img src={rel.img} alt={rel.title} />
                                        <div className="bp-related-photo-fog" />
                                        <span className="bp-related-cat">{rel.category}</span>
                                    </div>
                                    <div className="bp-related-body">
                                        <div className="bp-related-meta">
                                            <span>{rel.date}</span>
                                            <span className="bp-related-dot" />
                                            <span>{rel.readTime} read</span>
                                        </div>
                                        <h3 className="bp-related-card-title">{rel.title}</h3>
                                        <p className="bp-related-excerpt">{rel.excerpt}</p>
                                        <span className="bp-read-more">
                                            Read Article
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="bp-related-footer">
                            <Link to="/blogs" className="bp-all-link">
                                View All Articles
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            <style>{`
                .bp-page { min-height: 100vh; background: var(--color-white); }

                /* ── Hero ── */
                .bp-hero {
                    position: relative;
                    min-height: 500px;
                    display: flex;
                    align-items: flex-end;
                    padding: calc(var(--header-height) + var(--space-3xl)) 0 var(--space-4xl);
                    overflow: hidden;
                }
                .bp-hero-bg { position: absolute; inset: 0; }
                .bp-hero-img {
                    width: 100%; height: 100%;
                    object-fit: cover; object-position: center 35%;
                    filter: grayscale(100%) brightness(0.32) contrast(1.2);
                    transform: scale(1.04);
                }
                .bp-hero-overlay {
                    position: absolute; inset: 0;
                    background:
                        linear-gradient(to top, rgba(9,9,12,0.96) 0%, rgba(9,9,12,0.55) 50%, rgba(9,9,12,0.3) 100%),
                        linear-gradient(105deg, rgba(9,9,12,0.7) 0%, transparent 60%);
                }
                .bp-hero-inner {
                    position: relative; z-index: 2;
                    display: flex; flex-direction: column;
                    gap: var(--space-md);
                }

                /* Breadcrumb */
                .bp-breadcrumb {
                    display: flex; align-items: center; gap: 8px;
                    font-family: var(--font-mono); font-size: 0.6875rem;
                    text-transform: uppercase; letter-spacing: 0.08em;
                    margin-bottom: var(--space-sm);
                }
                .bp-breadcrumb a { color: rgba(255,255,255,0.45); transition: color 0.2s; }
                .bp-breadcrumb a:hover { color: var(--color-white); }
                .bp-breadcrumb span { color: rgba(255,255,255,0.25); }
                .bp-breadcrumb-current { color: rgba(255,255,255,0.7); }

                /* Hero meta */
                .bp-hero-meta {
                    display: flex; align-items: center; gap: 12px;
                    font-family: var(--font-mono); font-size: 0.6875rem;
                    text-transform: uppercase; letter-spacing: 0.12em;
                }
                .bp-hero-cat {
                    background: rgba(200,16,46,0.15);
                    color: var(--color-accent);
                    border: 1px solid rgba(200,16,46,0.3);
                    padding: 3px 10px;
                }
                .bp-hero-date, .bp-hero-read { color: rgba(255,255,255,0.5); }
                .bp-hero-sep {
                    width: 3px; height: 3px; border-radius: 50%;
                    background: rgba(255,255,255,0.25);
                }

                /* Hero title */
                .bp-hero-title {
                    font-family: var(--font-display);
                    font-size: clamp(2rem, 5vw, 4rem);
                    font-weight: 300; line-height: 1.1;
                    letter-spacing: -0.025em;
                    color: var(--color-white);
                    max-width: 820px;
                    margin: 0;
                }
                .bp-hero-excerpt {
                    font-size: 1.0625rem; line-height: 1.7;
                    color: rgba(255,255,255,0.6);
                    max-width: 600px; margin: 0;
                }

                /* Author */
                .bp-hero-author { display: flex; align-items: center; gap: 14px; margin-top: var(--space-md); }
                .bp-author-avatar {
                    width: 40px; height: 40px; border-radius: 50%;
                    background: var(--color-accent);
                    display: flex; align-items: center; justify-content: center;
                    font-family: var(--font-mono); font-size: 0.625rem;
                    font-weight: 600; color: #fff; letter-spacing: 0.05em;
                    flex-shrink: 0;
                }
                .bp-author-name {
                    display: block; font-size: 0.875rem; font-weight: 500;
                    color: var(--color-white);
                }
                .bp-author-role {
                    display: block; font-family: var(--font-mono); font-size: 0.6875rem;
                    color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.08em;
                    margin-top: 2px;
                }

                /* ── Body layout ── */
                .bp-body-section { background: var(--color-white); padding: var(--space-5xl) 0; }
                .bp-body-grid {
                    max-width: 1160px; margin: 0 auto;
                    padding: 0 var(--space-xl);
                    display: grid;
                    grid-template-columns: 72px 1fr;
                    gap: var(--space-4xl);
                    align-items: start;
                }

                /* Share sidebar */
                .bp-share-sidebar {
                    position: sticky; top: calc(var(--header-height) + 32px);
                    display: flex; flex-direction: column; align-items: center;
                    gap: var(--space-md);
                }
                .bp-share-label {
                    font-family: var(--font-mono); font-size: 0.625rem;
                    text-transform: uppercase; letter-spacing: 0.14em;
                    color: rgba(17,17,20,0.4);
                    writing-mode: vertical-lr;
                }
                .bp-share-stack { display: flex; flex-direction: column; gap: 8px; }
                .bp-share-btn {
                    width: 38px; height: 38px;
                    display: flex; align-items: center; justify-content: center;
                    border: 1px solid rgba(17,17,20,0.12);
                    background: transparent; color: rgba(17,17,20,0.55);
                    transition: background 0.2s, color 0.2s, border-color 0.2s;
                    text-decoration: none; cursor: pointer;
                }
                .bp-share-btn:hover {
                    background: var(--color-accent); border-color: var(--color-accent);
                    color: #fff;
                }
                .bp-share-btn span { display: none; }

                /* Article column */
                .bp-article { max-width: 720px; }

                .bp-lead {
                    font-size: 1.1875rem; line-height: 1.75;
                    color: var(--color-text); font-weight: 400;
                    margin-bottom: var(--space-3xl);
                    padding-bottom: var(--space-3xl);
                    border-bottom: 1px solid rgba(17,17,20,0.08);
                }
                .bp-h2 {
                    font-family: var(--font-display); font-weight: 400;
                    font-size: clamp(1.375rem, 2.5vw, 1.875rem);
                    letter-spacing: -0.02em; line-height: 1.25;
                    color: var(--color-primary);
                    margin: var(--space-3xl) 0 var(--space-lg);
                    padding-top: var(--space-xl);
                    border-top: 2px solid var(--color-accent);
                    display: inline-block;
                }
                .bp-h3 {
                    font-family: var(--font-display); font-weight: 400;
                    font-size: 1.25rem; color: var(--color-primary);
                    margin: var(--space-2xl) 0 var(--space-md);
                }
                .bp-p {
                    font-size: 1rem; line-height: 1.8;
                    color: rgba(17,17,20,0.78);
                    margin-bottom: var(--space-lg);
                }
                .bp-pullquote {
                    display: flex; gap: var(--space-lg);
                    margin: var(--space-3xl) 0;
                    padding: var(--space-2xl) var(--space-2xl);
                    background: var(--color-primary);
                }
                .bp-pullquote-bar {
                    width: 3px; flex-shrink: 0;
                    background: var(--color-accent);
                    align-self: stretch;
                }
                .bp-pullquote p {
                    font-family: var(--font-display); font-weight: 300;
                    font-size: clamp(1.125rem, 2vw, 1.375rem);
                    line-height: 1.55; letter-spacing: -0.01em;
                    color: var(--color-white); margin: 0;
                    font-style: italic;
                }
                .bp-list-wrap { margin: var(--space-xl) 0 var(--space-2xl); }
                .bp-list-heading {
                    font-family: var(--font-mono); font-size: 0.6875rem;
                    text-transform: uppercase; letter-spacing: 0.12em;
                    color: var(--color-accent); margin-bottom: var(--space-md);
                }
                .bp-ul { list-style: none; display: flex; flex-direction: column; gap: 12px; }
                .bp-li {
                    display: flex; gap: 14px; align-items: flex-start;
                    font-size: 0.9375rem; line-height: 1.7;
                    color: rgba(17,17,20,0.78);
                }
                .bp-li-dot {
                    width: 6px; height: 6px; border-radius: 50%;
                    background: var(--color-accent); flex-shrink: 0;
                    margin-top: 8px;
                }

                /* Article footer */
                .bp-article-footer { margin-top: var(--space-5xl); }
                .bp-article-footer-rule { height: 1px; background: rgba(17,17,20,0.08); margin-bottom: var(--space-2xl); }
                .bp-article-footer-inner {
                    display: flex; align-items: center;
                    justify-content: space-between; gap: var(--space-xl);
                    flex-wrap: wrap;
                }
                .bp-footer-org {
                    font-weight: 600; font-size: 0.9375rem; color: var(--color-primary); margin: 0;
                }
                .bp-footer-tag {
                    font-family: var(--font-mono); font-size: 0.6875rem;
                    color: rgba(17,17,20,0.4); text-transform: uppercase;
                    letter-spacing: 0.08em; margin: 4px 0 0;
                }
                .bp-cta-btn {
                    display: inline-flex; align-items: center; gap: 8px;
                    padding: 12px 26px;
                    font-family: var(--font-mono); font-size: 0.6875rem;
                    font-weight: 500; text-transform: uppercase; letter-spacing: 0.12em;
                    color: var(--color-white);
                    background: var(--color-primary);
                    border: 1px solid var(--color-primary);
                    text-decoration: none;
                    transition: background 0.25s, color 0.25s;
                }
                .bp-cta-btn:hover { background: var(--color-accent); border-color: var(--color-accent); color: #ffffff; }

                /* ── Mobile share row ── */
                .bp-share-mobile {
                    display: none;
                    background: rgba(17,17,20,0.03);
                    border-top: 1px solid rgba(17,17,20,0.06);
                    border-bottom: 1px solid rgba(17,17,20,0.06);
                    padding: var(--space-lg) 0;
                }
                .bp-share-label-mob {
                    display: block; font-family: var(--font-mono);
                    font-size: 0.625rem; text-transform: uppercase;
                    letter-spacing: 0.12em; color: rgba(17,17,20,0.4);
                    margin-bottom: var(--space-md);
                }
                .bp-share-row { display: flex; gap: 10px; flex-wrap: wrap; }
                .bp-share-pill {
                    padding: 8px 16px;
                    font-family: var(--font-mono); font-size: 0.625rem;
                    font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em;
                    color: var(--color-primary); border: 1px solid rgba(17,17,20,0.18);
                    background: transparent; text-decoration: none; cursor: pointer;
                    transition: background 0.2s, color 0.2s, border-color 0.2s;
                }
                .bp-share-pill:hover { background: var(--color-accent); border-color: var(--color-accent); color: #ffffff; }

                /* ── Related articles ── */
                .bp-related {
                    background: var(--color-primary);
                    padding: var(--space-5xl) 0 var(--space-4xl);
                }
                .bp-related-head { margin-bottom: var(--space-3xl); }
                .bp-eyebrow {
                    display: block;
                    font-family: var(--font-mono); font-size: 0.6875rem;
                    font-weight: 500; text-transform: uppercase; letter-spacing: 0.16em;
                    color: var(--color-accent); margin-bottom: var(--space-md);
                }
                .bp-related-title {
                    font-family: var(--font-display); font-weight: 300;
                    font-size: clamp(1.5rem, 3vw, 2.5rem);
                    letter-spacing: -0.02em; color: var(--color-white); margin: 0;
                }
                .bp-related-grid {
                    display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-xl);
                }
                .bp-related-card {
                    text-decoration: none; display: block;
                    border: 1px solid rgba(255,255,255,0.06);
                    transition: border-color 0.25s;
                }
                .bp-related-card:hover { border-color: rgba(255,255,255,0.15); }
                .bp-related-photo {
                    position: relative; height: 200px; overflow: hidden;
                }
                .bp-related-photo img {
                    width: 100%; height: 100%; object-fit: cover;
                    filter: grayscale(60%) brightness(0.6) contrast(1.1);
                    transition: filter 0.4s, transform 0.5s;
                }
                .bp-related-card:hover .bp-related-photo img {
                    filter: grayscale(20%) brightness(0.7);
                    transform: scale(1.03);
                }
                .bp-related-photo-fog {
                    position: absolute; inset: 0;
                    background: linear-gradient(to top, rgba(17,17,20,0.7) 0%, transparent 60%);
                }
                .bp-related-cat {
                    position: absolute; bottom: 12px; left: 14px;
                    font-family: var(--font-mono); font-size: 0.5625rem;
                    text-transform: uppercase; letter-spacing: 0.14em;
                    color: var(--color-accent); background: rgba(200,16,46,0.12);
                    border: 1px solid rgba(200,16,46,0.25); padding: 3px 8px;
                }
                .bp-related-body { padding: var(--space-xl); }
                .bp-related-meta {
                    display: flex; align-items: center; gap: 8px;
                    font-family: var(--font-mono); font-size: 0.625rem;
                    text-transform: uppercase; letter-spacing: 0.08em;
                    color: rgba(255,255,255,0.35); margin-bottom: var(--space-md);
                }
                .bp-related-dot {
                    width: 3px; height: 3px; border-radius: 50%;
                    background: rgba(255,255,255,0.2);
                }
                .bp-related-card-title {
                    font-family: var(--font-display); font-weight: 300;
                    font-size: 1.125rem; line-height: 1.35;
                    letter-spacing: -0.01em; color: var(--color-white);
                    margin: 0 0 var(--space-md);
                }
                .bp-related-excerpt {
                    font-size: 0.875rem; line-height: 1.65;
                    color: rgba(255,255,255,0.5); margin: 0 0 var(--space-lg);
                }
                .bp-read-more {
                    display: inline-flex; align-items: center; gap: 6px;
                    font-family: var(--font-mono); font-size: 0.625rem;
                    font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em;
                    color: var(--color-accent);
                }
                .bp-related-footer {
                    margin-top: var(--space-3xl); text-align: center;
                }
                .bp-all-link {
                    display: inline-flex; align-items: center; gap: 8px;
                    font-family: var(--font-mono); font-size: 0.6875rem;
                    font-weight: 500; text-transform: uppercase; letter-spacing: 0.12em;
                    color: var(--color-white); text-decoration: none;
                    border-bottom: 1px solid rgba(255,255,255,0.2);
                    padding-bottom: 3px;
                    transition: color 0.2s, border-color 0.2s;
                }
                .bp-all-link:hover { color: var(--color-accent); border-color: var(--color-accent); }

                .bp-notfound {
                    min-height: 60vh; display: flex; flex-direction: column;
                    align-items: center; justify-content: center; gap: var(--space-lg);
                    padding-top: var(--header-height);
                }

                /* ── Mobile ── */
                @media (max-width: 900px) {
                    .bp-body-grid { grid-template-columns: 1fr; padding: 0 var(--space-lg); }
                    .bp-share-sidebar { display: none; }
                    .bp-share-mobile { display: block; }
                    .bp-related-grid { grid-template-columns: 1fr; }
                }
                @media (max-width: 600px) {
                    .bp-hero { min-height: 380px; }
                    .bp-hero-title { font-size: clamp(1.625rem, 7vw, 2.5rem); }
                    .bp-article-footer-inner { flex-direction: column; align-items: flex-start; }
                }
            `}</style>
        </div>
    );
};

export default BlogPost;
