import supabase from "./supabase";

export async function getCoaches() {
  const { data, error } = await supabase
    .from("coaches")
    .select("id, name, image")
    .order("id", { ascending: true });

  if (error) {
    console.error(error);
    throw new Error("Coaches data could not be loaded");
  }

  return data;
}

export async function getCoach(id) {
  const { data, error } = await supabase
    .from("coaches")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Coach data could not be loaded");
  }

  return data;
}
