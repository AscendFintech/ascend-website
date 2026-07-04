import React from 'react';
import { Users, Coffee, HeartHandshake } from 'lucide-react';
import Reveal from './motion/Reveal';
import { StaggerGroup, StaggerItem } from './motion/Stagger';
import SpotlightCard from './motion/SpotlightCard';
import IconBadge from './motion/IconBadge';

const Careers: React.FC = () => {
  const benefits = [
    {
      icon: <HeartHandshake className="text-rose-400" size={24} strokeWidth={1.75} />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: <Coffee className="text-amber-400" size={24} strokeWidth={1.75} />,
      title: 'Work-Life Balance',
      description: 'Flexible hours and remote work opportunities'
    },
    {
      icon: <Users className="text-gold-400" size={24} strokeWidth={1.75} />,
      title: 'Professional Growth',
      description: 'Continuous learning and career development opportunities'
    }
  ];

  return (
    <section className="relative pt-24 pb-20 bg-ink-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(212,160,76,0.07),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 mt-8">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our <span className="text-accent">Team</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl text-stone-400 max-w-3xl mx-auto">
              Build your career with a growing fintech company that values innovation and excellence
            </p>
          </Reveal>
        </div>

        {/* Company Culture */}
        <div className="mb-16">
          <Reveal>
            <h3 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h3>
          </Reveal>
          <StaggerGroup className="grid md:grid-cols-3 gap-8" stagger={0.12}>
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <SpotlightCard className="p-6 text-center h-full">
                  <IconBadge className="mx-auto mb-4">
                    {benefit.icon}
                  </IconBadge>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-stone-400">
                    {benefit.description}
                  </p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        {/* Open Positions */}
        <Reveal className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Current Openings</h3>
          <div className="glow-border bg-white/[0.03] backdrop-blur-md rounded-2xl p-8 md:p-12">
            <h4 className="text-2xl font-bold text-white mb-4">
              No Open Positions Currently
            </h4>
            <p className="text-stone-300 text-lg mb-6">
              We're not actively hiring at the moment, but we're always interested in connecting with talented professionals.
            </p>
            <p className="text-stone-400">
              Feel free to send us your resume for future opportunities.
            </p>
          </div>
        </Reveal>

        {/* Application CTA - bold solid block, no gradient */}
        <Reveal className="text-center mt-16">
          <div className="relative overflow-hidden rounded-2xl p-8 bg-gold-300 shadow-glow-gold">
            <h3 className="text-2xl font-bold mb-4 text-ink-950">
              Don't see the right position?
            </h3>
            <p className="text-lg mb-6 text-ink-950/80">
              We're always looking for talented individuals to join our growing team.
            </p>
            <a
              href="mailto:info@ascendfintech.com"
              className="inline-block bg-ink-950 text-gold-400 px-8 py-3 rounded-full font-semibold hover:bg-ink-900 transition-colors"
            >
              Send Us Your Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Careers;
