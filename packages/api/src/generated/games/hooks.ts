import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";

import {
  GetGamesRequest,
  GetGamesResponse,
  UseQueryRequestOptions,
} from "../../types";
import { getGames } from "./requests";

export const API_KEY_GAMES_GETGAMES = "API_KEY_GAMES_GETGAMES";

const cancelRef: {
  current: null | (() => void);
} = {
  current: null,
};

export const useGetGamesQuery = (
  params?: GetGamesRequest,
  options?: UseQueryRequestOptions<AxiosResponse<GetGamesResponse>>,
) => {
  const query = useQuery<AxiosResponse<GetGamesResponse>>({
    queryKey: [
      API_KEY_GAMES_GETGAMES,
      params?.query ?? "",
      params?.page ?? 1,
      params?.limit ?? 10,
    ],
    queryFn: async () => {
      // Отменяем предыдущий запрос, если он существует
      if (cancelRef.current) {
        cancelRef.current();
      }

      const { request, cancel } = getGames(params);
      cancelRef.current = cancel;

      try {
        return await request;
      } finally {
        cancelRef.current = null;
      }
    },
    ...options,
  });

  return query;
};
