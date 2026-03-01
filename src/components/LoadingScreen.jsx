import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* Rotating status messages shown during load */
const MESSAGES = [
    'Brewing fresh CSS...',
    'Wiring up React components...',
    'Sketching the background...',
    'Polishing animations...',
    'Almost ready...',
];

const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState('loading');
    const [msgIdx, setMsgIdx] = useState(0);

    useEffect(() => {
        // Slow progress — total ~2.5s to reach 100
        const steps = [
            { target: 18, delay: 0, speed: 55 },
            { target: 42, delay: 500, speed: 48 },
            { target: 68, delay: 1000, speed: 42 },
            { target: 88, delay: 1500, speed: 48 },
            { target: 100, delay: 2000, speed: 30 },
        ];

        const ids = [];
        steps.forEach(({ target, delay, speed }) => {
            const t = setTimeout(() => {
                const id = setInterval(() => {
                    setProgress(prev => {
                        if (prev >= target) { clearInterval(id); return prev; }
                        return prev + 1;
                    });
                }, speed);
                ids.push(id);
            }, delay);
            ids.push(t);
        });

        // Cycle status messages every 1s
        const msgTimer = setInterval(() => {
            setMsgIdx(i => (i + 1) % MESSAGES.length);
        }, 1000);

        // Fade out at 4.8s, call onComplete at 5.4s
        const doneTimer = setTimeout(() => setPhase('done'), 4800);
        const finalTimer = setTimeout(() => onComplete?.(), 5400);

        return () => {
            ids.forEach(id => { clearTimeout(id); clearInterval(id); });
            clearInterval(msgTimer);
            clearTimeout(doneTimer);
            clearTimeout(finalTimer);
        };
    }, []);

    const letters = 'SURIYA'.split('');

    return (
        <AnimatePresence>
            {phase === 'loading' && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        backgroundColor: 'var(--ink)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: "'Caveat', cursive",
                        overflow: 'hidden',
                    }}
                >
                    {/* ── Hatch-line background ── */}
                    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04 }}
                        preserveAspectRatio="none">
                        <defs>
                            <pattern id="ld-hatch" x="0" y="0" width="24" height="24"
                                patternUnits="userSpaceOnUse" patternTransform="rotate(40)">
                                <line x1="0" y1="0" x2="0" y2="24" stroke="#f5f0e8" strokeWidth="8" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#ld-hatch)" />
                    </svg>

                    {/* ── Corner spray rings ── */}
                    {[{ top: '-80px', left: '-80px' }, { bottom: '-80px', right: '-80px' }].map((pos, i) => (
                        <svg key={i} width="260" height="260" viewBox="0 0 260 260" fill="none"
                            style={{ position: 'absolute', opacity: 0.09, ...pos }}>
                            <ellipse cx="130" cy="130" rx="118" ry="120" stroke="#f5f0e8" strokeWidth="22" fill="none" />
                            <ellipse cx="130" cy="130" rx="94" ry="96" stroke="#001aff" strokeWidth="6" fill="none" opacity="0.55" />
                            <ellipse cx="130" cy="130" rx="68" ry="70" stroke="#f5f0e8" strokeWidth="3" fill="none" opacity="0.3"
                                strokeDasharray="12 8" />
                        </svg>
                    ))}

                    {/* ── Wild slash — top right ── */}
                    <svg width="180" height="160" viewBox="0 0 180 160" fill="none"
                        style={{ position: 'absolute', top: '16px', right: '24px', opacity: 0.11 }}>
                        <path d="M168 10 C128 46 88 78 52 116 C32 136 12 150 4 158"
                            stroke="#f5f0e8" strokeWidth="20" strokeLinecap="round" fill="none" />
                        <path d="M150 10 C114 48 76 80 42 118"
                            stroke="#f5f0e8" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.4" />
                        <path d="M4 158 C14 140 32 132 44 144"
                            stroke="#f5f0e8" strokeWidth="14" strokeLinecap="round" fill="none" />
                    </svg>

                    {/* ── Blue starburst — bottom left ── */}
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none"
                        style={{ position: 'absolute', bottom: '30px', left: '30px', opacity: 0.10 }}>
                        {[0, 30, 60, 90, 120, 150].map(a => (
                            <line key={a} x1="60" y1="60"
                                x2={60 + 52 * Math.cos(a * Math.PI / 180)}
                                y2={60 + 52 * Math.sin(a * Math.PI / 180)}
                                stroke="#001aff" strokeWidth="7" strokeLinecap="round" />
                        ))}
                        <circle cx="60" cy="60" r="9" fill="#001aff" opacity="0.6" />
                    </svg>

                    {/* ── Wavy rule — below name ── */}
                    <svg width="500" height="16" viewBox="0 0 500 16" fill="none"
                        style={{ position: 'absolute', opacity: 0.07, top: '58%' }}>
                        <path d="M2 8 Q62 2 125 8 Q188 14 250 8 Q312 2 375 8 Q438 14 498 8"
                            stroke="#f5f0e8" strokeWidth="2" strokeLinecap="round" fill="none" />
                    </svg>

                    {/* ── Logo mark ── */}
                    <motion.img
                        src="/logo.png"
                        alt="Suriya T"
                        initial={{ opacity: 0, scale: 0.6, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            height: 'clamp(70px, 14vw, 110px)',
                            width: 'auto',
                            marginBottom: '0.8rem',
                            mixBlendMode: 'screen',
                            filter: 'drop-shadow(0 0 20px rgba(0,26,255,0.6))',
                        }}
                    />

                    {/* ── Animated name letters — drop in ── */}
                    <div style={{ display: 'flex', gap: '0.02em', marginBottom: '1.2rem', overflow: 'hidden' }}>
                        {letters.map((l, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: 100, opacity: 0, rotateZ: -6 }}
                                animate={{ y: 0, opacity: 1, rotateZ: 0 }}
                                transition={{ duration: 0.7, delay: i * 0.11, ease: [0.16, 1, 0.3, 1] }}
                                style={{
                                    fontFamily: "'Permanent Marker', cursive",
                                    fontSize: 'clamp(4rem, 14vw, 10rem)',
                                    color: i % 2 === 0 ? 'var(--cream)' : 'var(--blue-accent)',
                                    lineHeight: 1,
                                    letterSpacing: '-0.03em',
                                    display: 'inline-block',
                                }}
                            >
                                {l}
                            </motion.span>
                        ))}
                    </div>

                    {/* ── Tagline ── */}
                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.55 }}
                        style={{
                            fontFamily: "'Caveat', cursive",
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            letterSpacing: '0.22em',
                            color: 'rgba(245,240,232,0.4)',
                            textTransform: 'uppercase',
                            marginBottom: '3.5rem',
                        }}
                    >
                        Portfolio · Web Developer · Designer
                    </motion.p>

                    {/* ── Progress bar ── */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        style={{ width: 'min(460px, 82vw)', position: 'relative' }}
                    >
                        {/* Track */}
                        <div style={{
                            height: '4px',
                            backgroundColor: 'rgba(245,240,232,0.1)',
                            borderRadius: '3px',
                            overflow: 'hidden',
                            position: 'relative',
                        }}>
                            {/* Blue fill */}
                            <motion.div
                                animate={{ scaleX: progress / 100 }}
                                style={{
                                    position: 'absolute', inset: 0,
                                    background: 'linear-gradient(90deg, var(--cream) 0%, var(--blue-accent) 100%)',
                                    transformOrigin: 'left',
                                    borderRadius: '3px',
                                }}
                                transition={{ ease: 'linear', duration: 0.3 }}
                            />
                            {/* Shine shimmer */}
                            <motion.div
                                animate={{ x: ['0%', '200%'] }}
                                transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                                style={{
                                    position: 'absolute', top: 0, left: '-60%',
                                    width: '60%', height: '100%',
                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
                                    borderRadius: '3px',
                                }}
                            />
                        </div>

                        {/* Labels */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.7rem', alignItems: 'center' }}>
                            {/* Cycling message */}
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={msgIdx}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        fontFamily: "'Caveat', cursive",
                                        fontSize: '1rem',
                                        color: 'rgba(245,240,232,0.35)',
                                        letterSpacing: '0.06em',
                                    }}
                                >
                                    {MESSAGES[msgIdx]}
                                </motion.span>
                            </AnimatePresence>

                            <span style={{
                                fontFamily: "'Permanent Marker', cursive",
                                fontSize: '1.1rem',
                                color: 'rgba(245,240,232,0.55)',
                            }}>
                                {progress}%
                            </span>
                        </div>
                    </motion.div>

                    {/* ── Pulsing dot ── */}
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                        style={{
                            position: 'absolute', bottom: '2.2rem', left: '50%',
                            transform: 'translateX(-50%)',
                            width: '8px', height: '8px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--blue-accent)',
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
