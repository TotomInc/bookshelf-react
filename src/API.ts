import { QueryFunctionContext } from 'react-query';

import { GetVolumesResponse } from './interfaces/google-books.interfaces';

type ReactQueryParams<T> = [string, T];

/**
 * Get a list of books for a specific query.
 *
 * @param params React-Query params.
 */
export const getVolumes = (
  params: QueryFunctionContext<ReactQueryParams<{ query: string }>>,
): Promise<GetVolumesResponse> => {
  const [, { query }] = params.queryKey;

  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`).then((response) => {
    if (!response.ok) {
      throw new Error(`Unable to retrieve getVolumes: error ${response.status}`);
    }

    return response.json() as Promise<GetVolumesResponse>;
  });
};
