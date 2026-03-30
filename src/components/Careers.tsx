import React from 'react';
import { Users, Coffee, Heart } from 'lucide-react';

const Careers: React.FC = () => {
  const benefits = [
    {
      icon: <Heart className="text-red-500" size={32} />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: <Coffee className="text-amber-500" size={32} />,
      title: 'Work-Life Balance',
      description: 'Flexible hours and remote work opportunities'
    },
    {
      icon: <Users className="text-blue-500" size={32} />,
      title: 'Professional Growth',
      description: 'Continuous learning and career development opportunities'
    }
  ];

  return (
    <section className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up mt-8">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-sky-700 max-w-3xl mx-auto">
            Build your career with a growing fintech company that values innovation and excellence
          </p>
        </div>

        {/* Company Culture */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-sky-800 text-center mb-12">Why Work With Us?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-sky-100 text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-semibold text-sky-800 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-sky-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-sky-800 mb-8">Current Openings</h3>
          <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-lg border border-sky-100">
            <h4 className="text-2xl font-bold text-sky-800 mb-4">
              No Open Positions Currently
            </h4>
            <p className="text-sky-700 text-lg mb-6">
              We're not actively hiring at the moment, but we're always interested in connecting with talented professionals.
            </p>
            <p className="text-sky-600">
              Feel free to send us your resume for future opportunities.
            </p>
          </div>
        </div>

        {/* Application CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Don't see the right position?
            </h3>
            <p className="text-lg mb-6">
              We're always looking for talented individuals to join our growing team.
            </p>
            <a
              href="mailto:info@ascendfntech.com"
              className="inline-block bg-white text-sky-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Send Us Your Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
