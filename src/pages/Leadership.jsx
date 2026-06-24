import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import imgHeroBg from '../assets/iec-winding-room-women.jpg';
import imgFounderSide from '../assets/iec-stator-crane-03.jpg';
import imgFounderPanel from '../assets/iec-rotor-workshop.jpg';
import imgTeam1 from '../assets/iec-taping-room.jpg';
import imgTeam2 from '../assets/iec-stator-windings.jpg';
import imgTeam3 from '../assets/iec-hv-taping-room.jpg';
import imgCta from '../assets/iec-workshop-overview.jpg';

const Leadership = () => {
    const revealRef = useRef([]);

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('ld-in')),
            { threshold: 0.12 }
        );
        revealRef.current.forEach(el => el && obs.observe(el));
        return () => obs.disconnect();
    }, []);

    const r = (el) => { if (el && !revealRef.current.includes(el)) revealRef.current.push(el); };

    return (
        <div className="ld-page">
            <PageHero
                label="Our People"
                title="Leadership"
                bgImage={imgHeroBg}
                breadcrumbs={[{ label: 'Leadership' }]}
            />

            {/* ── Founder Feature ── */}
            <section className="ld-founder">
                <div className="ld-founder-inner">
                    <div className="ld-founder-left ld-reveal" ref={r}>
                        <span className="ld-eyebrow">01 / Founder</span>
                        <h2 className="ld-founder-name">Mr. Anil<br />Bhardwaj</h2>
                        <div className="ld-rule" />
                        <p className="ld-founder-bio">
                            Backed by over 40 years of hands-on industry experience,
                            Mr. Anil Bhardwaj founded Indian Engineering Company in 1998.
                            Under his leadership, IEC has grown to become one of Gujarat's
                            largest and most trusted heavy industrial repair facilities,
                            serving leading private and government clients across the country.
                        </p>
                        <p className="ld-founder-bio" style={{ marginTop: '1.25rem' }}>
                            His vision of keeping critical industrial machines running —
                            with zero compromise on quality, and full in-house capability —
                            defines every repair IEC undertakes.
                        </p>
                        <div className="ld-founder-stats">
                            <div className="ld-f-stat">
                                <span className="ld-f-stat-num">40<sup>+</sup></span>
                                <span className="ld-f-stat-label">Years Experience</span>
                            </div>
                            <div className="ld-f-stat-sep" />
                            <div className="ld-f-stat">
                                <span className="ld-f-stat-num">1998</span>
                                <span className="ld-f-stat-label">Year Founded</span>
                            </div>
                            <div className="ld-f-stat-sep" />
                            <div className="ld-f-stat">
                                <span className="ld-f-stat-num">ISO</span>
                                <span className="ld-f-stat-label">9001 Certified</span>
                            </div>
                        </div>
                    </div>
                    <div className="ld-founder-right">
                        <img src={imgFounderPanel} alt="IEC workshop rotor" className="ld-founder-img" />
                        <div className="ld-founder-img-label">
                            <span>IEC Vadodara Works</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Craft Strip ── */}
            <section className="ld-craft">
                <div className="container">
                    <div className="ld-craft-grid">
                        {[
                            { num: '500+', label: 'Machines Repaired Annually', sub: 'HT motors, generators, alternators' },
                            { num: '300K', label: 'Sq.ft Workshop Campus', sub: 'Fully in-house, Ranoli, Vadodara' },
                            { num: '26+', label: 'Years of Operation', sub: 'Consistently growing since 1998' },
                        ].map((stat, i) => (
                            <div key={i} className="ld-c-stat ld-reveal" ref={r} style={{ transitionDelay: `${i * 0.12}s` }}>
                                <span className="ld-c-num">{stat.num}</span>
                                <span className="ld-c-label">{stat.label}</span>
                                <span className="ld-c-sub">{stat.sub}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Team Section ── */}
            <section className="ld-team">
                <div className="container">
                    <div className="ld-team-head ld-reveal" ref={r}>
                        <span className="ld-eyebrow ld-eyebrow--dark">02 / Our Experts</span>
                        <h2 className="ld-team-title">The Team Behind<br />Every Repair</h2>
                    </div>
                    <div className="ld-team-grid">
                        {[
                            { role: 'Technical Director', img: imgTeam1, desc: 'Overseeing all high-voltage repair processes and technical standards across the facility.' },
                            { role: 'Operations Head', img: imgTeam2, desc: 'Managing workflow, scheduling, and the coordination of 300,000 sq.ft of workshop capacity.' },
                            { role: 'Quality Assurance Lead', img: imgTeam3, desc: 'Ensuring every machine leaving IEC meets ISO 9001 and EASA international standards.' },
                        ].map((member, i) => (
                            <div key={i} className="ld-team-card ld-reveal" ref={r} style={{ transitionDelay: `${i * 0.1}s` }}>
                                <div className="ld-team-photo">
                                    <img src={member.img} alt={member.role} />
                                    <div className="ld-team-fog" />
                                    <div className="ld-team-info">
                                        <span className="ld-team-role">{member.role}</span>
                                        <span className="ld-team-coming">Profile Coming Soon</span>
                                    </div>
                                </div>
                                <div className="ld-team-body">
                                    <p className="ld-team-desc">{member.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Band ── */}
            <section className="ld-cta">
                <div className="ld-cta-bg">
                    <img src={imgCta} alt="" />
                    <div className="ld-cta-overlay" />
                </div>
                <div className="container ld-cta-inner ld-reveal" ref={r}>
                    <div className="ld-cta-text">
                        <span className="ld-eyebrow">03 / Join The Team</span>
                        <h2 className="ld-cta-title">Work Alongside<br />Our Experts</h2>
                        <p className="ld-cta-sub">India's leading industrial motor repair facility is hiring.</p>
                    </div>
                    <Link to="/careers" className="btn-premium">
                        View Open Positions
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                </div>
            </section>

            <style>{`
                .ld-page { min-height: 100vh; }

                /* ── Reveal animation ── */
                .ld-reveal {
                    opacity: 0;
                    transform: translateY(22px);
                    transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1),
                                transform 0.65s cubic-bezier(0.16,1,0.3,1);
                }
                .ld-reveal.ld-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                /* ── Eyebrow ── */
                .ld-eyebrow {
                    display: block;
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.16em;
                    color: var(--color-accent);
                    margin-bottom: var(--space-lg);
                }
                .ld-eyebrow--dark {
                    color: var(--color-accent);
                }

                /* ── Founder Section ── */
                .ld-founder {
                    background: var(--color-primary);
                    overflow: hidden;
                }
                .ld-founder-inner {
                    display: grid;
                    grid-template-columns: 52% 48%;
                    min-height: 560px;
                }
                .ld-founder-left {
                    padding: var(--space-5xl) var(--space-4xl) var(--space-5xl) max(var(--space-3xl), calc((100vw - 1200px)/2 + var(--space-3xl)));
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .ld-founder-name {
                    font-family: var(--font-display);
                    font-size: clamp(2.5rem, 4vw, 4rem);
                    font-weight: 300;
                    letter-spacing: -0.03em;
                    color: var(--color-white);
                    line-height: 1.1;
                    margin-bottom: var(--space-xl);
                }
                .ld-rule {
                    width: 40px;
                    height: 1px;
                    background: var(--color-accent);
                    margin-bottom: var(--space-xl);
                }
                .ld-founder-bio {
                    font-size: 1rem;
                    line-height: 1.85;
                    color: rgba(255,255,255,0.62);
                    max-width: 480px;
                }
                .ld-founder-stats {
                    display: flex;
                    align-items: center;
                    gap: var(--space-2xl);
                    margin-top: var(--space-3xl);
                    padding-top: var(--space-2xl);
                    border-top: 1px solid rgba(255,255,255,0.1);
                }
                .ld-f-stat { display: flex; flex-direction: column; gap: 4px; }
                .ld-f-stat-num {
                    font-family: var(--font-mono);
                    font-size: 1.375rem;
                    font-weight: 500;
                    color: var(--color-white);
                    letter-spacing: -0.02em;
                }
                .ld-f-stat-num sup { font-size: 0.65em; }
                .ld-f-stat-label {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: rgba(255,255,255,0.38);
                }
                .ld-f-stat-sep {
                    width: 1px;
                    height: 36px;
                    background: rgba(255,255,255,0.12);
                }

                /* Founder right photo */
                .ld-founder-right {
                    position: relative;
                    overflow: hidden;
                }
                .ld-founder-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    filter: grayscale(40%) brightness(0.7) contrast(1.05);
                    transition: filter 0.6s ease;
                }
                .ld-founder-right:hover .ld-founder-img {
                    filter: grayscale(15%) brightness(0.75) contrast(1.05);
                }
                .ld-founder-img-label {
                    position: absolute;
                    bottom: var(--space-xl);
                    left: var(--space-xl);
                    background: rgba(17,17,20,0.78);
                    padding: 6px 14px;
                }
                .ld-founder-img-label span {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: rgba(255,255,255,0.55);
                }

                /* ── Craft Strip ── */
                .ld-craft {
                    background: var(--color-dark);
                    border-top: 1px solid rgba(255,255,255,0.06);
                    border-bottom: 1px solid rgba(255,255,255,0.06);
                    padding: var(--space-3xl) 0;
                }
                .ld-craft-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 0;
                }
                .ld-c-stat {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    padding: var(--space-2xl) var(--space-3xl);
                    border-right: 1px solid rgba(255,255,255,0.07);
                }
                .ld-c-stat:last-child { border-right: none; }
                .ld-c-num {
                    font-family: var(--font-mono);
                    font-size: 2.25rem;
                    font-weight: 500;
                    color: var(--color-white);
                    letter-spacing: -0.03em;
                    line-height: 1;
                }
                .ld-c-label {
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: var(--color-white);
                    margin-top: 4px;
                }
                .ld-c-sub {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: rgba(255,255,255,0.35);
                }

                /* ── Team Section ── */
                .ld-team {
                    background: var(--color-white);
                    padding: var(--space-5xl) 0;
                }
                .ld-team-head {
                    margin-bottom: var(--space-4xl);
                }
                .ld-team-title {
                    font-family: var(--font-display);
                    font-size: clamp(2rem, 3.5vw, 3rem);
                    font-weight: 300;
                    letter-spacing: -0.025em;
                    color: var(--color-text);
                    line-height: 1.15;
                    margin-top: var(--space-md);
                }
                .ld-team-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: var(--space-xl);
                }
                .ld-team-card {
                    display: flex;
                    flex-direction: column;
                    border: 1px solid var(--color-border);
                    overflow: hidden;
                    transition: transform 0.3s var(--ease-out), box-shadow 0.3s var(--ease-out);
                }
                .ld-team-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 20px 48px rgba(0,0,0,0.12);
                }
                .ld-team-photo {
                    position: relative;
                    aspect-ratio: 4/3;
                    overflow: hidden;
                }
                .ld-team-photo img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(80%) brightness(0.65) contrast(1.1);
                    transition: filter 0.5s ease, transform 0.5s ease;
                }
                .ld-team-card:hover .ld-team-photo img {
                    filter: grayscale(50%) brightness(0.72) contrast(1.05);
                    transform: scale(1.04);
                }
                .ld-team-fog {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(17,17,20,0.85) 0%, transparent 55%);
                }
                .ld-team-info {
                    position: absolute;
                    bottom: 0; left: 0; right: 0;
                    padding: var(--space-xl);
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }
                .ld-team-role {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    color: var(--color-accent);
                }
                .ld-team-coming {
                    font-size: 0.9375rem;
                    font-weight: 500;
                    color: var(--color-white);
                }
                .ld-team-body {
                    padding: var(--space-lg) var(--space-xl);
                    background: var(--color-white);
                    flex: 1;
                }
                .ld-team-desc {
                    font-size: 0.875rem;
                    line-height: 1.7;
                    color: var(--color-text-light);
                }

                /* ── CTA Band ── */
                .ld-cta {
                    position: relative;
                    overflow: hidden;
                    background: var(--color-primary);
                    padding: var(--space-5xl) 0;
                }
                .ld-cta-bg {
                    position: absolute;
                    inset: 0;
                }
                .ld-cta-bg img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(100%) brightness(0.22) contrast(1.2);
                }
                .ld-cta-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(105deg, rgba(17,17,20,0.92) 0%, rgba(17,17,20,0.65) 100%);
                }
                .ld-cta-inner {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: var(--space-3xl);
                }
                .ld-cta-title {
                    font-family: var(--font-display);
                    font-size: clamp(2rem, 3.5vw, 3rem);
                    font-weight: 300;
                    letter-spacing: -0.025em;
                    color: var(--color-white);
                    line-height: 1.15;
                    margin-top: var(--space-md);
                    margin-bottom: 0;
                }
                .ld-cta-sub {
                    font-size: 0.9375rem;
                    color: rgba(255,255,255,0.5);
                    margin-top: var(--space-md);
                }

                /* Mobile */
                @media (max-width: 900px) {
                    .ld-founder-inner { grid-template-columns: 1fr; }
                    .ld-founder-right { min-height: 280px; }
                    .ld-founder-left { padding: var(--space-3xl) var(--space-xl); }
                    .ld-craft-grid { grid-template-columns: 1fr; }
                    .ld-c-stat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); }
                    .ld-team-grid { grid-template-columns: 1fr; }
                    .ld-cta-inner { flex-direction: column; align-items: flex-start; }
                }

                @media (max-width: 600px) {
                    .ld-founder-stats { flex-wrap: wrap; gap: var(--space-xl); }
                    .ld-f-stat-sep { display: none; }
                }
            `}</style>
        </div>
    );
};

export default Leadership;
