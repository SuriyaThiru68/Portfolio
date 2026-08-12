import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isHovering, setIsHovering] = useState(false);
  const targetRef = useRef({ x: -200, y: -200 });
  const posRef = useRef({ x: -200, y: -200 });
  const rafRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => { targetRef.current = { x: e.clientX, y: e.clientY }; };
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

    const loop = () => {
      const t = targetRef.current;
      const p = posRef.current;
      const nx = p.x + (t.x - p.x) * 0.4;
      const ny = p.y + (t.y - p.y) * 0.4;
      posRef.current = { x: nx, y: ny };
      setPos({ x: nx, y: ny });
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
    <>
      <div
        className="custom-cursor"
        style={{
          position: 'fixed',
          left: pos.x,
          top: pos.y,
          width: isHovering ? '36px' : '14px',
          height: isHovering ? '36px' : '14px',
          backgroundColor: isHovering ? '#bef2bd' : '#000000',
          border: '1px solid #000000',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'width 0.15s ease, height 0.15s ease, background-color 0.15s ease',
        }}
      />
    </>
  );
};

export default CustomCursor;
