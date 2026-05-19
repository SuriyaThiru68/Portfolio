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
import WebsitePricing from './components/WebsitePricing';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Reveal from './components/Reveal';
import Background from './components/Background';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { ReactLenis } from '@studio-freight/react-lenis';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (!isLoaded) return;
    const handleScroll = () => {
      const sections = ['home', 'about', 'expertise', 'skills', 'projects', 'experience', 'services', 'contact'];
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
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      <LoadingScreen onComplete={() => setIsLoaded(true)} />

      <AnimatePresence>
        {isLoaded && (
          <motion.div
            key="site"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ position: 'relative' }}
            className="overflow-clip"
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
              <WebsitePricing />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </ReactLenis>
  );
};

export default App;


