import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-100 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-sky-700 max-w-3xl mx-auto">
            Discover how we've helped businesses achieve their goals
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <Quote className="text-sky-400 mx-auto mb-8" size={48} />

            <div className="text-center">
              <p className="text-xl md:text-2xl text-sky-800 mb-6 font-light leading-relaxed">
                Client testimonials will be displayed here once available.
              </p>

              <p className="text-sky-600 text-lg">
                We're building relationships with our clients and will showcase their feedback here soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
