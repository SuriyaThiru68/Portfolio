import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    year: '2025',
    role: 'FULL STACK DEVELOPMENT INTERN',
    company: 'LEARNLOGICIFY TECHNOLOGIES LLP',
    description: 'Building responsive web applications and interactive front-end user interfaces with modern React ecosystem, FastAPI backends, and modular styling.',
    bg: '#b6a4e5',
  },
  {
    year: '2024',
    role: 'WEB DEVELOPMENT INTERN',
    company: 'ETHER INFOTECH',
    description: 'Built and optimized client-facing web interfaces, internal tools, and database connections with high emphasis on performance and cross-device responsiveness.',
    bg: '#bef2bd',
  },
];

const Experience = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const logsRef = useRef(null);

  useGSAP(() => {
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

    if (logsRef.current) {
      gsap.from(logsRef.current.children, {
        x: -40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: logsRef.current,
          start: 'top 80%',
        },
      });
    }
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="experience"
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
            /EXPERIENCE
          </h2>
        </div>

        <div ref={logsRef} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp) => (
            <motion.div
              key={exp.role}
              whileHover={{ x: 8, boxShadow: '6px 6px 0 #000000' }}
              transition={{ duration: 0.2 }}
              className="exp-card"
            >
              <div className="exp-card-badge">
                <span
                  style={{
                    backgroundColor: exp.bg,
                    border: '1px solid #000000',
                    padding: '0.4rem 0.8rem',
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '2.2rem',
                    lineHeight: 1,
                    display: 'inline-block',
                  }}
                >
                  {exp.year}
                </span>
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(1.6rem, 3.5vw, 3rem)',
                    lineHeight: 0.95,
                    color: '#000000',
                    marginBottom: '0.4rem',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                  }}
                >
                  {exp.role}
                </h3>

                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: '#FF0055',
                    marginBottom: '1.2rem',
                    textTransform: 'uppercase',
                  }}
                >
                  {exp.company}
                </div>

                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.05rem',
                    lineHeight: 1.6,
                    color: '#333333',
                    margin: 0,
                  }}
                >
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
