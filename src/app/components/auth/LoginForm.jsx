'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FileText, Mail, Lock, ArrowRight, Sparkles } from 'lucide-react';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      if (email && password) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userEmail', email);
        router.push('/dashboard');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 backdrop-blur-sm bg-opacity-95 transform hover:scale-105 transition-all duration-300">
        {/* Logo and Title */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-4 shadow-lg transform hover:rotate-12 transition-transform duration-300">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Case Manager
            </h1>
            <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
          </div>
          <p className="text-gray-600">Welcome back! Please sign in to continue</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Input */}
          <div className="space-y-2 animate-slide-in">
            <label className="block text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-indigo-300"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2 animate-slide-in animation-delay-200">
            <label className="block text-sm font-semibold text-gray-700">
              Password
            </label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-indigo-300"
                required
              />
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm animate-slide-in animation-delay-400">
            <label className="flex items-center space-x-2 cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span className="text-gray-600 group-hover:text-gray-900">Remember me</span>
            </label>
            <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 transform hover:-translate-y-0.5 animate-slide-in animation-delay-600"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <span>Sign In</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-indigo-50 rounded-xl border border-indigo-100 animate-fade-in">
          <p className="text-center text-sm text-indigo-700 font-medium">
            🎯 Demo: Use any email and password to login
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
         have an account?{' '}
          <a href="#" className="text-indigo-600 hover:text-indigo-700 font-semibold">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}