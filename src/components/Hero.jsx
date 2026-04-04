import React from 'react';
import { motion } from 'framer-motion';
import hrImage from './assests/home page.png';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[100dvh] bg-[#0f0f0f] overflow-hidden flex font-sans select-none border-b-[1.5px] border-white/5">

      <div className="absolute inset-0 z-0 flex justify-end">
        <img
          src={hrImage}
          alt="Suriya"
          className="w-full h-full object-cover object-top md:object-right opacity-60 grayscale brightness-90 contrast-125 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent hidden md:block"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/50 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#0f0f0f]/90 to-transparent pointer-events-none z-10"></div>
      </div>

      <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-end pb-16 md:pb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <h1 className="text-white font-bold text-[clamp(2.5rem,12vw,10rem)] md:text-[clamp(3.5rem,10vw,10rem)] leading-[0.9] m-0 max-w-[1100px]">
              Suriya<br />
              Thiruppathy
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="max-w-[450px] md:max-w-[340px] flex flex-col items-start"
          >
            <p className="text-[#a0a0a0] text-lg md:text-2xl font-medium leading-relaxed mb-6 md:mb-8">
              Computer Science student passionate about building clean, responsive, and user-focused web experiences. Crafting high-quality outcomes with vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
              <a href="#projects" className="text-white text-lg md:text-xl border-b border-white/50 pb-1 hover:text-gray-400 transition-colors w-fit">See my work</a>
              <a href="#contact" className="text-white text-lg md:text-xl border-b border-white/50 pb-1 hover:text-gray-400 transition-colors w-fit">Contact</a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

