import React from 'react';
import { Server, Calculator, Users, Shield, FileText, TrendingUp } from 'lucide-react';

interface ServicesProps {
  onRFQClick: (type: 'erp' | 'accounting') => void;
  onPackageClick: (type: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onPackageClick }) => {
  const erpServices = [
    {
      icon: <Server className="text-sky-500" size={32} />,
      title: 'ERP Implementation',
      description: 'Complete ERPNext and Odoo implementation tailored to your business needs'
    },
    {
      icon: <Users className="text-sky-500" size={32} />,
      title: 'Training & Support',
      description: 'Comprehensive training programs and ongoing technical support'
    },
    {
      icon: <TrendingUp className="text-sky-500" size={32} />,
      title: 'Business Process Optimization',
      description: 'Streamline operations and maximize efficiency across all departments'
    }
  ];

  const accountingServices = [
    {
      icon: <Calculator className="text-green-500" size={32} />,
      title: 'Bookkeeping & Accounting',
      description: 'Full-service bookkeeping and accounting supervision'
    },
    {
      icon: <FileText className="text-green-500" size={32} />,
      title: 'Tax Filing & Compliance',
      description: 'VAT registration, quarterly filing, and corporate tax services'
    },
    {
      icon: <Shield className="text-green-500" size={32} />,
      title: 'Financial Audits',
      description: 'Annual financial audits and compliance reporting'
    },
    {
      icon: <TrendingUp className="text-green-500" size={32} />,
      title: 'CFO Services',
      description: 'Strategic financial leadership and advisory services'
    }
  ];

  return (
    <section className="pt-24 pb-20 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up mt-8">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-sky-700 max-w-3xl mx-auto">
            Comprehensive solutions for your business transformation and financial management needs
          </p>
        </div>

        {/* Special Package Offer */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Complete Business Compliance &amp; Automation Package
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-4">
                <p className="font-semibold">ERPNext with Accounting Module</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-4">
                <p className="font-semibold">Technical Support</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-4">
                <p className="font-semibold">Accounting Supervision</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-4">
                <p className="font-semibold">Quarterly VAT Filing</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-4">
                <p className="font-semibold">Corporate Tax Filing</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-4">
                <p className="font-semibold">Annual Financial Audit</p>
              </div>
            </div>
            <button
              onClick={() => onPackageClick('Complete Business Compliance & Automation Package')}
              className="bg-white text-sky-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-105"
            >
              Get This Package
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* ERP Services */}
          <div className="animate-fade-in-left">
            <h3 className="text-3xl font-bold text-sky-800 mb-8 text-center">ERP Services</h3>
            <div className="space-y-6">
              {erpServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-sky-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-sky-800 mb-2">
                        {service.title}
                      </h4>
                      <p className="text-sky-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button
                onClick={() => onPackageClick('ERP Services')}
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Request ERP Quote
              </button>
            </div>
          </div>

          {/* Accounting Services */}
          <div className="animate-fade-in-right">
            <h3 className="text-3xl font-bold text-green-700 mb-8 text-center">Accounting &amp; Bookkeeping</h3>
            <div className="space-y-6">
              {accountingServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-green-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-green-700 mb-2">
                        {service.title}
                      </h4>
                      <p className="text-green-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button
                onClick={() => onPackageClick('Accounting Services')}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Request Accounting Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
