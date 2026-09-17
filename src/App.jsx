import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Expertise from './components/Expertise';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import ZoomTextSection from './components/ZoomTextSection';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showLoading, setShowLoading] = useState(true);

  // Scroll Progress Spring Animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 25,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'expertise', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;
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
  }, []);

  if (showLoading) {
    return <LoadingScreen onFinish={() => setShowLoading(false)} />;
  }

  return (
    <div style={{ position: 'relative', backgroundColor: '#f4f4f0' }}>
      {/* Top Scroll Progress Indicator */}
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          backgroundColor: '#FF0055',
          transformOrigin: '0%',
          zIndex: 9999,
        }}
      />

      <CustomCursor />
      <Navbar activeSection={activeSection} />

      {/* Main content sits ABOVE the fixed footer */}
      <div style={{ position: 'relative', zIndex: 1, backgroundColor: '#f4f4f0' }}>
        <main>
          <Hero />
          <Marquee />
          <Expertise />
          <About />
          <ZoomTextSection
            texts={[
              "DESIGN. DEVELOP. DEPLOY.",
              "CREATING SEAMLESS USER EXPERIENCES WITH MODERN TECHNOLOGIES.",
              "DRIVEN BY CREATIVITY, CODE, AND CONTINUOUS LEARNING.",
            ]}
            color="#000000"
            bgColor="rgb(244, 244, 240)"
            accentColor="#b6a4e5"
          />
          <Skills />
          <Projects />
          <Gallery />
          <Experience />
          <Contact />
        </main>
      </div>

      {/* Fixed footer revealed when you scroll past content — needs spacer */}
      <div style={{ height: '100vh' }} />
      <Footer />
    </div>
  );
};

export default App;
