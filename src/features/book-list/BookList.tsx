import * as React from 'react';
import { useQuery } from 'react-query';

import { getVolumes } from '../../API';
import { Button } from '../../components/elements/Button';
import { BookListItem } from './BookListItem';

export const BookList: React.FC = () => {
  const [inputQuery, setInputQuery] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('Harry Potter');
  const [startIndex, setStartIndex] = React.useState(0);
  const [maxResults] = React.useState(10);
  const [resultsCount, setResultsCount] = React.useState(0);

  const { data, isLoading } = useQuery(['getVolumes', { query: searchQuery, startIndex, maxResults }], getVolumes);

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputQuery(event.target.value);
  };

  const handleOnKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      setStartIndex(0);
      setSearchQuery(inputQuery);
    }
  };

  const handleNextPage: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (startIndex + maxResults < resultsCount) {
      setStartIndex(startIndex + maxResults);
    }
  };

  const handlePreviousPage: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (startIndex - maxResults >= 0) {
      setStartIndex(startIndex - maxResults);
    }
  };

  React.useEffect(() => {
    if (data && data.totalItems) {
      setResultsCount(data.totalItems);
    }
  }, [data]);

  return (
    <div className="max-w-xl mx-auto py-8 px-4 lg:px-0">
      <input
        className="w-full h-10 px-2 mb-4 rounded-sm font-medium text-lg text-gray-900 bg-slate-200 ring-blue-300 transition focus:ring focus:outline-none"
        placeholder="Search a book and press Enter"
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
      />

      <div className="flex items-center justify-end">
        <Button variant="secondary" className="mr-4" onClick={handlePreviousPage}>
          Previous page
        </Button>

        <Button variant="secondary" onClick={handleNextPage}>
          Next page
        </Button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center w-full p-6 mt-4 border border-slate-200 bg-white">
          <p className="font-medium text-xl text-center text-gray-900">Loading...</p>
        </div>
      ) : null}

      <ul>
        {data && data.items
          ? data.items.map((item) => (
              <li key={item.id} aria-label={item.volumeInfo.title}>
                <BookListItem book={item} />
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};
