import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Programming',
    items: ['Python', 'Java', 'C'],
  },
  {
    category: 'Web Dev',
    items: ['HTML & CSS', 'Tailwind CSS', 'JavaScript', 'React', 'Bootstrap'],
  },
  {
    category: 'Databases',
    items: ['SQL', 'MongoDB'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'MongoDB Compass'],
  },
  {
    category: 'Deployment',
    items: ['Vercel', 'Render', 'Netlify', 'GitHub Pages'],
  },
  {
    category: 'Design',
    items: ['Figma', 'Framer', 'Affinity Designer', 'Photoshop', 'Canva'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        backgroundColor: 'var(--cream)',
        borderTop: '1.5px solid rgba(26,26,26,0.1)',
        padding: '7rem 2rem',
        fontFamily: "'Caveat', cursive",
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

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
          ✦ Toolkit
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
            marginBottom: '1rem',
            lineHeight: 1.1,
          }}
        >
          Skills
        </motion.h2>

        {/* Hand-drawn underline */}
        <svg width="140" height="10" viewBox="0 0 140 10" fill="none" style={{ marginBottom: '3.5rem' }}>
          <path d="M2 5 Q35 1 70 5 Q105 9 138 5" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              style={{
                backgroundColor: 'var(--cream-dark)',
                border: '2px solid rgba(26,26,26,0.14)',
                borderRadius: '4px',
                padding: '1.8rem 2rem',
                transition: 'border-color 0.2s, box-shadow 0.2s',
                cursor: 'default',
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
              <h3
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--blue-accent)',
                  marginBottom: '1rem',
                  borderBottom: '1.5px dashed rgba(26,26,26,0.2)',
                  paddingBottom: '0.6rem',
                }}
              >
                {skill.category}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {skill.items.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      fontFamily: "'Caveat', cursive",
                      fontSize: '1.2rem',
                      color: 'var(--ink-light)',
                      padding: '0.25rem 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ color: 'var(--ink)', fontSize: '0.6rem', marginTop: '2px' }}>●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
