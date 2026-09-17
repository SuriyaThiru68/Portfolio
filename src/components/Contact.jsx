import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { name: 'LinkedIn →', url: 'https://www.linkedin.com/in/suriyathiruppathy/', bg: '#b6a4e5' },
  { name: 'GitHub →', url: 'https://github.com/SuriyaThiru68', bg: '#bef2bd' },
  { name: 'Codolio →', url: 'https://codolio.com/profile/SURIYA%20T', bg: '#b6a4e5' },
];

const Contact = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const headlineRef = useRef(null);
  const socialsRef = useRef(null);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    });

    gsap.from(headlineRef.current, {
      scale: 0.92,
      opacity: 0,
      duration: 0.9,
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: headlineRef.current,
        start: 'top 85%',
      },
    });

    if (socialsRef.current) {
      gsap.from(socialsRef.current.children, {
        scale: 0.8,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: 'back.out(1.6)',
        scrollTrigger: {
          trigger: socialsRef.current,
          start: 'top 90%',
        },
      });
    }
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="contact"
      style={{
        color: '#000000',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        padding: '6rem 0 5rem',
        borderBottom: '1px solid #000000',
        overflow: 'hidden',
      }}
    >
      <div style={{ width: '100%', maxWidth: '1600px', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 3rem)', textAlign: 'center' }}>

        <div ref={titleRef}>
          <h2 className="section-slash" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            /GET IN TOUCH
          </h2>
        </div>

        <div ref={headlineRef}>
          <h3
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2.2rem, 8vw, 7.5rem)',
              lineHeight: 0.88,
              textTransform: 'uppercase',
              color: '#000000',
              marginBottom: '2rem',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
            }}
          >
            LET'S WORK TOGETHER ON YOUR NEXT PROJECT
          </h3>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={3}
            blurStrength={6}
            style={{ maxWidth: '650px', margin: '0 auto 3rem', textAlign: 'center' }}
            textStyle={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1rem, 1.8vw, 1.35rem)',
              color: '#444444',
              lineHeight: 1.6,
            }}
          >
            Available for full-stack engineering roles, agentic AI platform development, machine learning projects, and freelance collaborations.
          </ScrollReveal>
        </div>

        {/* Email Sticker Button with Spring Physics */}
        <div style={{ marginBottom: '4rem' }}>
          <motion.a
            href="mailto:suriyathiru666@gmail.com"
            className="btn-sticker"
            whileHover={{ scale: 1.05, backgroundColor: '#bef2bd' }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            style={{
              fontSize: 'clamp(0.85rem, 3.5vw, 1.3rem)',
              padding: '0.8rem clamp(1rem, 3vw, 2.5rem)',
              backgroundColor: '#b6a4e5',
              display: 'inline-block',
            }}
          >
            suriyathiru666@gmail.com ✉
          </motion.a>
        </div>

        {/* Social Links Grid with Motion Stagger & Hover */}
        <div ref={socialsRef} style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          {socials.map((s) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="btn-sticker"
              whileHover={{ scale: 1.08, backgroundColor: '#FF0055', color: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 350, damping: 18 }}
              style={{
                backgroundColor: s.bg,
                fontSize: '0.95rem',
                padding: '0.8rem 1.8rem',
              }}
            >
              {s.name}
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;
