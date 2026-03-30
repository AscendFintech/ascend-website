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

      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 1000);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({ contactName: '', email: '', companyName: '', contactNumber: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <>
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-sky-800">
                {packageType} Request
              </h2>
              <button onClick={handleClose} className="text-gray-500 hover:text-gray-700 transition-colors">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name *</label>
                <input
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email ID *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.contactNumber}
                  onChange={(e) => setFormData(prev => ({ ...prev, contactNumber: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-sky-500 hover:bg-sky-600 disabled:bg-sky-300 text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
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
              <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
              <h2 className="text-2xl font-bold text-sky-800 mb-4">
                Thank You! Your Package Request is Confirmed
              </h2>
            </div>

            <div className="text-left bg-sky-50 rounded-lg p-6 mb-6">
              <p className="text-sky-800 mb-4">
                We've received your interest in our Accounts &amp; ERP Package and we're thrilled to help your business grow.
              </p>

              <div className="space-y-2 text-sky-700">
                <h3 className="font-semibold mb-3">Next Steps:</h3>
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

              <p className="text-sky-600 mt-4 text-sm">
                No obligations, no pressure - just expert guidance to help you make the right decision for your business.
              </p>

              <p className="text-sky-800 font-semibold mt-4">
                Talk to you soon!
              </p>
            </div>

            <button
              onClick={handleClose}
              className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-semibold transition-colors"
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
