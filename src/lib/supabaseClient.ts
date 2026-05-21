import { createClient } from "@supabase/supabase-js";

// Placeholder values to prevent Next.js/Supabase from crashing on build/start when keys are missing.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://your-project-id.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "your-anon-public-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Checks if Supabase has been properly configured with real project keys.
 */
export const isSupabaseConfigured = (): boolean => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return !!(
    url &&
    url !== "https://your-project-id.supabase.co" &&
    key &&
    key !== "your-anon-public-key"
  );
};
