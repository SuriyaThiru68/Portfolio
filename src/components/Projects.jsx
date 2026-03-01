import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, Tag } from 'lucide-react';
import { ProjectsBg } from './SectionBackgrounds';

// Importing assets
import popcorniq from './assests/popcorniq.jpg';
import codeNotify from './assests/code notify.jpg';
import gamestore from './assests/gamestore.png';
import iot from './assests/iot.jpg';

const projects = [
  {
    id: '001',
    name: 'Cinematic Movie Explorer',
    description: 'Full-stack movie discovery platform with cinematic UI and real-time data.',
    fullDescription:
      'A comprehensive movie discovery platform featuring a stunning cinematic interface, real-time data from TMDB API, advanced search and filtering capabilities, personalised watchlists, and responsive design optimised for all devices. Built with React, Node.js, and modern web technologies.',
    image: popcorniq,
    link: 'https://popcorniq-moviewebsite.vercel.app/',
    tags: ['React', 'Node.js', 'TMDB API', 'Responsive'],
    date: 'Jan 2024',
    size: 'large',
    features: ['Real-time movie data integration', 'Advanced search and filtering', 'User watchlist management', 'Responsive cinematic design', 'Performance optimised'],
  },
  {
    id: '003',
    name: 'Code Notify',
    description: 'Real-time notification system for reliable event updates.',
    fullDescription:
      'An intelligent notification system that tracks coding contests and events across multiple platforms. Features real-time alerts, email notifications, contest calendar, and platform integration with LeetCode, Codeforces, and HackerRank.',
    image: codeNotify,
    link: 'https://code-events-track-coding-contests.vercel.app/',
    tags: ['Node.js', 'Real-time', 'Email API', 'Automation'],
    date: 'Dec 2023',
    size: 'tall',
    features: ['Multi-platform contest tracking', 'Real-time email notifications', 'Calendar integration', 'Automated contest reminders', 'User preference management'],
  },
  {
    id: '002',
    name: 'AI Onboarding Agent',
    description: 'A full-stack AI-powered onboarding platform for vendors and distributors.',
    fullDescription:
      'Revolutionary AI-powered onboarding system that streamlines vendor and distributor registration. Features intelligent form filling, document verification, automated KYC processing, real-time chat support, and comprehensive analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426',
    link: 'https://ai-onboarding-agent.vercel.app/',
    tags: ['React', 'Python', 'AI', 'FastAPI'],
    date: 'Feb 2024',
    size: 'medium',
    features: ['AI-powered chat assistant', 'Automated document processing', 'Smart form completion', 'Real-time verification', 'Analytics dashboard'],
  },
  {
    id: '004',
    name: 'Game Store',
    description: 'Digital storefront for Xbox games and gaming community.',
    fullDescription:
      'A modern e-commerce platform for digital games featuring a sleek UI, game catalog with detailed information, user reviews and ratings, shopping cart functionality, and Xbox Game Pass integration.',
    image: gamestore,
    link: 'https://suriyathiru68.github.io/Game-Store/',
    tags: ['React', 'E-commerce', 'Gaming', 'UI/UX'],
    date: 'Nov 2023',
    size: 'wide',
    features: ['Interactive game catalog', 'Advanced filtering system', 'Shopping cart & checkout', 'User reviews & ratings', 'Xbox Game Pass integration'],
  },
  {
    id: '005',
    name: 'Public Toilet Feedback System',
    description: 'IoT-based hygiene alert system with Telegram integration.',
    fullDescription:
      'An innovative IoT solution for public restroom maintenance featuring real-time hygiene monitoring, automated Telegram alerts, sensor-based data collection, maintenance tracking dashboard, and analytics for facility management.',
    image: iot,
    link: '',
    tags: ['IoT', 'Python', 'Telegram Bot', 'Sensors'],
    date: 'Oct 2023',
    size: 'medium',
    features: ['Real-time sensor monitoring', 'Automated Telegram notifications', 'Hygiene score tracking', 'Maintenance scheduling', 'Analytics dashboard'],
  },
];

/* ─── Bento Tile ─── */
const ProjectTile = ({ project, className, index, onClick }) => (
  <motion.div
    onClick={onClick}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.9, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
    className={`group relative overflow-hidden cursor-pointer ${className}`}
    style={{
      backgroundColor: 'var(--ink)',
      border: '2px solid rgba(245,240,232,0.08)',
    }}
  >
    {/* Photo layer */}
    <motion.div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover"
        style={{
          filter: 'sepia(20%) contrast(1.08) brightness(0.55)',
          transition: 'filter 1s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.filter = 'sepia(10%) contrast(1.08) brightness(0.72)')}
        onMouseLeave={(e) => (e.currentTarget.style.filter = 'sepia(20%) contrast(1.08) brightness(0.55)')}
      />
      {/* Gradient — cream-toned instead of pure black */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.4) 50%, transparent 100%)',
        }}
      />
    </motion.div>

    {/* Text overlay */}
    <div
      className="absolute inset-0 z-10 flex flex-col justify-end"
      style={{ padding: '1.5rem 2rem' }}
    >
      <h3
        style={{
          fontFamily: "'Caveat', cursive",
          fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
          fontWeight: 700,
          color: 'var(--cream)',
          lineHeight: 1.1,
          letterSpacing: '-0.01em',
        }}
      >
        {project.name}
      </h3>

      {/* Tags + hint — revealed on hover */}
      <div
        style={{
          maxHeight: 0,
          overflow: 'hidden',
          transition: 'max-height 0.5s ease',
        }}
        className="group-hover:max-h-[80px]"
      >
        <p
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: '0.9rem',
            color: 'rgba(245,240,232,0.55)',
            letterSpacing: '0.1em',
            marginTop: '0.5rem',
            textTransform: 'uppercase',
          }}
        >
          {project.tags.slice(0, 2).join(' · ')}
        </p>
        <p
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: '1rem',
            color: 'rgba(245,240,232,0.75)',
            marginTop: '0.25rem',
          }}
        >
          Click to view details →
        </p>
      </div>
    </div>
  </motion.div>
);

/* ─── Modal ─── */
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(26,26,26,0.88)',
          backdropFilter: 'blur(6px)',
          padding: '1.5rem',
        }}
        onClick={onClose}
      >
        <motion.div
          key="card"
          initial={{ scale: 0.9, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 26 }}
          style={{
            backgroundColor: 'var(--cream)',
            border: '2.5px solid var(--ink)',
            borderRadius: '4px',
            boxShadow: '8px 8px 0 var(--ink)',
            maxWidth: '860px',
            width: '100%',
            maxHeight: '88vh',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            fontFamily: "'Caveat', cursive",
          }}
          className="modal-grid"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Left — image */}
          <div style={{ position: 'relative', minHeight: '300px' }}>
            <img
              src={project.image}
              alt={project.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(12%) contrast(1.05)' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent 50%, rgba(245,240,232,0.55))',
              }}
            />
          </div>

          {/* Right — detail */}
          <div style={{ padding: '2.5rem', overflowY: 'auto', position: 'relative' }}>
            {/* Close */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: '1.5px solid var(--ink)',
                borderRadius: '2px',
                padding: '4px 6px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <X size={18} color="var(--ink)" />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '1rem', color: 'var(--ink-light)', marginBottom: '0.75rem' }}>
              <Calendar size={14} />
              <span style={{ fontFamily: "'Caveat', cursive" }}>{project.date}</span>
            </div>

            <h2 style={{ fontFamily: "'Caveat', cursive", fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: 'var(--ink)', marginBottom: '1rem' }}>
              {project.name}
            </h2>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--blue-accent)',
                    backgroundColor: 'rgba(43,63,255,0.08)',
                    border: '1px solid rgba(43,63,255,0.22)',
                    borderRadius: '2px',
                    padding: '1px 8px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>

            <p style={{ fontFamily: "'Caveat', cursive", fontSize: '1.15rem', color: 'var(--ink-light)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              {project.fullDescription}
            </p>

            <h3 style={{ fontFamily: "'Caveat', cursive", fontSize: '1.3rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.75rem' }}>
              Key Features
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
              {project.features.map((f, i) => (
                <li key={i} style={{ fontFamily: "'Caveat', cursive", fontSize: '1.1rem', color: 'var(--ink-light)', padding: '0.2rem 0', display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--blue-accent)', fontWeight: 700 }}>→</span>
                  {f}
                </li>
              ))}
            </ul>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'var(--ink)',
                  color: 'var(--cream)',
                  border: '2px solid var(--ink)',
                  borderRadius: '2px',
                  fontFamily: "'Caveat', cursive",
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'background-color 0.2s, color 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--cream)'; e.currentTarget.style.color = 'var(--ink)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--ink)'; e.currentTarget.style.color = 'var(--cream)'; }}
              >
                <ExternalLink size={18} />
                View Live Project
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ─── Main ─── */
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      style={{
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        backgroundColor: 'transparent',
        borderTop: '1.5px solid rgba(26,26,26,0.1)',
        overflow: 'hidden',
        fontFamily: "'Caveat', cursive",
        position: 'relative',
      }}
    >
      <ProjectsBg />
      <div style={{ maxWidth: '1800px', margin: '0 auto', padding: '0 1rem' }}>

        {/* Section label */}
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
            marginBottom: '0.5rem',
            paddingLeft: '1rem',
          }}
        >
          ✦ My Work
        </motion.p>

        {/* Giant heading — original bento style */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            fontWeight: 700,
            color: 'var(--ink)',
            letterSpacing: '-0.02em',
            marginBottom: '2rem',
            paddingLeft: '1rem',
            lineHeight: 1,
          }}
        >
          PROJECTS
          <span style={{ color: 'rgba(26,26,26,0.2)' }}>.</span>
        </motion.h2>

        {/* ── Bento Grid — same layout as original ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 project-tiles-grid">

          {/* [0] large — col-span-4 */}
          <ProjectTile
            project={projects[0]}
            className="md:col-span-4 h-[400px] md:h-[500px]"
            index={0}
            onClick={() => setSelectedProject(projects[0])}
          />

          {/* [1] tall — col-span-4 */}
          <ProjectTile
            project={projects[1]}
            className="md:col-span-4 h-[400px] md:h-[500px]"
            index={1}
            onClick={() => setSelectedProject(projects[1])}
          />

          {/* Text blurb — col-span-4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4 flex flex-col justify-center"
            style={{
              padding: '2rem 2.5rem',
              backgroundColor: 'var(--cream)',
              border: '2px solid rgba(26,26,26,0.12)',
              borderRadius: '4px',
            }}
          >
            {/* Hand-drawn star */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ marginBottom: '1rem' }}>
              <path d="M16 2 L18 13 L29 16 L18 19 L16 30 L14 19 L3 16 L14 13 Z"
                stroke="var(--ink)" strokeWidth="1.8" fill="none" />
            </svg>
            <p
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: '1.3rem',
                color: 'var(--ink-light)',
                lineHeight: 1.65,
              }}
            >
              Building digital experiences that blend{' '}
              <span style={{ color: 'var(--ink)', fontWeight: 700 }}>performance</span>
              {' '}with{' '}
              <span style={{ color: 'var(--blue-accent)', fontWeight: 700 }}>creative vision</span>.
            </p>
            <p style={{ marginTop: '0.75rem', fontFamily: "'Caveat', cursive", fontSize: '1.05rem', color: 'rgba(26,26,26,0.45)' }}>
              Full-stack · AI · IoT · Design
            </p>
          </motion.div>

          {/* [3] wide — col-span-8 */}
          <ProjectTile
            project={projects[3]}
            className="md:col-span-8 h-[350px] md:h-[500px]"
            index={3}
            onClick={() => setSelectedProject(projects[3])}
          />

          {/* [2] tall — col-span-4, row-span-2 */}
          <ProjectTile
            project={projects[2]}
            className="md:col-span-4 h-[450px] md:h-[1020px] md:row-span-2"
            index={2}
            onClick={() => setSelectedProject(projects[2])}
          />

          {/* [4] wide — col-span-8 */}
          <ProjectTile
            project={projects[4]}
            className="md:col-span-8 h-[350px] md:h-[500px]"
            index={4}
            onClick={() => setSelectedProject(projects[4])}
          />
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;
