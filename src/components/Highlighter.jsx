import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Highlighter — SVG animated neon-yellow brush stroke that sweeps under wrapped text.
 * Usage:
 *   <Highlighter>key phrase here</Highlighter>
 *
 * Props:
 *   color   — stroke color (default: neon yellow)
 *   delay   — animation delay in seconds
 *   thick   — stroke thickness (default: 18)
 *   opacity — stroke opacity (default: 0.85)
 */
const Highlighter = ({
  children,
  color = '#E8FF00',
  delay = 0,
  thick = 18,
  opacity = 0.85,
  className = '',
  style = {},
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <span
      ref={ref}
      className={className}
      style={{ position: 'relative', display: 'inline', whiteSpace: 'nowrap', ...style }}
    >
      {/* SVG brush stroke behind the text */}
      <motion.svg
        viewBox="0 0 300 24"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: '-0.05em',
          left: '-2%',
          width: '104%',
          height: `${thick + 10}px`,
          zIndex: 0,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      >
        {/* Main brush stroke path */}
        <motion.path
          d="M4,16 C40,6 80,20 120,12 C160,4 200,18 240,10 C270,4 290,14 296,12"
          stroke={color}
          strokeWidth={thick}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity={opacity}
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{
            duration: 0.7,
            delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
        {/* Secondary texture stroke for painterly feel */}
        <motion.path
          d="M6,18 C50,10 90,22 130,14 C165,8 205,20 245,12 C270,6 288,16 294,14"
          stroke={color}
          strokeWidth={thick * 0.35}
          strokeLinecap="round"
          fill="none"
          opacity={opacity * 0.4}
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{
            duration: 0.65,
            delay: delay + 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </motion.svg>

      {/* Text content sits above SVG */}
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </span>
  );
};

export default Highlighter;
