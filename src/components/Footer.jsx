import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer style={{ fontFamily: "'Sulphur Point', sans-serif", position: 'relative', zIndex: 1 }}>

            <div
                style={{
                    backgroundColor: '#0B0B0C',
                    overflow: 'hidden',
                    position: 'relative',
                    padding: '0 0 0.5rem',
                }}
            >
                <svg
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04 }}
                    preserveAspectRatio="none"
                >
                    <defs>
                        <pattern id="footer-hatch" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
                            <line x1="0" y1="0" x2="0" y2="20" stroke="#ffffff" strokeWidth="6" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#footer-hatch)" />
                </svg>

                <svg
                    width="48" height="48" viewBox="0 0 48 48" fill="none"
                    style={{ position: 'absolute', top: '1.5rem', right: '2.5rem', opacity: 0.35 }}
                >
                    <path d="M24 2 L27 20 L44 24 L27 28 L24 46 L21 28 L4 24 L21 20 Z"
                        stroke="#00E5FF" strokeWidth="1.5" fill="none" />
                </svg>

                <svg
                    width="60" height="60" viewBox="0 0 60 60" fill="none"
                    style={{ position: 'absolute', top: '1rem', left: '2rem', opacity: 0.15 }}
                >
                    <ellipse cx="30" cy="30" rx="26" ry="27" stroke="#ffffff" strokeWidth="2" fill="none" />
                </svg>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        lineHeight: 0.85,
                        paddingTop: '1rem',
                    }}
                >
                    <span
                        style={{
                            fontFamily: "'Sulphur Point', sans-serif",
                            fontSize: 'clamp(5.5rem, 22vw, 22rem)',
                            fontWeight: 1000,
                            color: '#FFFFFF',
                            letterSpacing: '0.03em',
                            whiteSpace: 'nowrap',
                            display: 'block',
                            textShadow: '3px 3px 0 rgba(255,255,255,0.08), -1px -1px 0 rgba(255,255,255,0.05)',
                        }}
                    >
                        SURIYA
                    </span>
                </motion.div>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1.5rem',
                        padding: '1.2rem 2rem 2rem',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        marginTop: '0.5rem',
                        flexWrap: 'wrap',
                    }}
                >
                    {['Computer Science Student', 'Web Developer', 'UI/UX Designer'].map((t, i) => (
                        <span
                            key={i}
                            style={{
                                fontFamily: "'Sulphur Point', sans-serif",
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                color: 'rgba(255,255,255,0.5)',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                            }}
                        >
                            {t}
                            {i < 2 && (
                                <span style={{ color: 'rgba(0,229,255,0.4)', fontSize: '0.8rem' }}>✦</span>
                            )}
                        </span>
                    ))}
                </div>
            </div>

            <div
                style={{
                    backgroundColor: '#050505',
                    padding: '0.85rem 3rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                }}
            >
                <span
                    style={{
                        fontFamily: "'Sulphur Point', sans-serif",
                        fontSize: '0.95rem',
                        color: 'rgba(255,255,255,0.35)',
                        letterSpacing: '0.06em',
                    }}
                >
                    © 2026 Suriya T — All rights reserved
                </span>
                <span
                    style={{
                        fontFamily: "'Sulphur Point', sans-serif",
                        fontSize: '0.95rem',
                        color: 'rgba(255,255,255,0.35)',
                        letterSpacing: '0.06em',
                    }}
                >
                    Designed & Built with <span style={{ color: '#00E5FF' }}>✦</span> by Suriya
                </span>
            </div>
        </footer>
    );
};

export default Footer;


