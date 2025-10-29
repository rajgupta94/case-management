'use client';
import { Calendar, User, FileText, ChevronRight } from 'lucide-react';
import { formatDate, getStatusColor } from '../../lib/utils';

export default function CaseCard({ caseData }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
          {caseData.id}
        </span>
        <span className={`px-3 py-1.5 text-xs font-semibold rounded-full ${getStatusColor(caseData.status)} shadow-sm`}>
          {caseData.status}
        </span>
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
        {caseData.caseTitle}
      </h3>
      
      <div className="space-y-2.5">
        <div className="flex items-center text-gray-600">
          <User className="w-4 h-4 mr-2 text-indigo-500" />
          <span className="text-sm font-medium">{caseData.clientName}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <FileText className="w-4 h-4 mr-2 text-purple-500" />
          <span className="text-sm">{caseData.caseType}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2 text-green-500" />
          <span className="text-sm">{formatDate(caseData.hearingDate)}</span>
        </div>
      </div>
      
      {caseData.notes && (
        <p className="mt-3 text-sm text-gray-500 line-clamp-2 bg-gray-50 p-3 rounded-lg">
          {caseData.notes}
        </p>
      )}
      
      <div className="mt-4 flex items-center justify-end text-indigo-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
        View Details
        <ChevronRight className="w-4 h-4 ml-1" />
      </div>
    </div>
  );
}