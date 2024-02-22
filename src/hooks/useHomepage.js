import { useQuery } from "@tanstack/react-query";

import { getHomepage } from "../services/apiHomepage";

export function useHomepage() {
  const {
    data: homepage,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["homepage"],
    queryFn: getHomepage,
  });

  return { homepage, isLoading, isError };
}
