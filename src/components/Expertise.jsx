import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: "01",
    label: "01",
    title: "Web Development",
    description: "Building responsive, modern, and performant web applications using the latest web technologies, perfectly matching the design vision.",
    graphics: (
      <div className="w-full h-full flex items-center justify-center relative">
        <div className="absolute font-bold text-[180px] leading-none text-transparent select-none z-0"
          style={{ WebkitTextStroke: '2px rgba(255,255,255,0.03)' }}>
          DEV
        </div>
        <motion.div
          className="w-[280px] h-[280px] absolute z-10 border-[1px] border-dashed border-[#00E5FF]/40"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        />
        <motion.svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="z-10"
          animate={{ rotate: 360, scale: [1.05, 0.95, 1.05] }}
          transition={{ rotate: { duration: 30, ease: "linear", repeat: Infinity }, scale: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
        >
          <rect x="40" y="40" width="120" height="120" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.4" />
          <path d="M 60 140 L 140 60" stroke="#00E5FF" strokeWidth="3" />
        </motion.svg>
        <div className="absolute w-32 h-32 bg-white/[0.05] blur-[40px] rounded-full z-0" />
      </div>
    )
  },
  {
    id: "02",
    label: "02",
    title: "UI/UX Design",
    description: "Creating intuitive, beautiful interfaces that prioritize user experience—where every pixel, interaction, and detail matters to the overall brand.",
    graphics: (
      <div className="w-full h-full flex items-center justify-center relative">
        <div className="absolute font-bold text-[180px] leading-none text-transparent select-none z-0"
          style={{ WebkitTextStroke: '2px rgba(255,255,255,0.03)' }}>
          UX
        </div>
        <motion.div
          className="w-[280px] h-[280px] rounded-full border-[1px] border-white/20 absolute z-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          <div className="absolute top-[-4px] left-1/2 w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] -translate-x-1/2" />
        </motion.div>
        <motion.svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="z-10"
          animate={{ rotate: -360, scale: [0.95, 1.05, 0.95] }}
          transition={{ rotate: { duration: 40, ease: "linear", repeat: Infinity }, scale: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
        >
          <polygon points="100,20 180,150 20,150" stroke="#00E5FF" strokeWidth="1.5" fill="none" />
        </motion.svg>
        <div className="absolute w-32 h-32 bg-[#00E5FF]/[0.15] blur-[40px] rounded-full z-0" />
      </div>
    )
  },
  {
    id: "03",
    label: "03",
    title: "Machine Learning",
    description: "Developing intelligent models and data-driven solutions to solve complex problems, using Python and modern ML frameworks to uncover insights.",
    graphics: (
      <div className="w-full h-full flex items-center justify-center relative">
        <div className="absolute font-bold text-[180px] leading-none text-transparent select-none z-0"
          style={{ WebkitTextStroke: '2px rgba(255,255,255,0.03)' }}>
          ML
        </div>
        <motion.div
          className="w-[280px] h-[280px] absolute z-10 border-[1px] border-[#00E5FF]/40"
          style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        />
        <motion.div
          className="w-[260px] h-[260px] absolute z-10 border-[1px] border-[#FFFFFF]/20"
          style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        />
        <motion.div 
          className="absolute z-20 flex gap-4"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-3 h-3 rounded-full bg-[#00E5FF] shadow-[0_0_15px_#00E5FF]" />
          <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_15px_#FFFFFF]" />
          <div className="w-3 h-3 rounded-full bg-[#00E5FF] shadow-[0_0_15px_#00E5FF]" />
        </motion.div>
        <div className="absolute w-40 h-40 bg-[#FFFFFF]/[0.08] blur-[40px] rounded-full z-0" />
      </div>
    )
  },
];

const Expertise = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const variants = {
    enter: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
    center: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 1.05, filter: "blur(10px)" }
  };

  return (
    <section id="expertise" className="bg-[#0B0B0C] text-[#FFFFFF] py-24 md:py-32 lg:py-48 font-sans relative">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative flex flex-col lg:flex-row items-start gap-12 lg:gap-24">

        <div className="w-full lg:w-[45%] lg:sticky lg:top-32 hidden lg:flex flex-col mb-12 lg:mb-0 aspect-square lg:h-[600px] relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full flex items-center justify-center p-8 pointer-events-none"
            >
              {services[activeIndex].graphics}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-full lg:w-[55%] flex flex-col pb-[10vh]">
          <div
            className="lg:hidden text-[70px] leading-[0.9] font-bold tracking-tighter text-transparent mb-16 select-none opacity-80"
            style={{ WebkitTextStroke: '1.5px #00E5FF' }}
          >
            WHAT <br /> I DO
          </div>

          {services.map((svc, idx) => (
            <motion.div
              key={svc.id}
              onViewportEnter={() => setActiveIndex(idx)}
              viewport={{ margin: "-40% 0px -40% 0px" }}
              className={`min-h-[50vh] flex flex-col justify-center py-10 lg:py-20 ${idx === services.length - 1 ? 'lg:min-h-[70vh] lg:-mb-[20vh]' : ''}`}
            >

              <span
                className="text-[#00E5FF] font-bold uppercase tracking-widest text-sm mb-6 block drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]"
              >
                {svc.label}
              </span>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 drop-shadow-sm">
                {svc.title}
              </h2>

              <p className="text-[#EAEAEA] text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-12">
                {svc.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Expertise;


