import * as React from 'react';
import { useQuery } from 'react-query';

import { getVolumes } from '../../API';
import { BookListItem } from './BookListItem';

export const BookList: React.FC = () => {
  const [inputQuery, setInputQuery] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('Harry Potter');

  const { data } = useQuery(['getVolumes', { query: searchQuery }], getVolumes);

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputQuery(event.target.value);
  };

  const handleOnKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      setSearchQuery(inputQuery);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-8">
      <input
        className="w-full h-10 px-2 rounded-sm font-medium text-lg text-gray-900 bg-slate-200 ring-blue-300 transition focus:ring focus:outline-none"
        placeholder="Search a book and press Enter"
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
      />

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
