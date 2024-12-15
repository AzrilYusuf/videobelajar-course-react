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
      setUserData: (data) => {
        set(() => ({
          id: data.id,
          fullname: data.fullname,
          email: data.email,
          phone_number: data.phone_number,
        }));
        localStorage.setItem("isLoggedIn", "true");
        console.log(data);
      },

      getUserData: () => {
        const { fullname, email, phone_number } = get();
        // console.log(fullname, email, phone_number);
        return { fullname, email, phone_number };
      },
    }),

    // Configuration object
    {
      name: "user", // key to use in local storage
      partialize: (state) => ({ // Persist only spesific data
        fullname: state.fullname,
      }),
    }
  )
);
