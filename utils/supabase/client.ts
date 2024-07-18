// lib/client.js
import { createBrowserClient } from '@supabase/ssr';
import { Database } from '@/types_db';

// Define a function to create a Supabase client for client-side operations
export const createClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Ensure Supabase URL and Anon Key are provided
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase URL and Anon Key are required to create a Supabase client');
  }

  // Create and return the Supabase client
  return createBrowserClient<Database>(supabaseUrl, supabaseAnonKey);
}