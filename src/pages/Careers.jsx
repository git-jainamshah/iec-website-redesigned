import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import imgHeroBg from '../assets/iec-hv-taping-room.jpg';
import imgCtaBg from '../assets/iec-workshop-overview.jpg';
import { openings } from '../data/openings.jsx';

const timeAgo = (date) => {
    const days = Math.floor((Date.now() - date) / 86400000);
    if (days < 1) return 'Today';
    if (days === 1) return '1 day ago';
    if (days < 30) return `${days} days ago`;
    const months = Math.floor(days / 30);
    return months === 1 ? '1 month ago' : `${months} months ago`;
};

const benefits = [
    { label: 'Career Growth', body: 'Structured progression paths and skill development across all departments.' },
    { label: 'Large-Scale Work', body: '300,000 sq.ft campus with modern CNC, balancing, and HV test equipment.' },
    { label: 'Expert Mentorship', body: 'Learn from engineers with 40+ years of hands-on industry experience.' },
    { label: 'Impactful Projects', body: "Repair critical machines for India's top power plants, cement, and process industries." },
];

const Careers = () => {
    const revealRef = useRef([]);
    const [filterDept, setFilterDept] = useState('All');
    const [filterType, setFilterType] = useState('All');
    const [filterSite, setFilterSite] = useState('All');
    const [sortBy, setSortBy] = useState('date');
    const [search, setSearch] = useState('');

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('cr-in')),
            { threshold: 0.1 }
        );
        revealRef.current.forEach(el => el && obs.observe(el));
        return () => obs.disconnect();
    }, []);

    const r = (el) => { if (el && !revealRef.current.includes(el)) revealRef.current.push(el); };

    const depts = ['All', ...new Set(openings.map(j => j.dept))];
    const types = ['All', 'Full-time', 'Part-time'];
    const sites = ['All', 'Ranoli, Vadodara, Gujarat', 'Raika, Vadodara, Gujarat'];

    let filtered = openings.filter(j =>
        (filterDept === 'All' || j.dept === filterDept) &&
        (filterType === 'All' || j.type === filterType) &&
        (filterSite === 'All' || j.site === filterSite) &&
        (!search || j.title.toLowerCase().includes(search.toLowerCase()))
    );
    if (sortBy === 'date') filtered = [...filtered].sort((a, b) => b.posted - a.posted);
    if (sortBy === 'az') filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div className="cr-page">
            <PageHero
                label="Join Our Team"
                title="Careers at IEC"
                subtitle="Build your career at India's leading industrial motor repair facility."
                bgImage={imgHeroBg}
                breadcrumbs={[{ label: 'Careers' }]}
            />

            {/* ── Why IEC — compact strip ── */}
            <section className="cr-why">
                <div className="container cr-why-grid">
                    {benefits.map((b, i) => (
                        <div key={i} className="cr-why-item cr-reveal" ref={r} style={{ transitionDelay: `${i * 0.08}s` }}>
                            <span className="cr-why-num">{String(i + 1).padStart(2, '0')}</span>
                            <div>
                                <h4 className="cr-why-label">{b.label}</h4>
                                <p className="cr-why-body">{b.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Open Positions ── */}
            <section className="cr-positions">
                <div className="container">
                    <div className="cr-positions-head cr-reveal" ref={r}>
                        <div>
                            <span className="cr-eyebrow">Open Positions</span>
                            <h2 className="cr-positions-title">Current Openings</h2>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="cr-search-wrap cr-reveal" ref={r}>
                        <svg className="cr-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                        <input
                            className="cr-search"
                            type="text"
                            placeholder="Search positions..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        {search && <button className="cr-search-clear" onClick={() => setSearch('')}>✕</button>}
                    </div>

                    {/* Filters */}
                    <div className="cr-filters cr-reveal" ref={r}>
                        <div className="cr-filter-group">
                            <label className="cr-filter-label">Department</label>
                            <div className="cr-filter-pills">
                                {depts.map(d => (
                                    <button key={d} className={`cr-pill${filterDept === d ? ' cr-pill--active' : ''}`} onClick={() => setFilterDept(d)}>{d}</button>
                                ))}
                            </div>
                        </div>
                        <div className="cr-filter-group">
                            <label className="cr-filter-label">Type</label>
                            <div className="cr-filter-pills">
                                {types.map(t => (
                                    <button key={t} className={`cr-pill${filterType === t ? ' cr-pill--active' : ''}`} onClick={() => setFilterType(t)}>{t}</button>
                                ))}
                            </div>
                        </div>
                        <div className="cr-filter-group">
                            <label className="cr-filter-label">Location</label>
                            <div className="cr-filter-pills">
                                {sites.map(s => (
                                    <button key={s} className={`cr-pill${filterSite === s ? ' cr-pill--active' : ''}`} onClick={() => setFilterSite(s)}>{s === 'All' ? 'All' : s.split(',')[0]}</button>
                                ))}
                            </div>
                        </div>
                        <div className="cr-filter-group cr-filter-group--right">
                            <label className="cr-filter-label">Sort</label>
                            <div className="cr-filter-pills">
                                <button className={`cr-pill${sortBy === 'date' ? ' cr-pill--active' : ''}`} onClick={() => setSortBy('date')}>Newest</button>
                                <button className={`cr-pill${sortBy === 'az' ? ' cr-pill--active' : ''}`} onClick={() => setSortBy('az')}>A–Z</button>
                            </div>
                        </div>
                    </div>

                    {/* Results count */}
                    <p className="cr-results-count">{filtered.length} position{filtered.length !== 1 ? 's' : ''} found</p>

                    <div className="cr-jobs-list">
                        {filtered.length === 0 ? (
                            <div className="cr-no-results">No positions match. <button onClick={() => { setFilterDept('All'); setFilterType('All'); setFilterSite('All'); setSearch(''); }}>Clear all</button></div>
                        ) : filtered.map((job, i) => (
                            <div key={`${job.title}-${i}`} className="cr-job">
                                <div className="cr-job-left">
                                    <h3 className="cr-job-title">{job.title}</h3>
                                    <div className="cr-job-tags">
                                        <span className="cr-job-tag">{job.dept}</span>
                                        <span className="cr-job-tag cr-job-tag--type">{job.type}</span>
                                        <span className="cr-job-tag cr-job-tag--loc">
                                            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                            {job.site}
                                        </span>
                                        <span className="cr-job-posted">{timeAgo(job.posted)}</span>
                                    </div>
                                    <p className="cr-job-desc">{job.desc}</p>
                                </div>
                                <div className="cr-job-right">
                                    <Link to={`/careers/${job.slug}`} className="cr-view-btn">
                                        View Role
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                    </Link>
                                    <Link to="/contact" className="cr-apply-btn">
                                        Apply Now
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Open Application CTA ── */}
            <section className="cr-opencta">
                <div className="cr-opencta-bg">
                    <img src={imgCtaBg} alt="" />
                    <div className="cr-opencta-overlay" />
                </div>
                <div className="container cr-opencta-inner cr-reveal" ref={r}>
                    <div>
                        <span className="cr-eyebrow">Open Application</span>
                        <h2 className="cr-opencta-title">Don't see your role?</h2>
                        <p className="cr-opencta-body">Send us your profile and we'll keep you in mind for future openings at our Ranoli or Raika facilities.</p>
                    </div>
                    <Link to="/contact" className="btn-premium">
                        Send Your Profile
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                </div>
            </section>

            <style>{`
                .cr-page { min-height: 100vh; }

                .cr-reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1); }
                .cr-reveal.cr-in { opacity: 1; transform: translateY(0); }

                .cr-eyebrow { display: block; font-family: var(--font-mono); font-size: 0.6875rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.16em; color: var(--color-accent); margin-bottom: var(--space-md); }

                /* ── Why IEC compact strip ── */
                .cr-why {
                    background: var(--color-dark);
                    border-bottom: 1px solid rgba(255,255,255,0.06);
                    padding: var(--space-3xl) 0;
                }
                .cr-why-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 0;
                    border: 1px solid rgba(255,255,255,0.07);
                }
                .cr-why-item {
                    display: flex;
                    gap: var(--space-md);
                    align-items: flex-start;
                    padding: var(--space-xl) var(--space-xl);
                    border-right: 1px solid rgba(255,255,255,0.07);
                }
                .cr-why-item:last-child { border-right: none; }
                .cr-why-num { font-family: var(--font-mono); font-size: 0.625rem; color: var(--color-accent); letter-spacing: 0.1em; flex-shrink: 0; padding-top: 3px; }
                .cr-why-label { font-size: 0.875rem; font-weight: 600; color: var(--color-white); margin: 0 0 4px; }
                .cr-why-body { font-size: 0.8125rem; line-height: 1.6; color: rgba(255,255,255,0.38); margin: 0; }

                /* ── Positions ── */
                .cr-positions { background: var(--color-white); padding: var(--space-5xl) 0; }
                .cr-positions-head { margin-bottom: var(--space-2xl); }
                .cr-positions-title { font-family: var(--font-display); font-size: clamp(1.75rem, 3vw, 2.5rem); font-weight: 300; letter-spacing: -0.025em; color: var(--color-text); margin-top: var(--space-md); margin-bottom: 0; }

                /* Filters */
                .cr-filters {
                    display: flex;
                    flex-wrap: wrap;
                    gap: var(--space-xl);
                    align-items: flex-end;
                    padding: var(--space-xl);
                    background: var(--color-cream);
                    border: 1px solid var(--color-border);
                    margin-bottom: var(--space-lg);
                }
                .cr-filter-group { display: flex; flex-direction: column; gap: 8px; }
                .cr-filter-group--right { margin-left: auto; }
                .cr-filter-label { font-family: var(--font-mono); font-size: 0.5625rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--color-muted); }
                .cr-filter-pills { display: flex; gap: 6px; flex-wrap: wrap; }
                .cr-pill {
                    font-family: var(--font-mono); font-size: 0.625rem; text-transform: uppercase; letter-spacing: 0.08em;
                    padding: 5px 12px; border: 1px solid var(--color-border); background: var(--color-white);
                    color: var(--color-text-light); cursor: pointer; transition: all 0.18s;
                }
                .cr-pill:hover { border-color: var(--color-text); color: var(--color-text); }
                .cr-pill--active { background: var(--color-text); color: var(--color-white); border-color: var(--color-text); }

                .cr-results-count { font-family: var(--font-mono); font-size: 0.625rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-muted); margin-bottom: var(--space-xl); }

                /* Job rows */
                .cr-jobs-list { display: flex; flex-direction: column; }
                .cr-job {
                    display: flex; align-items: flex-start; justify-content: space-between;
                    gap: var(--space-3xl); padding: var(--space-xl) 0;
                    border-bottom: 1px solid var(--color-border); transition: background 0.2s;
                }
                .cr-job:last-child { border-bottom: none; }
                .cr-job:hover { background: var(--color-cream); margin: 0 calc(-1 * var(--space-lg)); padding-left: var(--space-lg); padding-right: var(--space-lg); }
                .cr-job-left { flex: 1; }
                .cr-job-title { font-size: 1.0625rem; font-weight: 600; color: var(--color-text); margin-bottom: var(--space-sm); }
                .cr-job-tags { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: var(--space-md); }
                .cr-job-tag {
                    font-family: var(--font-mono); font-size: 0.5625rem; text-transform: uppercase; letter-spacing: 0.1em;
                    color: var(--color-text-light); padding: 3px 9px; background: var(--color-cream); border: 1px solid var(--color-border);
                }
                .cr-job-tag--type { color: var(--color-accent); border-color: rgba(200,16,46,0.2); background: rgba(200,16,46,0.05); }
                .cr-job-tag--loc { display: inline-flex; align-items: center; gap: 4px; }
                .cr-job-posted { font-family: var(--font-mono); font-size: 0.5625rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-muted); margin-left: auto; }
                .cr-job-desc { font-size: 0.875rem; line-height: 1.65; color: var(--color-text-light); max-width: 560px; margin: 0; }
                .cr-job-right { flex-shrink: 0; padding-top: 4px; display: flex; flex-direction: column; gap: 8px; align-items: flex-end; }

                .cr-view-btn {
                    display: inline-flex; align-items: center; gap: 8px;
                    padding: 10px 22px;
                    font-family: var(--font-mono); font-size: 0.625rem; font-weight: 500;
                    text-transform: uppercase; letter-spacing: 0.12em;
                    color: var(--color-primary); border: 1px solid rgba(17,17,20,0.28);
                    background: transparent; white-space: nowrap; text-decoration: none;
                    transition: background 0.25s, color 0.25s, border-color 0.25s;
                }
                .cr-view-btn:hover { background: var(--color-primary); border-color: var(--color-primary); color: #ffffff; }

                .cr-apply-btn {
                    display: inline-flex; align-items: center; gap: 8px;
                    padding: 10px 22px;
                    font-family: var(--font-mono); font-size: 0.625rem; font-weight: 500;
                    text-transform: uppercase; letter-spacing: 0.12em;
                    color: var(--color-text); border: 1px solid rgba(17,17,20,0.28);
                    background: transparent; white-space: nowrap;
                    transition: background 0.25s, color 0.25s, border-color 0.25s;
                }
                .cr-apply-btn:hover { background: var(--color-accent); border-color: var(--color-accent); color: #ffffff; }

                /* Search */
                .cr-search-wrap { position: relative; display: flex; align-items: center; margin-bottom: var(--space-md); }
                .cr-search-icon { position: absolute; left: 14px; color: var(--color-muted); pointer-events: none; }
                .cr-search { width: 100%; padding: 10px 40px 10px 38px; font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: 0.06em; border: 1px solid var(--color-border); background: var(--color-white); color: var(--color-text); outline: none; transition: border-color 0.2s; }
                .cr-search::placeholder { color: var(--color-muted); }
                .cr-search:focus { border-color: var(--color-text); }
                .cr-search-clear { position: absolute; right: 12px; background: none; border: none; cursor: pointer; color: var(--color-muted); font-size: 0.75rem; padding: 4px; }

                .cr-no-results { padding: var(--space-3xl) 0; color: var(--color-text-light); font-size: 0.9375rem; }
                .cr-no-results button { color: var(--color-accent); background: none; border: none; cursor: pointer; text-decoration: underline; }

                /* ── CTA ── */
                .cr-opencta { position: relative; overflow: hidden; background: var(--color-primary); padding: var(--space-5xl) 0; }
                .cr-opencta-bg { position: absolute; inset: 0; }
                .cr-opencta-bg img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) brightness(0.22) contrast(1.15); }
                .cr-opencta-overlay { position: absolute; inset: 0; background: linear-gradient(105deg, rgba(17,17,20,0.93) 0%, rgba(17,17,20,0.7) 100%); }
                .cr-opencta-inner { position: relative; z-index: 1; display: flex; align-items: center; justify-content: space-between; gap: var(--space-3xl); }
                .cr-opencta-title { font-family: var(--font-display); font-size: clamp(1.75rem, 3vw, 2.75rem); font-weight: 300; letter-spacing: -0.025em; color: var(--color-white); line-height: 1.15; margin-top: var(--space-md); margin-bottom: 0; }
                .cr-opencta-body { font-size: 0.9375rem; line-height: 1.7; color: rgba(255,255,255,0.48); max-width: 400px; margin-top: var(--space-lg); margin-bottom: 0; }

                @media (max-width: 1024px) { .cr-why-grid { grid-template-columns: repeat(2, 1fr); } .cr-why-item:nth-child(2) { border-right: none; } .cr-why-item { border-bottom: 1px solid rgba(255,255,255,0.07); } .cr-why-item:nth-child(3), .cr-why-item:nth-child(4) { border-bottom: none; } }
                @media (max-width: 768px) { .cr-why-grid { grid-template-columns: 1fr; } .cr-why-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); } .cr-why-item:last-child { border-bottom: none; } .cr-filters { gap: var(--space-lg); } .cr-filter-group--right { margin-left: 0; } .cr-job { flex-direction: column; gap: var(--space-md); } .cr-job:hover { margin: 0; padding-left: 0; padding-right: 0; } .cr-opencta-inner { flex-direction: column; align-items: flex-start; } .cr-job-posted { margin-left: 0; } }
            `}</style>
        </div>
    );
};

export default Careers;
