'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import MobileSidebar from '../components/layout/MobileSidebar';
import { CaseProvider } from '../context/CaseContext'; // ✅ import

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    if (!isAuth) {
      router.push('/login');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-600 border-t-transparent mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  // ✅ WRAP the dashboard in CaseProvider
  return (
    <CaseProvider>
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar />
        <MobileSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        <main className="flex-1 flex flex-col min-h-screen">
          <Header onMenuClick={() => setSidebarOpen(true)} />
          <div className="flex-1 p-4 sm:p-6 lg:p-8 animate-fade-in">
            {children}
          </div>
        </main>
      </div>
    </CaseProvider>
  );
}
