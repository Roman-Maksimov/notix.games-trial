import client from "../../client";
import { GetGamesResponse } from "./types";

export const getGames = () => {
  return client.get<GetGamesResponse>("/api/games");
};
