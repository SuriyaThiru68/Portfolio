import React, { useState, useEffect, useRef } from 'react';

/* Hand-drawn sketch arrow cursor SVG — matches the reference image */
const SketchArrow = ({ isHovering }) => (
  <svg
    width={isHovering ? '28' : '24'}
    height={isHovering ? '33' : '28'}
    viewBox="0 0 44 52"
    fill="none"
    style={{ display: 'block', transition: 'width 0.15s, height 0.15s' }}
  >
    <defs>
      {/* Clip to arrow shape so hatching stays inside */}
      <clipPath id="arrow-clip">
        <path d="M3 1 L3.5 35 L13 25.5 L19.5 43 L25.5 40.5 L19 23 L31 23 Z" />
      </clipPath>
    </defs>

    {/* ── Fill: dark ink with slight transparency ── */}
    <path
      d="M3 1 L3.5 35 L13 25.5 L19.5 43 L25.5 40.5 L19 23 L31 23 Z"
      fill="rgba(18,18,18,0.88)"
    />

    {/* ── Cross-hatch lines clipped inside the arrow ── */}
    <g clipPath="url(#arrow-clip)" opacity="0.55">
      {/* Diagonal hatch lines — bottom-left to top-right */}
      {Array.from({ length: 28 }).map((_, i) => {
        const offset = i * 3.2 - 10;
        return (
          <line
            key={`h${i}`}
            x1={offset}
            y1={-2}
            x2={offset + 50}
            y2={52}
            stroke="#f5f0e8"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
        );
      })}
      {/* Cross-hatch in opposite direction */}
      {Array.from({ length: 18 }).map((_, i) => {
        const offset = i * 4.5 - 5;
        return (
          <line
            key={`v${i}`}
            x1={-2}
            y1={offset}
            x2={44}
            y2={offset + 32}
            stroke="#f5f0e8"
            strokeWidth="0.75"
            strokeLinecap="round"
            opacity="0.6"
          />
        );
      })}
    </g>

    {/* ── Outer sketch outline — slightly wobbly ── */}
    <path
      d="M3.2 1 L2.8 13 L3 23 L3.2 35.5 L12.5 26 L19 43.5 L26 40 L19.2 22.5 L31.5 22.8 L3.2 1 Z"
      stroke="#1a1a1a"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
      fill="none"
    />
    {/* Second wobbly outline pass for sketch feel */}
    <path
      d="M2.5 1.5 L3.5 18 L2.8 34.5 L13.5 25 L19.8 42.5 L25 40.5 L18.5 23.5 L30.5 23.2 L2.5 1.5 Z"
      stroke="#1a1a1a"
      strokeWidth="1"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeOpacity="0.35"
      fill="none"
    />
  </svg>
);

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isHovering, setIsHovering] = useState(false);
  const targetRef = useRef({ x: -200, y: -200 });
  const posRef = useRef({ x: -200, y: -200 });
  const rafRef = useRef(null);
  const domPosRef = useRef({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    const attachHoverListeners = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select').forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    // Smooth lerp loop
    const loop = () => {
      const t = targetRef.current;
      const p = posRef.current;
      const nx = p.x + (t.x - p.x) * 0.22;
      const ny = p.y + (t.y - p.y) * 0.22;
      posRef.current = { x: nx, y: ny };

      // Only update DOM state if moved noticeably
      if (Math.abs(nx - domPosRef.current.x) > 0.3 || Math.abs(ny - domPosRef.current.y) > 0.3) {
        domPosRef.current = { x: nx, y: ny };
        setPos({ x: nx, y: ny });
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    attachHoverListeners();

    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        /* Arrow tip is at top-left of SVG → place it exactly at cursor */
        left: pos.x,
        top: pos.y,
        transform: isHovering ? 'scale(1.12)' : 'scale(1)',
        pointerEvents: 'none',
        zIndex: 99999,
        transition: 'transform 0.18s ease',
        willChange: 'transform',
        /* Slight rotation to mimic natural hand-drawn tilt */
        rotate: '-4deg',
      }}
    >
      <SketchArrow isHovering={isHovering} />
    </div>
  );
};

export default CustomCursor;