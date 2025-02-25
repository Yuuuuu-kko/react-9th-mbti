import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  // user 정보 및 토큰 저장
  persist(
    immer((set) => ({
      user: null,
      accessToken: null,
      setUser: (user) => set({ user }),
      setToken: (accessToken) => set({ accessToken }),
      logout: () => set({ user: null, accessToken: null }),
    })),
    {
      name: "user",
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
