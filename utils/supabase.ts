import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xzuoyqnlnnrfwokvlrxh.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6dW95cW5sbm5yZndva3ZscnhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MTM5ODMsImV4cCI6MjA0NzA4OTk4M30.lAHCDYXVwmvgJtTcaxz0a53ICDmD4KYQO67WM_TihzE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
