import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-40 px-4 sm:px-6 lg:px-16">
      <h2 className="text-6xl lg:text-8xl font-extrabold mb-16">Experience</h2>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden lg:block" />
          {/* Experience 1 */}
          <div className="relative flex flex-col lg:flex-row-reverse items-start lg:items-center gap-8">
            <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 bg-indigo-500 text-white px-6 py-2 rounded-full font-semibold whitespace-nowrap z-10">
              2025
            </div>
            <div className="w-full lg:w-1/2 p-10 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-indigo-500 transition-all">
              <h3 className="text-2xl font-bold mb-2">Full Stack Development</h3>
              <h4 className="text-lg text-indigo-500 mb-4 font-medium">LearnLogicify Technologies LLP</h4>
              <p className="text-gray-400 leading-relaxed">
                Building responsive web applications and interactive user interfaces.
              </p>
            </div>
            <div className="hidden lg:block w-1/2"></div>
          </div>

          {/* Experience 2 */}
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-8 mt-8">
            <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 bg-indigo-500 text-white px-6 py-2 rounded-full font-semibold whitespace-nowrap z-10">
              2024
            </div>
            <div className="w-full lg:w-1/2 p-10 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-indigo-500 transition-all lg:text-right">
              <h3 className="text-2xl font-bold mb-2">Web Development</h3>
              <h4 className="text-lg text-indigo-500 mb-4 font-medium">Ether Infotech</h4>
              <p className="text-gray-400 leading-relaxed">
                Built and improved responsive web interfaces for client-facing projects and internal tools.
              </p>
            </div>
            <div className="hidden lg:block w-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
