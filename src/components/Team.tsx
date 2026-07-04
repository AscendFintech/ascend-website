import React from 'react';
import { Users, Trophy, BookOpen } from 'lucide-react';
import Reveal from './motion/Reveal';
import { StaggerGroup, StaggerItem } from './motion/Stagger';
import Counter from './motion/Counter';
import SpotlightCard from './motion/SpotlightCard';
import IconBadge from './motion/IconBadge';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Arun Soman',
      role: 'Founder & Managing Partner',
      expertise: 'ERP Functional Consultant',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '10+ years experience in Accounting & ERP implementation'
    },
    {
      name: 'Gaushel Malarasu Kalaiselvi',
      role: 'Manager & Managing Partner',
      expertise: 'Chief Sales Officer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '5+ Years Experience in Sales & Marketing'
    }
  ];

  return (
    <section className="relative pt-24 pb-20 bg-ink-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(212,160,76,0.07),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 mt-8">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Expert <span className="text-accent">Team</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl text-stone-400 max-w-3xl mx-auto">
              Meet the professionals dedicated to your business success
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="grid md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto" stagger={0.1}>
          {teamMembers.map((member) => (
            <StaggerItem key={member.name}>
              <SpotlightCard className="p-6 h-full">
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-2 ring-white/10"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-stone-200 font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gold-400 mb-3 font-medium uppercase tracking-wide">
                    {member.expertise}
                  </p>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <StaggerGroup className="grid md:grid-cols-3 gap-8" stagger={0.15}>
          <StaggerItem>
            <div className="text-center glow-border bg-white/[0.03] backdrop-blur-md rounded-2xl p-8 h-full">
              <IconBadge size="lg" className="mx-auto mb-4">
                <Users className="text-gold-400" size={26} strokeWidth={1.75} />
              </IconBadge>
              <h3 className="text-3xl font-bold text-accent mb-2">
                <Counter to={15} suffix="+" />
              </h3>
              <p className="text-stone-400">Successful Implementations</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="text-center glow-border bg-white/[0.03] backdrop-blur-md rounded-2xl p-8 h-full">
              <IconBadge size="lg" className="mx-auto mb-4">
                <Trophy className="text-gold-400" size={26} strokeWidth={1.75} />
              </IconBadge>
              <h3 className="text-3xl font-bold text-accent mb-2">
                <Counter to={15} suffix="+" />
              </h3>
              <p className="text-stone-400">Years Combined Experience</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="text-center glow-border bg-white/[0.03] backdrop-blur-md rounded-2xl p-8 h-full">
              <IconBadge size="lg" className="mx-auto mb-4">
                <BookOpen className="text-gold-400" size={26} strokeWidth={1.75} />
              </IconBadge>
              <h3 className="text-3xl font-bold text-accent mb-2">
                <Counter to={50} suffix="+" />
              </h3>
              <p className="text-stone-400">Training Sessions Delivered</p>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
};

export default Team;
