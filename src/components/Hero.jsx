import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleHover = (isHover) => {
    window.dispatchEvent(new CustomEvent('cursor-hover', { detail: isHover }));
  };

  return (
    <section id="home" className="relative min-h-screen lg:flex overflow-hidden">
      {/* Mobile: stacked layout | Desktop: 65/35 split */}
      
      {/* Left Section */}
      <div className="w-full lg:w-[65%] bg-black flex flex-col justify-center px-6 py-24 lg:px-12 lg:py-20">
        <div>
          <h1 className="font-extrabold leading-none text-3xl sm:text-5xl lg:text-7xl">
            <span className="text-white block">Developer</span>
            <span className="text-white text-lg sm:text-xl lg:text-2xl font-semibold block my-3">AND</span>
            <span className="text-white block">Designer</span>
          </h1>

          <p className="mt-8 text-white text-sm sm:text-base lg:text-lg max-w-md">
            I like to craft solid and scalable frontend products with great user experiences.
          </p>

          <div className="mt-8">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
              className="inline-block bg-indigo-500 text-white font-semibold rounded-full px-6 py-3 shadow-md hover:scale-105 transition-transform"
            >
              Reach Out →
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[35%] bg-[#e6ff3f] flex flex-col justify-center items-center lg:items-end px-6 py-16 lg:py-20 lg:pr-12">
        <div className="text-center lg:text-right">
          <div className="text-black font-medium text-sm sm:text-base mb-3">Hi! Itzz</div>
          <h2 className="text-black font-black leading-tight text-5xl sm:text-6xl lg:text-8xl">
            <div>SU</div>
            <div>RI</div>
            <div>YA</div>
          </h2>
        </div>
      </div>

      {/* Center image - desktop only */}
      <img
        src="/src/components/assests/my photo.png"
        alt="Suriya"
        className="hidden lg:block absolute top-1/2 left-[65%] -translate-x-1/2 -translate-y-1/2 w-64 rounded-2xl shadow-2xl z-30 object-cover"
      />
    </section>
  );
};

export default Hero;
