import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, Tag } from 'lucide-react';

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
    fullDescription: 'A comprehensive movie discovery platform featuring a stunning cinematic interface, real-time data from TMDB API, advanced search and filtering capabilities, personalized watchlists, and responsive design optimized for all devices. Built with React, Node.js, and modern web technologies.',
    image: popcorniq,
    link: 'https://popcorniq-moviewebsite.vercel.app/',
    tags: ['React', 'Node.js', 'TMDB API', 'Responsive'],
    date: 'Jan 2024',
    size: 'large',
    features: [
      'Real-time movie data integration',
      'Advanced search and filtering',
      'User watchlist management',
      'Responsive cinematic design',
      'Performance optimized'
    ]
  },
  {
    id: '003',
    name: 'Code Notify',
    description: 'Real-time notification system for reliable event updates.',
    fullDescription: 'An intelligent notification system that tracks coding contests and events across multiple platforms. Features real-time alerts, email notifications, contest calendar, and platform integration with LeetCode, Codeforces, and HackerRank.',
    image: codeNotify,
    link: 'https://code-events-track-coding-contests.vercel.app/',
    tags: ['Node.js', 'Real-time', 'Email API', 'Automation'],
    date: 'Dec 2023',
    size: 'tall',
    features: [
      'Multi-platform contest tracking',
      'Real-time email notifications',
      'Calendar integration',
      'Automated contest reminders',
      'User preference management'
    ]
  },
  {
    id: '002',
    name: 'AI Onboarding Agent',
    description: 'A full-stack AI-powered onboarding platform for vendors and distributors.',
    fullDescription: 'Revolutionary AI-powered onboarding system that streamlines vendor and distributor registration. Features intelligent form filling, document verification, automated KYC processing, real-time chat support, and comprehensive analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426',
    link: 'https://ai-onboarding-agent.vercel.app/',
    tags: ['React', 'Python', 'AI', 'FastAPI'],
    date: 'Feb 2024',
    size: 'medium',
    features: [
      'AI-powered chat assistant',
      'Automated document processing',
      'Smart form completion',
      'Real-time verification',
      'Analytics dashboard'
    ]
  },
  {
    id: '004',
    name: 'Game Store',
    description: 'Digital storefront for Xbox games and gaming community.',
    fullDescription: 'A modern e-commerce platform for digital games featuring a sleek UI, game catalog with detailed information, user reviews and ratings, shopping cart functionality, and Xbox Game Pass integration.',
    image: gamestore,
    link: 'https://suriyathiru68.github.io/Game-Store/',
    tags: ['React', 'E-commerce', 'Gaming', 'UI/UX'],
    date: 'Nov 2023',
    size: 'wide',
    features: [
      'Interactive game catalog',
      'Advanced filtering system',
      'Shopping cart & checkout',
      'User reviews & ratings',
      'Xbox Game Pass integration'
    ]
  },
  {
    id: '005',
    name: 'Public Toilet Feedback System',
    description: 'IoT-based hygiene alert system with Telegram integration.',
    fullDescription: 'An innovative IoT solution for public restroom maintenance featuring real-time hygiene monitoring, automated Telegram alerts, sensor-based data collection, maintenance tracking dashboard, and analytics for facility management.',
    image: iot,
    link: '',
    tags: ['IoT', 'Python', 'Telegram Bot', 'Sensors'],
    date: 'Oct 2023',
    size: 'medium',
    features: [
      'Real-time sensor monitoring',
      'Automated Telegram notifications',
      'Hygiene score tracking',
      'Maintenance scheduling',
      'Analytics dashboard'
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="pt-20 md:pt-32 pb-10 bg-black text-white px-2 md:px-4 overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-9xl font-bold tracking-tighter mb-16 px-4"
        >
          PROJECTS<span className="text-zinc-800">.</span>
        </motion.h2>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <ProjectTile
            project={projects[0]}
            className="md:col-span-4 h-[400px] md:h-[500px]"
            index={0}
            onClick={() => setSelectedProject(projects[0])}
          />

          <ProjectTile
            project={projects[1]}
            className="md:col-span-4 h-[400px] md:h-[500px]"
            index={1}
            onClick={() => setSelectedProject(projects[1])}
          />

          <div className="md:col-span-4 p-6 md:p-8 flex flex-col justify-center bg-white/5 backdrop-blur-xl rounded-lg border border-white/10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gray-300 text-lg leading-relaxed font-light"
            >
              Building digital experiences that blend <span className="text-white font-medium">performance</span> with <span className="text-white font-medium">cinematic aesthetics</span>.
            </motion.p>
            <p className="mt-4 text-sm text-gray-500">
              Explore my latest work across full-stack development, AI, and IoT solutions.
            </p>
          </div>

          <ProjectTile
            project={projects[3]}
            className="md:col-span-8 h-[350px] md:h-[500px]"
            index={3}
            onClick={() => setSelectedProject(projects[3])}
          />

          <ProjectTile
            project={projects[2]}
            className="md:col-span-4 h-[450px] md:h-[1020px] md:row-span-2"
            index={2}
            onClick={() => setSelectedProject(projects[2])}
          />

          <ProjectTile
            project={projects[4]}
            className="md:col-span-8 h-[350px] md:h-[500px]"
            index={4}
            onClick={() => setSelectedProject(projects[4])}
          />
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

const ProjectTile = ({ project, className, index, onClick }) => (
  <motion.div
    onClick={onClick}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
    className={`group relative overflow-hidden bg-zinc-950 cursor-pointer border border-white/10 ${className}`}
  >
    <div className="absolute inset-0 z-10 p-6 md:p-8 flex flex-col justify-end pointer-events-none">
      <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-[0.9] drop-shadow-2xl">
        {project.name}
      </h3>

      <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-700">
        <p className="text-[10px] md:text-xs text-gray-400 font-mono mt-4 opacity-0 group-hover:opacity-100 uppercase tracking-widest">
          {project.tags.slice(0, 2).join(' • ')}
        </p>
        <p className="text-sm text-white/80 mt-2 opacity-0 group-hover:opacity-100">
          Click to view details →
        </p>
      </div>
    </div>

    <motion.div
      className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover filter brightness-[0.5] group-hover:brightness-[0.7] transition-all duration-1000 grayscale-[30%] group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
    </motion.div>
  </motion.div>
);

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative w-full max-w-6xl bg-zinc-950 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all backdrop-blur-xl border border-white/10"
          >
            <X className="text-white" size={24} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] max-h-[85vh]">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative h-[300px] lg:h-auto"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent lg:bg-gradient-to-r" />
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="p-8 lg:p-12 overflow-y-auto"
            >
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                <Calendar size={16} />
                <span>{project.date}</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">
                {project.name}
              </h2>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm font-medium border border-white/10"
                  >
                    <Tag size={14} />
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {project.fullDescription}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-white">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <span className="text-white mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-lg font-medium transition-all shadow-lg hover:shadow-white/20"
                  >
                    <ExternalLink size={20} />
                    View Live Project
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Projects;
