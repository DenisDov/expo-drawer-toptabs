import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance } from 'react-native';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface UiState {
  darkMode: boolean;
  toggleThemeMode: (darkMode: boolean) => void;
}

export const useUiStore = create<UiState>()(
  persist(
    (set, get) => ({
      darkMode: Appearance.getColorScheme() === 'dark',
      toggleThemeMode: () => set(state => ({ darkMode: !state.darkMode })),
    }),
    {
      name: 'ui-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: state => ({ darkMode: state.darkMode }),
    },
  ),
);

export default useUiStore;
