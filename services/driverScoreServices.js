// services/driverScoreService.js
import { supabase } from "../utils/supabase";

export const fetchDriverScore = async () => {
  const { data, error } = await supabase
    .from("DriverScore")
    .select("ScoreValue")
    .limit(1); // Adjust the query as needed

  if (error) throw new Error(error.message);
  return data[0]?.ScoreValue || "No score available";
};
