import { useGetGamesQuery } from "@notix.games/api/games";
import { FC } from "react";

export const Games: FC = () => {
  const { data } = useGetGamesQuery();

  return null;
};
