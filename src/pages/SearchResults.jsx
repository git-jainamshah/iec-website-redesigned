import React, { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import PageHero from '../components/PageHero';

// Static content index for client-side search
const searchIndex = [
    {
        title: 'About Us',
        path: '/about',
        category: 'Company',
        content: 'Indian Engineering Company established 1998 trusted partner industrial motor generator repair ISO 9001 EASA certified 300000 sq ft facility Vadodara Gujarat India quality reliability precision 250MW capacity',
    },
    {
        title: 'Leadership',
        path: '/leadership',
        category: 'Company',
        content: 'Anil Patel Founder Managing Director leadership team technical director operations quality assurance 26 years experience industrial motor repair',
    },
    {
        title: 'Motors / Generators / Alternators / DC',
        path: '/services#motors',
        category: 'Services',
        content: 'HV motor rewinding generator overhaul alternator repair DC machine servicing stator rotor repairs bearing replacement high voltage 250MW capacity complete repair rewinding services',
    },
    {
        title: 'Industrial Pumps',
        path: '/services#pumps',
        category: 'Services',
        content: 'centrifugal pumps submersible pumps vertical turbine pumps slurry pumps impeller balancing seal replacement comprehensive pump maintenance repair refurbishment',
    },
    {
        title: 'Spare Parts',
        path: '/services#spares',
        category: 'Services',
        content: 'OEM spare parts bearings seals windings coils insulation materials cooling systems control components genuine parts technical support',
    },
    {
        title: 'Infrastructure',
        path: '/infrastructure',
        category: 'Facilities',
        content: 'HV coils making heating oven mechanical workshop dynamic balancing testing lab crane system 300000 sq ft 75000 shop floor 300 ton crane 5MW captive power state of the art facilities',
    },
    {
        title: 'Understanding High Voltage Motor Maintenance',
        path: '/blogs',
        category: 'Blog',
        content: 'essential maintenance practices high voltage motors optimal performance longevity preventive maintenance tips',
    },
    {
        title: 'The Future of Industrial Motor Repair',
        path: '/blogs',
        category: 'Blog',
        content: 'emerging technologies trends shaping industrial motor repair industry innovation future outlook',
    },
    {
        title: 'EASA Certification: What It Means for Your Equipment',
        path: '/blogs',
        category: 'Blog',
        content: 'EASA certification importance quality motor repair services accreditation standards international',
    },
    {
        title: 'Preventive Maintenance Strategies for Generators',
        path: '/blogs',
        category: 'Blog',
        content: 'prevent generator failures extend equipment lifespan proactive maintenance strategies key preventive plan',
    },
    {
        title: 'Contact Us',
        path: '/contact',
        category: 'Contact',
        content: 'get in touch contact repair project quote 613 GIDC Estate Ranoli Vadodara Gujarat phone +91 98242 14839 email anil@iecindia.co.in info@iecindia.co.in',
    },
    {
        title: 'Careers',
        path: '/careers',
        category: 'Company',
        content: 'join our team careers jobs open positions motor winding technician quality control engineer mechanical workshop supervisor growth opportunities Vadodara Gujarat',
    },
    {
        title: 'Privacy Policy',
        path: '/privacy',
        category: 'Legal',
        content: 'privacy policy data protection personal information cookies third party sharing rights GDPR compliance',
    },
    {
        title: 'Terms of Service',
        path: '/terms',
        category: 'Legal',
        content: 'terms of service acceptance intellectual property quotations pricing warranty limitation of liability governing law India',
    },
];

function highlightText(text, query) {
    if (!query) return text;
    const words = query.split(/\s+/).filter(Boolean);
    const regex = new RegExp(`(${words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
        regex.test(part) ? <mark key={i}>{part}</mark> : part
    );
}

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';

    const results = useMemo(() => {
        if (!query.trim()) return [];
        const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
        return searchIndex
            .map(item => {
                const searchable = `${item.title} ${item.content}`.toLowerCase();
                const score = terms.reduce((acc, term) => {
                    // Title matches are worth more
                    const titleMatch = item.title.toLowerCase().includes(term) ? 3 : 0;
                    const contentMatch = searchable.includes(term) ? 1 : 0;
                    return acc + titleMatch + contentMatch;
                }, 0);
                return { ...item, score };
            })
            .filter(item => item.score > 0)
            .sort((a, b) => b.score - a.score);
    }, [query]);

    return (
        <div className="search-page">
            <PageHero
                label="Search"
                title={query ? `Results for "${query}"` : 'Search'}
                subtitle={
                    query
                        ? `${results.length} result${results.length !== 1 ? 's' : ''} found`
                        : 'Enter a search term to explore our site.'
                }
                breadcrumbs={[{ label: 'Search' }]}
            />

            <section className="section">
                <div className="container">
                    {results.length > 0 ? (
                        <div className="search-results">
                            {results.map((item, i) => (
                                <Link
                                    key={i}
                                    to={item.path}
                                    className="search-result-card"
                                >
                                    <div className="search-result-meta">
                                        <span className="search-result-category">{item.category}</span>
                                    </div>
                                    <h3 className="search-result-title">
                                        {highlightText(item.title, query)}
                                    </h3>
                                    <p className="search-result-excerpt">
                                        {item.content.substring(0, 160)}...
                                    </p>
                                    <span className="search-result-link">
                                        View Page →
                                    </span>
                                </Link>
                            ))}
                        </div>
                    ) : query ? (
                        <div className="search-empty">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-muted)" strokeWidth="1.5">
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.35-4.35" />
                            </svg>
                            <h3>No results found</h3>
                            <p>We couldn't find anything matching "{query}". Try different keywords or browse our pages:</p>
                            <div className="search-suggestions">
                                <Link to="/services" className="btn btn-outline">Our Services</Link>
                                <Link to="/about" className="btn btn-outline">About Us</Link>
                                <Link to="/contact" className="btn btn-outline">Contact</Link>
                            </div>
                        </div>
                    ) : (
                        <div className="search-empty">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-muted)" strokeWidth="1.5">
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.35-4.35" />
                            </svg>
                            <h3>Search our site</h3>
                            <p>Use the search bar above to find services, blogs, and more.</p>
                        </div>
                    )}
                </div>
            </section>

            <style>{`
                .search-page {
                    min-height: 100vh;
                }

                .search-results {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-md);
                }

                .search-result-card {
                    display: block;
                    padding: var(--space-xl) var(--space-2xl);
                    background: var(--color-white);
                    border: 1px solid var(--color-border);
                    border-radius: 6px;
                    transition: all 0.3s var(--ease-out);
                    text-decoration: none;
                }

                .search-result-card:hover {
                    border-color: var(--color-text);
                    box-shadow: var(--shadow-md);
                    transform: translateY(-2px);
                }

                .search-result-meta {
                    margin-bottom: var(--space-sm);
                }

                .search-result-category {
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: var(--color-accent);
                    padding: 3px 10px;
                    background: rgba(200, 16, 46, 0.06);
                    border-radius: 3px;
                }

                .search-result-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: var(--color-text);
                    margin-bottom: var(--space-sm);
                }

                .search-result-title mark {
                    background: rgba(200, 16, 46, 0.12);
                    color: var(--color-accent);
                    padding: 0 2px;
                    border-radius: 2px;
                }

                .search-result-excerpt {
                    font-size: 0.9375rem;
                    line-height: 1.6;
                    color: var(--color-text-light);
                    margin-bottom: var(--space-md);
                }

                .search-result-link {
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--color-accent);
                }

                /* Empty state */
                .search-empty {
                    text-align: center;
                    padding: var(--space-4xl) var(--space-xl);
                }

                .search-empty svg {
                    margin-bottom: var(--space-lg);
                }

                .search-empty h3 {
                    font-size: 1.5rem;
                    margin-bottom: var(--space-sm);
                }

                .search-empty p {
                    font-size: 1rem;
                    max-width: 440px;
                    margin: 0 auto var(--space-xl);
                    line-height: 1.7;
                }

                .search-suggestions {
                    display: flex;
                    gap: var(--space-md);
                    justify-content: center;
                    flex-wrap: wrap;
                }
            `}</style>
        </div>
    );
};

export default SearchResults;
