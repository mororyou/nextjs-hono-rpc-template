import { type QueryClientConfig } from '@tanstack/react-query';

export const TANSTACK_QUERY_CONFIG: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: Infinity,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
    },
  },
};
