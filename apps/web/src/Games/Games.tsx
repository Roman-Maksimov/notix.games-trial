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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@notix.games/ui/components/pagination";
import { cn } from "@notix.games/utils/cn";
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
  const [page, setPage] = useState(1);
  const { data } = useGetGamesQuery({ page });

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      startTransition(() => {
        setQuery(event.target.value);
      });
    },
    [],
  );

  const handleSetPrevPage = useCallback(() => {
    setPage((page) => Math.max(1, page - 1));
  }, []);

  const handleSetNextPage = useCallback(() => {
    setPage((page) =>
      Math.min(data?.data.pagination.totalPages ?? 1, page - 1),
    );
  }, [data?.data.pagination.totalPages]);

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

        <CardContent className="flex flex-col flex-1 gap-4 py-1 overflow-hidden">
          <Input className="flex-none" value={query} onChange={handleChange} />
          <div className="flex-1 overflow-auto border-y">
            <GamesList games={data?.data.data} />
          </div>
        </CardContent>

        <CardFooter>
          {data ? (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious onClick={handleSetPrevPage} />
                </PaginationItem>
                {new Array(data.data.pagination.totalPages)
                  .fill(true)
                  .map((_, index) => {
                    const currPage = index + 1;

                    return (
                      <PaginationItem key={index}>
                        <PaginationLink
                          className={cn(
                            "cursor-pointer",
                            page === currPage ? "bg-accent" : undefined,
                          )}
                          onClick={() => {
                            setPage(currPage);
                          }}
                        >
                          {currPage}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}
                <PaginationItem>
                  <PaginationNext onClick={handleSetNextPage} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          ) : (
            <div className="h-9" />
          )}
        </CardFooter>
      </Card>
    </div>
  );
};
