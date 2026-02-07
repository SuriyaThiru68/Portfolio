import React from 'react';
import { motion } from 'framer-motion';
import portfolioImg from './assests/portfolio.png'; // Corrected path

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      {/* HERO CONTENT */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-40 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight">
            Crafting<br />
            high-quality<br />
            Outcomes<br />
            With <span className="text-indigo-500">Vision</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            <span className="text-white text-2xl font-semibold"> I’m Suriya</span>, a Computer
            Science student passionate about building clean, responsive, and
            user-focused web experiences.
          </p>

          {/* CTA */}
          <div className="mt-8 flex items-center gap-6">
            <a
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium transition"
            >
              Reach Out →
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          {/* Glow */}
          <div className="absolute inset-0 bg-red-500/10 blur-3xl"></div>

          <motion.img
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src={portfolioImg}
            alt="portfolio image"
            className="relative z-10 max-w-md w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;