import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';

import popcorniq from '../assets/popcorniq.jpg';
import codeflow from '../assets/codeflow.png';
import codingwebsite from '../assets/coding contest.png';
import avatarbooking from '../assets/avatarbooking.png';
import iot from '../assets/iot.jpg';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: '01',
    title: 'CINEMATIC MOVIE EXPLORER',
    subtitle: 'FULL STACK / PERSONAL PROJECT',
    description: 'A comprehensive movie discovery platform featuring a stunning cinematic interface, real-time TMDB API integration, dynamic filtering, and personalized watchlists.',
    image: popcorniq,
    link: 'https://popcorniq-moviewebsite.vercel.app/',
    stack: ['REACT.JS', 'TMDB API', 'TAILWIND CSS'],
    bg: '#b6a4e5',
  },
  {
    id: '02',
    title: 'CODE FLOW',
    subtitle: 'AGENTIC AI & FULL STACK',
    description: 'Multi-Agent Intelligent Security Vulnerability Detection Platform — autonomous AI agents scanning, detecting, and reporting code vulnerabilities in real time.',
    image: codeflow,
    link: 'https://mycodeflow.vercel.app/',
    stack: ['AI AGENTS', 'PYTHON', 'FASTAPI', 'REACT'],
    bg: '#bef2bd',
  },
  {
    id: '03',
    title: 'CODE NOTIFY',
    subtitle: 'CONTEST TRACKER & FULL STACK',
    description: 'An intelligent notification system that tracks coding contests across multiple platforms with real-time email alerts, calendar integration, and automated reminders.',
    image: codingwebsite,
    link: 'https://codeevents.vercel.app/',
    stack: ['REACT', 'NODE.JS', 'REST APIS'],
    bg: '#b6a4e5',
  },
  {
    id: '04',
    title: 'AI AVATAR BOOKING SYSTEM',
    subtitle: 'AI & FULL STACK WEB PLATFORM',
    description: 'A smart web platform to book AI-powered avatars for customer support, content creation, virtual assistance, and interactive video experiences.',
    image: avatarbooking,
    link: 'https://github.com/SuriyaThiru68/AvatarBased_Smart_Appointment_Booking_System',
    stack: ['AI AVATARS', 'REACT', 'EXPRESS'],
    bg: '#bef2bd',
  },
  {
    id: '05',
    title: 'PUBLIC TOILET FEEDBACK SYSTEM',
    subtitle: 'IOT HARDWARE & TELEGRAM ALERTS',
    description: 'An innovative IoT solution for public restroom maintenance featuring real-time hygiene monitoring, automated Telegram alerts, and an analytics dashboard.',
    image: iot,
    link: '',
    stack: ['IOT SENSORS', 'PYTHON', 'TELEGRAM BOT'],
    bg: '#FF0055',
    color: '#ffffff',
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    if (gridRef.current) {
      gsap.from(gridRef.current.children, {
        y: 60,
        opacity: 0,
        stagger: 0.18,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        }
      });
    }
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="projects"
      style={{
        backgroundColor: '#ffffff',
        color: '#000000',
        padding: '5rem 0',
        borderBottom: '1px solid #000000',
        overflow: 'hidden',
      }}
    >
      <div style={{ width: '100%', maxWidth: '1600px', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 3rem)' }}>

        {/* Section Slash Title */}
        <h2 className="section-slash">
          /PROJECTS
        </h2>

        {/* Gallery Grid of Projects with GSAP Scroll Trigger Stagger */}
        <div
          ref={gridRef}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '2.5rem' }}
        >
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              className="gallery-card"
              whileHover={{ y: -6, boxShadow: '6px 6px 0 #000000' }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Product Image Frame with Zoom Effect */}
                <div style={{ borderBottom: '1px solid #000000', overflow: 'hidden', height: 'clamp(200px, 30vh, 280px)', position: 'relative' }}>
                  <motion.img
                    src={proj.image}
                    alt={proj.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: proj.bg,
                      color: proj.color || '#000000',
                      border: '1px solid #000000',
                      padding: '0.3rem 0.7rem',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.75rem',
                    }}
                  >
                    PROJECT {proj.id}
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: 'clamp(1.25rem, 3vw, 2rem)' }}>
                  <h3
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
                      lineHeight: 0.95,
                      color: '#000000',
                      marginBottom: '0.6rem',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                    }}
                  >
                    {proj.title}
                  </h3>

                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: '#666666',
                      marginBottom: '1.2rem',
                    }}
                  >
                    {proj.subtitle}
                  </div>

                  <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={2}
                    blurStrength={4}
                    style={{ marginBottom: '1.8rem' }}
                    textStyle={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.98rem',
                      lineHeight: 1.6,
                      color: '#333333',
                    }}
                  >
                    {proj.description}
                  </ScrollReveal>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.8rem' }}>
                    {proj.stack.map((s) => (
                      <span
                        key={s}
                        style={{
                          border: '1px solid #000000',
                          backgroundColor: '#f4f4f0',
                          padding: '0.25rem 0.6rem',
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 600,
                          fontSize: '0.75rem',
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button Link */}
              <div style={{ padding: '0 clamp(1.25rem, 3vw, 2rem) clamp(1.25rem, 3vw, 2rem) clamp(1.25rem, 3vw, 2rem)' }}>
                {proj.link ? (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-sticker"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    View Live Project →
                  </a>
                ) : (
                  <span
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      border: '1px solid #000000',
                      padding: '0.6rem',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      backgroundColor: '#e6e6e2',
                      color: '#666666',
                    }}
                  >
                    Internal Hardware / Complete
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
