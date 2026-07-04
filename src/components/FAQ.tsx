import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Reveal from './motion/Reveal';

const faqs = [
  {
    question: 'How long does a typical ERPNext implementation take?',
    answer:
      'Most single-entity implementations go live in 4-8 weeks, depending on the number of modules, how much data needs to be migrated, and how many custom workflows are involved. We scope an exact timeline during the discovery call before any work starts.',
  },
  {
    question: 'Can you migrate our data from Excel, QuickBooks, or Tally?',
    answer:
      'Yes. Clean data migration from spreadsheets and legacy accounting software into ERPNext is part of our standard implementation process, covered in the "Migrate" step of our five-step path.',
  },
  {
    question: 'Do you handle UAE VAT and corporate tax filing?',
    answer:
      'Yes, our accounting team handles VAT registration, quarterly VAT filing, and corporate tax filing for UAE-based entities, either standalone or bundled into the Complete Business Compliance & Automation Package.',
  },
  {
    question: "What's included in the Compliance & Automation Package?",
    answer:
      'ERPNext with the Accounting module, technical support, accounting supervision, quarterly VAT filing, corporate tax filing, and an annual financial audit — see the full breakdown on the Services page.',
  },
  {
    question: 'What happens after go-live?',
    answer:
      'We stay on for dedicated support after launch — answering user questions, tuning workflows as your team finds friction points, and handling ongoing ERPNext maintenance so you\'re never left configuring the system alone.',
  },
  {
    question: 'Do we need our own developer to run ERPNext day-to-day?',
    answer:
      "No. Our training step is built around getting your existing team confident using the system without needing an in-house developer. We remain available for anything that does need technical work.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-20 bg-ink-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(212,160,76,0.06),transparent)]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl text-stone-400 max-w-2xl mx-auto">
              Straight answers about how we work with ERPNext and Frappe
            </p>
          </Reveal>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={faq.question} delay={index * 0.05}>
                <div className="glow-border bg-white/[0.03] backdrop-blur-md rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/50 focus-visible:ring-inset"
                  >
                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 text-gold-400"
                    >
                      <ChevronDown size={22} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pt-1 pb-6 text-stone-400 leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
