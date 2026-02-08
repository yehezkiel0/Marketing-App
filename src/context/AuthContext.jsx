import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { authService } from "../services/authService";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // 2. Listen for auth changes (SIGNED_IN, SIGNED_OUT, etc.)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Wrappers for auth actions
  const signIn = async (email, password) => {
    // The state update happens automatically via onAuthStateChange
    return authService.signIn(email, password);
  };

  const signOut = async () => {
    return authService.signOut();
  };

  const signUp = async (email, password, options) => {
    return authService.signUp(email, password, options);
  };

  const value = {
    signUp,
    signIn,
    signOut,
    user,
    session,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
