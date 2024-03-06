import { useQuery } from "@tanstack/react-query";

import { getCoaches } from "../services/apiCoaches";

export function useCoaches() {
  const {
    data: coaches,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["coaches"],
    queryFn: getCoaches,
  });

  return { coaches, isLoading, isError };
}
