import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import portfolioImg from './assests/portfolio.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white flex items-center overflow-hidden"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-[1.1]"
            >
              Crafting<br />
              high-quality<br />
              Outcomes<br />
              With <span className="text-indigo-500">Vision</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl"
            >
              I'm <span className="text-white font-semibold">Suriya</span>, a Computer Science student passionate about building
              clean, responsive, and user-focused web experiences.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Reach Out
                <ArrowRight size={20} />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black rounded-lg font-semibold transition-all hover:scale-105"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <img
                src={portfolioImg}
                alt="Suriya Thirumoorthy"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle gradient orbs in background */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;