import React from 'react';
import { Target, Eye, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up mt-8">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-6">
            About Ascend Fintech LLC
          </h2>
          <p className="text-xl text-sky-700 max-w-3xl mx-auto">
            Empowering businesses through digital transformation and financial excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-fade-in-left">
            <h3 className="text-3xl font-bold text-sky-800 mb-6">Our Story</h3>
            <p className="text-lg text-sky-600 mb-6 leading-relaxed">
              Ascend Fintech LLC was founded with a vision to bridge the gap between
              traditional business operations and modern digital solutions. We recognized
              that many enterprises struggle with outdated systems and complex financial
              processes that hinder their growth potential.
            </p>
            <p className="text-lg text-sky-600 leading-relaxed">
              Our team of experienced professionals combines deep technical expertise
              in ERP systems with comprehensive accounting knowledge to deliver
              integrated solutions that drive real business results.
            </p>
          </div>

          <div className="animate-fade-in-right">
            <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-3xl p-8 shadow-xl">
              <h4 className="text-2xl font-bold text-sky-800 mb-6 text-center">
                Why Choose Ascend Fintech?
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Award className="text-sky-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-sky-700">Industry-leading expertise in ERP and accounting</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="text-sky-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-sky-700">Client-first approach with dedicated support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="text-sky-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-sky-700">Proven track record across multiple industries</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="text-sky-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-sky-700">Comprehensive end-to-end solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-sky-100 text-center transform hover:scale-105 transition-all duration-300">
            <Target className="text-sky-500 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-sky-800 mb-4">Our Mission</h3>
            <p className="text-sky-600 leading-relaxed">
              To empower businesses through seamless digital transformation,
              providing integrated ERP and accounting solutions that drive
              efficiency, compliance, and sustainable growth.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-sky-100 text-center transform hover:scale-105 transition-all duration-300">
            <Eye className="text-sky-500 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-sky-800 mb-4">Our Vision</h3>
            <p className="text-sky-600 leading-relaxed">
              To be the leading partner for businesses seeking comprehensive
              digital transformation, known for our expertise, reliability,
              and commitment to client success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
