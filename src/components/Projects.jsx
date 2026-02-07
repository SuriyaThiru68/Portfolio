import React from 'react';
import { motion } from 'framer-motion';

// Importing assets - keeping your original paths
import popcorniq from './assests/popcorniq.jpg';
import codeNotify from './assests/code notify.jpg';
import gamestore from './assests/gamestore.png';
import iot from './assests/iot.jpg'
import onboardingAgent from './assests/onboarding.png';

const projects = [
  {
    id: '001',
    name: 'Cinematic Movie Explorer',
    description: 'Full-stack movie discovery platform with cinematic UI and real-time data.',
    image: popcorniq,
    link: 'https://popcorniq-pearl.vercel.app/',
    tags: ['Frontend', 'React'],
    size: 'large'
  },
  {
    id: '003',
    name: 'Code Notify',
    description: 'Real-time notification system for reliable event updates.',
    image: codeNotify,
    link: 'https://code-events-track-coding-contests.vercel.app/',
    tags: ['Node.js', 'Real-time'],
    size: 'tall'
  },
  {
    id: '002',
    name: 'AI Onboarding Agent',
    description: 'A full-stack AI-powered onboarding platform for vendors and distributors.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426',
    link: 'https://ai-onboarding-agent.vercel.app/',
    tags: ['Full Stack', 'AI'],
    size: 'medium'
  },
  {
    id: '004',
    name: 'Game Store',
    description: 'Digital storefront for Xbox games and gaming community.',
    image: gamestore,
    link: 'https://suriyathiru68.github.io/Game-Store/',
    tags: ['Frontend', 'React'],
    size: 'wide'
  },
  {
    id: '005',
    name: 'Public Toilet Feedback System',
    description: 'IoT-based hygiene alert system with Telegram integration.',
    image: iot,
    link: '',
    tags: ['IoT', 'Automation'],
    size: 'medium'
  }
];

const Projects = () => {
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

        {/* Main Grid with improved layout to prevent overlaps */}
        {/* Main Grid with improved layout to prevent overlaps */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Row 1: Cinematic (0) | Game Store (1) | Text */}
          <ProjectTile
            project={projects[0]}
            className="md:col-span-4 h-[400px] md:h-[500px]"
            index={0}
          />

          <ProjectTile
            project={projects[1]}
            className="md:col-span-4 h-[400px] md:h-[500px]"
            index={1}
          />

          <div className="md:col-span-4 p-6 md:p-8 flex flex-col justify-center bg-zinc-900/50 rounded-lg border border-white/5">
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

          {/* Row 2: AI Onboarding (3) - Wide | Code Notify (2) - Tall Side */}
          <ProjectTile
            project={projects[3]}
            className="md:col-span-8 h-[350px] md:h-[500px]"
            index={3}
          />

          <ProjectTile
            project={projects[2]}
            className="md:col-span-4 h-[450px] md:h-[1020px] md:row-span-2"
            index={2}
          />

          {/* Row 3: Public Toilet (4) - Wide */}
          <ProjectTile
            project={projects[4]}
            className="md:col-span-8 h-[350px] md:h-[500px]"
            index={4}
          />
        </div>
      </div>
    </section>
  );
};

const ProjectTile = ({ project, className, index }) => (
  <motion.a
    href={project.link || '#'}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`group relative overflow-hidden bg-[#0d0d0d] ${className}`}
  >
    <div className="absolute inset-0 z-10 p-6 md:p-8 flex flex-col justify-end pointer-events-none">
      <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-[0.9] drop-shadow-2xl">
        {project.name}
      </h3>

      {/* Detail info only on hover */}
      <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-700">
        <p className="text-[10px] md:text-xs text-zinc-400 font-mono mt-4 opacity-0 group-hover:opacity-100 uppercase tracking-widest">
          {project.tags.join(' // ')}
        </p>
      </div>
    </div>

    <motion.div
      className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover filter brightness-[0.6] group-hover:brightness-[0.8] transition-all duration-1000"
      />
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
    </motion.div>
  </motion.a>
);

export default Projects;
