import { FetcherError } from './errors';

export function getError(errors: any[], status: number) {
  errors = errors ?? [{ message: 'Failed to fetch API' }];
  status =
    errors && errors.length
      ? errors[0]?.extensions?.response?.statusCode
      : status;

  return new FetcherError({ errors, status });
}

export async function getAsyncError(res: Response) {
  const data = await res.json();
  return getError(data.errors, res.status);
}

export const handleFetchResponse = async (res: Response) => {
  if (res.ok) {
    const { data, errors } = await res.json();

    if (errors && errors.length) {
      throw getError(errors, res.status);
    }

    return data;
  }

  throw await getAsyncError(res);
};
