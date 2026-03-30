import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  onSectionChange: (section: string) => void;
  onRFQClick: (type: 'erp' | 'accounting') => void;
  onPackageClick: (type: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onSectionChange, onPackageClick }) => {
  return (
    <footer className="bg-gradient-to-br from-sky-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Ascend Fintech LLC</h3>
            <p className="text-sky-100 mb-4 font-light">
              Smart accounting, Seamless ERP
            </p>
            <p className="text-sky-200 leading-relaxed">
              Empowering businesses through digital transformation and
              comprehensive financial solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'team', label: 'Our Team' },
                { id: 'careers', label: 'Careers' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onSectionChange(link.id)}
                    className="text-sky-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Request Quote */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Request Quote</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onPackageClick('ERP Services')}
                  className="text-sky-200 hover:text-white transition-colors"
                >
                  ERP Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onPackageClick('Accounting Services')}
                  className="text-sky-200 hover:text-white transition-colors"
                >
                  Accounting Services
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="text-sky-300 flex-shrink-0 mt-1" size={16} />
                <span className="text-sky-200">
                  SHAMS, Al Messaned,<br />
                  Al Bataeh, Sharjah<br />
                  United Arab Emirates
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-sky-300 flex-shrink-0" size={16} />
                <div className="text-sky-200">
                  <div>+971 565605017</div>
                  <div>+971 544589936</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-sky-300 flex-shrink-0" size={16} />
                <a href="mailto:info@ascendfntech.com" className="text-sky-200 hover:text-white transition-colors">
                  info@ascendfntech.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="text-sky-300 hover:text-white transition-colors p-2 rounded-full hover:bg-sky-800">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-sky-300 hover:text-white transition-colors p-2 rounded-full hover:bg-sky-800">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-sky-300 hover:text-white transition-colors p-2 rounded-full hover:bg-sky-800">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-sky-300 hover:text-white transition-colors p-2 rounded-full hover:bg-sky-800">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sky-700 mt-12 pt-8 text-center">
          <p className="text-sky-200">
            &copy; 2025 Ascend Fintech LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
