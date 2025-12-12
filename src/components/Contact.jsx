import React from 'react';

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
      <h2 className="text-6xl lg:text-9xl font-extrabold mb-8">Let's Connect</h2>
      <a
        href="mailto:suriyathiru666@gmail.com"
        className="text-3xl lg:text-5xl text-indigo-500 font-semibold hover:text-indigo-400 transition-colors inline-block mb-16"
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        suriyathiru666@gmail.com
      </a>
      <div className="flex flex-wrap justify-center gap-12 text-xl">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            {social.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
