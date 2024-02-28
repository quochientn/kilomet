import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { getCoach } from "../services/apiCoaches";

export function useCoach() {
  const { coachId } = useParams();

  const {
    data: coach,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["coach"],
    queryFn: () => getCoach(coachId),
  });

  return { coach, isLoading, isError };
}
