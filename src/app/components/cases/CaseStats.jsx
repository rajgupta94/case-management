'use client';
import { useCaseContext } from '../../context/CaseContext';
import { TrendingUp, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export default function CaseStats() {
  const { cases } = useCaseContext();
  
  const activeCount = cases.filter(c => c.status === 'Active').length;
  const pendingCount = cases.filter(c => c.status === 'Pending').length;
  const closedCount = cases.filter(c => c.status === 'Closed').length;
  
  const stats = [
    {
      title: 'Total Cases',
      value: cases.length,
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      change: '+12%',
      iconBg: 'bg-blue-100',
    },
    {
      title: 'Active Cases',
      value: activeCount,
      icon: Clock,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      change: '+8%',
      iconBg: 'bg-green-100',
    },
    {
      title: 'Pending',
      value: pendingCount,
      icon: AlertCircle,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700',
      change: '+5%',
      iconBg: 'bg-yellow-100',
    },
  ];

  return (
    <>
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-200">
                {stat.change}
              </span>
            </div>
            <div className="text-sm font-medium text-gray-600 mb-1">
              {stat.title}
            </div>
            <div className="text-3xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
              {stat.value}
            </div>
          </div>
        );
      })}
    </>
  );
}