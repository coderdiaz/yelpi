import useSWR, { SWRResponse } from 'swr';
import { fetcher as fetch } from '@gqlyelp/api/fetcher';
import { searchBusinessesQuery } from '@gqlyelp/queries/search-businesses.query';
import { Businesses } from '@gqlyelp/types';

type UseSearchBusinessesVariables = {
  term?: string;
  latitude?: number;
  longitude?: number;
};

async function fetcher(
  variables: UseSearchBusinessesVariables
): Promise<Businesses> {
  const data = await fetch({
    query: searchBusinessesQuery,
    variables,
  });

  if (!data) return null;
  return data.search;
}

export default function useSearchBusinesses(
  variables: UseSearchBusinessesVariables
): SWRResponse<Businesses> {
  return useSWR(
    [searchBusinessesQuery, variables],
    (_, variables) => fetcher(variables),
    { revalidateOnFocus: false },
  );
}