import React from 'react';
import { motion } from 'framer-motion';

const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/suriyathiruppathy/' },
  { name: 'GitHub', url: 'https://github.com/SuriyaThiru68' },
  { name: 'Behance', url: 'https://www.behance.net/suriyathiru' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/suriyathiruppathy/' }
];

const Contact = () => {
  const handleHover = (isHover) => window.dispatchEvent(new CustomEvent('cursor-hover', { detail: isHover }));
  return (
    <section id="contact" className="py-40 px-4 sm:px-6 lg:px-16 text-center">
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-6xl lg:text-9xl font-extrabold mb-8"
      >
        Let's Connect
      </motion.h2>
      <motion.a
        href="mailto:suriyathiru666@gmail.com"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl lg:text-5xl text-indigo-500 font-semibold hover:text-indigo-400 transition-colors inline-block mb-16"
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        suriyathiru666@gmail.com
      </motion.a>
      <div className="flex flex-wrap justify-center gap-12 text-xl">
        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
            className="text-gray-400 hover:text-white transition-colors"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            {social.name}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
