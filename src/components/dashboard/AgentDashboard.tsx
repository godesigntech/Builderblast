import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Circle, Clock, ChevronRight, BookOpen, ExternalLink } from 'lucide-react';
import { BIZZALL_FLOW_PHASES } from '../../constants';

export default function AgentDashboard() {
  const currentPhaseId = 3;
  const phases = BIZZALL_FLOW_PHASES.map(p => ({
    ...p,
    status: p.id < currentPhaseId ? 'completed' : p.id === currentPhaseId ? 'current' : 'upcoming'
  }));

  const currentPhase = BIZZALL_FLOW_PHASES.find(p => p.id === currentPhaseId);
  const tasks = currentPhase?.tasks.map((t, idx) => ({
    id: idx,
    title: t,
    completed: idx < 1, // Mocking some as completed
    description: idx === 1 ? 'Use generic GFi link with your referral code.' : undefined
  })) || [];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Your Journey</h1>
        <p className="text-slate-500 mt-1">Track your progress and complete your next steps.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Phase Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">BizzallFlow</h2>
            <div className="space-y-6 relative">
              {/* Vertical line connector */}
              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-100"></div>
              
              {phases.map((phase) => (
                <div key={phase.id} className="relative flex items-center gap-4 group">
                  <div className={`z-10 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
                    phase.status === 'completed' ? 'bg-emerald-500' :
                    phase.status === 'current' ? 'bg-indigo-600 border-4 border-white ring-4 ring-indigo-50 shadow-md scale-110' :
                    'bg-white border-2 border-slate-200 group-hover:border-indigo-300'
                  }`}>
                    {phase.status === 'completed' && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <div className={`${phase.status === 'current' ? 'text-indigo-600 font-bold' : 'text-slate-500 font-medium opacity-70 group-hover:opacity-100 transition-opacity'}`}>
                    <p className="text-[10px] uppercase tracking-tighter opacity-60">Phase {phase.id}</p>
                    <p className="text-sm truncate max-w-[120px]">{phase.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-2 text-xs text-slate-400 font-bold uppercase tracking-wider hover:text-indigo-600 transition-colors">View All 12 Phases</button>
          </div>
        </div>

        {/* Current Tasks */}
        <div className="lg:col-span-3 space-y-6">
          {/* Progress Card */}
          <div className="bg-indigo-600 p-8 rounded-3xl text-white shadow-xl shadow-indigo-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-indigo-100 font-medium text-sm flex items-center gap-2">
                   <Clock className="w-4 h-4" /> Next Milestone: PFR Certified
                </p>
                <h2 className="text-4xl font-black mt-2 tracking-tight">Phase 3: Tevah Signup</h2>
                <div className="mt-8 flex items-center gap-6">
                  <div className="flex-1 h-3 bg-indigo-500 rounded-full overflow-hidden w-64 shadow-inner">
                    <div className="h-full bg-white w-[75%] rounded-full shadow-lg"></div>
                  </div>
                  <span className="font-bold text-xl">75%</span>
                </div>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl">
                <p className="text-[10px] uppercase tracking-widest text-indigo-100 font-black border-b border-white/20 pb-2 mb-3">Goal Credit</p>
                <p className="text-2xl font-black font-mono tracking-tighter">$1,000</p>
                <p className="text-[11px] text-indigo-100 mt-1 font-medium italic opacity-80">Earned upon completion</p>
              </div>
            </div>
          </div>

          {/* Task List */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h3 className="font-bold text-lg text-slate-900">Current Focus Tasks</h3>
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wider">3 Pending</span>
            </div>
            <div className="divide-y divide-slate-100">
              {tasks.map((task) => (
                <div key={task.id} className="p-6 flex items-start gap-5 hover:bg-slate-50 transition-colors group">
                  <div className={`mt-1 flex-shrink-0 transition-all duration-300 ${task.completed ? 'text-emerald-500' : 'text-slate-300 group-hover:text-indigo-300'}`}>
                    {task.completed ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                  </div>
                  <div className="flex-1">
                    <p className={`font-bold text-base ${task.completed ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                      {task.title}
                    </p>
                    {task.description && !task.completed && (
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">{task.description}</p>
                    )}
                  </div>
                  {!task.completed && (
                    <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100 active:scale-95">
                      Mark Complete
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group cursor-pointer hover:border-indigo-500 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-50">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  <BookOpen className="w-7 h-7" />
                </div>
                <div>
                  <p className="font-black text-slate-900 group-hover:text-indigo-600 transition-colors uppercase tracking-tight text-sm">Training Guide</p>
                  <p className="text-xs text-slate-500">Master Tevah Onboarding</p>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group cursor-pointer hover:border-indigo-500 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-50">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-slate-50 text-slate-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 transform group-hover:-rotate-6">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <p className="font-black text-slate-900 group-hover:text-indigo-600 transition-colors uppercase tracking-tight text-sm">Schedule 1-on-1</p>
                  <p className="text-xs text-slate-500">Book time with your Builder</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-2 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
