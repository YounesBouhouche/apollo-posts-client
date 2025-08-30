import { useApolloClient } from "@apollo/client/react";
import type { DocumentNode } from "graphql";
import type { OperationVariables } from "@apollo/client";
import { useQuery } from "@tanstack/react-query";

export function useFetch<T>(
  query: DocumentNode,
  variables?: OperationVariables,
  key?: string,
  map: (data: any) => T = (data) => data as T,
  errorCheck: (data: any) => boolean = () => false,
  defaultValue?: T|null,
  // deps: React.DependencyList = []
): [T|null, boolean, Error|null, () => void] {
  const client = useApolloClient();

  const fetchData = async () => {
    const response = await client.query({
      query: query,
      variables: variables,
    })
    if (errorCheck(response.data)) {
      throw new Error('Error fetching data');
    }
    return response.data;
  }

  const {data, isFetching, error, refetch} = useQuery({
    queryFn: fetchData,
    queryKey: [key],
    initialData: defaultValue || null,
    select: map,
  });

  return [
    data || defaultValue || null,
    isFetching,
    error,
    refetch
  ];
}