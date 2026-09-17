import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hrImage from '../assets/suriya.png';
import ScrollReveal from './ScrollReveal';

gsap.registerPlugin(ScrollTrigger);



// ── Hero ──────────────────────────────────────────────────────────────────────
const Hero = () => {
  const containerRef = useRef(null);
  const megaTextRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // 1. Skew Mega Header on Scroll Velocity
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(megaTextRef.current, "skewX", "deg"),
      clamp = gsap.utils.clamp(-8, 8);

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -250);
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew)
          });
        }
      }
    });

    // 2. Parallax image
    gsap.to(imageRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="home"
      style={{
        backgroundColor: '#f4f4f0',
        minHeight: '90vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
      {/* ── Top Mega Header ── */}
      <div
        style={{
          width: '100%',
          borderBottom: '1px solid #000000',
          padding: '1rem clamp(1rem, 3vw, 2.5rem) 0.5rem',
          overflow: 'hidden',
          backgroundColor: '#f4f4f0',
        }}
      >
        <div ref={megaTextRef} style={{ willChange: 'transform' }}>
          <motion.h1
            className="mega-header"
            style={{ margin: 0, cursor: 'default', userSelect: 'none' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            SURIYA THIRUPPATHY
          </motion.h1>
        </div>
      </div>

      {/* ── Main 2-Column Grid ── */}
      <div className="hero-main-layout">
        {/* Left Column */}
        <div
          style={{
            padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3.5rem)',
            borderRight: '1px solid #000000',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
          className="hero-left-col"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(3rem, 5vw, 6rem)',
                lineHeight: 0.9,
                letterSpacing: '-0.01em',
                color: '#000000',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              WEB DEVELOPER &amp; DIGITAL DESIGNER
            </motion.h2>
          </div>
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={3}
              blurStrength={6}
              style={{ marginTop: '2rem', maxWidth: '480px' }}
              textStyle={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                lineHeight: 1.7,
                color: '#333333',
              }}
            >
              I design and develop digital products that combine thoughtful user experiences, scalable engineering, and AI to solve real-world problems.
            </ScrollReveal>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '2.5rem',
              flexWrap: 'wrap',
            }}
          >
            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: '#000000', color: '#f4f4f0' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                padding: '0.85rem 2rem',
                backgroundColor: '#000000',
                color: '#f4f4f0',
                border: '1.5px solid #000000',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                cursor: 'pointer',
                borderRadius: '2px',
              }}
            >
              View Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: '#000000', color: '#f4f4f0' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                padding: '0.85rem 2rem',
                backgroundColor: 'transparent',
                color: '#000000',
                border: '1.5px solid #000000',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                cursor: 'pointer',
                borderRadius: '2px',
              }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>


        {/* Right Column: Parallax Photo */}
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#f4f4f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '420px',
          }}
          className="hero-right-col"
        >
          <img
            ref={imageRef}
            src={hrImage}
            alt="Suriya Thiruppathy"
            className="hero-image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'contrast(1.15) grayscale(10%)',
              display: 'block',
              willChange: 'transform',
            }}
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;
