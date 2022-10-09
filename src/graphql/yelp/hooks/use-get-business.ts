import useSWR, { SWRResponse } from 'swr';
import { fetcher as fetch } from '@gqlyelp/api/fetcher';
import { getBusinessQuery } from '@gqlyelp/queries/get-business';
import type { Business } from '@gqlyelp/types';

type UseGetBusinessVariables = {
  id: string;
};

async function fetcher(
  variables: UseGetBusinessVariables,
): Promise<Business> {
  const data = await fetch({
    query: getBusinessQuery,
    variables,
  });

  if (!data) return null;
  return data.business;
}

export default function useGetBusiness(
  { id }: UseGetBusinessVariables,
): SWRResponse<Business> {
  return useSWR(
    id ? [getBusinessQuery, { id }] : null,
    (_, variables) => fetcher(variables),
    { revalidateOnFocus: false, suspense: true },
  );
}