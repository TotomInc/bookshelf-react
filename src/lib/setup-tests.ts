/* eslint import/no-extraneous-dependencies: "off", no-console: "off" */
// Regenerator runtime is required when using async/await inside Jest tests.
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';
import fetch, { enableFetchMocks } from 'jest-fetch-mock';
import { setLogger } from 'react-query';

import volumesReactBooks from '../../__mocks__/get-volumes-react.json';
import volumesBooksNextPage from '../../__mocks__/get-volumes-next-page.json';
import volumesBooks from '../../__mocks__/get-volumes.json';

enableFetchMocks();

fetch.mockResponse((req) => {
  // When searching 'react' in the search query input.
  if (req.url.includes('googleapis.com/books/v1/volumes?q=react')) {
    return Promise.resolve(JSON.stringify(volumesReactBooks));
  }

  // When having the default list of books and retrieving the next page.
  if (req.url.includes('googleapis.com/books/v1/volumes') && req.url.includes('&startIndex=10')) {
    return Promise.resolve(JSON.stringify(volumesBooksNextPage));
  }

  // Default serch query.
  if (req.url.includes('googleapis.com/books/v1/volumes')) {
    return Promise.resolve(JSON.stringify(volumesBooks));
  }

  return Promise.reject(new Error(`Unsupported fetch URL mock: ${req.url}`));
});

// Mute react-query
setLogger({
  error: console.warn,
  log: console.log,
  warn: () => {},
});
