import React, { useState, useRef, useEffect } from 'react';

/* ──────────────────────────────────────────────
   Mock AI response engine — keyword matching
   Replace with real API call when ready
   ────────────────────────────────────────────── */
const RESPONSES = [
    { keywords: ['motor', 'generator', 'repair', 'rewind'], response: "We specialize in high-voltage motor, generator and alternator repair: rewinding and reconditioning for machines up to 20,000 HP and 13.8 kV, serving clients like ABB, BHEL, CG Power Group, and Kirloskar Group. Want me to connect you with our engineering team?" },
    { keywords: ['pump', 'pumps'], response: "Our pump repair services cover industrial and high-voltage cryogenic submersible pumps (e.g. Ebara-make 6.6kV), with full reconditioning, precision balancing and testing." },
    { keywords: ['spare', 'parts', 'component'], response: "We fabricate critical rotating-machine spares in-house: rotor shafts, end shield covers, bearing housings, heat exchangers, cooling fans and commutators. Need a specific part? Share the model details and we'll check availability." },
    { keywords: ['price', 'cost', 'quote', 'estimate'], response: "For accurate pricing, I'd recommend speaking with our sales team directly. You can reach them at +91 98242 14839 (9AM–5PM) or submit a request through our Contact page." },
    { keywords: ['contact', 'phone', 'call', 'reach', 'email'], response: "You can reach us at:\n📞 +91 98242 14839 (Mon–Sat, 9AM–5PM)\n📍 Plot No. 613, GIDC Estate, Ranoli, Vadodara, Gujarat\nOr visit our Contact page to submit an enquiry!" },
    { keywords: ['about', 'company', 'iec', 'history', 'who'], response: "Indian Engineering Company was established in 1998 in Vadodara, Gujarat, backed by over 40 years of industry experience. We're EASA-certified (since 2014) and ISO 9001:2008 accredited, serving clients like ABB, BHEL, CG Power Group and Kirloskar Group." },
    { keywords: ['easa', 'certif', 'iso', 'quality'], response: "We're proud to be an EASA Accredited member since 2014, one of the few in India. We also hold ISO 9001:2008 certification, ensuring world-class quality standards in every repair we deliver." },
    { keywords: ['location', 'address', 'where', 'visit'], response: "We're located at Plot No. 613, GIDC Estate, Ranoli, Vadodara, Gujarat, with a second works at Raika on NH8. Our facilities span 300,000 sq ft total with a 75,000 sq ft shop floor. Want to schedule a facility tour?" },
    { keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening'], response: "Hello! 👋 Welcome to Indian Engineering Company. How can I assist you today? I can help with info about our motor & generator repair services, spare parts, or connect you with our team." },
    { keywords: ['thank', 'thanks', 'bye', 'goodbye'], response: "You're welcome! If you need anything else, don't hesitate to reach out. Have a great day! 🙏" },
    { keywords: ['infrastructure', 'facility', 'equipment', 'workshop'], response: "Our 300,000 sq ft works feature VPI plants, dynamic balancing machines up to 45 tons, cranes up to 300 tons, and a centralized testing bed rated for 20MW no-load testing. Want to see our Infrastructure page?" },
    { keywords: ['service', 'what do you do', 'offer'], response: "We offer comprehensive industrial repair services:\n⚡ Motor, Generator, Alternator & DC Motor Repair\n⚙️ Mechanical Repair\n🔧 Pumps (incl. cryogenic)\n🛠️ Spares Fabrication\n🔄 Preventive Maintenance / Overhauling\n\nWhat specific service interests you?" },
];

function getAIResponse(message) {
    const lower = message.toLowerCase();
    for (const item of RESPONSES) {
        if (item.keywords.some(kw => lower.includes(kw))) {
            return item.response;
        }
    }
    return "Thanks for your message! For detailed assistance, I'd recommend reaching out to our team at +91 98242 14839 or visiting our Contact page. Is there anything specific about our motor repair or engineering services I can help with?";
}

/* ──────────────────────────────────────────────
   Chatbot Component
   ────────────────────────────────────────────── */
const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [hasGreeted, setHasGreeted] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    // Greeting on first open
    const handleOpen = () => {
        setIsOpen(true);
        if (!hasGreeted) {
            setHasGreeted(true);
            setTimeout(() => {
                setMessages([{
                    id: Date.now(),
                    text: "Hello! 👋 I'm the IEC Assistant. How can I help you today? Ask me about our motor repair services, certifications, or anything else!",
                    sender: 'bot',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }]);
            }, 400);
        }
    };

    const sendMessage = () => {
        const text = input.trim();
        if (!text) return;

        const userMsg = {
            id: Date.now(),
            text,
            sender: 'user',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // Simulate AI "thinking" delay
        const delay = 800 + Math.random() * 1200;
        setTimeout(() => {
            const botMsg = {
                id: Date.now() + 1,
                text: getAIResponse(text),
                sender: 'bot',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, delay);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* ── Floating Trigger ── */}
            {!isOpen && (
                <button
                    className="chatbot-trigger"
                    onClick={handleOpen}
                    aria-label="Open chat"
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                </button>
            )}

            {/* ── Chat Panel ── */}
            <div className={`chatbot-panel ${isOpen ? 'open' : ''}`}>
                {/* Header */}
                <div className="chatbot-header">
                    <div className="chatbot-header-info">
                        <div className="chatbot-avatar">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                            </svg>
                        </div>
                        <div>
                            <span className="chatbot-title">IEC Assistant</span>
                            <span className="chatbot-status">
                                <span className="chatbot-status-dot"></span>
                                Online
                            </span>
                        </div>
                    </div>
                    <button className="chatbot-close" onClick={() => setIsOpen(false)} aria-label="Close chat">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Messages */}
                <div className="chatbot-messages">
                    {messages.map(msg => (
                        <div key={msg.id} className={`chatbot-msg ${msg.sender}`}>
                            <div className="chatbot-msg-bubble">
                                {msg.text.split('\n').map((line, i) => (
                                    <span key={i}>{line}{i < msg.text.split('\n').length - 1 && <br />}</span>
                                ))}
                            </div>
                            <span className="chatbot-msg-time">{msg.time}</span>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="chatbot-msg bot">
                            <div className="chatbot-msg-bubble typing">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="chatbot-input-area">
                    <input
                        ref={inputRef}
                        type="text"
                        className="chatbot-input"
                        placeholder="Ask about our services..."
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        className="chatbot-send"
                        onClick={sendMessage}
                        disabled={!input.trim()}
                        aria-label="Send message"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                    </button>
                </div>
            </div>

            <style>{`
                /* ========== CHATBOT TRIGGER ========== */
                .chatbot-trigger {
                    position: fixed;
                    bottom: 28px;
                    right: 28px;
                    z-index: 9999;
                    width: 52px;
                    height: 52px;
                    border-radius: 50%;
                    background: var(--color-text, #1a2332);
                    color: #fff;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15), 0 1px 4px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    animation: chatbot-appear 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }

                .chatbot-trigger:hover {
                    transform: scale(1.08);
                    box-shadow: 0 6px 28px rgba(0, 0, 0, 0.2);
                }

                @keyframes chatbot-appear {
                    from { opacity: 0; transform: scale(0.6) translateY(12px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }

                /* ========== CHAT PANEL ========== */
                .chatbot-panel {
                    position: fixed;
                    bottom: 28px;
                    right: 28px;
                    z-index: 10000;
                    width: 370px;
                    height: 500px;
                    max-height: calc(100vh - 80px);
                    border-radius: 16px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    background: rgba(255, 255, 255, 0.82);
                    backdrop-filter: blur(24px) saturate(180%);
                    -webkit-backdrop-filter: blur(24px) saturate(180%);
                    border: 1px solid rgba(0, 0, 0, 0.06);
                    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06);
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(16px) scale(0.96);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    pointer-events: none;
                }

                .chatbot-panel.open {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0) scale(1);
                    pointer-events: all;
                }

                /* ========== HEADER ========== */
                .chatbot-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 14px 18px;
                    background: var(--color-text, #1a2332);
                    color: #fff;
                    flex-shrink: 0;
                }

                .chatbot-header-info {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .chatbot-avatar {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.15);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .chatbot-title {
                    display: block;
                    font-size: 0.875rem;
                    font-weight: 600;
                    letter-spacing: -0.01em;
                }

                .chatbot-status {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    font-size: 0.6875rem;
                    opacity: 0.7;
                    font-weight: 400;
                }

                .chatbot-status-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #4ade80;
                    display: inline-block;
                }

                .chatbot-close {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    color: #fff;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.15s;
                }

                .chatbot-close:hover {
                    background: rgba(255, 255, 255, 0.2);
                }

                /* ========== MESSAGES ========== */
                .chatbot-messages {
                    flex: 1;
                    overflow-y: auto;
                    padding: 18px 16px;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    background: rgba(250, 249, 248, 0.5);
                }

                .chatbot-messages::-webkit-scrollbar {
                    width: 4px;
                }

                .chatbot-messages::-webkit-scrollbar-track {
                    background: transparent;
                }

                .chatbot-messages::-webkit-scrollbar-thumb {
                    background: rgba(0, 0, 0, 0.1);
                    border-radius: 4px;
                }

                .chatbot-msg {
                    display: flex;
                    flex-direction: column;
                    max-width: 82%;
                    animation: msg-in 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .chatbot-msg.user {
                    align-self: flex-end;
                    align-items: flex-end;
                }

                .chatbot-msg.bot {
                    align-self: flex-start;
                    align-items: flex-start;
                }

                .chatbot-msg-bubble {
                    padding: 10px 14px;
                    border-radius: 14px;
                    font-size: 0.8125rem;
                    line-height: 1.5;
                    word-wrap: break-word;
                }

                .chatbot-msg.user .chatbot-msg-bubble {
                    background: var(--color-text, #1a2332);
                    color: #fff;
                    border-bottom-right-radius: 4px;
                }

                .chatbot-msg.bot .chatbot-msg-bubble {
                    background: #fff;
                    color: var(--color-text, #2c2825);
                    border: 1px solid rgba(0, 0, 0, 0.06);
                    border-bottom-left-radius: 4px;
                }

                .chatbot-msg-time {
                    font-size: 0.625rem;
                    color: var(--color-muted, #9a9590);
                    margin-top: 3px;
                    padding: 0 4px;
                }

                @keyframes msg-in {
                    from { opacity: 0; transform: translateY(6px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                /* Typing indicator */
                .chatbot-msg-bubble.typing {
                    display: flex;
                    gap: 4px;
                    padding: 12px 18px;
                    background: #fff;
                    border: 1px solid rgba(0, 0, 0, 0.06);
                }

                .chatbot-msg-bubble.typing .dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: var(--color-muted, #9a9590);
                    animation: typing-bounce 1.2s infinite;
                }

                .chatbot-msg-bubble.typing .dot:nth-child(2) {
                    animation-delay: 0.15s;
                }

                .chatbot-msg-bubble.typing .dot:nth-child(3) {
                    animation-delay: 0.3s;
                }

                @keyframes typing-bounce {
                    0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
                    30% { transform: translateY(-4px); opacity: 1; }
                }

                /* ========== INPUT AREA ========== */
                .chatbot-input-area {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 12px 14px;
                    border-top: 1px solid rgba(0, 0, 0, 0.06);
                    background: rgba(255, 255, 255, 0.9);
                    flex-shrink: 0;
                }

                .chatbot-input {
                    flex: 1;
                    padding: 10px 14px;
                    font-size: 0.8125rem;
                    border: 1px solid rgba(0, 0, 0, 0.08);
                    border-radius: 10px;
                    outline: none;
                    background: rgba(250, 249, 248, 0.8);
                    color: var(--color-text, #2c2825);
                    transition: border-color 0.2s;
                    font-family: inherit;
                }

                .chatbot-input::placeholder {
                    color: var(--color-muted, #9a9590);
                }

                .chatbot-input:focus {
                    border-color: var(--color-accent, #c8102e);
                    background: #fff;
                }

                .chatbot-send {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: var(--color-accent, #c8102e);
                    color: #fff;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    transition: all 0.2s;
                }

                .chatbot-send:hover:not(:disabled) {
                    background: var(--color-accent-hover, #a00d24);
                    transform: scale(1.05);
                }

                .chatbot-send:disabled {
                    opacity: 0.35;
                    cursor: default;
                }

                /* ========== MOBILE ========== */
                @media (max-width: 480px) {
                    .chatbot-panel {
                        width: calc(100vw - 24px);
                        height: calc(100vh - 100px);
                        bottom: 12px;
                        right: 12px;
                        border-radius: 14px;
                    }

                    .chatbot-trigger {
                        bottom: 18px;
                        right: 18px;
                        width: 48px;
                        height: 48px;
                    }
                }
            `}</style>
        </>
    );
};

export default Chatbot;
