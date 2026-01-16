import React from 'react';
import { Link } from 'react-router-dom';

const blogs = [
    {
        id: 1,
        title: 'Understanding High Voltage Motor Maintenance',
        excerpt: 'Learn the essential maintenance practices for high voltage motors to ensure optimal performance and longevity.',
        date: 'January 15, 2024',
        category: 'Maintenance',
        readTime: '5 min read'
    },
    {
        id: 2,
        title: 'The Future of Industrial Motor Repair',
        excerpt: 'Exploring emerging technologies and trends shaping the industrial motor repair industry.',
        date: 'January 10, 2024',
        category: 'Industry',
        readTime: '7 min read'
    },
    {
        id: 3,
        title: 'EASA Certification: What It Means for Your Equipment',
        excerpt: 'Understanding the importance of EASA certification and how it ensures quality in motor repair services.',
        date: 'January 5, 2024',
        category: 'Certification',
        readTime: '4 min read'
    },
    {
        id: 4,
        title: 'Preventive Maintenance Strategies for Generators',
        excerpt: 'Key strategies to prevent generator failures and extend equipment lifespan through proactive maintenance.',
        date: 'December 28, 2023',
        category: 'Maintenance',
        readTime: '6 min read'
    }
];

const Blogs = () => {
    return (
        <section className="blogs section">
            <div className="container">
                <div className="blogs-header">
                    <div className="blogs-header-left">
                        <span className="label">Insights</span>
                        <h2 className="display-title">
                            Latest <em>articles.</em>
                        </h2>
                    </div>
                    <div className="blogs-header-right">
                        <Link to="/blogs" className="blogs-view-all">
                            View All Articles
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className="blogs-grid">
                    {blogs.map(blog => (
                        <article key={blog.id} className="blog-card">
                            <div className="blog-card-header">
                                <span className="blog-category">{blog.category}</span>
                                <span className="blog-read-time">{blog.readTime}</span>
                            </div>
                            <h3 className="blog-title">
                                <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                            </h3>
                            <p className="blog-excerpt">{blog.excerpt}</p>
                            <div className="blog-card-footer">
                                <span className="blog-date">{blog.date}</span>
                                <Link to={`/blogs/${blog.id}`} className="blog-read-more">
                                    Read More
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <style>{`
                .blogs {
                    background: var(--color-white);
                    padding: var(--space-3xl) 0;
                }

                .blogs-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    gap: var(--space-2xl);
                    margin-bottom: var(--space-3xl);
                    padding-bottom: var(--space-xl);
                    border-bottom: 1px solid var(--color-border);
                }

                .blogs-header-left {
                    flex: 1;
                }

                .blogs-header-left .label {
                    display: block;
                    margin-bottom: var(--space-sm);
                }

                .blogs-header-right {
                    flex-shrink: 0;
                }

                .blogs-view-all {
                    display: inline-flex;
                    align-items: center;
                    gap: var(--space-sm);
                    font-size: 0.8125rem;
                    font-weight: 600;
                    color: var(--color-text);
                    padding: 10px 20px;
                    border: 1px solid var(--color-border);
                    border-radius: 4px;
                    transition: all 0.3s var(--ease-out);
                }

                .blogs-view-all:hover {
                    color: var(--color-white);
                    background: var(--color-text);
                    border-color: var(--color-text);
                    gap: var(--space-md);
                }

                .blogs-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: var(--space-2xl);
                }

                .blog-card {
                    display: flex;
                    flex-direction: column;
                    padding: var(--space-xl);
                    border: 1px solid var(--color-border);
                    border-radius: 8px;
                    transition: all 0.3s var(--ease-out);
                }

                .blog-card:hover {
                    box-shadow: var(--shadow-lg);
                    transform: translateY(-4px);
                    border-color: var(--color-text);
                }

                .blog-card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: var(--space-md);
                }

                .blog-category {
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: var(--color-accent);
                    padding: 4px 10px;
                    background: rgba(200, 16, 46, 0.08);
                    border-radius: 3px;
                }

                .blog-read-time {
                    font-size: 0.6875rem;
                    color: var(--color-muted);
                }

                .blog-title {
                    font-size: 1.125rem;
                    font-weight: 600;
                    line-height: 1.4;
                    margin-bottom: var(--space-sm);
                }

                .blog-title a {
                    color: var(--color-text);
                    transition: color 0.2s;
                }

                .blog-title a:hover {
                    color: var(--color-accent);
                }

                .blog-excerpt {
                    font-size: 0.9375rem;
                    line-height: 1.7;
                    color: var(--color-text-light);
                    margin-bottom: var(--space-lg);
                    flex: 1;
                }

                .blog-card-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: var(--space-md);
                    border-top: 1px solid var(--color-border);
                }

                .blog-date {
                    font-size: 0.8125rem;
                    color: var(--color-muted);
                }

                .blog-read-more {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--color-accent);
                    transition: all 0.2s;
                }

                .blog-read-more:hover {
                    gap: 8px;
                    color: var(--color-accent-hover);
                }

                .blog-read-more svg {
                    transition: transform 0.2s;
                }

                .blog-read-more:hover svg {
                    transform: translateX(3px);
                }

                @media (max-width: 1024px) {
                    .blogs-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .blogs {
                        padding: var(--space-3xl) 0;
                    }

                    .blogs-header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: var(--space-xl);
                    }

                    .blogs-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default Blogs;

