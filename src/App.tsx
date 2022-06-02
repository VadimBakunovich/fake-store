import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

import { theme } from 'theme';
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
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </QueryClientProvider>
);
