import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import abbLogo from '../assets/clientel-logos/abb-logo.png';
import ansaldoLogo from '../assets/clientel-logos/ansaldo-logo.png';
import bhelLogo from '../assets/clientel-logos/bhel-logo.png';
import cgPowerLogo from '../assets/clientel-logos/cg-power-group-logo.png';
import kirloskarLogo from '../assets/clientel-logos/kirloskar-group-logo.png';
import marelliLogo from '../assets/clientel-logos/marelli-logo.png';
import marthonLogo from '../assets/clientel-logos/marthon-energy-logo.png';
import tecoLogo from '../assets/clientel-logos/teco-logo.png';
// New logos
import relianceLogo from '../assets/clientel-logos/reliance-logo.png';
import tataLogo from '../assets/clientel-logos/tata-logo.png';
import lindeLogo from '../assets/clientel-logos/linde-logo.png';
import wegLogo from '../assets/clientel-logos/weg-logo.png';
import wartsilaLogo from '../assets/clientel-logos/wartsila-logo.png';
import adaniLogo from '../assets/clientel-logos/adani-logo.png';
import ongcLogo from '../assets/clientel-logos/ongc-logo.png';
import bpclLogo from '../assets/clientel-logos/bpcl-logo.png';
import jswLogo from '../assets/clientel-logos/jsw-logo.png';
import adityaBirlaLogo from '../assets/clientel-logos/aditya-birla-logo.png';

// International & most-famous brands first, then established Indian names
const logoItems = [
    { name: 'Reliance Industries', logo: relianceLogo, scale: 1.9 },
    { name: 'Tata', logo: tataLogo },
    { name: 'Linde', logo: lindeLogo },
    { name: 'WEG', logo: wegLogo },
    { name: 'Wärtsilä', logo: wartsilaLogo },
    { name: 'Adani', logo: adaniLogo },
    { name: 'ONGC', logo: ongcLogo },
    { name: 'ABB', logo: abbLogo },
    { name: 'BHEL', logo: bhelLogo },
    { name: 'BPCL', logo: bpclLogo },
    { name: 'JSW', logo: jswLogo },
    { name: 'Aditya Birla Group', logo: adityaBirlaLogo },
    { name: 'CG Power Group', logo: cgPowerLogo },
    { name: 'Kirloskar Group', logo: kirloskarLogo },
    { name: 'Ansaldo', logo: ansaldoLogo },
    { name: 'Marelli', logo: marelliLogo },
    { name: 'Marathon Energy', logo: marthonLogo },
    { name: 'TECO', logo: tecoLogo },
];

const testimonials = [
    {
        quote: "IEC consistently delivers exceptional quality and reliability on our high-voltage motor and generator repairs.",
        author: "Plant Maintenance Team",
        role: "BHEL",
        companyLogo: bhelLogo
    },
    {
        quote: "A partner we can rely on. The technical expertise and support from the IEC team is unmatched in the region.",
        author: "Engineering Team",
        role: "ABB",
        companyLogo: abbLogo
    },
    {
        quote: "Their turnaround on rewinding and overhauling work has helped us reduce unplanned downtime significantly.",
        author: "Maintenance Team",
        role: "Kirloskar Group",
        companyLogo: kirloskarLogo
    }
];

const bgVariants = [
    { name: 'Clean White', value: '#f8f9fa', text: '#1a2f4d', navBg: 'rgba(0,0,0,0.05)' },
];

const referenceLogos = [abbLogo, tecoLogo];

/**
 * Pixel-Level Visual Normalization Algorithm
 * 
 * Problem: Logos have different aspect ratios, whitespace, padding, and visual weight.
 *          Simple bounding‐box area normalization fails because it ignores transparent
 *          and white regions in the image file.
 * 
 * Solution: Use an offscreen canvas to analyze each logo's actual pixel content.
 *   1. Draw the image onto a canvas
 *   2. Scan all pixels to find the "tight content bounding box" — the smallest
 *      rectangle that contains all non-transparent, non-near-white pixels
 *   3. Calculate the content area = contentWidth × contentHeight (ignoring padding)
 *   4. Normalize all logos so their rendered content area matches a target,
 *      calibrated against reference logos (ABB, TECO) that the user approved
 * 
 * This means a logo with lots of whitespace around it gets scaled UP,
 * while a dense blocky logo stays at its natural proportions.
 */
function analyzeLogoContent(img) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const w = img.naturalWidth;
    const h = img.naturalHeight;
    canvas.width = w;
    canvas.height = h;
    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(0, 0, w, h);
    const data = imageData.data;

    // Find tight bounding box of non-transparent, non-near-white content
    let minX = w, minY = h, maxX = 0, maxY = 0;
    const ALPHA_THRESHOLD = 30;      // ignore nearly transparent pixels
    const WHITE_THRESHOLD = 240;     // ignore near-white pixels (background)

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const i = (y * w + x) * 4;
            const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];

            // Skip transparent pixels
            if (a < ALPHA_THRESHOLD) continue;
            // Skip near-white pixels (common logo backgrounds)
            if (r > WHITE_THRESHOLD && g > WHITE_THRESHOLD && b > WHITE_THRESHOLD) continue;

            // This pixel is "content"
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
        }
    }

    // If no content found, return full image dims
    if (maxX < minX || maxY < minY) {
        return { contentW: w, contentH: h, fullW: w, fullH: h, contentRatio: 1 };
    }

    const contentW = maxX - minX + 1;
    const contentH = maxY - minY + 1;
    const contentArea = contentW * contentH;
    const fullArea = w * h;

    return {
        contentW,
        contentH,
        fullW: w,
        fullH: h,
        contentArea,
        contentRatio: contentArea / fullArea,  // how much of the image is actual content
        contentAspect: contentW / contentH
    };
}

const Clients = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [logoSizes, setLogoSizes] = useState({}); // { [logoSrc]: { marqueeH, testimonialH } }
    const bgIndex = 0;

    const activeText = bgVariants[bgIndex].text || '#ffffff';
    const activeNavBg = bgVariants[bgIndex].navBg || 'rgba(255,255,255,0.05)';

    // On mount: load all logos, analyze pixel content, compute normalized heights
    useEffect(() => {
        const allLogos = new Set();
        logoItems.forEach(item => allLogos.add(item.logo));
        testimonials.forEach(item => allLogos.add(item.companyLogo));

        // Load all images and analyze their pixel content
        const promises = [...allLogos].map(src => {
            return new Promise((resolve) => {
                const img = new Image();
                img.crossOrigin = 'anonymous';
                img.onload = () => {
                    const analysis = analyzeLogoContent(img);
                    resolve({ src, ...analysis });
                };
                img.onerror = () => resolve({
                    src, contentW: 100, contentH: 100, fullW: 100, fullH: 100,
                    contentArea: 10000, contentRatio: 1, contentAspect: 1
                });
                img.src = src;
            });
        });

        Promise.all(promises).then(results => {
            // Step 1: Find the reference logos' content areas
            // ABB and TECO look good — we use their average content area as the target
            const refResults = results.filter(r => referenceLogos.includes(r.src));

            // What height do the reference logos currently render at?
            // ABB/TECO naturally look good around 42-48px, so we use 45px as the reference display height
            const REFERENCE_DISPLAY_HEIGHT = 38; // px — slightly smaller per user request

            // Calculate the "target content area at display size" from references
            // For each reference: displayWidth = (contentAspect * REFERENCE_DISPLAY_HEIGHT)
            // displayContentArea = displayWidth * REFERENCE_DISPLAY_HEIGHT
            let targetDisplayContentArea;
            if (refResults.length > 0) {
                const refAreas = refResults.map(r => {
                    const scale = REFERENCE_DISPLAY_HEIGHT / r.contentH;
                    return (r.contentW * scale) * REFERENCE_DISPLAY_HEIGHT;
                });
                targetDisplayContentArea = refAreas.reduce((a, b) => a + b, 0) / refAreas.length;
            } else {
                targetDisplayContentArea = 2000; // fallback
            }

            // Step 2: For each logo, compute the display height that gives it the same
            // rendered content area as the references
            const sizes = {};
            const MARQUEE_MAX_H = 45;
            const MARQUEE_MIN_H = 25;
            const TESTIMONIAL_SCALE = 0.38; // testimonial logos are ~38% of marquee size

            results.forEach(r => {
                // displayHeight such that rendered content area = targetDisplayContentArea
                // rendered content area = (contentAspect * h) * h = contentAspect * h²
                // h = sqrt(targetDisplayContentArea / contentAspect)
                const contentAspect = r.contentW / r.contentH;
                let marqueeH = Math.round(Math.sqrt(targetDisplayContentArea / contentAspect));

                // Clamp
                marqueeH = Math.max(MARQUEE_MIN_H, Math.min(marqueeH, MARQUEE_MAX_H));

                // Compensate for whitespace: if the content only fills e.g. 60% of the image,
                // we need to render the whole image taller so the content portion matches
                const whitespaceCompensation = r.fullH / r.contentH;
                marqueeH = Math.round(marqueeH * whitespaceCompensation);
                marqueeH = Math.max(MARQUEE_MIN_H, Math.min(marqueeH, MARQUEE_MAX_H + 10)); // allow a bit more for padded images

                const testimonialH = Math.max(12, Math.round(marqueeH * TESTIMONIAL_SCALE));

                sizes[r.src] = { marqueeH, testimonialH };
            });

            setLogoSizes(sizes);
        });
    }, []);

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
        setTimeout(() => setIsAnimating(false), 500);
    };

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsAnimating(false), 500);
    };

    return (
        <section className="trust-module" style={{ background: bgVariants[bgIndex].value, color: activeText }}>
            <div className="container">
                <div className="module-content">
                    {/* Heading Side */}
                    <div className="module-header" data-aos="fade-up">
                        <span className="module-label" style={{ color: activeText, opacity: 0.6 }}>Proven Excellence</span>
                        <h2 className="module-title" style={{ color: activeText }}>
                            Trusted by<br />Global Giants
                        </h2>
                        <div className="module-nav">
                            <button
                                className="nav-btn"
                                onClick={handlePrev}
                                aria-label="Previous"
                                style={{
                                    borderColor: activeText === '#ffffff' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                                    background: activeNavBg,
                                    color: activeText
                                }}
                            >
                                <FaArrowLeft />
                            </button>
                            <button
                                className="nav-btn"
                                onClick={handleNext}
                                aria-label="Next"
                                style={{
                                    borderColor: activeText === '#ffffff' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                                    background: activeNavBg,
                                    color: activeText
                                }}
                            >
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>

                    {/* Testimonial Side (Direct Content) */}
                    <div className="testimonial-area">
                        <div className={`testimonial-content ${isAnimating ? 'animating' : ''}`}>
                            <div className="quote-icon">❝</div>
                            <p className="quote-text" style={{ color: activeText }}>
                                {testimonials[currentTestimonial].quote}
                            </p>
                            <div className="author-block">
                                <h4 className="author-name" style={{ color: activeText }}>{testimonials[currentTestimonial].author}</h4>
                                <span style={{ marginTop: '4px', display: 'inline', fontSize: '0.8125rem', lineHeight: '1' }}>
                                    <span className="author-role" style={{ color: activeText, opacity: 0.7, fontWeight: 500 }}>
                                        {testimonials[currentTestimonial].role}
                                    </span>
                                    {' '}
                                    <img
                                        src={testimonials[currentTestimonial].companyLogo}
                                        alt="Company Logo"
                                        style={{
                                            height: `${logoSizes[testimonials[currentTestimonial].companyLogo]?.testimonialH || 14}px`,
                                            width: 'auto',
                                            objectFit: 'contain',
                                            verticalAlign: 'middle',
                                            display: 'inline',
                                            marginLeft: '4px'
                                        }}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Loop: Logo Marquee */}
                <div className="logo-marquee-area">
                    <div className="logo-track">
                        {/* Quadruple for wide screens */}
                        {[...logoItems, ...logoItems, ...logoItems, ...logoItems].map((client, idx) => (
                            <div key={idx} className="logo-item">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="logo-clean"
                                    style={{ height: `${Math.round((logoSizes[client.logo]?.marqueeH || 40) * (client.scale || 1))}px` }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Switcher Removed */}

            <style>{`
                .trust-module {
                    padding: var(--space-2xl) 0; /* Reduced padding for space optimization */
                    overflow: hidden;
                    position: relative;
                    transition: background 0.5s ease, color 0.5s ease;
                }

                .module-content {
                    display: grid;
                    grid-template-columns: 0.8fr 1.2fr;
                    gap: var(--space-3xl); /* Increased gap for breathing room without cards */
                    align-items: flex-start; /* Align top */
                    margin-bottom: var(--space-xl);
                }

                /* Header Styling */
                .module-header {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-xs);
                }

                .module-label {
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    font-weight: 600;
                }

                .module-title {
                    font-family: var(--font-serif);
                    font-size: 2.5rem; /* Slightly smaller title */
                    line-height: 1.1;
                    margin: 0;
                }

                .module-nav {
                    display: flex;
                    gap: var(--space-sm);
                    margin-top: var(--space-md);
                }

                .nav-btn {
                    width: 40px; /* Smaller buttons */
                    height: 40px;
                    border-radius: 50%;
                    border: 1px solid;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    font-size: 0.9rem;
                }

                .nav-btn:hover {
                    background: var(--color-white) !important;
                    border-color: var(--color-white) !important;
                    color: var(--color-primary) !important;
                    transform: scale(1.05);
                }

                /* Testimonial Direct Content (No Card) */
                .testimonial-content {
                    position: relative;
                    transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.5s ease;
                    transform: translateY(0);
                    opacity: 1;
                    display: flex;
                    flex-direction: column;
                    padding-left: var(--space-xl); /* Visual separation */
                    border-left: 1px solid rgba(255,255,255,0.1); /* Subtle divider */
                }

                .testimonial-content.animating {
                    transform: translateY(-10px);
                    opacity: 0;
                }

                .quote-icon {
                    font-size: 3rem;
                    line-height: 1;
                    color: var(--color-accent);
                    font-family: serif;
                    margin-bottom: var(--space-xs);
                    opacity: 0.5; /* Subtle icon */
                }

                .quote-text {
                    font-size: 1.25rem; /* Larger text for impact */
                    line-height: 1.4;
                    margin-bottom: var(--space-lg);
                    font-style: normal; /* No italics */
                    font-weight: 300;
                }

                .author-block {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }

                .author-name {
                    font-size: 1rem;
                    font-weight: 700;
                    margin: 0;
                }

                .author-role {
                    font-size: 0.8125rem;
                    font-weight: 500;
                }

                /* Company Logo Bottom - Removed */

                /* Logo Marquee */
                .logo-marquee-area {
                    position: relative;
                    width: 100vw;
                    margin-left: 50%;
                    transform: translateX(-50%);
                    overflow: hidden;
                    padding-top: var(--space-md);
                }

                .logo-track {
                    display: flex;
                    gap: var(--space-xl);
                    width: max-content;
                    animation: marquee 50s linear infinite;
                    align-items: center;
                    padding: 0 var(--space-2xl);
                }
                
                .logo-track:hover {
                    animation-play-state: paused;
                }

                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-25%); }
                }

                .logo-item {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 80px;
                    padding: 0 5px;
                    transition: transform 0.3s ease;
                    overflow: visible;
                }

                .logo-item:hover {
                    transform: scale(1.05); /* Subtle scale */
                }

                /* Logo Specific Visual Balancing */
                .logo-clean {
                    width: auto;
                    object-fit: contain;
                    opacity: 0.9;
                    filter: none; /* No shadow */
                    transition: all 0.3s ease;
                    /* Max height controlled by inline style now, but set a safe fallback */
                    max-height: 60px; 
                }

                .logo-item:hover .logo-clean {
                    opacity: 1;
                    filter: none;
                }
                
                /* Mobile adjustments */
                @media (max-width: 480px) {
                    .logo-clean { max-height: 35px !important; } /* Force smaller on mobile */
                }

                /* Duplicate hover shadow removed */

                /* Responsive */
                @media (max-width: 900px) {
                    .module-content {
                        grid-template-columns: 1fr;
                        gap: var(--space-lg);
                        text-align: center;
                    }

                    .testimonial-content {
                        padding-left: 0;
                        border-left: none;
                        align-items: center; /* Center align items */
                    }
                    
                    .module-header {
                        align-items: center;
                    }

                    .module-title {
                        font-size: 2rem;
                    }

                    /* Center quote text specifically */
                    .quote-text {
                        text-align: center; 
                    }
                    
                    /* Mobile: Logo on new line */
                    .role-wrapper {
                        flex-direction: column; /* Stack logo below role */
                        gap: 8px;
                        margin-top: 8px;
                        justify-content: center;
                    }

                    .logo-track {
                         padding: var(--space-md) var(--space-xl);
                    }
                }

                @media (max-width: 480px) {
                    .module-title {
                        font-size: 1.75rem;
                    }
                    
                    .logo-item {
                        height: 40px; /* Even smaller on mobile */
                        min-width: 80px;
                    }
                    
                    /* Scale down for mobile */
                    .logo-clean { max-height: 30px; }
                    .logo-clean.logo-blocky { max-height: 20px !important; }
                    .logo-clean.logo-large-text { max-height: 22px !important; }
                    .logo-clean.logo-standard { max-height: 26px !important; }
                    .logo-clean.logo-wide { max-height: 32px !important; }
                }
            `}</style>
        </section>
    );
};

export default Clients;
