import React from 'react';
import { ArrowRight, Code, Palette, Lightbulb, Rocket } from 'lucide-react';

const expertiseItems = [
  {
    icon: <Code className="w-12 h-12" />,
    title: 'Web Development',
    description: 'Building responsive, performant web applications with modern technologies and best practices.'
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: 'Designer',
    description: 'Creating intuitive, beautiful interfaces that users love with attention to every detail.'
  } 
];

const Expertise = () => {
  const handleHover = (isHover) => window.dispatchEvent(new CustomEvent('cursor-hover', { detail: isHover }));

  return (
    <section id="expertise" className="py-32 px-4 sm:px-6 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 lg:p-12 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-500 overflow-hidden"
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="text-indigo-500 mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
