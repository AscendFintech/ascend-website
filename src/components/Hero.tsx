import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { StaggerGroup, StaggerItem } from './motion/Stagger';

interface HeroProps {
  onRFQClick: (type: 'erp' | 'accounting') => void;
  onPackageClick: (type: string) => void;
}

const line1 = ['Digital', 'Transformation'];

const Hero: React.FC<HeroProps> = ({ onPackageClick }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 bg-ink-950">
      {/* Warm, restrained backdrop - single-hue glow, no rainbow aurora, no grid cliche */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_35%,rgba(212,160,76,0.1),transparent)]" />
        <motion.div
          style={{ y: blobY1 }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] bg-gold-500/10 rounded-full blur-[130px] animate-aurora-slow"
        />
        <motion.div
          style={{ y: blobY2 }}
          className="absolute bottom-0 right-[8%] w-[20rem] h-[20rem] bg-gold-600/10 rounded-full blur-[110px] animate-aurora-slower"
        />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-sm font-medium text-gold-300 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          ERPNext &amp; Frappe Framework Partner
        </motion.span>

        <div className="mt-2">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] tracking-tight">
            <span className="block overflow-hidden pb-1 text-white">
              {line1.map((word, i) => (
                <motion.span
                  key={word}
                  className="inline-block mr-[0.3em]"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.6, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="inline-block text-accent"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                Made Simple
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-lg md:text-xl text-stone-400 mb-10 max-w-2xl mx-auto font-light"
          >
            Comprehensive ERP implementation, support, and accounting services
            tailored for modern business growth
          </motion.p>

          {/* Service highlights */}
          <StaggerGroup
            className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10"
            delayChildren={0.7}
            stagger={0.15}
          >
            <StaggerItem direction="left">
              <div className="glow-border bg-white/[0.03] backdrop-blur-md rounded-2xl p-6 h-full text-left">
                <h3 className="text-xl font-semibold text-white mb-4">ERP Solutions</h3>
                <ul className="space-y-2 text-stone-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-gold-400 flex-shrink-0" size={20} />
                    ERPNext Implementation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-gold-400 flex-shrink-0" size={20} />
                    Dedicated Support &amp; Training
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-gold-400 flex-shrink-0" size={20} />
                    Industry-Specific Solutions
                  </li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem direction="right">
              <div className="glow-border bg-white/[0.03] backdrop-blur-md rounded-2xl p-6 h-full text-left">
                <h3 className="text-xl font-semibold text-white mb-4">Accounting Services</h3>
                <ul className="space-y-2 text-stone-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-gold-400 flex-shrink-0" size={20} />
                    Full-Service Bookkeeping
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-gold-400 flex-shrink-0" size={20} />
                    VAT &amp; Tax Filing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-gold-400 flex-shrink-0" size={20} />
                    Annual Financial Audits
                  </li>
                </ul>
              </div>
            </StaggerItem>
          </StaggerGroup>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onPackageClick('ERP Package')}
              className="group bg-ink-950 hover:bg-ink-900 text-gold-400 border border-gold-500/40 hover:border-gold-400/60 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 shadow-glow-gold flex items-center justify-center gap-2"
            >
              Request ERP Quote
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onPackageClick('Accounting Package')}
              className="group bg-white/[0.04] backdrop-blur-md hover:bg-white/[0.08] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 border border-white/10"
            >
              Request Accounting Quote
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
