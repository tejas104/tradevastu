import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://idrszriplyipbjnarewi.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_JzkaOsDCjB7ygIJ48Q9OkA_3b8u5B71";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
