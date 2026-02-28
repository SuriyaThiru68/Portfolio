import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import portfolioImg from './assests/portfolio.png';

const Hero = () => {
  const circleRef = useRef(null);

  return (
    <section
      id="home"
      style={{ backgroundColor: 'var(--cream)', fontFamily: "'Caveat', cursive" }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle paper texture overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen py-24">

          {/* ── LEFT CONTENT ── */}
          <div className="flex flex-col justify-center">

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              style={{
                fontFamily: "'Caveat', cursive",
                color: 'var(--ink)',
                fontSize: 'clamp(2.6rem, 6vw, 4.4rem)',
                lineHeight: 1.15,
                fontWeight: 700,
                letterSpacing: '-0.01em',
              }}
              className="mb-5 leading-tight"
            >
              Crafting high‑quality{' '}
              {/* Sparkles inline */}
              <span className="inline-flex items-center gap-1">
                <svg className="animate-sparkle" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 2 L15.5 12 L26 14 L15.5 16 L14 26 L12.5 16 L2 14 L12.5 12 Z" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
                </svg>
                <svg className="animate-sparkle-delay" width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ marginTop: '-8px' }}>
                  <path d="M9 1 L10 8 L17 9 L10 10 L9 17 L8 10 L1 9 L8 8 Z" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
                </svg>
              </span>
              <br />
              Outcomes With
              {' '}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                style={{
                  color: 'var(--blue-accent)',
                  fontFamily: "'Permanent Marker', cursive",
                  fontSize: 'clamp(2.8rem, 6.2vw, 4.6rem)',
                  fontStyle: 'italic',
                }}
              >
                VISION
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{
                fontFamily: "'Caveat', cursive",
                color: 'var(--ink-light)',
                fontSize: 'clamp(1.25rem, 2.2vw, 1.55rem)',
                lineHeight: 1.55,
                maxWidth: '520px',
              }}
              className="mb-10"
            >
              <span style={{ color: 'var(--blue-accent)', fontWeight: 600 }}>I'm Suriya</span>,
              {' '}a Computer Science student passionate about building clean,
              responsive, and user‑focused web experiences.
            </motion.p>

            {/* LET'S TALK CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex flex-col items-start"
                style={{ textDecoration: 'none' }}
              >
                {/* Hand-drawn arrow cursor SVG */}
                <div className="flex items-center gap-2 mb-1">
                  <svg
                    className="animate-wiggle-arrow"
                    width="56"
                    height="40"
                    viewBox="0 0 56 40"
                    fill="none"
                    style={{ overflow: 'visible' }}
                  >
                    {/* Arrow curve */}
                    <path
                      d="M4 28 C8 14, 20 8, 38 14"
                      stroke="#1a1a1a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                    {/* Arrowhead */}
                    <path
                      d="M32 10 L40 15 L34 20"
                      stroke="#1a1a1a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    {/* Cursor icon */}
                    <path
                      d="M44 18 L44 30 L47.5 26.5 L50 32 L52 31 L49.5 25.5 L54 25 Z"
                      stroke="#1a1a1a"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                      fill="var(--cream)"
                    />
                  </svg>
                </div>
                <span
                  className="sketch-underline group-hover:opacity-70 transition-opacity"
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: '1rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    color: 'var(--ink)',
                    textTransform: 'uppercase',
                  }}
                >
                  Let's Talk
                </span>
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT CONTENT — Hand-drawn Circle ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: 'easeOut' }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative animate-float-circle" style={{ width: '380px', height: '380px' }}>
              {/* Hand-drawn circle SVG — multiple wobbled strokes for sketch feel */}
              <svg
                viewBox="0 0 380 380"
                fill="none"
                className="absolute inset-0 w-full h-full"
                style={{ overflow: 'visible' }}
              >
                {/* Outer stroke 1 */}
                <ellipse
                  cx="192" cy="191"
                  rx="158" ry="160"
                  stroke="#1a1a1a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="animate-draw-circle"
                  style={{ animationDelay: '0.2s' }}
                />
                {/* Inner stroke 2 — slightly offset for sketch feel */}
                <ellipse
                  cx="190" cy="190"
                  rx="155" ry="157"
                  stroke="#1a1a1a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeOpacity="0.4"
                  style={{
                    strokeDasharray: '1200',
                    strokeDashoffset: '0',
                    animationDelay: '0.5s',
                  }}
                  className="animate-draw-circle"
                />
              </svg>

              {/* Profile image clipped inside the circle */}
              <div
                className="absolute"
                style={{
                  top: '10%',
                  left: '10%',
                  width: '80%',
                  height: '80%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid rgba(26,26,26,0.12)',
                }}
              >
                <img
                  src={portfolioImg}
                  alt="Suriya Thirumoorthy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    filter: 'contrast(1.05) brightness(0.97)',
                    mixBlendMode: 'multiply',
                  }}
                />
                {/* Cream tint overlay for sketch feel */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'var(--cream)',
                    opacity: 0.08,
                    borderRadius: '50%',
                  }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;