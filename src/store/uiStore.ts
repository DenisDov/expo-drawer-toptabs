import { Appearance } from 'react-native';
import { create } from 'zustand';

interface UiState {
  //   bears: number;
  darkMode: boolean;
  toggleThemeMode: () => boolean;
}

const useUiStore = create<UiState>(set => ({
  darkMode: Appearance.getColorScheme() === 'dark',
  //   bears: 0,
  //   increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
  toggleThemeMode: () => set(state => ({ darkMode: !state.darkMode })),
}));

export default useUiStore;
