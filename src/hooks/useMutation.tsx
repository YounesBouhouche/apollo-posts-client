import { useMutation } from "@apollo/client/react";
import type { DocumentNode } from "graphql";
import type { OperationVariables } from "@apollo/client";

export function useMutate<T>(
  mutation: DocumentNode,
  map: (data: any) => T = (data) => data as T,
): [T|null, boolean, Error|null, (vars: OperationVariables) => void] {
  const [mutate, { data, loading, error }] = useMutation(mutation);

  return [
    data ? map(data) : null,
    loading,
    error ? new Error(error.message) : null,
    mutate
  ];
}