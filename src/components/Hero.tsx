import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface HeroProps {
  onRFQClick: (type: 'erp' | 'accounting') => void;
  onPackageClick: (type: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onPackageClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100">
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-sky-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-200/30 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up mt-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-sky-900 mb-6 leading-tight">
            Digital Transformation
            <span className="block text-sky-600">Made Simple</span>
          </h1>

          <p className="text-xl md:text-2xl text-sky-700 mb-8 max-w-3xl mx-auto font-light">
            Comprehensive ERP implementation, support, and accounting services
            tailored for modern business growth
          </p>

          {/* Service highlights */}
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
            <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
              <h3 className="text-2xl font-semibold text-sky-800 mb-4">ERP Solutions</h3>
              <ul className="space-y-2 text-sky-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  ERPNext &amp; Odoo Implementation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  Dedicated Support &amp; Training
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  Industry-Specific Solutions
                </li>
              </ul>
            </div>

            <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
              <h3 className="text-2xl font-semibold text-sky-800 mb-4">Accounting Services</h3>
              <ul className="space-y-2 text-sky-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  Full-Service Bookkeeping
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  VAT &amp; Tax Filing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  Annual Financial Audits
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onPackageClick('ERP Package')}
              className="group bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Request ERP Quote
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>

            <button
              onClick={() => onPackageClick('Accounting Package')}
              className="group bg-white/80 backdrop-blur-md hover:bg-white text-sky-600 hover:text-sky-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 border border-sky-200"
            >
              Request Accounting Quote
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
