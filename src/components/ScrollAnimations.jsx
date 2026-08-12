import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * ScrollParallax — wraps children with scroll-driven parallax motion.
 * 
 * Props:
 *  speed      — parallax multiplier (negative = move up on scroll, positive = down)
 *  opacity    — whether to fade based on scroll position
 *  scale      — whether to scale based on scroll position
 *  rotate     — whether to rotate based on scroll position
 *  className  — additional className
 *  style      — additional inline styles
 */
const ScrollParallax = ({
  children,
  speed = 0.3,
  opacity = false,
  scale = false,
  rotate = false,
  className = '',
  style = {},
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);
  const opacityVal = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], opacity ? [0, 1, 1, 0] : [1, 1, 1, 1]);
  const scaleVal = useTransform(scrollYProgress, [0, 0.5, 1], scale ? [0.9, 1, 0.9] : [1, 1, 1]);
  const rotateVal = useTransform(scrollYProgress, [0, 1], rotate ? [-5, 5] : [0, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        opacity: opacityVal,
        scale: scaleVal,
        rotate: rotateVal,
        ...style,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * ScrollReveal — reveals children with a dramatic entrance on scroll.
 */
export const ScrollReveal = ({
  children,
  direction = 'up', // up, down, left, right
  delay = 0,
  duration = 0.8,
  className = '',
  style = {},
  once = true,
}) => {
  const ref = useRef(null);

  const initialState = {
    up: { opacity: 0, y: 60 },
    down: { opacity: 0, y: -60 },
    left: { opacity: 0, x: -60 },
    right: { opacity: 0, x: 60 },
  }[direction];

  const animateState = {
    up: { opacity: 1, y: 0 },
    down: { opacity: 1, y: 0 },
    left: { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 },
  }[direction];

  return (
    <motion.div
      ref={ref}
      initial={initialState}
      whileInView={animateState}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

/**
 * HorizontalScrollText — large text that moves horizontally on scroll
 */
export const HorizontalScrollText = ({
  text,
  speed = 200,
  className = '',
  style = {},
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -speed]);

  return (
    <div ref={ref} style={{ overflow: 'hidden', ...style }}>
      <motion.div style={{ x, whiteSpace: 'nowrap' }} className={className}>
        {text}
      </motion.div>
    </div>
  );
};

export default ScrollParallax;
