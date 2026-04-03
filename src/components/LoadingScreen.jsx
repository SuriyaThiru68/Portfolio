import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoUrl from './assests/porfoliologo.png';

const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState('loading');

    useEffect(() => {
        const steps = [
            { target: 20, delay: 0, speed: 40 },
            { target: 45, delay: 400, speed: 30 },
            { target: 75, delay: 800, speed: 25 },
            { target: 90, delay: 1100, speed: 35 },
            { target: 100, delay: 1400, speed: 20 },
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

        const doneTimer = setTimeout(() => setPhase('done'), 2800);
        const finalTimer = setTimeout(() => onComplete?.(), 3400);

        return () => {
            ids.forEach(id => { clearTimeout(id); clearInterval(id); });
            clearTimeout(doneTimer);
            clearTimeout(finalTimer);
        };
    }, []);

    return (
        <AnimatePresence>
            {phase === 'loading' && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        backgroundColor: '#0B0B0C',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                    }}
                >
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: [0, 0.15, 0.1], scale: [0.8, 1.2, 1] }}
                        transition={{ duration: 3, ease: "easeOut" }}
                        style={{
                            position: 'absolute',
                            width: '40vw',
                            height: '40vw',
                            maxWidth: '400px',
                            maxHeight: '400px',
                            background: 'radial-gradient(circle, rgba(0,229,255,0.4) 0%, rgba(11,11,12,0) 70%)',
                            filter: 'blur(40px)',
                            zIndex: 0,
                        }}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{ zIndex: 10, marginBottom: '40px' }}
                    >
                        <motion.img
                            src={logoUrl}
                            alt="Logo"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            style={{
                                height: 'clamp(80px, 12vw, 160px)',
                                width: 'auto',
                            }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        style={{ width: 'min(280px, 60vw)', position: 'relative', zIndex: 10 }}
                    >
                        <div style={{
                            height: '2px',
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            borderRadius: '2px',
                            overflow: 'hidden',
                            position: 'relative',
                        }}>
                            <motion.div
                                animate={{ scaleX: progress / 100 }}
                                style={{
                                    position: 'absolute', 
                                    inset: 0,
                                    backgroundColor: '#00E5FF',
                                    transformOrigin: 'left',
                                    borderRadius: '2px',
                                    boxShadow: '0 0 10px rgba(0,229,255,0.5)'
                                }}
                                transition={{ ease: 'easeOut', duration: 0.2 }}
                            />
                        </div>
                        
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                            <span style={{
                                fontFamily: "'Sulphur Point', sans-serif",
                                fontSize: '0.75rem',
                                color: 'rgba(255,255,255,0.4)',
                                letterSpacing: '0.2em',
                                fontVariantNumeric: 'tabular-nums'
                            }}>
                                {progress.toString().padStart(2, '0')} %
                            </span>
                        </div>
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;


