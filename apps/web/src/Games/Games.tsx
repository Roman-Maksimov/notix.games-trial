import { useGetGamesQuery } from "@notix.games/api/games";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@notix.games/ui/components/card";
import { Input } from "@notix.games/ui/components/input";
import { pluralize } from "@notix.games/utils/pluralize";
import {
  ChangeEventHandler,
  FC,
  startTransition,
  useCallback,
  useState,
} from "react";

import { GamesList } from "./GamesList";

export const Games: FC = () => {
  const [query, setQuery] = useState("");
  const { data } = useGetGamesQuery();

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      startTransition(() => {
        setQuery(event.target.value);
      });
    },
    [],
  );

  const count = data?.data.pagination.total ?? 0;

  return (
    <div className="h-screen overflow-hidden p-6">
      <Card className="w-full h-full mx-auto max-w-[800px]">
        <CardHeader>
          <CardTitle>Игры</CardTitle>
          <CardAction>
            {count} {pluralize(count, "игр", "игра", "игры")}
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 py-1 overflow-hidden">
          <Input className="flex-none" value={query} onChange={handleChange} />
          <div className="flex-1 overflow-auto border-y">
            <GamesList games={data?.data.data} />
          </div>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};
