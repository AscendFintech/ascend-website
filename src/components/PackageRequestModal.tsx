import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

interface PackageRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageType: string;
}

const PackageRequestModal: React.FC<PackageRequestModalProps> = ({ isOpen, onClose, packageType }) => {
  const [formData, setFormData] = useState({
    contactName: '',
    email: '',
    companyName: '',
    contactNumber: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const buildMailtoLink = () => {
    const subject = `${packageType} Request`;
    const body = [
      `Package: ${packageType}`,
      `Contact Name: ${formData.contactName}`,
      `Email: ${formData.email}`,
      `Company Name: ${formData.companyName}`,
      `Contact Number: ${formData.contactNumber}`,
    ].join('\n');
    return `mailto:info@ascendfintech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const existingData = JSON.parse(localStorage.getItem('packageRequests') || '[]');
      existingData.push({
        ...formData,
        packageType,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('packageRequests', JSON.stringify(existingData));

      window.location.href = buildMailtoLink();

      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 800);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({ contactName: '', email: '', companyName: '', contactNumber: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glow-border bg-ink-900 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <>
            <div className="p-6 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">
                {packageType} Request
              </h2>
              <button onClick={handleClose} className="text-stone-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-300 mb-2">Contact Name *</label>
                <input
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-stone-500 focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-300 mb-2">Email ID *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-stone-500 focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-300 mb-2">Company Name *</label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-stone-500 focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-300 mb-2">Contact Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.contactNumber}
                  onChange={(e) => setFormData(prev => ({ ...prev, contactNumber: e.target.value }))}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-stone-500 focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-3 border border-white/10 rounded-lg text-stone-300 hover:bg-white/5 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-ink-950 hover:bg-ink-900 disabled:opacity-50 text-gold-400 border border-gold-500/40 hover:border-gold-400/60 rounded-lg font-semibold transition-colors shadow-glow-gold flex items-center gap-2"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                  <Send size={16} />
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="p-8 text-center">
            <div className="mb-6">
              <CheckCircle className="text-gold-400 mx-auto mb-4" size={64} />
              <h2 className="text-2xl font-bold text-white mb-4">
                Thank You! Your Package Request is Confirmed
              </h2>
            </div>

            <div className="text-left bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
              <p className="text-stone-200 mb-4">
                We've received your interest in our Accounts &amp; ERP Package and we're thrilled to help your business grow.
              </p>

              <div className="space-y-2 text-stone-300">
                <h3 className="font-semibold mb-3 text-white">Next Steps:</h3>
                <p className="flex items-start gap-2">
                  <span>📞</span>
                  <span>Our expert will contact you today</span>
                </p>
                <p className="flex items-start gap-2">
                  <span>📋</span>
                  <span>FREE consultation &amp; needs assessment</span>
                </p>
                <p className="flex items-start gap-2">
                  <span>📊</span>
                  <span>Custom solution presentation</span>
                </p>
                <p className="flex items-start gap-2">
                  <span>🚀</span>
                  <span>Quick implementation start</span>
                </p>
              </div>

              <p className="text-stone-400 mt-4 text-sm">
                Your email client should have opened with your details pre-filled. If it didn't,
                email us directly at{' '}
                <a href="mailto:info@ascendfintech.com" className="text-gold-400 hover:underline">
                  info@ascendfintech.com
                </a>.
              </p>

              <p className="text-stone-400 mt-4 text-sm">
                No obligations, no pressure - just expert guidance to help you make the right decision for your business.
              </p>

              <p className="text-white font-semibold mt-4">
                Talk to you soon!
              </p>
            </div>

            <button
              onClick={handleClose}
              className="px-8 py-3 bg-ink-950 hover:bg-ink-900 text-gold-400 border border-gold-500/40 hover:border-gold-400/60 rounded-lg font-semibold transition-colors shadow-glow-gold"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageRequestModal;
