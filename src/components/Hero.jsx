import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-black flex items-center pt-20">
      <div className="w-full h-screen relative flex items-center">

        {/* Split Layout Container */}
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16 flex items-center gap-0">

          {/* Left Side - Black background with headline overlapping onto image */}
          <div className="w-full lg:w-[55%] relative z-20 pr-0 lg:pr-12">

            {/* Main Headline - Extends over the image */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
              Crafting high-quality<br />
              Outcomes With Vision
            </h1>

            <div className="space-y-2 mb-8">
              <p className="text-lg text-white">
                <span className="font-semibold">I'm Suriya</span>, A Computer Science student.
              </p>
              <p className="text-base text-gray-300">
                I design and develop clean, responsive websites.
              </p>
            </div>

            <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors">
              Reach Out
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="hidden lg:block w-[45%] relative h-[600px] -ml-24">
            <img
              src="/src/components/assests/portfolio.jpeg"
              alt="Suriya"
              className="w-full h-full object-cover grayscale"
            />

            {/* Text Overlay on Image */}
            <div className="absolute bottom-8 right-8">
              <p className="text-white text-sm font-light tracking-wide">
                Designer. Developer. Dreamer.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
