'use client';
import { FileText, Plus, Users, Settings, LogOut, TrendingUp, Zap } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    router.push('/login');
  };

  const menuItems = [
    { name: 'All Cases', icon: FileText, path: '/dashboard/all-cases', badge: '12' },
    { name: 'Add Case', icon: Plus, path: '/dashboard/add-case', badge: null },
    { name: 'Clients', icon: Users, path: '/dashboard/clients', badge: '8' },
    { name: 'Settings', icon: Settings, path: '/dashboard/settings', badge: null },
  ];

  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-72 bg-gradient-to-b from-gray-900 to-gray-800 border-r border-gray-700 shadow-2xl">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-700 bg-gradient-to-r from-indigo-600/20 to-purple-600/20">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            <FileText className="w-7 h-7 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold text-white block">Case Manager</span>
            <span className="text-xs text-indigo-300 flex items-center">
              <Zap className="w-3 h-3 mr-1" />
              Premium Edition
            </span>
          </div>
        </div>
      </div>

      {/* Stats Card */}
      <div className="mx-4 mt-4 p-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg">
        <div className="flex items-center justify-between text-white mb-2">
          <span className="text-sm font-medium">Cases This Month</span>
          <TrendingUp className="w-4 h-4" />
        </div>
        <div className="text-3xl font-bold text-white">24</div>
        <div className="text-xs text-indigo-200 mt-1">+12% from last month</div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 mt-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;

          return (
            <button
              key={item.path}
              onClick={() => router.push(item.path)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />
                <span className="font-medium">{item.name}</span>
              </div>
              {item.badge && (
                <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                  isActive 
                    ? 'bg-white text-indigo-600' 
                    : 'bg-indigo-600 text-white'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-700 bg-gray-800/50">
        <div className="flex items-center space-x-3 mb-3 p-3 bg-gray-700/50 rounded-xl">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
            A
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-white truncate">Admin User</div>
            <div className="text-xs text-gray-400">admin@example.com</div>
          </div>
        </div>
        
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-red-400 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 transition-all duration-200 group"
        >
          <LogOut className="w-5 h-5 group-hover:animate-pulse" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}