import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type AuthState = {
  isAuthenticated: boolean;
  setAuthenticated: (authenticated: boolean) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      setAuthenticated: (authenticated: boolean) =>
        set({ isAuthenticated: authenticated }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: state => ({ isAuthenticated: state.isAuthenticated }),
    },
  ),
);

export default useAuthStore;
