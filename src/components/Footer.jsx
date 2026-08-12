import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#b6a4e5', // Signature Alec pastel lavender
        color: '#000000',
        borderTop: '1px solid #000000',
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '0.85rem',
      }}
    >
      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '1.5rem clamp(1rem, 4vw, 3rem)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div style={{ fontWeight: 700, textTransform: 'uppercase' }}>
          © 2025 SURIYA THIRUPPATHY — ALL RIGHTS RESERVED.
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', fontWeight: 600 }}>
          <span>PORTFOLIO BY SURIYA T.</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
            style={{
              backgroundColor: '#bef2bd',
              border: '1px solid #000000',
              padding: '0.3rem 0.8rem',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '0.8rem',
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
