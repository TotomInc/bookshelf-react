import { DefaultOptions, QueryClient } from 'react-query';

const queryClientConfig: DefaultOptions = {
  queries: {
    retry: false,
    retryOnMount: false,
    useErrorBoundary: true,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryClientConfig });
