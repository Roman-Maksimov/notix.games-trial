import { PaginatedResponse } from "../../types";

export interface Game {
  id: number;
  name: string;
  description: string;
}

export interface GetGamesRequest {
  query?: string;
  page?: number;
  limit?: number;
}

export type GetGamesResponse = PaginatedResponse<Game[]>;
