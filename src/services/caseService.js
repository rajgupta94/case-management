export const caseService = {
  getCases: async () => {
    try {
      const cases = localStorage.getItem('cases');
      return cases ? JSON.parse(cases) : [];
    } catch (error) {
      console.error('Error fetching cases:', error);
      return [];
    }
  },

  getCaseById: async (id) => {
    try {
      const cases = localStorage.getItem('cases');
      const parsedCases = cases ? JSON.parse(cases) : [];
      return parsedCases.find(c => c.id === id);
    } catch (error) {
      console.error('Error fetching case:', error);
      return null;
    }
  },


  createCase: async (caseData) => {
    try {
      const cases = localStorage.getItem('cases');
      const parsedCases = cases ? JSON.parse(cases) : [];
      const newCase = {
        ...caseData,
        id: `C${String(parsedCases.length + 1).padStart(3, '0')}`,
        status: 'Active',
        createdAt: new Date().toISOString(),
      };
      parsedCases.push(newCase);
      localStorage.setItem('cases', JSON.stringify(parsedCases));
      return newCase;
    } catch (error) {
      console.error('Error creating case:', error);
      throw error;
    }
  },


  updateCase: async (id, updates) => {
    try {
      const cases = localStorage.getItem('cases');
      const parsedCases = cases ? JSON.parse(cases) : [];
      const index = parsedCases.findIndex(c => c.id === id);
      
      if (index !== -1) {
        parsedCases[index] = { ...parsedCases[index], ...updates };
        localStorage.setItem('cases', JSON.stringify(parsedCases));
        return parsedCases[index];
      }
      return null;
    } catch (error) {
      console.error('Error updating case:', error);
      throw error;
    }
  },

  deleteCase: async (id) => {
    try {
      const cases = localStorage.getItem('cases');
      const parsedCases = cases ? JSON.parse(cases) : [];
      const filtered = parsedCases.filter(c => c.id !== id);
      localStorage.setItem('cases', JSON.stringify(filtered));
      return true;
    } catch (error) {
      console.error('Error deleting case:', error);
      throw error;
    }
  },
};