import { Game } from "@notix.games/api/types";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@notix.games/ui/components/item";
import { FC } from "react";

export interface GamesListProps {
  games?: Game[];
}

export const GamesList: FC<GamesListProps> = ({ games }) => {
  if (!games?.length) {
    return null;
  }

  return (
    <div className="flex flex-col gap-1">
      {games.map((game) => (
        <Item size="sm" key={game.id}>
          <ItemContent>
            <ItemTitle>{game.name}</ItemTitle>
            <ItemDescription>{game.description}</ItemDescription>
          </ItemContent>
        </Item>
      ))}
    </div>
  );
};
