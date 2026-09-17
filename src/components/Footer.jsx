import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0,
        backgroundColor: '#f4f4f0',
        color: '#000000',
        overflow: 'hidden',
      }}
    >
      {/* ── Name Display Block ── */}
      <div
        style={{
          backgroundColor: '#f4f4f0',
          borderBottom: '1px solid #000000',
          padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 3rem)',
          overflow: 'hidden',
        }}
      >
        {/* Label */}
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#666666',
            marginBottom: '0.5rem',
          }}
        >
          — Designed & Developed by
        </div>

        {/* Big name */}
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(3.5rem, 13vw, 14rem)',
            lineHeight: 0.85,
            letterSpacing: '-0.01em',
            color: '#000000',
            textTransform: 'uppercase',
            margin: 0,
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
          }}
        >
          SURIYA{' '}
          <span style={{ color: '#b6a4e5' }}>THIRUPPATHY</span>
        </h2>

        {/* Role tag row */}
        <div
          style={{
            display: 'flex',
            gap: '0.6rem',
            flexWrap: 'wrap',
            marginTop: '1.5rem',
          }}
        >
          {['AI/ML Engineer', 'Full-Stack Developer', 'Product Designer'].map((tag) => (
            <span
              key={tag}
              style={{
                border: '1px solid #000000',
                backgroundColor: '#ffffff',
                padding: '0.35rem 0.85rem',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div
        style={{
          backgroundColor: '#b6a4e5',
          borderTop: '1px solid #000000',
          padding: '1rem clamp(1rem, 4vw, 3rem)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.82rem',
          fontWeight: 700,
          textTransform: 'uppercase',
        }}
      >
        <span>© 2025 Suriya Thiruppathy — All Rights Reserved.</span>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <span>Portfolio by Suriya T.</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
            style={{
              backgroundColor: '#bef2bd',
              border: '1px solid #000000',
              padding: '0.3rem 0.8rem',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '0.78rem',
              cursor: 'pointer',
              textTransform: 'uppercase',
            }}
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
