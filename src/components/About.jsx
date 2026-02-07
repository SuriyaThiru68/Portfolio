import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-40 px-4 sm:px-6 lg:px-16 bg-white text-black">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-6xl lg:text-8xl font-extrabold mb-12"
      >
        About Me
      </motion.h2>
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl lg:text-3xl font-light leading-relaxed text-gray-800"
        >
          Hi! I'm Suriya T, a Computer Science and Engineering student specializing in Artificial intelligence
          and Machine Learning at KIT - Kalaignar Karunanidhi Institute of Technology.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl lg:text-3xl font-light leading-relaxed text-gray-800"
        >
          I'm fascinated by how technology can think, learn, and solve problems — but I'm also deeply in love with design.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl lg:text-3xl font-light leading-relaxed text-gray-800"
        >
          My goal? To blend creativity and code, making digital products that are both smart and beautiful.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
