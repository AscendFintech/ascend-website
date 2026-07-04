import React from 'react';
import { Quote } from 'lucide-react';
import Reveal from './motion/Reveal';

const Testimonials: React.FC = () => {
  return (
    <section className="relative py-20 bg-ink-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(212,160,76,0.06),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="text-accent">Clients Say</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl text-stone-400 max-w-3xl mx-auto">
              Discover how we've helped businesses achieve their goals
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative max-w-4xl mx-auto">
          <div className="glow-border bg-white/[0.03] backdrop-blur-md rounded-3xl p-8 md:p-12">
            <Quote className="text-gold-400 mx-auto mb-8" size={48} />

            <div className="text-center">
              <p className="text-xl md:text-2xl text-white mb-6 font-light leading-relaxed">
                "Our processes have become so much smoother and fully digitalized, all thanks to Ascend Fintech."
              </p>

              <div className="flex items-center justify-center gap-3">
                <span className="w-10 h-10 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400 font-semibold">
                  V
                </span>
                <span className="text-stone-300 font-semibold">Vivek</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
