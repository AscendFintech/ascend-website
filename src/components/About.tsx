import React from 'react';
import { Target, Eye, Check } from 'lucide-react';
import Reveal from './motion/Reveal';
import { StaggerGroup, StaggerItem } from './motion/Stagger';
import SpotlightCard from './motion/SpotlightCard';
import IconBadge from './motion/IconBadge';

const About: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 bg-ink-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(212,160,76,0.07),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 mt-8">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-accent">Ascend Fintech</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl text-stone-400 max-w-3xl mx-auto">
              Empowering businesses through digital transformation and financial excellence
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <Reveal direction="left">
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-lg text-stone-400 mb-6 leading-relaxed">
              Ascend Fintech LLC was founded with a vision to bridge the gap between
              traditional business operations and modern digital solutions. We recognized
              that many enterprises struggle with outdated systems and complex financial
              processes that hinder their growth potential.
            </p>
            <p className="text-lg text-stone-400 leading-relaxed">
              Our team of experienced professionals combines deep technical expertise
              in ERP systems with comprehensive accounting knowledge to deliver
              integrated solutions that drive real business results.
            </p>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div className="glow-border bg-white/[0.03] backdrop-blur-md rounded-3xl p-8">
              <h4 className="text-2xl font-bold text-white mb-6 text-center">
                Why Choose Ascend Fintech?
              </h4>
              <StaggerGroup className="space-y-4" stagger={0.1}>
                {[
                  'Industry-leading expertise in ERP and accounting',
                  'Client-first approach with dedicated support',
                  'Proven track record across multiple industries',
                  'Comprehensive end-to-end solutions',
                ].map((text) => (
                  <StaggerItem key={text} direction="none">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center">
                        <Check className="text-gold-400" size={12} strokeWidth={3} />
                      </span>
                      <span className="text-stone-300">{text}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </Reveal>
        </div>

        <StaggerGroup className="grid md:grid-cols-2 gap-8" stagger={0.15}>
          <StaggerItem>
            <SpotlightCard className="p-8 text-center h-full" spotlightColor="rgba(212, 160, 76, 0.18)">
              <IconBadge size="lg" className="mx-auto mb-4">
                <Target className="text-gold-400" size={26} strokeWidth={1.75} />
              </IconBadge>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-stone-400 leading-relaxed">
                To empower businesses through seamless digital transformation,
                providing integrated ERP and accounting solutions that drive
                efficiency, compliance, and sustainable growth.
              </p>
            </SpotlightCard>
          </StaggerItem>

          <StaggerItem>
            <SpotlightCard className="p-8 text-center h-full" spotlightColor="rgba(212, 160, 76, 0.18)">
              <IconBadge size="lg" className="mx-auto mb-4">
                <Eye className="text-gold-400" size={26} strokeWidth={1.75} />
              </IconBadge>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-stone-400 leading-relaxed">
                To be the leading partner for businesses seeking comprehensive
                digital transformation, known for our expertise, reliability,
                and commitment to client success.
              </p>
            </SpotlightCard>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
};

export default About;
