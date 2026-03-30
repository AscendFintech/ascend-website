import React from 'react';
import { Users, Award, BookOpen } from 'lucide-react';

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
    },
    {
      name: 'Partner',
      role: 'Managing Partner',
      expertise: 'Audit & Accounting Specialist',
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '7+ Years Experience in Audit & Accounting'
    },
    {
      name: 'Developer',
      role: 'ERP Stack Developer',
      expertise: 'Development & Server Management',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '8+ Years Experience in development and server'
    }
  ];

  return (
    <section className="pt-24 pb-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up mt-8">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-6">
            Our Expert Team
          </h2>
          <p className="text-xl text-sky-700 max-w-3xl mx-auto">
            Meet the professionals dedicated to your business success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-sky-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="text-xl font-bold text-sky-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-sky-600 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-sky-500 mb-3 font-medium">
                  {member.expertise}
                </p>
                <p className="text-sm text-sky-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-sky-100">
            <Users className="text-sky-500 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-sky-800 mb-2">15+</h3>
            <p className="text-sky-600">Successful Implementations</p>
          </div>

          <div className="text-center bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-sky-100">
            <Award className="text-sky-500 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-sky-800 mb-2">15+</h3>
            <p className="text-sky-600">Years Combined Experience</p>
          </div>

          <div className="text-center bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-sky-100">
            <BookOpen className="text-sky-500 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-sky-800 mb-2">50+</h3>
            <p className="text-sky-600">Training Sessions Delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
