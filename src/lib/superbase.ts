import { createClient } from "@supabase/supabase-js";
import { getPublicEnv } from "@/config";

export const supabase = createClient(
  getPublicEnv().NEXT_PUBLIC_SUPABASE_URL,
  getPublicEnv().NEXT_PUBLIC_SUPABASE_ANON_KEY
);
