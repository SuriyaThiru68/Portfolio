import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'FRONTEND',
    skills: ['TypeScript', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'HTML & CSS']
  },
  {
    title: 'BACKEND',
    skills: ['Node.js', 'Python', 'Java', 'C', 'SQL', 'MongoDB', 'REST APIs', 'FastAPI']
  },
  {
    title: 'TOOLS',
    skills: ['Git & GitHub', 'VS Code', 'Figma', 'Vercel', 'Postman', 'Docker']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 bg-[#0B0B0C] text-[#FFFFFF] overflow-hidden font-sans">
      <div className="absolute top-1/4 -right-64 w-[800px] h-[800px] bg-[#00E5FF]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-64 w-[600px] h-[600px] bg-[#00E5FF]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="text-[#00E5FF] font-semibold tracking-widest text-sm uppercase drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]">
            ✦ Expertise
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mt-4 tracking-tight">Skills & Tech Stack</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-24">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-6 md:mb-8 text-[#FFFFFF] flex items-center gap-4 border-b border-[#1A1A1D] pb-5 tracking-wide">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.9)]"></span>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3 md:gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      borderColor: 'rgba(0,229,255,0.6)',
                      boxShadow: '0 0 25px rgba(0,229,255,0.3)',
                      backgroundColor: 'rgba(0,229,255,0.08)'
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/5 bg-[#1A1A1D] text-[#EAEAEA] text-xs md:text-base font-medium transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


