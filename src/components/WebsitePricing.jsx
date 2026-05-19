import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Landing Page',
    price: '₹8,000',
    range: 'starting from',
    description: 'A single-page site to showcase your brand, product, or personal profile.',
    features: [
      'Responsive design',
      'Contact form',
      'Basic SEO setup',
      '1 revision round',
      'Delivery in 5–7 days',
    ],
    highlighted: false,
  },
  {
    name: 'Business Website',
    price: '₹18,000',
    range: 'starting from',
    description: 'Multi-page website for startups and small businesses that need a professional online presence.',
    features: [
      'Up to 5 pages',
      'Custom UI design',
      'CMS or admin panel',
      'Performance optimized',
      '2 revision rounds',
      'Delivery in 2–3 weeks',
    ],
    highlighted: true,
  },
];

const scrollToContact = () => {
  const el = document.getElementById('contact');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const WebsitePricing = () => {
  return (
    <section
      id="pricing"
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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-[#1A1A1D] pb-10 md:pb-14 mb-14 md:mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#00E5FF] font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4"
            >
              ✦ Services & Pricing
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Website Creation Cost
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#A1A1AA] text-sm md:text-base max-w-md leading-relaxed font-light"
          >
            Transparent pricing for every project size. Final cost depends on features,
            content, and timeline — get a custom quote anytime.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {plans.map((plan) => (
            <motion.article
              key={plan.name}
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col p-8 md:p-10 rounded-sm border transition-colors duration-300 ${
                plan.highlighted
                  ? 'border-[#00E5FF]/50 bg-[#111]/80 shadow-[0_0_40px_rgba(0,229,255,0.08)]'
                  : 'border-[#1A1A1D] bg-[#111]/40 hover:border-[#00E5FF]/25'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-8 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-[#00E5FF] text-[#0B0B0C]">
                  Popular
                </span>
              )}

              <h3 className="text-lg md:text-xl font-semibold tracking-wide uppercase mb-2">
                {plan.name}
              </h3>
              <p className="text-[#A1A1AA] text-sm font-light leading-relaxed mb-6 min-h-[3rem]">
                {plan.description}
              </p>

              <motion.div
                className="mb-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#A1A1AA] block mb-1">
                  {plan.range}
                </span>
                <span
                  className={`text-4xl md:text-5xl font-bold tracking-tight ${
                    plan.highlighted ? 'text-[#00E5FF]' : 'text-white'
                  }`}
                >
                  {plan.price}
                </span>
              </motion.div>

              <ul className="flex-1 space-y-3 mb-10">
                {plan.features.map((feature) => (
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
                className={`w-full py-3 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-[#00E5FF] text-[#0B0B0C] hover:bg-[#00C8FF]'
                    : 'border border-[#A1A1AA]/40 text-[#EAEAEA] hover:border-[#00E5FF] hover:text-[#00E5FF]'
                }`}
              >
                Get a Quote
              </button>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WebsitePricing;
