import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Settings2, Database, GraduationCap, Rocket } from 'lucide-react';
import Reveal from './motion/Reveal';
import Marquee from './motion/Marquee';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'We map your workflows — sales, inventory, HR, finance — before a single doctype is touched.',
  },
  {
    icon: Settings2,
    title: 'Configure',
    description: 'ERPNext modules and custom Frappe apps are configured to match how your business actually runs.',
  },
  {
    icon: Database,
    title: 'Migrate',
    description: 'Clean data migration and integrations, from legacy spreadsheets to a single source of truth.',
  },
  {
    icon: GraduationCap,
    title: 'Train',
    description: 'Hands-on training so your team trusts the system on day one, not just the consultants.',
  },
  {
    icon: Rocket,
    title: 'Go Live',
    description: 'Launch with dedicated support on standby, then continuous optimization as you grow.',
  },
];

const apps = [
  'Frappe Framework',
  'ERPNext',
  'Frappe CRM',
  'Frappe HR',
  'Frappe Books',
  'Frappe Helpdesk',
  'Frappe Insights',
  'Frappe Drive',
  'Frappe LMS',
  'MariaDB',
  'Python',
  'Redis',
];

const FrappeEcosystem: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.75', 'end 0.4'],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative pt-24 pb-20 bg-ink-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(212,160,76,0.07),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Reveal>
            <span className="inline-block text-sm font-semibold tracking-widest text-gold-400 uppercase mb-4">
              How We Work
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              From First Call to <span className="text-accent">Go-Live</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-xl text-stone-400 max-w-3xl mx-auto">
              A proven five-step path we follow on every ERPNext and Frappe implementation
            </p>
          </Reveal>
        </div>

        {/* Scroll-driven pipeline */}
        <div ref={sectionRef} className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-9 left-0 right-0 h-[3px] bg-white/5 rounded-full">
            <motion.div
              className="h-full bg-gold-400 rounded-full origin-left shadow-glow-sm"
              style={{ scaleX: lineScale }}
            />
          </div>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={index * 0.1} direction="up">
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 w-[72px] h-[72px] rounded-full bg-ink-800 border border-white/10 shadow-glow-sm flex items-center justify-center mb-6">
                      <Icon className="text-gold-400" size={26} strokeWidth={1.75} />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold-300 text-ink-950 text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-stone-400 leading-relaxed max-w-[220px]">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Ecosystem marquee */}
        <div className="mt-24">
          <Reveal>
            <p className="text-center text-sm font-semibold tracking-widest text-gold-400 uppercase mb-8">
              Powered by the Frappe Ecosystem
            </p>
          </Reveal>
          <Marquee speed={26}>
            {apps.map((app) => (
              <span
                key={app}
                className="px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 text-stone-200 font-semibold whitespace-nowrap"
              >
                {app}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default FrappeEcosystem;
