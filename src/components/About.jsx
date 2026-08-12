import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import suriyaImg from '../assets/suriya-portrait.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);


  useGSAP(() => {
    gsap.from(titleRef.current, {
      x: -60,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });


  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="about"
      style={{
        backgroundColor: '#f4f4f0',
        color: '#000000',
        padding: '5rem 0',
        borderBottom: '1px solid #000000',
        overflow: 'hidden',
      }}
    >
      <div style={{ width: '100%', maxWidth: '1600px', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 3rem)' }}>

        {/* Section Slash Title */}
        <div ref={titleRef}>
          <h2 className="section-slash">
            /ABOUT
          </h2>
        </div>

        {/* 2-Column Catalog Grid */}
        <div className="about-main-grid">

          {/* Left Column: Portrait Frame */}
          <motion.div
            whileHover={{ rotate: 1, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              border: '1px solid #000000',
              backgroundColor: '#ffffff',
              padding: '1.5rem',
              position: 'relative',
              boxShadow: '6px 6px 0 #000000',
            }}
          >
            <div style={{
              border: '1px solid #000000',
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: '#f0f0ec',
              aspectRatio: '1 / 1',
              width: '100%',
            }}>
              <img
                src={suriyaImg}
                alt="Suriya Thiruppathy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center center',
                  display: 'block',
                  filter: 'contrast(1.12) grayscale(12%)',
                }}
              />
            </div>

            <div
              style={{
                marginTop: '1.2rem',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '1rem',
                textTransform: 'uppercase',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>Suriya Thiruppathy</span>

            </div>
          </motion.div>

          {/* Right Column: Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '1.8rem' }}>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)',
                lineHeight: 1.6,
                color: '#000000',
                fontWeight: 500,
              }}
            >
              Computer Science &amp; Engineering student specializing in Artificial Intelligence and Machine Learning at KIT — Kalaignar Karunanidhi Institute of Technology.
            </p>

            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                lineHeight: 1.6,
                color: '#444444',
              }}
            >
              I develop high-impact web applications, agentic AI security platforms, contest notification systems, and ML models. My work combines clean architecture with uninhibited visual expression.
            </p>


          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
