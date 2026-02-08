import { supabase } from "../lib/supabaseClient";

export const authService = {
  signUp: async (email, password, options = {}) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: options.name || "",
          ...options.data,
        },
      },
    });
    return { data, error };
  },

  signIn: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  getUser: async () => {
    const { data } = await supabase.auth.getUser();
    return data?.user;
  },

  getSession: async () => {
    const { data } = await supabase.auth.getSession();
    return data?.session;
  },

  // Reset Password (Email)
  resetPasswordForEmail: async (email) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + "/reset-password",
    });
    return { data, error };
  },

  // Update User (e.g. Password update after reset)
  updateUser: async (updates) => {
    const { data, error } = await supabase.auth.updateUser(updates);
    return { data, error };
  },
};
