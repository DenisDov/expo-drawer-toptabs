import { create } from 'zustand';

interface UserState {
  user: {
    token: string;
  };
}

const useUserStore = create<UserState>(set => ({
  user: {
    token: 'JWT 21131',
  },
}));

export default useUserStore;
