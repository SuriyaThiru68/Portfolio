import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'HOME', id: 'home' },
    { label: 'SKILLS', id: 'skills' },
    { label: 'PROJECTS', id: 'projects' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100,
          backgroundColor: 'var(--cream)',
          borderBottom: '1.5px solid rgba(26,26,26,0.12)',
          fontFamily: "'Caveat', cursive",
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 2.5rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '64px',
            }}
          >
            {/* ── Nav Links (left) ── */}
            <ul
              style={{
                display: 'flex',
                gap: '2.5rem',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                alignItems: 'center',
              }}
              className="hidden lg:flex"
            >
              {navItems.map(({ label, id }) => {
                const isActive = activeSection === id;
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(id);
                      }}
                      style={{
                        fontFamily: "'Caveat', cursive",
                        fontSize: '1.1rem',
                        fontWeight: isActive ? 700 : 500,
                        letterSpacing: '0.08em',
                        color: isActive ? 'var(--ink)' : 'rgba(26,26,26,0.6)',
                        textDecoration: 'none',
                        position: 'relative',
                        paddingBottom: '2px',
                        transition: 'color 0.2s',
                      }}
                    >
                      {label}
                      {/* Active underline (hand-drawn style) */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          style={{
                            position: 'absolute',
                            bottom: '-3px',
                            left: 0,
                            right: 0,
                            height: '2.5px',
                            backgroundColor: 'var(--ink)',
                            borderRadius: '2px',
                            transform: 'rotate(-1deg)',
                          }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Mobile hamburger (left for small screens) */}
            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
              }}
              aria-label="Toggle menu"
            >
              <svg width="28" height="20" fill="none">
                <path d="M0 2 H28 M0 10 H28 M0 18 H28" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </button>

            {/* ── Right label ── */}
            <span
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: '1.1rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                color: 'var(--blue-accent)',
                textTransform: 'uppercase',
              }}
            >
              Web Developer
            </span>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              backgroundColor: 'var(--cream)',
              borderTop: '1px solid rgba(26,26,26,0.1)',
              padding: '1rem 2.5rem',
            }}
          >
            {navItems.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
                style={{
                  display: 'block',
                  fontFamily: "'Caveat', cursive",
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: activeSection === id ? 'var(--blue-accent)' : 'var(--ink)',
                  padding: '0.5rem 0',
                  textDecoration: 'none',
                  letterSpacing: '0.08em',
                }}
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Spacer so content isn't hidden under fixed nav */}
      <div style={{ height: '64px' }} />
    </>
  );
};

export default Navbar;
