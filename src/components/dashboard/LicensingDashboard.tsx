import React from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Mail, UserCheck, ShieldCheck, GraduationCap } from 'lucide-react';

export default function LicensingDashboard() {
  const pipeline = [
    { name: 'Alice Peterson', status: 'Quiz Completed', date: '2026-04-20', action: 'Approve Xcel' },
    { name: 'Michael Chen', status: 'Exam Scheduled', date: '2026-04-26', action: 'Send CE Link' },
    { name: 'Sarah Miller', status: 'Xcel Access Granted', date: '2026-04-22', action: 'Monitor Progress' },
    { name: 'David Smith', status: 'Application Pending', date: '2026-04-18', action: 'Validate License' },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Licensing Pipeline</h1>
        <p className="text-slate-500 mt-1">Manage agent certifications and compliance status.</p>
      </header>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group cursor-pointer hover:border-indigo-600 transition-all">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center transition-colors group-hover:bg-indigo-600 group-hover:text-white">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900">18</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">In Training</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group cursor-pointer hover:border-emerald-600 transition-all">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center transition-colors group-hover:bg-emerald-600 group-hover:text-white">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900">42</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Fully Licensed</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group cursor-pointer hover:border-amber-600 transition-all">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center transition-colors group-hover:bg-amber-600 group-hover:text-white">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900">05</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Compliance Alerts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/30">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name or ID..." 
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
              <Filter className="w-3.5 h-3.5" /> Filter Pipeline
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 text-slate-400 text-[10px] uppercase font-black tracking-widest">
                <th className="px-6 py-4">Agent Identification</th>
                <th className="px-6 py-4">Current Status</th>
                <th className="px-6 py-4">Last Sync</th>
                <th className="px-6 py-4 text-right">Intervention</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {pipeline.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{item.name}</div>
                    <div className="text-[10px] font-mono text-slate-400 mt-0.5">AUTH-GFI-{1000 + idx}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${
                      item.status.includes('Completed') ? 'bg-emerald-100 text-emerald-800' :
                      item.status.includes('Scheduled') ? 'bg-indigo-100 text-indigo-800' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-slate-500">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="ml-auto flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-bold hover:bg-indigo-600 hover:text-white transition-all transform active:scale-95 shadow-sm">
                      <Mail className="w-3.5 h-3.5" /> {item.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
