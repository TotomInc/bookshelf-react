import * as React from 'react';

export type UserContextType = {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
};

export const UserContext = React.createContext<UserContextType>({
  token: null,
  setToken: () => null,
});
