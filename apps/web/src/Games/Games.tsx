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
import { Skeleton } from "@notix.games/ui/components/skeleton";
import { pluralize } from "@notix.games/utils/pluralize";
import { useDebouncedValue } from "@tanstack/react-pacer";
import {
  ChangeEventHandler,
  FC,
  startTransition,
  useCallback,
  useState,
} from "react";

import { GamesList } from "./GamesList";
import { GamesPagination } from "./GamesPagination";

export const Games: FC = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const [debouncedQuery] = useDebouncedValue(
    query,
    {
      wait: 500,
    },
    (state) => ({ isPending: state.isPending }),
  );

  const { data, isLoading } = useGetGamesQuery({
    page,
    query: debouncedQuery || undefined,
  });

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
            {isLoading ? (
              <Skeleton className="h-6 w-[60px] rounded-full" />
            ) : (
              <>
                {count} {pluralize(count, "игр", "игра", "игры")}
              </>
            )}
          </CardAction>
        </CardHeader>

        <CardContent className="flex flex-col flex-1 gap-4 py-1 overflow-hidden">
          <Input className="flex-none" value={query} onChange={handleChange} />
          <div className="flex-1 overflow-auto border-y">
            <GamesList games={data?.data.data} isLoading={isLoading} />
          </div>
        </CardContent>

        <CardFooter>
          <GamesPagination
            page={page}
            setPage={setPage}
            totalPages={data?.data.pagination.totalPages}
            isLoading={isLoading}
          />
        </CardFooter>
      </Card>
    </div>
  );
};
