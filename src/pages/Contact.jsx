import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Country, State, City } from 'country-state-city';
import PageHero from '../components/PageHero';
import heroBg from '../assets/iec-stator-lift.jpg';
import projectBg from '../assets/project-banner-bg.jpg';

/* ── Normalise phone code: ensure leading +, strip sub-codes ── */
const normPhone = (code) => {
    const clean = String(code).replace(/\s/g, '').split('-')[0].split(',')[0];
    return clean.startsWith('+') ? clean : `+${clean}`;
};

/* ── Build sorted country list for phone selector ── */
const ALL_COUNTRIES = Country.getAllCountries()
    .map(c => ({
        isoCode: c.isoCode,
        name: c.name,
        flag: c.flag || '',
        dialCode: normPhone(c.phonecode),
    }))
    .sort((a, b) => {
        // India first, then alphabetical
        if (a.isoCode === 'IN') return -1;
        if (b.isoCode === 'IN') return 1;
        return a.name.localeCompare(b.name);
    });

/* ── Department directory ── */
const departments = [
    {
        dept: 'Key Contacts',
        rows: [
            { name: 'Mr. Kush Bhardwaj', role: 'Director' },
            { name: 'Mrs. Arpana Bharadwaj', role: 'Director & CEO', phone: '+91 97129 14839', href: 'tel:+919712914839' },
        ],
        email: 'info@iecindia.co.in',
        emailHref: 'mailto:info@iecindia.co.in',
    },
    {
        dept: 'Sales & Finance',
        rows: [
            { name: 'Mr. Jatin Shah', role: 'Managing Director, IEC', phone: '+91 98240 24839', href: 'tel:+919824024839' },
            { name: 'General Enquiry', phone: '+91 98240 29088', href: 'tel:+919824029088' },
        ],
    },
    {
        dept: 'Marketing',
        rows: [
            { name: 'Mr. Jitu Shah', phone: '+91 98241 74989', href: 'tel:+919824174989' },
        ],
    },
    {
        dept: 'Technical Enquiries',
        rows: [
            { name: 'Mr. A.D. Kokje', phone: '+91 82383 36294', href: 'tel:+918238336294' },
            { name: 'Mr. K.H. Mehta', phone: '+91 96019 42325', href: 'tel:+919601942325' },
            { name: 'Mr. C.N. Dandiwala', phone: '+91 98243 48744', href: 'tel:+919824348744' },
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

/* ── PhoneField ── */
const PhoneField = ({ countryIso, number, onCountryChange, onNumberChange, onBlur, touched, error, label, required, countryName, numberName }) => (
    <div className="cp-field">
        <label className="cp-label">
            {label}{required ? <span> *</span> : <em className="cp-optional">optional</em>}
        </label>
        <div className="cp-phone-wrap">
            <select
                name={countryName}
                value={countryIso}
                onChange={onCountryChange}
                className="cp-input cp-phone-code"
                aria-label="Country dialling code"
            >
                {ALL_COUNTRIES.map(c => (
                    <option key={c.isoCode} value={c.isoCode}>
                        {c.flag} {c.dialCode} {c.name}
                    </option>
                ))}
            </select>
            <input
                type="tel"
                name={numberName}
                value={number}
                onChange={onNumberChange}
                onBlur={onBlur}
                placeholder="Phone number"
                className={`cp-input cp-phone-num${touched && error ? ' cp-input--err' : ''}`}
            />
        </div>
        {touched && error && <span className="cp-err">{error}</span>}
    </div>
);

/* ── PremiumCheckbox ── */
const PremiumCheckbox = ({ checked, onChange, error, touched }) => (
    <div className="cp-check-row">
        <label className="cp-check-label">
            <input type="checkbox" name="agreement" checked={checked} onChange={onChange} className="cp-checkbox-native" />
            <span className={`cp-checkbox-box${checked ? ' cp-checkbox-box--checked' : ''}${touched && error ? ' cp-checkbox-box--err' : ''}`}>
                <svg className="cp-checkbox-tick" width="11" height="11" viewBox="0 0 12 12" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="2 6 5 9 10 3" />
                </svg>
            </span>
            <span className="cp-check-text">
                I agree to the <Link to="/terms">Terms of Service</Link> &amp; <Link to="/privacy">Privacy Policy</Link>
            </span>
        </label>
        {touched && error && <span className="cp-err cp-err--check">{error}</span>}
    </div>
);

/* ── LocationField: Country -> State -> City ── */
const LocationField = ({ countryIso, stateIso, city, onChange }) => {
    const states = useMemo(() =>
        countryIso ? State.getStatesOfCountry(countryIso) : [],
        [countryIso]
    );
    const cities = useMemo(() =>
        (countryIso && stateIso) ? City.getCitiesOfState(countryIso, stateIso) : [],
        [countryIso, stateIso]
    );

    const handleCountryChange = (e) => {
        onChange({ companyCountry: e.target.value, companyState: '', companyCity: '' });
    };
    const handleStateChange = (e) => {
        onChange({ companyState: e.target.value, companyCity: '' });
    };
    const handleCityChange = (e) => {
        onChange({ companyCity: e.target.value });
    };

    return (
        <div className="cp-field">
            <label className="cp-label">
                Company Location <em className="cp-optional">optional</em>
            </label>
            <div className="cp-location-grid">
                {/* Country */}
                <div className="cp-location-slot">
                    <span className="cp-location-slot-label">Country</span>
                    <select
                        value={countryIso}
                        onChange={handleCountryChange}
                        className="cp-input cp-select cp-location-select"
                    >
                        <option value="">Select country</option>
                        {ALL_COUNTRIES.map(c => (
                            <option key={c.isoCode} value={c.isoCode}>
                                {c.flag} {c.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* State / Province */}
                <div className="cp-location-slot">
                    <span className="cp-location-slot-label">State / Province</span>
                    <select
                        value={stateIso}
                        onChange={handleStateChange}
                        className="cp-input cp-select cp-location-select"
                        disabled={!countryIso}
                    >
                        <option value="">{countryIso ? (states.length ? 'Select state' : 'Not applicable') : 'Select country first'}</option>
                        {states.map(s => (
                            <option key={s.isoCode} value={s.isoCode}>{s.name}</option>
                        ))}
                    </select>
                </div>

                {/* City */}
                <div className="cp-location-slot">
                    <span className="cp-location-slot-label">City</span>
                    <select
                        value={city}
                        onChange={handleCityChange}
                        className="cp-input cp-select cp-location-select"
                        disabled={!stateIso}
                    >
                        <option value="">{stateIso ? (cities.length ? 'Select city' : 'Not applicable') : 'Select state first'}</option>
                        {cities.map((c, i) => (
                            <option key={i} value={c.name}>{c.name}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

/* ── Contact page ── */
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '', email: '',
        phoneIso: 'IN', phone: '',
        secPhoneIso: 'IN', secPhone: '',
        company: '',
        companyCountry: '', companyState: '', companyCity: '',
        companyWebsite: '',
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
        if (!values.phone.trim()) e.phone = 'Phone number is required';
        else if (!/^[0-9\s\-]{6,15}$/.test(values.phone.trim())) e.phone = 'Invalid number';
        if (!values.company.trim()) e.company = 'Company name is required';
        if (!values.service) e.service = 'Please select a service';
        if (values.secPhone.trim() && !/^[0-9\s\-]{6,15}$/.test(values.secPhone.trim())) e.secPhone = 'Invalid number';
        if (values.companyWebsite.trim() && !/^https?:\/\/.+\..+/.test(values.companyWebsite.trim())) e.companyWebsite = 'Enter a valid URL (https://...)';
        if (!values.agreement) e.agreement = 'Please accept to continue';
        return e;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setFormData(prev => ({ ...prev, [name]: val }));
        if (touched[name]) {
            const ve = validate({ ...formData, [name]: val });
            setErrors(prev => ({ ...prev, [name]: ve[name] || '' }));
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        const ve = validate(formData);
        setErrors(prev => ({ ...prev, [name]: ve[name] || '' }));
    };

    const handleLocationChange = (partial) => {
        setFormData(prev => ({ ...prev, ...partial }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const ve = validate(formData);
        setErrors(ve);
        const allFields = { name: true, email: true, phone: true, company: true, service: true, secPhone: true, companyWebsite: true, agreement: true };
        setTouched(allFields);
        if (Object.keys(ve).length === 0) {
            setIsSubmitting(true);
            setTimeout(() => {
                console.log('Form submitted:', formData);
                setIsSubmitting(false);
                setSubmitted(true);
                setFormData({
                    name: '', email: '', phoneIso: 'IN', phone: '', secPhoneIso: 'IN', secPhone: '',
                    company: '', companyCountry: '', companyState: '', companyCity: '',
                    companyWebsite: '', service: '', description: '', agreement: false,
                });
                setTouched({});
            }, 1500);
        }
    };

    return (
        <div className="contact-page">
            <PageHero
                label="Get In Touch"
                title="Contact Us"
                subtitle="Connect directly with our technical, sales, or service teams, or send us a brief for your repair."
                breadcrumbs={[{ label: 'Contact' }]}
                bgImage={heroBg}
            />

            <section className="cp-main">
                <div className="container cp-grid">

                    {/* Directory */}
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
                                                {r.phone
                                                    ? <a href={r.href} className="cp-dept-phone">{r.phone}</a>
                                                    : <span className="cp-dept-phone cp-dept-phone--tbd">Contact via email</span>
                                                }
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
                        <div className="cp-hours">
                            <div className="cp-hours-header">
                                <span className="cp-hours-label">Working Hours</span>
                                <span className="cp-hours-status">
                                    <span className="cp-hours-dot" />
                                    Open today
                                </span>
                            </div>
                            <div className="cp-hours-table">
                                <div className="cp-hours-row">
                                    <span className="cp-hours-day">Mon – Fri</span>
                                    <span className="cp-hours-time">09:00 – 18:00 IST</span>
                                </div>
                                <div className="cp-hours-row">
                                    <span className="cp-hours-day">Saturday</span>
                                    <span className="cp-hours-time">09:00 – 15:00 IST</span>
                                </div>
                                <div className="cp-hours-row">
                                    <span className="cp-hours-day">Sunday</span>
                                    <span className="cp-hours-time cp-hours-closed">Closed</span>
                                </div>
                            </div>
                            <div className="cp-emergency">
                                <span className="cp-emerg-dot" />
                                <div>
                                    <span className="cp-emerg-label">Emergency &amp; Breakdown</span>
                                    <a href="tel:+919824029088" className="cp-emerg-num">+91 98240 29088</a>
                                </div>
                                <span className="cp-emerg-badge">24×7</span>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
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
                                    <button className="cp-success-reset" onClick={() => setSubmitted(false)}>Send another message</button>
                                </div>
                            ) : (
                                <>
                                    <div className="cp-form-header">
                                        <h2 className="cp-form-heading">Send a brief</h2>
                                        <p className="cp-form-sub">Fill in your details and we'll respond within one business day.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} noValidate className="cp-form">

                                        {/* Name */}
                                        <div className="cp-field">
                                            <label className="cp-label">Full Name <span>*</span></label>
                                            <input type="text" name="name" value={formData.name}
                                                onChange={handleChange} onBlur={handleBlur}
                                                className={`cp-input${touched.name && errors.name ? ' cp-input--err' : ''}`}
                                                placeholder="Your full name" />
                                            {touched.name && errors.name && <span className="cp-err">{errors.name}</span>}
                                        </div>

                                        {/* Email + Company */}
                                        <div className="cp-row">
                                            <div className="cp-field">
                                                <label className="cp-label">Email <span>*</span></label>
                                                <input type="email" name="email" value={formData.email}
                                                    onChange={handleChange} onBlur={handleBlur}
                                                    className={`cp-input${touched.email && errors.email ? ' cp-input--err' : ''}`}
                                                    placeholder="you@company.com" />
                                                {touched.email && errors.email && <span className="cp-err">{errors.email}</span>}
                                            </div>
                                            <div className="cp-field">
                                                <label className="cp-label">Company <span>*</span></label>
                                                <input type="text" name="company" value={formData.company}
                                                    onChange={handleChange} onBlur={handleBlur}
                                                    className={`cp-input${touched.company && errors.company ? ' cp-input--err' : ''}`}
                                                    placeholder="Your company name" />
                                                {touched.company && errors.company && <span className="cp-err">{errors.company}</span>}
                                            </div>
                                        </div>

                                        {/* Primary phone */}
                                        <PhoneField
                                            label="Phone" required
                                            countryName="phoneIso" numberName="phone"
                                            countryIso={formData.phoneIso} number={formData.phone}
                                            onCountryChange={handleChange} onNumberChange={handleChange} onBlur={handleBlur}
                                            touched={touched.phone} error={errors.phone}
                                        />

                                        {/* Secondary phone */}
                                        <PhoneField
                                            label="Secondary Phone" required={false}
                                            countryName="secPhoneIso" numberName="secPhone"
                                            countryIso={formData.secPhoneIso} number={formData.secPhone}
                                            onCountryChange={handleChange} onNumberChange={handleChange} onBlur={handleBlur}
                                            touched={touched.secPhone} error={errors.secPhone}
                                        />

                                        {/* Company location */}
                                        <LocationField
                                            countryIso={formData.companyCountry}
                                            stateIso={formData.companyState}
                                            city={formData.companyCity}
                                            onChange={handleLocationChange}
                                        />

                                        {/* Company website */}
                                        <div className="cp-field">
                                            <label className="cp-label">Company Website <em className="cp-optional">optional</em></label>
                                            <input type="url" name="companyWebsite" value={formData.companyWebsite}
                                                onChange={handleChange} onBlur={handleBlur}
                                                className={`cp-input${touched.companyWebsite && errors.companyWebsite ? ' cp-input--err' : ''}`}
                                                placeholder="https://yourcompany.com" />
                                            {touched.companyWebsite && errors.companyWebsite && <span className="cp-err">{errors.companyWebsite}</span>}
                                        </div>

                                        {/* Service — MANDATORY */}
                                        <div className="cp-field">
                                            <label className="cp-label">Service Required <span>*</span></label>
                                            <select name="service" value={formData.service} onChange={handleChange} onBlur={handleBlur}
                                                className={`cp-input cp-select${touched.service && errors.service ? ' cp-input--err' : ''}`}>
                                                <option value="">Select a service</option>
                                                {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                                            </select>
                                            {touched.service && errors.service && <span className="cp-err">{errors.service}</span>}
                                        </div>

                                        {/* Message — optional */}
                                        <div className="cp-field">
                                            <label className="cp-label">Message <em className="cp-optional">optional</em></label>
                                            <textarea name="description" rows="4" value={formData.description}
                                                onChange={handleChange}
                                                className="cp-input cp-textarea"
                                                placeholder="Describe your equipment, the issue, and any urgency..." />
                                        </div>

                                        {/* T&C */}
                                        <PremiumCheckbox
                                            checked={formData.agreement}
                                            onChange={handleChange}
                                            error={errors.agreement}
                                            touched={touched.agreement}
                                        />

                                        <button type="submit" className="cp-submit" disabled={isSubmitting}>
                                            {isSubmitting
                                                ? <><span className="cp-spinner" /> Sending…</>
                                                : <>Send message <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></>
                                            }
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations */}
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
                                        <iframe src={loc.mapSrc} width="100%" height="180"
                                            style={{ border: 0, display: 'block' }} allowFullScreen="" loading="lazy" title={loc.name} />
                                    </div>
                                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="cp-loc-link">
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

                /* Main */
                .cp-main { background: var(--color-white); padding: var(--space-5xl) 0; }
                .cp-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: var(--space-5xl); align-items: start; }

                /* Directory */
                .cp-dir-eyebrow { font-family: var(--font-mono); font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.14em; color: var(--color-accent); margin-bottom: var(--space-md); }
                .cp-dir-heading { font-family: var(--font-display); font-size: clamp(1.75rem, 3vw, 2.5rem); font-weight: 300; color: var(--color-text); letter-spacing: -0.025em; line-height: 1.1; margin-bottom: var(--space-md); }
                .cp-dir-sub { font-size: 1.0625rem; line-height: 1.7; color: var(--color-text-light); margin-bottom: var(--space-3xl); }
                .cp-depts { display: flex; flex-direction: column; gap: 0; border-top: 1px solid var(--color-border); }
                .cp-dept { padding: var(--space-xl) 0; border-bottom: 1px solid var(--color-border); display: grid; grid-template-columns: 160px 1fr; gap: var(--space-xl); }
                .cp-dept-name { font-family: var(--font-mono); font-size: 0.625rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(0,0,0,0.35); padding-top: 2px; }
                .cp-dept-rows { display: flex; flex-direction: column; gap: 6px; }
                .cp-dept-row { display: flex; align-items: baseline; justify-content: space-between; gap: var(--space-md); }
                .cp-dept-person { font-size: 0.9375rem; font-weight: 500; color: var(--color-text); display: flex; flex-direction: column; gap: 1px; }
                .cp-dept-person em { font-style: normal; font-size: 0.6875rem; font-family: var(--font-mono); font-weight: 400; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(0,0,0,0.3); }
                .cp-dept-phone { font-family: var(--font-mono); font-size: 0.875rem; font-weight: 500; color: var(--color-text); text-decoration: none; white-space: nowrap; transition: color 0.2s; }
                .cp-dept-phone:hover { color: var(--color-accent); }
                .cp-dept-email { font-size: 0.875rem; font-weight: 500; color: var(--color-accent); text-decoration: none; transition: opacity 0.2s; }
                .cp-dept-email:hover { opacity: 0.75; }
                /* Working hours */
                .cp-hours { margin-top: var(--space-2xl); background: var(--color-primary); padding: var(--space-xl) var(--space-xl) 0; }
                .cp-hours-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-lg); }
                .cp-hours-label { font-family: var(--font-mono); font-size: 0.5625rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.16em; color: rgba(255,255,255,0.35); }
                .cp-hours-status { display: flex; align-items: center; gap: 6px; font-family: var(--font-mono); font-size: 0.5625rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #4ade80; }
                .cp-hours-dot { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; flex-shrink: 0; animation: hours-pulse 2.2s ease-in-out infinite; }
                @keyframes hours-pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.45; transform: scale(0.7); } }
                .cp-hours-table { display: flex; flex-direction: column; border-top: 1px solid rgba(255,255,255,0.06); }
                .cp-hours-row { display: flex; align-items: center; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
                .cp-hours-row:last-child { border-bottom: none; }
                .cp-hours-day { font-size: 0.8125rem; font-weight: 500; color: rgba(255,255,255,0.55); }
                .cp-hours-time { font-family: var(--font-mono); font-size: 0.75rem; font-weight: 500; color: var(--color-white); letter-spacing: 0.04em; }
                .cp-hours-closed { color: rgba(255,255,255,0.22) !important; }
                /* Emergency strip */
                .cp-emergency { display: flex; align-items: center; gap: 10px; padding: var(--space-lg) var(--space-xl); margin: 0 calc(-1 * var(--space-xl)); margin-top: var(--space-lg); background: rgba(200,16,46,0.08); border-top: 1px solid rgba(200,16,46,0.18); }
                .cp-emerg-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--color-accent); flex-shrink: 0; animation: hours-pulse 1.6s ease-in-out infinite; }
                .cp-emergency > div { flex: 1; display: flex; flex-direction: column; gap: 2px; }
                .cp-emerg-label { font-family: var(--font-mono); font-size: 0.5rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; color: rgba(255,255,255,0.35); }
                .cp-emerg-num { font-family: var(--font-mono); font-size: 0.875rem; font-weight: 600; color: var(--color-white); letter-spacing: 0.04em; text-decoration: none; transition: color 0.2s; }
                .cp-emerg-num:hover { color: var(--color-accent); }
                .cp-emerg-badge { font-family: var(--font-mono); font-size: 0.5rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-accent); border: 1px solid rgba(200,16,46,0.4); padding: 3px 7px; flex-shrink: 0; }
                .cp-dept-phone--tbd { opacity: 0.35; font-style: italic; font-family: var(--font-sans); font-size: 0.8125rem; }

                /* Form card */
                .cp-form-card { background: var(--color-primary); padding: var(--space-3xl); position: sticky; top: calc(var(--header-height) + 24px); }
                .cp-form-header { margin-bottom: var(--space-2xl); }
                .cp-form-heading { font-family: var(--font-display); font-size: 1.875rem; font-weight: 300; color: var(--color-white); letter-spacing: -0.025em; line-height: 1.1; margin-bottom: var(--space-sm); }
                .cp-form-sub { font-size: 0.9375rem; color: rgba(255,255,255,0.38); line-height: 1.6; }
                .cp-form { display: flex; flex-direction: column; gap: var(--space-lg); }
                .cp-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); }
                .cp-field { display: flex; flex-direction: column; gap: 6px; }

                /* Label */
                .cp-label { font-family: var(--font-mono); font-size: 0.625rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.4); display: flex; align-items: center; gap: 6px; }
                .cp-label span { color: var(--color-accent); }
                .cp-optional { font-style: normal; font-size: 0.5rem; letter-spacing: 0.08em; color: rgba(255,255,255,0.2); font-weight: 400; border: 1px solid rgba(255,255,255,0.1); padding: 1px 6px; }

                /* Inputs */
                .cp-input { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09); padding: 10px 14px; font-size: 0.9375rem; color: var(--color-white); font-family: var(--font-sans); outline: none; transition: border-color 0.2s, background 0.2s; width: 100%; box-sizing: border-box; }
                .cp-input::placeholder { color: rgba(255,255,255,0.2); }
                .cp-input:focus { border-color: rgba(255,255,255,0.28); background: rgba(255,255,255,0.08); }
                .cp-input--err { border-color: var(--color-accent) !important; }
                .cp-input:disabled { opacity: 0.35; cursor: not-allowed; }

                /* Phone */
                .cp-phone-wrap { display: flex; }
                .cp-phone-code {
                    width: 180px; flex-shrink: 0; border-right: none !important;
                    appearance: none; cursor: pointer; padding: 10px 8px;
                    background-color: rgba(255,255,255,0.08); font-size: 0.8125rem;
                    font-family: var(--font-sans); border-radius: 0;
                }
                .cp-phone-code option { background: #1b1b1f; }
                .cp-phone-num { flex: 1; min-width: 0; }

                /* Location */
                .cp-location-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; }
                .cp-location-slot { display: flex; flex-direction: column; gap: 4px; }
                .cp-location-slot-label { font-family: var(--font-mono); font-size: 0.5rem; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.22); }
                .cp-location-select { font-size: 0.8125rem; padding: 9px 28px 9px 10px; }

                /* Select */
                .cp-select { appearance: none; cursor: pointer; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.35)' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 10px center; padding-right: 28px; }
                .cp-select option { background: #1b1b1f; color: white; }

                /* Textarea */
                .cp-textarea { resize: vertical; min-height: 96px; font-family: var(--font-sans); line-height: 1.6; }

                .cp-err { font-family: var(--font-mono); font-size: 0.5625rem; color: var(--color-accent); letter-spacing: 0.04em; }

                /* Premium checkbox */
                .cp-check-row { display: flex; flex-direction: column; gap: 8px; margin-top: 4px; }
                .cp-check-label { display: flex; align-items: flex-start; gap: 12px; cursor: pointer; user-select: none; }
                .cp-checkbox-native { position: absolute; opacity: 0; width: 0; height: 0; }
                .cp-checkbox-box { width: 20px; height: 20px; flex-shrink: 0; margin-top: 1px; border: 1.5px solid rgba(255,255,255,0.18); background: rgba(255,255,255,0.04); display: flex; align-items: center; justify-content: center; transition: border-color 0.2s, background 0.2s; cursor: pointer; }
                .cp-check-label:hover .cp-checkbox-box { border-color: rgba(255,255,255,0.35); }
                .cp-checkbox-box--checked { background: var(--color-accent); border-color: var(--color-accent); }
                .cp-checkbox-box--err { border-color: var(--color-accent) !important; box-shadow: 0 0 0 3px rgba(200,16,46,0.15); }
                .cp-checkbox-tick { color: white; opacity: 0; transform: scale(0.5); transition: opacity 0.15s, transform 0.15s; }
                .cp-checkbox-box--checked .cp-checkbox-tick { opacity: 1; transform: scale(1); }
                .cp-check-text { font-size: 0.8125rem; color: rgba(255,255,255,0.38); line-height: 1.55; }
                .cp-check-text a { color: rgba(255,255,255,0.65); text-decoration: underline; text-underline-offset: 3px; transition: color 0.2s; }
                .cp-check-text a:hover { color: var(--color-white); }
                .cp-err--check { padding-left: 32px; }

                /* Submit */
                .cp-submit { display: flex; align-items: center; justify-content: center; gap: 8px; padding: 14px 28px; background: var(--color-accent); color: var(--color-white); font-family: var(--font-mono); font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; border: 1px solid var(--color-accent); cursor: pointer; transition: background 0.2s, color 0.2s, gap 0.2s; width: 100%; margin-top: var(--space-sm); }
                .cp-submit:hover:not(:disabled) { background: transparent; color: var(--color-white); gap: 14px; }
                .cp-submit:disabled { opacity: 0.5; cursor: not-allowed; }
                .cp-spinner { width: 14px; height: 14px; border: 2px solid rgba(255,255,255,0.3); border-top-color: white; border-radius: 50%; animation: cp-spin 0.7s linear infinite; flex-shrink: 0; }
                @keyframes cp-spin { to { transform: rotate(360deg); } }

                /* Success */
                .cp-success { text-align: center; padding: var(--space-4xl) 0; }
                .cp-success-icon { width: 56px; height: 56px; border-radius: 50%; background: rgba(200,16,46,0.1); border: 1px solid rgba(200,16,46,0.25); display: flex; align-items: center; justify-content: center; color: var(--color-accent); margin: 0 auto var(--space-xl); }
                .cp-success h3 { font-family: var(--font-display); font-size: 1.5rem; font-weight: 300; color: var(--color-white); margin-bottom: var(--space-sm); }
                .cp-success p { font-size: 0.9375rem; color: rgba(255,255,255,0.4); margin-bottom: var(--space-xl); }
                .cp-success-reset { background: none; border: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.45); padding: 8px 20px; font-size: 0.8125rem; cursor: pointer; transition: border-color 0.2s, color 0.2s; font-family: var(--font-sans); }
                .cp-success-reset:hover { border-color: rgba(255,255,255,0.3); color: var(--color-white); }

                /* Locations */
                .cp-locations { background: rgba(17,17,20,0.02); padding: var(--space-5xl) 0; border-top: 1px solid var(--color-border); }
                .cp-loc-header { margin-bottom: var(--space-4xl); }
                .cp-loc-eyebrow { font-family: var(--font-mono); font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.14em; color: var(--color-accent); margin-bottom: var(--space-md); }
                .cp-loc-heading { font-family: var(--font-display); font-size: clamp(1.75rem, 3vw, 2.5rem); font-weight: 300; color: var(--color-text); letter-spacing: -0.025em; line-height: 1.1; }
                .cp-loc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-2xl); }
                .cp-loc-card { background: var(--color-white); border: 1px solid var(--color-border); overflow: hidden; transition: box-shadow 0.2s; }
                .cp-loc-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); }
                .cp-loc-img { height: 180px; background-size: cover; background-position: center; position: relative; }
                .cp-loc-tag { position: absolute; bottom: 12px; left: 12px; background: var(--color-primary); color: var(--color-white); font-family: var(--font-mono); font-size: 0.5625rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; padding: 4px 10px; }
                .cp-loc-body { padding: var(--space-xl); }
                .cp-loc-name { font-family: var(--font-display); font-size: 1.1875rem; font-weight: 400; color: var(--color-text); letter-spacing: -0.02em; margin-bottom: var(--space-sm); }
                .cp-loc-addr { font-size: 0.9375rem; line-height: 1.65; color: var(--color-text-light); margin-bottom: var(--space-lg); }
                .cp-loc-map { overflow: hidden; margin-bottom: var(--space-lg); border: 1px solid var(--color-border); }
                .cp-loc-link { display: inline-flex; align-items: center; gap: 6px; font-size: 0.8125rem; font-weight: 600; color: var(--color-accent); text-decoration: none; transition: gap 0.2s; }
                .cp-loc-link:hover { gap: 10px; }

                /* Responsive */
                @media (max-width: 1024px) { .cp-grid { grid-template-columns: 1fr; gap: var(--space-4xl); } .cp-form-card { position: static; } }
                @media (max-width: 768px) { .cp-dept { grid-template-columns: 1fr; gap: var(--space-sm); } .cp-dept-row { flex-direction: column; align-items: flex-start; gap: 2px; } .cp-loc-grid { grid-template-columns: 1fr; } .cp-row { grid-template-columns: 1fr; } .cp-location-grid { grid-template-columns: 1fr; } }
                @media (max-width: 480px) { .cp-form-card { padding: var(--space-2xl); } .cp-phone-code { width: 130px; } }
            `}</style>
        </div>
    );
};

export default Contact;
