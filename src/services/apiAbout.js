import supabase from "./supabase";

export async function getAbout() {
  const { data, error } = await supabase.from("about").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("About data could not be loaded");
  }

  return data;
}
