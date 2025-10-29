'use client';
import { FileText, Plus, Users, Settings, LogOut, X } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

export default function MobileSidebar({ isOpen, setIsOpen }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    router.push('/login');
  };

  const menuItems = [
    { name: 'All Cases', icon: FileText, path: '/dashboard/all-cases' },
    { name: 'Add Case', icon: Plus, path: '/dashboard/add-case' },
    { name: 'Clients', icon: Users, path: '/dashboard/clients' },
    { name: 'Settings', icon: Settings, path: '/dashboard/settings' },
  ];

  const handleNavigation = (path) => {
    router.push(path);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      <aside className="absolute left-0 top-0 bottom-0 w-72 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl animate-slide-in">
        <div className="p-6 border-b border-gray-700 flex items-center justify-between bg-gradient-to-r from-indigo-600/20 to-purple-600/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Case Manager</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;

            return (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700 bg-gray-800/50">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-red-400 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </div>
  );
}