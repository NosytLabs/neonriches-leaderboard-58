
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://bukzshfxeldicnjbhpjv.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1a3pzaGZ4ZWxkaWNuamJocGp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxMTg1MzMsImV4cCI6MjA1ODY5NDUzM30.yD7zwYkn7jjuh7-TaRaLtOvtbB7KP9P3TtnLU3bSwBA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
