import supabase from "./supabase";

export async function getPosts() {
  const { data, error } = await supabase
    .from("posts")
    .select("id, title, subTitle, created_at, thumbnail")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    throw new Error("Posts data could not be loaded");
  }

  return data;
}

export async function getPost(id) {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Post data could not be loaded");
  }

  return data;
}
