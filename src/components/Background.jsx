import React from 'react';

/* Global fixed layer — just provides the cream base + dot grid.
   Each section embeds its own unique graffiti background via SectionBackgrounds.jsx */
const Background = () => (
    <div
        aria-hidden="true"
        style={{
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            overflow: 'hidden',
            backgroundColor: 'var(--cream)',
        }}
    >
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
            <defs>
                <pattern id="global-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.85" fill="#1a1a1a" opacity="0.10" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#global-dots)" />
        </svg>
    </div>
);

export default Background;
