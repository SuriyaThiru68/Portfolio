import React from 'react';
import { motion } from 'framer-motion';
import { ContactBg } from './SectionBackgrounds';

const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/suriyathiruppathy/' },
  { name: 'GitHub', url: 'https://github.com/SuriyaThiru68' },
  { name: 'Behance', url: 'https://www.behance.net/suriyathiru' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/suriyathiruppathy/' },
];

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: 'transparent',
        borderTop: '1.5px solid rgba(26,26,26,0.1)',
        padding: '7rem 2rem 5rem',
        fontFamily: "'Caveat', cursive",
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <ContactBg />
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
          ✦ Say Hello
        </motion.p>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: 'clamp(3rem, 9vw, 6.5rem)',
            fontWeight: 700,
            color: 'var(--ink)',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
          }}
        >
          Let's Talk
        </motion.h2>

        {/* Wavy hand-drawn underline */}
        <svg width="300" height="16" viewBox="0 0 300 16" fill="none" style={{ marginBottom: '2.5rem' }}>
          <path
            d="M4 8 Q37.5 2 75 8 Q112.5 14 150 8 Q187.5 2 225 8 Q262.5 14 296 8"
            stroke="var(--ink)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Email */}
        <motion.a
          href="mailto:suriyathiru666@gmail.com"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
            fontWeight: 700,
            color: 'var(--blue-accent)',
            textDecoration: 'none',
            display: 'inline-block',
            marginBottom: '4rem',
            borderBottom: '2px dashed rgba(43,63,255,0.4)',
            paddingBottom: '4px',
            transition: 'color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--ink)';
            e.currentTarget.style.borderColor = 'var(--ink)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--blue-accent)';
            e.currentTarget.style.borderColor = 'rgba(43,63,255,0.4)';
          }}
        >
          suriyathiru666@gmail.com
        </motion.a>

        {/* Socials */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 + index * 0.08 }}
              whileHover={{ y: -3 }}
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: '1.3rem',
                fontWeight: 600,
                color: 'var(--ink-light)',
                textDecoration: 'none',
                letterSpacing: '0.06em',
                borderBottom: '2px solid transparent',
                paddingBottom: '2px',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--ink)';
                e.currentTarget.style.borderColor = 'var(--ink)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--ink-light)';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              {social.name}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
