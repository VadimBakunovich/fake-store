import { QueryClient, QueryClientProvider } from 'react-query';

import { AppRouter } from 'router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      cacheTime: 300000,
    }, // These options already have these values by default
  }, // (they are presented here in case of configuration).
});

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppRouter />
  </QueryClientProvider>
);
