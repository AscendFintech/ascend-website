import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'erp' | 'accounting';
}

const RFQModal: React.FC<RFQModalProps> = ({ isOpen, onClose, type }) => {
  const [formData, setFormData] = useState({
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
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

      alert('Thank you for your request! We will contact you within 24 hours.');
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  const handleServiceChange = (service: string, checked: boolean, serviceType: 'services' | 'accountingServices') => {
    setFormData(prev => ({
      ...prev,
      [serviceType]: checked
        ? [...prev[serviceType], service]
        : prev[serviceType].filter(s => s !== service)
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-sky-800">
            {type === 'erp' ? 'ERP Services Quote Request' : 'Accounting Services Quote Request'}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
              <input
                type="text"
                required
                value={formData.businessName}
                onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>
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
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>
          </div>

          {type === 'erp' ? (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">ERP Software Needed</label>
                  <select
                    value={formData.erpNeeded}
                    onChange={(e) => setFormData(prev => ({ ...prev, erpNeeded: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  >
                    <option value="">Select ERP</option>
                    <option value="erpnext">ERPNext</option>
                    <option value="odoo">Odoo</option>
                    <option value="consultation">Need Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Software Used</label>
                  <input
                    type="text"
                    value={formData.currentSoftware}
                    onChange={(e) => setFormData(prev => ({ ...prev, currentSoftware: e.target.value }))}
                    placeholder="e.g., QuickBooks, Excel, etc."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Required Services</label>
                <div className="grid md:grid-cols-3 gap-3">
                  {['Implementation', 'Support', 'Training'].map((service) => (
                    <label key={service} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={(e) => handleServiceChange(service, e.target.checked, 'services')}
                        className="mr-2 text-sky-500 focus:ring-sky-500"
                      />
                      <span className="text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type of Entity</label>
                <select
                  value={formData.entityType}
                  onChange={(e) => setFormData(prev => ({ ...prev, entityType: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                >
                  <option value="">Select Entity Type</option>
                  <option value="llc">LLC</option>
                  <option value="corporation">Corporation</option>
                  <option value="partnership">Partnership</option>
                  <option value="sole-proprietorship">Sole Proprietorship</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Services Needed</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Bookkeeping', 'Accounting Supervision', 'VAT Filing', 'Tax Filing', 'Annual Audit', 'Corporate Registration'].map((service) => (
                    <label key={service} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.accountingServices.includes(service)}
                        onChange={(e) => handleServiceChange(service, e.target.checked, 'accountingServices')}
                        className="mr-2 text-sky-500 focus:ring-sky-500"
                      />
                      <span className="text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              placeholder="Tell us more about your requirements..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-sky-500 hover:bg-sky-600 disabled:bg-sky-300 text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              {isSubmitting ? 'Submitting...' : 'Send Request'}
              <Send size={16} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RFQModal;
