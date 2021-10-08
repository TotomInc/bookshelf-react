import * as React from 'react';

import { BookVolumeItem } from '../../interfaces/google-books.interfaces';
import { Button, LinkButton } from '../../components/elements/Button';

type BookListItemProps = {
  book: BookVolumeItem;
};

/**
 * A book card that should receive data from Google Books API (`BookVolumeItem`).
 */
export const BookListItem: React.FC<BookListItemProps> = ({ book }) => {
  return (
    <div className="flex w-full my-4 p-6 mx-auto border rounded-sm border-slate-200 bg-white">
      <a href={`/books/${book.id}`} className="w-16 lg:w-32 min-w-[64px] lg:min-w-[128px] mr-6">
        <img
          className="block w-full h-auto"
          src={
            book.volumeInfo.imageLinks?.thumbnail ||
            book.volumeInfo.imageLinks?.smallThumbnail ||
            'https://www.ourbookshelves.com/media/pic_folder/default_pic/default.png'
          }
          alt={book.volumeInfo.title}
        />
      </a>

      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <h2 className="lg:mr-4 font-semibold text-lg text-blue-800 leading-tight">{book.volumeInfo.title}</h2>

          <div className="lg:w-24 lg:min-w-[96px] flex flex-col">
            {book.volumeInfo.authors ? (
              <p className="lg:text-right text-sm text-gray-700">{book.volumeInfo.authors[0]}</p>
            ) : null}

            <p className="lg:text-right text-sm text-gray-700">{book.volumeInfo.publisher}</p>
          </div>
        </div>

        <p
          className="overflow-hidden mb-4 text-sm text-gray-900"
          style={{ display: '-webkit-box', WebkitLineClamp: 10, WebkitBoxOrient: 'vertical' }}
        >
          {book.volumeInfo?.description}
        </p>

        <p className="mb-4 text-sm text-right text-gray-700">Published: {book.volumeInfo.publishedDate}</p>

        <div className="flex justify-end items-center">
          <Button className="mr-4">More details</Button>

          <LinkButton href={book.saleInfo.buyLink} target="_blank">
            Buy
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
