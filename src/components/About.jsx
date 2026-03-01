import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { AboutBg } from './SectionBackgrounds';

/* ─────────────────────────────────────────────────────
   Single word that reveals as you scroll.
   `start` / `end` are [0..1] fractions of the
   section's scroll range.
───────────────────────────────────────────────────── */
const ScrollWord = ({ word, start, end, scrollYProgress, highlight }) => {
  const rawOpacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const rawY = useTransform(scrollYProgress, [start, Math.min(end, 1)], [16, 0]);
  const rawBlur = useTransform(
    scrollYProgress,
    [start, end],
    ['blur(5px)', 'blur(0px)']
  );
  const opacity = useSpring(rawOpacity, { stiffness: 100, damping: 22 });
  const y = useSpring(rawY, { stiffness: 100, damping: 22 });

  return (
    <motion.span
      style={{
        display: 'inline-block',
        marginRight: '0.3em',
        opacity,
        y,
        filter: rawBlur,
        ...(highlight || {}),
      }}
    >
      {word}
    </motion.span>
  );
};

/* ─────────────────────────────────────────────────────
   Block of text (heading or paragraph) where every word
   gets its own scroll-progress window.
───────────────────────────────────────────────────── */
const ScrollTextBlock = ({
  words,
  rangeStart,
  rangeEnd,
  scrollYProgress,
  style,
  Tag = 'p',
  highlights = {},
}) => {
  const span = rangeEnd - rangeStart;
  const count = words.length;

  return (
    <Tag style={{ ...style, lineHeight: 1.75, margin: 0 }}>
      {words.map((word, i) => {
        const wordStart = rangeStart + (i / count) * span;
        const wordEnd = rangeStart + ((i + 0.85) / count) * span;
        const clean = word.replace(/[.,!?—]$/, '');
        const highlight = highlights[word] || highlights[clean];
        return (
          <ScrollWord
            key={i}
            word={word}
            start={Math.min(wordStart, 0.999)}
            end={Math.min(wordEnd, 1)}
            scrollYProgress={scrollYProgress}
            highlight={highlight}
          />
        );
      })}
    </Tag>
  );
};

/* ─────────────────────────────────────────────────────
   Stat card — driven by scroll
───────────────────────────────────────────────────── */
const ScrollStat = ({ num, label, scrollYProgress, rangeStart, rangeEnd }) => {
  const rawOpacity = useTransform(scrollYProgress, [rangeStart, rangeEnd], [0, 1]);
  const rawY = useTransform(scrollYProgress, [rangeStart, rangeEnd], [22, 0]);
  const opacity = useSpring(rawOpacity, { stiffness: 90, damping: 20 });
  const y = useSpring(rawY, { stiffness: 90, damping: 20 });

  return (
    <motion.div style={{ borderLeft: '3px solid var(--ink)', paddingLeft: '1.2rem', opacity, y }}>
      <div
        style={{
          fontFamily: "'Permanent Marker', cursive",
          fontSize: '2.5rem',
          color: 'var(--ink)',
          lineHeight: 1,
        }}
      >
        {num}
      </div>
      <div
        style={{
          fontFamily: "'Caveat', cursive",
          fontSize: '1.1rem',
          color: 'var(--ink-light)',
          marginTop: '0.3rem',
        }}
      >
        {label}
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────────────
   Divider
───────────────────────────────────────────────────── */
const ScrollDivider = ({ scrollYProgress }) => {
  const scaleX = useTransform(scrollYProgress, [0.17, 0.27], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0.17, 0.27], [0, 1]);

  return (
    <motion.div style={{ transformOrigin: 'left', scaleX, opacity, marginBottom: '3rem' }}>
      <svg width="220" height="12" viewBox="0 0 220 12" fill="none">
        <path
          d="M2 6 Q55 2 110 6 Q165 10 218 6"
          stroke="#1a1a1a"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────────────
   MAIN ABOUT COMPONENT
───────────────────────────────────────────────────── */
const About = () => {
  const sectionRef = useRef(null);

  // scroll progress tied strictly to this section
  // start: when section top hits 85% of viewport
  // end:   when section bottom hits 50% of viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.92', 'end 0.10'],   // ← wider range = slower reveal
  });

  const para1Words =
    "Hi! I'm Suriya T, a Computer Science and Engineering student specialising in Artificial Intelligence and Machine Learning at KIT — Kalaignar Karunanidhi Institute of Technology.".split(' ');

  const para2Words =
    "I'm fascinated by how technology can think, learn, and solve problems — and deeply in love with design. My goal is to blend creativity and code, making digital products that are both smart and beautiful.".split(' ');

  const headingWords = ['Who', 'I', 'Am'];

  const para1Highlights = {
    Suriya: { color: 'var(--blue-accent)', fontWeight: 600 },
    'T,': { color: 'var(--blue-accent)', fontWeight: 600 },
  };
  const para2Highlights = {
    smart: { color: 'var(--ink)', fontWeight: 700 },
    'beautiful.': { color: 'var(--ink)', fontWeight: 700 },
  };

  const stats = [
    { num: '5+', label: 'Projects Built' },
    { num: '2', label: 'Internships' },
    { num: '3rd', label: 'Year Student' },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        backgroundColor: 'transparent',
        borderTop: '1.5px solid rgba(26,26,26,0.1)',
        padding: '7rem 2rem',
        fontFamily: "'Caveat', cursive",
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <AboutBg />
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>

        {/* ── Label ── */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: '1rem',
            fontWeight: 600,
            letterSpacing: '0.14em',
            color: 'var(--blue-accent)',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}
        >
          ✦ About Me
        </motion.p>

        {/* ── "Who I Am" — 3 words, scroll range 0.01 → 0.17 ── */}
        <h2
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            fontWeight: 700,
            color: 'var(--ink)',
            lineHeight: 1.1,
            marginBottom: '2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0 0.22em',
          }}
        >
          <ScrollTextBlock
            words={headingWords}
            rangeStart={0.01}
            rangeEnd={0.17}
            scrollYProgress={scrollYProgress}
            Tag="span"
            style={{ display: 'contents' }}
          />
        </h2>

        {/* ── Divider ── */}
        <ScrollDivider scrollYProgress={scrollYProgress} />

        {/* ── Two-column paragraphs ── */}
        <div className="about-grid">

          {/* scroll range 0.27 → 0.60 */}
          <ScrollTextBlock
            words={para1Words}
            rangeStart={0.27}
            rangeEnd={0.60}
            scrollYProgress={scrollYProgress}
            highlights={para1Highlights}
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)',
              color: 'var(--ink-light)',
            }}
          />

          {/* scroll range 0.44 → 0.80 */}
          <ScrollTextBlock
            words={para2Words}
            rangeStart={0.44}
            rangeEnd={0.80}
            scrollYProgress={scrollYProgress}
            highlights={para2Highlights}
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)',
              color: 'var(--ink-light)',
            }}
          />
        </div>

        {/* ── Stats ── */}
        <div style={{ display: 'flex', gap: '3rem', marginTop: '4rem', flexWrap: 'wrap' }}>
          {stats.map(({ num, label }, i) => (
            <ScrollStat
              key={label}
              num={num}
              label={label}
              scrollYProgress={scrollYProgress}
              rangeStart={0.82 + i * 0.05}
              rangeEnd={0.89 + i * 0.05}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
