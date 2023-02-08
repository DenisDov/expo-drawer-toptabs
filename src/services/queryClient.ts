import { focusManager, QueryCache, QueryClient } from '@tanstack/react-query';
import { AppStateStatus, Platform } from 'react-native';

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      // 🎉 only show error toasts if we already have data in the cache
      // which indicates a failed background update
      if (query.state.data !== undefined) {
        console.error(`Something went wrong: ${error.message}`);
      }
    },
  }),
  defaultOptions: {
    queries: {
      retry: 2,
      // networkMode: 'always',
    },
  },
});

// refetch when the App is focused
export function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}
