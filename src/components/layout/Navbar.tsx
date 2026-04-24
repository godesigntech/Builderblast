import React from 'react';
import { auth } from '../../lib/firebase';
import { signOut } from 'firebase/auth';
import { Link, useLocation } from 'react-router-dom';
import { LogOut, LayoutDashboard, Users, GraduationCap, Settings } from 'lucide-react';

export default function Navbar({ user, userData }: { user: any, userData: any }) {
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 px-6">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">BuilderBlast<span className="text-indigo-600">.ai</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link 
              to="/" 
              className={`${location.pathname === '/' ? 'text-indigo-600' : 'hover:text-slate-900'} flex items-center gap-2`}
            >
              <LayoutDashboard className="w-4 h-4" /> Dashboard
            </Link>
            {userData?.role === 'builder' && (
              <Link 
                to="/team" 
                className={`${location.pathname === '/team' ? 'text-indigo-600' : 'hover:text-slate-900'} flex items-center gap-2`}
              >
                <Users className="w-4 h-4" /> My Team
              </Link>
            )}
            {userData?.role === 'licensing_team' && (
              <Link 
                to="/pipeline" 
                className={`${location.pathname === '/pipeline' ? 'text-indigo-600' : 'hover:text-slate-900'} flex items-center gap-2`}
              >
                <GraduationCap className="w-4 h-4" /> Pipeline
              </Link>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold">{userData?.displayName || user.email?.split('@')[0]}</p>
            <p className="text-xs text-slate-500 capitalize">{userData?.role?.replace('_', ' ') || 'Agent'}</p>
          </div>
          <div className="w-10 h-10 bg-slate-200 rounded-full border-2 border-indigo-100 flex items-center justify-center overflow-hidden">
             {userData?.displayName?.[0] || user.email?.[0]?.toUpperCase()}
          </div>
          <button 
            onClick={() => signOut(auth)}
            className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
            title="Sign Out"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
