import React from 'react';
import { Server, Calculator, Users, ShieldCheck, FileCheck2, Workflow, Landmark } from 'lucide-react';
import Reveal from './motion/Reveal';
import { StaggerGroup, StaggerItem } from './motion/Stagger';
import SpotlightCard from './motion/SpotlightCard';
import IconBadge from './motion/IconBadge';

interface ServicesProps {
  onRFQClick: (type: 'erp' | 'accounting') => void;
  onPackageClick: (type: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onPackageClick }) => {
  const erpServices = [
    {
      icon: <Server className="text-gold-400" size={24} strokeWidth={1.75} />,
      title: 'ERP Implementation',
      description: 'Complete ERPNext implementation tailored to your business needs'
    },
    {
      icon: <Users className="text-gold-400" size={24} strokeWidth={1.75} />,
      title: 'Training & Support',
      description: 'Comprehensive training programs and ongoing technical support'
    },
    {
      icon: <Workflow className="text-gold-400" size={24} strokeWidth={1.75} />,
      title: 'Business Process Optimization',
      description: 'Streamline operations and maximize efficiency across all departments'
    }
  ];

  const accountingServices = [
    {
      icon: <Calculator className="text-gold-400" size={24} strokeWidth={1.75} />,
      title: 'Bookkeeping & Accounting',
      description: 'Full-service bookkeeping and accounting supervision'
    },
    {
      icon: <FileCheck2 className="text-gold-400" size={24} strokeWidth={1.75} />,
      title: 'Tax Filing & Compliance',
      description: 'VAT registration, quarterly filing, and corporate tax services'
    },
    {
      icon: <ShieldCheck className="text-gold-400" size={24} strokeWidth={1.75} />,
      title: 'Financial Audits',
      description: 'Annual financial audits and compliance reporting'
    },
    {
      icon: <Landmark className="text-gold-400" size={24} strokeWidth={1.75} />,
      title: 'CFO Services',
      description: 'Strategic financial leadership and advisory services'
    }
  ];

  return (
    <section className="relative pt-24 pb-20 bg-ink-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(212,160,76,0.07),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 mt-8">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-accent">Services</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl text-stone-400 max-w-3xl mx-auto">
              Comprehensive solutions for your business transformation and financial management needs
            </p>
          </Reveal>
        </div>

        {/* Special Package Offer - bold solid block, no gradient */}
        <Reveal className="mb-20">
          <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 text-center bg-gold-300 shadow-glow-gold">
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-ink-950">
                Complete Business Compliance &amp; Automation Package
              </h3>
              <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8" stagger={0.08}>
                {[
                  'ERPNext with Accounting Module',
                  'Technical Support',
                  'Accounting Supervision',
                  'Quarterly VAT Filing',
                  'Corporate Tax Filing',
                  'Annual Financial Audit',
                ].map((text) => (
                  <StaggerItem key={text}>
                    <div className="bg-ink-950/15 border border-ink-950/25 rounded-xl p-4 h-full">
                      <p className="font-semibold text-ink-950">{text}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
              <button
                onClick={() => onPackageClick('Complete Business Compliance & Automation Package')}
                className="bg-ink-950 text-gold-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-ink-900 transition-colors shadow-lg transform hover:scale-105"
              >
                Get This Package
              </button>
            </div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* ERP Services */}
          <Reveal direction="left">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">ERP Services</h3>
            <StaggerGroup className="space-y-6" stagger={0.1}>
              {erpServices.map((service) => (
                <StaggerItem key={service.title}>
                  <SpotlightCard className="p-6" spotlightColor="rgba(212, 160, 76, 0.16)">
                    <div className="flex items-start gap-4">
                      <IconBadge>{service.icon}</IconBadge>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">
                          {service.title}
                        </h4>
                        <p className="text-stone-400">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <div className="text-center mt-8">
              <button
                onClick={() => onPackageClick('ERP Services')}
                className="bg-ink-950 hover:bg-ink-900 text-gold-400 border border-gold-500/40 hover:border-gold-400/60 px-8 py-3 rounded-full font-semibold transition-colors duration-300 shadow-glow-gold transform hover:scale-105"
              >
                Request ERP Quote
              </button>
            </div>
          </Reveal>

          {/* Accounting Services */}
          <Reveal direction="right" delay={0.1}>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Accounting &amp; Bookkeeping</h3>
            <StaggerGroup className="space-y-6" stagger={0.1}>
              {accountingServices.map((service) => (
                <StaggerItem key={service.title}>
                  <SpotlightCard className="p-6" spotlightColor="rgba(212, 160, 76, 0.16)">
                    <div className="flex items-start gap-4">
                      <IconBadge>{service.icon}</IconBadge>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">
                          {service.title}
                        </h4>
                        <p className="text-stone-400">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <div className="text-center mt-8">
              <button
                onClick={() => onPackageClick('Accounting Services')}
                className="border-2 border-gold-500 hover:bg-gold-500/10 text-gold-400 px-8 py-3 rounded-full font-semibold transition-colors duration-300 transform hover:scale-105"
              >
                Request Accounting Quote
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Services;
