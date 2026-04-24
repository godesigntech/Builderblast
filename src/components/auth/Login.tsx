import React, { useState } from 'react';
import { auth, db } from '../../lib/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { LogIn, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

const provider = new GoogleAuthProvider();

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      // Check if user exists in Firestore, if not create as 'agent' by default
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          role: 'agent',
          currentPhase: 1,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
      }
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/popup-closed-by-user') {
        setError('Login cancelled. Please try again.');
      } else if (err.code === 'auth/cancelled-by-user') {
        setError('Login was cancelled.');
      } else {
        setError(err.message || 'Failed to sign in');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-32 px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white p-10 rounded-[32px] shadow-2xl shadow-indigo-100 border border-slate-100 text-center"
      >
        <div className="mb-10">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-200">
            <span className="text-white font-black text-3xl">B</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">BuilderBlast<span className="text-indigo-600">.ai</span></h1>
          <p className="text-slate-400 mt-3 text-sm font-medium">The new standard for team duplication.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 text-xs font-bold uppercase tracking-widest rounded-xl border border-red-100">
            {error}
          </div>
        )}

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-4 bg-slate-900 text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 disabled:opacity-50 active:scale-95"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 brightness-0 invert" />
              Continue with Google
            </>
          )}
        </button>

        <div className="mt-10 pt-8 border-t border-slate-50">
          <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em] leading-relaxed">
            Enterprise Grade Security • SOC2 Compliant
          </p>
        </div>
      </motion.div>
    </div>
  );
}
