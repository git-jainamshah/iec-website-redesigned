import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import imgHeroBg from '../assets/iec-hv-taping-room.jpg';
import imgCraftSide from '../assets/iec-winding-room-women.jpg';
import imgCraftSide2 from '../assets/iec-stator-crane-03.jpg';
import imgCtaBg from '../assets/iec-workshop-overview.jpg';

const openings = [
    {
        title: 'Senior Motor Winding Technician',
        dept: 'Operations',
        type: 'Full-time',
        location: 'Vadodara, Gujarat',
        desc: 'Experienced technician for HV motor rewinding and stator/rotor repair on machines up to 20,000 HP.',
    },
    {
        title: 'Quality Control Engineer',
        dept: 'Quality Assurance',
        type: 'Full-time',
        location: 'Vadodara, Gujarat',
        desc: 'Ensure all repair processes meet ISO 9001 and EASA standards through rigorous inspection and testing protocols.',
    },
    {
        title: 'Mechanical Workshop Supervisor',
        dept: 'Operations',
        type: 'Full-time',
        location: 'Vadodara, Gujarat',
        desc: 'Lead the mechanical workshop team, oversee precision machining, and coordinate repair schedules.',
    },
];

const benefits = [
    { label: 'Career Growth', body: 'Structured progression paths and skill development programs across all departments.' },
    { label: 'Large-Scale Work', body: '300,000 sq.ft campus with modern CNC, balancing, and HV test equipment.' },
    { label: 'Expert Mentorship', body: 'Learn directly from engineers with 40+ years of hands-on industry experience.' },
    { label: 'Impactful Projects', body: "Repair critical machines for India's top power plants, cement, and process industries." },
];

const Careers = () => {
    const revealRef = useRef([]);

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('cr-in')),
            { threshold: 0.1 }
        );
        revealRef.current.forEach(el => el && obs.observe(el));
        return () => obs.disconnect();
    }, []);

    const r = (el) => { if (el && !revealRef.current.includes(el)) revealRef.current.push(el); };

    return (
        <div className="cr-page">
            <PageHero
                label="Join Our Team"
                title="Careers at IEC"
                subtitle="Build your career at India's leading industrial motor repair facility."
                bgImage={imgHeroBg}
                breadcrumbs={[{ label: 'Careers' }]}
            />

            {/* ── Craft Statement ── */}
            <section className="cr-craft">
                <div className="cr-craft-inner">
                    <div className="cr-craft-left cr-reveal" ref={r}>
                        <span className="cr-eyebrow">01 / Why IEC</span>
                        <h2 className="cr-craft-heading">40 years of craft.<br />Now hiring.</h2>
                        <p className="cr-craft-body">
                            At Indian Engineering Company, you don't just repair machines —
                            you keep India's industrial backbone running. From cement plants
                            to power stations, every job matters. We're a close-knit team of
                            engineers and technicians who take pride in precision.
                        </p>
                        <p className="cr-craft-body" style={{ marginTop: '1.25rem' }}>
                            Our 300,000 sq.ft facility in Vadodara is fully equipped for
                            in-house HV coil making, precision machining, dynamic balancing,
                            and high-voltage testing — no outsourcing, no compromises.
                        </p>
                    </div>
                    <div className="cr-craft-right">
                        <img src={imgCraftSide} alt="IEC team at work" className="cr-craft-img" />
                        <div className="cr-craft-badge">
                            <span className="cr-craft-badge-num">500+</span>
                            <span className="cr-craft-badge-label">Machines repaired per year</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Benefits ── */}
            <section className="cr-benefits">
                <div className="container">
                    <div className="cr-benefits-head cr-reveal" ref={r}>
                        <span className="cr-eyebrow cr-eyebrow--lt">02 / What You Get</span>
                        <h2 className="cr-benefits-title">Working at IEC</h2>
                    </div>
                    <div className="cr-benefits-grid">
                        {benefits.map((b, i) => (
                            <div key={i} className="cr-benefit cr-reveal" ref={r} style={{ transitionDelay: `${i * 0.1}s` }}>
                                <span className="cr-benefit-num">{String(i + 1).padStart(2, '0')}</span>
                                <h4 className="cr-benefit-label">{b.label}</h4>
                                <p className="cr-benefit-body">{b.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Open Positions ── */}
            <section className="cr-positions">
                <div className="container">
                    <div className="cr-positions-head cr-reveal" ref={r}>
                        <div>
                            <span className="cr-eyebrow cr-eyebrow--dk">03 / Opportunities</span>
                            <h2 className="cr-positions-title">Open Positions</h2>
                        </div>
                        <p className="cr-positions-sub">
                            All roles are based at our Vadodara workshop.
                        </p>
                    </div>

                    <div className="cr-jobs-list">
                        {openings.map((job, i) => (
                            <div key={i} className="cr-job cr-reveal" ref={r} style={{ transitionDelay: `${i * 0.08}s` }}>
                                <div className="cr-job-left">
                                    <h3 className="cr-job-title">{job.title}</h3>
                                    <div className="cr-job-tags">
                                        <span className="cr-job-tag">{job.dept}</span>
                                        <span className="cr-job-tag">{job.type}</span>
                                        <span className="cr-job-tag cr-job-tag--loc">
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                            {job.location}
                                        </span>
                                    </div>
                                    <p className="cr-job-desc">{job.desc}</p>
                                </div>
                                <div className="cr-job-right">
                                    <Link to="/contact" className="btn-premium btn-premium--lgt">
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
                        <span className="cr-eyebrow">04 / Open Application</span>
                        <h2 className="cr-opencta-title">Don't see your role?</h2>
                        <p className="cr-opencta-body">
                            We're always interested in exceptional engineers and technicians.
                            Send us your profile and we'll keep you in mind for future openings.
                        </p>
                    </div>
                    <Link to="/contact" className="btn-premium">
                        Send Your Profile
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                </div>
            </section>

            <style>{`
                .cr-page { min-height: 100vh; }

                /* ── Reveal ── */
                .cr-reveal {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1),
                                transform 0.65s cubic-bezier(0.16,1,0.3,1);
                }
                .cr-reveal.cr-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                /* ── Eyebrow ── */
                .cr-eyebrow {
                    display: block;
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.16em;
                    color: var(--color-accent);
                    margin-bottom: var(--space-md);
                }
                .cr-eyebrow--lt { color: rgba(255,255,255,0.45); }
                .cr-eyebrow--dk { color: var(--color-accent); }

                /* ── Craft Statement ── */
                .cr-craft {
                    background: var(--color-primary);
                    overflow: hidden;
                }
                .cr-craft-inner {
                    display: grid;
                    grid-template-columns: 52% 48%;
                    min-height: 540px;
                }
                .cr-craft-left {
                    padding: var(--space-5xl) var(--space-4xl) var(--space-5xl) max(var(--space-3xl), calc((100vw - 1200px)/2 + var(--space-3xl)));
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .cr-craft-heading {
                    font-family: var(--font-display);
                    font-size: clamp(2.25rem, 4vw, 3.75rem);
                    font-weight: 300;
                    letter-spacing: -0.03em;
                    color: var(--color-white);
                    line-height: 1.1;
                    margin-bottom: var(--space-xl);
                }
                .cr-craft-body {
                    font-size: 1rem;
                    line-height: 1.85;
                    color: rgba(255,255,255,0.6);
                    max-width: 460px;
                }
                .cr-craft-right {
                    position: relative;
                    overflow: hidden;
                }
                .cr-craft-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    filter: grayscale(30%) brightness(0.68) contrast(1.05);
                    transition: filter 0.5s ease;
                }
                .cr-craft-right:hover .cr-craft-img {
                    filter: grayscale(10%) brightness(0.75) contrast(1.02);
                }
                .cr-craft-badge {
                    position: absolute;
                    bottom: var(--space-2xl);
                    left: var(--space-2xl);
                    background: rgba(17,17,20,0.85);
                    border-left: 2px solid var(--color-accent);
                    padding: var(--space-lg) var(--space-xl);
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }
                .cr-craft-badge-num {
                    font-family: var(--font-mono);
                    font-size: 1.75rem;
                    font-weight: 500;
                    color: var(--color-white);
                    line-height: 1;
                }
                .cr-craft-badge-label {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: rgba(255,255,255,0.4);
                }

                /* ── Benefits ── */
                .cr-benefits {
                    background: var(--color-dark);
                    padding: var(--space-5xl) 0;
                    border-top: 1px solid rgba(255,255,255,0.05);
                }
                .cr-benefits-head {
                    margin-bottom: var(--space-4xl);
                }
                .cr-benefits-title {
                    font-family: var(--font-display);
                    font-size: clamp(1.75rem, 3vw, 2.75rem);
                    font-weight: 300;
                    letter-spacing: -0.025em;
                    color: var(--color-white);
                    line-height: 1.15;
                    margin-top: var(--space-md);
                }
                .cr-benefits-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 0;
                    border: 1px solid rgba(255,255,255,0.07);
                }
                .cr-benefit {
                    padding: var(--space-2xl);
                    border-right: 1px solid rgba(255,255,255,0.07);
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-md);
                }
                .cr-benefit:last-child { border-right: none; }
                .cr-benefit-num {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 500;
                    letter-spacing: 0.1em;
                    color: var(--color-accent);
                }
                .cr-benefit-label {
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--color-white);
                    margin: 0;
                    line-height: 1.3;
                }
                .cr-benefit-body {
                    font-size: 0.875rem;
                    line-height: 1.7;
                    color: rgba(255,255,255,0.42);
                    margin: 0;
                }

                /* ── Open Positions ── */
                .cr-positions {
                    background: var(--color-white);
                    padding: var(--space-5xl) 0;
                }
                .cr-positions-head {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: var(--space-xl);
                    margin-bottom: var(--space-3xl);
                    padding-bottom: var(--space-xl);
                    border-bottom: 1px solid var(--color-border);
                }
                .cr-positions-title {
                    font-family: var(--font-display);
                    font-size: clamp(1.75rem, 3vw, 2.5rem);
                    font-weight: 300;
                    letter-spacing: -0.025em;
                    color: var(--color-text);
                    margin-top: var(--space-md);
                    margin-bottom: 0;
                }
                .cr-positions-sub {
                    font-size: 0.875rem;
                    color: var(--color-text-light);
                    margin: 0;
                    flex-shrink: 0;
                }
                .cr-jobs-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                }
                .cr-job {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: var(--space-3xl);
                    padding: var(--space-2xl) 0;
                    border-bottom: 1px solid var(--color-border);
                    transition: background 0.2s;
                }
                .cr-job:last-child { border-bottom: none; }
                .cr-job:hover { background: var(--color-cream); margin: 0 calc(-1 * var(--space-xl)); padding-left: var(--space-xl); padding-right: var(--space-xl); }
                .cr-job-left { flex: 1; }
                .cr-job-title {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: var(--color-text);
                    margin-bottom: var(--space-sm);
                }
                .cr-job-tags {
                    display: flex;
                    align-items: center;
                    gap: var(--space-sm);
                    flex-wrap: wrap;
                    margin-bottom: var(--space-md);
                }
                .cr-job-tag {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-text-light);
                    padding: 3px 10px;
                    background: var(--color-cream);
                    border: 1px solid var(--color-border);
                }
                .cr-job-tag--loc {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                }
                .cr-job-desc {
                    font-size: 0.9rem;
                    line-height: 1.65;
                    color: var(--color-text-light);
                    max-width: 540px;
                    margin: 0;
                }
                .cr-job-right {
                    flex-shrink: 0;
                    padding-top: 4px;
                }

                /* btn-premium light variant for white backgrounds */
                .btn-premium--lgt {
                    color: var(--color-text);
                    border-color: rgba(17,17,20,0.25);
                }
                .btn-premium--lgt::before {
                    background: var(--color-text);
                }
                .btn-premium--lgt:hover {
                    color: var(--color-white);
                    border-color: var(--color-text);
                }

                /* ── Open CTA ── */
                .cr-opencta {
                    position: relative;
                    overflow: hidden;
                    background: var(--color-primary);
                    padding: var(--space-5xl) 0;
                }
                .cr-opencta-bg {
                    position: absolute;
                    inset: 0;
                }
                .cr-opencta-bg img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(100%) brightness(0.22) contrast(1.15);
                }
                .cr-opencta-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(105deg, rgba(17,17,20,0.93) 0%, rgba(17,17,20,0.7) 100%);
                }
                .cr-opencta-inner {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: var(--space-3xl);
                }
                .cr-opencta-title {
                    font-family: var(--font-display);
                    font-size: clamp(1.75rem, 3vw, 2.75rem);
                    font-weight: 300;
                    letter-spacing: -0.025em;
                    color: var(--color-white);
                    line-height: 1.15;
                    margin-top: var(--space-md);
                    margin-bottom: 0;
                }
                .cr-opencta-body {
                    font-size: 0.9375rem;
                    line-height: 1.7;
                    color: rgba(255,255,255,0.48);
                    max-width: 400px;
                    margin-top: var(--space-lg);
                    margin-bottom: 0;
                }

                /* Mobile */
                @media (max-width: 1024px) {
                    .cr-benefits-grid { grid-template-columns: repeat(2, 1fr); }
                    .cr-benefit:nth-child(2) { border-right: none; }
                    .cr-benefit { border-bottom: 1px solid rgba(255,255,255,0.07); }
                    .cr-benefit:nth-child(3),
                    .cr-benefit:nth-child(4) { border-bottom: none; }
                }
                @media (max-width: 900px) {
                    .cr-craft-inner { grid-template-columns: 1fr; }
                    .cr-craft-right { min-height: 280px; }
                    .cr-craft-left { padding: var(--space-3xl) var(--space-xl); }
                    .cr-positions-head { flex-direction: column; align-items: flex-start; }
                    .cr-job { flex-direction: column; gap: var(--space-lg); }
                    .cr-job:hover { margin: 0; padding-left: 0; padding-right: 0; }
                    .cr-opencta-inner { flex-direction: column; align-items: flex-start; }
                }
                @media (max-width: 600px) {
                    .cr-benefits-grid { grid-template-columns: 1fr; }
                    .cr-benefit { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); }
                    .cr-benefit:last-child { border-bottom: none; }
                }
            `}</style>
        </div>
    );
};

export default Careers;
