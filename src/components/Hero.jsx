import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleHover = (isHover) => {
    window.dispatchEvent(new CustomEvent('cursor-hover', { detail: isHover }));
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-start relative overflow-hidden px-4 sm:px-6 lg:px-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-black" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-lime-500/10 rounded-full blur-[120px] will-change-transform" />
      </div>
      
      <div className="z-10 max-w-7xl w-full">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 leading-tight">
          <span className="block animate-fadeInUp text-white">Designerrr &</span>
          <span className="block animate-fadeInUp delay-100 text-white">Developer</span>
          <span className="block animate-fadeInUp delay-200 text-white relative">
            Suriya
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10C50 5, 100 15, 150 8C200 1, 250 12, 300 7C350 2, 380 10, 398 8" stroke="#84cc16" strokeWidth="3" fill="none" strokeLinecap="round"/>
            </svg>
          </span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 font-light max-w-2xl">
          Crafting high-quality Outcomes With Vision<br />
          Designer. Developer. Dreamer.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="group px-8 py-4 bg-lime-500 rounded-full text-base font-semibold hover:bg-lime-600 transition-all hover:scale-105 text-gray-900 flex items-center gap-2"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            Reach Out
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
