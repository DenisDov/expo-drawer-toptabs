import Navigation from '@app/navigation';
import { darkTheme, theme } from '@app/theme';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import { QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useUiStore from '@app/store/uiStore';

import { onAppStateChange, queryClient } from '@app/services/queryClient';

import { useAppState } from '@app/hooks/useAppState';
import { useCachedResources } from '@app/hooks/useCachedResources';
import { useOnlineManager } from '@app/hooks/useOnlineManager';

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
      <GestureHandlerRootView style={styles.root}>
        <ThemeProvider theme={darkMode ? darkTheme : theme}>
          <SafeAreaProvider>
            <QueryClientProvider client={queryClient}>
              <Navigation theme={darkMode ? DarkTheme : DefaultTheme} />
            </QueryClientProvider>
            <StatusBar backgroundColor="hsl(211, 100%, 50%)" />
          </SafeAreaProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
    );
  }
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
