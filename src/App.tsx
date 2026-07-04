import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FrappeEcosystem from './components/FrappeEcosystem';
import FAQ from './components/FAQ';
import Careers from './components/Careers';
import Footer from './components/Footer';
import RFQModal from './components/RFQModal';
import PackageRequestModal from './components/PackageRequestModal';
import ScrollProgress from './components/motion/ScrollProgress';

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

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Hero onRFQClick={handleRFQClick} onPackageClick={handlePackageClick} />
            <FrappeEcosystem />
            <Services onRFQClick={handleRFQClick} onPackageClick={handlePackageClick} />
            <FAQ />
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
            <FrappeEcosystem />
            <Services onRFQClick={handleRFQClick} onPackageClick={handlePackageClick} />
            <FAQ />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-ink-950">
      <div className="grain-overlay" />
      <ScrollProgress />
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer
        onSectionChange={handleSectionChange}
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
