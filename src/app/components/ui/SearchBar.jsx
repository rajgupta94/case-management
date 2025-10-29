'use client';
import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative group">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
      <input
        type="text"
        placeholder="Search cases by ID, client, or title..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-indigo-300 shadow-sm hover:shadow-md bg-white"
      />
    </div>
  );
}