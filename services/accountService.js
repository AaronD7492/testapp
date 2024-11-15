// services/accountService.js
import { supabase } from "../utils/supabase";

export const createAccount = async (accountData) => {
  const { data, error } = await supabase.from("Account").insert([accountData]);

  if (error) throw new Error(error.message);
  return data;
};
