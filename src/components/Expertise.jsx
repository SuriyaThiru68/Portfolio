import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: '01',
    title: 'DIGITAL DESIGNER',
    description: 'Crafting high-impact UI/UX experiences with bold visual systems, accessible layouts, and polished digital branding for modern web products.',
    tags: ['Figma', 'UI/UX', 'PROTOTYPING', 'BRANDING', 'INTERACTION'],
    bg: '#FF0055',
    color: '#ffffff',
  },
  {
    id: '02',
    title: 'FULL STACK DEVELOPMENT',
    description: 'Engineering responsive, high-performance web applications with React, Node, Tailwind, and RESTful microservices. Wireframes to production code.',
    tags: ['REACT.JS', 'FASTAPI', 'REST APIs', 'TAILWIND CSS', 'MONGODB'],
    bg: '#b6a4e5',
  },
  {
    id: '03',
    title: 'AI & MACHINE LEARNING',
    description: 'Designing and deploying machine learning algorithms, deep learning models, computer vision systems, and automated agent workflows for real-world decision making.',
    tags: ['PYTHON', 'TENSORFLOW', 'OPENCV', 'SCIKIT-LEARN', 'AGENTS'],
    bg: '#bef2bd',
  },
];

const Expertise = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

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

    if (cardsRef.current) {
      gsap.from(cardsRef.current.children, {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
        },
      });
    }
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="expertise"
      style={{
        backgroundColor: '#ffffff',
        color: '#000000',
        padding: '5rem 0',
        borderBottom: '1px solid #000000',
        overflow: 'hidden',
      }}
    >
      <div style={{ width: '100%', maxWidth: '1600px', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 3rem)' }}>
        
        <div ref={titleRef}>
          <h2 className="section-slash">
            /EXPERTISE &amp; SERVICES
          </h2>
        </div>

        <div
          ref={cardsRef}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '2.5rem' }}
        >
          {services.map((srv) => (
            <motion.div
              key={srv.id}
              className="gallery-card"
              whileHover={{ y: -8, boxShadow: '8px 8px 0 #000000' }}
              transition={{ duration: 0.2 }}
              style={{
                padding: 'clamp(1.25rem, 3.5vw, 2.5rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span
                    style={{
                      backgroundColor: srv.bg,
                      border: '1px solid #000000',
                      padding: '0.4rem 0.9rem',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.85rem',
                    }}
                  >
                    SERVICE {srv.id}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(1.8rem, 4vw, 3.4rem)',
                    lineHeight: 0.9,
                    color: '#000000',
                    marginBottom: '1.2rem',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                  }}
                >
                  {srv.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.05rem',
                    lineHeight: 1.6,
                    color: '#333333',
                    marginBottom: '2rem',
                  }}
                >
                  {srv.description}
                </p>
              </div>

              <div>
                <div style={{ borderTop: '1px solid #000000', paddingTop: '1.2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {srv.tags.map((t) => (
                    <motion.span
                      key={t}
                      whileHover={{ scale: 1.05, backgroundColor: srv.bg }}
                      transition={{ duration: 0.15 }}
                      style={{
                        border: '1px solid #000000',
                        backgroundColor: '#f4f4f0',
                        padding: '0.3rem 0.7rem',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        cursor: 'default',
                      }}
                    >
                      {t}
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

export default Expertise;
