import { useQuery } from "@tanstack/react-query";

import { getTraining } from "../services/apiTraining";

export function useTraning() {
  const {
    data: training,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["training"],
    queryFn: getTraining,
  });

  return { training, isLoading, isError };
}
