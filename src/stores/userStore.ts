import { create } from "zustand";
import { UserStoreState } from "../interfaces/component.interface";
import { persist } from "zustand/middleware";

export const useUserStore = create<UserStoreState>()(
  //* To ensure the user data persists across reloads
  // ** Persist middleware needs 2 arguments (store, config) but only 1 argument for 'options'
  // Storage functions
  persist(
    (set, get) => ({
      id: 0,
      fullname: "",
      email: "",
      phone_number: "",
      avatar_url: "",
      setUserData: (data) => {
        set(() => ({
          id: data.id,
          fullname: data.fullname,
          email: data.email,
          phone_number: data.phone_number,
          avatar_url: data.avatar_url,
        }));
        localStorage.setItem("isLoggedIn", "true");
      },

      getUserData: () => {
        const { id, fullname, email, phone_number } = get();
        return { id, fullname, email, phone_number };
      },
      clearUserData: () => {
        set(() => ({
          id: 0,
          fullname: "",
          email: "",
          phone_number: "",
          avatar_url: "",
        }));
        localStorage.setItem("isLoggedIn", "false");
      }
    }),

    // Configuration object
    {
      name: "user", // key to use in local storage
      partialize: (state) => ({ // Persist only spesific data
        fullname: state.fullname,
        avatar_url: state.avatar_url,
      }),
      
    }
  )
);
