import React from 'react';
import { motion } from 'framer-motion';

const expertiseItems = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <polyline points="6,12 12,6 18,12" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="30,24 24,30 18,24" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="6" x2="24" y2="30" stroke="#2b3fff" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Web Development',
    description: 'Building responsive, performant web applications with modern technologies — React, Node.js, REST APIs, and more.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="10" stroke="#1a1a1a" strokeWidth="2" fill="none" />
        <circle cx="18" cy="18" r="4" fill="#2b3fff" />
        <line x1="18" y1="4" x2="18" y2="8" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
        <line x1="18" y1="28" x2="18" y2="32" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
        <line x1="4" y1="18" x2="8" y2="18" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
        <line x1="28" y1="18" x2="32" y2="18" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'UI/UX Design',
    description: 'Creating intuitive, beautiful interfaces in Figma, Framer, and Affinity — where every pixel, interaction, and detail matters.',
  },
];

const Expertise = () => {
  return (
    <section
      id="expertise"
      style={{
        backgroundColor: 'var(--cream-dark)',
        borderTop: '1.5px solid rgba(26,26,26,0.1)',
        borderBottom: '1.5px solid rgba(26,26,26,0.1)',
        padding: '6rem 2rem',
        fontFamily: "'Caveat', cursive",
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
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
          ✦ What I Do
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
            fontWeight: 700,
            color: 'var(--ink)',
            marginBottom: '3rem',
          }}
        >
          My Expertise
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              style={{
                backgroundColor: 'var(--cream)',
                border: '2px solid rgba(26,26,26,0.15)',
                borderRadius: '4px',
                padding: '2.5rem',
                cursor: 'default',
                transition: 'border-color 0.2s, box-shadow 0.2s',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--blue-accent)';
                e.currentTarget.style.boxShadow = '4px 4px 0 var(--blue-accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(26,26,26,0.15)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Sketch corner decoration */}
              <svg
                style={{ position: 'absolute', top: 8, right: 8, opacity: 0.2 }}
                width="28" height="28" viewBox="0 0 28 28" fill="none"
              >
                <path d="M14 2 L15.5 10 L24 14 L15.5 18 L14 26 L12.5 18 L4 14 L12.5 10 Z"
                  stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
              </svg>

              <div style={{ marginBottom: '1.5rem' }}>{item.icon}</div>

              <h3
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  marginBottom: '0.75rem',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: '1.2rem',
                  color: 'var(--ink-light)',
                  lineHeight: 1.6,
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
