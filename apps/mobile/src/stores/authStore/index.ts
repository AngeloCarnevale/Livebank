import { create } from "zustand";
import type { AuthStore } from "../../types";


export const useAuthStore = create<AuthStore>()(((set) => ({
    access: '',
    refresh: '',

    setAccess: (access) => {
        set(state => ({ ...state, access: access }))
    },
    setRefresh: (refresh) => {
        set(state => ({
            ...state, refresh: refresh
        }))
    },
    cleanToken: () => set(state => ({
        access: '',
        refresh: '',
    }),
    ),
})
));