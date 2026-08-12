import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_TEXTS = [
  "DESIGN. DEVELOP. DEPLOY.",
  "CREATING SEAMLESS USER EXPERIENCES WITH MODERN TECHNOLOGIES.",
  "DRIVEN BY CREATIVITY, CODE, AND CONTINUOUS LEARNING.",
];

// Floating particle dot
const Particle = ({ x, y, color, size, delay }) => (
  <motion.div
    style={{
      position: "absolute",
      left: x,
      top: y,
      width: size,
      height: size,
      borderRadius: "50%",
      backgroundColor: color,
      pointerEvents: "none",
    }}
    animate={{
      y: [0, -30, 10, -20, 0],
      x: [0, 10, -8, 5, 0],
      opacity: [0.3, 0.9, 0.5, 0.8, 0.3],
      scale: [1, 1.4, 0.8, 1.2, 1],
    }}
    transition={{
      duration: 4 + delay,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Orbiting ring element
const OrbitRing = ({ cx, cy, r, color, duration, ccw }) => (
  <motion.div
    style={{
      position: "absolute",
      left: cx,
      top: cy,
      width: r * 2,
      height: r * 2,
      marginLeft: -r,
      marginTop: -r,
      border: `1.5px solid ${color}`,
      borderRadius: "50%",
      pointerEvents: "none",
      opacity: 0.25,
    }}
    animate={{ rotate: ccw ? [0, -360] : [0, 360] }}
    transition={{ duration, repeat: Infinity, ease: "linear" }}
  />
);

export default function ZoomTextSection({
  texts = DEFAULT_TEXTS,
  color = "#000000",
  bgColor = "rgb(244, 244, 240)",
  accentColor = "#b6a4e5",
}) {
  const sectionRef = useRef(null);
  const wordsRef = useRef([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const safeTexts = (Array.isArray(texts) ? texts : DEFAULT_TEXTS).filter(Boolean);

  // Mouse parallax
  useEffect(() => {
    const onMove = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const els = wordsRef.current.filter(Boolean);
    if (!section || els.length === 0) return;

    // Hide all words initially
    gsap.set(els, { opacity: 0, scale: 0.08, filter: "blur(12px)" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${safeTexts.length * window.innerHeight * 0.9}`,
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const idx = Math.min(
            Math.floor(progress * safeTexts.length),
            safeTexts.length - 1
          );
          setActiveIdx(idx);
        },
      },
    });

    const seg = 1 / safeTexts.length;

    safeTexts.forEach((_, i) => {
      const el = els[i];
      const start = i * seg;

      // Zoom IN
      tl.to(
        el,
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: seg * 0.3,
          ease: "power3.out",
        },
        start
      );

      // Hold visible, then Zoom OUT
      if (i < safeTexts.length - 1) {
        tl.to(
          el,
          {
            scale: 20,
            opacity: 0,
            filter: "blur(18px)",
            duration: seg * 0.25,
            ease: "power4.in",
          },
          start + seg * 0.65
        );
      }
      // Last text just stays
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [safeTexts.join(",")]);

  // Derive border/ink color depending on bg
  const isLight = bgColor.includes("244") || bgColor === "#f4f4f0";
  const ink = isLight ? "#000" : color;
  const subtle = isLight ? "rgba(0,0,0,0.07)" : "rgba(255,255,255,0.07)";
  const subtleText = isLight ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.28)";

  const particles = [
    { x: "10%", y: "20%", color: "#b6a4e5", size: 10, delay: 0 },
    { x: "85%", y: "15%", color: "#FF0055", size: 7, delay: 0.5 },
    { x: "70%", y: "75%", color: "#00d0ffff", size: 9, delay: 1 },
    { x: "20%", y: "80%", color: "#0055FF", size: 6, delay: 1.5 },
    { x: "50%", y: "10%", color: "#bef2bd", size: 8, delay: 0.8 },
    { x: "90%", y: "50%", color: "#b6a4e5", size: 5, delay: 0.3 },
    { x: "5%", y: "55%", color: "#FF0055", size: 11, delay: 2 },
    { x: "42%", y: "88%", color: "#00eeffff", size: 6, delay: 1.2 },
  ];

  const accents = ["#b6a4e5", "#FF0055", "#00a6ffff", "#6f00ffff", "#bef2bd"];
  const currentAccent = accents[activeIdx % accents.length];

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        backgroundColor: bgColor,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        borderTop: `1px solid ${subtle}`,
        borderBottom: `1px solid ${subtle}`,
      }}
    >
      {/* ── Floating particles ── */}
      {particles.map((p, i) => (
        <Particle key={i} {...p} />
      ))}

      {/* ── Orbit rings (parallax shifted by mouse) ── */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
        animate={{
          x: (mousePos.x - 0.5) * -18,
          y: (mousePos.y - 0.5) * -12,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 25 }}
      >
        <OrbitRing cx="50%" cy="50%" r={200} color={currentAccent} duration={14} />
        <OrbitRing cx="50%" cy="50%" r={310} color={currentAccent} duration={22} ccw />
        <OrbitRing cx="15%" cy="30%" r={70} color="#b6a4e5" duration={9} />
        <OrbitRing cx="82%" cy="65%" r={55} color="#E8FF00" duration={7} ccw />
      </motion.div>

      {/* ── Corner cross-hair decorations ── */}
      {[
        { top: 20, left: 20 },
        { top: 20, right: 20 },
        { bottom: 20, left: 20 },
        { bottom: 20, right: 20 },
      ].map((pos, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            ...pos,
            width: 24,
            height: 24,
            pointerEvents: "none",
            opacity: 0.25,
          }}
        >
          <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 1, background: ink }} />
          <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: ink }} />
        </div>
      ))}

      {/* ── Stage — all words stacked ── */}
      <div style={{
        position: "relative",
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
        zIndex: 4,
      }}>
        {/* Accent glow behind word */}
        <motion.div
          animate={{ backgroundColor: currentAccent, scale: [1, 1.08, 1] }}
          transition={{ duration: 0.3, scale: { duration: 2, repeat: Infinity } }}
          style={{
            position: "absolute",
            width: "40vw",
            height: "40vw",
            maxWidth: 420,
            maxHeight: 420,
            borderRadius: "50%",
            filter: "blur(90px)",
            opacity: 0.12,
            pointerEvents: "none",
          }}
        />

        {safeTexts.map((word, i) => (
          <span
            key={i}
            ref={el => { wordsRef.current[i] = el; }}
            style={{
              position: "absolute",
              inset: 0,
              margin: "auto",
              height: "fit-content",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2.5rem, 7vw, 7rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              textAlign: "center",
              color: ink,
              transformOrigin: "center center",
              willChange: "transform, opacity, filter",
              whiteSpace: "normal",
              width: "80vw",
              maxWidth: "900px",
              userSelect: "none",
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </section>
  );
}
