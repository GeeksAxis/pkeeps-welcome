import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
  NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY: z.string(),
  NEXT_PUBLIC_FLUTTERWAVE_SECRET_KEY: z.string(),
  NEXT_PUBLIC_FLUTTERWAVE_ENCRYPTION_KEY: z.string(),
});

export const getPublicEnv = () =>
  envSchema.parse({
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY:
      process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY,
    NEXT_PUBLIC_FLUTTERWAVE_SECRET_KEY:
      process.env.NEXT_PUBLIC_FLUTTERWAVE_SECRET_KEY,
    NEXT_PUBLIC_FLUTTERWAVE_ENCRYPTION_KEY:
      process.env.NEXT_PUBLIC_FLUTTERWAVE_ENCRYPTION_KEY,
  });
