import { create } from "zustand";
import type { UserStore, IAccount } from "../../types";

export const useUserStore = create<UserStore>()((set) => ({
  account: {
    balance: "",
    account_number: 0,
  },
  setAccount: (account: IAccount) => {
    set((state) => ({ ...state, account: account }));
  },
}));
