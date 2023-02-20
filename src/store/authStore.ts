import { create } from 'zustand';

type AuthState = {
  isAuthenticated: boolean;
  setAuthenticated: (authenticated: boolean) => void;
};

const useAuthStore = create<AuthState>(set => ({
  isAuthenticated: false,
  setAuthenticated: (authenticated: boolean) =>
    set({ isAuthenticated: authenticated }),
}));

export default useAuthStore;
