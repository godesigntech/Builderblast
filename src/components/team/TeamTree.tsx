import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, User, Shield, GraduationCap, Award, MoreHorizontal } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  phase: number;
  licenseStatus: string;
  production: number;
  pfrStatus: boolean;
  children?: TeamMember[];
}

const mockTeam: TeamMember = {
  id: 'b1',
  name: 'Georgette Nguiekou',
  role: 'Builder',
  phase: 12,
  licenseStatus: 'Licensed',
  production: 250000,
  pfrStatus: true,
  children: [
    {
      id: 'a1',
      name: 'Alice Peterson',
      role: 'Agent',
      phase: 5,
      licenseStatus: 'In Progress',
      production: 12000,
      pfrStatus: true,
    },
    {
      id: 'a2',
      name: 'Michael Chen',
      role: 'Senior Associate',
      phase: 8,
      licenseStatus: 'Licensed',
      production: 45000,
      pfrStatus: true,
      children: [
        {
          id: 'a3',
          name: 'Sarah Miller',
          role: 'Agent',
          phase: 2,
          licenseStatus: 'Not Started',
          production: 0,
          pfrStatus: false,
        }
      ]
    }
  ]
};

function MemberCard({ member, depth }: { member: TeamMember, depth: number, key?: string }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`relative w-72 p-5 bg-white rounded-[24px] border border-slate-200 shadow-xl shadow-slate-100 group hover:border-indigo-500 transition-all duration-300`}
      >
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg transition-transform group-hover:rotate-6 ${
            depth === 0 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 
            depth === 1 ? 'bg-slate-900 text-white' : 
            'bg-slate-100 text-slate-400'
          }`}>
            {member.name[0]}
          </div>
          <div className="flex gap-1.5 p-1 bg-slate-50 rounded-lg">
            {member.licenseStatus === 'Licensed' && <Shield className="w-3.5 h-3.5 text-emerald-500" />}
            {member.pfrStatus && <Award className="w-3.5 h-3.5 text-indigo-500" />}
            {member.phase >= 10 && <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />}
          </div>
        </div>

        <div className="mb-4">
          <p className="font-black text-slate-900 truncate tracking-tight text-lg group-hover:text-indigo-600 transition-colors uppercase">{member.name}</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{member.role}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-50">
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-slate-300 font-black mb-1">Phase</p>
            <p className="text-sm font-black text-indigo-600">{member.phase}/12</p>
          </div>
          <div className="text-right">
            <p className="text-[9px] uppercase tracking-[0.2em] text-slate-300 font-black mb-1">Points</p>
            <p className="text-sm font-black text-slate-900">{(member.production / 1000).toFixed(1)}k</p>
          </div>
        </div>

        <button className="w-full mt-5 flex items-center justify-center gap-2 py-2 bg-slate-50 hover:bg-indigo-600 hover:text-white rounded-xl text-[10px] font-black text-slate-900 transition-all uppercase tracking-widest active:scale-95 shadow-sm">
          Analytics <MoreHorizontal className="w-3.5 h-3.5" />
        </button>
      </motion.div>

      {member.children && member.children.length > 0 && (
        <div className="mt-12 flex gap-12 relative">
          {/* Connection lines */}
          <div className="absolute top-[-30px] left-1/2 w-0.5 h-8 bg-slate-200"></div>
          {member.children.length > 1 && (
            <div className="absolute top-[-30px] left-[25%] right-[25%] h-0.5 bg-slate-200"></div>
          )}
          
          {member.children.map(child => (
            <MemberCard key={child.id} member={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function TeamTree() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Organization Map</h1>
          <p className="text-slate-500 mt-1">Visualize your hierarchy and secondary legs.</p>
        </div>
        <div className="flex gap-4 items-center bg-white p-2 rounded-xl shadow-sm border border-slate-100">
           <div className="px-3 py-1 flex items-center gap-2">
             <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
             <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Direct</span>
           </div>
           <div className="px-3 py-1 flex items-center gap-2 border-l border-slate-100">
             <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
             <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Secondary</span>
           </div>
        </div>
      </header>

      <div className="bg-white p-16 rounded-[40px] border border-slate-200 overflow-x-auto min-h-[700px] flex justify-center shadow-inner shadow-slate-50">
        <MemberCard member={mockTeam} depth={0} />
      </div>
    </div>
  );
}
