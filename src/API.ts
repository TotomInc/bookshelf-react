import { QueryFunctionContext } from 'react-query';

import { GetVolumesResponse } from './interfaces/google-books.interfaces';

type ReactQueryParams<T> = [string, T];

/**
 * Get a list of books for a specific query.
 *
 * @param params React-Query params.
 */
export const getVolumes = (
  params: QueryFunctionContext<ReactQueryParams<{ query: string; startIndex: number; maxResults: number }>>,
): Promise<GetVolumesResponse> => {
  const [, { query, startIndex, maxResults }] = params.queryKey;

  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
      query,
    )}&startIndex=${startIndex}&maxResults=${maxResults}`,
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Unable to retrieve getVolumes: error ${response.status}`);
    }

    return response.json() as Promise<GetVolumesResponse>;
  });
};
