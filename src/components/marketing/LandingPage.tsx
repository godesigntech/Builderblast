import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Users, 
  Target, 
  ShieldCheck, 
  TrendingUp, 
  ChevronRight, 
  GraduationCap,
  ArrowRight
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="bg-slate-50 min-h-screen -mt-8 -mx-4 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                <Zap className="w-3.5 h-3.5 fill-indigo-600" /> Version 2.0 Now Live
              </div>
              <h1 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-8">
                The Operating System for <span className="text-indigo-600">Financial Education</span> Teams.
              </h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                BuilderBlast.ai (BizzallFlow) automates team duplication, licensing, and leadership progression for the modern financial giant.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/login" 
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-2 group"
                >
                  Start Building Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -translate-y-1/2 -ml-32 opacity-50"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -mr-48 opacity-50"></div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Platform Foundations</h2>
            <p className="text-slate-500 font-medium mt-2">Everything you need to automate your team growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'BizzallFlow Engine',
                desc: 'A structured 12-phase journey from simple prospecting to licensed leadership.',
                icon: Target,
                color: 'bg-indigo-600'
              },
              {
                title: 'Team Duplication',
                desc: 'Scale your organization with automated onboarding and milestone tracking.',
                icon: Users,
                color: 'bg-slate-900'
              },
              {
                title: 'Licensing Pipeline',
                desc: 'Manage exam schedules, Xcel access, and compliance status in real-time.',
                icon: GraduationCap,
                color: 'bg-indigo-500'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-[32px] border border-slate-200 shadow-xl shadow-slate-100 flex flex-col items-start"
              >
                <div className={`${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The 12 Phases Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 mb-4 block">The Methodology</span>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-none mb-8">
                Master the <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">12 Phases</span> of Agent Success.
              </h2>
              <div className="space-y-6">
                {[
                  'Phase 1-3: Prospecting & Signup',
                  'Phase 4-7: Licensing & Activation',
                  'Phase 8-10: Skill Mastery & Promotion',
                  'Phase 11-12: Leadership Track'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-indigo-600" />
                    </div>
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link 
                to="/login"
                className="inline-flex items-center gap-2 mt-12 text-sm font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-700"
              >
                Explore the full workflow <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex-1 bg-slate-100 p-8 rounded-[40px] border-2 border-dashed border-slate-200">
               <div className="bg-white rounded-3xl p-6 shadow-2xl space-y-4">
                  <div className="flex items-center gap-4 p-4 border border-slate-100 rounded-2xl bg-indigo-50/50">
                     <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black">5</div>
                     <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">Current Stage</p>
                        <p className="font-black text-slate-900">Licensing Track</p>
                     </div>
                  </div>
                  <div className="space-y-2">
                     <div className="flex justify-between text-[10px] font-black uppercase text-slate-400">
                        <span>Progress</span>
                        <span>85%</span>
                     </div>
                     <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-600 w-[85%]"></div>
                     </div>
                  </div>
                  <div className="pt-4 space-y-2">
                     <div className="flex items-center gap-2 text-sm text-slate-600">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" /> Quiz Completed
                     </div>
                     <div className="flex items-center gap-2 text-sm text-slate-600">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" /> Xcel Access Granted
                     </div>
                     <div className="flex items-center gap-2 text-sm text-slate-400">
                        <div className="w-4 h-4 border-2 border-slate-200 rounded" /> Schedule Exam
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/20 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8">
                Ready to blast your team's production?
              </h2>
              <Link 
                to="/login"
                className="inline-flex px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-indigo-50 transition-all shadow-xl shadow-indigo-900/20"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">BuilderBlast<span className="text-indigo-600">.ai</span></span>
          </div>
          <p className="text-sm text-slate-400 font-medium font-mono lowercase">© 2026 GEORGETTE NGUIEKOU • ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </div>
  );
}
