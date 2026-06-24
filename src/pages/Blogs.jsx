import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import imgHeroBg from '../assets/iec-stator-windings.jpg';
import imgFeatured from '../assets/iec-rotor-workshop.jpg';
import imgCard1 from '../assets/iec-stator-crane-01.jpg';
import imgCard2 from '../assets/iec-stator-front.jpg';
import imgCard3 from '../assets/iec-stator-crane-02.jpg';
import imgCard4 from '../assets/iec-taping-machine.jpg';
import imgNewsletter from '../assets/iec-hv-taping-room.jpg';

const articles = [
    {
        id: 1,
        category: 'Maintenance',
        date: 'Jan 2024',
        readTime: '5 min',
        title: 'Understanding High Voltage Motor Maintenance',
        excerpt: 'Essential maintenance practices for HV motors to ensure optimal performance, prevent insulation failure, and extend service life across industrial applications.',
        img: imgCard1,
    },
    {
        id: 2,
        category: 'Industry',
        date: 'Jan 2024',
        readTime: '7 min',
        title: 'The Future of Industrial Motor Repair in India',
        excerpt: 'Emerging technologies and process improvements shaping how India\'s industrial sector approaches large rotating machine repair and refurbishment.',
        img: imgCard2,
    },
    {
        id: 3,
        category: 'Certification',
        date: 'Jan 2024',
        readTime: '4 min',
        title: 'EASA Certification: What It Means for Your Equipment',
        excerpt: 'How EASA membership and best-practice standards translate to better repair outcomes, longer machine life, and reduced downtime for plant operators.',
        img: imgCard3,
    },
    {
        id: 4,
        category: 'Maintenance',
        date: 'Dec 2023',
        readTime: '6 min',
        title: 'Preventive Maintenance Strategies for Large Generators',
        excerpt: 'Key strategies to prevent generator failures, extend equipment lifespan, and plan maintenance windows around your plant\'s production schedule.',
        img: imgCard4,
    },
];

const Blogs = () => {
    const revealRef = useRef([]);

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('bl-in')),
            { threshold: 0.1 }
        );
        revealRef.current.forEach(el => el && obs.observe(el));
        return () => obs.disconnect();
    }, []);

    const r = (el) => { if (el && !revealRef.current.includes(el)) revealRef.current.push(el); };

    return (
        <div className="bl-page">
            <PageHero
                label="Insights"
                title="Engineering Notes"
                subtitle="Technical perspectives from IEC's repair engineers and industry specialists."
                bgImage={imgHeroBg}
                breadcrumbs={[{ label: 'Insights' }]}
                compact={true}
                sideImg={imgFeatured}
            />

            {/* ── Featured Article ── */}
            <section className="bl-featured">
                <div className="container">
                    <div className="bl-featured-card bl-reveal" ref={r}>
                        <div className="bl-featured-photo">
                            <img src={imgFeatured} alt="IEC workshop" />
                            <div className="bl-featured-photo-fog" />
                            <div className="bl-featured-photo-label">
                                <span className="bl-tag">Featured</span>
                            </div>
                        </div>
                        <div className="bl-featured-body">
                            <div className="bl-featured-meta">
                                <span className="bl-tag bl-tag--red">Maintenance</span>
                                <span className="bl-meta-sep" />
                                <span className="bl-meta-txt">Jan 2024</span>
                                <span className="bl-meta-sep" />
                                <span className="bl-meta-txt">5 min read</span>
                            </div>
                            <h2 className="bl-featured-title">
                                Understanding High Voltage Motor Maintenance
                            </h2>
                            <p className="bl-featured-excerpt">
                                High-voltage motors form the backbone of India's industrial plants.
                                Proper maintenance intervals, insulation monitoring, and bearing
                                inspection protocols can prevent costly unplanned outages.
                                IEC's engineers share the practices that extend machine service life
                                across cement, power, and petrochemical sectors.
                            </p>
                            <Link to="/blogs/1" className="bl-read-link">
                                Read Article
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Articles Grid ── */}
            <section className="bl-grid-section">
                <div className="container">
                    <div className="bl-grid-head bl-reveal" ref={r}>
                        <span className="bl-eyebrow">All Articles</span>
                        <p className="bl-grid-sub">Practical knowledge from 26 years of industrial repair experience.</p>
                    </div>
                    <div className="bl-grid">
                        {articles.map((article, i) => (
                            <article key={article.id} className="bl-card bl-reveal" ref={r} style={{ transitionDelay: `${i * 0.08}s` }}>
                                <div className="bl-card-photo">
                                    <img src={article.img} alt={article.title} />
                                    <div className="bl-card-photo-fog" />
                                    <span className="bl-card-tag">{article.category}</span>
                                </div>
                                <div className="bl-card-body">
                                    <div className="bl-card-meta">
                                        <span className="bl-meta-txt">{article.date}</span>
                                        <span className="bl-meta-sep" />
                                        <span className="bl-meta-txt">{article.readTime} read</span>
                                    </div>
                                    <h3 className="bl-card-title">
                                        <Link to={`/blogs/${article.id}`}>{article.title}</Link>
                                    </h3>
                                    <p className="bl-card-excerpt">{article.excerpt}</p>
                                    <Link to={`/blogs/${article.id}`} className="bl-read-link bl-read-link--sm">
                                        Read More
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Newsletter/CTA Band ── */}
            <section className="bl-newsletter">
                <div className="bl-newsletter-bg">
                    <img src={imgNewsletter} alt="" />
                    <div className="bl-newsletter-overlay" />
                </div>
                <div className="container bl-newsletter-inner bl-reveal" ref={r}>
                    <div>
                        <span className="bl-eyebrow">Stay Informed</span>
                        <h2 className="bl-newsletter-title">Technical updates<br />from the shop floor.</h2>
                    </div>
                    <div className="bl-newsletter-actions">
                        <p className="bl-newsletter-body">
                            Have a repair question or want to discuss a project with our engineers?
                        </p>
                        <Link to="/contact" className="btn-premium">
                            Talk to an Engineer
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </Link>
                    </div>
                </div>
            </section>

            <style>{`
                .bl-page { min-height: 100vh; }

                /* ── Reveal ── */
                .bl-reveal {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1),
                                transform 0.6s cubic-bezier(0.16,1,0.3,1);
                }
                .bl-reveal.bl-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                /* ── Tags & Meta ── */
                .bl-tag {
                    display: inline-block;
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    padding: 4px 10px;
                    background: rgba(255,255,255,0.1);
                    color: rgba(255,255,255,0.7);
                    border: 1px solid rgba(255,255,255,0.15);
                }
                .bl-tag--red {
                    background: rgba(200,16,46,0.12);
                    color: var(--color-accent);
                    border-color: rgba(200,16,46,0.25);
                }
                .bl-meta-txt {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    color: rgba(255,255,255,0.4);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }
                .bl-meta-sep {
                    display: inline-block;
                    width: 3px;
                    height: 3px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.25);
                    vertical-align: middle;
                    margin: 0 10px;
                }

                /* ── Eyebrow ── */
                .bl-eyebrow {
                    display: block;
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.16em;
                    color: var(--color-accent);
                    margin-bottom: var(--space-md);
                }

                /* ── Featured ── */
                .bl-featured {
                    background: var(--color-primary);
                    padding: var(--space-4xl) 0 var(--space-5xl);
                }
                .bl-featured-card {
                    display: grid;
                    grid-template-columns: 52% 48%;
                    min-height: 440px;
                    border: 1px solid rgba(255,255,255,0.08);
                    overflow: hidden;
                }
                .bl-featured-photo {
                    position: relative;
                    overflow: hidden;
                }
                .bl-featured-photo img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(40%) brightness(0.72) contrast(1.05);
                    transition: transform 0.6s ease;
                }
                .bl-featured-card:hover .bl-featured-photo img {
                    transform: scale(1.04);
                }
                .bl-featured-photo-fog {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to right, transparent 60%, rgba(17,17,20,0.95) 100%),
                                linear-gradient(to top, rgba(17,17,20,0.5) 0%, transparent 40%);
                }
                .bl-featured-photo-label {
                    position: absolute;
                    top: var(--space-xl);
                    left: var(--space-xl);
                }
                .bl-featured-body {
                    padding: var(--space-3xl) var(--space-3xl) var(--space-3xl) var(--space-2xl);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: var(--space-lg);
                    background: var(--color-secondary);
                }
                .bl-featured-meta {
                    display: flex;
                    align-items: center;
                    gap: 0;
                }
                .bl-featured-title {
                    font-family: var(--font-display);
                    font-size: clamp(1.5rem, 2.5vw, 2.125rem);
                    font-weight: 300;
                    letter-spacing: -0.02em;
                    color: var(--color-white);
                    line-height: 1.25;
                    margin: 0;
                }
                .bl-featured-excerpt {
                    font-size: 0.9375rem;
                    line-height: 1.8;
                    color: rgba(255,255,255,0.55);
                }
                .bl-read-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: var(--color-accent);
                    transition: gap 0.2s;
                }
                .bl-read-link:hover { gap: 12px; }
                .bl-read-link--sm { font-size: 0.625rem; margin-top: auto; padding-top: var(--space-md); }

                /* ── Articles Grid ── */
                .bl-grid-section {
                    background: var(--color-white);
                    padding: var(--space-5xl) 0;
                }
                .bl-grid-head {
                    display: flex;
                    align-items: baseline;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: var(--space-md);
                    margin-bottom: var(--space-3xl);
                    padding-bottom: var(--space-xl);
                    border-bottom: 1px solid var(--color-border);
                }
                .bl-grid-sub {
                    font-size: 0.875rem;
                    color: var(--color-text-light);
                    margin: 0;
                }
                .bl-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: var(--space-xl);
                }
                .bl-card {
                    display: flex;
                    flex-direction: column;
                    border: 1px solid var(--color-border);
                    overflow: hidden;
                    transition: box-shadow 0.3s var(--ease-out), transform 0.3s var(--ease-out);
                }
                .bl-card:hover {
                    box-shadow: 0 16px 40px rgba(0,0,0,0.1);
                    transform: translateY(-4px);
                }
                .bl-card-photo {
                    position: relative;
                    aspect-ratio: 16/9;
                    overflow: hidden;
                }
                .bl-card-photo img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(70%) brightness(0.65) contrast(1.1);
                    transition: filter 0.5s ease, transform 0.5s ease;
                }
                .bl-card:hover .bl-card-photo img {
                    filter: grayscale(30%) brightness(0.78) contrast(1.05);
                    transform: scale(1.05);
                }
                .bl-card-photo-fog {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(17,17,20,0.6) 0%, transparent 50%);
                }
                .bl-card-tag {
                    position: absolute;
                    bottom: var(--space-md);
                    left: var(--space-md);
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    color: var(--color-accent);
                    background: rgba(17,17,20,0.82);
                    padding: 4px 10px;
                    border-left: 2px solid var(--color-accent);
                }
                .bl-card-body {
                    padding: var(--space-xl) var(--space-xl) var(--space-lg);
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                }
                .bl-card-meta {
                    display: flex;
                    align-items: center;
                    margin-bottom: var(--space-md);
                }
                .bl-card-meta .bl-meta-txt { color: var(--color-muted); }
                .bl-card-meta .bl-meta-sep { background: var(--color-muted); }
                .bl-card-title {
                    font-size: 1.125rem;
                    font-weight: 600;
                    line-height: 1.4;
                    margin-bottom: var(--space-sm);
                }
                .bl-card-title a {
                    color: var(--color-text);
                    transition: color 0.2s;
                }
                .bl-card-title a:hover { color: var(--color-accent); }
                .bl-card-excerpt {
                    font-size: 0.875rem;
                    line-height: 1.75;
                    color: var(--color-text-light);
                    flex: 1;
                    margin-bottom: var(--space-md);
                }
                .bl-card-body .bl-read-link {
                    color: var(--color-accent);
                    border-top: 1px solid var(--color-border);
                    padding-top: var(--space-md);
                }

                /* ── Newsletter ── */
                .bl-newsletter {
                    position: relative;
                    overflow: hidden;
                    background: var(--color-primary);
                    padding: var(--space-5xl) 0;
                }
                .bl-newsletter-bg {
                    position: absolute;
                    inset: 0;
                }
                .bl-newsletter-bg img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(100%) brightness(0.2) contrast(1.15);
                }
                .bl-newsletter-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(105deg, rgba(17,17,20,0.94) 0%, rgba(17,17,20,0.7) 100%);
                }
                .bl-newsletter-inner {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: var(--space-3xl);
                }
                .bl-newsletter-title {
                    font-family: var(--font-display);
                    font-size: clamp(1.75rem, 3vw, 2.75rem);
                    font-weight: 300;
                    letter-spacing: -0.025em;
                    color: var(--color-white);
                    line-height: 1.18;
                    margin-top: var(--space-md);
                    margin-bottom: 0;
                }
                .bl-newsletter-actions {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-xl);
                    flex-shrink: 0;
                    max-width: 320px;
                }
                .bl-newsletter-body {
                    font-size: 0.9375rem;
                    line-height: 1.7;
                    color: rgba(255,255,255,0.5);
                    margin: 0;
                }

                /* Mobile */
                @media (max-width: 900px) {
                    .bl-featured-card { grid-template-columns: 1fr; }
                    .bl-featured-photo { min-height: 240px; }
                    .bl-grid { grid-template-columns: 1fr; }
                    .bl-newsletter-inner { flex-direction: column; align-items: flex-start; }
                    .bl-newsletter-actions { max-width: 100%; }
                }
            `}</style>
        </div>
    );
};

export default Blogs;
