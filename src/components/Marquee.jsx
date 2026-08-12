import React from 'react';
import { motion } from 'framer-motion';

/* ─── Tech logos as inline SVG ─── */
const logos = {
  Python: (<svg viewBox="0 0 256 255" width="36" height="36"><defs><linearGradient id="py1" x1="12.96%" y1="12.07%" x2="79.64%" y2="78.8%"><stop offset="0%" stopColor="#387EB8"/><stop offset="100%" stopColor="#366994"/></linearGradient><linearGradient id="py2" x1="19.13%" y1="20.58%" x2="90.43%" y2="88.01%"><stop offset="0%" stopColor="#FFE052"/><stop offset="100%" stopColor="#FFC331"/></linearGradient></defs><path d="M126.9.1C62.2.1 66.5 28.4 66.5 28.4l.1 29.5h61.4v8.8H40.7S0 61.1 0 127.5c0 66.4 35.5 64.1 35.5 64.1h21.2v-30.8s-1.1-35.5 34.9-35.5h60.2s33.8.5 33.8-32.7V33.4S190.5.1 126.9.1zm-33.5 19.5c6.1 0 11 4.9 11 11s-4.9 11-11 11-11-4.9-11-11 4.9-11 11-11z" fill="url(#py1)"/><path d="M128.8 254.1c63.7 0 59.4-28.3 59.4-28.3l-.1-29.5h-61.4v-8.8h87.3s40.7 4.6 40.7-61.8c0-66.4-35.5-64.1-35.5-64.1h-21.2v30.8s1.1 35.5-34.9 35.5h-60.2s-33.8-.5-33.8 32.7v59.2s-5.1 34.3 59.7 34.3zm33.5-19.5c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11-4.9 11-11 11z" fill="url(#py2)"/></svg>),
  React: (<svg viewBox="0 0 40 40" width="36" height="36"><circle cx="20" cy="20" r="3.5" fill="#61DAFB"/><ellipse cx="20" cy="20" rx="18" ry="7" fill="none" stroke="#61DAFB" strokeWidth="1.8"/><ellipse cx="20" cy="20" rx="18" ry="7" fill="none" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(60 20 20)"/><ellipse cx="20" cy="20" rx="18" ry="7" fill="none" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(120 20 20)"/></svg>),
  JavaScript: (<svg viewBox="0 0 256 256" width="36" height="36"><path d="M0 0h256v256H0V0z" fill="#F7DF1E"/><path d="M67.3 214l18.8-11.4c3.6 6.4 6.9 11.8 14.8 11.8 7.6 0 12.3-3 12.3-14.5V120h23.2v80.1c0 23.9-14 34.8-34.4 34.8-18.4 0-29.1-9.5-34.7-21zm82.1-2.6l18.8-10.9c5 8.2 11.5 14.3 23 14.3 9.7 0 15.8-4.8 15.8-11.5 0-8-6.3-10.8-17-15.5l-5.8-2.5c-16.8-7.2-28-16.2-28-35.2 0-17.5 13.4-30.9 34.2-30.9 14.9 0 25.5 5.2 33.2 18.7l-18.2 11.7c-4-7.1-8.3-9.9-15-9.9-6.8 0-11.2 4.3-11.2 9.9 0 6.9 4.4 9.7 14.5 14l5.8 2.5c19.8 8.5 31 17.2 31 36.7 0 21-16.6 32.5-38.8 32.5-21.8 0-35.8-10.4-42.6-24z" fill="#000"/></svg>),
  HTML: (<svg viewBox="0 0 512 512" width="36" height="36"><path d="M71 460L30 0h451l-41 460-184 52" fill="#E34F26"/><path d="M256 472l149-41 35-394H256" fill="#EF652A"/><path d="M256 208h-75l-5-58h80V94H114l1 15 14 156h127zm-1 147l-63-17-4-45h-56l7 89 116 32" fill="#EBEBEB"/><path d="M255 208v57h70l-7 73-63 17v59l116-32 1-11 13-149 2-15h-15zm0-114v56h124l1-12 3-29 1-15" fill="#FFF"/></svg>),
  CSS: (<svg viewBox="0 0 512 512" width="36" height="36"><path d="M71 460L30 0h451l-41 460-184 52" fill="#1572B6"/><path d="M256 472l149-41 35-394H256" fill="#33A9DC"/><path d="M256 208H131l5 58h120v-58zm0-114H114l5 57h137V94zm0 261l-1 0-63-17-4-45h-57l7 89 117 32v-59z" fill="#EBEBEB"/><path d="M255 208v57h63l-6 73-57 16v59l116-32 16-174zm0-114v57h124l4-57z" fill="#FFF"/></svg>),
  Tailwind: (<svg viewBox="0 0 256 154" width="36" height="36"><path d="M128 0Q96 0 80 32q24-32 56-16c10.8 5.4 18.5 16.2 27 28.2C175.7 62.1 191 80 224 80q32 0 48-32-24 32-56 16c-10.8-5.4-18.5-16.2-27-28.2C176.3 17.9 161 0 128 0zM32 74Q0 74-16 106q24-32 56-16c10.8 5.4 18.5 16.2 27 28.2C79.7 136.1 95 154 128 154q32 0 48-32-24 32-56 16c-10.8-5.4-18.5-16.2-27-28.2C80.3 91.9 65 74 32 74z" fill="#06B6D4" transform="translate(16, 0)"/></svg>),
  MongoDB: (<svg viewBox="0 0 256 549" width="22" height="36"><path d="M175.6 75.6C143.3 34.3 131.7 10 128.7 1.3 127.9-.5 126.3-.5 125.5 1.3c-3 8.7-14.2 33-47 74.3C22.2 145.2 0 197.9 0 247.1c0 56.5 25.6 97.8 69.9 124.4l53.2 170.3c.7 2.5 4.7 2.5 5.4 0l53.2-170.3c44.3-26.6 69.9-67.9 69.9-124.4.4-49.2-21.8-101.9-76-171.5z" fill="#00ED64"/></svg>),
  Git: (<svg viewBox="0 0 256 256" width="36" height="36"><path d="M251.2 116.6L139.4 4.8c-6.4-6.4-16.8-6.4-23.2 0l-23.2 23.2 29.3 29.3c6.8-2.3 14.6-.8 20 4.6 5.5 5.5 6.9 13.4 4.5 20.2l28.3 28.3c6.8-2.4 14.7-.9 20.2 4.5 7.7 7.7 7.7 20.1 0 27.8-7.7 7.7-20.1 7.7-27.8 0-5.8-5.8-7.1-14.4-4-21.5l-26.4-26.4v69.5c1.9.9 3.6 2.1 5.1 3.6 7.7 7.7 7.7 20.1 0 27.8-7.7 7.7-20.1 7.7-27.8 0-7.7-7.7-7.7-20.1 0-27.8 1.8-1.8 4-3.2 6.3-4.2V93.9c-2.3-1-4.5-2.4-6.3-4.2-5.9-5.9-7.2-14.6-3.8-21.7L81.2 38.6 4.8 115c-6.4 6.4-6.4 16.8 0 23.2l111.8 111.8c6.4 6.4 16.8 6.4 23.2 0l111.4-111.4c6.4-6.4 6.4-16.8 0-23z" fill="#F05033"/></svg>),
  Figma: (<svg viewBox="0 0 256 384" width="26" height="36"><path d="M64 384c35.3 0 64-28.7 64-64v-64H64c-35.3 0-64 28.7-64 64s28.7 64 64 64z" fill="#0ACF83"/><path d="M0 192c0-35.3 28.7-64 64-64h64v128H64c-35.3 0-64-28.7-64-64z" fill="#A259FF"/><path d="M0 64C0 28.7 28.7 0 64 0h64v128H64C28.7 128 0 99.3 0 64z" fill="#F24E1E"/><path d="M128 0h64c35.3 0 64 28.7 64 64s-28.7 64-64 64h-64V0z" fill="#FF7262"/><path d="M256 192c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64z" fill="#1ABCFE"/></svg>),
  GitHub: (<svg viewBox="0 0 256 250" width="36" height="36"><path d="M128 0C57.3 0 0 57.3 0 128c0 56.6 36.7 104.5 87.5 121.5 6.4 1.2 8.7-2.8 8.7-6.2 0-3-.1-11-.2-21.7-35.6 7.7-43.1-17.2-43.1-17.2-5.8-14.8-14.2-18.7-14.2-18.7-11.6-7.9.9-7.8.9-7.8 12.8.9 19.5 13.2 19.5 13.2 11.4 19.5 29.9 13.9 37.2 10.6 1.2-8.3 4.5-13.9 8.1-17.1-28.4-3.2-58.3-14.2-58.3-63.2 0-14 5-25.4 13.1-34.3-1.3-3.2-5.7-16.2 1.2-33.8 0 0 10.7-3.4 35.1 13.1 10.2-2.8 21.1-4.2 31.9-4.3 10.8.1 21.7 1.5 31.9 4.3 24.4-16.5 35.1-13.1 35.1-13.1 7 17.6 2.6 30.6 1.3 33.8 8.2 8.9 13.1 20.3 13.1 34.3 0 49.1-29.9 59.9-58.4 63.1 4.6 3.9 8.7 11.7 8.7 23.6 0 17-.2 30.7-.2 34.9 0 3.4 2.3 7.4 8.8 6.1C219.4 232.5 256 184.5 256 128 256 57.3 198.7 0 128 0z" fill="currentColor"/></svg>),
  VSCode: (<svg viewBox="0 0 256 256" width="36" height="36"><path d="M180.2 252.3l71.6-34.4a10.4 10.4 0 006-9.5V47.6a10.4 10.4 0 00-6-9.5L180.2 3.7a10.4 10.4 0 00-11.9 2.1L75.2 90.7 31.2 57.6a7 7 0 00-8.9.5L4.2 74.7a7 7 0 000 10.5L42 128 4.2 170.7a7 7 0 000 10.6l18.1 16.6a7 7 0 008.9.5l44-33.1 93.1 84.9a10.4 10.4 0 0011.9 2.1zM180.2 71.7L109.3 128l70.9 56.3V71.7z" fill="#007ACC"/></svg>),
  Java: (<svg viewBox="0 0 256 346" width="26" height="36"><path d="M82.6 267.4s-9.1 5.3 6.5 7.1c18.9 2.2 28.5 1.9 49.3-2.1 0 0 5.5 3.4 13.1 6.4-46.6 20-105.5-1.2-68.9-11.4z" fill="#5382A1"/><path d="M143.5 165.5c11.5 13.2-3 25.1-3 25.1s29.2-15.1 15.8-33.9c-12.5-17.5-22.1-26.2 29.8-56.2 0 0-81.4 20.3-42.6 65z" fill="#E76F00"/></svg>),
  Python2: (<svg viewBox="0 0 40 40" width="36" height="36"><circle cx="20" cy="20" r="18" fill="none" stroke="#387EB8" strokeWidth="2"/><text x="20" y="26" textAnchor="middle" fontFamily="monospace" fontSize="16" fill="#387EB8">Py</text></svg>),
  Framer: (<svg viewBox="0 0 256 384" width="26" height="36"><path d="M0 0h256v128H128L0 0zM0 128h128l128 128H128v128L0 256V128z" fill="currentColor"/></svg>),
  Vercel: (<svg viewBox="0 0 512 512" width="36" height="36"><path d="M256 48l240 416H16z" fill="currentColor"/></svg>),
  Netlify: (<svg viewBox="0 0 256 256" width="36" height="36"><path d="M170.3 126l-15.1-6.5-2.4-5.2 32.1-32.1-42.5-42.5-32.1 32.1-5.2-2.4-6.5-15.1L56.1 42.4 42.4 56.1l11.9 42.5 15.1 6.5 2.4 5.2L39.7 142.4l42.5 42.5 32.1-32.1 5.2 2.4 6.5 15.1 42.5 11.9 13.7-13.7-11.9-42.5z" fill="#05BDBA" transform="translate(16,16)"/></svg>),
};

const row1 = ['Python', 'React', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'MongoDB', 'Git', 'Java'];
const row2 = ['Figma', 'Vercel', 'Framer', 'GitHub', 'VSCode', 'Netlify', 'Python2', 'JavaScript', 'React'];

const LogoItem = ({ name, icon }) => (
  <div
    className="logo-cloud-item"
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.65rem',
      padding: '0.6rem 1.25rem',
      border: '1.5px solid rgba(232,255,0,0.12)',
      flexShrink: 0,
      minWidth: 'max-content',
      transition: 'all 0.3s ease',
      backgroundColor: 'rgba(232,255,0,0.03)',
    }}
  >
    <span
      style={{ display: 'flex', alignItems: 'center', filter: 'grayscale(100%) brightness(0.6)', transition: 'filter 0.3s ease' }}
      className="logo-cloud-icon"
    >
      {icon}
    </span>
    <span
      style={{
        color: 'rgba(245,240,232,0.45)',
        fontSize: '0.85rem',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        transition: 'color 0.3s ease',
        fontFamily: "'Space Grotesk', sans-serif",
      }}
      className="logo-cloud-name"
    >
      {name}
    </span>
  </div>
);

const InfiniteRow = ({ items, direction = 'left', speed = 35 }) => {
  const doubled = [...items, ...items, ...items, ...items];
  const totalWidth = items.length * 200;

  return (
    <div style={{
      overflow: 'hidden',
      width: '100%',
      maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
    }}>
      <motion.div
        style={{ display: 'flex', gap: '0.5rem', width: 'max-content' }}
        animate={{ x: direction === 'left' ? [0, -totalWidth] : [-totalWidth, 0] }}
        transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: speed, ease: 'linear' } }}
      >
        {doubled.map((name, i) => (
          <LogoItem key={`${name}-${i}`} name={name} icon={logos[name]} />
        ))}
      </motion.div>
    </div>
  );
};

const Marquee = () => (
  <section
    style={{
      background: '#0A0A0A',
      padding: '3.5rem 0',
      overflow: 'hidden',
      borderTop: '2px solid rgba(232,255,0,0.15)',
      borderBottom: '2px solid rgba(232,255,0,0.15)',
      position: 'relative',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <InfiniteRow items={row1} direction="left"  speed={38} />
      <InfiniteRow items={row2} direction="right" speed={44} />
    </div>
  </section>
);

export default Marquee;
