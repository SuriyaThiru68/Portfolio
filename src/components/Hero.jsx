import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleHover = (isHover) => {
    window.dispatchEvent(new CustomEvent('cursor-hover', { detail: isHover }));
  };

  return (
    <section id="home" className="min-h-screen flex items-stretch justify-between relative overflow-hidden pt-20">
      {/* Left Side - Purple/Blue */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 flex items-center justify-center px-8 sm:px-12 lg:px-16 py-12">
        <div className="z-10 w-full max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Developer<br />
            <span className="text-lime-300">AND</span><br />
            Designer
          </h1>
          <p className="text-base sm:text-lg text-gray-100 mb-8 leading-relaxed">
            I like to craft solid and stable frontend products with great user experiences.
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-lime-300 rounded-full text-base font-bold hover:bg-lime-400 transition-all hover:scale-105 text-gray-900"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            Reach Out
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Right Side - Neon Yellow */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-lime-300 to-yellow-300 flex items-center justify-center px-8 sm:px-12 lg:px-16 py-12 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-16 h-16 bg-white/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-5 w-32 h-32 bg-gradient-to-t from-lime-400 to-transparent rounded-full blur-3xl"></div>
        
        <div className="z-10 flex flex-col items-center justify-center text-center">
          {/* Image Placeholder */}
          <div className="mb-8 w-48 h-48 sm:w-56 sm:h-56 bg-white/40 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 border-white/50">
            <span className="text-lg sm:text-xl font-semibold text-gray-700">image of me</span>
          </div>
          
          {/* Name Text */}
          <div className="relative">
            <p className="text-sm sm:text-base font-bold text-gray-900 tracking-widest">hii litzz</p>
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-gray-900 leading-none">
              SURIYA
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
