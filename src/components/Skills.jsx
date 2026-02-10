import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Programming',
    items: ['Python', 'Java', 'C']
  },
  {
    category: 'Web Development',
    items: ['HTML & CSS', 'Tailwind CSS', 'JavaScript', 'React', 'Bootstrap']
  },
  {
    category: 'DataBases',
    items: ['SQL', 'MongoDb']
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'MongoDb Compass']
  },
  {
    category: 'Design',
    items: ['Figma', 'Framer', 'Affinity Designer', 'Photoshop', 'Canva']
  },


  {
    category: 'Deployment & Hosting',
    items: ['Vercel', 'Render', 'Netlify', 'GitHub Pages']
  }

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Skills = () => {
  const handleHover = (isHover) => window.dispatchEvent(new CustomEvent('cursor-hover', { detail: isHover }));
  return (
    <section id="skills" className="py-40 px-4 sm:px-6 lg:px-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-6xl lg:text-8xl font-extrabold mb-16"
      >
        Skills
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="p-10 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-indigo-500 transition-all hover:-translate-y-2"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            <h3 className="text-2xl font-bold mb-6 text-indigo-500">{skill.category}</h3>
            <ul className="space-y-3">
              {skill.items.map((item, i) => (
                <li key={i} className="text-gray-400 text-lg">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
