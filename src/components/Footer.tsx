import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  onSectionChange: (section: string) => void;
  onRFQClick: (type: 'erp' | 'accounting') => void;
  onPackageClick: (type: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onSectionChange, onPackageClick }) => {
  return (
    <footer className="relative bg-ink-950 text-white overflow-hidden">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(212,160,76,0.06),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">Ascend Fintech LLC</h3>
            <p className="text-stone-300 mb-4 font-light">
              Smart accounting, Seamless ERP
            </p>
            <p className="text-stone-400 leading-relaxed">
              Empowering businesses through digital transformation and
              comprehensive financial solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'case-studies', label: 'Case Studies' },
                { id: 'team', label: 'Our Team' },
                { id: 'careers', label: 'Careers' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onSectionChange(link.id)}
                    className="text-stone-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Request Quote */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Request Quote</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onPackageClick('ERP Services')}
                  className="text-stone-400 hover:text-gold-400 transition-colors"
                >
                  ERP Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onPackageClick('Accounting Services')}
                  className="text-stone-400 hover:text-gold-400 transition-colors"
                >
                  Accounting Services
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="text-gold-400 flex-shrink-0 mt-1" size={16} />
                <span className="text-stone-400">
                  SHAMS, Al Messaned,<br />
                  Al Bataeh, Sharjah<br />
                  United Arab Emirates
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-gold-400 flex-shrink-0" size={16} />
                <div className="text-stone-400">
                  <div>+971 565605017</div>
                  <div>+971 544589936</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-gold-400 flex-shrink-0" size={16} />
                <a href="mailto:info@ascendfintech.com" className="text-stone-400 hover:text-gold-400 transition-colors">
                  info@ascendfintech.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-white">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="text-stone-400 hover:text-white transition-colors p-2 rounded-full border border-white/10 hover:border-gold-400/50 hover:bg-white/5">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-stone-400 hover:text-white transition-colors p-2 rounded-full border border-white/10 hover:border-gold-400/50 hover:bg-white/5">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-stone-400 hover:text-white transition-colors p-2 rounded-full border border-white/10 hover:border-gold-400/50 hover:bg-white/5">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-stone-400 hover:text-white transition-colors p-2 rounded-full border border-white/10 hover:border-gold-400/50 hover:bg-white/5">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-stone-500">
            &copy; 2025 Ascend Fintech LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
