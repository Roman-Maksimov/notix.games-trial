import { Game } from "@notix.games/api/types";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@notix.games/ui/components/item";
import { Skeleton } from "@notix.games/ui/components/skeleton";
import { FC } from "react";

export interface GamesListProps {
  games?: Game[];
  isLoading?: boolean;
}

export const GamesList: FC<GamesListProps> = ({ games, isLoading }) => {
  return (
    <div className="flex flex-col gap-1">
      {isLoading
        ? new Array(10).fill(true).map((_, index) => (
            <div key={index} className="px-3 py-2.5">
              <Skeleton className="h-[70px] w-full rounded" />
            </div>
          ))
        : games?.map((game) => (
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
