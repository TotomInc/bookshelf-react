import React from 'react';
import userEvent from '@testing-library/user-event';

import { screen, render, waitFor } from '../../lib/testing-utils';
import { BookList } from './BookList';

describe('BookList tests', () => {
  it('should render the BookList component', () => {
    render(<BookList />);

    expect(screen.getByPlaceholderText('Search a book and press Enter')).toBeInTheDocument();
  });

  it('should fetch a list of books when component is mounted', () => {
    render(<BookList />);

    expect(screen.getByText("Harry Potter à L'école des Sorciers")).toBeInTheDocument();
  });

  it('should display a loading container when updating the query', () => {
    render(<BookList />);

    const input = screen.getByPlaceholderText('Search a book and press Enter');

    userEvent.click(input);
    userEvent.keyboard('react');
    userEvent.keyboard('{Enter}');

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should change books when updating the input search query', async () => {
    expect.hasAssertions();

    render(<BookList />);

    userEvent.click(screen.getByPlaceholderText('Search a book and press Enter'));
    userEvent.keyboard('react');
    userEvent.keyboard('{Enter}');

    await waitFor(() => {
      expect(screen.getByText('Concevez des applications mobiles avec React Native')).toBeInTheDocument();
    });
  });

  it('should fetch the next page of books', async () => {
    expect.hasAssertions();

    render(<BookList />);

    userEvent.click(screen.getByText('Next page'));

    await waitFor(() => {
      expect(screen.getByText('Harry Potter et le prince de Sang-Mêlé')).toBeInTheDocument();
    });
  });

  it('should display load book from the previous page', async () => {
    expect.hasAssertions();

    render(<BookList />);

    userEvent.click(screen.getByText('Next page'));
    userEvent.click(screen.getByText('Previous page'));

    await waitFor(() => {
      expect(screen.getByText("Harry Potter à L'école des Sorciers")).toBeInTheDocument();
    });
  });

  it('should not have access to the next page if there are no more results to display', async () => {
    expect.hasAssertions();

    render(<BookList />);

    userEvent.click(screen.getByPlaceholderText('Search a book and press Enter'));
    userEvent.keyboard('vuejs');
    userEvent.keyboard('{Enter}');

    await screen.findByText('Vue.js - Framework JavaScript');

    userEvent.click(screen.getByText('Next page'));

    expect(screen.getByText('Vue.js - Framework JavaScript')).toBeInTheDocument();
  });

  it("should not have access to the previous page it's already on the first page", async () => {
    expect.hasAssertions();

    render(<BookList />);

    userEvent.click(screen.getByPlaceholderText('Search a book and press Enter'));
    userEvent.keyboard('vuejs');
    userEvent.keyboard('{Enter}');

    await screen.findByText('Vue.js - Framework JavaScript');

    userEvent.click(screen.getByText('Previous page'));

    expect(screen.getByText('Vue.js - Framework JavaScript')).toBeInTheDocument();
  });
});
