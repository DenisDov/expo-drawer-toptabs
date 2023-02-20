import { create } from 'zustand';

interface UserState {
  user: {
    token: string;
  };
}

const useUserStore = create<UserState>(set => ({
  user: {
    token: '',
  },
}));

export default useUserStore;
