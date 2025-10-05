import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";

import {
  GetGamesRequest,
  GetGamesResponse,
  UseQueryRequestOptions,
} from "../../types";
import { getGames } from "./requests";

export const API_KEY_GAMES_GETGAMES = "API_KEY_GAMES_GETGAMES";

export const useGetGamesQuery = (
  params?: GetGamesRequest,
  options?: UseQueryRequestOptions<AxiosResponse<GetGamesResponse>>,
) => {
  return useQuery<AxiosResponse<GetGamesResponse>>({
    queryKey: [API_KEY_GAMES_GETGAMES, params],
    queryFn: () => getGames(params),
    ...options,
  });
};
