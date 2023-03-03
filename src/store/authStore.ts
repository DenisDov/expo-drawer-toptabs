import { create } from 'zustand';

type AuthState = {
  isAuthenticated: boolean;
  setAuthenticated: (authenticated: boolean) => void;
};

export const useAuthStore = create<AuthState>((set, get) => ({
  isAuthenticated: false,
  setAuthenticated: (authenticated: boolean) =>
    set({ isAuthenticated: authenticated }),
}));

export default useAuthStore;
