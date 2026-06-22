import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/iec-hero-bg.jpeg';
import easaLogo from '../assets/easa-logo.png';

/* ─────────────────────────────────────────────────────────────
 * DEV ONLY — HERO TINT COLOR PICKER
 * Remove this block (and <TintPicker /> below) before final launch
 * ───────────────────────────────────────────────────────────── */
function _rgbToHsv(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r,g,b), min = Math.min(r,g,b), d = max - min;
    let h = 0;
    const s = max === 0 ? 0 : d / max;
    const v = max;
    if (d) {
        if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        else if (max === g) h = ((b - r) / d + 2) / 6;
        else h = ((r - g) / d + 4) / 6;
    }
    return [h * 360, s * 100, v * 100];
}
function _hsvToRgb(h, s, v) {
    s /= 100; v /= 100;
    const i = Math.floor(h / 60) % 6;
    const f = h / 60 - Math.floor(h / 60);
    const p = v*(1-s), q = v*(1-f*s), t = v*(1-(1-f)*s);
    return [[v,t,p],[q,v,p],[p,v,t],[p,q,v],[t,p,v],[v,p,q]][i].map(x => Math.round(x*255));
}
function _toHex(r, g, b) {
    return '#' + [r,g,b].map(x => x.toString(16).padStart(2,'0')).join('');
}

const TintPicker = ({ current, onChange }) => {
    const [r0, g0, b0] = current.split(',').map(Number);
    const [h0, s0, v0] = _rgbToHsv(r0, g0, b0);
    const [hue, setHue] = React.useState(h0);
    const [sat, setSat] = React.useState(s0);
    const [bri, setBri] = React.useState(v0);
    const svRef  = React.useRef(null);
    const hueRef = React.useRef(null);
    const dragging = React.useRef(null);
    // keep a ref always pointing at latest hsv so the effect handler never goes stale
    const hsvRef = React.useRef({ hue, sat, bri });
    hsvRef.current = { hue, sat, bri };

    const cl = x => Math.max(0, Math.min(1, x));

    React.useEffect(() => {
        const move = (e) => {
            if (!dragging.current) return;
            const { hue: ch, sat: cs, bri: cv } = hsvRef.current;
            if (dragging.current === 'sv' && svRef.current) {
                const rc = svRef.current.getBoundingClientRect();
                const ns = cl((e.clientX - rc.left) / rc.width) * 100;
                const nv = (1 - cl((e.clientY - rc.top) / rc.height)) * 100;
                setSat(ns); setBri(nv);
                const [r,g,b] = _hsvToRgb(ch, ns, nv);
                onChange(`${r},${g},${b}`);
            }
            if (dragging.current === 'hue' && hueRef.current) {
                const rc = hueRef.current.getBoundingClientRect();
                const nh = cl((e.clientX - rc.left) / rc.width) * 360;
                setHue(nh);
                const [r,g,b] = _hsvToRgb(nh, cs, cv);
                onChange(`${r},${g},${b}`);
            }
        };
        const up = () => { dragging.current = null; };
        window.addEventListener('pointermove', move);
        window.addEventListener('pointerup', up);
        return () => {
            window.removeEventListener('pointermove', move);
            window.removeEventListener('pointerup', up);
        };
    }, [onChange]);

    const [rr, gg, bb] = _hsvToRgb(hue, sat, bri);
    const hex = _toHex(rr, gg, bb);
    const cursorStyle = { position:'absolute', width:16, height:16, borderRadius:'50%', border:'2.5px solid #fff', boxShadow:'0 0 0 1.5px rgba(0,0,0,0.35)', pointerEvents:'none', transform:'translate(-50%,-50%)' };

    return (
        <div style={{
            position:'fixed', bottom:24, right:24, zIndex:9999,
            background:'#fff', borderRadius:14, padding:16, width:268,
            boxShadow:'0 8px 40px rgba(0,0,0,0.22)', fontFamily:'-apple-system,sans-serif',
            userSelect:'none',
        }}>
            {/* Header */}
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12 }}>
                <span style={{ fontWeight:600, fontSize:14, color:'#1a1a1a' }}>Color picker</span>
                <span style={{ fontSize:10, color:'#aaa', background:'#f2f2f2', padding:'2px 6px', borderRadius:4 }}>DEV ONLY</span>
            </div>

            {/* SV canvas */}
            <div
                ref={svRef}
                onPointerDown={e => { dragging.current = 'sv'; e.currentTarget.setPointerCapture(e.pointerId); }}
                style={{
                    position:'relative', height:160, borderRadius:10, overflow:'hidden',
                    cursor:'crosshair', marginBottom:12,
                    background:`hsl(${hue},100%,50%)`,
                }}
            >
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, #fff, transparent)' }} />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, transparent, #000)' }} />
                <div style={{ ...cursorStyle, left:`${sat}%`, top:`${100-bri}%` }} />
            </div>

            {/* Hue slider */}
            <div
                ref={hueRef}
                onPointerDown={e => { dragging.current = 'hue'; e.currentTarget.setPointerCapture(e.pointerId); }}
                style={{
                    position:'relative', height:16, borderRadius:8, cursor:'pointer', marginBottom:14,
                    background:'linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)',
                }}
            >
                <div style={{
                    position:'absolute', top:'50%', left:`${hue/360*100}%`,
                    width:22, height:22, borderRadius:'50%', transform:'translate(-50%,-50%)',
                    border:'2.5px solid #fff', boxShadow:'0 0 0 1.5px rgba(0,0,0,0.25)',
                    background:`hsl(${hue},100%,50%)`, pointerEvents:'none',
                }} />
            </div>

            {/* HEX display */}
            <div style={{
                display:'flex', alignItems:'center', gap:10,
                background:'#f7f7f7', borderRadius:10, padding:'9px 12px', marginBottom:8,
            }}>
                <div style={{ width:28, height:28, borderRadius:6, background:hex, border:'1px solid rgba(0,0,0,0.1)', flexShrink:0 }} />
                <div style={{ flex:1, textAlign:'center' }}>
                    <div style={{ fontSize:10, color:'#999', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:2 }}>HEX</div>
                    <div style={{ fontWeight:700, fontSize:14, color:'#111' }}>{hex}</div>
                </div>
            </div>

            {/* RGB */}
            <div style={{ textAlign:'center', fontSize:11, color:'#888' }}>
                RGB &nbsp; {rr}, {gg}, {bb}
            </div>
        </div>
    );
};
/* ─── END DEV BLOCK ─────────────────────────────────────────── */

const capabilities = [
    { value: '20,000 HP', label: 'Motor Rewinding' },
    { value: '13.8 kV', label: 'Max Voltage' },
    { value: '20 MW', label: 'No-Load Testing' },
    { value: '300 T', label: 'Crane Capacity' },
    { value: '40+ Yrs', label: 'Experience' },
];

const Hero = () => {
    /* DEV ONLY — remove this line when removing the TintPicker */
    const [tint, setTint] = useState('10,20,50');

    return (
        <section className="hero">

            {/* Background photo */}
            <div className="hero-bg">
                <img src={heroBg} alt="" aria-hidden="true" />
                {/* DEV ONLY — style prop removed when TintPicker is removed */}
                <div className="hero-overlay" style={{ '--hero-tint': tint }} />
            </div>

            {/* Main body — content anchored to bottom */}
            <div className="container hero-body">
                <div className="hero-inner">

                    {/* Left: headline block */}
                    <div className="hero-content">
                        <p className="hero-label animate-fade-up">
                            Est. 1998 · Vadodara, Gujarat · ISO 9001
                        </p>

                        <h1 className="hero-title animate-fade-up delay-1">
                            Keeping India's<br />
                            biggest machines<br />
                            running.
                        </h1>

                        <p className="hero-tagline animate-fade-up delay-1">
                            Our Repairs Run the Industries
                        </p>

                        <div className="hero-actions animate-fade-up delay-2">
                            <Link to="/contact" className="hero-btn-primary">
                                Contact Us
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link to="/services" className="hero-btn-text">
                                View Services
                            </Link>
                        </div>
                    </div>

                    {/* Right: EASA credential card */}
                    <div className="hero-cred animate-fade-up delay-3">
                        <img src={easaLogo} alt="EASA" className="hero-cred-logo" />
                        <div className="hero-cred-info">
                            <strong>EASA Accredited Member</strong>
                            <span>Member since 2014</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Capability strip */}
            <div className="hero-caps">
                <div className="container hero-caps-inner">
                    {capabilities.map((cap, i) => (
                        <div className="cap-item" key={i}>
                            <span className="cap-val">{cap.value}</span>
                            <span className="cap-lbl">{cap.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* DEV ONLY — remove this line when removing TintPicker */}
            <TintPicker current={tint} onChange={setTint} />

            <style>{`

                .hero {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    background: var(--color-primary);
                }

                /* Photo */
                .hero-bg {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                }

                .hero-bg img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center 30%;
                    filter: brightness(0.88);
                    animation: kenburns 28s ease-out forwards;
                }

                @keyframes kenburns {
                    from { transform: scale(1.0); }
                    to   { transform: scale(1.05); }
                }

                /*
                 * ─── OVERLAY COLOUR ───────────────────────────────────────
                 * To swap tint colour (dark blue, grey, etc.) change ONE line:
                 *   --hero-tint: 5,7,10;        ← near-black (current)
                 *   --hero-tint: 10,20,50;       ← dark navy blue
                 *   --hero-tint: 28,28,35;       ← dark charcoal grey
                 * ──────────────────────────────────────────────────────────
                 */
                .hero-overlay {
                    --hero-tint: 10,20,50; /* fallback — overridden by inline style when TintPicker active */
                    position: absolute;
                    inset: 0;
                    background:
                        /* Left → right: dark to transparent */
                        linear-gradient(
                            to right,
                            rgba(var(--hero-tint), 0.96) 0%,
                            rgba(var(--hero-tint), 0.80) 28%,
                            rgba(var(--hero-tint), 0.35) 55%,
                            rgba(var(--hero-tint), 0) 72%
                        ),
                        /* Bottom strip: keep text area readable */
                        linear-gradient(
                            to top,
                            rgba(var(--hero-tint), 0.70) 0%,
                            rgba(var(--hero-tint), 0) 28%
                        );
                }

                /* Body: full-height, content pushed to bottom */
                .hero-body {
                    position: relative;
                    z-index: 2;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    padding-top: calc(var(--header-height) + var(--space-2xl));
                    padding-bottom: var(--space-4xl);
                }

                .hero-inner {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: var(--space-2xl);
                }

                /* Headline block */
                .hero-content {
                    max-width: 680px;
                }

                .hero-label {
                    font-family: var(--font-mono);
                    font-size: 0.6875rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.16em;
                    color: rgba(255,255,255,0.55);
                    margin-bottom: var(--space-lg);
                    opacity: 0;
                }

                .hero-title {
                    font-family: var(--font-serif);
                    font-size: clamp(2.75rem, 6vw, 5.5rem);
                    font-weight: 700;
                    color: var(--color-white);
                    line-height: 1.0;
                    letter-spacing: -0.03em;
                    margin-bottom: var(--space-md);
                    opacity: 0;
                }

                .hero-tagline {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: rgba(255,255,255,0.35);
                    margin-bottom: var(--space-xl);
                    opacity: 0;
                }

                .hero-actions {
                    display: flex;
                    align-items: center;
                    gap: var(--space-xl);
                    opacity: 0;
                }

                .hero-btn-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 14px 28px;
                    background: var(--color-white);
                    color: var(--color-text);
                    font-size: 0.8125rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    transition: all 0.25s var(--ease-out);
                }

                .hero-btn-primary:hover {
                    background: var(--color-accent);
                    color: var(--color-white);
                    gap: 14px;
                }

                .hero-btn-primary svg {
                    transition: transform 0.25s var(--ease-out);
                }

                .hero-btn-primary:hover svg {
                    transform: translateX(3px);
                }

                .hero-btn-text {
                    font-size: 0.875rem;
                    color: rgba(255,255,255,0.7);
                    font-weight: 500;
                    letter-spacing: 0.02em;
                    text-decoration: underline;
                    text-underline-offset: 4px;
                    text-decoration-color: rgba(255,255,255,0.3);
                    transition: color 0.2s, text-decoration-color 0.2s;
                }

                .hero-btn-text:hover {
                    color: var(--color-white);
                    text-decoration-color: rgba(255,255,255,0.7);
                }

                /* EASA credential card */
                .hero-cred {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding: 16px 20px;
                    background: rgba(5,7,10,0.65);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255,255,255,0.14);
                    flex-shrink: 0;
                    opacity: 0;
                }

                .hero-cred-logo {
                    width: 48px;
                    height: 48px;
                    object-fit: contain;
                    flex-shrink: 0;
                }

                .hero-cred-info {
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                }

                .hero-cred-info strong {
                    font-size: 0.8125rem;
                    font-weight: 600;
                    color: var(--color-white);
                    line-height: 1.3;
                }

                .hero-cred-info span {
                    font-family: var(--font-mono);
                    font-size: 0.625rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: rgba(255,255,255,0.5);
                }

                /* Capability strip */
                .hero-caps {
                    position: relative;
                    z-index: 3;
                    background: var(--color-primary);
                    border-top: 1px solid rgba(255,255,255,0.08);
                }

                .hero-caps-inner {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                }

                .cap-item {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    padding: var(--space-xl) var(--space-lg);
                    border-left: 1px solid rgba(255,255,255,0.07);
                    transition: background 0.2s;
                    cursor: default;
                }

                .cap-item:first-child {
                    border-left: none;
                    padding-left: 0;
                }

                .cap-item:hover {
                    background: rgba(255,255,255,0.03);
                }

                .cap-val {
                    font-family: var(--font-mono);
                    font-size: 1.375rem;
                    font-weight: 600;
                    color: var(--color-white);
                    line-height: 1;
                }

                .cap-lbl {
                    font-size: 0.6875rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: rgba(255,255,255,0.42);
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .hero-cred {
                        display: none;
                    }
                    .hero-caps-inner {
                        grid-template-columns: repeat(3, 1fr);
                    }
                    .cap-item:nth-child(4) {
                        border-left: none;
                        padding-left: 0;
                    }
                }

                @media (max-width: 768px) {
                    .hero-body {
                        padding-bottom: var(--space-3xl);
                    }
                    .hero-title {
                        font-size: clamp(2.25rem, 10vw, 3.5rem);
                    }
                    .hero-caps-inner {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .cap-item:nth-child(odd) {
                        border-left: none;
                        padding-left: 0;
                    }
                    .cap-item:last-child {
                        grid-column: span 2;
                        border-top: 1px solid rgba(255,255,255,0.07);
                        border-left: none;
                        text-align: center;
                        align-items: center;
                    }
                }

                @media (max-width: 480px) {
                    .hero-actions {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: var(--space-md);
                    }
                    .hero-btn-primary {
                        width: 100%;
                        justify-content: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
