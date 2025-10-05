import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@notix.games/ui/components/pagination";
import { Skeleton } from "@notix.games/ui/components/skeleton";
import { cn } from "@notix.games/utils/cn";
import { Dispatch, FC, SetStateAction, useCallback } from "react";

export interface GamesPaginationProps {
  page: number;
  setPage: Dispatch<SetStateAction<GamesPaginationProps["page"]>>;
  totalPages?: number;
  isLoading?: boolean;
}

export const GamesPagination: FC<GamesPaginationProps> = ({
  page,
  setPage,
  totalPages,
  isLoading,
}) => {
  const handleSetPrevPage = useCallback(() => {
    setPage((page) => Math.max(1, page - 1));
  }, [setPage]);

  const handleSetNextPage = useCallback(() => {
    setPage((page) => Math.min(totalPages ?? 1, page - 1));
  }, [setPage, totalPages]);

  if (isLoading) {
    return <Skeleton className="h-9 w-[484px] rounded m-auto" />;
  }

  if (!totalPages) {
    return <div className="h-9" />;
  }

  // TODO: для пагинации нужен отдельный запрос
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handleSetPrevPage} />
        </PaginationItem>
        {new Array(totalPages).fill(true).map((_, index) => {
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
  );
};
