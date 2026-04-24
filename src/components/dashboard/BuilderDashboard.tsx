import React from 'react';
import { motion } from 'motion/react';
import { Users, GraduationCap, TrendingUp, AlertCircle, ChevronRight } from 'lucide-react';

export default function BuilderDashboard() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Builder Dashboard</h1>
          <p className="text-slate-500 mt-1">Oversee your team's execution and progress.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-sm text-sm">
            Add Team Member
          </button>
        </div>
      </header>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Active Pipeline', value: '128', trend: '+14% from last week', trendColor: 'text-emerald-600' },
          { label: 'Licensing Ready', value: '14', trend: '3 pending exam dates', trendColor: 'text-slate-400' },
          { label: 'Team Production', value: '$82.4k', trend: '75% of goal', trendColor: 'text-indigo-600' },
          { label: '3-3-30 Champs', value: '08', trend: 'Qualified for Bonus', trendColor: 'text-indigo-200', highlight: true },
        ].map((stat, idx) => (
          <div key={idx} className={`${stat.highlight ? 'bg-indigo-600 text-white border-indigo-700 shadow-lg' : 'bg-white border-slate-200 shadow-sm'} p-5 rounded-xl border`}>
            <p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${stat.highlight ? 'text-indigo-100' : 'text-slate-500'}`}>{stat.label}</p>
            <h4 className="text-3xl font-bold">{stat.value}</h4>
            <p className={`text-[11px] font-medium mt-2 ${stat.highlight ? 'text-indigo-200' : stat.trendColor}`}>{stat.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Team Activity */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-bold text-lg">Direct Team Progress</h2>
              <button className="text-sm text-indigo-600 font-bold hover:underline">View All</button>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                { name: 'Marcus Chen', phase: 'Phase 5: Licensing', progress: 65, color: 'bg-blue-200', textColor: 'text-blue-700' },
                { name: 'Sarah Hudson', phase: 'Phase 2: Connection', progress: 40, color: 'bg-amber-200', textColor: 'text-amber-700' },
                { name: 'James Lewis', phase: 'Phase 10: Skill Mastery', progress: 90, color: 'bg-emerald-200', textColor: 'text-emerald-700' },
                { name: 'Kimberly Taylor', phase: 'Phase 1: Prospecting', progress: 10, color: 'bg-slate-200', textColor: 'text-slate-700' },
              ].map((agent, idx) => (
                <div key={idx} className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 ${agent.color} ${agent.textColor} rounded-full flex items-center justify-center text-xs font-bold`}>
                      {agent.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-900">{agent.name}</p>
                      <p className="text-[11px] text-slate-500">{agent.phase}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden hidden sm:block">
                      <div className="h-full bg-indigo-600" style={{ width: `${agent.progress}%` }}></div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Center */}
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="font-bold text-lg mb-4">Smart Alerts</h2>
            <div className="space-y-4">
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
                <p className="text-sm font-bold text-amber-900">Licensing Delay</p>
                <p className="text-xs text-amber-700 mt-1 leading-relaxed">Marcus Chen hasn't updated his licensing quiz in 5 days. Needs a nudge.</p>
              </div>
              <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                <p className="text-sm font-bold text-indigo-900">Promotion Ready</p>
                <p className="text-xs text-indigo-700 mt-1 leading-relaxed">Sarah Hudson is 1 field training away from SA promotion.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Upcoming Birthday</span>
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            </div>
            <div className="mb-4">
              <p className="font-bold text-lg">Sarah Hudson</p>
              <p className="text-xs text-slate-400">Tomorrow • AI Message Draft Ready</p>
            </div>
            <button className="w-full py-2 bg-indigo-600 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-indigo-700 transition-colors">
              Review Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
