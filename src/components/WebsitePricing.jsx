import React from 'react';
import { motion } from 'framer-motion';

const service = {
  name: 'Website Development',
  description:
    'Custom websites built for your brand — from landing pages to multi-page business sites, tailored to your goals and timeline.',
  features: [
    'Responsive design',
    'Custom UI & layout',
    'Contact forms & integrations',
    'SEO-friendly structure',
    'Performance optimized',
    'Revision rounds included',
  ],
};

const scrollToContact = () => {
  const el = document.getElementById('contact');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const WebsitePricing = () => {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-[#0B0B0C] text-[#FFFFFF] font-sans overflow-hidden"
    >
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00E5FF]/[0.04] blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#00E5FF]/20 to-transparent pointer-events-none"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        style={{ transformOrigin: 'top' }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1A1A1D] to-transparent pointer-events-none"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        style={{ transformOrigin: 'left' }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-[#00E5FF] font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            ✦ What I Offer
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Website Services
          </h2>
          <p className="text-[#A1A1AA] text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
            Tell me about your project and I&apos;ll build a site that fits your needs.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-col p-8 md:p-12 max-w-2xl mx-auto rounded-sm border border-[#00E5FF]/50 bg-[#111]/80 shadow-[0_0_40px_rgba(0,229,255,0.08)]"
        >
          <h3 className="text-xl md:text-2xl font-semibold tracking-wide uppercase mb-3 text-center">
            {service.name}
          </h3>
          <p className="text-[#A1A1AA] text-sm md:text-base font-light leading-relaxed mb-8 text-center">
            {service.description}
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm text-[#EAEAEA] font-light"
              >
                <span className="text-[#00E5FF] mt-0.5 shrink-0">✦</span>
                {feature}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={scrollToContact}
            className="w-full py-3 text-xs uppercase tracking-[0.25em] font-medium bg-[#00E5FF] text-[#0B0B0C] hover:bg-[#00C8FF] transition-colors duration-300"
          >
            Contact Me
          </button>
        </motion.article>
      </div>
    </section>
  );
};

export default WebsitePricing;
