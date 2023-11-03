import { create } from "zustand";
import type { AuthStore, IUser } from "../../types";

export const useAuthStore = create<AuthStore>()((set) => ({
  access: "",
  refresh: "",
  user: {
    id: 0,
    name: "",
    email: "",
  },

  setUser: (user: IUser) => {
    set((state) => ({ ...state, user: user }));
  },

  setAccess: (access) => {
    set((state) => ({ ...state, access: access }));
  },
  setRefresh: (refresh) => {
    set((state) => ({
      ...state,
      refresh: refresh,
    }));
  },
  cleanToken: () =>
    set((state) => ({
      access: "",
      refresh: "",
    })),
}));
