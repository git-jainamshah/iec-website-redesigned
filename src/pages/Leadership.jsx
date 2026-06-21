import React from 'react';
import PageHero from '../components/PageHero';

const leaders = [
    {
        name: 'Mr. Anil Bhardwaj',
        role: 'Founder & Managing Director',
        bio: 'Backed by over 40 years of industry experience, Mr. Anil Bhardwaj founded Indian Engineering Company in 1998. Under his leadership, IEC has grown to become one of Gujarat\'s largest and most trusted heavy industrial repair facilities, serving leading private and government clients across the country.',
        featured: true,
    },
    {
        name: 'Coming Soon',
        role: 'Technical Director',
        bio: '',
        featured: false,
    },
    {
        name: 'Coming Soon',
        role: 'Operations Head',
        bio: '',
        featured: false,
    },
    {
        name: 'Coming Soon',
        role: 'Quality Assurance',
        bio: '',
        featured: false,
    },
];

const Leadership = () => {
    const featured = leaders.find(l => l.featured);
    const team = leaders.filter(l => !l.featured);

    return (
        <div className="leadership-page">
            <PageHero
                label="Our People"
                title="Leadership"
                subtitle="Meet the team driving India's industrial engineering excellence."
                breadcrumbs={[{ label: 'Leadership' }]}
            />

            {/* Featured Leader */}
            <section className="section">
                <div className="container">
                    {featured && (
                        <div className="featured-leader">
                            <div className="featured-image">
                                <div className="image-placeholder">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </div>
                            </div>
                            <div className="featured-info">
                                <span className="leader-role-tag">{featured.role}</span>
                                <h2 className="display-title">{featured.name}</h2>
                                <div className="divider" style={{ margin: 'var(--space-lg) 0' }} />
                                <p>{featured.bio}</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Team Grid */}
            <section className="section bg-light">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
                        <span className="label text-accent">The Team</span>
                        <h2 style={{ marginTop: 'var(--space-md)' }}>Our Experts</h2>
                    </div>
                    <div className="team-grid">
                        {team.map((person, i) => (
                            <div key={i} className="team-card">
                                <div className="team-image">
                                    <div className="image-placeholder">
                                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <span className="leader-role-tag">{person.role}</span>
                                    <h3>{person.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                .leadership-page {
                    min-height: 100vh;
                }

                /* Featured leader */
                .featured-leader {
                    display: grid;
                    grid-template-columns: 320px 1fr;
                    gap: var(--space-3xl);
                    align-items: center;
                }

                .featured-image {
                    aspect-ratio: 3/4;
                    background: var(--color-cream);
                    border-radius: 8px;
                    overflow: hidden;
                }

                .image-placeholder {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-muted);
                }

                .featured-info .display-title {
                    color: var(--color-text);
                    font-size: clamp(1.75rem, 3vw, 2.5rem);
                }

                .featured-info p {
                    font-size: 1.0625rem;
                    line-height: 1.85;
                }

                .leader-role-tag {
                    display: inline-block;
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-accent);
                    margin-bottom: var(--space-sm);
                }

                /* Team grid */
                .team-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: var(--space-2xl);
                }

                .team-card {
                    background: var(--color-white);
                    border: 1px solid var(--color-border);
                    border-radius: 8px;
                    overflow: hidden;
                    transition: all 0.3s var(--ease-out);
                }

                .team-card:hover {
                    box-shadow: var(--shadow-lg);
                    transform: translateY(-4px);
                }

                .team-image {
                    aspect-ratio: 1;
                    background: var(--color-cream);
                }

                .team-info {
                    padding: var(--space-xl);
                }

                .team-info h3 {
                    font-size: 1.125rem;
                    font-weight: 600;
                    margin-bottom: 0;
                }

                @media (max-width: 900px) {
                    .featured-leader {
                        grid-template-columns: 1fr;
                        gap: var(--space-xl);
                    }

                    .featured-image {
                        aspect-ratio: 16/9;
                        max-height: 280px;
                    }

                    .team-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default Leadership;
