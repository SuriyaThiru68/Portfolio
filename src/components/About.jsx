import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      style={{
        backgroundColor: 'var(--cream)',
        borderTop: '1.5px solid rgba(26,26,26,0.1)',
        padding: '7rem 2rem',
        fontFamily: "'Caveat', cursive",
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            fontWeight: 700,
            color: 'var(--ink)',
            lineHeight: 1.1,
            marginBottom: '3rem',
          }}
        >
          Who I Am
        </motion.h2>

        {/* Hand-drawn divider */}
        <svg width="220" height="12" viewBox="0 0 220 12" fill="none" style={{ marginBottom: '3rem' }}>
          <path d="M2 6 Q55 2 110 6 Q165 10 218 6" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="grid-cols-1-md">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 'clamp(1.25rem, 2.2vw, 1.55rem)',
              lineHeight: 1.7,
              color: 'var(--ink-light)',
            }}
          >
            Hi! I'm <span style={{ color: 'var(--blue-accent)', fontWeight: 600 }}>Suriya T</span>, a Computer Science
            and Engineering student specialising in Artificial Intelligence and Machine Learning
            at KIT — Kalaignar Karunanidhi Institute of Technology.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 'clamp(1.25rem, 2.2vw, 1.55rem)',
              lineHeight: 1.7,
              color: 'var(--ink-light)',
            }}
          >
            I'm fascinated by how technology can think, learn, and solve problems — and deeply
            in love with design. My goal is to blend creativity and code, making digital products
            that are both <span style={{ color: 'var(--ink)', fontWeight: 600 }}>smart</span> and <span style={{ color: 'var(--ink)', fontWeight: 600 }}>beautiful</span>.
          </motion.p>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            display: 'flex',
            gap: '3rem',
            marginTop: '4rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { num: '5+', label: 'Projects Built' },
            { num: '2', label: 'Internships' },
            { num: '3rd', label: 'Year Student' },
          ].map(({ num, label }) => (
            <div key={label} style={{ borderLeft: '3px solid var(--ink)', paddingLeft: '1.2rem' }}>
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
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
