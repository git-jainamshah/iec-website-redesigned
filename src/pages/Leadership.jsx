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
            <section className="ld-leader ld-leader--dark">
                <div className="ld-leader-inner">
                    {/* Text LEFT, photo RIGHT */}
                    <div className="ld-leader-text ld-reveal" ref={r}>
                        <span className="ld-eyebrow">01 / Founder</span>
                        <h2 className="ld-leader-name">Late Anil<br />Bhardwaj</h2>
                        <div className="ld-rule" />
                        <p className="ld-leader-bio">
                            Backed by over 40 years of hands-on industry experience,
                            Late Anil Bhardwaj founded Indian Engineering Company in 1998.
                            Under his leadership, IEC grew to become one of Gujarat's largest
                            and most trusted heavy industrial repair facilities, serving leading
                            private and government clients across the country.
                        </p>
                        <p className="ld-leader-bio" style={{ marginTop: '1rem' }}>
                            His vision of keeping critical industrial machines running,
                            with zero compromise on quality and full in-house capability,
                            defines every repair IEC undertakes to this day.
                        </p>

                        {/* Quote */}
                        <blockquote className="ld-quote">
                            <span className="ld-quote-mark">"</span>
                            <p className="ld-quote-text">We built IEC on one principle: send every machine back better than it came in, or not at all.</p>
                            <cite className="ld-quote-cite">Late Anil Bhardwaj, Founder</cite>
                        </blockquote>

                        {/* Signature — Reenie Beanie + pen-texture displacement filter */}
                        <div className="ld-sig">
                            <svg viewBox="0 0 240 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="ld-sig-svg ld-sig-svg--wide" aria-label="A. Bhardwaj signature">
                                <defs>
                                    <filter id="pen-f" x="-4%" y="-25%" width="108%" height="150%">
                                        <feTurbulence type="fractalNoise" baseFrequency="0.75 0.55" numOctaves="4" seed="3" result="noise"/>
                                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
                                    </filter>
                                </defs>
                                <text x="4" y="48" fontFamily="'Reenie Beanie', cursive" fontSize="46" fill="rgba(255,255,255,0.72)" letterSpacing="1" filter="url(#pen-f)">A. Bhardwaj</text>
                                <line x1="4" y1="59" x2="208" y2="59" stroke="rgba(255,255,255,0.15)" strokeWidth="0.75"/>
                            </svg>
                        </div>

                        {/* Stats */}
                        <div className="ld-leader-stats">
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
                                <span className="ld-f-stat-num">EASA</span>
                                <span className="ld-f-stat-label">Certified Member</span>
                            </div>
                        </div>
                    </div>

                    {/* Placeholder — replace background-image with actual photo URL when available */}
                    <div className="ld-leader-photo">
                        <div className="ld-ph ld-ph--dark">
                            <svg className="ld-ph-silhouette" viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <ellipse cx="100" cy="82" rx="52" ry="60" fill="rgba(255,255,255,0.055)"/>
                                <path d="M8 260 C8 168 46 134 100 128 C154 134 192 168 192 260 Z" fill="rgba(255,255,255,0.04)"/>
                            </svg>
                        </div>
                        <div className="ld-nameplate ld-nameplate--dark">
                            <span className="ld-nameplate-name">Late Anil Bhardwaj</span>
                            <span className="ld-nameplate-title">Founder, Indian Engineering Company</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Message from CEO ── */}
            <section className="ld-leader ld-leader--light">
                <div className="ld-leader-inner ld-leader-inner--flip">
                    {/* Placeholder — replace with actual CEO photo when available */}
                    <div className="ld-leader-photo">
                        <div className="ld-ph ld-ph--warm">
                            <svg className="ld-ph-silhouette" viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <ellipse cx="100" cy="82" rx="52" ry="60" fill="rgba(255,255,255,0.06)"/>
                                <path d="M8 260 C8 168 46 134 100 128 C154 134 192 168 192 260 Z" fill="rgba(255,255,255,0.045)"/>
                            </svg>
                        </div>
                        <div className="ld-nameplate ld-nameplate--dark">
                            <span className="ld-nameplate-name">Mrs. Arpana Bharadwaj</span>
                            <span className="ld-nameplate-title">Director &amp; CEO, Indian Engineering Company</span>
                        </div>
                    </div>

                    <div className="ld-leader-text ld-reveal" ref={r}>
                        <span className="ld-eyebrow ld-eyebrow--dark">02 / Message from CEO</span>
                        <h2 className="ld-leader-name ld-leader-name--light">Mrs. Arpana<br />Bharadwaj</h2>
                        <div className="ld-rule ld-rule--accent" />
                        <p className="ld-leader-bio ld-leader-bio--light">
                            Building on the legacy left by IEC's founder, I am committed to ensuring that Indian
                            Engineering Company remains the benchmark for heavy industrial repair across India.
                            Under our stewardship, IEC continues to serve power generation, cement, and
                            petrochemical industries with the same rigour and in-house capability that defined us.
                        </p>
                        <p className="ld-leader-bio ld-leader-bio--light" style={{ marginTop: '1rem' }}>
                            Our founding commitment to technical excellence, honest workmanship, and
                            zero-compromise quality is not a heritage we preserve; it is a standard we
                            raise with every project we undertake.
                        </p>

                        {/* Signature — Over the Rainbow + pen-texture displacement filter */}
                        <div className="ld-sig">
                            <svg viewBox="0 0 310 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="ld-sig-svg ld-sig-svg--xl" aria-label="Arpana Bhardwaj signature">
                                <defs>
                                    <filter id="pen-c" x="-4%" y="-25%" width="108%" height="150%">
                                        <feTurbulence type="fractalNoise" baseFrequency="0.6 0.45" numOctaves="3" seed="7" result="noise"/>
                                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.6" xChannelSelector="R" yChannelSelector="G"/>
                                    </filter>
                                </defs>
                                <text x="4" y="46" fontFamily="'Over the Rainbow', cursive" fontSize="34" fill="rgba(17,17,20,0.62)" letterSpacing="0.5" filter="url(#pen-c)">Arpana Bhardwaj</text>
                                <line x1="4" y1="58" x2="280" y2="58" stroke="rgba(17,17,20,0.15)" strokeWidth="0.75"/>
                            </svg>
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
                            { num: '300K', label: 'Sq.ft Workshop Campus', sub: 'Fully in-house, Ranoli, Gujarat' },
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
                        <span className="ld-eyebrow ld-eyebrow--dark">03 / Our Experts</span>
                        <h2 className="ld-team-title">The Team Behind<br />Every Repair</h2>
                    </div>
                    <div className="ld-team-grid">
                        {[
                            { name: 'Mr. Kush Bhardwaj',    title: 'Director' },
                            { name: 'Mr. Jatin Shah',       title: 'Managing Director' },
                            { name: 'Mr. Jitu Shah',        title: 'Marketing' },
                            { name: 'Mr. A.D. Kokje',       title: 'Technical Advisor' },
                            { name: 'Mr. K.H. Mehta',       title: 'Technical Advisor' },
                            { name: 'Mr. C.N. Dandiwala',   title: 'Technical Advisor' },
                        ].map((member, i) => (
                            <div key={i} className="ld-team-card ld-reveal" ref={r} style={{ transitionDelay: `${i * 0.07}s` }}>
                                {/* Person silhouette placeholder */}
                                <div className="ld-team-photo">
                                    <svg className="ld-team-sil" viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <ellipse cx="80" cy="65" rx="38" ry="44" fill="rgba(255,255,255,0.055)"/>
                                        <path d="M4 200 C4 130 36 104 80 100 C124 104 156 130 156 200 Z" fill="rgba(255,255,255,0.04)"/>
                                    </svg>
                                    <div className="ld-team-fog" />
                                    <div className="ld-team-info">
                                        <span className="ld-team-title-tag">{member.title}</span>
                                        <span className="ld-team-name">{member.name}</span>
                                    </div>
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
                        <span className="ld-eyebrow">04 / Join The Team</span>
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
                @import url('https://fonts.googleapis.com/css2?family=Reenie+Beanie&family=Over+the+Rainbow&family=Homemade+Apple&display=swap');

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

                /* ── Shared Leader Section ── */
                .ld-leader { overflow: hidden; }
                .ld-leader--dark { background: var(--color-primary); }
                .ld-leader--light { background: var(--color-white); border-top: 1px solid var(--color-border); }

                .ld-leader-inner {
                    display: grid;
                    grid-template-columns: 52% 48%;
                    min-height: 620px;
                }
                /* Flip: photo first for CEO */
                .ld-leader-inner--flip { grid-template-columns: 48% 52%; }

                /* Text column */
                .ld-leader-text {
                    padding: var(--space-5xl) var(--space-4xl);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                /* Founder text uses edge padding */
                .ld-leader--dark .ld-leader-text {
                    padding-left: max(var(--space-3xl), calc((100vw - 1200px)/2 + var(--space-3xl)));
                }
                /* CEO text: right column, pad right edge */
                .ld-leader--light .ld-leader-text {
                    padding-right: max(var(--space-3xl), calc((100vw - 1200px)/2 + var(--space-3xl)));
                }

                /* Names */
                .ld-leader-name {
                    font-family: var(--font-display);
                    font-size: clamp(2.5rem, 4vw, 4rem);
                    font-weight: 300;
                    letter-spacing: -0.03em;
                    color: var(--color-white);
                    line-height: 1.05;
                    margin-bottom: var(--space-xl);
                }
                .ld-leader-name--light { color: var(--color-text); }

                /* Rule */
                .ld-rule { width: 40px; height: 1px; background: var(--color-accent); margin-bottom: var(--space-xl); }
                .ld-rule--accent { background: var(--color-accent); }

                /* Bios */
                .ld-leader-bio {
                    font-size: 1rem; line-height: 1.85;
                    color: rgba(255,255,255,0.6); max-width: 500px;
                }
                .ld-leader-bio--light { color: var(--color-text-light); }

                /* Pull quote */
                .ld-quote {
                    margin: var(--space-2xl) 0 var(--space-xl);
                    padding: var(--space-xl) var(--space-xl) var(--space-xl) var(--space-2xl);
                    border-left: 2px solid rgba(200,16,46,0.4);
                    background: rgba(255,255,255,0.03);
                    position: relative;
                }
                .ld-quote-mark {
                    position: absolute;
                    top: -4px; left: 12px;
                    font-family: Georgia, serif;
                    font-size: 3.5rem;
                    line-height: 1;
                    color: rgba(200,16,46,0.25);
                    font-style: normal;
                    pointer-events: none;
                }
                .ld-quote-text {
                    font-family: 'Homemade Apple', cursive;
                    font-size: 0.9rem;
                    font-style: normal;
                    font-weight: 400;
                    color: rgba(255,255,255,0.78);
                    line-height: 2.0;
                    letter-spacing: 0.01em;
                    margin-bottom: var(--space-md);
                }
                .ld-quote-cite {
                    display: block;
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    font-style: normal;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    color: rgba(255,255,255,0.3);
                }

                /* Signature */
                .ld-sig { margin: var(--space-xl) 0 var(--space-md); }
                .ld-sig-svg { width: 230px; height: 64px; display: block; overflow: visible; }
                .ld-sig-svg--wide { width: 260px; }
                .ld-sig-svg--xl { width: 310px; }

                /* Stats */
                .ld-leader-stats {
                    display: flex; align-items: center; gap: var(--space-2xl);
                    margin-top: var(--space-xl); padding-top: var(--space-xl);
                    border-top: 1px solid rgba(255,255,255,0.1);
                }
                .ld-f-stat { display: flex; flex-direction: column; gap: 4px; }
                .ld-f-stat-num { font-family: var(--font-mono); font-size: 1.375rem; font-weight: 500; color: var(--color-white); letter-spacing: -0.02em; }
                .ld-f-stat-num sup { font-size: 0.65em; }
                .ld-f-stat-label { font-family: var(--font-mono); font-size: 0.5625rem; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.35); }
                .ld-f-stat-sep { width: 1px; height: 36px; background: rgba(255,255,255,0.1); }

                /* Photo column — person placeholder */
                .ld-leader-photo { position: relative; overflow: hidden; }

                /* Placeholder card — fills the entire photo column */
                .ld-ph {
                    width: 100%; height: 100%;
                    display: flex; align-items: center; justify-content: center;
                    min-height: 520px;
                }
                .ld-ph--dark {
                    background: linear-gradient(160deg, #1a1a1f 0%, #0e0e11 100%);
                }
                .ld-ph--warm {
                    background: linear-gradient(160deg, #1e1a1a 0%, #110e0e 100%);
                }
                .ld-ph-silhouette {
                    width: 52%; max-width: 210px; opacity: 0.45;
                }

                /* Nameplate — sits over bottom of photo column */
                .ld-nameplate {
                    position: absolute; bottom: 0; left: 0; right: 0;
                    padding: var(--space-3xl) var(--space-xl) var(--space-xl);
                    background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 100%);
                    display: flex; flex-direction: column; gap: 5px;
                }
                .ld-nameplate--dark .ld-nameplate-name,
                .ld-nameplate--dark .ld-nameplate-title { color: rgba(255,255,255,0.9); }
                .ld-nameplate-name {
                    font-family: var(--font-display);
                    font-size: 1.0625rem; font-weight: 400;
                    letter-spacing: -0.01em; color: rgba(255,255,255,0.9);
                }
                .ld-nameplate-title {
                    font-family: var(--font-mono);
                    font-size: 0.5625rem; font-weight: 500;
                    text-transform: uppercase; letter-spacing: 0.14em;
                    color: rgba(200,16,46,0.85);
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
                    gap: var(--space-lg);
                }
                .ld-team-card {
                    overflow: hidden;
                    border: 1px solid var(--color-border);
                    transition: transform 0.3s var(--ease-out), box-shadow 0.3s var(--ease-out);
                }
                .ld-team-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 16px 40px rgba(0,0,0,0.1);
                }
                .ld-team-photo {
                    position: relative;
                    aspect-ratio: 3/4;
                    background: linear-gradient(150deg, #1a1a1f 0%, #0d0d10 100%);
                    display: flex; align-items: center; justify-content: center;
                    overflow: hidden;
                }
                .ld-team-sil {
                    width: 58%; max-width: 120px; opacity: 0.4;
                    transition: opacity 0.4s;
                }
                .ld-team-card:hover .ld-team-sil { opacity: 0.55; }
                .ld-team-fog {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(17,17,20,0.92) 0%, transparent 45%);
                }
                .ld-team-info {
                    position: absolute;
                    bottom: 0; left: 0; right: 0;
                    padding: var(--space-lg) var(--space-xl);
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }
                .ld-team-title-tag {
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    color: var(--color-accent);
                }
                .ld-team-name {
                    font-family: var(--font-display);
                    font-size: 1rem;
                    font-weight: 400;
                    letter-spacing: -0.01em;
                    color: var(--color-white);
                    line-height: 1.25;
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
                    .ld-leader-inner,
                    .ld-leader-inner--flip { grid-template-columns: 1fr; }
                    /* On mobile, photo always comes first visually */
                    .ld-leader-inner--flip .ld-leader-photo { order: -1; }
                    .ld-leader-photo { min-height: 280px; }
                    .ld-leader-text { padding: var(--space-3xl) var(--space-xl) !important; }
                    .ld-craft-grid { grid-template-columns: 1fr; }
                    .ld-c-stat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); }
                    .ld-team-grid { grid-template-columns: repeat(2, 1fr); }
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
