import { create } from "zustand";
// import { persist } from "zustand/middleware";
import { AdminStoreState } from "../interfaces/store.interface";

export const useAdminStore = create<AdminStoreState>()(
        (set) => ({
            role: "admin",
            allAdmins: [],
            allUsers: [],
            setAllAdmins: (data) => set({ allAdmins: data }),
            setAllUsers: (data) => set({ allUsers: data }),
        }),
        
    )