import supabase from "./supabase";

export async function getTraining() {
  const { data, error } = await supabase.from("training").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Training data could not be loaded");
  }

  return data;
}
