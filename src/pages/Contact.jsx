import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';

// Import images
import heroBg from '../assets/iec-hero-bg.jpeg';
import projectBg from '../assets/project-banner-bg.jpg';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        description: '',
        agreement: false
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const validate = (values) => {
        const errors = {};
        if (!values.name.trim()) errors.name = 'Full Name is required';
        if (!values.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.phone.trim()) errors.phone = 'Phone is required';
        else if (!/^[0-9+\s-]{10,15}$/.test(values.phone)) errors.phone = 'Invalid phone number';

        if (!values.company.trim()) errors.company = 'Company Name is required';
        if (!values.description.trim()) errors.description = 'Message is required';
        else if (values.description.trim().length < 10) errors.description = 'Message must be at least 10 characters';

        if (!values.agreement) errors.agreement = 'You must accept terms';

        return errors;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;

        setFormData(prev => ({ ...prev, [name]: val }));

        if (touched[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        const validationErrors = validate(formData);
        if (validationErrors[name]) {
            setErrors(prev => ({ ...prev, [name]: validationErrors[name] }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(formData);
        setErrors(validationErrors);
        setTouched({
            name: true, email: true, phone: true, company: true,
            service: true, description: true, agreement: true
        });

        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);
            setTimeout(() => {
                console.log('Form Submitted:', formData);
                setIsSubmitting(false);
                setSubmitted(true);
                setFormData({
                    name: '', email: '', phone: '', company: '',
                    service: '', description: '', agreement: false
                });
                setTouched({});
            }, 1500);
        }
    };

    const serviceOptions = [
        "Motor Rewinding & Repair",
        "Generator Maintenance",
        "Transformer Services",
        "Vibration Analysis",
        "Thermography",
        "Dynamic Balancing",
        "Laser Alignment",
        "Other Inquiry"
    ];

    return (
        <div className="contact-page">
            {/* Standard Hero Component - Restores Branding */}
            <PageHero
                label="Get In Touch"
                title="Contact Us"
                subtitle="Have a question or need expert assistance? We are here to help."
                breadcrumbs={[{ label: 'Contact' }]}
            />

            <section className="section">
                <div className="container">
                    <div className="contact-layout">

                        {/* ─── LEFT: Contact Directory ─── */}
                        <div className="contact-info">
                            <div className="section-header">
                                <span className="label text-accent">Directory</span>
                                <h2>Reach Our Team</h2>
                                <p className="section-desc">Connect directly with the right department for your needs.</p>
                            </div>

                            <div className="dept-list">
                                {/* Corporate / Key Contacts */}
                                <div className="dept-card">
                                    <div className="dept-content">
                                        <h3 className="dept-title">Key Contacts</h3>
                                        <div className="contact-grid">
                                            <div className="contact-item">
                                                <span className="contact-role">Mr. Anil Bhardwaj</span>
                                                <a href="tel:+919824214839" className="contact-number">+91 98242 14839</a>
                                            </div>
                                            <div className="contact-item">
                                                <span className="contact-role">Mrs. Arpana Anil Bharadwaj</span>
                                                <a href="tel:+919712914839" className="contact-number">+91 97129 14839</a>
                                            </div>
                                            <div className="contact-item">
                                                <span className="contact-role">Email</span>
                                                <a href="mailto:anil@iecindia.co.in" className="contact-email">anil@iecindia.co.in</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Technical Query */}
                                <div className="dept-card">
                                    <div className="dept-content">
                                        <h3 className="dept-title">Technical Query</h3>
                                        <div className="contact-grid compact-grid">
                                            <div className="contact-row">
                                                <a href="tel:+919824214839" className="contact-link">+91 98242 14839</a>
                                                <span className="contact-name">(Mr. Anil Bhardwaj)</span>
                                            </div>
                                            <div className="contact-row">
                                                <a href="tel:+918238336294" className="contact-link">+91 82383 36294</a>
                                                <span className="contact-name">(Mr. A.D. Kokje)</span>
                                            </div>
                                            <div className="contact-row">
                                                <a href="tel:+919601942325" className="contact-link">+91 96019 42325</a>
                                                <span className="contact-name">(Mr. K.H. Mehta)</span>
                                            </div>
                                            <div className="contact-row">
                                                <a href="tel:+919824348744" className="contact-link">+91 98243 48744</a>
                                                <span className="contact-name">(Mr. C.N. Dandiwala)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Sales & Marketing */}
                                <div className="dept-card">
                                    <div className="dept-content">
                                        <h3 className="dept-title">Sales & Marketing</h3>
                                        <div className="contact-grid compact-grid">
                                            <div className="contact-row">
                                                <a href="tel:+919824029088" className="contact-link">+91 98240 29088</a>
                                                <span className="contact-name">(Enquiry)</span>
                                            </div>
                                            <div className="contact-row">
                                                <a href="tel:+919824024839" className="contact-link">+91 98240 24839</a>
                                                <span className="contact-name">(Mr. Jatin Shah)</span>
                                            </div>
                                            <div className="contact-row">
                                                <a href="tel:+919824174989" className="contact-link">+91 98241 74989</a>
                                                <span className="contact-name">(Mr. Jitu Shah)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Purchase & Finance */}
                                <div className="dept-card">
                                    <div className="dept-content">
                                        <h3 className="dept-title">Purchase & Finance</h3>
                                        <div className="contact-grid">
                                            <div className="contact-row">
                                                <a href="tel:+919824684540" className="contact-link">+91 98246 84540</a>
                                                <span className="contact-name">(Mrs. Purnima Sharma)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ─── RIGHT: Form Card ─── */}
                        <div className="contact-form-wrapper">
                            <div className="form-card">
                                <h3>Send a Message</h3>
                                <p className="form-subtitle">Fill out the form below and we will get back to you shortly.</p>

                                {submitted ? (
                                    <div className="form-success">
                                        <div className="success-icon">
                                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                        <h4>Thank You!</h4>
                                        <p>Your message has been sent successfully.</p>
                                        <button onClick={() => setSubmitted(false)} className="btn btn-sm btn-outline">Send New Message</button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} noValidate>
                                        <div className="form-group material-input">
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="Full Name *"
                                                className={touched.name && errors.name ? 'error' : ''}
                                            />
                                            {touched.name && errors.name && <span className="err-msg">{errors.name}</span>}
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group material-input">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    placeholder="Email Address *"
                                                    className={touched.email && errors.email ? 'error' : ''}
                                                />
                                                {touched.email && errors.email && <span className="err-msg">{errors.email}</span>}
                                            </div>
                                            <div className="form-group material-input">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    placeholder="Phone Number *"
                                                    className={touched.phone && errors.phone ? 'error' : ''}
                                                />
                                                {touched.phone && errors.phone && <span className="err-msg">{errors.phone}</span>}
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group material-input">
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    placeholder="Company Name *"
                                                    className={touched.company && errors.company ? 'error' : ''}
                                                />
                                                {touched.company && errors.company && <span className="err-msg">{errors.company}</span>}
                                            </div>
                                            <div className="form-group material-input">
                                                <select name="service" value={formData.service} onChange={handleChange}>
                                                    <option value="">Select Service (Optional)</option>
                                                    {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group material-input">
                                            <textarea
                                                name="description"
                                                rows="1"
                                                value={formData.description}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="How can we help you? *"
                                                className={touched.description && errors.description ? 'error' : ''}
                                                style={{ minHeight: '40px', resize: 'vertical' }}
                                            />
                                            {touched.description && errors.description && <span className="err-msg">{errors.description}</span>}
                                        </div>

                                        <div className="form-group checkbox-group">
                                            <label className="checkbox-label">
                                                <input
                                                    type="checkbox"
                                                    name="agreement"
                                                    checked={formData.agreement}
                                                    onChange={handleChange}
                                                />
                                                <span>I agree to the <Link to="/terms">Terms</Link> & <Link to="/privacy">Privacy Policy</Link></span>
                                            </label>
                                            {touched.agreement && errors.agreement && <span className="err-msg">{errors.agreement}</span>}
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── VISUALS & LOCATIONS SECTION ─── */}
            <section className="section bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="label text-accent">Our Presence</span>
                        <h2>Visit Our Facilities</h2>
                    </div>

                    <div className="locations-grid">
                        {/* Location 1 */}
                        <div className="location-card">
                            <div className="loc-image" style={{ backgroundImage: `url(${heroBg})` }}>
                                <span className="loc-tag">Headquarters</span>
                            </div>
                            <div className="loc-content">
                                <h3>IEC • Ranoli HQ</h3>
                                <p className="address">Plot No. 613, GIDC Estate, Ranoli,<br />Dist. Vadodara – 391350, Gujarat</p>
                                <div className="loc-actions">
                                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-link">Get Directions →</a>
                                </div>
                                <div className="map-embed">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.1!2d73.228!3d22.31!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc88a3a3a3a3a%3A0x0!2z613%20GIDC%20Estate%20Ranoli!5e0!3m2!1sen!2sin!4v1700000000000"
                                        width="100%" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>

                        {/* Location 2 */}
                        <div className="location-card">
                            <div className="loc-image" style={{ backgroundImage: `url(${projectBg})` }}>
                                <span className="loc-tag">FACTORY & WORKSHOP</span>
                            </div>
                            <div className="loc-content">
                                <h3>IEC • Raika Workshop</h3>
                                <p className="address">Plot Survey No. 165/1, Opp. Ishan Equipment,<br />Village Raika, NH 8, Vadodara</p>
                                <div className="loc-actions">
                                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-link">Get Directions →</a>
                                </div>
                                <div className="map-embed">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5!2d73.15!3d22.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8b0b0b0b0b0%3A0x0!2zPlot%20165%20Raika%20NH8!5e0!3m2!1sen!2sin!4v1700000000000"
                                        width="100%" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                /* Layout */
                .contact-layout {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-4xl);
                    align-items: start;
                }

                .section-desc {
                    font-size: 1.125rem;
                    color: var(--color-text-light);
                    margin-bottom: var(--space-xl);
                }

                /* Directory Styles */
                .dept-list {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-lg);
                }
                .dept-card {
                    padding-bottom: var(--space-md);
                    border-bottom: 1px dashed var(--color-border);
                }
                .dept-card:last-child { border-bottom: none; }
                
                .dept-title {
                    font-family: var(--font-serif); /* Playfair */
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: var(--color-primary);
                    margin-bottom: var(--space-sm);
                }
                .text-white { color: white; }

                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 8px;
                }
                .compact-grid { gap: 4px; }

                .contact-item {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 4px;
                }
                
                .contact-row {
                    display: flex;
                    align-items: baseline;
                    gap: 8px;
                    font-size: 0.9375rem;
                }
                
                .contact-role {
                    font-size: 0.8125rem;
                    font-weight: 700;
                    color: var(--color-text);
                    margin-bottom: 0;
                }
                
                .contact-number, .contact-link {
                    font-size: 1rem;
                    font-weight: 500;
                    color: var(--color-text);
                    text-decoration: none;
                    font-family: var(--font-sans);
                    transition: color 0.2s;
                }
                .contact-link { color: var(--color-primary); font-weight: 600; }
                .contact-number:hover, .contact-link:hover { color: var(--color-accent); }
                
                .contact-name {
                    font-size: 0.875rem;
                    color: var(--color-text-light);
                }
                
                .contact-email {
                    font-size: 0.9375rem;
                    color: var(--color-accent);
                    font-weight: 500;
                    text-decoration: none;
                }
                .contact-email:hover { text-decoration: underline; }

                .highlight-card {
                    background: var(--color-primary); 
                    padding: var(--space-lg);
                    border-radius: 8px;
                    border: none;
                    color: white;
                }
                .hours-text { color: rgba(255,255,255,0.9); line-height: 1.6; font-size: 1.0625rem; }
                .hours-text strong { color: white; display: block; margin-bottom: 4px; }

                /* Form Card */
                .form-card {
                    background: white;
                    padding: var(--space-2xl);
                    border-radius: 12px;
                    box-shadow: var(--shadow-lg);
                    border: 1px solid var(--color-border);
                }
                .form-card h3 {
                    font-family: var(--font-serif);
                    font-size: 1.75rem;
                    color: var(--color-primary);
                    margin-bottom: var(--space-xs);
                }
                .form-subtitle {
                    color: var(--color-text-light);
                    margin-bottom: var(--space-xl);
                    font-size: 0.9375rem;
                    font-family: var(--font-sans);
                }
                
                .form-group { margin-bottom: var(--space-md); position: relative; }
                .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-xl); }
                
                /* Material/Android Style Inputs */
                .material-input input, 
                .material-input select, 
                .material-input textarea {
                    font-family: var(--font-sans) !important;
                    width: 100%;
                    padding: 8px 0;
                    border: none;
                    border-bottom: 1px solid #cbd5e1; /* slate-300 */
                    border-radius: 0;
                    font-size: 1rem;
                    background: transparent;
                    color: var(--color-primary);
                    transition: border-color 0.3s, box-shadow 0.3s;
                }
                
                .material-input input:focus, 
                .material-input select:focus, 
                .material-input textarea:focus {
                    outline: none;
                    border-bottom-color: var(--color-primary);
                    box-shadow: 0 1px 0 0 var(--color-primary);
                }
                
                .material-input input::placeholder,
                .material-input textarea::placeholder {
                    color: #94a3b8; /* slate-400 */
                    font-size: 0.9375rem;
                }

                .error input, .error select, .error textarea {
                    border-bottom-color: #ef4444;
                }
                .err-msg { color: #ef4444; font-size: 0.75rem; display: block; margin-top: 4px; font-family: var(--font-sans); }
                
                .checkbox-group { margin-top: var(--space-lg); }
                .checkbox-label { 
                    display: flex; gap: 10px; align-items: flex-start; 
                    font-size: 0.875rem; color: var(--color-text-light); cursor: pointer;
                    font-family: var(--font-sans);
                }
                .checkbox-label input { width: auto; margin-top: 3px; accent-color: var(--color-primary); }
                .checkbox-label a { color: var(--color-primary); text-decoration: underline; }
                
                .btn-full { width: 100%; padding: 14px; margin-top: var(--space-md); font-weight: 600; font-family: var(--font-sans); }

                /* Locations Grid */
                .locations-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-2xl);
                    margin-top: var(--space-2xl);
                }
                .location-card {
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: var(--shadow-md);
                    transition: transform 0.3s;
                }
                .location-card:hover { transform: translateY(-4px); }
                
                .loc-image {
                    height: 200px;
                    background-size: cover;
                    background-position: center;
                    position: relative;
                }
                .loc-tag {
                    position: absolute;
                    bottom: 12px; left: 12px;
                    background: rgba(255,255,255,0.95);
                    padding: 4px 10px;
                    border-radius: 4px;
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--color-primary);
                    text-transform: uppercase;
                    font-family: var(--font-sans);
                }
                .loc-content { padding: var(--space-xl); }
                .loc-content h3 { 
                    color: var(--color-primary); 
                    margin-bottom: var(--space-xs); 
                    font-size: 1.25rem; 
                    font-weight: 700; 
                    font-family: var(--font-serif);
                }
                .address { color: var(--color-text-light); margin-bottom: var(--space-md); line-height: 1.5; font-size: 0.9375rem; font-family: var(--font-sans); }
                .map-embed { border-radius: 8px; overflow: hidden; margin-top: var(--space-md); }
                .btn-link { font-weight: 600; color: var(--color-accent); text-decoration: none; font-size: 0.875rem; font-family: var(--font-sans); }
                .btn-link:hover { text-decoration: underline; }

                @media (max-width: 900px) {
                    .contact-layout { grid-template-columns: 1fr; gap: var(--space-3xl); }
                    .locations-grid { grid-template-columns: 1fr; }
                    .form-row { grid-template-columns: 1fr; }
                }
            `}</style>
        </div>
    );
};

export default Contact;
