// supabase.js
import { createClient } from '@supabase/supabase-js';

console.log(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

// Get the Supabase URL and public API key from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
// console.log("supabase.auth : ", supabase.auth);