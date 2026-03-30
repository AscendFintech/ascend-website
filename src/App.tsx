import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Careers from './components/Careers';
import Footer from './components/Footer';
import RFQModal from './components/RFQModal';
import PackageRequestModal from './components/PackageRequestModal';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isRFQOpen, setIsRFQOpen] = useState(false);
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
  const [packageType, setPackageType] = useState('');
  const [rfqType, setRfqType] = useState<'erp' | 'accounting'>('erp');

  const handleRFQClick = (type: 'erp' | 'accounting') => {
    setRfqType(type);
    setIsRFQOpen(true);
  };

  const handlePackageClick = (type: string) => {
    setPackageType(type);
    setIsPackageModalOpen(true);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Hero onRFQClick={handleRFQClick} onPackageClick={handlePackageClick} />
            <Services onRFQClick={handleRFQClick} onPackageClick={handlePackageClick} />
            <Testimonials />
          </>
        );
      case 'about':
        return <About />;
      case 'services':
        return <Services onRFQClick={handleRFQClick} onPackageClick={handlePackageClick} />;
      case 'team':
        return <Team />;
      case 'careers':
        return <Careers />;
      default:
        return (
          <>
            <Hero onRFQClick={handleRFQClick} onPackageClick={handlePackageClick} />
            <Services onRFQClick={handleRFQClick} onPackageClick={handlePackageClick} />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />

      <main>
        {renderSection()}
      </main>

      <Footer
        onSectionChange={setActiveSection}
        onRFQClick={handleRFQClick}
        onPackageClick={handlePackageClick}
      />

      <RFQModal
        isOpen={isRFQOpen}
        onClose={() => setIsRFQOpen(false)}
        type={rfqType}
      />

      <PackageRequestModal
        isOpen={isPackageModalOpen}
        onClose={() => setIsPackageModalOpen(false)}
        packageType={packageType}
      />
    </div>
  );
}

export default App;
