import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Expertise from './components/Expertise';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Reveal from './components/Reveal';
import Background from './components/Background';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (!isLoaded) return;
    const handleScroll = () => {
      const sections = ['home', 'about', 'expertise', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoaded]);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoaded(true)} />

      <AnimatePresence>
        {isLoaded && (
          <motion.div
            key="site"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ position: 'relative' }}
            className="overflow-x-hidden"
          >
            <Background />
            <CustomCursor />
            <Navbar activeSection={activeSection} />
            <main>
              <Hero />
              <Reveal width="100%">
                <Marquee />
              </Reveal>
              <Expertise />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
