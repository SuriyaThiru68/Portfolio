import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer style={{ fontFamily: "'Caveat', cursive", position: 'relative', zIndex: 1 }}>

            {/* ── MASSIVE NAME BLOCK — dark, like reference "BRAVO" ── */}
            <div
                style={{
                    backgroundColor: 'var(--ink)',
                    overflow: 'hidden',
                    position: 'relative',
                    padding: '0 0 0.5rem',
                }}
            >
                {/* Subtle hatch lines across the dark block */}
                <svg
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04 }}
                    preserveAspectRatio="none"
                >
                    <defs>
                        <pattern id="footer-hatch" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
                            <line x1="0" y1="0" x2="0" y2="20" stroke="#f5f0e8" strokeWidth="6" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#footer-hatch)" />
                </svg>

                {/* Hand-drawn sparkle top-right */}
                <svg
                    width="48" height="48" viewBox="0 0 48 48" fill="none"
                    style={{ position: 'absolute', top: '1.5rem', right: '2.5rem', opacity: 0.35 }}
                >
                    <path d="M24 2 L27 20 L44 24 L27 28 L24 46 L21 28 L4 24 L21 20 Z"
                        stroke="#f5f0e8" strokeWidth="1.5" fill="none" />
                </svg>

                {/* Small hand-drawn circle — top left */}
                <svg
                    width="60" height="60" viewBox="0 0 60 60" fill="none"
                    style={{ position: 'absolute', top: '1rem', left: '2rem', opacity: 0.15 }}
                >
                    <ellipse cx="30" cy="30" rx="26" ry="27" stroke="#f5f0e8" strokeWidth="2" fill="none" />
                </svg>

                {/* THE BIG NAME */}
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
                            fontFamily: "'Permanent Marker', cursive",
                            fontSize: 'clamp(5.5rem, 22vw, 22rem)',
                            fontWeight: 400,
                            color: 'var(--cream)',
                            letterSpacing: '-0.03em',
                            whiteSpace: 'nowrap',
                            display: 'block',
                            /* Slight sketch texture via text-shadow offset */
                            textShadow: '3px 3px 0 rgba(245,240,232,0.08), -1px -1px 0 rgba(245,240,232,0.05)',
                        }}
                    >
                        SURIYA
                    </span>
                </motion.div>

                {/* Sub-title row below name */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1.5rem',
                        padding: '1.2rem 2rem 2rem',
                        borderTop: '1px solid rgba(245,240,232,0.1)',
                        marginTop: '0.5rem',
                        flexWrap: 'wrap',
                    }}
                >
                    {['Computer Science Student', 'Web Developer', 'UI/UX Designer'].map((t, i) => (
                        <span
                            key={i}
                            style={{
                                fontFamily: "'Caveat', cursive",
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                color: 'rgba(245,240,232,0.5)',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                            }}
                        >
                            {t}
                            {i < 2 && (
                                <span style={{ color: 'rgba(245,240,232,0.2)', fontSize: '0.7rem' }}>✦</span>
                            )}
                        </span>
                    ))}
                </div>
            </div>

            {/* ── BOTTOM CREDITS BAR ── */}
            <div
                style={{
                    backgroundColor: '#111',
                    padding: '0.85rem 3rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                }}
            >
                <span
                    style={{
                        fontFamily: "'Caveat', cursive",
                        fontSize: '0.95rem',
                        color: 'rgba(245,240,232,0.35)',
                        letterSpacing: '0.06em',
                    }}
                >
                    © 2025 Suriya T — All rights reserved
                </span>
                <span
                    style={{
                        fontFamily: "'Caveat', cursive",
                        fontSize: '0.95rem',
                        color: 'rgba(245,240,232,0.35)',
                        letterSpacing: '0.06em',
                    }}
                >
                    Designed &amp; Built with ✦ by Suriya
                </span>
            </div>
        </footer>
    );
};

export default Footer;
