import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const openings = [
    {
        title: 'Senior Motor Winding Technician',
        department: 'Operations',
        type: 'Full-time',
        location: 'Vadodara, Gujarat',
        desc: 'Experienced technician for HV motor rewinding and stator/rotor repair work on machines up to 250MW.',
    },
    {
        title: 'Quality Control Engineer',
        department: 'Quality Assurance',
        type: 'Full-time',
        location: 'Vadodara, Gujarat',
        desc: 'Ensure all repair processes and outputs meet ISO 9001 and EASA standards through rigorous inspection and testing.',
    },
    {
        title: 'Mechanical Workshop Supervisor',
        department: 'Operations',
        type: 'Full-time',
        location: 'Vadodara, Gujarat',
        desc: 'Lead the mechanical workshop team, oversee precision machining, and coordinate repair schedules.',
    },
];

const Careers = () => {
    return (
        <div className="careers-page">
            <PageHero
                label="Join Our Team"
                title="Careers"
                subtitle="Build your career at India's leading industrial motor repair facility."
                breadcrumbs={[{ label: 'Careers' }]}
            />

            {/* Why IEC */}
            <section className="section">
                <div className="container">
                    <div className="careers-intro">
                        <div>
                            <span className="label text-accent">Why IEC</span>
                            <h2>Work with the best<br />in the industry.</h2>
                        </div>
                        <p>
                            At Indian Engineering Company, you'll work alongside experienced engineers
                            on challenging industrial projects. We offer competitive compensation,
                            continuous skill development, and the opportunity to work with cutting-edge
                            equipment in our state-of-the-art 300,000 sq.ft facility.
                        </p>
                    </div>

                    <div className="perks-grid">
                        {[
                            { icon: '📈', title: 'Growth', desc: 'Clear career progression and skill development programs' },
                            { icon: '🏗️', title: 'World-class Facility', desc: '300,000 sq.ft campus with modern equipment' },
                            { icon: '🤝', title: 'Expert Team', desc: 'Learn from 26+ years of industry experience' },
                            { icon: '⚡', title: 'Impactful Work', desc: 'Repair critical machinery for India\'s top industries' },
                        ].map((perk, i) => (
                            <div key={i} className="perk-card">
                                <span className="perk-icon">{perk.icon}</span>
                                <h4>{perk.title}</h4>
                                <p>{perk.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="section bg-light">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
                        <span className="label text-accent">Opportunities</span>
                        <h2 style={{ marginTop: 'var(--space-md)' }}>Open Positions</h2>
                    </div>

                    <div className="openings-list">
                        {openings.map((job, i) => (
                            <div key={i} className="job-card">
                                <div className="job-header">
                                    <div>
                                        <h3>{job.title}</h3>
                                        <div className="job-tags">
                                            <span>{job.department}</span>
                                            <span>{job.type}</span>
                                            <span>{job.location}</span>
                                        </div>
                                    </div>
                                    <Link to="/contact" className="btn btn-outline">Apply Now</Link>
                                </div>
                                <p className="job-desc">{job.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center" style={{ marginTop: 'var(--space-3xl)' }}>
                        <p style={{ marginBottom: 'var(--space-lg)', color: 'var(--color-text-light)' }}>
                            Don't see a role that fits? Send us your resume and we'll keep you in mind.
                        </p>
                        <Link to="/contact" className="btn btn-primary">
                            Contact Us
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            <style>{`
                .careers-page { min-height: 100vh; }

                .careers-intro {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-3xl);
                    align-items: center;
                    margin-bottom: var(--space-4xl);
                }

                .careers-intro h2 { line-height: 1.25; }

                .careers-intro p {
                    font-size: 1.0625rem;
                    line-height: 1.85;
                }

                .perks-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: var(--space-xl);
                }

                .perk-card {
                    text-align: center;
                    padding: var(--space-2xl) var(--space-lg);
                    border: 1px solid var(--color-border);
                    border-radius: 6px;
                    transition: all 0.3s var(--ease-out);
                }

                .perk-card:hover {
                    border-color: var(--color-accent);
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-md);
                }

                .perk-icon { font-size: 2rem; display: block; margin-bottom: var(--space-md); }
                .perk-card h4 { margin-bottom: var(--space-xs); font-weight: 600; }
                .perk-card p { font-size: 0.875rem; line-height: 1.6; }

                /* Jobs */
                .openings-list {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-md);
                }

                .job-card {
                    background: var(--color-white);
                    border: 1px solid var(--color-border);
                    border-radius: 6px;
                    padding: var(--space-xl) var(--space-2xl);
                    transition: all 0.3s var(--ease-out);
                }

                .job-card:hover {
                    box-shadow: var(--shadow-md);
                    border-color: var(--color-text);
                }

                .job-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: var(--space-lg);
                    margin-bottom: var(--space-sm);
                }

                .job-header h3 { font-size: 1.125rem; font-weight: 600; margin-bottom: 6px; }

                .job-tags {
                    display: flex;
                    gap: var(--space-sm);
                    flex-wrap: wrap;
                }

                .job-tags span {
                    font-size: 0.6875rem;
                    text-transform: uppercase;
                    letter-spacing: 0.06em;
                    color: var(--color-muted);
                    padding: 3px 10px;
                    background: var(--color-cream);
                    border-radius: 3px;
                }

                .job-desc {
                    font-size: 0.9375rem;
                    line-height: 1.65;
                }

                @media (max-width: 900px) {
                    .careers-intro { grid-template-columns: 1fr; gap: var(--space-xl); }
                    .perks-grid { grid-template-columns: repeat(2, 1fr); }
                    .job-header { flex-direction: column; }
                }

                @media (max-width: 600px) {
                    .perks-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </div>
    );
};

export default Careers;
