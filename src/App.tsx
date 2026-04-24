/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { auth, db } from './lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Loader2 } from 'lucide-react';

// Components
import Navbar from './components/layout/Navbar';
import BuilderDashboard from './components/dashboard/BuilderDashboard';
import AgentDashboard from './components/dashboard/AgentDashboard';
import LicensingDashboard from './components/dashboard/LicensingDashboard';
import TeamTree from './components/team/TeamTree';
import Login from './components/auth/Login';
import LandingPage from './components/marketing/LandingPage';

interface UserData {
  role: 'builder' | 'agent' | 'licensing_team';
  displayName: string;
}

export default function App() {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data() as UserData);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUserData(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        {user && (
          <div className="sticky top-0 z-50">
            <Navbar user={user} userData={userData} />
          </div>
        )}
        <main className={`${user ? 'container mx-auto px-4 py-8' : ''}`}>
          <Routes>
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            
            <Route path="/" element={
              user ? (
                userData?.role === 'builder' ? <BuilderDashboard /> :
                userData?.role === 'licensing_team' ? <LicensingDashboard /> :
                <AgentDashboard />
              ) : <LandingPage />
            } />
            <Route path="/team" element={user && userData?.role === 'builder' ? <TeamTree /> : <Navigate to="/" />} />
            <Route path="/pipeline" element={user && userData?.role === 'licensing_team' ? <LicensingDashboard /> : <Navigate to="/" />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
