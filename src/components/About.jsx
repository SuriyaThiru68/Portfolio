import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ScrollReveal from './ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const leftRef = useRef(null);


  useGSAP(() => {
    gsap.from(titleRef.current, {
      x: -60,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    });

    gsap.from(leftRef.current, {
      x: -40,
      opacity: 0,
      duration: 0.9,
      delay: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
    });


  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="about"
      style={{
        backgroundColor: '#f4f4f0',
        color: '#000000',
        borderBottom: '1px solid #000000',
        overflow: 'hidden',
      }}
    >
      {/* ── Section Title Bar ── */}
      <div
        ref={titleRef}
        style={{
          borderBottom: '1px solid #000000',
          padding: '0.6rem clamp(1rem, 4vw, 3rem)',
        }}
      >
        <h2 className="section-slash">/ABOUT</h2>
      </div>

      {/* ── Main 2-Column Grid ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          alignItems: 'stretch',
          minHeight: '580px',
        }}
        className="about-hero-grid"
      >
        {/* ── Left Column ── */}
        <div
          ref={leftRef}
          style={{
            padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3.5rem)',

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          {/* Big Display Heading */}
          <div>
            <h3
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(0.8rem, 2.5vw, 3.5rem)',
                lineHeight: 0.88,
                letterSpacing: '-0.01em',
                color: '#000000',
                textTransform: 'uppercase',
                marginBottom: '1.2rem',
              }}
            >
              I BUILD<br />
              INTELLIGENT<br />
              DIGITAL<br />
              <span style={{ color: '#b6a4e5' }}>EXPERIENCES.</span>
            </h3>

            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={3}
              blurStrength={8}
              style={{ maxWidth: '1020px', margin: '1rem 0 0 0' }}
              textStyle={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(2.9rem, 4.3vw, 3.05rem)',
                lineHeight: 1.65,
                color: '#333333',
              }}
            >
              I'm Suriya T, an AI/ML Engineer and Full-Stack Developer who loves building scalable solutions that solve real-world problems with clean code and good design.
            </ScrollReveal>
          </div>

          {/* Info Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {/* CURRENTLY */}
            <motion.div
              whileHover={{ y: -4, boxShadow: '5px 5px 0 #000000' }}
              transition={{ duration: 0.2 }}
              style={{
                border: '1px solid #000000',
                backgroundColor: '#bef2bd',
                padding: '1.2rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>CURRENTLY</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>↗</span>
              </div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem', lineHeight: 1.55, color: '#000000' }}>
                Building AI-powered projects and exploring LLMs, AI Agents and modern web technologies.
              </p>
            </motion.div>

            {/* FOCUS */}
            <motion.div
              whileHover={{ y: -4, boxShadow: '5px 5px 0 #000000' }}
              transition={{ duration: 0.2 }}
              style={{
                border: '1px solid #000000',
                backgroundColor: '#FF0055',
                padding: '1.2rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ffffff' }}>FOCUS</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>↗</span>
              </div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem', lineHeight: 1.7, color: '#ffffff' }}>
                AI/ML Engineering<br />
                Full-Stack Development<br />
                Problem Solving<br />
                Product Design
              </p>
            </motion.div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default About;
