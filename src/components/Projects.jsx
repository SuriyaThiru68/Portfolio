import React from 'react';
import { motion } from 'framer-motion';

// Importing assets - keeping your original paths
import popcorniq from './assests/portfolio.png';
import codeNotify from './assests/code notify.jpg';
import gamestore from './assests/game store.jpg';
import iot from './assests/iot.png'
import onboardingAgent from './assests/onboarding.png';

const projects = [
  {
    id: '001',
    name: 'POPCORNIQ',
    description: 'Full-stack movie discovery platform with cinematic UI and real-time data.',
    image: popcorniq,
    link: 'https://popcorniq-pearl.vercel.app/',
    tags: ['Frontend', 'React'],
    size: 'large'
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
    id: '003',
    name: 'Code Notify',
    description: 'Real-time notification system for reliable event updates.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2340',
    link: '#',
    tags: ['Node.js', 'Real-time'],
    size: 'tall'
  },
  {
    id: '004',
    name: 'Public Toilet System',
    description: 'IoT-based hygiene alert system with Telegram integration.',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=2340',
    link: '',
    tags: ['IoT', 'Automation'],
    size: 'medium'
  },
  {
    id: '005',
    name: 'Game Store',
    description: 'Digital storefront for Xbox games and gaming community.',
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=2342',
    link: 'https://suriyathiru68.github.io/Game-Store/',
    tags: ['Frontend', 'React'],
    size: 'wide'
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-2">

          {/* Row 1: POPCORNIQ | AI Onboarding Agent | Philosophy Text */}
          <ProjectTile
            project={projects[0]}
            className="md:col-span-4 h-[400px] md:h-[550px]"
            index={0}
          />

          <ProjectTile
            project={projects[1]}
            className="md:col-span-4 h-[400px] md:h-[550px]"
            index={1}
          />

          <div className="md:col-span-4 p-8 md:p-12 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-zinc-400 text-sm md:text-base leading-relaxed font-light font-sans tracking-wide"
            >
              Each project is a conversation: a continuous exchange between idea and form, brand and audience, vision and detail. It is a process in which concepts evolve, shapes respond, and meaning emerges through clarity and refinement. Every element plays a role in this dialogue, contributing to a final result that is both intentional and expressive.
            </motion.p>
          </div>

          {/* Row 2: Public Toilet System (Wide) | Code Notify (Tall) */}
          <ProjectTile
            project={projects[3]}
            className="md:col-span-8 h-[350px] md:h-[500px]"
            index={3}
          />

          <ProjectTile
            project={projects[2]}
            className="md:col-span-4 h-[450px] md:h-[800px] md:row-span-2"
            index={2}
          />

          {/* Row 3: Game Store (Wide) */}
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
