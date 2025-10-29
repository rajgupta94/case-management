'use client';
import { useAuth as useAuthContext } from '@/context/AuthContext';

export const useAuth = () => {
  return useAuthContext();
};'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const CaseContext = createContext();

export const useCaseContext = () => {
  const context = useContext(CaseContext);
  if (!context) {
    throw new Error('useCaseContext must be used within CaseProvider');
  }
  return context;
};

export const CaseProvider = ({ children }) => {
  const [cases, setCases] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedCases = localStorage.getItem('cases');
    if (savedCases) {
      setCases(JSON.parse(savedCases));
    } else {
      const initialCases = [
        {
          id: 'C001',
          clientName: 'John Doe',
          hearingDate: '2025-11-15',
          status: 'Active',
          caseTitle: 'Contract Dispute Resolution',
          caseType: 'Civil',
          notes: 'Initial consultation completed. Awaiting client documents.',
        },
        {
          id: 'C002',
          clientName: 'Jane Smith',
          hearingDate: '2025-11-20',
          status: 'Pending',
          caseTitle: 'Property Rights Case',
          caseType: 'Real Estate',
          notes: 'Property survey documents under review.',
        },
        {
          id: 'C003',
          clientName: 'Mike Johnson',
          hearingDate: '2025-10-30',
          status: 'Closed',
          caseTitle: 'Employment Termination Issue',
          caseType: 'Labor',
          notes: 'Case resolved successfully in favor of client.',
        },
        {
          id: 'C004',
          clientName: 'Sarah Williams',
          hearingDate: '2025-12-05',
          status: 'Active',
          caseTitle: 'Family Custody Matter',
          caseType: 'Family',
          notes: 'First hearing scheduled for next month.',
        },
      ];
      setCases(initialCases);
      localStorage.setItem('cases', JSON.stringify(initialCases));
    }
  }, []);

  const addCase = (caseData) => {
    const newCase = {
      ...caseData,
      id: `C${String(cases.length + 1).padStart(3, '0')}`,
      status: 'Active',
    };
    const updatedCases = [...cases, newCase];
    setCases(updatedCases);
    localStorage.setItem('cases', JSON.stringify(updatedCases));
  };

  const filteredCases = cases.filter(
    (c) =>
      c.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.caseTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <CaseContext.Provider
      value={{
        cases,
        addCase,
        searchQuery,
        setSearchQuery,
        filteredCases,
      }}
    >
      {children}
    </CaseContext.Provider>
  );
};