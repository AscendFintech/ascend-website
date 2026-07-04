import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'erp' | 'accounting';
}

const initialFormData = {
  businessName: '',
  contactName: '',
  email: '',
  phone: '',
  industry: '',
  entityType: '',
  currentSoftware: '',
  erpNeeded: '',
  services: [] as string[],
  accountingServices: [] as string[],
  message: ''
};

const RFQModal: React.FC<RFQModalProps> = ({ isOpen, onClose, type }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const buildMailtoLink = () => {
    const subject = type === 'erp' ? 'ERP Services Quote Request' : 'Accounting Services Quote Request';
    const lines = [
      `Business Name: ${formData.businessName}`,
      `Contact Name: ${formData.contactName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
    ];

    if (type === 'erp') {
      lines.push(
        `Industry: ${formData.industry}`,
        `ERP Software Needed: ${formData.erpNeeded}`,
        `Current Software Used: ${formData.currentSoftware}`,
        `Required Services: ${formData.services.join(', ')}`
      );
    } else {
      lines.push(
        `Type of Entity: ${formData.entityType}`,
        `Services Needed: ${formData.accountingServices.join(', ')}`
      );
    }

    lines.push('', `Additional Message: ${formData.message}`);

    const body = lines.join('\n');
    return `mailto:info@ascendfintech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const existingData = JSON.parse(localStorage.getItem('rfqRequests') || '[]');
      existingData.push({
        type,
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('rfqRequests', JSON.stringify(existingData));

      window.location.href = buildMailtoLink();

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleServiceChange = (service: string, checked: boolean, serviceType: 'services' | 'accountingServices') => {
    setFormData(prev => ({
      ...prev,
      [serviceType]: checked
        ? [...prev[serviceType], service]
        : prev[serviceType].filter(s => s !== service)
    }));
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData(initialFormData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glow-border bg-ink-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <>
            <div className="p-6 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">
                {type === 'erp' ? 'ERP Services Quote Request' : 'Accounting Services Quote Request'}
              </h2>
              <button onClick={handleClose} className="text-stone-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">Business Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-stone-500 focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                </div>
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
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-stone-500 focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-stone-500 focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                </div>
              </div>

              {type === 'erp' ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-stone-300 mb-2">Industry</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-stone-500 focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    >
                      <option value="">Select Industry</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="retail">Retail</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="services">Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-300 mb-2">ERP Software Needed</label>
                      <select
                        value={formData.erpNeeded}
                        onChange={(e) => setFormData(prev => ({ ...prev, erpNeeded: e.target.value }))}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-stone-500 focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      >
                        <option value="">Select ERP</option>
                        <option value="erpnext">ERPNext</option>
                        <option value="consultation">Need Consultation</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-300 mb-2">Current Software Used</label>
                      <input
                        type="text"
                        value={formData.currentSoftware}
                        onChange={(e) => setFormData(prev => ({ ...prev, currentSoftware: e.target.value }))}
                        placeholder="e.g., QuickBooks, Excel, etc."
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-stone-500 focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-300 mb-3">Required Services</label>
                    <div className="grid md:grid-cols-3 gap-3">
                      {['Implementation', 'Support', 'Training'].map((service) => (
                        <label key={service} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service)}
                            onChange={(e) => handleServiceChange(service, e.target.checked, 'services')}
                            className="mr-2 accent-gold-500 focus:ring-gold-500"
                          />
                          <span className="text-stone-300">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium text-stone-300 mb-2">Type of Entity</label>
                    <select
                      value={formData.entityType}
                      onChange={(e) => setFormData(prev => ({ ...prev, entityType: e.target.value }))}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-stone-500 focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    >
                      <option value="">Select Entity Type</option>
                      <option value="llc">LLC</option>
                      <option value="corporation">Corporation</option>
                      <option value="partnership">Partnership</option>
                      <option value="sole-proprietorship">Sole Proprietorship</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-300 mb-3">Services Needed</label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {['Bookkeeping', 'Accounting Supervision', 'VAT Filing', 'Tax Filing', 'Annual Audit', 'Corporate Registration'].map((service) => (
                        <label key={service} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.accountingServices.includes(service)}
                            onChange={(e) => handleServiceChange(service, e.target.checked, 'accountingServices')}
                            className="mr-2 accent-gold-500 focus:ring-gold-500"
                          />
                          <span className="text-stone-300">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium text-stone-300 mb-2">Additional Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell us more about your requirements..."
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-stone-500 focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              </div>

              <div className="flex justify-end gap-4">
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
                  {isSubmitting ? 'Submitting...' : 'Send Request'}
                  <Send size={16} />
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="p-8 text-center">
            <CheckCircle className="text-gold-400 mx-auto mb-4" size={64} />
            <h2 className="text-2xl font-bold text-white mb-4">
              Thanks — your request is on its way
            </h2>
            <p className="text-stone-300 mb-2">
              Your email client should have opened with your request pre-filled and addressed to
              our team.
            </p>
            <p className="text-stone-400 mb-6">
              If it didn't, email us directly at{' '}
              <a href="mailto:info@ascendfintech.com" className="text-gold-400 hover:underline">
                info@ascendfintech.com
              </a>{' '}
              and we'll get back to you within 24 hours.
            </p>
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

export default RFQModal;
