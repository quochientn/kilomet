import supabase from "./supabase";

export async function getCoaches() {
  const { data, error } = await supabase
    .from("coaches")
    .select("id, name, image");

  if (error) {
    console.error(error);
    throw new Error("Coaches data could not be loaded");
  }

  return data;
}
