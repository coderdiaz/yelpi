import { handleFetchResponse } from './handle-fetch-response';
type Fetcher<T = any, B = any> = (options: FetcherOptions<B>) => T | Promise<T>;

export type FetcherOptions<Body = any> = {
  query?: string;
  variables?: any;
};

export const fetcher: Fetcher = async ({
  variables,
  query,
}) => {
  return handleFetchResponse(
    await fetch('/api/yelp', {
      method: 'POST',
      body: JSON.stringify({ query, variables }),
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': 'en_US',
        credentials: 'include',
      },
    }),
  );
}
