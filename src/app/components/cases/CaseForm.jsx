'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCaseContext } from '../../context/CaseContext';
import { CASE_TYPES } from '../../lib/constants';
import { Save, X, Sparkles } from 'lucide-react';

export default function CaseForm() {
  const router = useRouter();
  const { addCase } = useCaseContext();
  const [formData, setFormData] = useState({
    caseTitle: '',
    clientName: '',
    caseType: '',
    hearingDate: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.caseTitle || !formData.clientName || !formData.caseType || !formData.hearingDate) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      addCase(formData);
      setIsSubmitting(false);
      router.push('/dashboard/all-cases');
    }, 1000);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-6">
        <div className="flex items-center space-x-3">
          <Sparkles className="w-6 h-6 text-white" />
          <h2 className="text-2xl font-bold text-white">Create New Case</h2>
        </div>
        <p className="text-indigo-100 mt-2">Fill in the details to add a new case to the system</p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Case Title */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Case Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.caseTitle}
              onChange={(e) => setFormData({ ...formData, caseTitle: e.target.value })}
              placeholder="Enter case title"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-indigo-300"
              required
            />
          </div>

          {/* Client Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Client Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.clientName}
              onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
              placeholder="Enter client name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-indigo-300"
              required
            />
          </div>

          {/* Case Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Case Type <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.caseType}
              onChange={(e) => setFormData({ ...formData, caseType: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-indigo-300 bg-white"
              required
            >
              <option value="">Select case type</option>
              {CASE_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Hearing Date */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Hearing Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={formData.hearingDate}
              onChange={(e) => setFormData({ ...formData, hearingDate: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-indigo-300"
              required
            />
          </div>

          {/* Notes */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Case Notes
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows="4"
              placeholder="Enter additional notes about this case..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-indigo-300 resize-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                <span>Saving...</span>
              </>
            ) : (
              <>
                <Save className="w-5 h-5" />
                <span>Save Case</span>
              </>
            )}
          </button>
          <button
            type="button"
            onClick={() => router.push('/dashboard/all-cases')}
            className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-200 flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
          >
            <X className="w-5 h-5" />
            <span>Cancel</span>
          </button>
        </div>
      </form>
    </div>
  );
}