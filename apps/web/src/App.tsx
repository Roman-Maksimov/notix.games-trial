import queryClient from "@notix.games/api/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";

import { Games } from "./Games/Games";

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Games />
    </QueryClientProvider>
  );
};
