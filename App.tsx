import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import { QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import { Provider as PaperProvider } from 'react-native-paper';
import useUiStore from './src/store/uiStore';

import { onAppStateChange, queryClient } from './src/services/queryClient';

import { useAppState } from './src/hooks/useAppState';
import { useCachedResources } from './src/hooks/useCachedResources';
import { useOnlineManager } from './src/hooks/useOnlineManager';
import Navigation from './src/navigation';
import { darkTheme, theme } from './src/theme';

const App = () => {
  const darkMode = useUiStore(state => state.darkMode);
  const isLoadingComplete = useCachedResources();

  //auto refetch on reconnect
  useOnlineManager();
  // trigger an update when the app state changes to "active"
  useAppState(onAppStateChange);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <SafeAreaProvider>
          <QueryClientProvider client={queryClient}>
            <Navigation theme={darkMode ? DarkTheme : DefaultTheme} />
          </QueryClientProvider>
          <StatusBar backgroundColor="hsl(211, 100%, 50%)" />
        </SafeAreaProvider>
      </ThemeProvider>
    );
  }
};

export default App;
