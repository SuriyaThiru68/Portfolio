import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  { title: 'PROGRAMMING LANGUAGES', skills: ['PYTHON', 'C', 'JAVA', 'JAVASCRIPT'], bg: '#b6a4e5' },
  { title: 'WEB & FULL STACK', skills: ['REACT.JS', 'HTML5', 'CSS3', 'TAILWIND CSS', 'BOOTSTRAP', 'FASTAPI', 'REST APIs'], bg: '#bef2bd' },
  { title: 'AI / ML & DATA SCIENCE', skills: ['MACHINE LEARNING', 'DEEP LEARNING', 'COMPUTER VISION', 'NLP BASICS', 'TENSORFLOW', 'PYTORCH', 'SCIKIT-LEARN', 'OPENCV', 'PANDAS', 'NUMPY'], bg: '#FF0055', color: '#ffffff' },
  { title: 'DATABASES & STORAGE', skills: ['MYSQL', 'MONGODB'], bg: '#b6a4e5' },
  { title: 'TOOLS & ECOSYSTEM', skills: ['GIT', 'GITHUB', 'VS CODE', 'MONGODB COMPASS', 'JUPYTER', 'COLAB', 'POSTMAN'], bg: '#bef2bd' },
];

const Skills = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    // Title GSAP entrance
    gsap.from(titleRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    });

    // Staggered category card entry
    if (gridRef.current) {
      gsap.from(gridRef.current.children, {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
        },
      });
    }
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="skills"
      style={{
        backgroundColor: '#f4f4f0',
        color: '#000000',
        borderBottom: '1px solid #000000',
        overflow: 'hidden',
      }}
    >
      {/* Title Bar */}
      <div
        ref={titleRef}
        style={{
          borderBottom: '1px solid #000000',
          padding: '0.6rem clamp(1rem, 4vw, 3rem)',
        }}
      >
        <h2 className="section-slash">/TECHNICAL SKILLS</h2>
      </div>

      <div style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 4vw, 3rem)' }}>
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0',
            border: '1px solid #000000',
          }}
          className="skills-grid"
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              whileHover={{ backgroundColor: '#fffff8', zIndex: 2 }}
              transition={{ duration: 0.15 }}
              style={{
                backgroundColor: '#ffffff',
                padding: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                borderRight: (i + 1) % 3 !== 0 ? '1px solid #000000' : 'none',
                borderBottom: i < skillCategories.length - (skillCategories.length % 3 || 3) ? '1px solid #000000' : 'none',
                position: 'relative',
              }}
            >
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    backgroundColor: cat.bg,
                    border: '1px solid #000000',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#000000',
                  }}
                >
                  {cat.title}
                </span>
              </div>

              {/* Colored accent line */}
              <div style={{
                width: '100%',
                height: '3px',
                backgroundColor: cat.bg,
                border: '1px solid #000000',
              }} />

              {/* Skill pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {cat.skills.map((s) => (
                  <motion.span
                    key={s}
                    whileHover={{ backgroundColor: '#000000', color: cat.bg === '#FF0055' ? '#ffffff' : cat.bg }}
                    transition={{ duration: 0.12 }}
                    style={{
                      border: '1px solid #000000',
                      backgroundColor: '#f4f4f0',
                      padding: '0.3rem 0.65rem',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: '0.72rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      color: '#000000',
                      cursor: 'default',
                    }}
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
