import { useQuery } from "@tanstack/react-query";
import { getAbout } from "../services/apiAbout";

export function useAbout() {
  const {
    data: about,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["about"],
    queryFn: getAbout,
  });

  return { about, isLoading, isError };
}
