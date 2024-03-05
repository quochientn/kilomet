import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { getPost } from "../services/apiPosts";

export function usePost() {
  const { blogId } = useParams();

  const {
    data: post,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["post", blogId], queryFn: () => getPost(blogId) });

  return { post, isLoading, isError };
}
