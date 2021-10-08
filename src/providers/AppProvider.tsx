import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { queryClient } from '../lib/react-query';
import { UserContext } from '../contexts/UserContext';

const ErrorFallback = () => (
  <div className="text-red-500 w-screen h-screen flex flex-col justify-center items-center" role="alert">
    <h2 className="text-lg font-semibold">Something went wrong. Try to refresh the page.</h2>
  </div>
);

export const AppProvider: React.FC = ({ children }) => {
  const [token, setToken] = React.useState<string | null>(null);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />

        <UserContext.Provider value={{ token, setToken }}>{children}</UserContext.Provider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};
