import { supabase } from "../lib/supabaseClient";

export const api = {
  // Campaigns
  getCampaigns: async () => {
    const { data, error } = await supabase
      .from("campaigns")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
  },

  createCampaign: async (campaign) => {
    const { data, error } = await supabase
      .from("campaigns")
      .insert([campaign])
      .select();

    if (error) throw error;
    return data[0];
  },

  updateCampaign: async (id, updates) => {
    const { data, error } = await supabase
      .from("campaigns")
      .update(updates)
      .eq("id", id)
      .select();

    if (error) throw error;
    return data[0];
  },

  deleteCampaign: async (id) => {
    const { error } = await supabase.from("campaigns").delete().eq("id", id);

    if (error) throw error;
    return true;
  },

  // Analytics
  getAnalytics: async (range = "7d") => {
    // Determine date range logic here if needed
    const { data, error } = await supabase
      .from("analytics_daily")
      .select("*")
      .order("date", { ascending: true })
      .limit(30);

    if (error) throw error;
    return data;
  },

  // User Profile
  getProfile: async (userId) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (error) throw error;
    return data;
  },

  updateProfile: async (userId, updates) => {
    const { data, error } = await supabase
      .from("profiles")
      .update(updates)
      .eq("id", userId)
      .select();

    if (error) throw error;
    return data[0];
  },
};
