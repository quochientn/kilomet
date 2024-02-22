import supabase from "./supabase";

export async function getHomepage() {
  const { data, error } = await supabase.from("home").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Homepage data could not be loaded");
  }

  return data;
}
