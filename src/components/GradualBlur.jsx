import React, { useRef, useState, useMemo } from 'react';

const CURVE_FUNCTIONS = {
  linear: (p) => p,
  bezier: (p) => p * p * (3 - 2 * p),
  'ease-out': (p) => 1 - Math.pow(1 - p, 2),
};

/**
 * GradualBlur — adds a progressively stronger backdrop-filter blur
 * along one edge of its parent (which must have position: relative).
 *
 * Props:
 *  position  – 'top' | 'bottom' | 'left' | 'right'  (default: 'bottom')
 *  height    – CSS string, height of the blur band    (default: '6rem')
 *  strength  – max blur in rem                        (default: 2)
 *  divCount  – number of blur gradient steps          (default: 6)
 *  curve     – gradient curve key                     (default: 'ease-out')
 *  zIndex    – z-index of the overlay                 (default: 10)
 *  style     – extra inline styles merged in
 */
function GradualBlur({
  position = 'bottom',
  height = '6rem',
  strength = 2,
  divCount = 6,
  curve = 'ease-out',
  zIndex = 10,
  style: extraStyle = {},
}) {
  const curveFunc = CURVE_FUNCTIONS[curve] || CURVE_FUNCTIONS['ease-out'];

  const directionMap = {
    top: 'to top',
    bottom: 'to bottom',
    left: 'to left',
    right: 'to right',
  };
  const gradientDir = directionMap[position] || 'to bottom';
  const isVertical = position === 'top' || position === 'bottom';

  const blurDivs = useMemo(() => {
    const increment = 100 / divCount;
    const divs = [];
    for (let i = 1; i <= divCount; i++) {
      const progress = curveFunc(i / divCount);
      const blurValue = 0.0625 * (progress * divCount + 1) * strength;

      const p1 = Math.round((increment * i - increment) * 10) / 10;
      const p2 = Math.round(increment * i * 10) / 10;
      const p3 = Math.round((increment * i + increment) * 10) / 10;
      const p4 = Math.round((increment * i + increment * 2) * 10) / 10;

      let gradient = `transparent ${p1}%, black ${p2}%`;
      if (p3 <= 100) gradient += `, black ${p3}%`;
      if (p4 <= 100) gradient += `, transparent ${p4}%`;

      divs.push(
        <div
          key={i}
          style={{
            position: 'absolute',
            inset: 0,
            maskImage: `linear-gradient(${gradientDir}, ${gradient})`,
            WebkitMaskImage: `linear-gradient(${gradientDir}, ${gradient})`,
            backdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
            WebkitBackdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
          }}
        />
      );
    }
    return divs;
  }, [divCount, strength, gradientDir, curveFunc]);

  const containerStyle = {
    position: 'absolute',
    pointerEvents: 'none',
    zIndex,
    ...extraStyle,
    ...(isVertical
      ? { height, width: '100%', [position]: 0, left: 0, right: 0 }
      : { width: height, height: '100%', [position]: 0, top: 0, bottom: 0 }),
  };

  return (
    <div style={containerStyle}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {blurDivs}
      </div>
    </div>
  );
}

export default React.memo(GradualBlur);
