import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import  { darkTheme, theme } from './src/theme';

export default function App() {
  const darkMode = true;
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider  theme={darkMode ? darkTheme : theme}>
        <SafeAreaProvider>
        <Navigation theme={darkMode ? DarkTheme : DefaultTheme} />
          <StatusBar />
        </SafeAreaProvider>
      </ThemeProvider>
    );
  }
}
