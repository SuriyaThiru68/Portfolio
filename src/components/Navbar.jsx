import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); }
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
          zIndex: 200,
          backgroundColor: 'var(--cream)',
          borderBottom: '1.5px solid rgba(26,26,26,0.12)',
          fontFamily: "'Caveat', cursive",
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>

            {/* ── LOGO / BRAND LEFT ── */}
            <button
              onClick={() => scrollToSection('home')}
              style={{
                fontFamily: "'Permanent Marker', cursive",
                fontSize: '1.4rem',
                color: 'var(--ink)',
                background: 'none',
                border: 'none',
                letterSpacing: '-0.02em',
              }}
            >
              ST
            </button>

            {/* ── DESKTOP NAV LINKS ── */}
            <ul className="hidden lg:flex" style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
              {navItems.map(({ label, id }) => {
                const isActive = activeSection === id;
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => { e.preventDefault(); scrollToSection(id); }}
                      style={{
                        fontFamily: "'Caveat', cursive",
                        fontSize: '1.05rem',
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
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          style={{
                            position: 'absolute', bottom: '-3px', left: 0, right: 0,
                            height: '2.5px', backgroundColor: 'var(--ink)',
                            borderRadius: '2px', transform: 'rotate(-1deg)',
                          }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* ── RIGHT SIDE: label (desktop) + hamburger (mobile) ── */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {/* Label — hide on small screens */}
              <span
                className="hidden sm:inline"
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: '1rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: 'var(--blue-accent)',
                  textTransform: 'uppercase',
                }}
              >
                Web Developer
              </span>

              {/* Hamburger — only on < lg */}
              <button
                className="lg:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '5px',
                  alignItems: 'center',
                }}
              >
                <motion.div animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  style={{ width: 24, height: 2.5, backgroundColor: 'var(--ink)', borderRadius: 2 }} />
                <motion.div animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  style={{ width: 24, height: 2.5, backgroundColor: 'var(--ink)', borderRadius: 2 }} />
                <motion.div animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  style={{ width: 24, height: 2.5, backgroundColor: 'var(--ink)', borderRadius: 2 }} />
              </button>
            </div>

          </div>
        </div>

        {/* ── MOBILE DROPDOWN MENU ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              style={{
                overflow: 'hidden',
                backgroundColor: 'var(--cream)',
                borderTop: '1px solid rgba(26,26,26,0.1)',
              }}
            >
              <div style={{ padding: '1rem 2rem 1.5rem' }}>
                {navItems.map(({ label, id }, i) => (
                  <motion.a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(id); }}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    style={{
                      display: 'block',
                      fontFamily: "'Caveat', cursive",
                      fontSize: '1.5rem',
                      fontWeight: activeSection === id ? 700 : 500,
                      color: activeSection === id ? 'var(--blue-accent)' : 'var(--ink)',
                      padding: '0.5rem 0',
                      textDecoration: 'none',
                      letterSpacing: '0.06em',
                      borderBottom: '1px solid rgba(26,26,26,0.06)',
                    }}
                  >
                    {activeSection === id ? '→ ' : ''}{label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Nav spacer */}
      <div style={{ height: '60px' }} />
    </>
  );
};

export default Navbar;
