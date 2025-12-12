import React from 'react';
import popcorniq from './assests/popcorniq.jpg';
import codeNotify from './assests/code notify.jpg';
import gamestore from './assests/game store.jpg';
import iot from './assests/iot.png'


const projects = [
  {
    name: 'Public Toilet Feedback System (IoT)',
    description: 'Designed an IoT-based feedback system that sends real-time hygiene alerts to staff via Telegram.',
    image: iot,
    link: '',
    tags: ['IoT', 'Automation', 'Telegram']
  },

  {
    name: 'Movie Website',
    description: 'This is Movie Website Called POPCORNIQ its Full-stack movie discovery platform',
    image: popcorniq,
    link: 'https://popcorniq-pearl.vercel.app/',
    tags: ['React', 'API', 'Frontend']
  },
  {
    name: 'Code Notify',
    description: 'A real-time notification system built for fast and reliable event updates.',
    image: codeNotify,
    link: '#',
    tags: ['Node.js', 'Real-time']
  },

  {
    name: 'Game Store',
    description: 'A game store is a place where you can buy Xbox games',
    image: gamestore,
    link: 'https://suriyathiru68.github.io/Game-Store/',
    tags: ['Node.js', 'Real-time']
  }
];

const Projects = () => {
  const handleHover = (isHover) => window.dispatchEvent(new CustomEvent('cursor-hover', { detail: isHover }));

  return (
    <section id="projects" className="py-40 px-4 sm:px-6 lg:px-16 bg-primary text-white">
      <h2 className="text-6xl lg:text-8xl font-extrabold mb-16">Featured Work</h2>
      <div className="space-y-0">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 border-t border-primary-hover hover:bg-primary-hover transition-all duration-500 px-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-secondary text-primary rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-4xl lg:text-6xl font-bold group-hover:text-secondary transition-colors">
                  {project.name}
                </h3>
                <p className="text-xl lg:text-2xl text-white font-light">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-secondary font-semibold text-lg">
                  <span>View Project</span>
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] max-w-md w-full mx-auto">
                {project.video ? (
                  <video src={project.video} autoPlay loop muted playsInline className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                ) : project.image ? (
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full bg-primary-hover group-hover:scale-110 transition-transform duration-700" />
                )}
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-all duration-500" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
