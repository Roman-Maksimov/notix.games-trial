import { createCancellableRequest } from "../../client";
import { GetGamesRequest, GetGamesResponse } from "./types";

export const getGames = (params?: GetGamesRequest) => {
  return createCancellableRequest<GetGamesResponse>({
    method: "GET",
    url: "/api/games",
    params,
  });
};
