'use client';
import { Menu, User, Bell, Search } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header({ onMenuClick }) {
  const pathname = usePathname();
  const [userEmail, setUserEmail] = useState('Admin User');

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (email) {
      setUserEmail(email);
    }
  }, []);

  const getPageTitle = () => {
    if (pathname.includes('all-cases')) return 'All Cases';
    if (pathname.includes('add-case')) return 'Add New Case';
    if (pathname.includes('clients')) return 'Clients';
    if (pathname.includes('settings')) return 'Settings';
    return 'Dashboard';
  };

  const getPageSubtitle = () => {
    if (pathname.includes('all-cases')) return 'Manage and track all your legal cases';
    if (pathname.includes('add-case')) return 'Create a new case entry';
    if (pathname.includes('clients')) return 'View and manage client information';
    if (pathname.includes('settings')) return 'Configure your preferences';
    return 'Welcome back';
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4 shadow-sm sticky top-0 z-40 backdrop-blur-sm bg-white/95">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-xl hover:bg-indigo-50 transition-colors group"
          >
            <Menu className="w-6 h-6 text-gray-600 group-hover:text-indigo-600" />
          </button>
          
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center">
              {getPageTitle()}
              <span className="ml-3 px-3 py-1 text-xs font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full">
                Live
              </span>
            </h1>
            <p className="text-sm text-gray-500 mt-0.5 hidden sm:block">{getPageSubtitle()}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button className="hidden md:flex p-2 rounded-xl hover:bg-gray-100 transition-colors group">
            <Search className="w-5 h-5 text-gray-600 group-hover:text-indigo-600" />
          </button>

          <button className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors group">
            <Bell className="w-5 h-5 text-gray-600 group-hover:text-indigo-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </button>

          <div className="hidden sm:flex items-center space-x-3 bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-2 rounded-xl border border-indigo-100 hover:shadow-md transition-all cursor-pointer group">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
              {userEmail.charAt(0).toUpperCase()}
            </div>
            <div className="hidden md:block">
              <div className="text-sm font-semibold text-gray-900 max-w-[120px] truncate">
                {userEmail}
              </div>
              <div className="text-xs text-gray-500">Administrator</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}