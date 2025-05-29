import { supabase } from "./supabase";

export async function getAllMeals() {
  const { data, error } = await supabase.from("meals").select("*").order("id");

  if (error) {
    console.error(error);
    throw new Error("Meals could not be loaded");
  }

  return data;
}

export async function getMealsByCategory(category: string) {
  const { data, error } = await supabase.from("meals").select("*").eq("category", category);

  if (error) {
    console.error(error);
    throw new Error("Meals could not be loaded");
  }
  return data;
}
