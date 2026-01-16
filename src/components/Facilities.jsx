import React from 'react';

const facilities = [
    {
        id: 'coils',
        title: 'HV Coils Making Facilities',
        description: 'State-of-the-art manufacturing facilities for high voltage coils with precision engineering and quality control.',
        imagePlaceholder: 'HV Coils Photo',
    },
    {
        id: 'oven',
        title: 'Oven For Heating',
        description: 'Advanced heating ovens for proper insulation and treatment of motor components.',
        imagePlaceholder: 'Heating Oven Photo',
    },
    {
        id: 'workshop',
        title: 'Mechanical Workshop',
        description: 'Comprehensive mechanical workshop equipped with modern machinery for all repair needs.',
        imagePlaceholder: 'Workshop Photo',
    },
    {
        id: 'balancing',
        title: 'Dynamic Balancing Machine',
        description: 'Precision balancing machines ensuring optimal performance and reduced vibration.',
        imagePlaceholder: 'Balancing Machine Photo',
    },
    {
        id: 'testing',
        title: 'Testing Facilities',
        description: 'Comprehensive testing capabilities with load trial up to 2 MW and no load trial up to 20 MW.',
        imagePlaceholder: 'Testing Facility Photo',
    },
];

const Facilities = () => {
    return (
        <section id="facilities" className="facilities-section section">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Our <span className="accent">Facilities</span></h2>
                    <p className="section-subtitle">
                        World-class infrastructure spanning 300,000 sq.ft with 75,000 sq.ft of shop floor
                    </p>
                </div>

                {/* Facilities Gallery */}
                <div className="facilities-gallery">
                    {facilities.map((facility, index) => (
                        <div 
                            key={facility.id}
                            id={facility.id}
                            className={`facility-card ${index === 0 ? 'featured' : ''}`}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Image Placeholder */}
                            <div className="facility-image-placeholder">
                                <div className="placeholder-icon">
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                        <circle cx="8.5" cy="8.5" r="1.5"/>
                                        <polyline points="21 15 16 10 5 21"/>
                                    </svg>
                                </div>
                                <span className="placeholder-label">{facility.imagePlaceholder}</span>
                            </div>
                            
                            {/* Content Overlay */}
                            <div className="facility-content">
                                <span className="facility-number">{String(index + 1).padStart(2, '0')}</span>
                                <h3 className="facility-title">{facility.title}</h3>
                                <p className="facility-description">{facility.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .facilities-section {
                    background-color: var(--color-black);
                    color: var(--color-white);
                }

                .facilities-section .section-title h2 {
                    color: var(--color-white);
                }

                .facilities-section .section-subtitle {
                    color: rgba(255, 255, 255, 0.7);
                }

                .facilities-gallery {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                }

                .facility-card {
                    position: relative;
                    overflow: hidden;
                    background: var(--color-gray-900);
                    transition: var(--transition-base);
                }

                .facility-card:hover {
                    transform: translateY(-5px);
                }

                .facility-card.featured {
                    grid-column: span 2;
                    grid-row: span 2;
                }

                .facility-image-placeholder {
                    aspect-ratio: 4/3;
                    background: linear-gradient(135deg, var(--color-gray-800) 0%, var(--color-gray-700) 100%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    transition: var(--transition-base);
                }

                .facility-card.featured .facility-image-placeholder {
                    aspect-ratio: auto;
                    height: 100%;
                    min-height: 400px;
                }

                .facility-card:hover .facility-image-placeholder {
                    background: linear-gradient(135deg, var(--color-gray-700) 0%, var(--color-gray-600) 100%);
                }

                .placeholder-icon {
                    color: var(--color-gray-500);
                }

                .placeholder-label {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--color-gray-400);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }

                .facility-content {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 1.5rem;
                    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%);
                }

                .facility-card.featured .facility-content {
                    padding: 2rem;
                }

                .facility-number {
                    font-size: 0.6875rem;
                    font-weight: 500;
                    color: var(--color-red);
                    display: block;
                    margin-bottom: 0.5rem;
                    letter-spacing: 0.15em;
                }

                .facility-title {
                    font-size: 1rem;
                    font-weight: 300;
                    color: var(--color-white);
                    margin-bottom: 0.5rem;
                    line-height: 1.3;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .facility-card.featured .facility-title {
                    font-size: 1.75rem;
                    font-weight: 200;
                }

                .facility-description {
                    font-size: 0.875rem;
                    color: rgba(255, 255, 255, 0.6);
                    line-height: 1.7;
                    margin: 0;
                    display: none;
                    font-weight: 300;
                }

                .facility-card.featured .facility-description {
                    display: block;
                }

                .facility-card:hover .facility-description {
                    display: block;
                }

                @media (max-width: 900px) {
                    .facilities-gallery {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .facility-card.featured {
                        grid-column: span 2;
                        grid-row: span 1;
                    }

                    .facility-card.featured .facility-image-placeholder {
                        min-height: 250px;
                    }
                }

                @media (max-width: 600px) {
                    .facilities-gallery {
                        grid-template-columns: 1fr;
                    }

                    .facility-card.featured {
                        grid-column: span 1;
                    }
                }
            `}</style>
        </section>
    );
};

export default Facilities;
