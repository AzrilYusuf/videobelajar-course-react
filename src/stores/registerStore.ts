import React from "react";
import { create } from "zustand";
import { AuthState, UserProfile } from "../interfaces/interfaces";

export const useAuthStore = create<AuthState>((set, get) => ({
  fullname: "",
  email: "",
  phone_number: "",
  password: "",
  setFullname: (e: React.ChangeEvent<HTMLInputElement>) => set(() => ({ fullname: e.target.value })),
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => set(() => ({ email: e.target.value })),
  setPhoneNumber: (e: React.ChangeEvent<HTMLInputElement>) => set(() => ({ phone_number: e.target.value })),
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => set(() => ({ password: e.target.value })),
  saveProfile: () =>
    set((state) => {
      const userData: UserProfile = {
        fullname: state.fullname,
        email: state.email,
        phone_number: state.phone_number,
        password: state.password,
      };
      localStorage.setItem("userProfile", JSON.stringify(userData));
      console.log("Profile saved: ", userData);
      return state;
    }),
    login: () => {
        const { email, password } = get();
        const storedProfile = localStorage.getItem("userProfile");
        if (storedProfile) {
            const { email: storedEmail, password: storedPassword } = JSON.parse(storedProfile);
            if (email === storedEmail && password === storedPassword) {
                localStorage.setItem("isLoggedIn", "true");
                return true;
            }
        }
        return false;
    },
}));
