import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import heroBg from '../assets/iec-stator-lift.jpg';
import projectBg from '../assets/project-banner-bg.jpg';

/* ── Department directory data ─────────────────────── */
const departments = [
    {
        dept: 'Key Contacts',
        rows: [
            { name: 'Late Anil Bhardwaj', role: 'Director', phone: '+91 98242 14839', href: 'tel:+919824214839' },
            { name: 'Mrs. Arpana Anil Bharadwaj', role: 'Director', phone: '+91 97129 14839', href: 'tel:+919712914839' },
        ],
        email: 'anil@iecindia.co.in',
        emailHref: 'mailto:anil@iecindia.co.in',
    },
    {
        dept: 'Technical Enquiries',
        rows: [
            { name: 'Late Anil Bhardwaj', phone: '+91 98242 14839', href: 'tel:+919824214839' },
            { name: 'Mr. A.D. Kokje', phone: '+91 82383 36294', href: 'tel:+918238336294' },
            { name: 'Mr. K.H. Mehta', phone: '+91 96019 42325', href: 'tel:+919601942325' },
            { name: 'Mr. C.N. Dandiwala', phone: '+91 98243 48744', href: 'tel:+919824348744' },
        ],
    },
    {
        dept: 'Sales & Marketing',
        rows: [
            { name: 'General Enquiry', phone: '+91 98240 29088', href: 'tel:+919824029088' },
            { name: 'Mr. Jatin Shah', phone: '+91 98240 24839', href: 'tel:+919824024839' },
            { name: 'Mr. Jitu Shah', phone: '+91 98241 74989', href: 'tel:+919824174989' },
        ],
    },
    {
        dept: 'Purchase & Finance',
        rows: [
            { name: 'Mrs. Purnima Sharma', phone: '+91 98246 84540', href: 'tel:+919824684540' },
        ],
    },
];

const locations = [
    {
        tag: 'Headquarters',
        name: 'IEC Ranoli HQ',
        address: 'Plot No. 613, GIDC Estate, Ranoli,\nDist. Vadodara – 391350, Gujarat',
        img: heroBg,
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.1!2d73.228!3d22.31!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc88a3a3a3a3a%3A0x0!2z613%20GIDC%20Estate%20Ranoli!5e0!3m2!1sen!2sin!4v1700000000000',
    },
    {
        tag: 'Factory & Workshop',
        name: 'IEC Raika Workshop',
        address: 'Plot Survey No. 165/1, Opp. Ishan Equipment,\nVillage Raika, NH 8, Vadodara',
        img: projectBg,
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5!2d73.15!3d22.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8b0b0b0b0b0%3A0x0!2zPlot%20165%20Raika%20NH8!5e0!3m2!1sen!2sin!4v1700000000000',
    },
];

const serviceOptions = [
    'Motor, Generator & Alternator Repair',
    'DC Motor Repair',
    'Mechanical Repair',
    'Pump Repair & Overhaul',
    'Spares Fabrication',
    'Preventive Maintenance & Overhauling',
    'Other / General Enquiry',
];

/* ── Contact page ──────────────────────────────────── */
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', company: '',
        service: '', description: '', agreement: false,
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const validate = (values) => {
        const e = {};
        if (!values.name.trim()) e.name = 'Full name is required';
        if (!values.email.trim()) e.email = 'Email is required';
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) e.email = 'Invalid email address';
        if (!values.phone.trim()) e.phone = 'Phone is required';
        else if (!/^[0-9+\s-]{10,15}$/.test(values.phone)) e.phone = 'Invalid number';
        if (!values.company.trim()) e.company = 'Company name is required';
        if (!values.description.trim()) e.description = 'Message is required';
        else if (values.description.trim().length < 10) e.description = 'At least 10 characters';
        if (!values.agreement) e.agreement = 'Required';
        return e;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setFormData(prev => ({ ...prev, [name]: val }));
        if (touched[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        const ve = validate(formData);
        if (ve[name]) setErrors(prev => ({ ...prev, [name]: ve[name] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const ve = validate(formData);
        setErrors(ve);
        setTouched({ name: true, email: true, phone: true, company: true, service: true, description: true, agreement: true });
        if (Object.keys(ve).length === 0) {
            setIsSubmitting(true);
            setTimeout(() => {
                console.log('Form submitted:', formData);
                setIsSubmitting(false);
                setSubmitted(true);
                setFormData({ name: '', email: '', phone: '', company: '', service: '', description: '', agreement: false });
                setTouched({});
            }, 1500);
        }
    };

    return (
        <div className="contact-page">
            <PageHero
                label="Get In Touch"
                title="Contact Us"
                subtitle="Connect directly with our technical, sales, or service teams · or send us a brief for your repair."
                breadcrumbs={[{ label: 'Contact' }]}
                bgImage={heroBg}
            />

            {/* ── Main contact section · light ────────────────── */}
            <section className="cp-main">
                <div className="container cp-grid">

                    {/* Left · Directory */}
                    <div className="cp-dir">
                        <p className="cp-dir-eyebrow">Directory</p>
                        <h2 className="cp-dir-heading">Reach our team directly.</h2>
                        <p className="cp-dir-sub">Our team responds within one business day. For urgent breakdown support, call us directly.</p>

                        <div className="cp-depts">
                            {departments.map((d) => (
                                <div className="cp-dept" key={d.dept}>
                                    <span className="cp-dept-name">{d.dept}</span>
                                    <div className="cp-dept-rows">
                                        {d.rows.map((r, i) => (
                                            <div className="cp-dept-row" key={i}>
                                                <span className="cp-dept-person">{r.name}{r.role && <em>{r.role}</em>}</span>
                                                <a href={r.href} className="cp-dept-phone">{r.phone}</a>
                                            </div>
                                        ))}
                                        {d.email && (
                                            <div className="cp-dept-row">
                                                <span className="cp-dept-person">Email</span>
                                                <a href={d.emailHref} className="cp-dept-email">{d.email}</a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Working hours */}
                        <div className="cp-hours">
                            <span className="cp-hours-label">Working Hours</span>
                            <p>Mon – Sat, 9:00 AM to 6:00 PM IST</p>
                        </div>
                    </div>

                    {/* Right · Form */}
                    <div className="cp-form-col">
                        <div className="cp-form-card">

                            {submitted ? (
                                <div className="cp-success">
                                    <div className="cp-success-icon">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <h3>Message received</h3>
                                    <p>We'll get back to you within one business day.</p>
                                    <button
                                        className="cp-success-reset"
                                        onClick={() => setSubmitted(false)}
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="cp-form-header">
                                        <h2 className="cp-form-heading">Send a brief</h2>
                                        <p className="cp-form-sub">Fill in your details and we'll respond within one business day.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} noValidate className="cp-form">
                                        <div className="cp-field">
                                            <label className="cp-label">Full Name <span>*</span></label>
                                            <input
                                                type="text" name="name" value={formData.name}
                                                onChange={handleChange} onBlur={handleBlur}
                                                className={touched.name && errors.name ? 'cp-input cp-input--err' : 'cp-input'}
                                                placeholder="Your full name"
                                            />
                                            {touched.name && errors.name && <span className="cp-err">{errors.name}</span>}
                                        </div>

                                        <div className="cp-row">
                                            <div className="cp-field">
                                                <label className="cp-label">Email <span>*</span></label>
                                                <input
                                                    type="email" name="email" value={formData.email}
                                                    onChange={handleChange} onBlur={handleBlur}
                                                    className={touched.email && errors.email ? 'cp-input cp-input--err' : 'cp-input'}
                                                    placeholder="you@company.com"
                                                />
                                                {touched.email && errors.email && <span className="cp-err">{errors.email}</span>}
                                            </div>
                                            <div className="cp-field">
                                                <label className="cp-label">Phone <span>*</span></label>
                                                <input
                                                    type="text" name="phone" value={formData.phone}
                                                    onChange={handleChange} onBlur={handleBlur}
                                                    className={touched.phone && errors.phone ? 'cp-input cp-input--err' : 'cp-input'}
                                                    placeholder="+91 XXXXX XXXXX"
                                                />
                                                {touched.phone && errors.phone && <span className="cp-err">{errors.phone}</span>}
                                            </div>
                                        </div>

                                        <div className="cp-row">
                                            <div className="cp-field">
                                                <label className="cp-label">Company <span>*</span></label>
                                                <input
                                                    type="text" name="company" value={formData.company}
                                                    onChange={handleChange} onBlur={handleBlur}
                                                    className={touched.company && errors.company ? 'cp-input cp-input--err' : 'cp-input'}
                                                    placeholder="Your company name"
                                                />
                                                {touched.company && errors.company && <span className="cp-err">{errors.company}</span>}
                                            </div>
                                            <div className="cp-field">
                                                <label className="cp-label">Service</label>
                                                <select name="service" value={formData.service} onChange={handleChange} className="cp-input cp-select">
                                                    <option value="">Select a service</option>
                                                    {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="cp-field">
                                            <label className="cp-label">Message <span>*</span></label>
                                            <textarea
                                                name="description" rows="4" value={formData.description}
                                                onChange={handleChange} onBlur={handleBlur}
                                                className={touched.description && errors.description ? 'cp-input cp-textarea cp-input--err' : 'cp-input cp-textarea'}
                                                placeholder="Describe your equipment, the issue, and any urgency..."
                                            />
                                            {touched.description && errors.description && <span className="cp-err">{errors.description}</span>}
                                        </div>

                                        <div className="cp-check-row">
                                            <label className="cp-check-label">
                                                <input
                                                    type="checkbox" name="agreement"
                                                    checked={formData.agreement} onChange={handleChange}
                                                    className="cp-checkbox"
                                                />
                                                <span>
                                                    I agree to the <Link to="/terms">Terms</Link> &amp; <Link to="/privacy">Privacy Policy</Link>
                                                </span>
                                            </label>
                                            {touched.agreement && errors.agreement && <span className="cp-err">{errors.agreement}</span>}
                                        </div>

                                        <button type="submit" className="cp-submit" disabled={isSubmitting}>
                                            {isSubmitting ? (
                                                <>
                                                    <span className="cp-spinner" />
                                                    Sending…
                                                </>
                                            ) : (
                                                <>
                                                    Send message
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                                    </svg>
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Locations section ───────────────────────────── */}
            <section className="cp-locations">
                <div className="container">
                    <div className="cp-loc-header">
                        <p className="cp-loc-eyebrow">Our Presence</p>
                        <h2 className="cp-loc-heading">Visit Our Facilities</h2>
                    </div>
                    <div className="cp-loc-grid">
                        {locations.map((loc) => (
                            <div className="cp-loc-card" key={loc.name}>
                                <div className="cp-loc-img" style={{ backgroundImage: `url(${loc.img})` }}>
                                    <span className="cp-loc-tag">{loc.tag}</span>
                                </div>
                                <div className="cp-loc-body">
                                    <h3 className="cp-loc-name">{loc.name}</h3>
                                    <p className="cp-loc-addr">{loc.address.split('\n').map((l, i) => (
                                        <React.Fragment key={i}>{l}{i === 0 && <br />}</React.Fragment>
                                    ))}</p>
                                    <div className="cp-loc-map">
                                        <iframe
                                            src={loc.mapSrc}
                                            width="100%" height="180"
                                            style={{ border: 0, display: 'block' }}
                                            allowFullScreen="" loading="lazy"
                                            title={loc.name}
                                        />
                                    </div>
                                    <a
                                        href="https://maps.google.com"
                                        target="_blank" rel="noreferrer"
                                        className="cp-loc-link"
                                    >
                                        Get directions
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`

                .contact-page { min-height: 100vh; }

                /* ── Main section ─────────────────────────────── */
                .cp-main {
                    background: var(--color-white);
                    padding: var(--space-5xl) 0;
                }

                .cp-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.1fr;
                    gap: var(--space-5xl);
                    align-items: start;
                }

                /* Directory */
                .cp-dir-eyebrow {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    color: var(--color-accent);
                    margin-bottom: var(--space-md);
                }

                .cp-dir-heading {
                    font-family: var(--font-serif);
                    font-size: clamp(1.75rem, 3vw, 2.5rem);
                    font-weight: 700;
                    color: var(--color-text);
                    letter-spacing: -0.025em;
                    line-height: 1.1;
                    margin-bottom: var(--space-md);
                }

                .cp-dir-sub {
                    font-size: 1.0625rem;
                    line-height: 1.7;
                    color: var(--color-text-light);
                    margin-bottom: var(--space-3xl);
                }

                .cp-depts {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                    border-top: 1px solid var(--color-border);
                }

                .cp-dept {
                    padding: var(--space-xl) 0;
                    border-bottom: 1px solid var(--color-border);
                    display: grid;
                    grid-template-columns: 160px 1fr;
                    gap: var(--space-xl);
                }

                .cp-dept-name {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: rgba(0,0,0,0.35);
                    padding-top: 2px;
                }

                .cp-dept-rows {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .cp-dept-row {
                    display: flex;
                    align-items: baseline;
                    justify-content: space-between;
                    gap: var(--space-md);
                }

                .cp-dept-person {
                    font-size: 0.9375rem;
                    font-weight: 500;
                    color: var(--color-text);
                    display: flex;
                    flex-direction: column;
                    gap: 1px;
                }

                .cp-dept-person em {
                    font-style: normal;
                    font-size: 0.6875rem;
                    font-family: var(--font-mono);
                    font-weight: 400;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(0,0,0,0.3);
                }

                .cp-dept-phone {
                    font-family: var(--font-mono);
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: var(--color-text);
                    text-decoration: none;
                    white-space: nowrap;
                    transition: color 0.2s;
                }

                .cp-dept-phone:hover { color: var(--color-accent); }

                .cp-dept-email {
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: var(--color-accent);
                    text-decoration: none;
                    transition: opacity 0.2s;
                }

                .cp-dept-email:hover { opacity: 0.75; }

                .cp-hours {
                    margin-top: var(--space-2xl);
                    padding: var(--space-xl);
                    background: var(--color-cream, #f9f8f7);
                    border-left: 3px solid var(--color-accent);
                }

                .cp-hours-label {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-accent);
                    display: block;
                    margin-bottom: 6px;
                }

                .cp-hours p {
                    font-size: 0.9375rem;
                    color: var(--color-text);
                    font-weight: 500;
                }

                /* ── Form card ────────────────────────────────── */
                .cp-form-card {
                    background: var(--color-primary);
                    padding: var(--space-3xl);
                    position: sticky;
                    top: calc(var(--header-height) + 24px);
                }

                .cp-form-header { margin-bottom: var(--space-2xl); }

                .cp-form-heading {
                    font-family: var(--font-serif);
                    font-size: 1.875rem;
                    font-weight: 700;
                    color: var(--color-white);
                    letter-spacing: -0.025em;
                    line-height: 1.1;
                    margin-bottom: var(--space-sm);
                }

                .cp-form-sub {
                    font-size: 0.9375rem;
                    color: rgba(255,255,255,0.45);
                    line-height: 1.6;
                }

                .cp-form {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-lg);
                }

                .cp-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-lg);
                }

                .cp-field {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .cp-label {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: rgba(255,255,255,0.4);
                }

                .cp-label span { color: var(--color-accent); }

                .cp-input {
                    background: rgba(255,255,255,0.06);
                    border: 1px solid rgba(255,255,255,0.1);
                    padding: 10px 14px;
                    font-size: 0.9375rem;
                    color: var(--color-white);
                    font-family: var(--font-serif);
                    outline: none;
                    transition: border-color 0.2s, background 0.2s;
                    width: 100%;
                    box-sizing: border-box;
                }

                .cp-input::placeholder { color: rgba(255,255,255,0.22); }

                .cp-input:focus {
                    border-color: rgba(255,255,255,0.35);
                    background: rgba(255,255,255,0.09);
                }

                .cp-input--err { border-color: var(--color-accent) !important; }

                .cp-select {
                    appearance: none;
                    cursor: pointer;
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
                    background-repeat: no-repeat;
                    background-position: right 14px center;
                    padding-right: 36px;
                }

                .cp-select option { background: #1a1e26; color: white; }

                .cp-textarea {
                    resize: vertical;
                    min-height: 100px;
                    font-family: var(--font-serif);
                    line-height: 1.6;
                }

                .cp-err {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    color: var(--color-accent);
                    letter-spacing: 0.04em;
                }

                .cp-check-row {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .cp-check-label {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    font-size: 0.8125rem;
                    color: rgba(255,255,255,0.4);
                    cursor: pointer;
                    line-height: 1.5;
                }

                .cp-checkbox { accent-color: var(--color-accent); margin-top: 2px; }

                .cp-check-label a { color: rgba(255,255,255,0.65); text-underline-offset: 3px; }
                .cp-check-label a:hover { color: var(--color-white); }

                .cp-submit {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 14px 28px;
                    background: var(--color-accent);
                    color: var(--color-white);
                    font-family: var(--font-serif);
                    font-size: 0.9375rem;
                    font-weight: 600;
                    border: none;
                    cursor: pointer;
                    transition: background 0.2s, gap 0.2s;
                    width: 100%;
                    margin-top: var(--space-sm);
                }

                .cp-submit:hover:not(:disabled) {
                    background: #a50d26;
                    gap: 13px;
                }

                .cp-submit:disabled { opacity: 0.6; cursor: not-allowed; }

                .cp-spinner {
                    width: 14px; height: 14px;
                    border: 2px solid rgba(255,255,255,0.3);
                    border-top-color: white;
                    border-radius: 50%;
                    animation: cp-spin 0.7s linear infinite;
                    flex-shrink: 0;
                }

                @keyframes cp-spin { to { transform: rotate(360deg); } }

                /* Success state */
                .cp-success {
                    text-align: center;
                    padding: var(--space-4xl) 0;
                }

                .cp-success-icon {
                    width: 56px; height: 56px;
                    border-radius: 50%;
                    background: rgba(200,16,46,0.12);
                    border: 1px solid rgba(200,16,46,0.3);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-accent);
                    margin: 0 auto var(--space-xl);
                }

                .cp-success h3 {
                    font-family: var(--font-serif);
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--color-white);
                    margin-bottom: var(--space-sm);
                }

                .cp-success p {
                    font-size: 0.9375rem;
                    color: rgba(255,255,255,0.45);
                    margin-bottom: var(--space-xl);
                }

                .cp-success-reset {
                    background: none;
                    border: 1px solid rgba(255,255,255,0.15);
                    color: rgba(255,255,255,0.55);
                    padding: 8px 20px;
                    font-size: 0.8125rem;
                    cursor: pointer;
                    transition: border-color 0.2s, color 0.2s;
                    font-family: var(--font-serif);
                }

                .cp-success-reset:hover { border-color: rgba(255,255,255,0.35); color: var(--color-white); }

                /* ── Locations section ────────────────────────── */
                .cp-locations {
                    background: var(--color-cream, #f9f8f7);
                    padding: var(--space-5xl) 0;
                    border-top: 1px solid var(--color-border);
                }

                .cp-loc-header { margin-bottom: var(--space-4xl); }

                .cp-loc-eyebrow {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    color: var(--color-accent);
                    margin-bottom: var(--space-md);
                }

                .cp-loc-heading {
                    font-family: var(--font-serif);
                    font-size: clamp(1.75rem, 3vw, 2.5rem);
                    font-weight: 700;
                    color: var(--color-text);
                    letter-spacing: -0.025em;
                    line-height: 1.1;
                }

                .cp-loc-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-2xl);
                }

                .cp-loc-card {
                    background: var(--color-white);
                    border: 1px solid var(--color-border);
                    overflow: hidden;
                    transition: box-shadow 0.2s;
                }

                .cp-loc-card:hover { box-shadow: var(--shadow-md); }

                .cp-loc-img {
                    height: 180px;
                    background-size: cover;
                    background-position: center;
                    position: relative;
                }

                .cp-loc-tag {
                    position: absolute;
                    bottom: 12px; left: 12px;
                    background: var(--color-primary);
                    color: var(--color-white);
                    font-family: var(--font-mono);
                    font-size: 0.5625rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    padding: 4px 10px;
                }

                .cp-loc-body { padding: var(--space-xl); }

                .cp-loc-name {
                    font-family: var(--font-serif);
                    font-size: 1.1875rem;
                    font-weight: 700;
                    color: var(--color-text);
                    letter-spacing: -0.02em;
                    margin-bottom: var(--space-sm);
                }

                .cp-loc-addr {
                    font-size: 0.9375rem;
                    line-height: 1.65;
                    color: var(--color-text-light);
                    margin-bottom: var(--space-lg);
                }

                .cp-loc-map {
                    overflow: hidden;
                    margin-bottom: var(--space-lg);
                    border: 1px solid var(--color-border);
                }

                .cp-loc-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.8125rem;
                    font-weight: 600;
                    color: var(--color-accent);
                    text-decoration: none;
                    transition: gap 0.2s;
                }

                .cp-loc-link:hover { gap: 10px; }

                /* ── Responsive ──────────────────────────────── */
                @media (max-width: 1024px) {
                    .cp-grid {
                        grid-template-columns: 1fr;
                        gap: var(--space-4xl);
                    }
                    .cp-form-card { position: static; }
                }

                @media (max-width: 768px) {
                    .cp-dept { grid-template-columns: 1fr; gap: var(--space-sm); }
                    .cp-dept-row { flex-direction: column; align-items: flex-start; gap: 2px; }
                    .cp-loc-grid { grid-template-columns: 1fr; }
                    .cp-row { grid-template-columns: 1fr; }
                }

                @media (max-width: 480px) {
                    .cp-form-card { padding: var(--space-2xl); }
                }

            `}</style>
        </div>
    );
};

export default Contact;
