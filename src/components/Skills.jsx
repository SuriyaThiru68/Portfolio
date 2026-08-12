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
        padding: '5rem 0',
        borderBottom: '1px solid #000000',
        overflow: 'hidden',
      }}
    >
      <div style={{ width: '100%', maxWidth: '1600px', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 3rem)' }}>
        
        <div ref={titleRef}>
          <h2 className="section-slash">
            /TECHNICAL SKILLS
          </h2>
        </div>

        <div
          ref={gridRef}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              whileHover={{ y: -6, boxShadow: '6px 6px 0 #000000' }}
              transition={{ duration: 0.2 }}
              style={{
                border: '1px solid #000000',
                backgroundColor: '#ffffff',
                padding: 'clamp(1.25rem, 3vw, 2rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    backgroundColor: cat.bg,
                    color: cat.color || '#000000',
                    border: '1px solid #000000',
                    padding: '0.5rem 1rem',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  {cat.title}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {cat.skills.map((s) => (
                    <motion.span
                      key={s}
                      whileHover={{ scale: 1.08, backgroundColor: '#000000', color: '#bef2bd' }}
                      transition={{ duration: 0.15 }}
                      style={{
                        border: '1px solid #000000',
                        backgroundColor: '#f4f4f0',
                        padding: '0.4rem 0.8rem',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        color: '#000000',
                        cursor: 'default',
                      }}
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
