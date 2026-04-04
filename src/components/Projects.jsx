import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import popcorniq from './assests/popcorniq.jpg';
import codeNotify from './assests/code notify.jpg';
import gamestore from './assests/gamestore.png';
import onboardingagent from './assests/onboardingagent.png'
import iot from './assests/iot.jpg';
import avatarbooking from './assests/avatarbooking.png'

const projects = [
  {
    id: '01',
    title: 'CINEMATIC MOVIE EXPLORER',
    subtitle: 'Personal Project / Full Stack',
    description: 'A comprehensive movie discovery platform featuring a stunning cinematic interface, real-time data from TMDB API, advanced search and filtering, and personalized watchlists.',
    image: popcorniq,
    link: 'https://popcorniq-moviewebsite.vercel.app/',
  },
  {
    id: '02',
    title: 'CODE NOTIFY',
    subtitle: 'Automation Tool / Backend',
    description: 'An intelligent notification system that tracks coding contests across multiple platforms with real-time email alerts, calendar integration, and automated reminders.',
    image: codeNotify,
    link: 'https://code-events-track-coding-contests.vercel.app/',
  },
  {
    id: '03',
    title: 'AI ONBOARDING AGENT',
    subtitle: 'AI & Full Stack',
    description: 'Revolutionary AI-powered onboarding system that streamlines vendor registration. Features intelligent form filling, document verification, and automated KYC processing.',
    image: onboardingagent,
    link: 'https://ai-onboarding-agent.vercel.app/',
  },
  {
    id: '04',
    title: 'AI AVATAR BOOKING SYSTEM',
    subtitle: 'AI & Full Stack',
    description: 'Developed a smart web-based platform that allows users to book AI-powered avatars for various use cases such as customer support, content creation, virtual assistance, and interactive experiences.',
    image: avatarbooking,
    link: 'https://avatar-bookings.vercel.app/',
  },
  {
    id: '05',
    title: 'GAME STORE',
    subtitle: 'E-commerce Platform',
    description: 'A modern digital storefront for Xbox games featuring a sleek UI, interactive game catalog, shopping cart functionality, and detailed user reviews.',
    image: gamestore,
    link: 'https://suriyathiru68.github.io/Game-Store/',
  },
  {
    id: '06',
    title: 'PUBLIC TOILET SYSTEM',
    subtitle: 'IoT Solution',
    description: 'An innovative IoT solution for public restroom maintenance featuring real-time hygiene monitoring, automated Telegram alerts, and an analytics dashboard.',
    image: iot,
    link: '',
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleViewportEnter = (index) => {
    if (index > activeIndex) {
      setDirection(1);
    } else if (index < activeIndex) {
      setDirection(-1);
    }
    setActiveIndex(index);
  };

  const variants = {
    enter: (dir) => ({ y: dir > 0 ? "100%" : "-100%", opacity: 1 }),
    center: { y: "0%", opacity: 1, scale: 1 },
    exit: (dir) => ({ y: dir > 0 ? "-30%" : "30%", opacity: 0.5, scale: 0.95 })
  };

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-[#0B0B0C] text-[#FFFFFF] font-sans">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 w-full relative z-10">

        <div className="flex justify-between items-end border-b border-[#1A1A1D] pb-8 md:pb-12 mb-12 md:mb-24">
          <h2 className="text-xl md:text-3xl font-normal tracking-wide text-[#FFFFFF] uppercase">
            PROJECTS
          </h2>
          <span className="text-[10px] md:text-sm tracking-[0.2em] font-light text-[#A1A1AA]">
            /suriya-projects
          </span>
        </div>

        <div className="flex flex-col lg:flex-row relative items-start gap-12 lg:gap-24">

          <div className="w-full lg:w-[60%] lg:sticky lg:top-32 h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden bg-[#111] z-10 relative mt-4">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 z-10 bg-[#111]"
              >
                <img
                  src={projects[activeIndex].image}
                  alt={projects[activeIndex].title}
                  className="w-full h-full object-cover filter brightness-[0.85]"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="w-full lg:w-[40%] flex flex-col pb-[30vh]">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                onViewportEnter={() => handleViewportEnter(index)}
                viewport={{ margin: "-50% 0px -50% 0px" }}
                className="min-h-[75vh] flex flex-col justify-center py-10"
              >
                <div className="text-[13px] md:text-sm font-light tracking-[0.2em] text-[#A1A1AA] mb-6">
                  [ {(index + 1).toString().padStart(2, '0')} / {projects.length.toString().padStart(2, '0')} ]
                </div>

                <h2 className="text-2xl md:text-5xl font-normal tracking-tight uppercase mb-3 text-[#FFFFFF] leading-[1.2] md:leading-[1.1]">
                  {project.title}
                </h2>

                <div className="text-[12px] md:text-[13px] tracking-widest text-[#EAEAEA] mb-6 md:mb-8 font-light uppercase opacity-80">
                  {project.subtitle}
                </div>

                <p className="text-[#A1A1AA] text-sm md:text-base lg:text-lg font-light leading-relaxed mb-8 md:mb-10 max-w-md">
                  {project.description}
                </p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[12px] md:text-xs tracking-[0.25em] uppercase text-[#EAEAEA] border-b border-[#A1A1AA]/50 pb-2 hover:text-white hover:border-white transition-colors w-max font-medium"
                  >
                    Visit Website
                  </a>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;


