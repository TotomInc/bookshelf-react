import * as React from 'react';
import { useHistory } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';
import { Button, LinkButton } from '../../components/elements/Button';

export const Auth: React.FC = () => {
  const history = useHistory();

  const { setToken } = React.useContext(UserContext);

  const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setToken('logged');
    history.push('/book-list');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="mb-4 text-center text-4xl font-bold text-gray-900">Bookshelf React</h1>

      <p className="mb-6 text-gray-600 text-center text-lg">
        A React exercise using Google Books API and the React ecosystem.
      </p>

      <div className="flex">
        <Button className="mr-4" onClick={handleOnClick}>
          Login
        </Button>

        <LinkButton variant="secondary" href="https://github.com/TotomInc/bookshelf-react" target="_blank">
          Source-code
        </LinkButton>
      </div>
    </div>
  );
};
