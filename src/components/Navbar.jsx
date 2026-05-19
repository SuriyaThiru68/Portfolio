import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './assests/porfoliologo.png';

const Navbar = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[200] transition-all duration-500 font-sans ${
          scrolled ? 'bg-[#0f0f0f]/95 backdrop-blur-sm shadow-md h-[70px]' : 'bg-transparent h-[100px]'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-full">
          <button
            onClick={() => scrollToSection('home')}
            className="relative z-50 flex items-center"
          >
            <img src={logo} alt="Suriya Logo" className="h-10 md:h-[45px] w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
          </button>

          <ul className="hidden md:flex gap-10 lg:gap-14 items-center">
            {navItems.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(id); }}
                  className={`text-2xl font-medium transition-colors duration-300 relative group ${
                    activeSection === id ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {label}
                  <span className={`absolute left-0 -bottom-2 w-full h-[1px] bg-white transition-all duration-300 ${
                    activeSection === id ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-50'
                  }`} />
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-white relative z-50 flex flex-col gap-[6px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-[1px] bg-white transition-transform ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`block w-6 h-[1px] bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-[1px] bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-100%' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 w-full h-screen bg-[#0f0f0f] flex flex-col justify-center items-center gap-10 z-40"
            >
              {navItems.map(({ label, id }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(id); }}
                  className={`text-4xl font-medium transition-colors ${
                    activeSection === id ? 'text-white' : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;


