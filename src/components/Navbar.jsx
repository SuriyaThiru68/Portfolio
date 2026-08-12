import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Shop / About',  id: 'about' },
  { label: 'Skills',        id: 'skills' },
  { label: 'Projects',      id: 'projects' },
  { label: 'Contact',       id: 'contact' },
];

const Navbar = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: 'instant' }); setMenuOpen(false); }
  };

  return (
    <>
      <nav
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 500,
          backgroundColor: '#b6a4e5', // Alec Monopoly signature pastel lavender
          borderTop: '1px solid #000000',
          borderBottom: '1px solid #000000',
        }}
      >
        {/* Full-width 1px Grid Columns (Desktop) */}
        <div className="nav-desktop-grid">
          {/* Col 1: Brand / Logo */}
          <button
            onClick={() => scrollTo('home')}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              borderRight: '1px solid #000000',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '0.9rem',
              color: '#000000',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              transition: 'background-color 0.15s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#bef2bd'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            SURIYA T.
          </button>

          {/* Col 2: About Link */}
          <button
            onClick={() => scrollTo('about')}
            style={{
              backgroundColor: activeSection === 'about' ? '#bef2bd' : 'transparent',
              border: 'none',
              borderRight: '1px solid #000000',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: '0.85rem',
              color: '#000000',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textTransform: 'uppercase',
              transition: 'background-color 0.15s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#bef2bd'}
            onMouseLeave={e => {
              if (activeSection !== 'about') e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            About
          </button>

          {/* Col 3: Skills Link */}
          <button
            onClick={() => scrollTo('skills')}
            style={{
              backgroundColor: activeSection === 'skills' ? '#bef2bd' : 'transparent',
              border: 'none',
              borderRight: '1px solid #000000',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: '0.85rem',
              color: '#000000',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textTransform: 'uppercase',
              transition: 'background-color 0.15s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#bef2bd'}
            onMouseLeave={e => {
              if (activeSection !== 'skills') e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Skills
          </button>

          {/* Col 4: Spacer / Center Fill */}
          <div
            style={{
              borderRight: '1px solid #000000',
              backgroundColor: 'transparent',
            }}
          />

          {/* Col 5: Projects Link */}
          <button
            onClick={() => scrollTo('projects')}
            style={{
              backgroundColor: activeSection === 'projects' ? '#bef2bd' : 'transparent',
              border: 'none',
              borderRight: '1px solid #000000',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: '0.85rem',
              color: '#000000',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textTransform: 'uppercase',
              transition: 'background-color 0.15s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#bef2bd'}
            onMouseLeave={e => {
              if (activeSection !== 'projects') e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Projects
          </button>

          {/* Col 6: Hire / Contact Button */}
          <a
            href="mailto:suriyathiru666@gmail.com"
            style={{
              backgroundColor: 'transparent',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '0.85rem',
              color: '#000000',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'background-color 0.15s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#bef2bd'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Hire Me →
          </a>
        </div>

        {/* Mobile Header Bar */}
        <div className="nav-mobile-bar">
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
            }}
          >
            SURIYA T.
          </span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              backgroundColor: '#bef2bd',
              border: '1px solid #000000',
              padding: '0.3rem 0.8rem',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'fixed',
              top: '53px',
              left: 0,
              width: '100%',
              backgroundColor: '#b6a4e5',
              borderBottom: '2px solid #000000',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 490,
            }}
          >
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  padding: '1rem 1.5rem',
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '2.2rem',
                  color: '#000000',
                  textAlign: 'left',
                  borderBottom: '1px solid #000000',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                }}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
