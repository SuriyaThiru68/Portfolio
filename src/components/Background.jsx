import React from 'react';

/* Scattered hand-drawn doodle elements — fixed positions so they don't shift on scroll */
const doodles = [
    // Small sparkle stars
    { type: 'star4', x: '7%', y: '12%', size: 18, opacity: 0.18, rotate: 15 },
    { type: 'star4', x: '88%', y: '8%', size: 14, opacity: 0.15, rotate: -10 },
    { type: 'star4', x: '93%', y: '52%', size: 20, opacity: 0.13, rotate: 30 },
    { type: 'star4', x: '5%', y: '68%', size: 16, opacity: 0.16, rotate: -5 },
    { type: 'star4', x: '48%', y: '5%', size: 12, opacity: 0.12, rotate: 20 },
    { type: 'star4', x: '72%', y: '88%', size: 15, opacity: 0.14, rotate: -15 },
    { type: 'star4', x: '22%', y: '92%', size: 13, opacity: 0.13, rotate: 8 },

    // Plus / cross marks
    { type: 'plus', x: '14%', y: '28%', size: 14, opacity: 0.14, rotate: 0 },
    { type: 'plus', x: '80%', y: '35%', size: 12, opacity: 0.12, rotate: 45 },
    { type: 'plus', x: '55%', y: '78%', size: 16, opacity: 0.13, rotate: 20 },
    { type: 'plus', x: '36%', y: '15%', size: 11, opacity: 0.11, rotate: 10 },
    { type: 'plus', x: '66%', y: '62%', size: 13, opacity: 0.12, rotate: 30 },

    // Small wobbly circles
    { type: 'circle', x: '28%', y: '48%', size: 32, opacity: 0.08, rotate: 0 },
    { type: 'circle', x: '78%', y: '18%', size: 24, opacity: 0.09, rotate: 0 },
    { type: 'circle', x: '10%', y: '82%', size: 28, opacity: 0.08, rotate: 0 },
    { type: 'circle', x: '90%', y: '74%', size: 22, opacity: 0.09, rotate: 0 },

    // Wavy scribble lines
    { type: 'wave', x: '40%', y: '32%', size: 60, opacity: 0.1, rotate: -5 },
    { type: 'wave', x: '62%', y: '90%', size: 50, opacity: 0.09, rotate: 8 },
    { type: 'wave', x: '18%', y: '58%', size: 55, opacity: 0.09, rotate: -12 },

    // Tiny dots cluster
    { type: 'dot', x: '52%', y: '44%', size: 5, opacity: 0.2, rotate: 0 },
    { type: 'dot', x: '54%', y: '47%', size: 4, opacity: 0.16, rotate: 0 },
    { type: 'dot', x: '50%', y: '46%', size: 5, opacity: 0.18, rotate: 0 },
    { type: 'dot', x: '30%', y: '72%', size: 4, opacity: 0.17, rotate: 0 },
    { type: 'dot', x: '76%', y: '55%', size: 5, opacity: 0.15, rotate: 0 },

    // Extra larger stars — more visible
    { type: 'star4', x: '43%', y: '60%', size: 26, opacity: 0.16, rotate: -8 },
    { type: 'star4', x: '60%', y: '25%', size: 22, opacity: 0.15, rotate: 12 },
    { type: 'star4', x: '82%', y: '72%', size: 20, opacity: 0.14, rotate: -20 },

    // Larger circles
    { type: 'circle', x: '60%', y: '44%', size: 50, opacity: 0.07, rotate: 0 },
    { type: 'circle', x: '32%', y: '20%', size: 38, opacity: 0.07, rotate: 0 },

    // Extra waves
    { type: 'wave', x: '70%', y: '48%', size: 80, opacity: 0.09, rotate: 5 },
    { type: 'wave', x: '8%', y: '40%', size: 70, opacity: 0.08, rotate: -8 },
];

const DoodleSVG = ({ type, size, opacity, rotate }) => {
    const style = {
        opacity,
        transform: `rotate(${rotate}deg)`,
        display: 'block',
    };

    if (type === 'star4') {
        const h = size / 2;
        const q = size / 4;
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" style={style}>
                <path
                    d={`M${h} 0 L${h + q * 0.4} ${h - q * 0.4} L${size} ${h} L${h + q * 0.4} ${h + q * 0.4} L${h} ${size} L${h - q * 0.4} ${h + q * 0.4} L0 ${h} L${h - q * 0.4} ${h - q * 0.4} Z`}
                    stroke="#1a1a1a"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                    fill="none"
                />
            </svg>
        );
    }

    if (type === 'plus') {
        const h = size / 2;
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" style={style}>
                <line x1={h} y1="0" x2={h} y2={size} stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="0" y1={h} x2={size} y2={h} stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        );
    }

    if (type === 'circle') {
        const r = size / 2;
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" style={style}>
                {/* Wobbly circle via a slightly imperfect path */}
                <ellipse
                    cx={r} cy={r}
                    rx={r - 1.5} ry={r - 2}
                    stroke="#1a1a1a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                />
            </svg>
        );
    }

    if (type === 'wave') {
        return (
            <svg width={size} height="14" viewBox={`0 0 ${size} 14`} fill="none" style={style}>
                <path
                    d={`M2 7 Q${size * 0.15} 2 ${size * 0.3} 7 Q${size * 0.45} 12 ${size * 0.6} 7 Q${size * 0.75} 2 ${size - 2} 7`}
                    stroke="#1a1a1a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                />
            </svg>
        );
    }

    if (type === 'dot') {
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" style={style}>
                <circle cx={size / 2} cy={size / 2} r={size / 2 - 0.5} fill="#1a1a1a" />
            </svg>
        );
    }

    return null;
};

const Background = () => {
    return (
        <div
            aria-hidden="true"
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 0,
                pointerEvents: 'none',
                overflow: 'hidden',
            }}
        >
            {/* ── Dot grid — classic sketchbook paper ── */}
            <svg
                width="100%"
                height="100%"
                style={{ position: 'absolute', inset: 0 }}
            >
                <defs>
                    <pattern id="dot-grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="1" fill="#1a1a1a" opacity="0.13" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dot-grid)" />
            </svg>

            {/* ── Scattered hand-drawn doodles ── */}
            {doodles.map((d, i) => (
                <div
                    key={i}
                    style={{
                        position: 'absolute',
                        left: d.x,
                        top: d.y,
                    }}
                >
                    <DoodleSVG type={d.type} size={d.size} opacity={d.opacity} rotate={d.rotate} />
                </div>
            ))}

            {/* ── Large faint corner scribble — bottom right ── */}
            <svg
                width="220"
                height="220"
                viewBox="0 0 220 220"
                fill="none"
                style={{
                    position: 'absolute',
                    bottom: '-30px',
                    right: '-30px',
                    opacity: 0.055,
                }}
            >
                <path
                    d="M20 200 Q60 100 110 110 Q160 120 180 60 Q200 20 210 10"
                    stroke="#1a1a1a"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                />
                <path
                    d="M10 210 Q80 130 120 120 Q170 108 185 50"
                    stroke="#1a1a1a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                />
            </svg>

            {/* ── Large faint corner scribble — top left ── */}
            <svg
                width="180"
                height="180"
                viewBox="0 0 180 180"
                fill="none"
                style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '-20px',
                    opacity: 0.055,
                }}
            >
                <path
                    d="M170 10 Q100 40 90 90 Q80 140 20 160"
                    stroke="#1a1a1a"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                />
                <path
                    d="M165 20 Q110 55 98 100 Q86 150 25 168"
                    stroke="#1a1a1a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                />
            </svg>

            {/* ── Mid-page large bracket — left edge ── */}
            <svg width="40" height="200" viewBox="0 0 40 200" fill="none"
                style={{ position: 'absolute', left: '2%', top: '38%', opacity: 0.07 }}
            >
                <path d="M30 5 Q8 5 8 20 L8 90 Q8 100 2 100 Q8 100 8 110 L8 180 Q8 195 30 195"
                    stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </svg>

            {/* ── Mid-page large bracket — right edge ── */}
            <svg width="40" height="200" viewBox="0 0 40 200" fill="none"
                style={{ position: 'absolute', right: '2%', top: '55%', opacity: 0.07 }}
            >
                <path d="M10 5 Q32 5 32 20 L32 90 Q32 100 38 100 Q32 100 32 110 L32 180 Q32 195 10 195"
                    stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </svg>

            {/* ── Long wavy horizontal rule — centre ── */}
            <svg width="500" height="20" viewBox="0 0 500 20" fill="none"
                style={{ position: 'absolute', left: '50%', top: '30%', transform: 'translateX(-50%)', opacity: 0.06 }}
            >
                <path d="M2 10 Q62 3 125 10 Q188 17 250 10 Q312 3 375 10 Q438 17 498 10"
                    stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
        </div>
    );
};

export default Background;
