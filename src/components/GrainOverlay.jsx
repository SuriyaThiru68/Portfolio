import React, { useEffect, useRef } from 'react';

/**
 * GrainOverlay — throttled canvas film grain (8fps) for analog texture.
 * Fixed, pointer-events-none. Runs at low fps to avoid scroll jank.
 */
const GrainOverlay = ({ opacity = 0.022 }) => {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);
  const lastTime  = useRef(0);
  const FPS       = 8; // low fps = no jank
  const INTERVAL  = 1000 / FPS;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      // Use a smaller canvas and scale with CSS for performance
      canvas.width  = Math.floor(window.innerWidth  / 2);
      canvas.height = Math.floor(window.innerHeight / 2);
    };

    const render = (timestamp) => {
      const elapsed = timestamp - lastTime.current;
      if (elapsed > INTERVAL) {
        lastTime.current = timestamp - (elapsed % INTERVAL);
        const { width, height } = canvas;
        const imageData = ctx.createImageData(width, height);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
          const v = Math.random() * 255 | 0;
          data[i]     = v;
          data[i + 1] = v;
          data[i + 2] = v;
          data[i + 3] = 255;
        }
        ctx.putImageData(imageData, 0, 0);
      }
      animRef.current = requestAnimationFrame(render);
    };

    resize();
    animRef.current = requestAnimationFrame(render);

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity,
        mixBlendMode: 'overlay',
        imageRendering: 'pixelated',
      }}
      aria-hidden="true"
    />
  );
};

export default GrainOverlay;
