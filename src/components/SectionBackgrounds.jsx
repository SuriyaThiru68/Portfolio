import React from 'react';

/* ═══════════════════════════════════════════════════════════
   SectionBackgrounds.jsx
   Each exported component renders a unique decorative SVG
   layer that sits as position:absolute inside its section.
   Usage inside a section:
     <section style={{ position:'relative', overflow:'hidden' }}>
       <HeroBg />
       <div style={{ position:'relative', zIndex:1 }}>…content…</div>
     </section>
═══════════════════════════════════════════════════════════ */

const bgBase = {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    zIndex: 0,
    overflow: 'hidden',
};

/* ──────────────────────────────────────────────────────────
   HERO — Bold spray rings + diagonal slashes + dot grid
────────────────────────────────────────────────────────── */
export const HeroBg = () => (
    <div aria-hidden style={bgBase}>
        {/* Dot grid */}
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.85 }}>
            <defs>
                <pattern id="hero-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.9" fill="#1a1a1a" opacity="0.13" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>

        {/* Giant blue spray ring — top-left */}
        <svg width="540" height="540" viewBox="0 0 540 540" fill="none"
            style={{ position: 'absolute', top: '-100px', left: '-110px', opacity: 0.16 }}>
            <path d="M74 270 C69 124 172 20 270 22 C378 24 468 126 466 270 C464 414 362 520 270 518 C178 516 79 412 74 270 Z"
                stroke="#001aff" strokeWidth="32" strokeLinecap="round" fill="none" />
            <path d="M106 270 C102 148 188 60 270 62 C356 64 436 148 434 270 C432 392 350 476 270 474 C190 472 110 392 106 270 Z"
                stroke="#001aff" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.38" />
        </svg>

        {/* Bold diagonal slash — top-right */}
        <svg width="420" height="380" viewBox="0 0 420 380" fill="none"
            style={{ position: 'absolute', top: '-15px', right: '-25px', opacity: 0.14 }}>
            <path d="M400 14 C336 66 236 128 188 192 C144 248 90 286 12 344"
                stroke="#1a1a1a" strokeWidth="32" strokeLinecap="round" fill="none" />
            <path d="M370 14 C310 68 215 132 170 194 C128 248 74 290 2 350"
                stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.38" />
            <path d="M12 344 C30 316 58 305 78 320"
                stroke="#1a1a1a" strokeWidth="22" strokeLinecap="round" fill="none" />
        </svg>

        {/* Small arrow mark */}
        <svg width="210" height="130" viewBox="0 0 210 130" fill="none"
            style={{ position: 'absolute', top: '20%', right: '24%', opacity: 0.11 }}>
            <path d="M10 108 C62 96 148 62 202 10"
                stroke="#001aff" strokeWidth="14" strokeLinecap="round" fill="none" />
            <path d="M170 3 L204 8 L197 44"
                stroke="#001aff" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M14 122 C68 108 156 76 208 26"
                stroke="#001aff" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.4" />
        </svg>

        {/* Right oval ring */}
        <svg width="290" height="360" viewBox="0 0 290 360" fill="none"
            style={{ position: 'absolute', top: '30%', right: '-58px', opacity: 0.12 }}>
            <path d="M270 180 C264 66 207 10 145 8 C76 6 14 70 12 180 C10 290 72 352 145 350 C218 348 276 292 270 180 Z"
                stroke="#001aff" strokeWidth="26" strokeLinecap="round" fill="none" />
            <path d="M244 180 C240 86 194 38 145 36 C94 34 42 88 40 180 C38 272 90 324 145 322 C200 320 248 274 244 180 Z"
                stroke="#001aff" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.38" />
        </svg>

        {/* Scattered crosses */}
        {[{ x: '84%', y: '14%', a: 45 }, { x: '12%', y: '78%', a: 0 }, { x: '46%', y: '88%', a: 20 }].map(({ x, y, a }, i) => (
            <svg key={i} width="22" height="22" viewBox="0 0 22 22" fill="none"
                style={{ position: 'absolute', left: x, top: y, opacity: 0.13, transform: `rotate(${a}deg)` }}>
                <line x1="11" y1="0" x2="11" y2="22" stroke="#001aff" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="0" y1="11" x2="22" y2="11" stroke="#001aff" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
        ))}
    </div>
);

/* ──────────────────────────────────────────────────────────
   EXPERTISE — Geometric grid + diamond shapes + dashes
────────────────────────────────────────────────────────── */
export const ExpertiseBg = () => (
    <div aria-hidden style={bgBase}>
        {/* Grid of thin lines */}
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.07 }}>
            <defs>
                <pattern id="exp-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1a1a1a" strokeWidth="0.9" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#exp-grid)" />
        </svg>

        {/* Large diamond — center right */}
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none"
            style={{ position: 'absolute', right: '-60px', top: '50%', transform: 'translateY(-50%)', opacity: 0.10 }}>
            <path d="M150 10 L290 150 L150 290 L10 150 Z"
                stroke="#001aff" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M150 42 L258 150 L150 258 L42 150 Z"
                stroke="#001aff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.4" />
        </svg>

        {/* Medium diamond — left */}
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none"
            style={{ position: 'absolute', left: '-40px', top: '20%', opacity: 0.09 }}>
            <path d="M90 8 L172 90 L90 172 L8 90 Z"
                stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>

        {/* Dashed horizontal lines */}
        {[20, 50, 80].map(pct => (
            <svg key={pct} width="100%" height="3" viewBox="0 0 1000 3" preserveAspectRatio="none"
                style={{ position: 'absolute', top: `${pct}%`, left: 0, opacity: 0.07 }}>
                <line x1="0" y1="1.5" x2="1000" y2="1.5"
                    stroke="#1a1a1a" strokeWidth="2" strokeDasharray="18 12" />
            </svg>
        ))}

        {/* Plus marks */}
        {[{ x: '8%', y: '12%' }, { x: '92%', y: '75%' }, { x: '50%', y: '5%' }, { x: '50%', y: '92%' }].map(({ x, y }, i) => (
            <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill="none"
                style={{ position: 'absolute', left: x, top: y, opacity: 0.14 }}>
                <line x1="9" y1="0" x2="9" y2="18" stroke="#001aff" strokeWidth="3" strokeLinecap="round" />
                <line x1="0" y1="9" x2="18" y2="9" stroke="#001aff" strokeWidth="3" strokeLinecap="round" />
            </svg>
        ))}
    </div>
);

/* ──────────────────────────────────────────────────────────
   ABOUT — Ink spiral loops + drip marks + wavy underlines
────────────────────────────────────────────────────────── */
export const AboutBg = () => (
    <div aria-hidden style={bgBase}>
        {/* Dot grid — lighter */}
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.7 }}>
            <defs>
                <pattern id="about-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.9" fill="#1a1a1a" opacity="0.10" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-dots)" />
        </svg>

        {/* Large spiral scribble — top right */}
        <svg width="280" height="240" viewBox="0 0 280 240" fill="none"
            style={{ position: 'absolute', top: '-20px', right: '-10px', opacity: 0.13 }}>
            <path d="M140 14 C212 14 258 56 254 106 C250 154 210 178 166 172 C114 166 74 128 80 88 C86 50 122 34 154 50 C184 64 194 98 178 118 C162 138 132 136 118 118"
                stroke="#001aff" strokeWidth="16" strokeLinecap="round" fill="none" />
            <path d="M118 118 C102 98 100 78 114 70 C130 62 148 72 142 88"
                stroke="#001aff" strokeWidth="10" strokeLinecap="round" fill="none" />
        </svg>

        {/* Ink drip column — left edge */}
        <svg width="80" height="100%" viewBox="0 0 80 600" preserveAspectRatio="none" fill="none"
            style={{ position: 'absolute', left: 0, top: 0, height: '100%', opacity: 0.12 }}>
            <path d="M24 20 C22 100 27 200 24 300 C21 360 14 380 17 405 C20 428 28 424 28 440 C28 458 20 468 23 490 C26 514 28 530 26 560"
                stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" fill="none" />
            <path d="M54 20 C56 90 52 170 54 270 C56 310 62 326 60 345 C58 364 54 360 54 378"
                stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round" fill="none" />
            <ellipse cx="24" cy="568" rx="9" ry="12" fill="#1a1a1a" opacity="0.5" />
            <ellipse cx="54" cy="385" rx="6" ry="8" fill="#1a1a1a" opacity="0.4" />
        </svg>

        {/* Wavy lines — decorative */}
        {[25, 60, 88].map((t, i) => (
            <svg key={i} width="320" height="16" viewBox="0 0 320 16" fill="none"
                style={{ position: 'absolute', right: '5%', top: `${t}%`, opacity: 0.09 }}>
                <path d="M2 8 Q40 2 80 8 Q120 14 160 8 Q200 2 240 8 Q280 14 318 8"
                    stroke={i % 2 === 0 ? '#001aff' : '#1a1a1a'} strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </svg>
        ))}

        {/* Bottom-right second spiral */}
        <svg width="200" height="170" viewBox="0 0 200 170" fill="none"
            style={{ position: 'absolute', bottom: '-10px', right: '15%', opacity: 0.10 }}>
            <path d="M100 12 C152 12 183 42 180 78 C176 112 148 132 116 128 C80 124 54 98 58 68 C62 40 88 28 112 40 C134 50 142 74 128 92 C114 110 90 108 80 94"
                stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" fill="none" />
            <path d="M80 94 C68 78 66 62 78 56 C90 50 104 60 100 73"
                stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round" fill="none" />
        </svg>
    </div>
);

/* ──────────────────────────────────────────────────────────
   SKILLS — Scattered asterisks + horizontal spray strokes
────────────────────────────────────────────────────────── */
export const SkillsBg = () => (
    <div aria-hidden style={bgBase}>
        {/* Fine diagonal hatch — top-right quadrant */}
        <svg width="50%" height="50%" viewBox="0 0 400 300" preserveAspectRatio="none" fill="none"
            style={{ position: 'absolute', top: 0, right: 0, opacity: 0.06 }}>
            <defs>
                <pattern id="sk-hatch" x="0" y="0" width="20" height="20"
                    patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="20" stroke="#001aff" strokeWidth="1.5" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sk-hatch)" />
        </svg>

        {/* Large asterisks scattered */}
        {[
            { x: '6%', y: '15%', s: 50, c: '#001aff', a: 15 },
            { x: '88%', y: '8%', s: 38, c: '#1a1a1a', a: 0 },
            { x: '78%', y: '82%', s: 44, c: '#001aff', a: 30 },
            { x: '4%', y: '75%', s: 36, c: '#1a1a1a', a: 10 },
            { x: '48%', y: '6%', s: 28, c: '#001aff', a: 45 },
            { x: '50%', y: '92%', s: 32, c: '#1a1a1a', a: 20 },
        ].map(({ x, y, s, c, a }, i) => (
            <svg key={i} width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none"
                style={{ position: 'absolute', left: x, top: y, opacity: 0.12, transform: `rotate(${a}deg)` }}>
                {[0, 60, 120].map(angle => (
                    <g key={angle} transform={`rotate(${angle} ${s / 2} ${s / 2})`}>
                        <line x1={s / 2} y1="2" x2={s / 2} y2={s - 2} stroke={c} strokeWidth="3.5" strokeLinecap="round" />
                    </g>
                ))}
                <circle cx={s / 2} cy={s / 2} r="3" fill={c} opacity="0.5" />
            </svg>
        ))}

        {/* Horizontal spray bars */}
        {[{ t: '30%', w: 180, op: 0.11 }, { t: '65%', w: 220, op: 0.09 }, { t: '80%', w: 150, op: 0.10 }].map(({ t, w, op }, i) => (
            <svg key={i} width={w} height="60" viewBox={`0 0 ${w} 60`} fill="none"
                style={{ position: 'absolute', right: i % 2 === 0 ? '0' : undefined, left: i % 2 !== 0 ? '0' : undefined, top: t, opacity: op }}>
                <path d={`M5 30 Q${w * 0.25} 12 ${w / 2} 30 Q${w * 0.75} 48 ${w - 5} 30`}
                    stroke="#1a1a1a" strokeWidth="26" strokeLinecap="round" fill="none" />
                <path d={`M5 30 Q${w * 0.25} 12 ${w / 2} 30 Q${w * 0.75} 48 ${w - 5} 30`}
                    stroke="#f5f0e8" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.5" />
            </svg>
        ))}

        {/* 4-point stars */}
        {[{ x: '22%', y: '46%' }, { x: '66%', y: '54%' }, { x: '38%', y: '88%' }].map(({ x, y }, i) => (
            <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="none"
                style={{ position: 'absolute', left: x, top: y, opacity: 0.12 }}>
                <path d="M12 1 L13.8 10.2 L23 12 L13.8 13.8 L12 23 L10.2 13.8 L1 12 L10.2 10.2 Z"
                    stroke="#001aff" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
            </svg>
        ))}
    </div>
);

/* ──────────────────────────────────────────────────────────
   PROJECTS — Starburst explosions + jagged tag + rings
────────────────────────────────────────────────────────── */
export const ProjectsBg = () => (
    <div aria-hidden style={bgBase}>
        {/* 8-point starburst — left */}
        <svg width="190" height="190" viewBox="0 0 190 190" fill="none"
            style={{ position: 'absolute', left: '-20px', top: '15%', opacity: 0.14 }}>
            {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5].map(a => (
                <line key={a} x1="95" y1="95"
                    x2={95 + 84 * Math.cos(a * Math.PI / 180)} y2={95 + 84 * Math.sin(a * Math.PI / 180)}
                    stroke="#001aff" strokeWidth="9" strokeLinecap="round" />
            ))}
            <circle cx="95" cy="95" r="14" fill="#001aff" opacity="0.55" />
        </svg>

        {/* 6-point starburst — right */}
        <svg width="130" height="130" viewBox="0 0 130 130" fill="none"
            style={{ position: 'absolute', right: '5%', top: '8%', opacity: 0.12 }}>
            {[0, 30, 60, 90, 120, 150].map(a => (
                <line key={a} x1="65" y1="65"
                    x2={65 + 56 * Math.cos(a * Math.PI / 180)} y2={65 + 56 * Math.sin(a * Math.PI / 180)}
                    stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round" />
            ))}
            <circle cx="65" cy="65" r="10" fill="#1a1a1a" opacity="0.5" />
        </svg>

        {/* Jagged tag zigzag — bottom */}
        <svg width="480" height="280" viewBox="0 0 480 280" fill="none"
            style={{ position: 'absolute', bottom: '-10px', left: '-10px', opacity: 0.11 }}>
            <path d="M16 255 L92 48 L132 175 L192 22 L238 200 L284 44 L326 182 L385 12 L428 250"
                stroke="#1a1a1a" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M6 270 Q240 262 474 266"
                stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round" fill="none" />
            <path d="M428 250 C444 225 458 238 444 258 C430 278 410 264 425 250"
                stroke="#1a1a1a" strokeWidth="14" strokeLinecap="round" fill="none" />
        </svg>

        {/* Graffiti ring — top right */}
        <svg width="240" height="240" viewBox="0 0 240 240" fill="none"
            style={{ position: 'absolute', right: '-50px', bottom: '10%', opacity: 0.11 }}>
            <path d="M120 10 C58 13 10 58 8 120 C6 182 54 230 120 228 C186 226 234 178 232 120 C230 62 182 8 120 10 Z"
                stroke="#001aff" strokeWidth="18" strokeLinecap="round" fill="none" />
            <path d="M120 38 C76 40 34 78 32 120 C30 162 70 202 120 200 C170 198 210 160 208 120 C206 80 166 36 120 38 Z"
                stroke="#001aff" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.38" />
        </svg>

        {/* Cross-hatch block */}
        <svg width="110" height="110" viewBox="0 0 110 110" fill="none"
            style={{ position: 'absolute', right: '18%', top: '42%', opacity: 0.08 }}>
            {[0, 11, 22, 33, 44, 55, 66, 77, 88, 99].map(v => [
                <line key={`h${v}`} x1="0" y1={v} x2="110" y2={v} stroke="#001aff" strokeWidth="1.4" strokeLinecap="round" />,
                <line key={`v${v}`} x1={v} y1="0" x2={v} y2="110" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round" />,
            ])}
        </svg>
    </div>
);

/* ──────────────────────────────────────────────────────────
   EXPERIENCE — Bracket marks + dotted timeline + hatch
────────────────────────────────────────────────────────── */
export const ExperienceBg = () => (
    <div aria-hidden style={bgBase}>
        {/* Left bracket */}
        <svg width="52" height="280" viewBox="0 0 52 280" fill="none"
            style={{ position: 'absolute', left: '2%', top: '10%', opacity: 0.13 }}>
            <path d="M42 6 Q8 6 8 26 L8 126 Q8 140 2 140 Q8 140 8 154 L8 254 Q8 274 42 274"
                stroke="#001aff" strokeWidth="5" strokeLinecap="round" fill="none" />
        </svg>

        {/* Right bracket  */}
        <svg width="52" height="280" viewBox="0 0 52 280" fill="none"
            style={{ position: 'absolute', right: '2%', top: '40%', opacity: 0.13 }}>
            <path d="M10 6 Q44 6 44 26 L44 126 Q44 140 50 140 Q44 140 44 154 L44 254 Q44 274 10 274"
                stroke="#001aff" strokeWidth="5" strokeLinecap="round" fill="none" />
        </svg>

        {/* Dotted vertical timeline spine */}
        <svg width="4" height="100%" viewBox="0 0 4 600" preserveAspectRatio="none" fill="none"
            style={{ position: 'absolute', left: '50%', top: 0, height: '100%', opacity: 0.14 }}>
            <line x1="2" y1="0" x2="2" y2="600"
                stroke="#1a1a1a" strokeWidth="3" strokeDasharray="10 14" />
        </svg>

        {/* Hatch patch — top right */}
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none"
            style={{ position: 'absolute', right: '8%', top: '6%', opacity: 0.08 }}>
            <defs>
                <pattern id="exp-hatch" x="0" y="0" width="16" height="16"
                    patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="16" stroke="#001aff" strokeWidth="1.8" />
                </pattern>
            </defs>
            <rect width="160" height="160" fill="url(#exp-hatch)" rx="4" />
        </svg>

        {/* Hatch patch 2 — bottom left */}
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none"
            style={{ position: 'absolute', left: '6%', bottom: '8%', opacity: 0.08 }}>
            <defs>
                <pattern id="exp-hatch2" x="0" y="0" width="14" height="14"
                    patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
                    <line x1="0" y1="0" x2="0" y2="14" stroke="#1a1a1a" strokeWidth="1.8" />
                </pattern>
            </defs>
            <rect width="120" height="120" fill="url(#exp-hatch2)" rx="4" />
        </svg>

        {/* Ink dots along timeline */}
        {[15, 38, 62, 85].map((pct, i) => (
            <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none"
                style={{ position: 'absolute', left: 'calc(50% - 10px)', top: `${pct}%`, opacity: 0.18 }}>
                <circle cx="10" cy="10" r="5" fill={i % 2 === 0 ? '#001aff' : '#1a1a1a'} />
                <circle cx="10" cy="10" r="9" stroke={i % 2 === 0 ? '#001aff' : '#1a1a1a'} strokeWidth="2" fill="none" opacity="0.4" />
            </svg>
        ))}
    </div>
);

/* ──────────────────────────────────────────────────────────
   CONTACT — Triple concentric rings + wave lines + drips
────────────────────────────────────────────────────────── */
export const ContactBg = () => (
    <div aria-hidden style={bgBase}>
        {/* Triple concentric rings — right */}
        <svg width="460" height="460" viewBox="0 0 460 460" fill="none"
            style={{ position: 'absolute', right: '-100px', top: '50%', transform: 'translateY(-50%)', opacity: 0.13 }}>
            <path d="M230 14 C124 17 18 110 16 230 C14 352 108 446 230 444 C352 442 446 348 444 230 C442 112 350 12 230 14 Z"
                stroke="#001aff" strokeWidth="24" strokeLinecap="round" fill="none" />
            <path d="M230 54 C144 57 60 138 58 230 C56 322 136 404 230 402 C324 400 404 320 402 230 C400 140 318 52 230 54 Z"
                stroke="#001aff" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.38" />
            <path d="M230 98 C166 100 108 158 106 230 C104 302 162 360 230 358 C298 356 356 300 354 230 C352 160 296 96 230 98 Z"
                stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.28"
                strokeDasharray="18 11" />
        </svg>

        {/* Wave lines — center */}
        {[30, 50, 70].map((t, i) => (
            <svg key={i} width="70%" height="20" viewBox="0 0 700 20" preserveAspectRatio="none" fill="none"
                style={{ position: 'absolute', left: '15%', top: `${t}%`, opacity: 0.08 }}>
                <path d="M2 10 Q87 2 175 10 Q263 18 350 10 Q437 2 525 10 Q612 18 698 10"
                    stroke={i % 2 === 0 ? '#001aff' : '#1a1a1a'} strokeWidth={i === 1 ? 3 : 2} strokeLinecap="round" fill="none" />
            </svg>
        ))}

        {/* Blue drip column — left */}
        <svg width="72" height="100%" viewBox="0 0 72 500" preserveAspectRatio="none" fill="none"
            style={{ position: 'absolute', left: '3%', top: 0, height: '100%', opacity: 0.12 }}>
            <path d="M22 10 C20 80 25 150 22 220 C20 252 14 265 16 284 C18 300 26 298 26 314 C26 330 20 338 23 355 C26 374 28 390 24 420"
                stroke="#001aff" strokeWidth="11" strokeLinecap="round" fill="none" />
            <path d="M50 10 C52 66 48 124 50 185 C52 208 58 218 56 233"
                stroke="#001aff" strokeWidth="6.5" strokeLinecap="round" fill="none" />
            <ellipse cx="22" cy="428" rx="9" ry="11" fill="#001aff" opacity="0.45" />
            <ellipse cx="50" cy="240" rx="6" ry="8" fill="#001aff" opacity="0.38" />
        </svg>

        {/* Spray ring — bottom left */}
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none"
            style={{ position: 'absolute', bottom: '-70px', left: '-70px', opacity: 0.11 }}>
            <path d="M160 12 C84 14 16 78 14 160 C12 242 78 308 160 306 C242 304 308 240 306 160 C304 80 238 10 160 12 Z"
                stroke="#001aff" strokeWidth="18" strokeLinecap="round" fill="none" />
            <path d="M160 44 C104 46 50 100 48 160 C46 220 100 274 160 272 C220 270 274 218 272 160 C270 102 218 42 160 44 Z"
                stroke="#001aff" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.36" />
        </svg>

        {/* Plus marks */}
        {[{ x: '14%', y: '20%' }, { x: '80%', y: '78%' }, { x: '45%', y: '88%' }].map(({ x, y }, i) => (
            <svg key={i} width="22" height="22" viewBox="0 0 22 22" fill="none"
                style={{ position: 'absolute', left: x, top: y, opacity: 0.13 }}>
                <line x1="11" y1="0" x2="11" y2="22" stroke="#001aff" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="0" y1="11" x2="22" y2="11" stroke="#001aff" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
        ))}
    </div>
);
