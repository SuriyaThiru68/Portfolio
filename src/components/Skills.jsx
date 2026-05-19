import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'C', 'Java', 'JavaScript'],
  },
  {
    title: 'Web & Full Stack',
    skills: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'FastAPI', 'REST APIs'],
  },
  {
    title: 'AI/ML & Data Science',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'NLP Basics',
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'OpenCV',
      'Pandas',
      'NumPy',
    ],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'MongoDB Compass', 'Jupyter Notebook', 'Google Colab', 'Postman'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 bg-[#0B0B0C] text-[#FFFFFF] overflow-hidden font-sans">
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent pointer-events-none"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        style={{ transformOrigin: 'left' }}
      />
      <div className="absolute top-1/4 -right-64 w-[800px] h-[800px] bg-[#00E5FF]/5 rounded-full blur-[150px] pointer-events-none" />
      <motion.div
        className="absolute -bottom-32 -left-64 w-[600px] h-[600px] bg-[#00E5FF]/5 rounded-full blur-[150px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute top-1/2 right-0 w-px h-1/2 bg-gradient-to-b from-transparent via-[#00E5FF]/15 to-transparent pointer-events-none"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        style={{ transformOrigin: 'top' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-[#00E5FF] font-semibold tracking-widest text-sm uppercase drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]">
            ✦ Technical Skills
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mt-4 tracking-tight">
            Skills & Tech Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`flex flex-col ${
                category.title === 'AI/ML & Data Science' ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <h3 className="text-base md:text-lg font-semibold mb-5 md:mb-6 text-[#FFFFFF] flex items-center gap-4 border-b border-[#1A1A1D] pb-4 tracking-wide uppercase text-[13px] md:text-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.9)] shrink-0" />
                {category.title}
              </h3>

              <motion.div
                className="flex flex-wrap gap-3 md:gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.04 } },
                }}
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      borderColor: 'rgba(0,229,255,0.6)',
                      boxShadow: '0 0 25px rgba(0,229,255,0.3)',
                      backgroundColor: 'rgba(0,229,255,0.08)',
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    className="px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-white/5 bg-[#1A1A1D] text-[#EAEAEA] text-xs md:text-sm font-medium transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
