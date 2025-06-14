// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../libs/supabaseClient';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen for auth state changes
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Check for active session on mount
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user ?? null);
      setLoading(false);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // OAuth sign-in method
  const signInWithProvider = (provider) => {
    supabase.auth.signInWithOAuth({ provider });
  };

  const signOut = () => {
    supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signInWithProvider, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
