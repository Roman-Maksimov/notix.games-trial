import client from "../../client";
import { GetGamesRequest, GetGamesResponse } from "./types";

export const getGames = (params?: GetGamesRequest) => {
  return client.get<GetGamesResponse>("/api/games", { params });
};
