import { Settings, Bell, Shield, Palette } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl border border-gray-200 p-12 text-center shadow-lg">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
          <Settings className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Settings & Preferences
        </h3>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Customize your experience with advanced settings and preferences. More options coming soon.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="p-4 bg-indigo-50 rounded-xl">
            <Bell className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
            <div className="text-sm font-semibold text-gray-700">Notifications</div>
          </div>
          <div className="p-4 bg-purple-50 rounded-xl">
            <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-sm font-semibold text-gray-700">Security</div>
          </div>
          <div className="p-4 bg-pink-50 rounded-xl">
            <Palette className="w-8 h-8 text-pink-600 mx-auto mb-2" />
            <div className="text-sm font-semibold text-gray-700">Appearance</div>
          </div>
        </div>
      </div>
    </div>
  );
}