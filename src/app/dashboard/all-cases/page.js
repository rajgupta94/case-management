'use client';
import CaseStats from '../../components/cases/CaseStats';
import CaseTable from '../../components/cases/CaseTable';
import CaseCard from '../../components/cases/CaseCard';
import SearchBar from '../../components/ui/SearchBar';

import { useCases } from '../../hooks/useCases';
export default function AllCasesPage() {
  const { filteredCases, searchQuery, setSearchQuery } = useCases();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
        <CaseStats />
      </div>

      {/* Desktop & Tablet View */}
      <div className="hidden md:block">
        <CaseTable cases={filteredCases} />
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {filteredCases.length > 0 ? (
          filteredCases.map((caseItem) => (
            <CaseCard key={caseItem.id} caseData={caseItem} />
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
            <p className="text-gray-500">No cases found</p>
          </div>
        )}
      </div>
    </div>
  );
}