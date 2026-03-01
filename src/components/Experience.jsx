import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceBg } from './SectionBackgrounds';

const experiences = [
  {
    year: '2025',
    role: 'Full Stack Development',
    company: 'LearnLogicify Technologies LLP',
    description: 'Building responsive web applications and interactive user interfaces with modern tech stack.',
    side: 'right',
  },
  {
    year: '2024',
    role: 'Web Development',
    company: 'Ether Infotech',
    description: 'Built and improved responsive web interfaces for client-facing projects and internal tools.',
    side: 'left',
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      style={{
        backgroundColor: 'transparent',
        borderTop: '1.5px solid rgba(26,26,26,0.1)',
        padding: '7rem 2rem',
        fontFamily: "'Caveat', cursive",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <ExperienceBg />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>

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
          ✦ Career
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            fontWeight: 700,
            color: 'var(--ink)',
            marginBottom: '4rem',
            lineHeight: 1.1,
          }}
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Centre line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: 'rgba(26,26,26,0.15)',
              transform: 'translateX(-50%)',
              transformOrigin: 'top',
            }}
            className="hidden-on-mobile"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: exp.side === 'right' ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="exp-row"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: exp.side === 'right' ? 'flex-start' : 'flex-end',
                  position: 'relative',
                }}
              >
                {/* Year badge — centred on timeline */}
                <div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'var(--ink)',
                    color: 'var(--cream)',
                    padding: '4px 16px',
                    borderRadius: '2px',
                    fontFamily: "'Caveat', cursive",
                    fontWeight: 700,
                    fontSize: '1rem',
                    letterSpacing: '0.08em',
                    whiteSpace: 'nowrap',
                    zIndex: 10,
                    top: '1.5rem',
                  }}
                  className="year-badge-hidden"
                >
                  {exp.year}
                </div>

                {/* Card */}
                <div
                  className="exp-card"
                  style={{
                    width: '46%',
                    backgroundColor: 'var(--cream-dark)',
                    border: '2px solid rgba(26,26,26,0.14)',
                    borderRadius: '4px',
                    padding: '1.8rem 2rem',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--blue-accent)';
                    e.currentTarget.style.boxShadow = '4px 4px 0 var(--blue-accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(26,26,26,0.14)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Mobile-only year tag */}
                  <span
                    style={{
                      fontFamily: "'Caveat', cursive",
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: 'var(--blue-accent)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {exp.year}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Caveat', cursive",
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'var(--ink)',
                      marginTop: '0.25rem',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {exp.role}
                  </h3>
                  <h4
                    style={{
                      fontFamily: "'Caveat', cursive",
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      color: 'var(--blue-accent)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {exp.company}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'Caveat', cursive",
                      fontSize: '1.1rem',
                      color: 'var(--ink-light)',
                      lineHeight: 1.55,
                    }}
                  >
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
