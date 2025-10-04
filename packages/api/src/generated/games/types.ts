import { PaginatedResponse } from "../../types";

export interface Game {
  id: number;
  name: string;
  description: string;
}

export type GetGamesResponse = PaginatedResponse<Game[]>;
