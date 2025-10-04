export * from "./generated/types";

import {
  DefaultError,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
} from "@tanstack/react-query";

export type UseQueryRequestOptions<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> = Omit<
  UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  "queryKey" | "queryFn"
>;

export type UseMutationRequestOptions<
  TData = unknown,
  TError = DefaultError,
  TVariables = unknown,
> = Omit<UseMutationOptions<TData, TError, TVariables>, "mutationFn">;

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedResponse<T> {
  data: T;
  pagination: Pagination;
}
